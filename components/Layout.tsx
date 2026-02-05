import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

const BrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img
    src="/grace-logo.svg"
    alt="Grace Way"
    className={`${className} object-contain`}
    loading="eager"
    decoding="async"
  />
);



const MobileMenuPortal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: t.nav?.home || 'Home', path: '/' },
    { name: t.nav?.tours || 'Tours', path: '/tours' },
    { name: t.nav?.tickets || 'Tickets', path: '/tickets' },
    { name: t.nav?.contact || 'Contact', path: '/contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'tr', label: 'TR' }
  ];

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[500] flex flex-col h-[100dvh] w-screen bg-slate-950/98 backdrop-blur-2xl animate-in fade-in duration-300 pointer-events-auto"
      onClick={onClose}
    >
      <div 
        className="flex flex-col items-center justify-center min-h-full py-20 px-6 space-y-12 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <BrandLogo className="w-20 h-20 shrink-0" />
        <div className="flex flex-col items-center space-y-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-4xl font-black uppercase tracking-tighter transition-all active:scale-95 ${
                location.pathname === link.path ? 'text-[#FF9D00]' : 'text-white hover:text-[#FF9D00]'
              }`} 
              onClick={onClose}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex space-x-6 p-1 bg-white/5 rounded-full border border-white/10 shrink-0">
           {languages.map(l => (
             <button 
               key={l.code} 
               onClick={() => { setLanguage(l.code); onClose(); }} 
               className={`px-6 py-2 rounded-full text-xs font-black tracking-widest transition-all ${
                 language === l.code ? 'bg-[#FF9D00] text-white' : 'text-white/40 hover:text-white'
               }`}
             >
               {l.label}
             </button>
           ))}
        </div>
        <button 
          onClick={onClose} 
          className="mt-8 px-10 py-4 bg-white/5 rounded-2xl text-white/30 text-[10px] font-black uppercase tracking-[0.3em] hover:text-white hover:bg-white/10 transition-all border border-white/5 active:scale-90"
        >
          {t.nav?.closeMenu || 'CLOSE'}
        </button>
      </div>
    </div>,
    document.body
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav?.home || 'Home', path: '/' },
    { name: t.nav?.tours || 'Tours', path: '/tours' },
    { name: t.nav?.tickets || 'Tickets', path: '/tickets' },
    { name: t.nav?.contact || 'Contact', path: '/contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'tr', label: 'TR' }
  ];

  const isHome = location.pathname === '/';
  
  const navBackgroundClasses = isHome 
    ? (isScrolled 
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' 
        : 'bg-transparent py-5 border-transparent')
    : 'bg-slate-950 py-3 shadow-md border-b border-white/5';

  return (
    <>
      <nav className={`fixed w-full z-[10] pointer-events-none transition-all duration-300 ease-in-out gpu-layer ${navBackgroundClasses}`}>
        {isHome && !isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none -z-10"></div>
        )}
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-left">
          <Link to="/" className="flex items-center gap-3 group relative z-[110] pointer-events-auto">
            <BrandLogo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
               <span className="text-lg font-black tracking-tight leading-none text-white">GRACE WAY</span>
               <span className="text-[9px] font-bold tracking-[0.2em] text-white/60 uppercase">
                 {language === 'zh' ? '恩途 · 国际旅行' : 'INTERNATIONAL'}
               </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10 pointer-events-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-widest transition-all hover:text-[#FF9D00] ${
                  location.pathname === link.path ? 'text-[#FF9D00]' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 border-l border-white/10 pl-10 ml-2 h-4">
               {languages.map(l => (
                 <button 
                   key={l.code}
                   onClick={() => setLanguage(l.code)}
                   className={`text-[10px] font-black tracking-tighter transition-colors hover:text-[#FF9D00] ${
                     language === l.code ? 'text-[#FF9D00]' : 'text-white/40'
                   }`}
                 >
                   {l.label}
                 </button>
               ))}
            </div>
            <Link to="/contact" className="bg-[#FF9D00] hover:bg-white hover:text-slate-900 text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-orange-500/10">
              {t.nav?.enquire || 'ENQUIRE'}
            </Link>
          </div>

          <button 
            className="md:hidden relative z-[120] -m-2 p-4 focus:outline-none pointer-events-auto" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </nav>
      <MobileMenuPortal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const Footer: React.FC = () => {
  const { t } = useLanguage();
  // 【核心修复点】：安全解构 footer 属性
  // 为什么改：防止 tr 语言环境下由于数据结构不一致导致的 brandEn 读取 undefined 错误。
  // 影响范围：仅增强健壮性，不影响 zh/en 的正常展示，也不改动其他线路逻辑。
  const f = t?.footer || {}; 

  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
           <BrandLogo className="w-24 h-24 mx-auto mb-6" />
           <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 uppercase text-slate-100">{f.brandEn || 'GRACE WAY'}</h3>
           <h4 className="text-[#FF9D00] text-xl font-bold tracking-[0.2em]">{f.brandZh || ''}</h4>
           <div className="mt-8 inline-block px-10 py-3 border border-orange-500/20 rounded-full bg-orange-500/5 backdrop-blur-sm">
             <span className="text-sm font-bold text-[#FF9D00] tracking-widest uppercase">
               {f.statement || 'Licensed DMC'}
             </span>
           </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-16 border-t border-slate-800 mb-16">
          <div className="space-y-6 text-left">
            <h4 className="font-bold text-slate-100 uppercase text-xs tracking-[0.3em] border-l-2 border-[#FF9D00] pl-3">{f.explore || 'Explore'}</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-[#FF9D00] transition-colors">{t.nav?.home || 'Home'}</Link></li>
              <li><Link to="/tours" className="hover:text-[#FF9D00] transition-colors">{t.nav?.tours || 'Tours'}</Link></li>
              <li><Link to="/tickets" className="hover:text-[#FF9D00] transition-colors">{t.nav?.tickets || 'Tickets'}</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF9D00] transition-colors">{t.nav?.contact || 'Contact'}</Link></li>
            </ul>
            <p className="text-slate-500 text-xs leading-relaxed pt-4 italic">{f.about || ''}</p>
          </div>
          <div className="space-y-8 text-left">
            <h4 className="font-bold text-slate-100 uppercase text-xs tracking-[0.3em] border-l-2 border-[#FF9D00] pl-3">{f.contact || 'Contact'}</h4>
            <div className="space-y-6">
               <div className="space-y-1">
                 <a href="tel:+905064972026" className="text-slate-200 font-bold tracking-wider hover:text-[#FF9D00] transition-colors block whitespace-nowrap">+90 506 497 20 26</a>
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{f.langSupport || ''}</p>
               </div>
               <div className="space-y-1">
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{f.emailLabel || 'Email'}</p>
                 <a href="mailto:info@grace.tr" className="text-slate-200 font-bold tracking-wider hover:text-[#FF9D00] transition-colors block">info@grace.tr</a>
               </div>
            </div>
          </div>
          <div className="space-y-8 text-left">
            <h4 className="font-bold text-slate-100 uppercase text-xs tracking-[0.3em] border-l-2 border-[#FF9D00] pl-3">{f.compliance || 'Compliance'}</h4>
            <div className="space-y-2">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{f.istanbulOffice || ''}</p>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{f.address || ''}</p>
            </div>
            <div className="pt-6 border-t border-slate-800 flex items-center gap-4 group">
               <div className="bg-slate-700 text-slate-100 p-2 rounded-lg w-12 h-12 flex items-center justify-center shadow-lg border border-slate-600">
                 <span className="font-black text-[10px]">TÜRSAB</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-slate-200 text-[10px] font-black uppercase tracking-tight">{f.licensedAGroup || ''}</span>
                  <span className="text-slate-500 text-[8px] uppercase font-black tracking-widest">{f.officialLicensed || ''}</span>
               </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-slate-600 uppercase tracking-[0.2em] font-black">
          <p>© 2025 Grace Way Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
