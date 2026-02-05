import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=2400&q=80" 
          alt="Grace Way Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl">
        <h1 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 serif leading-tight tracking-tight drop-shadow-2xl">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link to="/tours" className="w-full sm:w-auto bg-[#FF9D00] text-white px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all transform active:scale-95 shadow-xl shadow-orange-500/30">
            {t.hero.cta1}
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all">
            {t.hero.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
};

const TourCard: React.FC<{ tour: any; priority?: boolean }> = ({ tour, priority = false }) => {
  const { t } = useLanguage();
  const currencySymbol = '¥'; // 锁定为人民币

  // 严谨的回退图 (Istanbul Hagia Sophia)
  const fallbackImg = "https://images.unsplash.com/photo-1636021597151-cc28dacd915c?auto=format&fit=crop&w=1200&q=80";

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = fallbackImg;
  };

  return (
    <div className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 text-left h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <Link to={tour.path || "/contact"} className="block w-full h-full">
          <img 
            src={tour.image} 
            alt={tour.title} 
            loading={priority ? "eager" : "lazy"}
            onError={handleImgError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-lg">
          {tour.location}
        </div>
      </div>
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] font-black text-[#FF9D00] uppercase tracking-widest">{tour.duration}</span>
          <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{currencySymbol}{tour.price}</span>
        </div>
        <Link to={tour.path || "/contact"}>
          <h3 className="text-lg md:text-2xl font-black mb-4 text-slate-900 leading-tight group-hover:text-[#FF9D00] transition-colors line-clamp-2">
            {tour.title}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2 mb-8 flex-grow">
          {(tour.highlights || []).slice(0, 3).map((h: string, i: number) => (
            <span key={i} className="text-[9px] font-black bg-slate-50 text-slate-400 px-3 py-1.5 rounded-lg border border-slate-50 uppercase tracking-widest h-fit">{h}</span>
          ))}
        </div>
        <Link to={tour.path || "/contact"} className="block w-full text-center bg-slate-50 hover:bg-[#FF9D00] hover:text-white text-slate-900 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
          {tour.path ? (t.nav.home === '首页' ? '查看详情' : 'View Details') : t.nav.enquire}
        </Link>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden">
      <Hero />
      
      {/* Featured Routes */}
      <section className="py-20 md:py-40 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6">
          <div className="text-left">
            <span className="text-[10px] font-black text-[#FF9D00] uppercase tracking-[0.4em] mb-4 block">{t.sections.featuredTours}</span>
            <h3 className="text-3xl md:text-6xl font-black serif text-slate-900">{t.sections.featuredSubtitle}</h3>
          </div>
          <Link to="/tours" className="text-slate-900 font-black uppercase tracking-widest text-[10px] border-b-2 border-[#FF9D00] pb-2 w-fit">
            {t.sections.viewAll}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {(t.toursData || []).slice(0, 3).map((tour: any, idx: number) => (
            <TourCard key={tour.id} tour={tour} priority={idx === 0} />
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-black text-[#FF9D00] uppercase tracking-[0.4em] mb-4 block">The Grace Way Standard</span>
            <h3 className="text-3xl md:text-6xl font-black serif mb-6 leading-tight">{t.sections.whyUsSubtitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🛡️', title: t.features.f1.title, desc: t.features.f1.desc },
              { icon: '✨', title: t.features.f2.title, desc: t.features.f2.desc },
              { icon: '🎓', title: t.features.f3.title, desc: t.features.f3.desc }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
                <div className="text-4xl mb-6">{f.icon}</div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{f.title}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-40 max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black serif text-slate-900">{t.sections.faq}</h3>
        </div>
        <div className="space-y-4">
          {(t.faqs || []).map((faq: any, idx: number) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
              <button 
                className="w-full flex items-center justify-between p-6 text-left font-black text-slate-800 uppercase tracking-widest text-[11px]"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 pt-0 text-slate-500 text-sm font-light leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;