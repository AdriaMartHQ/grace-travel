import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const EMPHASIZED_FAQ_LINES = new Set([
  'İptal Koşulları（取消条件）',
  'Notlar / Ek Bilgiler（重要提示）',
]);

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const isEnglish = language === 'en';
  const isTurkish = language === 'tr';
  const heroTitleClasses = isEnglish
    ? 'text-[2.15rem] sm:text-[3.2rem] md:text-[4.8rem] lg:text-[5.6rem] max-w-[11ch]'
    : isTurkish
    ? 'text-[2.05rem] sm:text-[3rem] md:text-[4.35rem] lg:text-[5rem] max-w-[10.5ch]'
    : 'text-[2.15rem] sm:text-[3.2rem] md:text-[4.8rem] lg:text-[5.6rem] max-w-[12ch]';
  const heroSubtitleClasses = isEnglish
    ? 'md:text-[1.16rem] lg:text-[1.28rem] max-w-xl md:max-w-[33rem]'
    : isTurkish
    ? 'md:text-[1.12rem] lg:text-[1.22rem] max-w-xl md:max-w-[31rem]'
    : 'md:text-[1.22rem] lg:text-[1.38rem] max-w-2xl md:max-w-[36rem]';
  const [heroLead, ...heroVerseRest] = t.hero.subtitle.split('\n\n');
  const heroVerse = heroVerseRest.join('\n\n');
  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-end overflow-hidden px-4">
      <SEO 
        title={t.seo.home.title} 
        description={t.seo.home.description} 
        keywords={t.seo.home.keywords} 
      />
      <div className="absolute inset-0 z-0">
        <img
          src="/img/remote/u-1527838832700-5059252407fa.webp"
          srcSet="/img/remote/u-1527838832700-5059252407fa-768.webp 768w, /img/remote/u-1527838832700-5059252407fa-1080.webp 1080w, /img/remote/u-1527838832700-5059252407fa.webp 1366w"
          sizes="100vw"
          alt="Grace Way Hero"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/[0.78] via-slate-950/[0.42] to-slate-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.72] via-transparent to-slate-950/[0.12]"></div>
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-6xl pb-14 md:pb-20 lg:pb-24">
        <div className="max-w-4xl text-center md:text-left">
        <h1 className={`mx-auto md:mx-0 font-black text-white mb-5 md:mb-7 serif leading-[1.01] tracking-tight [text-wrap:balance] drop-shadow-2xl px-2 md:px-0 ${heroTitleClasses}`}>
          {t.hero.title}
        </h1>
        <p className={`text-[15px] sm:text-lg text-white/[0.88] ${heroVerse ? 'mb-5 md:mb-6' : 'mb-8 md:mb-11'} mx-auto md:mx-0 font-light leading-relaxed whitespace-pre-line [text-wrap:pretty] px-2 md:px-0 ${heroSubtitleClasses}`}>
          {heroLead}
        </p>
        {heroVerse && (
          <p className={`text-[15px] sm:text-lg text-white mb-8 md:mb-11 mx-auto md:mx-0 font-light leading-relaxed whitespace-pre-line [text-wrap:pretty] px-2 md:px-0 ${heroSubtitleClasses}`}>
            {heroVerse}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-5">
          <Link to="/tours" className="w-full sm:w-auto bg-[#FF9D00] text-white px-8 md:px-10 py-4 rounded-full text-[12px] md:text-sm font-black uppercase tracking-[0.16em] md:tracking-widest transition-all transform active:scale-95 shadow-xl shadow-orange-500/30">
            {t.hero.cta1}
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 md:px-10 py-4 rounded-full text-[12px] md:text-sm font-black uppercase tracking-[0.16em] md:tracking-widest transition-all">
            {t.hero.cta2}
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

const TourCard: React.FC<{ tour: any; priority?: boolean }> = ({ tour, priority = false }) => {
  const { t } = useLanguage();
  const currencySymbol = '¥'; // 锁定为人民币

  // 严谨的回退图 (Istanbul Hagia Sophia)
  const fallbackImg = "/img/remote/u-1636021597151-cc28dacd915c.webp";

  // 首张(priority)= LCP 关键图,用响应式 srcset 让移动端取更小变体
  const heroSrcSet = priority && tour.image
    ? `${tour.image.replace(/\.webp$/, '')}-768.webp 768w, ${tour.image.replace(/\.webp$/, '')}-1080.webp 1080w, ${tour.image} 1366w`
    : undefined;

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
            srcSet={heroSrcSet}
            sizes={priority ? "(min-width: 768px) 33vw, 100vw" : undefined}
            fetchPriority={priority ? "high" : undefined}
            decoding="async"
            onError={handleImgError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-md px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.16em] md:tracking-widest text-slate-900 shadow-lg max-w-[calc(100%-2rem)] md:max-w-none">
          {tour.location}
        </div>
      </div>
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] md:text-[9px] font-black text-[#FF9D00] uppercase tracking-[0.16em] md:tracking-widest">{tour.duration}</span>
          <span className="text-lg md:text-[1.7rem] font-black text-slate-900 tracking-tight">{typeof tour.price === 'number' ? `${currencySymbol}${tour.price}` : tour.price}</span>
        </div>
        <Link to={tour.path || "/contact"}>
          <h3 className="text-base sm:text-lg md:text-[1.5rem] font-black mb-4 text-slate-900 leading-[1.12] tracking-tight [text-wrap:balance] group-hover:text-[#FF9D00] transition-colors line-clamp-2">
            {tour.title}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2 mb-8 flex-grow">
          {(tour.highlights || []).slice(0, 3).map((h: string, i: number) => (
            <span key={i} className="text-[10px] md:text-[9px] font-black bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-50 tracking-[0.08em] md:tracking-widest h-fit leading-snug">{h}</span>
          ))}
        </div>
        <Link to={tour.path || "/contact"} className="block w-full text-center bg-slate-50 hover:bg-[#FF9D00] hover:text-white text-slate-900 py-4 rounded-xl font-black uppercase tracking-[0.16em] md:tracking-widest text-[11px] md:text-[10px] transition-all">
          {tour.path ? (t.nav.home === '首页' ? '查看详情' : 'View Details') : t.nav.enquire}
        </Link>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();
  const operationsKicker =
    language === 'zh' ? 'Turkey Operations' : language === 'tr' ? 'Türkiye Operasyonları' : 'Turkey Operations';
  const operationsTitle =
    language === 'zh' ? '土耳其本地服务中心' : language === 'tr' ? 'Türkiye Odaklı Yerel Hizmetler' : 'Turkey-Focused Local Services';
  const operationsIntro =
    language === 'zh'
      ? 'grace.tr 的公开服务范围收敛为土耳其主轴：精品线路、中文司导、接送包车、商务与会展接待均围绕土耳其本地执行。巴尔干与以色列仅作为旅行线路延伸，按项目单独确认。'
      : language === 'tr'
      ? 'grace.tr kamu kapsamını Türkiye ekseninde tutar: butik rotalar, Çince rehberlik, transferler, araç hizmetleri, iş ziyareti ve fuar desteği Türkiye içinde yürütülür. Balkanlar ve İsrail yalnızca seyahat uzantısı olarak proje bazında değerlendirilir.'
      : 'grace.tr keeps its public scope anchored in Turkey: boutique itineraries, Chinese-speaking guides, transfers, vehicle service, business visits, and exhibition support are executed locally in Turkey. The Balkans and Israel remain travel extensions only, confirmed project by project.';
  const operationsCta =
    language === 'zh' ? '咨询土耳其方案' : language === 'tr' ? 'Teklif Al' : 'Plan a Turkey Service';
  const operationsChips =
    language === 'zh'
      ? ['伊斯坦布尔总部', '土耳其全境包车', '中文司导团队', '商务与会展接待']
      : language === 'tr'
      ? ['Istanbul merkezi', 'Türkiye geneli araç', 'Çince ekip', 'Fuar ve iş ziyareti']
      : ['Istanbul base', 'Turkey-wide vehicles', 'Chinese-speaking team', 'Business & exhibition support'];

  const renderFaqAnswer = (answer: string) =>
    answer.split('\n').map((line, idx) => {
      if (!line.trim()) {
        return <div key={`faq-spacer-${idx}`} className="h-3" aria-hidden="true" />;
      }

      return (
        <p
          key={`faq-line-${idx}`}
          className={EMPHASIZED_FAQ_LINES.has(line) ? 'font-black text-slate-800' : ''}
        >
          {line}
        </p>
      );
    });

  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden">
      <Hero />
      
      {/* Featured Routes */}
      <section className="py-20 md:py-40 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6">
          <div className="text-left">
            <span className="text-[11px] md:text-[10px] font-black text-[#FF9D00] uppercase tracking-[0.22em] md:tracking-[0.4em] mb-4 block">{t.sections.featuredTours}</span>
            <h2 className="max-w-[18ch] text-[28px] md:text-5xl lg:text-6xl font-black serif text-slate-900 leading-[1.08] [text-wrap:balance]">{t.sections.featuredSubtitle}</h2>
          </div>
          <Link to="/tours" className="text-slate-900 font-black uppercase tracking-[0.16em] md:tracking-widest text-[11px] md:text-[10px] border-b-2 border-[#FF9D00] pb-2 w-fit">
            {t.sections.viewAll}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {(t.toursData || []).slice(0, 3).map((tour: any, idx: number) => (
            <TourCard key={tour.id} tour={tour} priority={idx === 0} />
          ))}
        </div>
      </section>

      <section className="bg-slate-950 border-t border-slate-900 text-white overflow-hidden">
        <div className="grid lg:min-h-[620px] lg:grid-cols-[minmax(0,42rem)_minmax(0,1fr)] items-stretch">
          <div className="w-full lg:justify-self-end">
            <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 text-left">
                <span className="text-[11px] md:text-[10px] font-black text-[#FF9D00] uppercase tracking-[0.22em] md:tracking-[0.4em] mb-4 block">
                  {operationsKicker}
                </span>
                <h3 className="max-w-[14ch] text-[28px] md:text-5xl font-black serif leading-[1.04] tracking-tight [text-wrap:balance]">
                  {operationsTitle}
                </h3>
                <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed [text-wrap:pretty] max-w-2xl">
                  {operationsIntro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {operationsChips.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.12em] md:tracking-[0.18em] px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center justify-center bg-[#FF9D00] text-white px-8 md:px-10 py-4 rounded-full text-[12px] md:text-sm font-black uppercase tracking-[0.16em] md:tracking-widest transition-all shadow-xl shadow-orange-500/20"
                >
                  {operationsCta}
                </Link>
              </div>
          </div>
          <div className="relative min-h-[320px] md:min-h-[420px] lg:min-h-full">
                <img
                  src="/img/remote/u-1636021597151-cc28dacd915c.webp"
                  alt={operationsTitle}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950/0 via-slate-950/10 to-slate-950/[0.72]"></div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] md:text-[10px] font-black text-[#FF9D00] uppercase tracking-[0.22em] md:tracking-[0.4em] mb-4 block">The Grace Way Standard</span>
            <h3 className="mx-auto max-w-[18ch] text-[28px] md:text-5xl lg:text-6xl font-black serif mb-6 leading-[1.08] [text-wrap:balance]">{t.sections.whyUsSubtitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🛡️', title: t.features.f1.title, desc: t.features.f1.desc },
              { icon: '✨', title: t.features.f2.title, desc: t.features.f2.desc },
              { icon: '🎓', title: t.features.f3.title, desc: t.features.f3.desc }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md">
                <div className="text-4xl mb-6">{f.icon}</div>
                <h4 className="text-lg md:text-xl font-black mb-4 uppercase tracking-tight leading-snug">{f.title}</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-40 max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-[28px] md:text-3xl font-black serif text-slate-900 leading-[1.1]">{t.sections.faq}</h3>
        </div>
        <div className="space-y-4">
          {(t.faqs || []).map((faq: any, idx: number) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
              <button 
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left font-black text-slate-800 tracking-[0.03em] md:tracking-[0.08em] text-[13px] md:text-[11px] leading-snug"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 pt-0 text-slate-500 text-sm font-light leading-loose animate-in slide-in-from-top-2 duration-300">
                  {renderFaqAnswer(faq.a)}
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
