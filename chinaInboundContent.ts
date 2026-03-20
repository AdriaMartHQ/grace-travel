import type { Language } from './translations';

export type JourneyCategory = 'innovation' | 'classic';
export type HighlightCategory = 'innovation' | 'heritage' | 'city';

export interface JourneyDay {
  day: string;
  title: string;
  description: string;
}

export interface JourneySpotlight {
  label: string;
  title: string;
  summary: string;
  image: string;
}

export interface Journey {
  id: string;
  slug: string;
  category: JourneyCategory;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  image: string;
  heroImage: string;
  gallery: string[];
  spotlights: JourneySpotlight[];
  overview: string;
  highlights: string[];
  itinerary: JourneyDay[];
  idealFor: string[];
  serviceStandards: string[];
}

export interface Experience {
  id: string;
  category: HighlightCategory;
  city: string;
  title: string;
  summary: string;
  bullets: string[];
  image: string;
}

export interface SiteContent {
  brand: {
    name: string;
    subline: string;
  };
  nav: {
    home: string;
    tours: string;
    highlights: string;
    about: string;
    contact: string;
    enquire: string;
    closeMenu: string;
  };
  seo: {
    home: { title: string; description: string; keywords: string };
    tours: { title: string; description: string; keywords: string };
    highlights: { title: string; description: string; keywords: string };
    about: { title: string; description: string; keywords: string };
    contact: { title: string; description: string; keywords: string };
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sections: {
    featured: string;
    featuredSubtitle: string;
    routeHighlights: string;
    routeHighlightsSubtitle: string;
    whyUs: string;
    whyUsSubtitle: string;
    faq: string;
    faqIntro: string;
    viewAll: string;
    highlightLead: string;
  };
  routeCategories: Record<'all' | JourneyCategory, string>;
  highlightCategories: Record<'all' | HighlightCategory, string>;
  routes: Journey[];
  experiences: Experience[];
  whyUs: Array<{ title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
  about: {
    heroTitle: string;
    heroSubtitle: string;
    introTitle: string;
    introText: string;
    capabilitiesTitle: string;
    capabilities: string[];
    processTitle: string;
    process: Array<{ title: string; desc: string }>;
    audienceTitle: string;
    audienceText: string;
    promiseTitle: string;
    promiseText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    gatewayTitle: string;
    gatewaySubtitle: string;
    cards: Array<{ name: string; role: string; detail: string; phone: string }>;
    serviceTitle: string;
    serviceItems: string[];
    wechatLabel: string;
    whatsappLabel: string;
    copied: string;
    bookingsLabel: string;
    partnershipsLabel: string;
    responseNote: string;
    mapLabel: string;
    gateways: Array<{ name: string; lat: number; lng: number }>;
  };
  footer: {
    headline: string;
    statement: string;
    about: string;
    explore: string;
    contact: string;
    serviceDesk: string;
    rights: string;
  };
}

const chinaAssetImages = {
  bayTech:
    'https://images.unsplash.com/photo-1634647626758-ad751a260e9f?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  bayIndustry:
    'https://images.unsplash.com/photo-1741225775531-035965543c95?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  classicChina:
    'https://images.unsplash.com/photo-1701668910380-b44dcc028525?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  shenzhenNight:
    'https://images.unsplash.com/photo-1575301236982-2857a6daf71a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  guangzhouNight:
    'https://images.unsplash.com/photo-1609330262490-77d0a1360bfe?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  greatWall:
    'https://images.unsplash.com/photo-1505763941729-634dfa346b1b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  greatWallAlt:
    'https://images.unsplash.com/photo-1737498446282-159e13bd8de9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  bayBridge:
    'https://images.unsplash.com/photo-1632795042875-0c3e8671d8dc?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZyUyMGtvbmclMjB6aHVoYWklMjBtYWNhbyUyMGJyaWRnZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  apolloDrive:
    'https://images.unsplash.com/photo-1764983253036-edd0f55af679?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  djiDrone:
    'https://images.unsplash.com/photo-1606460754287-d8b9e905d8e4?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  factoryLine:
    'https://images.unsplash.com/photo-1649003175416-9ae7904371db?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  yongqingFang:
    'https://images.unsplash.com/photo-1755161440007-c3ca156edda3?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  xianHeritage:
    'https://images.unsplash.com/photo-1523946963389-207478f6cb2e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  forbiddenCityMoat:
    'https://images.unsplash.com/photo-1757510146664-48b437cddd1a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  chengduLifestyle:
    'https://images.unsplash.com/photo-1757212934677-57df0ec6d762?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  pandaAlt:
    'https://images.unsplash.com/photo-1504713721722-f73b4ccdfe6a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  shanghaiNight:
    'https://images.unsplash.com/photo-1742228836192-a7294496453b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  shanghaiNightAlt:
    'https://images.unsplash.com/photo-1696142990758-581061f2801d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800',
  shenzhenBayAlt:
    'https://images.unsplash.com/photo-1634647626758-ad751a260e9f?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  shenzhenBayAlt2:
    'https://images.unsplash.com/photo-1634647626782-f5fffa9fd9b1?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  huaqiangbeiAlt:
    'https://images.unsplash.com/photo-1619355419589-19790f1bf3ee?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  zhuhaiAlt:
    'https://images.unsplash.com/photo-1659866813094-23ea349b848f?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  zhuhaiAlt2:
    'https://images.unsplash.com/photo-1657471250720-4e51a99aca85?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  forbiddenCityAlt:
    'https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?auto=format&fit=crop&fm=jpg&q=80&w=1800',
  xianAlt:
    'https://images.unsplash.com/photo-1591709976757-94efbfd3b01e?auto=format&fit=crop&fm=jpg&q=80&w=1800',
} as const;

const chinaJourneyGalleries = {
  bayTech: [
    chinaAssetImages.factoryLine,
    chinaAssetImages.bayIndustry,
    chinaAssetImages.shenzhenBayAlt,
    chinaAssetImages.shenzhenBayAlt2,
    chinaAssetImages.huaqiangbeiAlt,
    chinaAssetImages.zhuhaiAlt,
  ],
  bayIndustry: [
    chinaAssetImages.apolloDrive,
    chinaAssetImages.djiDrone,
    chinaAssetImages.shenzhenNight,
    chinaAssetImages.huaqiangbeiAlt,
    chinaAssetImages.zhuhaiAlt,
    chinaAssetImages.zhuhaiAlt2,
  ],
  classicChina: [
    chinaAssetImages.forbiddenCityMoat,
    chinaAssetImages.greatWallAlt,
    chinaAssetImages.pandaAlt,
    chinaAssetImages.shanghaiNightAlt,
    chinaAssetImages.forbiddenCityAlt,
    chinaAssetImages.xianAlt,
  ],
} as const;

const chinaJourneySpotlights: Record<Language, Record<'r1' | 'r2' | 'r3', JourneySpotlight[]>> = {
  zh: {
    r1: [
      {
        label: '深圳',
        title: '深圳湾创业广场',
        summary: '从专业孵化、创业投资到产业资源协同，这里很适合作为海外客人理解深圳创新生态的第一站。',
        image: chinaAssetImages.shenzhenNight,
      },
      {
        label: 'AI 出行',
        title: '百度 Apollo 自动驾驶',
        summary: '通过主题讲解与自动驾驶体验，把中国 AI 技术如何进入真实交通场景更直观地讲清楚。',
        image: chinaAssetImages.apolloDrive,
      },
      {
        label: '硬科技',
        title: '大疆与机器人体验',
        summary: '无人机、机器人与交互展示，适合突出中国工程能力、产品定义能力和商业化速度。',
        image: chinaAssetImages.djiDrone,
      },
      {
        label: '超级工程',
        title: '港珠澳大桥海上游',
        summary: '从海上视角理解湾区联通、基础设施规模与现代中国的工程叙事。',
        image: chinaAssetImages.bayBridge,
      },
    ],
    r2: [
      {
        label: '深圳',
        title: '百度与低空经济',
        summary: '从 AI 到低空飞行服务，这一段很适合展示中国新产业如何快速形成完整应用场景。',
        image: chinaAssetImages.bayTech,
      },
      {
        label: '制造升级',
        title: '比亚迪、联想与广汽',
        summary: '把新能源、智能制造和传统工业升级放在一起看，更容易理解中国制造的系统能力。',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: '广州',
        title: '陈李济与永庆坊',
        summary: '老字号焕新与历史街区更新，让整条线路不只有技术，也能讲清楚中国城市文化的更新方式。',
        image: chinaAssetImages.yongqingFang,
      },
      {
        label: '城市夜色',
        title: '珠江夜游',
        summary: '珠江夜景适合作为广州段的视觉高潮，强化城市现代感与旅行体验。',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: '湾区联通',
        title: '港珠澳大桥',
        summary: '作为收束段落，它把区域协同、工程能力和湾区尺度感完整串起来。',
        image: chinaAssetImages.bayBridge,
      },
    ],
    r3: [
      {
        label: '北京',
        title: '故宫',
        summary: '故宫是第一次来中国最具识别度的开场，能迅速建立海外客人对中国王朝文明的印象。',
        image: chinaAssetImages.classicChina,
      },
      {
        label: '北京',
        title: '长城',
        summary: '长城负责把“中国”的尺度感和历史厚度拉满，是经典中国线最重要的视觉记忆之一。',
        image: chinaAssetImages.greatWall,
      },
      {
        label: '西安',
        title: '兵马俑',
        summary: '兵马俑把帝国气象和考古震撼直接展示出来，是西安段最强的文化锚点。',
        image: chinaAssetImages.xianHeritage,
      },
      {
        label: '成都',
        title: '熊猫基地',
        summary: '熊猫让中国旅行更亲切、更具传播性，也让成都段从厚重历史切换到轻松生活方式。',
        image: chinaAssetImages.chengduLifestyle,
      },
      {
        label: '上海',
        title: '外滩夜景',
        summary: '外滩与黄浦江夜景负责完成现代中国的收尾，让整条线路从古都文明自然过渡到国际都市。',
        image: chinaAssetImages.shanghaiNight,
      },
    ],
  },
  en: {
    r1: [
      {
        label: 'Shenzhen',
        title: 'Shenzhen Bay Startup Plaza',
        summary: 'A strong opening stop for explaining Shenzhen’s innovation ecosystem through incubation, venture capital, and industry resources.',
        image: chinaAssetImages.shenzhenNight,
      },
      {
        label: 'AI Mobility',
        title: 'Baidu Apollo Autonomous Driving',
        summary: 'Talks and ride experiences make it easier to show how Chinese AI is entering real transport scenarios.',
        image: chinaAssetImages.apolloDrive,
      },
      {
        label: 'Hard Tech',
        title: 'DJI and Robotics Experience',
        summary: 'Drones, robotics, and hands-on product interaction highlight China’s engineering depth and commercialization speed.',
        image: chinaAssetImages.djiDrone,
      },
      {
        label: 'Mega Project',
        title: 'Hong Kong-Zhuhai-Macao Bridge Sea Tour',
        summary: 'A sea-level perspective that helps guests understand Bay Area connectivity, infrastructure scale, and modern Chinese engineering.',
        image: chinaAssetImages.bayBridge,
      },
    ],
    r2: [
      {
        label: 'Shenzhen',
        title: 'Baidu and the Low-Altitude Economy',
        summary: 'From AI to low-altitude flight services, this stop shows how fast China can turn emerging sectors into real-world applications.',
        image: chinaAssetImages.bayTech,
      },
      {
        label: 'Manufacturing Upgrade',
        title: 'BYD, Lenovo, and GAC',
        summary: 'Looking at new energy, smart manufacturing, and industrial upgrading together makes China’s systems capability much easier to explain.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Guangzhou',
        title: 'Chen Liji and Yongqing Fang',
        summary: 'Brand renewal and historic district regeneration add a cultural layer that balances the technology narrative.',
        image: chinaAssetImages.yongqingFang,
      },
      {
        label: 'Nightscape',
        title: 'Pearl River Evening Cruise',
        summary: 'The Pearl River skyline works as the visual high point of the Guangzhou segment and strengthens the travel experience.',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: 'Regional Link',
        title: 'Hong Kong-Zhuhai-Macao Bridge',
        summary: 'A fitting final chapter that brings together regional coordination, engineering confidence, and Bay Area scale.',
        image: chinaAssetImages.bayBridge,
      },
    ],
    r3: [
      {
        label: 'Beijing',
        title: 'The Forbidden City',
        summary: 'One of the clearest openings for first-time visitors, helping them immediately grasp the imperial scale of Chinese civilization.',
        image: chinaAssetImages.classicChina,
      },
      {
        label: 'Beijing',
        title: 'The Great Wall',
        summary: 'The Great Wall delivers the sense of scale and historical weight that defines the classic first impression of China.',
        image: chinaAssetImages.greatWall,
      },
      {
        label: 'Xi’an',
        title: 'The Terracotta Warriors',
        summary: 'A powerful cultural anchor for the Xi’an segment, combining imperial grandeur with archaeological drama.',
        image: chinaAssetImages.xianHeritage,
      },
      {
        label: 'Chengdu',
        title: 'Panda Base',
        summary: 'Pandas make the route feel warmer and more shareable while smoothly shifting the tone from history to everyday life.',
        image: chinaAssetImages.chengduLifestyle,
      },
      {
        label: 'Shanghai',
        title: 'The Bund Night Skyline',
        summary: 'The Bund and Huangpu night view complete the modern-China ending and bring the route into a metropolitan finish.',
        image: chinaAssetImages.shanghaiNight,
      },
    ],
  },
  tr: {
    r1: [
      {
        label: 'Shenzhen',
        title: 'Shenzhen Bay Startup Plaza',
        summary: 'Kuluçka, yatırım ve sektör kaynaklarını bir arada gösterdiği için Shenzhen inovasyon ekosistemini anlatmak adına güçlü bir başlangıç noktasıdır.',
        image: chinaAssetImages.shenzhenNight,
      },
      {
        label: 'Yapay Zeka',
        title: 'Baidu Apollo Otonom Sürüş',
        summary: 'Sunumlar ve deneyim alanı sayesinde Çin yapay zekasının gerçek ulaşım senaryolarına nasıl girdiği daha net anlatılır.',
        image: chinaAssetImages.apolloDrive,
      },
      {
        label: 'Derin Teknoloji',
        title: 'DJI ve Robotik Deneyimi',
        summary: 'Drone, robotik ve etkileşimli ürünler Çin’in mühendislik gücünü ve ticarileşme hızını öne çıkarır.',
        image: chinaAssetImages.djiDrone,
      },
      {
        label: 'Mega Proje',
        title: 'Hong Kong-Zhuhai-Makao Köprüsü Deniz Turu',
        summary: 'Deniz perspektifi, Körfez Bölgesi bağlantısını, altyapı ölçeğini ve modern Çin mühendisliğini birlikte gösterir.',
        image: chinaAssetImages.bayBridge,
      },
    ],
    r2: [
      {
        label: 'Shenzhen',
        title: 'Baidu ve Alçak İrtifa Ekonomisi',
        summary: 'Yapay zekadan alçak irtifa uçuş hizmetlerine kadar bu bölüm, Çin’in yeni sektörleri ne kadar hızlı uygulamaya taşıdığını gösterir.',
        image: chinaAssetImages.bayTech,
      },
      {
        label: 'Üretim Dönüşümü',
        title: 'BYD, Lenovo ve GAC',
        summary: 'Yeni enerji, akıllı üretim ve sanayi dönüşümünü birlikte görmek Çin’in sistem kapasitesini daha iyi açıklar.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Guangzhou',
        title: 'Chen Liji ve Yongqing Fang',
        summary: 'Köklü markaların yenilenmesi ve tarihi mahallenin dönüşümü, teknoloji anlatısını kültürel bir katmanla dengeler.',
        image: chinaAssetImages.yongqingFang,
      },
      {
        label: 'Gece Manzarası',
        title: 'İnci Nehri Akşam Gezisi',
        summary: 'Guangzhou bölümünün görsel zirvesi olarak modern şehir hissini ve gezi deneyimini güçlendirir.',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: 'Bölgesel Bağ',
        title: 'Hong Kong-Zhuhai-Makao Köprüsü',
        summary: 'Kapanış bölümünde bölgesel koordinasyonu, mühendislik özgüvenini ve Körfez Bölgesi ölçeğini bir araya getirir.',
        image: chinaAssetImages.bayBridge,
      },
    ],
    r3: [
      {
        label: 'Pekin',
        title: 'Yasak Şehir',
        summary: 'İlk kez gelen misafirler için Çin imparatorluk medeniyetinin ölçeğini en hızlı kuran duraklardan biridir.',
        image: chinaAssetImages.classicChina,
      },
      {
        label: 'Pekin',
        title: 'Çin Seddi',
        summary: 'Çin Seddi, ülkenin ölçeğini ve tarihsel ağırlığını en güçlü şekilde hissettiren klasik görsel hafızayı yaratır.',
        image: chinaAssetImages.greatWall,
      },
      {
        label: 'Xi’an',
        title: 'Toprak Askerler',
        summary: 'Xi’an bölümünün en güçlü kültürel çıpası olarak imparatorluk ihtişamını ve arkeolojik etkiyi doğrudan gösterir.',
        image: chinaAssetImages.xianHeritage,
      },
      {
        label: 'Chengdu',
        title: 'Panda Üssü',
        summary: 'Pandalar rotayı daha sıcak ve paylaşılabilir hale getirirken tonu tarihten gündelik yaşama doğru yumuşatır.',
        image: chinaAssetImages.chengduLifestyle,
      },
      {
        label: 'Şanghay',
        title: 'Bund Gece Silüeti',
        summary: 'Bund ve Huangpu gece manzarası, rotayı modern Çin atmosferiyle tamamlayarak metropolitan bir kapanış sunar.',
        image: chinaAssetImages.shanghaiNight,
      },
    ],
  },
};

export const chinaInboundContent: Record<Language, SiteContent> = {
  zh: {
    brand: {
      name: 'GRACE WAY',
      subline: '恩途 · 中国入境游',
    },
    nav: {
      home: '首页',
      tours: '精选线路',
      highlights: '中国亮点',
      about: '关于我们',
      contact: '联系我们',
      enquire: '定制咨询',
      closeMenu: '关闭菜单',
    },
    seo: {
      home: {
        title: '中国入境游定制旅行',
        description: '为海外游客、商务考察团与高端定制小团打造中国经典城市、科技创新与文化体验线路。',
        keywords: '中国入境游, 中国定制旅行, 北京西安成都上海, 大湾区科技考察, China inbound travel'
      },
      tours: {
        title: '中国精选线路',
        description: '查看三条首发中国入境游线路，包括大湾区科技之旅与中国经典城市文化之旅。',
        keywords: '中国旅游线路, 中国经典线路, 科技考察线路, China journeys'
      },
      highlights: {
        title: '中国亮点与城市体验',
        description: '从长城、兵马俑到深圳创新走廊与黄浦江夜景，快速理解中国旅行的核心吸引力。',
        keywords: '中国亮点, 中国城市体验, 长城, 兵马俑, 熊猫基地, 上海外滩'
      },
      about: {
        title: '关于 Grace Way 中国入境游',
        description: '我们为国际游客设计更清晰、更好落地的中国入境游路线与落地接待方案。',
        keywords: '中国入境游服务, 旅行策划, 商务考察, 高端定制'
      },
      contact: {
        title: '联系中国入境游顾问',
        description: '通过微信、WhatsApp 或邮件联系 Grace Way 团队，获取中国线路咨询与定制方案。',
        keywords: '中国旅游咨询, 微信咨询, WhatsApp 旅行顾问, China travel contact'
      },
    },
    hero: {
      kicker: 'China Inbound Journeys',
      title: '为全球游客设计的中国旅行',
      subtitle: '从北京、西安、成都、上海的经典城市脉络，到粤港澳大湾区的科技创新现场，我们把真正值得讲述的中国，整理成更清晰、更好落地的旅行方案。',
      ctaPrimary: '查看三条线路',
      ctaSecondary: '联系顾问',
    },
    sections: {
      featured: '首发系列',
      featuredSubtitle: '首发三条中国入境游产品',
      routeHighlights: '中国亮点',
      routeHighlightsSubtitle: '第一次来中国，哪些体验最值得放进产品页',
      whyUs: '为什么选择 Grace Way',
      whyUsSubtitle: '我们如何把复杂的中国旅行，做成容易理解也容易成交的产品',
      faq: '旅行问答',
      faqIntro: '这部分先覆盖海外客人最常问的核心问题，后续上线时可继续补签证、支付和取消政策。',
      viewAll: '查看全部',
      highlightLead: '从科技、历史、城市与生活方式四个维度建立对中国的第一印象。',
    },
    routeCategories: {
      all: '全部线路',
      innovation: '科技探索',
      classic: '经典中国',
    },
    highlightCategories: {
      all: '全部亮点',
      innovation: '创新中国',
      heritage: '历史文化',
      city: '城市生活',
    },
    routes: [
      {
        id: 'r1',
        slug: 'greater-bay-area-tech-7-days',
        category: 'innovation',
        badge: '7天6晚 · 大湾区科技线',
        title: '大湾区科技创新',
        subtitle: '7天6晚，走进深圳与珠海，集中看懂人工智能、智能制造与湾区创新速度',
        duration: '7天6晚',
        location: '深圳 / 珠海',
        image: chinaAssetImages.shenzhenNight,
        heroImage: chinaAssetImages.shenzhenBayAlt2,
        gallery: [...chinaJourneyGalleries.bayTech],
        spotlights: chinaJourneySpotlights.zh.r1,
        overview: '以深圳和珠海为核心，这条线路面向希望看懂中国创新生态的海外来宾。它不是简单的企业打卡，而是围绕人工智能、自动驾驶、低空经济、基因科技、机器人、智能制造与数字办公展开的一条完整观察路径。',
        highlights: [
          '深度走进百度、大疆、比亚迪、联想、金山软件等科技领军企业',
          '在深圳湾创业广场、人才公园与华强北，理解中国创新文化与供应链效率',
          '覆盖 AI、自动驾驶、低空经济、基因科技、机器人与智能制造等前沿主题',
          '以港珠澳大桥海上游收束行程，补足中国超级工程与湾区协同发展的宏观视角',
        ],
        itinerary: [
          { day: 'D1', title: '抵达深圳，建立创新城市第一印象', description: '抵达后参访深圳湾创业广场与人才公园，从城市公共空间和创业生态切入，理解深圳为何成为中国创新最密集的城市之一。' },
          { day: 'D2', title: '人工智能与低空经济前沿体验', description: '参访百度，体验自动驾驶应用；下午前往低空经济展馆，系统认识无人机产业链和低空场景落地。' },
          { day: 'D3', title: '新能源科技与电子供应链观察', description: '上午参访比亚迪历史博物馆，下午走进华大基因与华强北，感受中国从科研到市场转化的速度。' },
          { day: 'D4', title: '无人机创新与机器人商业化', description: '上午参访大疆，下午体验机器人 6S 店，通过真实交互看到中国硬科技进入商业场景的方式。' },
          { day: 'D5', title: '智能制造基地与产业升级案例', description: '参访联想南方智能制造基地与广汽，从数字化工厂和精益生产两端理解中国制造升级。' },
          { day: 'D6', title: '软件创新与超级工程视角', description: '上午参访金山软件，下午乘船出海，近距离感受港珠澳大桥的工程规模与湾区联通意义。' },
          { day: 'D7', title: '返程', description: '根据返程安排送机或送站，结束本次科技创新探索之旅。' },
        ],
        idealFor: [
          '国际商务访问团与企业管理层',
          '高校、研究机构与创新主题研学团',
          '希望从产业角度理解中国的高端定制客群',
        ],
        serviceStandards: [
          '全程精选深圳与珠海四钻酒店',
          '包含行程所列餐食与企业预约安排',
          '可按需求增加同传、商务会谈或专题分享',
        ],
      },
      {
        id: 'r2',
        slug: 'greater-bay-area-tech-8-days',
        category: 'innovation',
        badge: '8天7晚 · 科技与产业升级',
        title: '大湾区科技产业',
        subtitle: '8天7晚，从前沿科技、先进制造到岭南城市文化，一次看懂湾区的产业活力',
        duration: '8天7晚',
        location: '深圳 / 广州 / 珠海',
        image: chinaAssetImages.bayIndustry,
        heroImage: chinaAssetImages.bayIndustry,
        gallery: [...chinaJourneyGalleries.bayIndustry],
        spotlights: chinaJourneySpotlights.zh.r2,
        overview: '这是在 7 天科技线基础上进一步延展的深度版本。它保留大湾区最有代表性的科技企业参访，同时加入汽车制造、老字号焕新、历史街区更新与珠江夜游，让线路不只谈技术，也谈产业、品牌与城市文化。',
        highlights: [
          '保留百度、大疆、比亚迪、联想、金山软件等核心科技参访',
          '新增一汽大众，从汽车工业与制造协同的角度补足观察维度',
          '以陈李济、永庆坊和珠江夜游增强岭南城市文化体验',
          '适合既要专业内容，也希望产品更完整、更有旅行感的海外团组',
        ],
        itinerary: [
          { day: 'D1', title: '抵达深圳，认识湾区创新起点', description: '从深圳湾创业广场和人才公园开启行程，建立对湾区创新生态与人才政策的基础理解。' },
          { day: 'D2', title: '人工智能与低空经济观察', description: '参访百度并体验自动驾驶场景；下午前往低空经济展馆，认识中国新兴航空器与飞行服务生态。' },
          { day: 'D3', title: '新能源、生命科学与华强北', description: '依次参访比亚迪历史博物馆、华大基因与华强北，看到中国从技术研发到终端市场的完整链路。' },
          { day: 'D4', title: '大疆与机器人体验', description: '通过无人机与服务机器人场景，观察中国技术产品如何完成全球化与商业化。' },
          { day: 'D5', title: '联想与广汽，理解智造逻辑', description: '深入联想与广汽，理解中国企业如何通过数字化工厂、流程管理和研发协同完成升级。' },
          { day: 'D6', title: '先进制造与城市文化焕新', description: '参访一汽大众；随后走进陈李济与永庆坊，并以珠江夜游感受广州的城市气质与夜色。' },
          { day: 'D7', title: '软件创新与湾区超级工程', description: '上午参访金山软件，下午乘船观赏港珠澳大桥，补足区域协同与工程实力的宏观视角。' },
          { day: 'D8', title: '返程', description: '早餐后根据航班或列车时间安排送机送站。' },
        ],
        idealFor: [
          '国际企业代表团与行业协会访问团',
          '希望系统认识中国科技、制造与城市更新的海外机构',
          '兼顾专业考察与城市体验的高端兴趣团组',
        ],
        serviceStandards: [
          '全程精选深圳及珠海四钻酒店',
          '包含行程所列餐食、企业参访与城市体验安排',
          '可按需要加入专题讲座、双语陪同与商务洽谈协助',
        ],
      },
      {
        id: 'r3',
        slug: 'china-classics-9-days',
        category: 'classic',
        badge: '9天8晚 · 经典中国',
        title: '经典中国四城',
        subtitle: '9天8晚串联北京、西安、成都、上海，从故宫长城到熊猫外滩，建立完整的中国第一印象',
        duration: '9天8晚',
        location: '北京 / 西安 / 成都 / 上海',
        image: chinaAssetImages.classicChina,
        heroImage: chinaAssetImages.classicChina,
        gallery: [...chinaJourneyGalleries.classicChina],
        spotlights: chinaJourneySpotlights.zh.r3,
        overview: '这是一条专为首次来华海外游客设计的经典线路。它串联中国最具识别度的四座城市，让旅客在一次行程中同时建立对王朝文明、地方生活、国宝熊猫与现代都市中国的完整印象。',
        highlights: [
          '一条线路串联北京、西安、成都、上海四大中国代表城市',
          '覆盖长城、故宫、天坛、兵马俑、大雁塔、熊猫基地、外滩等核心景点',
          '高铁与航班结合，在舒适度与效率之间取得平衡',
          '既能满足“第一次来中国”的高识别度期待，也保留地方文化与日常生活体验',
        ],
        itinerary: [
          { day: 'D1', title: '抵达北京', description: '接机入住，为中国经典城市之旅做好节奏铺垫。' },
          { day: 'D2', title: '长城与皇家园林', description: '游览居庸关长城与颐和园，从古代防御工程与皇家生活美学两端理解北京。' },
          { day: 'D3', title: '故宫、天坛与飞往西安', description: '在北京完成王朝文明主线后，晚间前往十三朝古都西安。' },
          { day: 'D4', title: '兵马俑与盛唐夜色', description: '参访兵马俑与大雁塔，并在大唐不夜城感受盛唐文化的当代表达。' },
          { day: 'D5', title: '古城墙与回民街', description: '从钟鼓楼广场、西安城墙到回民街，体验古都更贴近生活的一面。' },
          { day: 'D6', title: '高铁前往成都，进入巴蜀日常', description: '乘高铁前往成都，游览宽窄巷子与梨园会馆，体验更松弛、更生活化的中国城市气质。' },
          { day: 'D7', title: '熊猫、三国文化与飞往上海', description: '参访熊猫基地、武侯祠与锦里，晚间飞往中国最国际化的城市之一。' },
          { day: 'D8', title: '上海经典都市风貌', description: '游览豫园、城隍庙、南京路、外滩与黄浦江游船，从近代建筑与现代天际线读懂上海。' },
          { day: 'D9', title: '武康路与返程', description: '在梧桐树与历史街区之间收尾，之后安排送机。' },
        ],
        idealFor: [
          '第一次来中国的海外游客',
          '家庭客群、文化体验型旅行者与高端小团',
          '希望用一条线路快速建立中国整体印象的国际客群',
        ],
        serviceStandards: [
          '全程精选当地品质酒店',
          '包含行程所列城际交通与经典景点安排',
          '可根据语言需求匹配导游、司兼导与深度体验模块',
        ],
      },
    ],
    experiences: [
      {
        id: 'e1',
        category: 'innovation',
        city: '深圳',
        title: '深圳创新走廊',
        summary: '从创业广场到华强北，这里是最适合向海外客人解释“中国创新如何发生”的现场。',
        bullets: ['创业生态', '供应链效率', '工程师文化'],
        image: chinaAssetImages.bayIndustry,
      },
      {
        id: 'e2',
        category: 'innovation',
        city: '珠海',
        title: '港珠澳大桥海上视角',
        summary: '这不是普通观光，而是把湾区协同、超级工程和现代中国的尺度感一次说明白。',
        bullets: ['超级工程', '湾区联通', '海上观景'],
        image: chinaAssetImages.bayBridge,
      },
      {
        id: 'e3',
        category: 'heritage',
        city: '北京',
        title: '长城与皇家北京',
        summary: '长城、故宫、天坛与颐和园组成了海外游客最容易理解、也最难忘的中国开场。',
        bullets: ['王朝文明', '世界遗产', '中国识别度'],
        image: chinaAssetImages.classicChina,
      },
      {
        id: 'e4',
        category: 'heritage',
        city: '西安',
        title: '兵马俑与古都西安',
        summary: '如果要向第一次来中国的客人解释“帝国气象”，西安是最直接的城市样本。',
        bullets: ['兵马俑', '盛唐文化', '古城墙'],
        image: chinaAssetImages.xianHeritage,
      },
      {
        id: 'e5',
        category: 'city',
        city: '成都',
        title: '熊猫与巴蜀慢生活',
        summary: '成都让海外游客看到中国不只是宏大历史，也有轻松、友好、充满生活感的一面。',
        bullets: ['熊猫基地', '地方生活', '川蜀文化'],
        image: chinaAssetImages.chengduLifestyle,
      },
      {
        id: 'e6',
        category: 'city',
        city: '上海',
        title: '外滩与黄浦江夜景',
        summary: '上海是理解现代中国最有效的一扇窗口，既国际化，又保留明确的历史层次。',
        bullets: ['近代建筑', '都市夜景', '国际化城市'],
        image: chinaAssetImages.shanghaiNight,
      },
    ],
    whyUs: [
      {
        title: '先讲清楚，再安排漂亮',
        desc: '我们不是把景点堆在一起，而是先帮海外客人建立对中国的理解路径，再决定城市顺序、节奏和停留重点。',
      },
      {
        title: '同时懂观光与商务语境',
        desc: '无论是首次来华游客，还是企业访问团，我们都按不同客群重写叙事，不让线路只停留在“看到了什么”。',
      },
      {
        title: '上线思维明确',
        desc: '线路命名、卖点结构、CTA、咨询入口和多语言文案都按可发布状态整理，不会只停在内部草稿阶段。',
      },
    ],
    faqs: [
      {
        q: '这三条线路适合什么样的海外客人？',
        a: '9 天经典中国更适合第一次来华的海外游客、家庭与文化体验型客群；两条大湾区科技线则更适合商务访问、教育机构、企业考察和对中国产业升级感兴趣的高端团组。',
      },
      {
        q: '科技线路和经典城市线路可以组合吗？',
        a: '可以。实际销售中完全可以把大湾区科技线与上海延展、北京落地或经典文化段组合成更长的定制版，只需要在交通和节奏上重新编排。',
      },
      {
        q: '首发版本为什么没有公开价格？',
        a: '因为这三条线路目前更适合做询价型产品。不同市场的语言服务、酒店等级、团队规模和商务接待要求差异较大，公开单一价格反而容易失真。',
      },
      {
        q: '海外游客来中国前还需要补充哪些内容？',
        a: '正式上线前，建议补齐签证说明、入境政策、支付方式、取消条款、语言服务和网络使用提示。这些内容会显著影响咨询转化。',
      },
    ],
    about: {
      heroTitle: '我们在做的，不只是三条线路',
      heroSubtitle: '而是一套面向海外客人的中国入境游表达方式',
      introTitle: '产品思路',
      introText: 'Grace Way 中国入境游首发版的重点，不是“城市越多越好”，而是帮助海外客人快速建立清晰的中国印象。科技、文化、城市生活三条线并行，既适合观光，也适合商务与交流访问。',
      capabilitiesTitle: '我们当前这版能支撑什么',
      capabilities: [
        '高识别度的中国经典城市组合产品',
        '适合企业家与机构团组的科技考察路线',
        '多语言网页展示与后续宣传册字段复用',
        '按客群重写卖点与咨询入口的能力',
        '后续扩展签证、支付、政策说明的内容基础',
      ],
      processTitle: '服务流程',
      process: [
        { title: '1. 确认客群', desc: '先确认是首次来华游客、教育访问团还是商务考察团。' },
        { title: '2. 选择主线', desc: '在经典中国、科技创新或二者组合之间确定主叙事。' },
        { title: '3. 细化落地', desc: '根据人数、城市、语言和预算确定酒店、交通与接待标准。' },
      ],
      audienceTitle: '适合谁',
      audienceText: '适合国际旅行顾问、海外地接合作方、教育机构、企业家团组，以及希望把中国线路做成更成熟产品的人。',
      promiseTitle: '我们想保持的标准',
      promiseText: '让海外客人看到的中国，既有识别度，也有解释力；既能被喜欢，也能被理解。',
    },
    contact: {
      title: '让中国线路更快进入咨询状态',
      subtitle: '如果你已经在筛选线路、准备报价、做商务访问团方案，或者想把这三条线路继续延展成更完整的产品，我们可以直接一起收口。',
      gatewayTitle: '首发推荐入境城市',
      gatewaySubtitle: '地图不是办公地址，而是当前这套产品最常见、最容易接入的三大入境与会合节点。',
      cards: [
        {
          name: 'Taha（大华）',
          role: '商务与团组统筹',
          detail: '适合企业访问、教育考察、跨城市组合线路咨询',
          phone: '+86 134 2640 1777',
        },
        {
          name: 'Arwen（阿文）',
          role: '产品与行程顾问',
          detail: '适合经典城市线、家庭小团与多语言产品咨询',
          phone: '+86 181 4463 3364',
        },
      ],
      serviceTitle: '我们可以先一起确认这些事',
      serviceItems: [
        '客群画像和语言版本',
        '线路组合与天数节奏',
        '酒店标准与交通偏好',
        '商务访问、会面或讲座需求',
        '报价策略与是否公开价格',
      ],
      wechatLabel: '微信咨询',
      whatsappLabel: 'WhatsApp 咨询',
      copied: '已复制微信号',
      bookingsLabel: '线路与预订',
      partnershipsLabel: '合作与团组',
      responseNote: '工作日内优先回复。若是团组咨询，建议同时告知人数、目标城市、预计出行日期与语言需求。',
      mapLabel: '中国入境节点',
      gateways: [
        { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
        { name: 'Shanghai', lat: 31.2304, lng: 121.4737 },
        { name: 'Shenzhen', lat: 22.5431, lng: 114.0579 },
      ],
    },
    footer: {
      headline: 'Grace Way China Journeys',
      statement: '为海外游客、商务访问团与高端兴趣小团整理更清晰的中国旅行方案。',
      about: '当前版本以中国入境游首发内容为主，适合继续接入独立页面、宣传册或询价系统。',
      explore: '快速入口',
      contact: '咨询方式',
      serviceDesk: '全球客人咨询台',
      rights: '© 2026 Grace Way. All rights reserved.',
    },
  },
  en: {
    brand: {
      name: 'GRACE WAY',
      subline: 'China Inbound Journeys',
    },
    nav: {
      home: 'Home',
      tours: 'Journeys',
      highlights: 'China Highlights',
      about: 'About',
      contact: 'Contact',
      enquire: 'Plan My Trip',
      closeMenu: 'Close Menu',
    },
    seo: {
      home: {
        title: 'China Inbound Travel Journeys',
        description: 'Thoughtfully designed China journeys for international travelers, business delegations, and premium small groups.',
        keywords: 'China inbound travel, China custom journeys, Greater Bay Area tech tour, Beijing Xian Chengdu Shanghai'
      },
      tours: {
        title: 'China Journey Collection',
        description: 'Explore three launch-ready China routes, from Greater Bay Area innovation journeys to a classic first-time China itinerary.',
        keywords: 'China tours, China journey collection, tech delegation China, classic China itinerary'
      },
      highlights: {
        title: 'China Highlights & City Experiences',
        description: 'A quick introduction to the most compelling cultural, urban, and innovation-driven experiences for first-time China products.',
        keywords: 'China highlights, Great Wall, Terracotta Warriors, Shanghai Bund, Shenzhen innovation'
      },
      about: {
        title: 'About Grace Way China Journeys',
        description: 'We design clearer, launch-ready inbound China journeys for international guests, partner agencies, and delegation planners.',
        keywords: 'China inbound specialist, travel planning, delegation support, premium itinerary design'
      },
      contact: {
        title: 'Contact Our China Journey Desk',
        description: 'Reach Grace Way through WeChat, WhatsApp, or email for China route planning, group travel, and custom proposals.',
        keywords: 'China travel contact, WeChat travel advisor, WhatsApp China journey'
      },
    },
    hero: {
      kicker: 'China Inbound Journeys',
      title: 'China, designed for international travelers',
      subtitle: 'From Beijing, Xi’an, Chengdu, and Shanghai to the innovation engine of the Greater Bay Area, we turn complex China travel into clearer, better-structured journeys that are easier to understand and easier to sell.',
      ctaPrimary: 'Explore The Routes',
      ctaSecondary: 'Talk To An Advisor',
    },
    sections: {
      featured: 'Launch Collection',
      featuredSubtitle: 'Three debut China journeys',
      routeHighlights: 'China Highlights',
      routeHighlightsSubtitle: 'The experiences that help international guests understand China faster',
      whyUs: 'Why Grace Way',
      whyUsSubtitle: 'How we turn complicated China travel into launch-ready products',
      faq: 'Traveler FAQ',
      faqIntro: 'This launch version focuses on the highest-impact questions first. Visa, payment, and cancellation policies can be layered in next.',
      viewAll: 'View All',
      highlightLead: 'A first impression of China built through innovation, heritage, cities, and everyday life.',
    },
    routeCategories: {
      all: 'All Journeys',
      innovation: 'Innovation Routes',
      classic: 'China Classics',
    },
    highlightCategories: {
      all: 'All Highlights',
      innovation: 'Innovative China',
      heritage: 'Heritage & History',
      city: 'Urban Life',
    },
    routes: [
      {
        id: 'r1',
        slug: 'greater-bay-area-tech-7-days',
        category: 'innovation',
        badge: '7D6N · Greater Bay Area Technology',
        title: 'Bay Area Innovation',
        subtitle: 'A 7D6N look at AI, smart manufacturing, and the innovation speed of Shenzhen and Zhuhai',
        duration: '7D6N',
        location: 'Shenzhen / Zhuhai',
        image: chinaAssetImages.shenzhenNight,
        heroImage: chinaAssetImages.shenzhenBayAlt2,
        gallery: [...chinaJourneyGalleries.bayTech],
        spotlights: chinaJourneySpotlights.en.r1,
        overview: 'Centered on Shenzhen and Zhuhai, this route is built for international guests who want to understand how innovation actually works in contemporary China. It connects frontier technologies, business ecosystems, smart manufacturing, and landmark engineering into one coherent story.',
        highlights: [
          'Visit leading companies including Baidu, DJI, BYD, Lenovo, and Kingsoft',
          'Explore AI, autonomous driving, low-altitude economy, gene technology, robotics, and smart manufacturing',
          'Understand China’s startup and hardware ecosystem through Shenzhen Bay Startup Plaza, Talent Park, and Huaqiangbei',
          'Finish with a sea-view perspective of the Hong Kong-Zhuhai-Macao Bridge and its regional significance',
        ],
        itinerary: [
          { day: 'D1', title: 'Arrival in Shenzhen and first innovation impressions', description: 'Begin with Shenzhen Bay Startup Plaza and Talent Park to understand how the city combines public space, talent policy, and entrepreneurship.' },
          { day: 'D2', title: 'AI and low-altitude economy', description: 'Visit Baidu and experience autonomous mobility applications, then explore the Low-Altitude Economy Exhibition Hall.' },
          { day: 'D3', title: 'New energy and supply chain speed', description: 'Visit the BYD History Museum, BGI, and Huaqiangbei to see how research, hardware, and market speed connect in China.' },
          { day: 'D4', title: 'Drones and robotics in real business scenarios', description: 'Visit DJI and the Robotics 6S Store to understand how Chinese hardware innovation reaches commercial adoption.' },
          { day: 'D5', title: 'Smart manufacturing and industrial upgrading', description: 'Tour Lenovo’s Southern Smart Manufacturing Base and GAC for a closer look at digital factories and process transformation.' },
          { day: 'D6', title: 'Software innovation and mega-engineering', description: 'Visit Kingsoft, then take a sea tour for a panoramic view of the Hong Kong-Zhuhai-Macao Bridge.' },
          { day: 'D7', title: 'Departure', description: 'Transfer according to return schedule and conclude the journey.' },
        ],
        idealFor: [
          'International business delegations and executive groups',
          'Universities, research institutions, and innovation-focused study groups',
          'Premium travelers who want to understand China through industry and technology',
        ],
        serviceStandards: [
          'Carefully selected 4-diamond hotels in Shenzhen and Zhuhai',
          'Meals and company visit coordination included as listed',
          'Simultaneous interpretation, expert talks, and business sessions can be added on request',
        ],
      },
      {
        id: 'r2',
        slug: 'greater-bay-area-tech-8-days',
        category: 'innovation',
        badge: '8D7N · Technology & Industry Upgrade',
        title: 'Bay Area Industry',
        subtitle: 'An 8D7N route through frontier tech, advanced manufacturing, and Lingnan city culture',
        duration: '8D7N',
        location: 'Shenzhen / Guangzhou / Zhuhai',
        image: chinaAssetImages.bayIndustry,
        heroImage: chinaAssetImages.bayIndustry,
        gallery: [...chinaJourneyGalleries.bayIndustry],
        spotlights: chinaJourneySpotlights.en.r2,
        overview: 'This route expands the 7-day technology version into a fuller Bay Area story. It keeps the core tech visits while adding advanced manufacturing, heritage brand renewal, and urban culture, making the product more balanced for groups who want both substance and travel experience.',
        highlights: [
          'Includes core visits to Baidu, DJI, BYD, Lenovo, and Kingsoft',
          'Adds FAW-Volkswagen for a broader view of automotive and manufacturing transformation',
          'Adds Chen Liji, Yongqing Fang, and a Pearl River evening cruise for a stronger Lingnan cultural layer',
          'Balances technology, industry, city observation, and culture in one premium route',
        ],
        itinerary: [
          { day: 'D1', title: 'Arrival in Shenzhen', description: 'Start with Shenzhen Bay Startup Plaza and Talent Park for a first reading of the Bay Area innovation environment.' },
          { day: 'D2', title: 'AI and low-altitude economy', description: 'Visit Baidu and the Low-Altitude Economy Exhibition Hall.' },
          { day: 'D3', title: 'New energy, biotech, and supply chain ecosystems', description: 'Visit the BYD History Museum, BGI, and Huaqiangbei Electronics Market.' },
          { day: 'D4', title: 'DJI and robotics', description: 'Explore drone innovation and robotics commercialization through two hands-on visits.' },
          { day: 'D5', title: 'Manufacturing intelligence in practice', description: 'Visit Lenovo and GAC to understand industrial transformation through factory operations and systems thinking.' },
          { day: 'D6', title: 'Automotive manufacturing and urban culture', description: 'Visit FAW-Volkswagen, then continue to Chen Liji, Yongqing Fang, and an evening Pearl River cruise.' },
          { day: 'D7', title: 'Software innovation and the bridge corridor', description: 'Visit Kingsoft, then experience the Hong Kong-Zhuhai-Macao Bridge from the sea.' },
          { day: 'D8', title: 'Departure', description: 'Breakfast and transfer according to departure arrangements.' },
        ],
        idealFor: [
          'International corporate delegations and industry associations',
          'Educational institutions and premium interest groups',
          'Visitors who want a wider view of China’s technology, manufacturing, and urban renewal',
        ],
        serviceStandards: [
          'Carefully selected 4-diamond hotels in Shenzhen and Zhuhai',
          'Meals, company visits, guided arrangements, and culture experiences included',
          'Can be upgraded with bilingual support, expert sessions, and business meetings',
        ],
      },
      {
        id: 'r3',
        slug: 'china-classics-9-days',
        category: 'classic',
        badge: '9D8N · China Classics',
        title: 'China Classics',
        subtitle: 'A 9D8N route across Beijing, Xi’an, Chengdu, and Shanghai, from the Forbidden City and the Great Wall to pandas and the Bund',
        duration: '9D8N',
        location: 'Beijing / Xi’an / Chengdu / Shanghai',
        image: chinaAssetImages.classicChina,
        heroImage: chinaAssetImages.classicChina,
        gallery: [...chinaJourneyGalleries.classicChina],
        spotlights: chinaJourneySpotlights.en.r3,
        overview: 'Designed for first-time visitors to China, this journey connects the country’s most legible urban storylines in one route. It introduces imperial history, Silk Road memory, panda culture, and the rhythm of modern Shanghai in a way that is highly recognizable and easy to sell.',
        highlights: [
          'Connects Beijing, Xi’an, Chengdu, and Shanghai in one well-paced journey',
          'Includes the Great Wall, the Forbidden City, the Temple of Heaven, the Terracotta Warriors, the Panda Base, and the Bund',
          'Balances iconic landmarks with local life and city atmosphere',
          'Combines high-speed rail and domestic flights for comfort and efficiency',
        ],
        itinerary: [
          { day: 'D1', title: 'Arrival in Beijing', description: 'Airport transfer and hotel check-in before the classic China route begins.' },
          { day: 'D2', title: 'The Great Wall and imperial gardens', description: 'Visit Juyongguan Great Wall and the Summer Palace for a two-sided reading of imperial China.' },
          { day: 'D3', title: 'Forbidden City, Temple of Heaven, and flight to Xi’an', description: 'Complete the Beijing imperial narrative before shifting to the ancient capital of Xi’an.' },
          { day: 'D4', title: 'Terracotta Warriors and Tang-era evening atmosphere', description: 'Visit the Terracotta Warriors, the Giant Wild Goose Pagoda, and Datang Everbright City.' },
          { day: 'D5', title: 'City walls and local street life', description: 'From Bell and Drum Tower Square to the Muslim Quarter, experience Xi’an as a living city, not only a historic one.' },
          { day: 'D6', title: 'High-speed rail to Chengdu', description: 'Shift into a softer urban rhythm with Kuanzhai Alley and local cultural venues in Chengdu.' },
          { day: 'D7', title: 'Pandas, Three Kingdoms culture, and flight to Shanghai', description: 'Visit the Panda Base, Wuhou Shrine, and Jinli before heading to China’s most international city.' },
          { day: 'D8', title: 'Classic Shanghai', description: 'Explore Yuyuan Garden, the City God Temple, Nanjing Road, the Bund, and a Huangpu River cruise.' },
          { day: 'D9', title: 'Wukang Road and departure', description: 'End with a quieter, more residential Shanghai mood before departure transfer.' },
        ],
        idealFor: [
          'First-time international visitors to China',
          'Families, culturally curious travelers, and premium small groups',
          'Travelers who want one route to establish a strong overall impression of China',
        ],
        serviceStandards: [
          'Carefully selected quality hotels throughout the journey',
          'Core intercity transportation and flagship sightseeing included',
          'Guide language, transport level, and deeper experiences can be customized',
        ],
      },
    ],
    experiences: [
      {
        id: 'e1',
        category: 'innovation',
        city: 'Shenzhen',
        title: 'The Shenzhen innovation corridor',
        summary: 'From startup platforms to hardware markets, this is one of the clearest places to explain how modern Chinese innovation actually works.',
        bullets: ['Startup ecosystems', 'Supply chain speed', 'Engineering culture'],
        image: chinaAssetImages.bayIndustry,
      },
      {
        id: 'e2',
        category: 'innovation',
        city: 'Zhuhai',
        title: 'Hong Kong-Zhuhai-Macao Bridge from the sea',
        summary: 'More than sightseeing, this is an easy way to explain regional integration, scale, and the engineering confidence of contemporary China.',
        bullets: ['Mega engineering', 'Regional connectivity', 'Sea-view perspective'],
        image: chinaAssetImages.bayBridge,
      },
      {
        id: 'e3',
        category: 'heritage',
        city: 'Beijing',
        title: 'The Great Wall and imperial Beijing',
        summary: 'For first-time China products, few combinations are more legible or more memorable than the Great Wall, the Forbidden City, and the Temple of Heaven.',
        bullets: ['Imperial history', 'World heritage', 'High recognition value'],
        image: chinaAssetImages.classicChina,
      },
      {
        id: 'e4',
        category: 'heritage',
        city: 'Xi’an',
        title: 'Terracotta Warriors and the ancient capital',
        summary: 'Xi’an is one of the most direct ways to help international guests understand the scale, continuity, and visual drama of Chinese history.',
        bullets: ['Terracotta Warriors', 'Tang culture', 'Ancient city walls'],
        image: chinaAssetImages.xianHeritage,
      },
      {
        id: 'e5',
        category: 'city',
        city: 'Chengdu',
        title: 'Pandas and Chengdu daily life',
        summary: 'Chengdu gives international travelers a softer, friendlier side of China, where panda culture and everyday city rhythm work together naturally.',
        bullets: ['Panda Base', 'Local life', 'Sichuan atmosphere'],
        image: chinaAssetImages.chengduLifestyle,
      },
      {
        id: 'e6',
        category: 'city',
        city: 'Shanghai',
        title: 'The Bund and Huangpu night skyline',
        summary: 'Shanghai is one of the most effective windows into modern China, combining layered history with a highly international urban image.',
        bullets: ['Historic waterfront', 'Night skyline', 'Modern metropolis'],
        image: chinaAssetImages.shanghaiNight,
      },
    ],
    whyUs: [
      {
        title: 'We explain before we decorate',
        desc: 'We do not just stack landmarks. We first clarify how international guests should understand China, then build the route around that logic.',
      },
      {
        title: 'We understand both leisure and delegation language',
        desc: 'The same country needs different framing for first-time visitors, educational groups, and business delegations. We write accordingly.',
      },
      {
        title: 'Built with launch in mind',
        desc: 'Naming, route hierarchy, CTAs, consultation flow, and multilingual copy are structured for actual publication instead of staying as internal notes.',
      },
    ],
    faqs: [
      {
        q: 'Who are these three launch routes best suited for?',
        a: 'The 9-day China Classics route is best for first-time international visitors, families, and culture-focused travelers. The two Greater Bay Area routes are better for business delegations, educational groups, and premium guests interested in innovation and industrial transformation.',
      },
      {
        q: 'Can the technology routes be combined with the classic city route?',
        a: 'Yes. In practice, the Greater Bay Area routes can be combined with Shanghai, Beijing, or a shortened classics segment to create longer customized proposals for different markets.',
      },
      {
        q: 'Why is there no public pricing yet?',
        a: 'At this stage, these routes work better as inquiry-based products. Language support, hotel level, group size, and business reception standards vary too much for a single public price to stay accurate.',
      },
      {
        q: 'What still needs to be added before a full public launch?',
        a: 'The next layer should include visa guidance, entry policies, payment methods, cancellation terms, language service notes, and practical travel information for international guests.',
      },
    ],
    about: {
      heroTitle: 'We are building more than three routes',
      heroSubtitle: 'We are building a clearer way to present China to international guests',
      introTitle: 'Product direction',
      introText: 'This launch version is designed to make China easier to understand, not simply longer or more crowded. Technology, culture, city life, and first-time recognition all have their own place in the product structure.',
      capabilitiesTitle: 'What this launch version already supports',
      capabilities: [
        'High-recognition classic China city products',
        'Technology and business discovery routes for delegation travel',
        'Reusable multilingual content for web, brochure, and proposal formats',
        'Audience-specific route positioning and consultation flow',
        'A content base ready for visa, payment, and policy expansion',
      ],
      processTitle: 'How we usually work',
      process: [
        { title: '1. Define the audience', desc: 'We first clarify whether the guest is a first-time visitor, a school group, or a business delegation.' },
        { title: '2. Pick the narrative spine', desc: 'We decide whether the journey should lead with culture, innovation, or a blended route.' },
        { title: '3. Lock the ground details', desc: 'We then shape hotel level, transport rhythm, language support, and experience density around that structure.' },
      ],
      audienceTitle: 'Who this is for',
      audienceText: 'This version is useful for international travel planners, partner agencies, educational institutions, delegation organizers, and anyone shaping a more mature China inbound product line.',
      promiseTitle: 'The standard we want to keep',
      promiseText: 'China should feel impressive, but it should also feel understandable. That balance is what we aim to protect.',
    },
    contact: {
      title: 'Move the China product into real inquiry mode',
      subtitle: 'If you are already comparing routes, preparing a quotation, building a delegation plan, or extending these launch routes into something larger, we can help you close the final gaps quickly.',
      gatewayTitle: 'Recommended arrival gateways',
      gatewaySubtitle: 'This map is not an office address. It shows the three most practical arrival and meeting gateways for the current launch routes.',
      cards: [
        {
          name: 'Taha',
          role: 'Business & Delegation Planning',
          detail: 'Best for corporate visits, educational delegations, and cross-city route planning',
          phone: '+86 134 2640 1777',
        },
        {
          name: 'Arwen',
          role: 'Product & Journey Advisor',
          detail: 'Best for classic routes, family groups, and multilingual product consultation',
          phone: '+86 181 4463 3364',
        },
      ],
      serviceTitle: 'We can help clarify these first',
      serviceItems: [
        'Audience and language version',
        'Route combination and pacing',
        'Hotel grade and transport preferences',
        'Business meetings or expert session needs',
        'Pricing strategy and inquiry flow',
      ],
      wechatLabel: 'WeChat',
      whatsappLabel: 'WhatsApp',
      copied: 'WeChat ID copied',
      bookingsLabel: 'Journeys & bookings',
      partnershipsLabel: 'Partnerships & groups',
      responseNote: 'Weekday responses are prioritized. For group requests, it helps to include guest count, target cities, estimated dates, and language needs.',
      mapLabel: 'China Arrival Gateways',
      gateways: [
        { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
        { name: 'Shanghai', lat: 31.2304, lng: 121.4737 },
        { name: 'Shenzhen', lat: 22.5431, lng: 114.0579 },
      ],
    },
    footer: {
      headline: 'Grace Way China Journeys',
      statement: 'Structured for international travelers, business delegations, and premium small-group China travel.',
      about: 'This launch version focuses on China inbound content that can scale into dedicated landing pages, brochures, or an inquiry-driven sales flow.',
      explore: 'Explore',
      contact: 'Contact',
      serviceDesk: 'Global guest desk',
      rights: '© 2026 Grace Way. All rights reserved.',
    },
  },
  tr: {
    brand: {
      name: 'GRACE WAY',
      subline: 'Çin Giriş Rotaları',
    },
    nav: {
      home: 'Ana Sayfa',
      tours: 'Rotalar',
      highlights: 'Çin Öne Çıkanlar',
      about: 'Hakkımızda',
      contact: 'İletişim',
      enquire: 'Seyahat Planla',
      closeMenu: 'Menüyü Kapat',
    },
    seo: {
      home: {
        title: 'Çin Giriş Seyahat Rotaları',
        description: 'Uluslararası misafirler, iş heyetleri ve üst segment küçük gruplar için tasarlanmış Çin seyahatleri.',
        keywords: 'Çin turu, Çin giriş seyahati, Büyük Körfez Bölgesi teknoloji turu, Pekin Xi’an Chengdu Şanghay'
      },
      tours: {
        title: 'Çin Rota Koleksiyonu',
        description: 'Büyük Körfez Bölgesi inovasyon rotalarından klasik Çin şehir yolculuğuna uzanan üç lansman rotasını keşfedin.',
        keywords: 'Çin rotaları, Çin klasikleri, teknoloji heyeti Çin, kültür turu Çin'
      },
      highlights: {
        title: 'Çin Öne Çıkanlar ve Şehir Deneyimleri',
        description: 'İlk kez Çin ürünü hazırlayanlar için kültür, şehir yaşamı ve inovasyon odaklı deneyimlerin kısa özeti.',
        keywords: 'Çin öne çıkanlar, Çin Seddi, Toprak Askerler, Bund, Shenzhen inovasyon'
      },
      about: {
        title: 'Grace Way Çin Rotaları Hakkında',
        description: 'Uluslararası misafirler ve iş heyetleri için daha net ve yayına hazır Çin giriş rotaları tasarlıyoruz.',
        keywords: 'Çin giriş uzmanı, seyahat planlama, iş heyeti desteği, premium rota tasarımı'
      },
      contact: {
        title: 'Çin Seyahat Danışma Masası',
        description: 'Çin rota planlama, grup seyahati ve özel teklif talepleri için Grace Way ile WeChat, WhatsApp veya e-posta üzerinden iletişime geçin.',
        keywords: 'Çin seyahat iletişim, WeChat danışman, WhatsApp Çin turu'
      },
    },
    hero: {
      kicker: 'China Inbound Journeys',
      title: 'Uluslararası misafirler için tasarlanmış Çin',
      subtitle: 'Pekin, Xi’an, Chengdu ve Şanghay’dan Büyük Körfez Bölgesi’nin inovasyon gücüne kadar, karmaşık Çin seyahatini daha anlaşılır ve satışa daha hazır rotalara dönüştürüyoruz.',
      ctaPrimary: 'Rotaları İncele',
      ctaSecondary: 'Danışmanla Görüş',
    },
    sections: {
      featured: 'Lansman Koleksiyonu',
      featuredSubtitle: 'Üç lansman Çin rotası',
      routeHighlights: 'Çin Öne Çıkanlar',
      routeHighlightsSubtitle: 'Uluslararası misafirlerin Çin’i daha hızlı anlamasını sağlayan deneyimler',
      whyUs: 'Neden Grace Way',
      whyUsSubtitle: 'Karmaşık Çin seyahatini nasıl yayına hazır ürüne dönüştürüyoruz',
      faq: 'Sık Sorulan Sorular',
      faqIntro: 'Bu lansman sürümü önce en etkili soruları cevaplıyor. Vize, ödeme ve iptal katmanları daha sonra eklenebilir.',
      viewAll: 'Tümünü Gör',
      highlightLead: 'İnovasyon, tarih, şehirler ve gündelik yaşam üzerinden kurulan ilk Çin izlenimi.',
    },
    routeCategories: {
      all: 'Tüm Rotalar',
      innovation: 'İnovasyon Rotaları',
      classic: 'Çin Klasikleri',
    },
    highlightCategories: {
      all: 'Tüm Başlıklar',
      innovation: 'Yenilikçi Çin',
      heritage: 'Tarih ve Miras',
      city: 'Şehir Yaşamı',
    },
    routes: [
      {
        id: 'r1',
        slug: 'greater-bay-area-tech-7-days',
        category: 'innovation',
        badge: '7 Gün 6 Gece · Büyük Körfez Teknoloji',
        title: 'Körfez İnovasyon',
        subtitle: '7 Gün 6 Gece boyunca Shenzhen ve Zhuhai üzerinden yapay zeka, akıllı üretim ve inovasyon hızını keşfedin',
        duration: '7 Gün 6 Gece',
        location: 'Shenzhen / Zhuhai',
        image: chinaAssetImages.shenzhenNight,
        heroImage: chinaAssetImages.shenzhenBayAlt2,
        gallery: [...chinaJourneyGalleries.bayTech],
        spotlights: chinaJourneySpotlights.tr.r1,
        overview: 'Shenzhen ve Zhuhai merkezli bu rota, çağdaş Çin’de inovasyonun nasıl işlediğini anlamak isteyen uluslararası misafirler için tasarlanmıştır. Öncü teknolojileri, iş ekosistemlerini, akıllı üretimi ve simge mühendislik yapıları tek bir anlatıda birleştirir.',
        highlights: [
          'Baidu, DJI, BYD, Lenovo ve Kingsoft gibi öncü şirketleri ziyaret edin',
          'Yapay zeka, otonom sürüş, alçak irtifa ekonomisi, gen teknolojisi, robotik ve akıllı üretimi keşfedin',
          'Shenzhen Bay Startup Plaza, Talent Park ve Huaqiangbei üzerinden Çin inovasyon kültürünü anlayın',
          'Hong Kong-Zhuhai-Makao Köprüsü’nü denizden görerek bölgesel ölçek ve altyapı gücünü kavrayın',
        ],
        itinerary: [
          { day: 'D1', title: 'Shenzhen’e varış ve ilk inovasyon izlenimi', description: 'Şehrin girişini Shenzhen Bay Startup Plaza ve Talent Park ile yapın; girişimcilik, kamu alanı ve yetenek stratejisini birlikte okuyun.' },
          { day: 'D2', title: 'Yapay zeka ve alçak irtifa ekonomisi', description: 'Baidu ziyareti ve otonom mobilite deneyiminin ardından Alçak İrtifa Ekonomisi Sergi Alanı keşfi.' },
          { day: 'D3', title: 'Yeni enerji ve tedarik zinciri hızı', description: 'BYD Tarih Müzesi, BGI ve Huaqiangbei ile araştırmadan pazara giden zinciri görün.' },
          { day: 'D4', title: 'Drone ve robotik uygulamalar', description: 'DJI ve Robotics 6S Store ile Çin donanım inovasyonunun ticari sahaya nasıl indiğini izleyin.' },
          { day: 'D5', title: 'Akıllı üretim ve sanayi dönüşümü', description: 'Lenovo Güney Akıllı Üretim Üssü ve GAC ziyaretleri ile dijital fabrika mantığını inceleyin.' },
          { day: 'D6', title: 'Yazılım inovasyonu ve mega mühendislik', description: 'Kingsoft ziyareti sonrası Hong Kong-Zhuhai-Makao Köprüsü’nü deniz turuyla panoramik olarak deneyimleyin.' },
          { day: 'D7', title: 'Dönüş', description: 'Dönüş planına göre transfer ve turun tamamlanması.' },
        ],
        idealFor: [
          'Uluslararası iş heyetleri ve yönetici grupları',
          'Üniversiteler, araştırma kurumları ve inovasyon odaklı inceleme turları',
          'Çin’i teknoloji ve sanayi üzerinden anlamak isteyen üst segment misafirler',
        ],
        serviceStandards: [
          'Shenzhen ve Zhuhai’de özenle seçilmiş 4 elmas standardında oteller',
          'Programdaki öğünler ve şirket ziyaret koordinasyonu dahil',
          'Talebe göre simultane çeviri, uzman sunumu ve iş görüşmeleri eklenebilir',
        ],
      },
      {
        id: 'r2',
        slug: 'greater-bay-area-tech-8-days',
        category: 'innovation',
        badge: '8 Gün 7 Gece · Teknoloji ve Sanayi Dönüşümü',
        title: 'Körfez Sanayi',
        subtitle: '8 Gün 7 Gece boyunca öncü teknoloji, ileri üretim ve Lingnan şehir kültürünü tek bir güçlü rotada görün',
        duration: '8 Gün 7 Gece',
        location: 'Shenzhen / Guangzhou / Zhuhai',
        image: chinaAssetImages.bayIndustry,
        heroImage: chinaAssetImages.bayIndustry,
        gallery: [...chinaJourneyGalleries.bayIndustry],
        spotlights: chinaJourneySpotlights.tr.r2,
        overview: 'Bu rota, 7 günlük teknoloji versiyonunu daha geniş bir Körfez Bölgesi anlatısına dönüştürür. Temel teknoloji ziyaretlerini korurken ileri üretim, köklü markaların yenilenmesi ve şehir kültürünü de ekler.',
        highlights: [
          'Baidu, DJI, BYD, Lenovo ve Kingsoft gibi temel teknoloji ziyaretlerini içerir',
          'FAW-Volkswagen ile otomotiv ve üretim dönüşümüne daha geniş açıdan bakar',
          'Chen Liji, Yongqing Fang ve İnci Nehri akşam gezisi ile Lingnan kültürünü güçlendirir',
          'Teknoloji, sanayi, şehir gözlemi ve kültürü dengeli bir premium rotada birleştirir',
        ],
        itinerary: [
          { day: 'D1', title: 'Shenzhen’e varış', description: 'Shenzhen Bay Startup Plaza ve Talent Park ile Körfez Bölgesi inovasyon ortamına giriş yapın.' },
          { day: 'D2', title: 'Yapay zeka ve alçak irtifa ekonomisi', description: 'Baidu ve Alçak İrtifa Ekonomisi Sergi Alanı ziyaretleri.' },
          { day: 'D3', title: 'Yeni enerji, biyoteknoloji ve tedarik zinciri', description: 'BYD Tarih Müzesi, BGI ve Huaqiangbei Electronics Market ziyareti.' },
          { day: 'D4', title: 'DJI ve robotik', description: 'Drone inovasyonu ve hizmet robotlarının ticarileşmesini iki sahada gözlemleyin.' },
          { day: 'D5', title: 'Akıllı üretim uygulamaları', description: 'Lenovo ve GAC ile üretim dönüşümünü fabrika perspektifinden görün.' },
          { day: 'D6', title: 'İleri üretim ve şehir kültürü', description: 'FAW-Volkswagen, Chen Liji, Yongqing Fang ve akşam İnci Nehri gezisi.' },
          { day: 'D7', title: 'Yazılım inovasyonu ve köprü koridoru', description: 'Kingsoft ziyareti ve ardından Hong Kong-Zhuhai-Makao Köprüsü deniz turu.' },
          { day: 'D8', title: 'Dönüş', description: 'Kahvaltı ve dönüş planına göre transfer.' },
        ],
        idealFor: [
          'Uluslararası şirket heyetleri ve sektör birlikleri',
          'Eğitim kurumları ve üst segment ilgi grupları',
          'Çin’in teknoloji, üretim ve kentsel dönüşümünü daha geniş çerçevede görmek isteyen ziyaretçiler',
        ],
        serviceStandards: [
          'Shenzhen ve Zhuhai’de özenle seçilmiş 4 elmas standardında oteller',
          'Öğünler, şirket ziyaretleri, rehberlik ve kültür deneyimleri dahil',
          'Talebe göre çift dilli destek, uzman oturumları ve iş görüşmeleri eklenebilir',
        ],
      },
      {
        id: 'r3',
        slug: 'china-classics-9-days',
        category: 'classic',
        badge: '9 Gün 8 Gece · Çin Klasikleri',
        title: 'Çin Klasikleri',
        subtitle: '9 Gün 8 Gece boyunca Pekin, Xi’an, Chengdu ve Şanghay arasında; Yasak Şehir ve Çin Seddi’nden pandalara ve Bund’a uzanan güçlü bir ilk Çin rotası',
        duration: '9 Gün 8 Gece',
        location: 'Pekin / Xi’an / Chengdu / Şanghay',
        image: chinaAssetImages.classicChina,
        heroImage: chinaAssetImages.classicChina,
        gallery: [...chinaJourneyGalleries.classicChina],
        spotlights: chinaJourneySpotlights.tr.r3,
        overview: 'Çin’e ilk kez gelen misafirler için tasarlanan bu rota, ülkenin en okunabilir şehir hikayelerini tek yolculukta birleştirir. Hanedanlık tarihi, İpek Yolu hafızası, panda kültürü ve modern Şanghay ritmi bir arada sunulur.',
        highlights: [
          'Pekin, Xi’an, Chengdu ve Şanghay’ı dengeli tempoda birbirine bağlar',
          'Çin Seddi, Yasak Şehir, Gök Tapınağı, Toprak Askerler, Panda Üssü ve Bund gibi simge noktaları içerir',
          'İkonik mekanlarla yerel yaşam ve şehir atmosferini birlikte sunar',
          'Hızlı tren ve yurt içi uçuşları konfor ve verimlilik için birlikte kullanır',
        ],
        itinerary: [
          { day: 'D1', title: 'Pekin’e varış', description: 'Havalimanı transferi ve klasik Çin rotasına hazırlık.' },
          { day: 'D2', title: 'Çin Seddi ve imparatorluk bahçeleri', description: 'Juyongguan Çin Seddi ve Yazlık Saray ile Pekin’i iki farklı tarih katmanından okuyun.' },
          { day: 'D3', title: 'Yasak Şehir, Gök Tapınağı ve Xi’an uçuşu', description: 'Pekin’in imparatorluk anlatısını tamamladıktan sonra Xi’an’a geçin.' },
          { day: 'D4', title: 'Toprak Askerler ve Tang dönemi atmosferi', description: 'Toprak Askerler, Büyük Vahşi Kaz Pagodası ve Datang Everbright City ziyareti.' },
          { day: 'D5', title: 'Şehir surları ve yerel hayat', description: 'Çan ve Davul Kulesi Meydanı, Xi’an Şehir Surları ve Müslüman Mahallesi ile yaşayan şehri deneyimleyin.' },
          { day: 'D6', title: 'Hızlı trenle Chengdu', description: 'Kuanzhai Alley ve yerel kültür mekanlarıyla daha yumuşak bir Çin şehir ritmine geçin.' },
          { day: 'D7', title: 'Pandalar, Üç Krallık kültürü ve Şanghay uçuşu', description: 'Panda Üssü, Wuhou Tapınağı ve Jinli sonrası Şanghay’a geçiş.' },
          { day: 'D8', title: 'Klasik Şanghay', description: 'Yuyuan Bahçesi, Şehir Tanrısı Tapınağı, Nanjing Road, Bund ve Huangpu Nehri turu.' },
          { day: 'D9', title: 'Wukang Road ve dönüş', description: 'Daha sakin bir Şanghay hissiyle final ve ardından dönüş transferi.' },
        ],
        idealFor: [
          'Çin’e ilk kez gelen uluslararası ziyaretçiler',
          'Aileler, kültür odaklı gezginler ve premium küçük gruplar',
          'Tek rotada güçlü bir Çin izlenimi edinmek isteyen misafirler',
        ],
        serviceStandards: [
          'Yolculuk boyunca özenle seçilmiş kaliteli oteller',
          'Temel şehirler arası ulaşım ve amiral gemisi gezi noktaları dahil',
          'Rehber dili, ulaşım seviyesi ve derin deneyimler özelleştirilebilir',
        ],
      },
    ],
    experiences: [
      {
        id: 'e1',
        category: 'innovation',
        city: 'Shenzhen',
        title: 'Shenzhen inovasyon koridoru',
        summary: 'Girişim platformlarından donanım pazarlarına kadar uzanan bu alan, modern Çin inovasyonunu açıklamak için en net sahalardan biridir.',
        bullets: ['Girişim ekosistemi', 'Tedarik zinciri hızı', 'Mühendislik kültürü'],
        image: chinaAssetImages.bayIndustry,
      },
      {
        id: 'e2',
        category: 'innovation',
        city: 'Zhuhai',
        title: 'Köprüyü denizden görmek',
        summary: 'Sadece manzara değil; bölgesel entegrasyonu, ölçeği ve çağdaş Çin mühendisliğini anlatmanın güçlü bir yolu.',
        bullets: ['Mega mühendislik', 'Bölgesel bağlantı', 'Deniz perspektifi'],
        image: chinaAssetImages.bayBridge,
      },
      {
        id: 'e3',
        category: 'heritage',
        city: 'Pekin',
        title: 'Çin Seddi ve imparatorluk Pekin’i',
        summary: 'İlk kez Çin ürünü hazırlarken, Çin Seddi, Yasak Şehir ve Gök Tapınağı kadar kolay okunan çok az kombinasyon vardır.',
        bullets: ['İmparatorluk tarihi', 'Dünya mirası', 'Yüksek tanınırlık'],
        image: chinaAssetImages.classicChina,
      },
      {
        id: 'e4',
        category: 'heritage',
        city: 'Xi’an',
        title: 'Toprak Askerler ve kadim başkent',
        summary: 'Xi’an, Çin tarihinin ölçeğini, sürekliliğini ve görsel etkisini anlatmak için en doğrudan şehirlerden biridir.',
        bullets: ['Toprak Askerler', 'Tang kültürü', 'Kadim surlar'],
        image: chinaAssetImages.xianHeritage,
      },
      {
        id: 'e5',
        category: 'city',
        city: 'Chengdu',
        title: 'Pandalar ve Chengdu günlük hayatı',
        summary: 'Chengdu, uluslararası misafirlere Çin’in daha yumuşak, daha sıcak ve gündelik yönünü gösterir.',
        bullets: ['Panda Üssü', 'Yerel yaşam', 'Sichuan atmosferi'],
        image: chinaAssetImages.chengduLifestyle,
      },
      {
        id: 'e6',
        category: 'city',
        city: 'Şanghay',
        title: 'Bund ve Huangpu gece silüeti',
        summary: 'Şanghay, katmanlı tarihi ve uluslararası şehir imajıyla modern Çin’i anlamanın en etkili pencerelerinden biridir.',
        bullets: ['Tarihi kıyı', 'Gece silüeti', 'Modern metropol'],
        image: chinaAssetImages.shanghaiNight,
      },
    ],
    whyUs: [
      {
        title: 'Önce anlatıyı kuruyoruz',
        desc: 'Sadece görülecek yerleri sıralamıyoruz. Önce uluslararası misafirin Çin’i nasıl anlaması gerektiğini netleştiriyoruz.',
      },
      {
        title: 'Hem tatil hem heyet dilini biliyoruz',
        desc: 'İlk kez gelen turist, eğitim grubu ve iş heyeti için aynı ülke farklı şekilde anlatılmalıdır. Biz bu farkı gözetiyoruz.',
      },
      {
        title: 'Lansman mantığıyla hazırlanır',
        desc: 'İsimlendirme, rota hiyerarşisi, CTA, danışma akışı ve çok dilli metinler gerçek yayına hazır olacak şekilde kurulur.',
      },
    ],
    faqs: [
      {
        q: 'Bu üç lansman rotası en çok kimler için uygundur?',
        a: '9 günlük Çin Klasikleri rotası ilk kez Çin’e gelen ziyaretçiler, aileler ve kültür odaklı gezginler için daha uygundur. İki Büyük Körfez Bölgesi rotası ise iş heyetleri, eğitim grupları ve inovasyonla ilgilenen üst segment misafirler için daha uygundur.',
      },
      {
        q: 'Teknoloji rotaları klasik şehir rotasıyla birleştirilebilir mi?',
        a: 'Evet. Pratikte Büyük Körfez Bölgesi rotaları, farklı pazarlar için daha uzun özel teklifler oluşturmak amacıyla Şanghay, Pekin veya kısaltılmış bir klasik hatla birleştirilebilir.',
      },
      {
        q: 'Neden henüz açık fiyat yok?',
        a: 'Bu aşamada bu ürünler daha çok teklif bazlı çalışmaya uygundur. Dil desteği, otel seviyesi, grup büyüklüğü ve iş karşılama standardı tek bir kamu fiyatını sağlıklı kılmaz.',
      },
      {
        q: 'Tam halka açık lansmandan önce başka ne eklenmeli?',
        a: 'Bir sonraki katmanda vize yönlendirmesi, giriş politikaları, ödeme yöntemleri, iptal şartları, dil hizmeti notları ve pratik seyahat bilgileri yer almalıdır.',
      },
    ],
    about: {
      heroTitle: 'Sadece üç rota oluşturmuyoruz',
      heroSubtitle: 'Uluslararası misafirlere Çin’i daha net anlatan bir yapı kuruyoruz',
      introTitle: 'Ürün yaklaşımı',
      introText: 'Bu lansman sürümü, Çin’i daha anlaşılır kılmayı hedefler; sadece daha uzun veya daha dolu bir program sunmayı değil. Teknoloji, kültür, şehir yaşamı ve ilk kez gelenler için tanınırlık birlikte düşünülmüştür.',
      capabilitiesTitle: 'Bu sürüm şu anda neyi destekliyor',
      capabilities: [
        'Yüksek tanınırlığa sahip klasik Çin şehir ürünleri',
        'Heyet seyahati için teknoloji ve iş keşif rotaları',
        'Web, broşür ve teklif formatlarında tekrar kullanılabilir çok dilli içerik',
        'Hedef kitleye göre konumlandırma ve danışma akışı',
        'Vize, ödeme ve politika katmanları için hazır içerik temeli',
      ],
      processTitle: 'Nasıl çalışıyoruz',
      process: [
        { title: '1. Hedef kitleyi tanımlarız', desc: 'Önce misafirin ilk kez gelen turist mi, okul grubu mu, yoksa iş heyeti mi olduğunu netleştiririz.' },
        { title: '2. Ana anlatıyı seçeriz', desc: 'Rotanın kültür, inovasyon veya karma kurgu ile mi ilerleyeceğine karar veririz.' },
        { title: '3. Saha detaylarını kilitleriz', desc: 'Otel seviyesi, ulaşım temposu, dil desteği ve deneyim yoğunluğunu bu yapıya göre şekillendiririz.' },
      ],
      audienceTitle: 'Kimler için uygun',
      audienceText: 'Uluslararası seyahat planlayıcıları, partner acenteler, eğitim kurumları, heyet organizatörleri ve Çin giriş ürün hattını olgunlaştırmak isteyen herkes için uygundur.',
      promiseTitle: 'Korunmasını istediğimiz standart',
      promiseText: 'Çin etkileyici görünmeli, ama aynı zamanda anlaşılır da olmalı. Korumak istediğimiz denge bu.',
    },
    contact: {
      title: 'Çin ürününü gerçek danışma moduna taşıyın',
      subtitle: 'Rota karşılaştırıyor, teklif hazırlıyor, heyet planı kuruyor veya bu lansman rotalarını büyütmek istiyorsanız, son boşlukları birlikte hızlıca kapatabiliriz.',
      gatewayTitle: 'Önerilen giriş kapıları',
      gatewaySubtitle: 'Bu harita ofis adresi değildir. Mevcut lansman rotaları için en pratik üç giriş ve buluşma noktasını gösterir.',
      cards: [
        {
          name: 'Taha',
          role: 'İş Heyeti ve Planlama',
          detail: 'Kurumsal ziyaretler, eğitim heyetleri ve çok şehirli rota planları için',
          phone: '+86 134 2640 1777',
        },
        {
          name: 'Arwen',
          role: 'Ürün ve Rota Danışmanı',
          detail: 'Klasik rotalar, aile grupları ve çok dilli ürün danışmanlığı için',
          phone: '+86 181 4463 3364',
        },
      ],
      serviceTitle: 'Önce birlikte bunları netleştirebiliriz',
      serviceItems: [
        'Hedef kitle ve dil sürümü',
        'Rota kombinasyonu ve tempo',
        'Otel standardı ve ulaşım tercihleri',
        'İş görüşmesi veya uzman oturumu ihtiyaçları',
        'Fiyat stratejisi ve danışma akışı',
      ],
      wechatLabel: 'WeChat',
      whatsappLabel: 'WhatsApp',
      copied: 'WeChat ID kopyalandı',
      bookingsLabel: 'Rotalar ve rezervasyon',
      partnershipsLabel: 'İş birlikleri ve gruplar',
      responseNote: 'Hafta içi yanıtlar önceliklidir. Grup taleplerinde kişi sayısı, şehirler, tahmini tarihler ve dil ihtiyacını paylaşmak süreci hızlandırır.',
      mapLabel: 'Çin Giriş Noktaları',
      gateways: [
        { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
        { name: 'Shanghai', lat: 31.2304, lng: 121.4737 },
        { name: 'Shenzhen', lat: 22.5431, lng: 114.0579 },
      ],
    },
    footer: {
      headline: 'Grace Way China Journeys',
      statement: 'Uluslararası misafirler, iş heyetleri ve premium küçük gruplar için yapılandırılmış Çin seyahatleri.',
      about: 'Bu lansman sürümü, özel açılış sayfalarına, broşürlere veya teklif odaklı satış akışına taşınabilecek Çin giriş içeriğine odaklanır.',
      explore: 'Keşfet',
      contact: 'İletişim',
      serviceDesk: 'Global misafir danışma hattı',
      rights: '© 2026 Grace Way. Tüm hakları saklıdır.',
    },
  },
};
