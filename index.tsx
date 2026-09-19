
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App, { preloadRoute } from './App';
import './index.css';
import { getInitialLanguage, loadTranslations } from './i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Await ONLY the active language's translations before first render. Until this resolves
// the prerendered HTML stays on screen; once it does, React renders with `t` available
// synchronously (no Suspense/fallback flash). Other languages load on demand when switched.
(async () => {
  let lang = getInitialLanguage();
  let initialT;
  // Pages are code-split; fetch the landing page's chunk alongside the translations so the
  // first frame already contains it (see EAGER in App.tsx). preloadRoute never rejects.
  const pageReady = preloadRoute(window.location.pathname);
  try {
    initialT = await loadTranslations(lang);
  } catch {
    // Active-language chunk failed to fetch (cross-border flake / cache drift): fall back to
    // English so the app always mounts. Keep lang+content consistent to avoid a mixed UI.
    lang = 'en';
    initialT = await loadTranslations('en');
  }
  await pageReady;
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App initialLang={lang} initialT={initialT} />
      </BrowserRouter>
    </React.StrictMode>
  );
})();
