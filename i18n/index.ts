import type { BaseTranslations, Language } from '../translations';

// Per-language translation chunks — loaded on demand so only the ACTIVE language ships
// in the entry path (was: all of en+zh+tr statically bundled into the main chunk).
const loaders: Record<Language, () => Promise<BaseTranslations>> = {
  en: () => import('./en').then((m) => m.default),
  zh: () => import('./zh').then((m) => m.default),
  tr: () => import('./tr').then((m) => m.default),
};

export const loadTranslations = (lang: Language): Promise<BaseTranslations> =>
  (loaders[lang] ?? loaders.en)();

// Synchronous initial-language detection: URL ?lang → localStorage → browser → default 'en'.
// Used by the index.tsx bootstrap to pick which chunk to await before first render.
export const getInitialLanguage = (): Language => {
  try {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang') as Language;
    if (langParam && ['en', 'zh', 'tr'].includes(langParam)) return langParam;

    const stored = localStorage.getItem('gw_lang') as Language;
    if (stored && ['en', 'zh', 'tr'].includes(stored)) return stored;

    const browserLangs = navigator.languages || [navigator.language];
    for (const bl of browserLangs) {
      const l = bl.toLowerCase();
      if (l.startsWith('zh')) return 'zh';
      if (l.startsWith('tr')) return 'tr';
    }
  } catch {
    /* no window (SSR/edge) — fall through to default */
  }
  return 'en';
};
