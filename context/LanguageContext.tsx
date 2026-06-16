
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { Language, BaseTranslations } from '../translations';
import { loadTranslations } from '../i18n';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: BaseTranslations;
  isLanguageLoading: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const HINT_MESSAGES = {
  zh: '已根据您的浏览器语言切换为中文，您可以在右上角随时更改',
  en: 'Language set to English based on your browser settings',
  tr: 'Dil tarayıcı ayarlarınıza göre Türkçe olarak ayarlandı'
};

// initialLang + initialT come from the index.tsx bootstrap, which awaits the active
// language's chunk BEFORE createRoot — so `t` is synchronous from the first render
// (no fallback flash, prerendered content stays until React takes over).
export const LanguageProvider: React.FC<{
  children: ReactNode;
  initialLang: Language;
  initialT: BaseTranslations;
}> = ({ children, initialLang, initialT }) => {
  const [language, setLanguageState] = useState<Language>(initialLang);
  const [t, setT] = useState<BaseTranslations>(initialT);
  const [isLanguageLoading, setIsLanguageLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');

  const setLanguage = (lang: Language) => {
    if (lang === language || isLanguageLoading) return;
    // Load the target chunk FIRST, keep current language/t until it's ready, then commit
    // language + t ATOMICALLY so consumers never render a mixed-language frame.
    setIsLanguageLoading(true);
    loadTranslations(lang)
      .then((next) => {
        setLanguageState(lang);
        setT(next);
        localStorage.setItem('gw_lang', lang);
        localStorage.setItem('gw_lang_hint_shown', 'true');
      })
      .catch(() => {
        /* keep current language/t on load failure */
      })
      .finally(() => setIsLanguageLoading(false));
  };

  useEffect(() => {
    // BCP-47 value, matching components/SEO.tsx so the two effects never fight over <html lang>.
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language === 'tr' ? 'tr-TR' : 'en';
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
    <LanguageContext.Provider value={{ language, setLanguage, t, isLanguageLoading }}>
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
