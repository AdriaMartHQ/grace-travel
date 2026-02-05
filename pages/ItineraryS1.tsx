
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ItineraryS1: React.FC = () => {
  const { t } = useLanguage();
  const d = t.itinerary_s1; // Shortcut for itinerary data

  // Image data stays local but used by the dynamic renderer
  const dayImages = {
    day1: {
      title: "Cappadocia",
      image: "https://images.unsplash.com/photo-1701616857654-8c56b923d80c?auto=format&fit=crop&w=1600&q=80"
    },
    day2: {
      title: "Konya · Mevlana",
      image: "https://images.unsplash.com/photo-1759930018775-bf3c3fe9bdc6?auto=format&fit=crop&w=1600&q=80"
    },
    day3: {
      title: "Pamukkale",
      image: "https://images.unsplash.com/photo-1708251088932-b7700e0a58b7?auto=format&fit=crop&w=1600&q=80"
    },
    day4: {
      title: "Ephesus · Library of Celsus",
      image: "https://images.unsplash.com/photo-1760995142780-75ee0fa82353?auto=format&fit=crop&w=1600&q=80"
    },
    day5: {
      title: "Istanbul · Hagia Sophia / Blue Mosque",
      image: "https://images.unsplash.com/photo-1636021597151-cc28dacd915c?auto=format&fit=crop&w=1600&q=80"
    },
    day6: {
      title: "Bosphorus Cruise",
      image: "https://images.unsplash.com/photo-1685106748514-d10288e9b535?auto=format&fit=crop&w=1600&q=80"
    }
  };

  const fallbackImage = dayImages.day5.image;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; 
    e.currentTarget.src = fallbackImage;
  };

  return (
    <div className="bg-[#fdfcfb] text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] md:h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src={dayImages.day5.image} 
            className="w-full h-full object-cover" 
            alt="Grace Way Turkey"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative z-20 max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="inline-block px-3 py-1 bg-[#FF9D00] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] rounded mb-6">
            {d.badge}
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black serif text-white mb-6 leading-tight tracking-tight">
            {d.title} <br/> {d.subtitle}
          </h1>
          <p className="text-white/80 text-base md:text-2xl font-light mb-10 tracking-widest uppercase">
            {d.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl">
              {d.cta_consult}
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-sm">
              {d.cta_plan}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Target Audience */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="text-left space-y-8">
            <h2 className="text-2xl md:text-4xl font-black serif text-slate-900 leading-tight border-l-4 md:border-l-8 border-[#FF9D00] pl-5 md:pl-8">
              {d.audience_title.split('，').map((chunk, i) => (
                <React.Fragment key={i}>
                  {chunk}{i === 0 && <br className="md:hidden"/>}
                </React.Fragment>
              ))}
            </h2>
            <div className="space-y-5">
              {d.audience_list.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9D00] mt-2 shrink-0"></span>
                  <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-[16/9] md:aspect-[4/5] bg-slate-200 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-xl">
              <img 
                src={dayImages.day3.image} 
                className="w-full h-full object-cover" 
                alt="Heritage" 
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Highlights */}
      <section className="py-20 md:py-32 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black serif italic">{d.highlights_title}</h2>
            <div className="w-16 h-1 bg-[#FF9D00] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {d.highlights.map((h, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-sm">
                <span className="text-[#FF9D00] text-[9px] font-black uppercase tracking-widest mb-4 block opacity-50">HIGHLIGHT 0{i+1}</span>
                <h4 className="text-xl font-black mb-3 uppercase tracking-tight">{h.title}</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schedule Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black serif uppercase tracking-widest mb-2">{d.table_title}</h2>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest md:hidden">{d.table_mobile_hint}</p>
        </div>
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <table className="w-full text-left border-separate border-spacing-0 min-w-[700px] md:min-w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">{d.table_headers.day}</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">{d.table_headers.plan}</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">{d.table_headers.meals}</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">{d.table_headers.hotel}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {d.schedule.map((row, i) => (
                <tr key={i}>
                  <td className="px-6 py-5 font-black text-[#FF9D00]">{row.day}</td>
                  <td className="px-6 py-5 font-bold text-sm text-slate-800">{row.plan}</td>
                  <td className="px-6 py-5 text-center text-[11px] text-slate-500 font-medium">{row.b}/{row.l}/{row.d}</td>
                  <td className="px-6 py-5 text-[11px] text-slate-500 font-medium italic">{row.hotel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Daily Details */}
      <section className="py-20 md:py-32 space-y-24 md:space-y-40">
        {d.daily_details.map((item, i) => {
          const dayKey = `day${i + 1}` as keyof typeof dayImages;
          return (
            <div key={i} className={`max-w-7xl mx-auto px-6 flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-20 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="w-full aspect-[16/9] bg-slate-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg relative group">
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-slate-900 shadow-xl uppercase z-10 border border-slate-100">
                    DAY {item.day}
                  </div>
                  <img 
                    src={dayImages[dayKey].image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={dayImages[dayKey].title} 
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white font-black serif italic text-xl tracking-wide">{dayImages[dayKey].title}</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <h3 className="text-2xl md:text-4xl font-black serif text-slate-900 leading-tight">
                  {item.city} <br className="hidden md:block"/> 
                  <span className="text-[#FF9D00] text-lg md:text-2xl font-light tracking-wide">{item.theme}</span>
                </h3>
                <p className="text-base md:text-xl text-slate-500 font-light leading-relaxed">
                  {item.content}
                </p>
                <div className="p-6 md:p-10 bg-[#fdfaf6] rounded-[2rem] border border-orange-100/50 flex flex-col sm:flex-row gap-6 md:gap-12">
                  <div>
                    <p className="text-[9px] font-black text-orange-300 uppercase tracking-widest mb-1">{d.meals_label}</p>
                    <p className="text-slate-800 font-bold text-xs">{d.schedule[i].b} / {d.schedule[i].l} / {d.schedule[i].d}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-orange-300 uppercase tracking-widest mb-1">{d.hotel_label}</p>
                    <p className="text-slate-800 font-bold text-xs">{d.schedule[i].hotel}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 6. Fee Details */}
      <section className="py-20 md:py-32 bg-slate-50 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-sm border border-slate-100">
          <h2 className="text-2xl md:text-3xl font-black serif mb-12 uppercase tracking-widest text-center">{d.fee_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-[#FF9D00] uppercase tracking-widest border-l-4 border-[#FF9D00] pl-4">{d.included_title}</h4>
              <ul className="space-y-3 text-[13px] font-medium text-slate-600">
                {d.included_list.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-l-4 border-slate-200 pl-4">{d.excluded_title}</h4>
              <ul className="space-y-3 text-[13px] font-medium text-slate-600">
                {d.excluded_list.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer CTA */}
      <section className="py-32 bg-slate-950 text-white relative text-center px-6">
        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-6xl font-black serif italic">{d.footer_cta}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-xl">
              {d.cta_consult}
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-sm">
              {d.cta_plan}
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60] animate-in slide-in-from-bottom-12 duration-1000">
        <Link to="/contact" className="flex items-center justify-between bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 p-2 pl-6 rounded-full shadow-2xl">
          <span className="text-[10px] font-black uppercase tracking-widest">{d.sticky_cta}</span>
          <div className="w-10 h-10 bg-[#FF9D00] rounded-full flex items-center justify-center text-white shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default ItineraryS1;
