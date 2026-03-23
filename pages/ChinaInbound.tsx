import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import JourneyCard from '../components/JourneyCard';
import { useLanguage } from '../context/LanguageContext';
import { chinaInboundContent, type JourneyCategory } from '../chinaInboundContent';

const ChinaInbound: React.FC = () => {
  const { language } = useLanguage();
  const content = chinaInboundContent[language];
  const routeCategoryOrder: Array<'all' | JourneyCategory> = ['all', 'innovation', 'classic', 'expo'];
  const [searchParams, setSearchParams] = useSearchParams();
  const searchCategory = searchParams.get('category');
  const initialFilter =
    searchCategory && routeCategoryOrder.includes(searchCategory as 'all' | JourneyCategory)
      ? (searchCategory as 'all' | JourneyCategory)
      : 'all';
  const [filter, setFilter] = useState<'all' | JourneyCategory>(initialFilter);
  const availableCategories = routeCategoryOrder.filter(
    (category) => category === 'all' || content.routes.some((route) => route.category === category),
  );
  const expoTitle =
    language === 'zh'
      ? '中国会展商务服务'
      : language === 'tr'
      ? 'Çin Fuar Hizmetleri'
      : 'China Expo Business Services';
  const expoIntro =
    language === 'zh'
      ? '面向土耳其客户的中国会展参访与商务对接服务，覆盖综合采购、工业制造、工程机械、汽车、医疗及中国市场进入机会。'
      : language === 'tr'
      ? 'Türkiye merkezli müşteri talepleri için geliştirilen Çin fuar ziyareti, iş eşleştirme ve yerel destek hizmetleri; tedarik, sanayi, makina, otomotiv, medikal ve pazar girişi odaklarını kapsar.'
      : 'Expo visits and business support in China for Turkey-facing clients, covering sourcing, industrial manufacturing, machinery, automotive, medical, and China market entry opportunities.';
  const kicker =
    filter === 'expo'
      ? language === 'zh'
        ? 'Expo Services'
        : language === 'tr'
        ? 'Fuar Hizmetleri'
        : 'Expo Services'
      : 'China Inbound';

  const ctaLabel =
    language === 'zh' ? '查看详情' : language === 'tr' ? 'Detaylari Incele' : 'View Details';
  const title =
    filter === 'expo'
      ? expoTitle
      : language === 'zh'
      ? '中国入境游'
      : language === 'tr'
      ? 'Cin Giris Turlari'
      : 'China Inbound Journeys';
  const intro =
    filter === 'expo'
      ? expoIntro
      : language === 'zh'
      ? '为海外客人设计的中国入境旅行系列，覆盖经典观光、商务访问与高端小团定制，让第一次来中国也能更轻松地找到合适线路。'
      : language === 'tr'
      ? 'Uluslararasi misafirler icin tasarlanan bu Cin seyahat serisi; klasik gezi, is ziyaretleri ve ust segment kucuk grup talepleri icin daha uygun rotalari daha kolay secmeyi saglar.'
      : 'Designed for international guests, this China journey collection covers classic sightseeing, delegation travel, and premium small-group routes, making it easier to choose the right itinerary for a first visit.';

  const filteredRoutes = useMemo(() => {
    return filter === 'all'
      ? content.routes
      : content.routes.filter((route) => route.category === filter);
  }, [content.routes, filter]);

  React.useEffect(() => {
    if (filter !== initialFilter) {
      setFilter(initialFilter);
    }
  }, [filter, initialFilter]);

  const handleFilterChange = (category: 'all' | JourneyCategory) => {
    setFilter(category);
    const nextSearchParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      nextSearchParams.delete('category');
    } else {
      nextSearchParams.set('category', category);
    }
    setSearchParams(nextSearchParams, { replace: true });
  };

  return (
    <div className="bg-slate-50 pt-24 min-h-screen animate-in fade-in duration-700">
      <SEO
        title={content.seo.tours.title}
        description={content.seo.tours.description}
        keywords={content.seo.tours.keywords}
      />

      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] md:tracking-[0.22em] text-[#FF9D00]">
            {kicker}
          </span>
          <h1 className="mx-auto mt-4 max-w-[14ch] text-[2rem] sm:text-[2.4rem] md:text-[3.5rem] lg:text-[4rem] font-black serif leading-[1.06] tracking-tight [text-wrap:balance]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-[15px] md:text-lg text-white/70 leading-relaxed [text-wrap:pretty]">
            {intro}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {availableCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-5 md:px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.12em] md:tracking-[0.18em] transition-all ${
                filter === category
                  ? 'bg-[#FF9D00] text-white shadow-lg shadow-orange-500/20'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {content.routeCategories[category]}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {filteredRoutes.map((journey, index) => (
            <JourneyCard
              key={journey.id}
              journey={journey}
              ctaLabel={ctaLabel}
              basePath="/china-inbound"
              priority={index === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChinaInbound;
