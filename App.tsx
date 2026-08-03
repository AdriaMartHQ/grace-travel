import React from 'react';
import { Navigate, useLocation, useRoutes, type RouteObject } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import type { Language, BaseTranslations } from './translations';
import { ROUTES } from './lib/routes.manifest.mjs';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import About from './pages/About';
import AirportTransfer from './pages/AirportTransfer';
import ItineraryS1 from './pages/ItineraryS1';
import ItineraryS2 from './pages/ItineraryS2';
import ItineraryS4 from './pages/ItineraryS4';
import ItineraryS5 from './pages/ItineraryS5';
import ItineraryZ5 from './pages/ItineraryZ5';
import ItineraryZ1 from './pages/ItineraryZ1';
import ItineraryZ2 from './pages/ItineraryZ2';
import ItineraryZ6 from './pages/ItineraryZ6';
import ItineraryI1 from './pages/ItineraryI1';
import ItineraryB1 from './pages/ItineraryB1';
import ItineraryB2 from './pages/ItineraryB2';

// Keyed by the `id` field in lib/routes.manifest.mjs. The manifest owns the paths;
// this map owns the components. apply-prerender.mjs fails the build if the two drift.
const PAGES: Record<string, React.ComponentType> = {
  Home,
  Tours,
  AirportTransfer,
  Tickets,
  About,
  Contact,
  ItineraryS1,
  ItineraryS2,
  ItineraryS4,
  ItineraryS5,
  ItineraryZ1,
  ItineraryZ2,
  ItineraryZ5,
  ItineraryZ6,
  ItineraryI1,
  ItineraryB1,
  ItineraryB2,
};

// Dev-only pages are loaded through a DEV-gated dynamic import so Rollup drops them from
// the production bundle entirely — a static import would ship the code even if the route
// were guarded, leaving it reachable via the SPA fallback.
const DEV_PAGES: Record<string, React.LazyExoticComponent<React.ComponentType>> = import.meta.env.DEV
  ? { StyleGuide: React.lazy(() => import('./pages/StyleGuide')) }
  : {};

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

    const Page = PAGES[route.id!];
    if (!Page) {
      // Throw rather than skip. Skipping would render the Layout shell for that path —
      // large enough to satisfy prerender's "root too small" check and to produce a
      // dist/<route>/index.html, so the build invariant would pass and an empty page
      // would ship with a 200. Failing here instead makes `npm run prerender` and the
      // CI build stop, which is the only safe outcome.
      throw new Error(
        `[routes] manifest entry "${route.path}" has no component for id "${route.id}" — ` +
          `add it to the PAGES map in App.tsx or remove the entry from lib/routes.manifest.mjs`,
      );
    }
    objects.push({ path: route.path, element: <Page /> });
  }

  return objects;
};

const ROUTE_OBJECTS = buildRouteObjects();

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
