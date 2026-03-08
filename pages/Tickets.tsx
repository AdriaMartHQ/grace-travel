import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Tickets: React.FC = () => {
  const { t, language } = useLanguage();
  const [category, setCategory] = useState<'all' | 'entry'>('all');
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const ticketsData = t.ticketsData || [];

  const filteredTickets = useMemo(() => {
    return category === 'all' ? ticketsData : ticketsData.filter((ticket: any) => ticket.category === category);
  }, [category, ticketsData]);

  useEffect(() => {
    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY.current);
      
      if (window.innerWidth <= 768 && delta > 5) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
          setIsHidden(true);
        } else if (currentScrollY < lastScrollY.current) {
          setIsHidden(false);
        }
      } else if (window.innerWidth > 768) {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateVisibility);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 animate-in fade-in duration-700">
      <SEO 
        title={t.seo.tickets.title} 
        description={t.seo.tickets.description} 
        keywords={t.seo.tickets.keywords} 
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[11px] md:text-[10px] font-black text-[#FF9D00] uppercase tracking-[0.22em] md:tracking-[0.4em] mb-4 block">Official Palaces & Museums</span>
          <h1 className="text-[2rem] md:text-[3.25rem] font-black serif text-slate-900 mb-5 md:mb-6 leading-tight">{t.nav.tickets}</h1>
          <p className="text-[15px] md:text-base text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">{t.footer.about}</p>
        </div>

        {/* Sticky Category Bar for Tickets with Hardware Acceleration */}
        <div 
          id="categoryBar"
          className={`sticky top-16 z-30 bg-white/90 backdrop-blur-md border border-slate-100 rounded-3xl mb-16 py-3 px-4 shadow-sm transition-transform duration-[400ms] ease-out gpu-layer ${
            isHidden ? '-translate-y-[150%]' : 'translate-y-0'
          }`}
        >
          <div className="flex justify-center flex-wrap gap-3 md:gap-4">
            {(['all', 'entry'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 md:px-8 py-3 rounded-2xl text-[11px] md:text-[10px] font-black tracking-[0.14em] md:tracking-widest transition-all ${
                  category === cat 
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' 
                    : 'bg-white text-slate-500 hover:bg-slate-200 border border-slate-100'
                }`}
              >
                {(t.sections.ticketCategories &&
                  t.sections.ticketCategories[cat as keyof typeof t.sections.ticketCategories]) ||
                 t.sections.categories[cat as keyof typeof t.sections.categories]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTickets.map((ticket: any) => (
            <div key={ticket.id} className="bg-white p-6 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-left">
              <div className="relative h-56 rounded-[2rem] overflow-hidden mb-8 group bg-slate-100">
                <img 
                  src={ticket.image} 
                  alt={ticket.title} 
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${ticket.id}/600/400`;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#FF9D00] text-white px-4 md:px-5 py-2 rounded-2xl text-base md:text-[1.1rem] font-black shadow-lg">
                  ¥{ticket.price}
                </div>
              </div>
              <div className="px-1 md:px-4">
                <h3 className="text-lg md:text-[1.35rem] font-black text-slate-900 mb-5 md:mb-6 min-h-[3.25rem] md:h-14 line-clamp-2 leading-snug group-hover:text-[#FF9D00] transition-colors">
                  {language === 'zh' ? (
                    <>
                      <span className="hidden md:inline">{ticket.title}</span>
                      <span className="md:hidden">{ticket.title.split(/ \(|（/)[0]}</span>
                    </>
                  ) : (
                    ticket.title
                  )}
                </h3>
                <div className="space-y-3 mb-10">
                  {(ticket.includes || []).map((inc: string, i: number) => (
                    <div key={i} className="flex items-start text-[13px] md:text-xs text-slate-500 font-medium leading-relaxed">
                      <span className="w-5 h-5 mr-3 mt-0.5 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold shadow-sm shrink-0">✓</span>
                      {inc}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block w-full text-center bg-slate-50 hover:bg-[#FF9D00] hover:text-white py-5 rounded-2xl font-black uppercase tracking-[0.14em] md:tracking-widest text-[11px] md:text-[10px] transition-all text-slate-900 shadow-inner">
                  {t.nav.enquire}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Notice */}
        <div className="mt-20 text-center">
            <p className="text-slate-400 text-[13px] md:text-xs font-medium leading-relaxed tracking-normal md:tracking-wide">
                {language === 'zh' ? '人民币价格为票面价格 9 折优惠后，按参考汇率换算，仅作展示参考，最终金额以实际支付页面为准。' : 'CNY prices are converted at reference exchange rates after a 10% face value discount, and are for display reference only. Final amounts depend on the actual payment page.'}
            </p>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
