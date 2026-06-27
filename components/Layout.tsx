import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../translations';

const BrandLogo = ({ className = "w-10 h-10" }) => (
  <img
    src="/favicon.svg"
    alt="Grace Way logo"
    className={className}
    loading="eager"
    decoding="async"
  />
);

// ─── Itineraries dropdown (desktop) ──────────────────────────────────────────
const ItinerariesDropdown: React.FC = () => {
  const { language, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isActive =
    location.pathname === '/tours' ||
    location.pathname.startsWith('/itineraries/');

  const open_ = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const close_ = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  const sections = [
    {
      header: t.nav?.turkeySection || '土耳其精品游',
      items: [
        {
          label: t.nav?.turkeyClassic || '人文经典 · S系列',
          desc: t.nav?.turkeyClassicDesc || '6–10天全景经典私家游',
          path: '/tours',
          exact: true,
        },
        {
          label: t.nav?.faithPilgrimage || '信仰朝圣 · Z系列',
          desc: t.nav?.faithPilgrimageDesc || '七教会 · 保罗足迹',
          path: '/tours?category=family',
          exact: false,
        },
      ],
    },
    {
      header: t.nav?.otherDest || '旅游延伸线路',
      items: [
        {
          label: t.nav?.balkans || '巴尔干三国',
          desc: t.nav?.balkansDesc || '塞尔维亚 · 黑山 · 波黑旅游延伸',
          path: '/tours?category=balkan',
          exact: false,
        },
        {
          label: t.nav?.holyland || '以色列圣地',
          desc: t.nav?.holylandDesc || '耶路撒冷 · 加利利 · 伯利恒',
          path: '/itineraries/i1-israel-holyland-8-days',
          exact: true,
        },
      ],
    },
  ];

  const isTurkish = language === 'tr';
  const labelClass = isTurkish
    ? 'text-[9px] lg:text-[10px] tracking-[0.09em]'
    : language === 'en'
    ? 'text-[10px] lg:text-[11px] tracking-[0.12em]'
    : 'text-[11px] lg:text-[12px] tracking-[0.14em]';

  return (
    <div
      className="relative"
      onMouseEnter={open_}
      onMouseLeave={close_}
    >
      {/* Trigger */}
      <button
        className={`${labelClass} font-bold uppercase whitespace-nowrap shrink-0 flex items-center gap-1 transition-colors hover:text-[#FF9D00] ${
          isActive ? 'text-[#FF9D00]' : 'text-white/90'
        }`}
      >
        {t.nav?.itineraries || '行程线路'}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-slate-900 rounded-2xl shadow-2xl border border-white/10 py-3 z-[200] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={open_}
          onMouseLeave={close_}
        >
          {sections.map((section, si) => (
            <div key={si}>
              {si > 0 && <div className="mx-4 my-2 border-t border-white/10" />}
              <p className="px-4 pt-1 pb-2 text-[9px] font-black uppercase tracking-[0.22em] text-white/30">
                {section.header}
              </p>
              {section.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="flex flex-col px-4 py-2.5 rounded-xl mx-2 hover:bg-white/5 transition-colors group"
                >
                  <span className="text-[12px] font-bold text-white group-hover:text-[#FF9D00] transition-colors leading-snug">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5 leading-snug">{item.desc}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Mobile menu portal ───────────────────────────────────────────────────────
const MobileMenuPortal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    const search = new URLSearchParams(location.search);
    const cat = search.get('category');
    if (path === '/tours?category=family') return location.pathname === '/tours' && cat === 'family';
    if (path === '/tours') return location.pathname === '/tours' && cat !== 'family';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const linkCls = (path: string) =>
    `text-2xl md:text-3xl font-black uppercase tracking-tight transition-all active:scale-95 ${
      isActive(path) ? 'text-[#FF9D00]' : 'text-white hover:text-[#FF9D00]'
    }`;

  const subLinkCls = (path: string) =>
    `text-xl md:text-2xl font-bold uppercase tracking-tight transition-all active:scale-95 ${
      isActive(path) ? 'text-[#FF9D00]' : 'text-white/70 hover:text-[#FF9D00]'
    }`;

  const sectionLabel = 'text-[9px] font-black uppercase tracking-[0.28em] text-white/25 mb-4';

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'tr', label: 'TR' },
  ];

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

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[500] flex flex-col h-[100dvh] w-screen bg-slate-950/96 backdrop-blur-md animate-in fade-in duration-300 pointer-events-auto"
      onClick={onClose}
    >
      {/* 上下两区布局：导航区 flex-1 居中，底部区固定底部 */}
      <div
        className="flex flex-col h-full px-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── 上区：Logo + 导航链接（撑满剩余空间，居中对齐）── */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 py-10 text-center">
          <BrandLogo className="w-12 h-12 shrink-0" />

          {/* 首页 */}
          <Link to="/" onClick={onClose} className={linkCls('/')}>
            {t.nav?.home || '首页'}
          </Link>

          {/* 行程线路 + 子项 */}
          <div className="flex flex-col items-center gap-3 w-full">
            <p className={`text-2xl font-black uppercase tracking-tight ${
              isActive('/tours') || isActive('/itineraries/') ? 'text-[#FF9D00]' : 'text-white'
            }`}>
              {t.nav?.itineraries || '行程线路'}
            </p>
            <div className="flex flex-col items-center gap-2.5">
              <Link to="/tours" onClick={onClose} className={subLinkCls('/tours')}>
                {t.nav?.turkeyClassic || '人文经典 S系列'}
              </Link>
              <Link to="/tours?category=family" onClick={onClose} className={subLinkCls('/tours?category=family')}>
                {t.nav?.faithPilgrimage || '信仰朝圣 Z系列'}
              </Link>
              <Link to="/tours?category=balkan" onClick={onClose} className={subLinkCls('/tours?category=balkan')}>
                {t.nav?.balkans || '巴尔干三国'}
              </Link>
              <Link to="/itineraries/i1-israel-holyland-8-days" onClick={onClose} className={subLinkCls('/itineraries/i1-israel-holyland-8-days')}>
                {t.nav?.holyland || '以色列圣地'}
              </Link>
            </div>
          </div>

          {/* 门票体验 */}
          <Link to="/tickets" onClick={onClose} className={linkCls('/tickets')}>
            {t.nav?.tickets || '门票体验'}
          </Link>

          {/* 关于我们 */}
          <Link to="/about" onClick={onClose} className={linkCls('/about')}>
            {t.nav?.about || '关于我们'}
          </Link>

          {/* 联系我们 — 与导航同级，纯文字 */}
          <Link to="/contact" onClick={onClose} className={linkCls('/contact')}>
            {t.nav?.contact || '联系我们'}
          </Link>
        </div>

        {/* ── 底区：语言 / 关闭 ── */}
        <div className="flex flex-col items-center gap-4 pb-10 pt-6 border-t border-white/8 shrink-0">

          <div className="flex space-x-6 p-1 bg-white/5 rounded-full border border-white/10">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLanguage(l.code); onClose(); }}
                className={`px-5 py-2 rounded-full text-[11px] font-black tracking-[0.18em] transition-all ${
                  language === l.code ? 'bg-[#FF9D00] text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-10 py-3 bg-white/5 rounded-2xl text-white/25 text-[10px] font-black uppercase tracking-[0.25em] hover:text-white hover:bg-white/10 transition-all border border-white/5 active:scale-90"
          >
            {t.nav?.closeMenu || '关闭'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const ticking = useRef(false);
  const isTurkish = language === 'tr';
  const isEnglish = language === 'en';

  const airportTransferLabel =
    language === 'zh' ? '接送机' : language === 'tr' ? 'Transfer' : 'Transfers';

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

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'tr', label: 'TR' },
  ];

  const isHome = location.pathname === '/';

  const desktopGap = isTurkish ? 'gap-3 lg:gap-4' : isEnglish ? 'gap-4 lg:gap-6' : 'gap-5 lg:gap-7';
  const linkClass = isTurkish
    ? 'text-[9px] lg:text-[10px] tracking-[0.09em]'
    : isEnglish
    ? 'text-[10px] lg:text-[11px] tracking-[0.12em]'
    : 'text-[11px] lg:text-[12px] tracking-[0.14em]';
  const enquireClass = isTurkish
    ? 'px-4 lg:px-5 py-2.5 text-[10px] tracking-[0.12em]'
    : isEnglish
    ? 'px-5 lg:px-6 py-2.5 text-[10px] lg:text-[11px] tracking-[0.14em]'
    : 'px-6 lg:px-7 py-2.5 text-[11px] md:text-xs tracking-[0.16em]';

  const navBg = isHome
    ? isScrolled
      ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl'
      : 'bg-transparent py-5 border-transparent'
    : 'bg-slate-950 py-3 shadow-md border-b border-white/5';

  const isTransferActive = location.pathname === '/airport-transfer';

  return (
    <>
      <nav className={`fixed w-full z-[100] pointer-events-none transition-all duration-300 ease-in-out gpu-layer ${navBg}`}>
        {isHome && !isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none -z-10" />
        )}
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-left">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-[110] pointer-events-auto">
            <BrandLogo className="w-8 h-8 md:w-9 md:h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-black tracking-tight leading-none text-white">GRACE WAY</span>
              <span className="text-[8px] md:text-[9px] font-bold tracking-[0.16em] md:tracking-[0.2em] text-white/60 uppercase">
                {language === 'zh' ? '恩途 · 国际旅行' : 'INTERNATIONAL'}
              </span>
            </div>
          </Link>

          {/* Desktop nav — 5 fixed items + language */}
          <div className={`hidden md:flex items-center ${desktopGap} pointer-events-auto`}>

            {/* 1. 首页 */}
            <Link
              to="/"
              className={`${linkClass} font-bold uppercase whitespace-nowrap shrink-0 transition-colors hover:text-[#FF9D00] ${
                location.pathname === '/' ? 'text-[#FF9D00]' : 'text-white/90'
              }`}
            >
              {t.nav?.home || '首页'}
            </Link>

            {/* 2. 行程线路 ▾ */}
            <ItinerariesDropdown />

            {/* 3. 门票体验 */}
            <Link
              to="/tickets"
              className={`${linkClass} font-bold uppercase whitespace-nowrap shrink-0 transition-colors hover:text-[#FF9D00] ${
                location.pathname === '/tickets' ? 'text-[#FF9D00]' : 'text-white/90'
              }`}
            >
              {t.nav?.tickets || '门票体验'}
            </Link>

            {/* 4. 关于我们 */}
            <Link
              to="/about"
              className={`${linkClass} font-bold uppercase whitespace-nowrap shrink-0 transition-colors hover:text-[#FF9D00] ${
                location.pathname === '/about' ? 'text-[#FF9D00]' : 'text-white/90'
              }`}
            >
              {t.nav?.about || '关于我们'}
            </Link>

            {/* 5. 联系我们 — 右侧橙色高亮，兼作 CTA */}
            <Link
              to="/contact"
              className={`${linkClass} font-black uppercase whitespace-nowrap shrink-0 transition-all px-4 py-2 rounded-full border ${
                location.pathname === '/contact'
                  ? 'bg-[#FF9D00] text-white border-[#FF9D00]'
                  : 'text-[#FF9D00] border-[#FF9D00]/40 hover:bg-[#FF9D00] hover:text-white hover:border-[#FF9D00]'
              }`}
            >
              {t.nav?.contact || '联系我们'}
            </Link>

            {/* Language */}
            <div className="flex items-center space-x-3 lg:space-x-4 border-l border-white/10 pl-5 lg:pl-6 ml-1 h-4">
              {languages.map((l) => (
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
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[120] -m-2 p-4 focus:outline-none pointer-events-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </nav>
      <MobileMenuPortal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const airportTransferLabel =
    language === 'zh' ? '接送机服务' : language === 'tr' ? 'Transfer' : 'Transfers';
  const f = t?.footer || {};

  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <BrandLogo className="w-24 h-24 mx-auto mb-6" />
          <h3 className="text-xl md:text-[2rem] font-black tracking-tight mb-2 uppercase text-slate-100">{f.brandEn || 'GRACE WAY'}</h3>
          <h4 className="text-[#FF9D00] text-base md:text-lg font-bold tracking-[0.12em] md:tracking-[0.16em]">{f.brandZh || ''}</h4>
          <div className="mt-8 inline-block px-10 py-3 border border-orange-500/20 rounded-full bg-orange-500/5 backdrop-blur-sm">
            <span className="text-xs md:text-sm font-bold text-[#FF9D00] tracking-[0.16em] md:tracking-widest uppercase">
              {f.statement || 'Licensed DMC'}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-16 border-t border-slate-800 mb-16">
          <div className="space-y-6 text-left">
            <h4 className="font-bold text-slate-100 uppercase text-xs tracking-[0.3em] border-l-2 border-[#FF9D00] pl-3">{f.explore || 'Explore'}</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-[#FF9D00] transition-colors">{t.nav?.home || 'Home'}</Link></li>
              <li><Link to="/tours?category=turkey" className="hover:text-[#FF9D00] transition-colors">{t.nav?.tours || 'Tours'}</Link></li>
              <li><Link to="/tours?category=family" className="hover:text-[#FF9D00] transition-colors">{t.nav?.faith || 'Faith'}</Link></li>
              <li><Link to="/tours?category=balkan" className="hover:text-[#FF9D00] transition-colors">{t.nav?.balkans || '巴尔干三国'}</Link></li>
              <li><Link to="/itineraries/i1-israel-holyland-8-days" className="hover:text-[#FF9D00] transition-colors">{t.nav?.holyland || '以色列圣地'}</Link></li>
              <li><Link to="/airport-transfer" className="hover:text-[#FF9D00] transition-colors">{airportTransferLabel}</Link></li>
              <li><Link to="/tickets" className="hover:text-[#FF9D00] transition-colors">{t.nav?.tickets || 'Tickets'}</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF9D00] transition-colors">{t.nav?.contact || 'Contact'}</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-[#FF9D00] transition-colors">{t.nav?.about || 'About Us'}</Link></li>
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

// ─── Layout ───────────────────────────────────────────────────────────────────
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
