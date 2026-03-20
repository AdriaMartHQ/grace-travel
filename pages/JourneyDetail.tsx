import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { chinaInboundContent } from '../chinaInboundContent';
import { getChinaFallbackImage } from '../chinaImageFallback';

const JourneyDetail: React.FC = () => {
  const { language } = useLanguage();
  const { slug } = useParams();
  const content = chinaInboundContent[language];
  const journey = content.routes.find((item) => item.slug === slug);
  const labels =
    language === 'zh'
      ? {
          overview: '线路概览',
          highlights: '核心亮点',
          idealFor: '适合客群',
          standards: '服务标准',
          itinerary: '每日行程',
          gallery: '线路图库',
          spotlights: '景点精选',
          spotlightsHeading: '值得期待的场景',
          galleryHeading: '线路画面',
          itineraryHeading: '每日节奏',
        }
      : language === 'tr'
      ? {
          overview: 'Rota Özeti',
          highlights: 'Öne Çıkanlar',
          idealFor: 'Kimler İçin Uygun',
          standards: 'Hizmet Standardı',
          itinerary: 'Günlük Program',
          gallery: 'Rota Galerisi',
          spotlights: 'One Cikan Duraklar',
          spotlightsHeading: 'One Cikan Sahneler',
          galleryHeading: 'Rotadan Kareler',
          itineraryHeading: 'Gun Gun Akis',
        }
      : {
          overview: 'Route Overview',
          highlights: 'Core Highlights',
          idealFor: 'Ideal For',
          standards: 'Service Standards',
          itinerary: 'Day By Day',
          gallery: 'Journey Gallery',
          spotlights: 'Signature Stops',
          spotlightsHeading: 'What Stands Out',
          galleryHeading: 'In Pictures',
          itineraryHeading: 'Day by Day',
        };

  if (!journey) {
    return <Navigate to="/china-inbound" replace />;
  }

  const fallbackImage = getChinaFallbackImage(journey.title, journey.location);
  const spotlightImages = new Set(journey.spotlights.map((item) => item.image));
  const uniqueGallery = journey.gallery.filter((image) => !spotlightImages.has(image));

  const handleHeroImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = fallbackImage;
  };

  return (
    <div className="bg-white pt-24 animate-in fade-in duration-700">
      <SEO
        title={journey.title}
        description={journey.overview}
        keywords={`${journey.title}, ${journey.location}, ${journey.duration}, China inbound travel`}
      />

      <section className="relative min-h-[70vh] md:min-h-[82vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={journey.heroImage}
            alt={journey.title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            onError={handleHeroImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/84 via-slate-950/48 to-slate-950/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-transparent to-slate-950/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-14 md:py-20 lg:py-24">
          <div className="max-w-3xl lg:max-w-[46rem]">
            <span className="inline-flex items-center rounded-full bg-[#FF9D00] px-4 py-2 text-[10px] md:text-xs font-black tracking-[0.16em] md:tracking-[0.22em] uppercase text-white">
              {journey.badge}
            </span>
            <h1
              className="mt-5 md:mt-6 text-[1.95rem] sm:text-[2.35rem] md:text-[4.35rem] lg:text-[5rem] xl:text-[5.35rem] font-black text-white leading-[1.01] tracking-tight serif whitespace-nowrap"
            >
              {journey.title}
            </h1>
            <p className="mt-4 md:mt-5 max-w-[38rem] text-[1rem] md:text-[1.35rem] lg:text-[1.5rem] text-white/86 font-light leading-relaxed [text-wrap:pretty]">
              {journey.subtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-[11px] md:text-xs font-black tracking-[0.12em] md:tracking-[0.18em] uppercase text-white/72">
              <span>{journey.location}</span>
              <span className="text-[#FF9D00]">•</span>
              <span>{journey.duration}</span>
            </div>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#FF9D00] px-8 py-4 text-[12px] font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-orange-500/25"
              >
                {content.nav.enquire}
              </Link>
              <Link
                to="/china-inbound"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-[12px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md"
              >
                {language === 'zh' ? '中国入境游' : language === 'tr' ? 'Cin Giris Turlari' : 'China Inbound'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div>
              <span className="text-[11px] font-black tracking-[0.22em] uppercase text-[#FF9D00]">
                {labels.overview}
              </span>
              <p className="mt-5 text-lg md:text-xl leading-relaxed [text-wrap:pretty] text-slate-700">
                {journey.overview}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.22em] uppercase text-[#FF9D00]">
                {labels.highlights}
              </span>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {journey.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6 text-slate-700 leading-relaxed"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9D00]/10 text-sm font-black text-[#FF9D00]">
                      {index + 1}
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-slate-950 p-8 md:p-10 text-white">
            <span className="text-[11px] font-black tracking-[0.22em] uppercase text-[#FF9D00]">
              {labels.idealFor}
            </span>
            <ul className="mt-6 space-y-4">
              {journey.idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/85 leading-relaxed">
                  <span className="mt-1 text-[#FF9D00]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-white/10 pt-10">
              <span className="text-[11px] font-black tracking-[0.22em] uppercase text-[#FF9D00]">
                {labels.standards}
              </span>
              <ul className="mt-6 space-y-4">
                {journey.serviceStandards.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80 leading-relaxed">
                    <span className="mt-1 text-[#FF9D00]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[11px] font-black tracking-[0.22em] uppercase text-[#FF9D00]">
              {labels.spotlights}
            </span>
            <h2 className="mt-5 text-[2rem] md:text-[3rem] lg:text-[3.6rem] font-black text-slate-900 serif leading-[1.05] tracking-tight whitespace-nowrap">
              {labels.spotlightsHeading}
            </h2>
          </div>
        </div>
        <div className="mt-10 space-y-16 md:space-y-24">
          {journey.spotlights.map((spotlight, index) => (
            <div
              key={`${journey.id}-spotlight-${index}`}
              className={`max-w-7xl mx-auto px-6 flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 md:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-100 bg-slate-100 shadow-sm group">
                  <div className="absolute left-6 top-6 z-10 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-900 shadow-lg backdrop-blur-md">
                    {spotlight.label}
                  </div>
                  <img
                    src={spotlight.image}
                    alt={spotlight.title}
                    loading="lazy"
                    decoding="async"
                    onError={handleHeroImageError}
                    className="h-[320px] md:h-[440px] w-full object-cover object-center scale-[1.03] transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-[1.7rem] md:text-4xl font-black serif text-slate-900 leading-[1.08] tracking-tight [text-wrap:balance]">
                  {spotlight.title}
                </h3>
                <p className="mt-5 text-base md:text-xl text-slate-600 font-light leading-relaxed [text-wrap:pretty]">
                  {spotlight.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {uniqueGallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-black tracking-[0.22em] uppercase text-[#FF9D00]">
              {labels.gallery}
            </span>
            <h2 className="mt-5 text-[2rem] md:text-[3rem] lg:text-[3.6rem] font-black text-slate-900 serif leading-[1.05] tracking-tight whitespace-nowrap">
              {labels.galleryHeading}
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {uniqueGallery.map((image, index) => (
              <div
                key={`${journey.id}-gallery-${index}`}
                className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-100"
              >
                <img
                  src={image}
                  alt={`${journey.title} ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  onError={handleHeroImageError}
                  className="h-[260px] md:h-[320px] xl:h-[300px] w-full object-cover object-center scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[11px] font-black tracking-[0.22em] uppercase text-[#FF9D00]">
              {labels.itinerary}
            </span>
            <h2 className="mt-5 text-[2rem] md:text-[3rem] lg:text-[3.6rem] font-black text-slate-900 serif leading-[1.05] tracking-tight whitespace-nowrap">
              {labels.itineraryHeading}
            </h2>
          </div>
          <div className="mt-10 space-y-6">
            {journey.itinerary.map((day) => (
              <div
                key={day.day}
                className="grid gap-5 rounded-[2rem] border border-slate-100 bg-white p-6 md:grid-cols-[120px_1fr] md:p-8"
              >
                <div className="text-[#FF9D00] text-lg md:text-xl font-black tracking-tight">
                  {day.day}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-[1.12] tracking-tight [text-wrap:balance]">
                    {day.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed [text-wrap:pretty]">
                    {day.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="rounded-[2.5rem] bg-slate-900 px-8 py-14 md:px-16">
          <p className="text-sm md:text-base font-black tracking-[0.22em] uppercase text-[#FF9D00]">
            Grace Way China Journeys
          </p>
          <h3 className="mx-auto mt-4 max-w-[12ch] md:max-w-[16ch] text-3xl md:text-5xl font-black text-white serif leading-[1.08] [text-wrap:balance]">
            {content.contact.title}
          </h3>
          <p className="mt-5 max-w-3xl mx-auto text-white/70 leading-relaxed [text-wrap:pretty]">
            {content.contact.subtitle}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#FF9D00] px-8 py-4 text-[12px] font-black uppercase tracking-[0.18em] text-white"
            >
              {content.nav.enquire}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JourneyDetail;
