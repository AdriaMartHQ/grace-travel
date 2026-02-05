import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Tours: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'classic' | 'luxury' | 'family'>('all');
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const toursData = t.toursData || [];

  const filteredTours = useMemo(() => {
    return filter === 'all' ? toursData : toursData.filter((tour: any) => tour.category === filter);
  }, [filter, toursData]);

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

  const currencySymbol = '¥'; // 锁定为人民币

  // Strict Fallback Image
  const fallbackImg = "https://images.unsplash.com/photo-1636021597151-cc28dacd915c?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="pt-24 min-h-screen animate-in fade-in duration-700">
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">{t.nav.tours}</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-medium">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Category Bar */}
      <div 
        id="categoryBar"
        className={`sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-transform duration-[400ms] ease-out gpu-layer ${
          isHidden ? '-translate-y-[120%]' : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-4">
          {(['all', 'classic', 'luxury', 'family'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-[#FF9D00] text-white shadow-lg shadow-orange-500/20' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {t.sections.categories[cat as keyof typeof t.sections.categories]}
            </button>
          ))}
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredTours.map((tour: any) => (
            <div key={tour.id} className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <Link to={tour.path || "/contact"} className="block w-full h-full">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = fallbackImg;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </Link>
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                  {t.sections.categories[tour.category as keyof typeof t.sections.categories]}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow text-left">
                <div className="text-[10px] font-black text-[#FF9D00] uppercase tracking-[0.2em] mb-3">{tour.location} &bull; {tour.duration}</div>
                <Link to={tour.path || "/contact"}>
                  <h3 className="text-xl font-black mb-6 text-slate-900 leading-tight group-hover:text-[#FF9D00] transition-colors">{tour.title}</h3>
                </Link>
                <div className="mb-8 flex-grow">
                  <ul className="space-y-3">
                    {(tour.highlights || []).map((h: string, i: number) => (
                      <li key={i} className="text-sm text-slate-500 flex items-center font-medium">
                        <span className="text-[#FF9D00] mr-3 font-bold">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-slate-900 tracking-tight">{currencySymbol}{tour.price}</span>
                  </div>
                  <Link to={tour.path || "/contact"} className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#FF9D00] transition-all shadow-lg">
                    {tour.path ? (t.nav.home === '首页' ? '行程详情' : 'Details') : t.nav.enquire}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;