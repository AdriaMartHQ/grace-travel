
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '../translations';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const HINT_MESSAGES = {
  zh: '已根据您的浏览器语言切换为中文，您可以在右上角随时更改',
  en: 'Language set to English based on your browser settings',
  tr: 'Dil tarayıcı ayarlarınıza göre Türkçe olarak ayarlandı'
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Initial detection logic
  const getInitialLanguage = (): Language => {
    // Priority 1: URL Parameter
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang') as Language;
    if (langParam && ['en', 'zh', 'tr'].includes(langParam)) return langParam;

    // Priority 2: Local Storage
    const stored = localStorage.getItem('gw_lang') as Language;
    if (stored && ['en', 'zh', 'tr'].includes(stored)) return stored;

    // Priority 3: Browser Language
    const browserLangs = navigator.languages || [navigator.language];
    for (const bl of browserLangs) {
      const l = bl.toLowerCase();
      if (l.startsWith('zh')) return 'zh';
      if (l.startsWith('tr')) return 'tr';
    }

    // Priority 4: Default
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('gw_lang', lang);
    localStorage.setItem('gw_lang_hint_shown', 'true');
  };

  useEffect(() => {
    document.documentElement.lang = language;
    const hasChosenBefore = localStorage.getItem('gw_lang');
    const hintShown = localStorage.getItem('gw_lang_hint_shown');

    if (!hasChosenBefore && !hintShown) {
      setHintText(HINT_MESSAGES[language]);
      setShowHint(true);
      localStorage.setItem('gw_lang_hint_shown', 'true');
      
      const timer = setTimeout(() => setShowHint(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
      
      {/* Syncing Toast Z-index to 90 to be below Navbar (100) */}
      {showHint && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] animate-in slide-in-from-bottom-4 fade-in duration-500">
          <div className="bg-slate-900/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#FF9D00] rounded-full animate-pulse"></div>
            <span className="text-xs font-bold tracking-wide uppercase">{hintText}</span>
            <button onClick={() => setShowHint(false)} className="ml-2 text-white/40 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
