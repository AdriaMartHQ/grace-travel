
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ItineraryS2: React.FC = () => {
  const { t } = useLanguage();
  const d = t.itinerary_s2;
  const imgs = d.images;

  const dayImages: Record<string, { title: string; image: string }> = {
    day1: { title: "Aegean Sunset", image: imgs.day1Image },
    day2: { title: "Pamukkale Travertines", image: imgs.day2Image },
    day3: { title: "Fethiye Blue Lagoon", image: imgs.day3Image },
    day4: { title: "D400 Scenic Route", image: imgs.day4Image },
    day5: { title: "Aspendos Theater", image: imgs.day5Image },
    day6: { title: "Silk Road Landscape", image: imgs.day6Image },
    day7: { title: "Hot Air Balloons", image: imgs.day7Image },
    day8: { title: "Hagia Sophia", image: imgs.day8Image }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; 
    e.currentTarget.src = "https://images.unsplash.com/photo-1636021597151-cc28dacd915c?auto=format&fit=crop&w=1600&q=80";
  };

  return (
    <div className="bg-[#fdfcfb] text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[80vh] md:h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img src={imgs.heroImage} className="w-full h-full object-cover" alt="S2 Tour" onError={handleImageError} />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative z-20 max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="inline-block px-3 py-1 bg-[#FF9D00] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded mb-6">{d.badge}</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black serif text-white mb-6 leading-tight tracking-tight">{d.title} <br/> {d.subtitle}</h1>
          <p className="text-white/80 text-base md:text-2xl font-light mb-10 tracking-widest uppercase">{d.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl">{d.cta_consult}</Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-sm">{d.cta_plan}</Link>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="text-left space-y-8">
            <h2 className="text-2xl md:text-4xl font-black serif text-slate-900 leading-tight border-l-4 md:border-l-8 border-[#FF9D00] pl-5 md:pl-8">{d.audience_title}</h2>
            <div className="space-y-5">
              {d.audience_list.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9D00] mt-2 shrink-0"></span>
                  <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden shadow-xl">
            <img src={imgs.coverImage} className="w-full h-full object-cover" alt="Grace Way Turkey" onError={handleImageError} />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black serif italic">{d.highlights_title}</h2>
            <div className="w-16 h-1 bg-[#FF9D00] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-black serif text-center mb-10 uppercase">{d.table_title}</h2>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <table className="w-full text-left bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 min-w-[700px]">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-[9px] font-black uppercase text-slate-400">{d.table_headers.day}</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase text-slate-400">{d.table_headers.plan}</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase text-slate-400 text-center">{d.table_headers.meals}</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase text-slate-400">{d.table_headers.hotel}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {d.schedule.map((row, i) => (
                <tr key={i}>
                  <td className="px-6 py-5 font-black text-[#FF9D00]">{row.day}</td>
                  <td className="px-6 py-5 font-bold text-sm">{row.plan}</td>
                  <td className="px-6 py-5 text-center text-[11px] text-slate-500 font-medium">{row.b}/{row.l}/{row.d}</td>
                  <td className="px-6 py-5 text-[11px] text-slate-500 font-medium italic">{row.hotel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 md:py-32 space-y-24 md:space-y-40">
        {d.daily_details.map((item, i) => {
          const dayKey = `day${i + 1}`;
          return (
            <div key={i} className={`max-w-7xl mx-auto px-6 flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-20 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/9] bg-slate-100 rounded-[2rem] overflow-hidden shadow-lg relative group">
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-slate-900 z-10">DAY {item.day}</div>
                  <img src={dayImages[dayKey]?.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={item.city} onError={handleImageError} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-left space-y-6">
                <h3 className="text-2xl md:text-4xl font-black serif text-slate-900">{item.city} <br/><span className="text-[#FF9D00] text-lg md:text-2xl font-light">{item.theme}</span></h3>
                <p className="text-base md:text-xl text-slate-500 font-light leading-relaxed">{item.content}</p>
                <div className="p-6 bg-[#fdfaf6] rounded-[2rem] border border-orange-100 flex flex-col sm:flex-row gap-6">
                  <div><p className="text-[9px] font-black text-orange-300 uppercase mb-1">{d.meals_label}</p><p className="text-slate-800 font-bold text-xs">{d.schedule[i].b} / {d.schedule[i].l} / {d.schedule[i].d}</p></div>
                  <div><p className="text-[9px] font-black text-orange-300 uppercase mb-1">{d.hotel_label}</p><p className="text-slate-800 font-bold text-xs">{d.schedule[i].hotel}</p></div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Fee & Footer */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto bg-white p-12 md:p-24 rounded-[3rem] shadow-sm">
          <h2 className="text-2xl md:text-3xl font-black serif text-center mb-12">{d.fee_title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div><h4 className="text-[10px] font-black text-[#FF9D00] uppercase mb-4 border-l-4 border-[#FF9D00] pl-4">{d.included_title}</h4><ul className="space-y-3 text-sm text-slate-600">{d.included_list.map((it, i) => <li key={i}>• {it}</li>)}</ul></div>
            <div><h4 className="text-[10px] font-black text-slate-400 uppercase mb-4 border-l-4 border-slate-200 pl-4">{d.excluded_title}</h4><ul className="space-y-3 text-sm text-slate-600">{d.excluded_list.map((it, i) => <li key={i}>• {it}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 text-white text-center px-6">
        <h2 className="text-3xl md:text-6xl font-black serif italic mb-10">{d.footer_cta}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-12 py-5 bg-[#FF9D00] text-white rounded-full font-black uppercase text-sm shadow-xl">{d.cta_consult}</Link>
          <Link to="/contact" className="px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase text-sm">{d.cta_plan}</Link>
        </div>
      </section>
      
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60]">
        <Link to="/contact" className="flex items-center justify-between bg-white/95 backdrop-blur-xl border border-slate-200 p-2 pl-6 rounded-full shadow-2xl">
          <span className="text-[10px] font-black uppercase tracking-widest">{d.sticky_cta}</span>
          <div className="w-10 h-10 bg-[#FF9D00] rounded-full flex items-center justify-center text-white"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></div>
        </Link>
      </div>
    </div>
  );
};

export default ItineraryS2;
