import React from 'react';
import { Navigate, matchRoutes, useLocation, useRoutes, type RouteObject } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import type { Language, BaseTranslations } from './translations';
import { ROUTES } from './lib/routes.manifest.mjs';
import Layout from './components/Layout';
import Home from './pages/Home';

type PageModule = { default: React.ComponentType };

// Every page except Home is its own chunk. With all 17 pages imported statically the entry
// bundle was 617 KB, and a visitor landing on one itinerary downloaded the other ten.
// Home stays static: it is the most common entry point and the target of most in-app
// navigation, so it should never wait on a second request.
//
// Keyed by the `id` field in lib/routes.manifest.mjs. The manifest owns the paths;
// this map owns the components. A manifest id with no entry here throws at module load.
const PAGE_LOADERS: Record<string, () => Promise<PageModule>> = {
  Home: () => Promise.resolve({ default: Home }),
  Tours: () => import('./pages/Tours'),
  AirportTransfer: () => import('./pages/AirportTransfer'),
  Tickets: () => import('./pages/Tickets'),
  About: () => import('./pages/About'),
  Contact: () => import('./pages/Contact'),
  ItineraryS1: () => import('./pages/ItineraryS1'),
  ItineraryS2: () => import('./pages/ItineraryS2'),
  ItineraryS4: () => import('./pages/ItineraryS4'),
  ItineraryS5: () => import('./pages/ItineraryS5'),
  ItineraryZ1: () => import('./pages/ItineraryZ1'),
  ItineraryZ2: () => import('./pages/ItineraryZ2'),
  ItineraryZ5: () => import('./pages/ItineraryZ5'),
  ItineraryZ6: () => import('./pages/ItineraryZ6'),
  ItineraryI1: () => import('./pages/ItineraryI1'),
  ItineraryB1: () => import('./pages/ItineraryB1'),
  ItineraryB2: () => import('./pages/ItineraryB2'),
};

// Components resolved BEFORE the first render (see preloadRoute). React.lazy suspends on
// its first render even when the underlying import() has already settled, and because
// index.tsx uses createRoot — not hydrateRoot — that one suspended frame would wipe the
// prerendered HTML and paint the fallback. A page found here renders synchronously instead.
const EAGER: Record<string, React.ComponentType> = { Home };

const LAZY: Record<string, React.LazyExoticComponent<React.ComponentType>> = {};
// React.lazy caches a rejection forever, so a failed chunk must drop its cache entry or
// coming back to that page later could never refetch it.
const lazyPage = (id: string) =>
  (LAZY[id] ??= React.lazy(() =>
    PAGE_LOADERS[id]().catch((err) => {
      delete LAZY[id];
      throw err;
    }),
  ));

// Dev-only pages are loaded through a DEV-gated dynamic import so Rollup drops them from
// the production bundle entirely — a static import would ship the code even if the route
// were guarded, leaving it reachable via the SPA fallback.
const DEV_PAGES: Record<string, React.LazyExoticComponent<React.ComponentType>> = import.meta.env.DEV
  ? { StyleGuide: React.lazy(() => import('./pages/StyleGuide')) }
  : {};

// Shown only on in-app navigation to a page whose chunk is not cached yet. Tall enough
// that the footer does not jump up under the navbar while the chunk loads.
const PageFallback = () => (
  <div className="pt-24 min-h-screen flex items-center justify-center" role="status" aria-busy="true">
    <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-[#FF9D00] animate-spin" />
  </div>
);

const CHUNK_ERROR_TEXT: Record<Language, { message: string; reload: string }> = {
  zh: { message: '页面加载出错，请重新加载。', reload: '重新加载' },
  en: { message: 'Something went wrong loading this page. Please reload.', reload: 'Reload' },
  tr: { message: 'Sayfa yüklenirken bir sorun oluştu. Lütfen yeniden yükleyin.', reload: 'Yeniden yükle' },
};

// A chunk fetch can fail on the lossy HK↔mainland link. Without a boundary that rejection
// unmounts the whole app to a blank page. It also catches ordinary render errors in a page,
// so the copy stays generic rather than blaming the network.
class ChunkErrorBoundary extends React.Component<
  { language: Language; children: React.ReactNode },
  { failed: boolean }
> {
  // The project ships without @types/react, so React.Component is untyped and `props`
  // has to be declared by hand.
  declare props: { language: Language; children: React.ReactNode };
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;
    const text = CHUNK_ERROR_TEXT[this.props.language] ?? CHUNK_ERROR_TEXT.en;
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6" role="alert">
        <p className="text-slate-600">{text.message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-bold"
        >
          {text.reload}
        </button>
      </div>
    );
  }
}

