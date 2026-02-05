
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ItineraryS4: React.FC = () => {
  const { t, language } = useLanguage();
  const d = t.itinerary_s4;
  const currencySymbol = language === 'zh' ? '¥' : '$';

  // Use the cover image from the tour data or a fallback
  const heroImage = "https://images.unsplash.com/photo-1689130033373-2773b6029aea?q=80&w=2148&auto=format&fit=crop";
  const fallbackImage = "https://images.unsplash.com/photo-1636021597151-cc28dacd915c?auto=format&fit=crop&w=1600&q=80";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; 
    e.currentTarget.src = fallbackImage;
  };

  if (!d || !d.hero) {
      return <div className="pt-40 text-center">Loading Itinerary...</div>;
  }

  return (
    <div className="bg-[#fdfcfb] text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] md:h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src={d.hero.image || heroImage} 
            className="w-full h-full object-cover" 
            alt="Grace Way Turkey"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative z-20 max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="inline-block px-3 py-1 bg-[#FF9D00] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] rounded mb-6">
            {d.hero.badge}
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black serif text-white mb-6 leading-tight tracking-tight">
            {d.hero.title}
          </h1>
          <p className="text-white/80 text-base md:text-2xl font-light mb-10 tracking-widest uppercase">
            {d.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl">
              {d.hero.ctaPrimary}
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-sm">
              {d.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Optimized Header Info Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-black serif text-slate-900 leading-tight border-l-4 md:border-l-8 border-[#FF9D00] pl-5 md:pl-8 mb-4">
              {d.meta.seriesTitle}
            </h2>
            <p className="text-sm md:text-lg text-slate-500 font-medium italic mb-6 pl-5 md:pl-8">
              {d.meta.tagline}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col gap-3 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">🚌</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{d.meta.transport_label}</span>
              </div>
              <p className="text-sm font-bold text-slate-800 leading-relaxed">{d.meta.transport}</p>
            </div>
            
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col gap-3 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏨</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{d.meta.hotels_label}</span>
              </div>
              <p className="text-sm font-bold text-slate-800 leading-relaxed">{d.meta.hotels}</p>
            </div>
            
            <div className="p-8 bg-orange-50 border border-orange-100 rounded-[2rem] flex flex-col gap-3 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{d.meta.price_label}</span>
              </div>
              <p className="text-3xl font-black text-[#FF9D00] tracking-tight">{currencySymbol}{d.meta.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Highlights */}
      <section className="py-20 md:py-32 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black serif italic">{d.highlights.title}</h2>
            <div className="w-16 h-1 bg-[#FF9D00] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {d.highlights.items.map((item: string, i: number) => (
              <div key={i} className="p-8 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-sm flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF9D00]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#FF9D00] font-black">0{i+1}</span>
                </div>
                <p className="text-slate-200 font-medium text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schedule Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black serif uppercase tracking-widest mb-2">{d.summaryTable.title}</h2>
        </div>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <table className="w-full text-left border-separate border-spacing-0 min-w-[800px] md:min-w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <thead>
              <tr className="bg-slate-50">
                {d.summaryTable.columns.map((col: string, i: number) => (
                    <th key={i} className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {d.summaryTable.rows.map((row: any, i: number) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 font-black text-[#FF9D00]">{row.day}</td>
                  <td className="px-6 py-5 font-bold text-sm text-slate-800">{row.route}</td>
                  <td className="px-6 py-5 text-center text-[11px] text-slate-500 font-medium">{row.breakfast}</td>
                  <td className="px-6 py-5 text-center text-[11px] text-slate-500 font-medium">{row.lunch}</td>
                  <td className="px-6 py-5 text-center text-[11px] text-slate-500 font-medium">{row.dinner}</td>
                  <td className="px-6 py-5 text-[11px] text-slate-500 font-medium italic">{row.hotel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Daily Details */}
      <section className="py-20 md:py-32 space-y-24 md:space-y-40">
        <div className="max-w-7xl mx-auto px-6 mb-20">
             <h2 className="text-3xl md:text-5xl font-black serif text-center italic">{d.sections.title}</h2>
             <div className="w-16 h-1 bg-[#FF9D00] mx-auto mt-4"></div>
        </div>
        {d.sections.days.map((item: any, i: number) => (
            <div key={i} className={`max-w-7xl mx-auto px-6 flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-20 items-start`}>
              <div className="w-full lg:w-1/2 sticky top-24">
                <div className="w-full aspect-[16/9] bg-slate-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg relative group">
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-slate-900 shadow-xl uppercase z-10 border border-slate-100">
                    {item.day}
                  </div>
                  <img 
                    src={item.image || `https://picsum.photos/seed/s4day${i+1}/800/450`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={item.title} 
                    onError={handleImageError}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <h3 className="text-2xl md:text-4xl font-black serif text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <div className="space-y-4">
                    {item.paragraphs.map((p: string, pi: number) => (
                        <p key={pi} className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                            {p}
                        </p>
                    ))}
                </div>
                {item.bullets && (
                    <div className="space-y-3 pt-4">
                        {item.bullets.map((b: string, bi: number) => (
                            <div key={bi} className="flex gap-3 items-start text-sm text-[#FF9D00] font-bold">
                                <span>✦</span>
                                <p>{b}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div className="p-6 md:p-10 bg-[#fdfaf6] rounded-[2rem] border border-orange-100/50 flex flex-col sm:flex-row gap-6 md:gap-12 mt-8">
                  <div>
                    <p className="text-[9px] font-black text-orange-300 uppercase tracking-widest mb-1">{d.meta.meals_label}</p>
                    <p className="text-slate-800 font-bold text-xs">{language === 'zh' ? '早' : 'B'}：{item.meals.breakfast} / {language === 'zh' ? '午' : 'L'}：{item.meals.lunch} / {language === 'zh' ? '晚' : 'D'}：{item.meals.dinner}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-orange-300 uppercase tracking-widest mb-1">{d.meta.stay_label}</p>
                    <p className="text-slate-800 font-bold text-xs">{item.stay}</p>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </section>

      {/* 6. Optimized Important Notices Section (Large White Card with Bullets) */}
      <section className="py-20 md:py-32 bg-slate-50 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-sm border border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black serif uppercase tracking-widest inline-block border-b-4 border-[#FF9D00] pb-2">
              {d.notices.title}
            </h2>
          </div>
          <div className="space-y-10 max-w-4xl mx-auto">
            {d.notices.items.map((item: string, i: number) => {
                const delimiter = item.includes('：') ? '：' : ':';
                const parts = item.split(delimiter);
                return (
                    <div key={i} className="flex gap-5 items-start">
                        <div className="w-2 h-2 rounded-full bg-[#FF9D00] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(255,157,0,0.4)]"></div>
                        <p className="text-base md:text-lg font-medium text-slate-600 leading-relaxed">
                            {parts.length > 1 ? (
                              <>
                                <span className="font-black text-slate-900 mr-1">{parts[0]}{delimiter}</span>
                                {parts.slice(1).join(delimiter)}
                              </>
                            ) : item}
                        </p>
                    </div>
                )
            })}
          </div>
        </div>
      </section>

      {/* 7. Footer CTA */}
      <section className="py-32 bg-slate-950 text-white relative text-center px-6">
        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-6xl font-black serif italic">{d.meta.footer_cta_title}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-xl">
              {d.meta.cta_consult}
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-sm">
              {d.meta.cta_plan}
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60] animate-in slide-in-from-bottom-12 duration-1000">
        <Link to="/contact" className="flex items-center justify-between bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 p-2 pl-6 rounded-full shadow-2xl">
          <span className="text-[10px] font-black uppercase tracking-widest">{d.meta.sticky_cta}</span>
          <div className="w-10 h-10 bg-[#FF9D00] rounded-full flex items-center justify-center text-white shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItineraryS4;
