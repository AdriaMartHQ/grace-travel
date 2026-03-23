import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

type TourFilter = 'all' | 'classic' | 'family';

const parseTourFilter = (value: string | null): TourFilter => {
  if (value === 'classic' || value === 'family') {
    return value;
  }
  return 'all';
};

const Tours: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = parseTourFilter(searchParams.get('category'));
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const toursData = t.toursData || [];

  const filteredTours = useMemo(() => {
    return filter === 'all' ? toursData : toursData.filter((tour: any) => tour.category === filter);
  }, [filter, toursData]);

  const handleFilterChange = (nextFilter: TourFilter) => {
    const nextParams = new URLSearchParams(searchParams);

    if (nextFilter === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', nextFilter);
    }

    setSearchParams(nextParams, { replace: true });
  };

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
      <SEO 
        title={t.seo.tours.title} 
        description={t.seo.tours.description} 
        keywords={t.seo.tours.keywords} 
      />
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[2rem] md:text-[3.25rem] font-black uppercase tracking-tight mb-5 md:mb-6">{t.nav.tours}</h1>
          <p className="text-[15px] md:text-base text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Category Bar */}
      <div 
        id="categoryBar"
        className={`sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-transform duration-[400ms] ease-out gpu-layer ${
          isHidden ? '-translate-y-[120%]' : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {(['all', 'classic', 'family'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-5 md:px-8 py-2.5 rounded-full text-[11px] md:text-xs font-black tracking-[0.14em] md:tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-[#FF9D00] text-white shadow-lg shadow-orange-500/20' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {(t.sections.tourCategories &&
                t.sections.tourCategories[cat as keyof typeof t.sections.tourCategories]) ||
               t.sections.categories[cat as keyof typeof t.sections.categories]}
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
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-[10px] font-black tracking-[0.12em] md:tracking-widest text-slate-900 shadow-sm max-w-[calc(100%-2rem)] md:max-w-none">
                  {(t.sections.tourCategories &&
                    t.sections.tourCategories[tour.category as keyof typeof t.sections.tourCategories]) ||
                   t.sections.categories[tour.category as keyof typeof t.sections.categories]}
                </div>
              </div>
              <div className="p-7 md:p-10 flex flex-col flex-grow text-left">
                <div className="text-[11px] md:text-[10px] font-black text-[#FF9D00] tracking-[0.12em] md:tracking-[0.2em] mb-3 leading-snug">{tour.location} &bull; {tour.duration}</div>
                <Link to={tour.path || "/contact"}>
                  <h3 className="text-lg md:text-[1.4rem] font-black mb-5 md:mb-6 text-slate-900 leading-snug group-hover:text-[#FF9D00] transition-colors line-clamp-2">{tour.title}</h3>
                </Link>
                <div className="mb-8 flex-grow">
                  <ul className="space-y-3">
                    {(tour.highlights || []).map((h: string, i: number) => (
                      <li key={i} className="text-[13px] md:text-sm text-slate-500 flex items-start font-medium leading-relaxed">
                        <span className="text-[#FF9D00] mr-3 font-bold">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-xl md:text-[1.7rem] font-black text-slate-900 tracking-tight">{currencySymbol}{tour.price}</span>
                  </div>
                  <Link to={tour.path || "/contact"} className="bg-slate-900 text-white px-5 md:px-8 py-4 rounded-2xl text-[11px] md:text-[10px] font-black uppercase tracking-[0.14em] md:tracking-[0.2em] hover:bg-[#FF9D00] transition-all shadow-lg whitespace-nowrap">
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