const PageSlot: React.FC<{ id: string }> = ({ id }) => {
  const { language } = useLanguage();
  // Decided once per mount. Flipping from the lazy to the eager component mid-life would
  // change the element type and remount the page, dropping e.g. a half-filled transfer form.
  const [Page] = React.useState<React.ComponentType>(() => EAGER[id] ?? lazyPage(id));
  return (
    <ChunkErrorBoundary language={language}>
      <React.Suspense fallback={<PageFallback />}>
        <Page />
      </React.Suspense>
    </ChunkErrorBoundary>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

// Built as route *objects* rather than <Route> JSX: this table is data, and useRoutes
// consumes it without the per-element `key` that JSX lists require.
const buildRouteObjects = (): RouteObject[] => {
  const objects: RouteObject[] = [];

  for (const route of ROUTES) {
    if (route.kind === 'redirect') {
      objects.push({ path: route.path, element: <Navigate to={route.to!} replace /> });
      continue;
    }

    if (route.kind === 'devOnly') {
      const DevPage = DEV_PAGES[route.id!];
      if (!DevPage) continue; // production: the route does not exist at all
      objects.push({
        path: route.path,
        element: (
          <React.Suspense fallback={null}>
            <DevPage />
          </React.Suspense>
        ),
      });
      continue;
    }

    if (!PAGE_LOADERS[route.id!]) {
      // Throw rather than skip. Skipping would render the Layout shell for that path —
      // large enough to satisfy prerender's "root too small" check and to produce a
      // dist/<route>/index.html, so the build invariant would pass and an empty page
      // would ship with a 200. Failing here instead makes `npm run prerender` and the
      // CI build stop, which is the only safe outcome.
      throw new Error(
        `[routes] manifest entry "${route.path}" has no component for id "${route.id}" — ` +
          `add it to the PAGE_LOADERS map in App.tsx or remove the entry from lib/routes.manifest.mjs`,
      );
    }
    // `key` so that navigating between two lazy pages remounts the slot (and its error
    // boundary) instead of reusing one whose component was fixed at first mount.
    objects.push({ path: route.path, handle: { pageId: route.id }, element: <PageSlot key={route.id} id={route.id!} /> });
  }

  return objects;
};

const ROUTE_OBJECTS = buildRouteObjects();

// Called by index.tsx before createRoot, in parallel with the translations fetch: resolve
// the page the visitor actually landed on so the first React frame already contains it and
// replaces the prerendered HTML like-for-like. Never rejects — if the chunk fails here the
// page falls back to the lazy path, where ChunkErrorBoundary offers a reload.
export const preloadRoute = async (pathname: string): Promise<void> => {
  const match = matchRoutes(ROUTE_OBJECTS, pathname)?.at(-1);
  const id = (match?.route.handle as { pageId?: string } | undefined)?.pageId;
  if (!id || EAGER[id]) return;
  try {
    EAGER[id] = (await PAGE_LOADERS[id]()).default;
  } catch {
    /* fall through to the lazy path */
  }
};

const AppContent: React.FC = () => {
  return <Layout>{useRoutes(ROUTE_OBJECTS)}</Layout>;
};

const App: React.FC<{ initialLang: Language; initialT: BaseTranslations }> = ({ initialLang, initialT }) => {
  return (
    <LanguageProvider initialLang={initialLang} initialT={initialT}>
      <ScrollToTop />
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
