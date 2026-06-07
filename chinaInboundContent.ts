import type { Language } from './translations';

export type JourneyCategory = 'innovation' | 'classic' | 'expo';
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
    '/img/remote/u-1634647626758-ad751a260e9f.webp',
  bayIndustry:
    '/img/remote/u-1741225775531-035965543c95.webp',
  classicChina:
    '/img/remote/u-1701668910380-b44dcc028525.webp',
  shenzhenNight:
    '/img/remote/u-1575301236982-2857a6daf71a.webp',
  guangzhouNight:
    '/img/remote/u-1609330262490-77d0a1360bfe.webp',
  greatWall:
    '/img/remote/u-1505763941729-634dfa346b1b.webp',
  greatWallAlt:
    '/img/remote/u-1737498446282-159e13bd8de9.webp',
  bayBridge:
    '/img/remote/u-1632795042875-0c3e8671d8dc.webp',
  apolloDrive:
    '/img/remote/u-1764983253036-edd0f55af679.webp',
  djiDrone:
    '/img/remote/u-1606460754287-d8b9e905d8e4.webp',
  factoryLine:
    '/img/remote/u-1649003175416-9ae7904371db.webp',
  yongqingFang:
    '/img/remote/u-1755161440007-c3ca156edda3.webp',
  xianHeritage:
    '/img/remote/u-1523946963389-207478f6cb2e.webp',
  forbiddenCityMoat:
    '/img/remote/u-1757510146664-48b437cddd1a.webp',
  chengduLifestyle:
    '/img/remote/u-1757212934677-57df0ec6d762.webp',
  pandaAlt:
    '/img/remote/u-1504713721722-f73b4ccdfe6a.webp',
  shanghaiNight:
    '/img/remote/u-1742228836192-a7294496453b.webp',
  shanghaiNightAlt:
    '/img/remote/u-1696142990758-581061f2801d.webp',
  shenzhenBayAlt:
    '/img/remote/u-1634647626758-ad751a260e9f.webp',
  shenzhenBayAlt2:
    '/img/remote/u-1634647626782-f5fffa9fd9b1.webp',
  huaqiangbeiAlt:
    '/img/remote/u-1619355419589-19790f1bf3ee.webp',
  zhuhaiAlt:
    '/img/remote/u-1659866813094-23ea349b848f.webp',
  zhuhaiAlt2:
    '/img/remote/u-1657471250720-4e51a99aca85.webp',
  forbiddenCityAlt:
    '/img/remote/u-1577706881850-bf7c7d8906a5.webp',
  xianAlt:
    '/img/remote/u-1591709976757-94efbfd3b01e.webp',
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

const chinaExpoRoutesZh: Journey[] = [
  {
    id: 'x1',
    slug: 'canton-fair-sourcing-service',
    category: 'expo',
    badge: '中国会展商务服务',
    title: '广交会综合采购服务',
    subtitle: '面向多行业采购客户的一站式中国参访与供应商筛选服务',
    duration: '2026春季',
    location: '广州',
    image: chinaAssetImages.guangzhouNight,
    heroImage: chinaAssetImages.guangzhouNight,
    gallery: [
      chinaAssetImages.guangzhouNight,
      chinaAssetImages.yongqingFang,
      chinaAssetImages.factoryLine,
      chinaAssetImages.shenzhenNight,
    ],
    spotlights: [
      {
        label: '时间',
        title: '第139届春季广交会',
        summary:
          '2026年4月15日至5月5日分三期举行，适合根据采购品类选择更匹配的参访窗口与重点展区。',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: '客群',
        title: '综合采购客户匹配度最高',
        summary:
          '特别适合贸易商、批发商、零售商，以及电器、建材、家具、家居、五金类采购客户。',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: '价值',
        title: '一次中国行完成多行业初筛',
        summary:
          '它的核心价值不是单一行业深挖，而是高效率比较供应商、看样品、看价格，并判断后续工厂考察方向。',
        image: chinaAssetImages.yongqingFang,
      },
    ],
    overview:
      '广交会是中国最成熟的一站式综合采购平台之一，尤其适合首次来中国找供应商或希望一次覆盖多个行业的土耳其客户。我们围绕展前准备、现场翻译、供应商筛选和会后工厂预约，提供更完整的商务服务。',
    highlights: [
      '一次集中覆盖多个行业，适合多品类采购计划',
      '可结合展期节奏筛选更精准的供应商名单',
      '适合首次来华客户建立对中国供应链的整体判断',
      '可衔接广州及珠三角工厂拜访与会后跟进',
    ],
    itinerary: [
      {
        day: '模块 01',
        title: '展前注册与采购方向梳理',
        description:
          '根据客户关注品类协助判断期数、完成注册准备，并提前梳理重点展区、目标供应商与现场沟通重点。',
      },
      {
        day: '模块 02',
        title: '展馆陪同与翻译支持',
        description:
          '安排展馆内翻译陪同与商务协助，帮助客户更高效地看样品、问价格、比较起订量与合作条件。',
      },
      {
        day: '模块 03',
        title: '供应商筛选与会后整理',
        description:
          '围绕客户真正关心的价格、交期、品类完整度和配套能力，对展会接触到的供应商做初步筛选与分层。',
      },
      {
        day: '模块 04',
        title: '珠三角企业延伸拜访',
        description:
          '如客户有进一步合作意向，可继续安排广州、佛山、东莞、中山或深圳的工厂与企业实地拜访。',
      },
    ],
    idealFor: [
      '希望一次覆盖多行业的综合采购客户',
      '首次来中国寻找供应商的贸易与分销客户',
      '需要后续衔接工厂考察的批发与工程配套客户',
    ],
    serviceStandards: [
      '展会注册与参访准备协助',
      '中文与英语商务翻译陪同',
      '供应商筛选与会后清单整理',
      '珠三角工厂拜访预约与广州接待支持',
    ],
  },
  {
    id: 'x2',
    slug: 'ciif-smart-manufacturing-service',
    category: 'expo',
    badge: '中国会展商务服务',
    title: '工博会智能制造服务',
    subtitle: '聚焦工业自动化、设备升级与智能工厂解决方案的专业会展商务服务',
    duration: '2026.10',
    location: '上海',
    image: chinaAssetImages.factoryLine,
    heroImage: chinaAssetImages.bayIndustry,
    gallery: [
      chinaAssetImages.factoryLine,
      chinaAssetImages.bayIndustry,
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.apolloDrive,
    ],
    spotlights: [
      {
        label: '时间',
        title: '2026中国国际工业博览会',
        summary: '展会将于2026年10月12日至16日在上海国家会展中心举行，主题更垂直，客户更精准。',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: '客群',
        title: '工业制造与设备客户更适配',
        summary:
          '适合工厂、制造企业、设备代理商、机器人、机床、工业自动化与能源装备客户。',
        image: chinaAssetImages.bayIndustry,
      },
      {
        label: '价值',
        title: '比综合采购展更适合B端对接',
        summary:
          '它的核心不是看消费品，而是看设备升级、自动化改造、技术合作与产业链能力。',
        image: chinaAssetImages.shanghaiNight,
      },
    ],
    overview:
      '工博会是更适合工业制造客户的专业展会产品。对于工厂老板、设备经销商或工业项目公司而言，它比综合消费展更聚焦，也更容易形成真正有价值的技术交流与商务合作。',
    highlights: [
      '围绕自动化、机器人、机床与智能制造展开',
      '更适合设备选型、技术合作与产业升级对话',
      '能够直接连接工业品牌、方案商与潜在渠道伙伴',
      '适合叠加长三角制造企业拜访与工厂参观',
    ],
    itinerary: [
      {
        day: '模块 01',
        title: '行业方向预判与展前清单整理',
        description:
          '根据客户所属行业与采购目标，提前整理建议展区、重点品牌与需要重点了解的技术方向。',
      },
      {
        day: '模块 02',
        title: '展会现场专业陪同',
        description:
          '围绕自动化、机器人、机床、能源装备等主题，安排更贴近工业语境的会展陪同与翻译服务。',
      },
      {
        day: '模块 03',
        title: '品牌筛选与合作对接',
        description:
          '会后整理重点品牌与方案商信息，帮助客户更快判断哪些对象适合继续进入代理或项目对接阶段。',
      },
      {
        day: '模块 04',
        title: '长三角工厂与企业延伸参访',
        description:
          '可根据客户需求继续安排上海、昆山、苏州、嘉兴等制造企业的实地拜访。',
      },
    ],
    idealFor: [
      '关注设备升级与自动化改造的工业客户',
      '希望寻找品牌合作与渠道机会的设备代理商',
      '需要把展会参访与工厂考察结合的企业代表团',
    ],
    serviceStandards: [
      '工业展区参访路径规划',
      '工业与设备类商务翻译陪同',
      '重点品牌与方案商信息整理',
      '长三角企业拜访预约与上海接待支持',
    ],
  },
  {
    id: 'x3',
    slug: 'bauma-china-machinery-service',
    category: 'expo',
    badge: '中国会展商务服务',
    title: 'bauma CHINA工程机械服务',
    subtitle: '面向建筑、基建与设备渠道客户的工程机械及矿山设备专业参访服务',
    duration: '2026.11',
    location: '上海',
    image: chinaAssetImages.bayIndustry,
    heroImage: chinaAssetImages.factoryLine,
    gallery: [
      chinaAssetImages.bayIndustry,
      chinaAssetImages.factoryLine,
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.shanghaiNight,
    ],
    spotlights: [
      {
        label: '时间',
        title: '2026 bauma CHINA',
        summary: '展会将于2026年11月24日至27日在上海新国际博览中心举行，聚焦工程机械与施工技术。',
        image: chinaAssetImages.bayIndustry,
      },
      {
        label: '客群',
        title: '工程与矿业客户对口度高',
        summary:
          '适合建筑公司、工程承包商、矿业相关企业、工程机械代理商以及设备配件渠道客户。',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: '价值',
        title: '更容易进入代理与项目洽谈',
        summary:
          '相较综合展会，这类专业展更容易让客户直接围绕整机、配件、施工技术和项目需求展开沟通。',
        image: chinaAssetImages.shanghaiNightAlt,
      },
    ],
    overview:
      'bauma CHINA 是中国工程机械领域非常重要的专业展会之一，更适合目标明确的项目型客户。对于来自建筑、矿业、工程承包与设备租赁领域的土耳其客户，这类参访通常比综合展更容易形成高质量商务对话。',
    highlights: [
      '整机、配件、矿山设备与施工技术覆盖较完整',
      '行业集中度高，客户商业目标更清晰',
      '适合设备代理、渠道合作和项目沟通',
      '可延伸到品牌工厂、展厅或区域团队拜访',
    ],
    itinerary: [
      {
        day: '模块 01',
        title: '设备方向梳理与目标品牌准备',
        description:
          '根据客户关注的设备类型、应用场景与代理目标，提前整理重点品牌与展区路线。',
      },
      {
        day: '模块 02',
        title: '展会陪同与需求翻译',
        description:
          '在现场围绕整机、配件、售后、交期和区域合作模式进行翻译支持与商务沟通辅助。',
      },
      {
        day: '模块 03',
        title: '品牌深聊与合作意向整理',
        description:
          '帮助客户把展会中收集到的信息按代理、采购、项目合作等不同方向做归纳，提升后续跟进效率。',
      },
      {
        day: '模块 04',
        title: '展后企业拜访与本地接待',
        description:
          '如客户希望进一步深入，可安排展后品牌展厅、工厂或中国团队的实地拜访与会谈。',
      },
    ],
    idealFor: [
      '建筑与工程承包相关企业',
      '工程机械渠道商、配件商与设备租赁客户',
      '需要直接对接品牌与项目资源的专业买家',
    ],
    serviceStandards: [
      '工程机械类展前路线规划',
      '设备与项目沟通翻译陪同',
      '重点品牌会后信息归纳与筛选',
      '上海本地商务接待与企业拜访支持',
    ],
  },
  {
    id: 'x4',
    slug: 'auto-china-ev-smart-mobility-service',
    category: 'expo',
    badge: '中国会展商务服务',
    title: '北京车展新能源汽车服务',
    subtitle: '聚焦中国新能源汽车、智能驾驶与汽车产业趋势的商务参访服务',
    duration: '2026.04-05',
    location: '北京',
    image: chinaAssetImages.apolloDrive,
    heroImage: chinaAssetImages.forbiddenCityMoat,
    gallery: [
      chinaAssetImages.apolloDrive,
      chinaAssetImages.forbiddenCityMoat,
      chinaAssetImages.greatWallAlt,
      chinaAssetImages.shanghaiNightAlt,
    ],
    spotlights: [
      {
        label: '时间',
        title: '2026北京车展',
        summary: '展会将于2026年4月24日至5月3日在北京举办，是观察中国汽车产业趋势的重要窗口。',
        image: chinaAssetImages.forbiddenCityMoat,
      },
      {
        label: '客群',
        title: '汽车行业客户关注度高',
        summary:
          '适合汽车行业客户、汽配商、经销商、投资人，以及关注新能源汽车与智能驾驶的企业代表。',
        image: chinaAssetImages.apolloDrive,
      },
      {
        label: '价值',
        title: '不只是看车，更是看趋势',
        summary:
          '这类参访更适合围绕中国新能源汽车、供应链创新和品牌变化建立判断，而不是停留在车型展示层面。',
        image: chinaAssetImages.greatWallAlt,
      },
    ],
    overview:
      '北京车展的价值不只在于展示车型，而在于帮助客户快速理解中国汽车产业的变化速度。对于土耳其客户来说，它适合用于观察品牌、技术、智能化方向与未来合作机会，是典型的趋势型商务参访产品。',
    highlights: [
      '新能源汽车与智能驾驶话题集中呈现',
      '适合经销、投资、汽配与产业合作客户',
      '能够帮助客户快速建立对中国汽车趋势的判断',
      '可叠加企业交流与产业链对话安排',
    ],
    itinerary: [
      {
        day: '模块 01',
        title: '品牌与技术关注方向确认',
        description:
          '根据客户背景提前梳理重点品牌、技术方向和展馆路线，避免现场信息过载。',
      },
      {
        day: '模块 02',
        title: '展会参访与产业趋势讲解',
        description:
          '围绕新能源、智能驾驶、智能座舱与供应链创新，帮助客户更聚焦地理解展示内容。',
      },
      {
        day: '模块 03',
        title: '品牌对比与合作线索整理',
        description:
          '从品牌定位、产品节奏、技术方向与合作可能性几个维度，对客户重点关注对象做对比归纳。',
      },
      {
        day: '模块 04',
        title: '后续会谈与城市商务支持',
        description:
          '如客户需要，可继续安排北京本地商务会谈、企业交流与后续沟通支持。',
      },
    ],
    idealFor: [
      '汽车品牌、经销、投资与汽配行业客户',
      '关注中国新能源与智能汽车趋势的企业代表',
      '希望通过展会建立产业判断与合作线索的客户',
    ],
    serviceStandards: [
      '重点品牌与展馆路线建议',
      '汽车行业语境的商务翻译陪同',
      '趋势整理与重点品牌信息汇总',
      '北京城市商务接待与会谈支持',
    ],
  },
  {
    id: 'x5',
    slug: 'cmef-medical-equipment-service',
    category: 'expo',
    badge: '中国会展商务服务',
    title: 'CMEF医疗器械服务',
    subtitle: '面向医疗采购、品牌代理与设备合作客户的专业会展参访服务',
    duration: '2026.04',
    location: '上海',
    image: chinaAssetImages.shanghaiNight,
    heroImage: chinaAssetImages.shanghaiNightAlt,
    gallery: [
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.factoryLine,
      chinaAssetImages.bayIndustry,
    ],
    spotlights: [
      {
        label: '时间',
        title: '2026春季CMEF',
        summary: '展会将于2026年4月9日至12日在上海国家会展中心举行，是中国医疗器械行业的重要平台。',
        image: chinaAssetImages.shanghaiNightAlt,
      },
      {
        label: '客群',
        title: '医疗采购与代理客户更明确',
        summary:
          '适合医疗器械经销商、医院采购、诊所集团、康复设备客户与影像设备相关企业。',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: '价值',
        title: '更适合找品牌、找代理、找新品',
        summary:
          '相比泛行业展会，CMEF 的商业路径更清楚，客户通常能够更快进入品牌筛选与合作判断阶段。',
        image: chinaAssetImages.bayIndustry,
      },
    ],
    overview:
      'CMEF 更适合目标清晰的医疗行业客户。无论是医疗器械经销、医院采购，还是康复设备与影像设备方向，这类产品都更强调新品观察、品牌筛选、合作评估与会后商务对接效率。',
    highlights: [
      '覆盖医疗器械全产业链与多个细分板块',
      '适合新品考察、品牌筛选和代理合作',
      '客户采购目标明确，商业转化路径更直接',
      '可叠加企业拜访与专业翻译服务',
    ],
    itinerary: [
      {
        day: '模块 01',
        title: '采购需求与品牌方向预判',
        description:
          '展前梳理客户重点关注的设备类型、采购方向与品牌层级，提高现场参访效率。',
      },
      {
        day: '模块 02',
        title: '展会陪同与专业沟通支持',
        description:
          '围绕设备功能、认证要求、渠道合作与售后支持等问题，提供更贴近医疗语境的翻译与陪同。',
      },
      {
        day: '模块 03',
        title: '候选品牌整理与合作判断',
        description:
          '帮助客户把接触到的品牌按产品匹配度、合作潜力和下一步沟通优先级做归纳。',
      },
      {
        day: '模块 04',
        title: '展后企业拜访与上海商务支持',
        description:
          '如有需要，可继续安排展后企业拜访、会谈支持与本地商务接待。',
      },
    ],
    idealFor: [
      '医疗器械经销与代理客户',
      '医院采购与诊所集团相关负责人',
      '康复、影像和专业设备方向的商务客户',
    ],
    serviceStandards: [
      '医疗类展前需求梳理',
      '专业翻译陪同与商务配对支持',
      '重点品牌与产品信息归纳',
      '企业拜访预约与上海接待服务',
    ],
  },
  {
    id: 'x6',
    slug: 'ciie-china-market-entry-service',
    category: 'expo',
    badge: '中国会展商务服务',
    title: '进博会中国市场进入服务',
    subtitle: '面向希望进入中国市场的海外企业的参访、买家接触与渠道拓展服务',
    duration: '2026.11',
    location: '上海',
    image: chinaAssetImages.shanghaiNightAlt,
    heroImage: chinaAssetImages.shanghaiNight,
    gallery: [
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.guangzhouNight,
      chinaAssetImages.bayIndustry,
    ],
    spotlights: [
      {
        label: '时间',
        title: '第9届中国国际进口博览会',
        summary: '展会将于2026年11月5日至10日在上海举行，重点面向进入中国市场的海外品牌与企业。',
        image: chinaAssetImages.shanghaiNight,
      },
      {
        label: '客群',
        title: '更适合想把产品卖进中国的企业',
        summary:
          '适合食品、消费品、健康、技术、服务贸易等方向，希望寻找中国买家和渠道伙伴的土耳其企业。',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: '价值',
        title: '不是采购型展会，而是市场进入平台',
        summary:
          '它的重点在于品牌展示、买家接触、渠道建立和市场验证，与采购型展会的逻辑完全不同。',
        image: chinaAssetImages.bayIndustry,
      },
    ],
    overview:
      '进博会与采购型展会的逻辑完全不同。它更适合希望把土耳其产品卖进中国、寻找中国买家、建立品牌认知和探索渠道合作的客户，是典型的中国市场进入型商务服务产品。',
    highlights: [
      '适合做中国市场进入与渠道拓展',
      '更强调买家接触、品牌展示与合作判断',
      '适合食品、消费品、健康与服务贸易企业',
      '可衔接渠道拜访、市场调研与本地会谈安排',
    ],
    itinerary: [
      {
        day: '模块 01',
        title: '市场进入目标梳理',
        description:
          '在展前帮助客户明确参访目的，是以买家接触、品牌观察、渠道判断还是市场验证为优先。',
      },
      {
        day: '模块 02',
        title: '展会参访与重点资源筛选',
        description:
          '根据客户行业方向陪同参访，重点观察潜在买家、合作渠道与市场相关资源。',
      },
      {
        day: '模块 03',
        title: '渠道与合作线索整理',
        description:
          '围绕客户产品定位，整理值得继续跟进的买家、渠道伙伴和合作对象，形成更清晰的后续方向。',
      },
      {
        day: '模块 04',
        title: '上海延伸拜访与市场进入支持',
        description:
          '如客户希望进一步了解中国市场，可增加渠道拜访、商务会谈与本地市场进入咨询支持。',
      },
    ],
    idealFor: [
      '希望把土耳其产品卖进中国的企业',
      '关注中国买家、渠道和品牌落地机会的客户',
      '希望先做市场验证再决定投入节奏的企业代表',
    ],
    serviceStandards: [
      '展前目标梳理与参访建议',
      '会展陪同与中文商务支持',
      '买家与渠道线索整理',
      '上海本地商务会谈与渠道拜访支持',
    ],
  },
];

const chinaExpoRoutesEn: Journey[] = [
  {
    id: 'x1',
    slug: 'canton-fair-sourcing-service',
    category: 'expo',
    badge: 'China Expo Business Services',
    title: 'Canton Fair Sourcing Service',
    subtitle: 'One-stop China expo support for multi-category sourcing and supplier screening',
    duration: 'Spring 2026',
    location: 'Guangzhou',
    image: chinaAssetImages.guangzhouNight,
    heroImage: chinaAssetImages.guangzhouNight,
    gallery: [
      chinaAssetImages.guangzhouNight,
      chinaAssetImages.yongqingFang,
      chinaAssetImages.factoryLine,
      chinaAssetImages.shenzhenNight,
    ],
    spotlights: [
      {
        label: 'Timing',
        title: 'The 139th Spring Canton Fair',
        summary:
          'Held from April 15 to May 5, 2026 across three phases, making it easier to match the visit window to the right sourcing categories.',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: 'Clients',
        title: 'Best suited to broad sourcing buyers',
        summary:
          'Especially relevant for traders, wholesalers, retailers, and buyers in electronics, building materials, furniture, homeware, and hardware.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Value',
        title: 'Cover multiple sectors in one China trip',
        summary:
          'Its main value is not deep industry specialization, but efficient comparison of suppliers, samples, price levels, and next-step factory visit potential.',
        image: chinaAssetImages.yongqingFang,
      },
    ],
    overview:
      'The Canton Fair remains one of China’s most established one-stop sourcing platforms, especially for Turkey-facing clients who want either a first entry into Chinese supply chains or a broad cross-category sourcing trip. Our service combines pre-show preparation, onsite interpretation, supplier screening, and post-show factory visit support.',
    highlights: [
      'Covers multiple sectors in one concentrated sourcing window',
      'Helps buyers screen supplier lists based on the right fair phase',
      'Works well for first-time China sourcing clients building market judgment',
      'Can be extended into post-fair factory visits across the Pearl River Delta',
    ],
    itinerary: [
      {
        day: 'Module 01',
        title: 'Registration support and sourcing brief',
        description:
          'We help determine the right fair phase, complete registration prep, and structure the target halls, supplier types, and onsite discussion priorities in advance.',
      },
      {
        day: 'Module 02',
        title: 'Onsite interpretation and fair escorting',
        description:
          'Provide booth-by-booth interpretation and business support so clients can compare samples, prices, MOQs, and cooperation terms more efficiently.',
      },
      {
        day: 'Module 03',
        title: 'Supplier screening and post-show review',
        description:
          'We help filter fair contacts by price level, lead time, product depth, and support capability so the buyer can move faster after the show.',
      },
      {
        day: 'Module 04',
        title: 'Pearl River Delta factory extensions',
        description:
          'If the client wants to go deeper, we can continue with factory and company visits in Guangzhou, Foshan, Dongguan, Zhongshan, or Shenzhen.',
      },
    ],
    idealFor: [
      'Buyers who want broad multi-sector sourcing in one trip',
      'Traders and distributors visiting China for supplier discovery',
      'Wholesale or project-support clients who need post-fair factory follow-up',
    ],
    serviceStandards: [
      'Fair registration and visit preparation support',
      'Chinese-English business interpretation onsite',
      'Supplier screening and post-show contact organization',
      'Pearl River Delta factory booking and Guangzhou local support',
    ],
  },
  {
    id: 'x2',
    slug: 'ciif-smart-manufacturing-service',
    category: 'expo',
    badge: 'China Expo Business Services',
    title: 'CIIF Smart Manufacturing Service',
    subtitle: 'A focused expo service around industrial automation, equipment upgrades, and smart factory solutions',
    duration: '2026.10',
    location: 'Shanghai',
    image: chinaAssetImages.factoryLine,
    heroImage: chinaAssetImages.bayIndustry,
    gallery: [
      chinaAssetImages.factoryLine,
      chinaAssetImages.bayIndustry,
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.apolloDrive,
    ],
    spotlights: [
      {
        label: 'Timing',
        title: 'CIIF 2026 in Shanghai',
        summary:
          'Scheduled for October 12 to 16, 2026 at the National Exhibition and Convention Center, with a much more vertical industrial focus than general trade fairs.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Clients',
        title: 'Stronger fit for industrial buyers',
        summary:
          'Built for factories, manufacturers, equipment agents, robotics, machine tools, industrial automation, and energy equipment clients.',
        image: chinaAssetImages.bayIndustry,
      },
      {
        label: 'Value',
        title: 'Better for B2B industrial decision-making',
        summary:
          'The goal is not consumer product sourcing, but equipment upgrades, automation strategy, technical cooperation, and understanding industrial capability.',
        image: chinaAssetImages.shanghaiNight,
      },
    ],
    overview:
      'CIIF is a much stronger product for industrial and manufacturing clients than a broad consumer fair. For factory owners, equipment distributors, and industrial project companies, it is more focused and far more likely to generate high-value technical conversations and business opportunities.',
    highlights: [
      'Centered on automation, robotics, machine tools, and smart manufacturing',
      'More suitable for equipment selection and industrial cooperation',
      'Connects buyers with industrial brands, solution providers, and channel partners',
      'Can be paired with factory and company visits across the Yangtze River Delta',
    ],
    itinerary: [
      {
        day: 'Module 01',
        title: 'Pre-show industry mapping',
        description:
          'We prepare a focused shortlist of halls, brands, and technical themes based on the client’s sector and investment priorities.',
      },
      {
        day: 'Module 02',
        title: 'Onsite industrial fair support',
        description:
          'Interpretation and guidance are aligned with industrial language, especially around automation, robotics, machine tools, and energy equipment.',
      },
      {
        day: 'Module 03',
        title: 'Brand screening and cooperation review',
        description:
          'After the fair, we help sort priority brands and solution providers according to agency potential, procurement fit, and project relevance.',
      },
      {
        day: 'Module 04',
        title: 'Yangtze Delta factory extensions',
        description:
          'Where needed, visits can continue into Shanghai, Kunshan, Suzhou, Jiaxing, and other manufacturing hubs in the region.',
      },
    ],
    idealFor: [
      'Industrial buyers planning equipment upgrades and automation changes',
      'Equipment distributors looking for brand or channel opportunities',
      'Corporate delegations that want to combine fair visits with factory tours',
    ],
    serviceStandards: [
      'Industrial hall planning and route design',
      'Industrial and equipment-focused business interpretation',
      'Priority brand and solution-provider shortlisting',
      'Yangtze Delta factory booking and Shanghai local support',
    ],
  },
  {
    id: 'x3',
    slug: 'bauma-china-machinery-service',
    category: 'expo',
    badge: 'China Expo Business Services',
    title: 'bauma CHINA Machinery Service',
    subtitle: 'A professional expo service for construction, infrastructure, mining, and heavy equipment channels',
    duration: '2026.11',
    location: 'Shanghai',
    image: chinaAssetImages.bayIndustry,
    heroImage: chinaAssetImages.factoryLine,
    gallery: [
      chinaAssetImages.bayIndustry,
      chinaAssetImages.factoryLine,
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.shanghaiNight,
    ],
    spotlights: [
      {
        label: 'Timing',
        title: 'bauma CHINA 2026',
        summary:
          'Scheduled for November 24 to 27, 2026 at the Shanghai New International Expo Centre, focusing on construction machinery and site technologies.',
        image: chinaAssetImages.bayIndustry,
      },
      {
        label: 'Clients',
        title: 'High relevance for engineering and mining buyers',
        summary:
          'Best suited to construction firms, contractors, mining companies, machinery agents, spare-parts channels, and equipment-focused buyers.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Value',
        title: 'Easier path into agency and project discussions',
        summary:
          'Compared with a general fair, this type of specialist exhibition makes it easier to move directly into machinery, parts, service, and project-level discussions.',
        image: chinaAssetImages.shanghaiNightAlt,
      },
    ],
    overview:
      'bauma CHINA is one of the key professional exhibitions in China’s machinery sector and fits well with project-driven clients. For Turkey-facing businesses in construction, mining, contracting, and equipment rental, this usually creates stronger and more focused business conversations than a general sourcing fair.',
    highlights: [
      'Covers machinery, spare parts, mining equipment, and construction technologies',
      'Industry concentration is high and buyer intent is clearer',
      'Well suited to agency talks, procurement discussions, and project alignment',
      'Can be extended into showrooms, factories, or local brand teams after the fair',
    ],
    itinerary: [
      {
        day: 'Module 01',
        title: 'Equipment brief and target brand shortlist',
        description:
          'We structure the visit around the equipment categories, use cases, and agency goals that matter most to the client.',
      },
      {
        day: 'Module 02',
        title: 'Onsite machinery fair escorting',
        description:
          'Provide interpretation around units, parts, lead times, service capacity, and regional cooperation models while moving through the fair.',
      },
      {
        day: 'Module 03',
        title: 'Follow-up prioritization by cooperation type',
        description:
          'We help sort the fair’s contacts by agency, procurement, project, and channel relevance so the client can move faster after the visit.',
      },
      {
        day: 'Module 04',
        title: 'Post-fair company visits and local support',
        description:
          'Where needed, we can extend the trip into showrooms, factories, or China team meetings for deeper discussions.',
      },
    ],
    idealFor: [
      'Construction, engineering, and contracting companies',
      'Machinery channels, parts distributors, and rental-oriented buyers',
      'Professional buyers who need direct access to brands and project resources',
    ],
    serviceStandards: [
      'Pre-fair machinery route planning',
      'Equipment and project interpretation support',
      'Post-fair brand screening and contact sorting',
      'Shanghai business reception and company-visit support',
    ],
  },
  {
    id: 'x4',
    slug: 'auto-china-ev-smart-mobility-service',
    category: 'expo',
    badge: 'China Expo Business Services',
    title: 'Auto China EV Service',
    subtitle: 'A business visit product focused on China’s EV, smart driving, and automotive trend shifts',
    duration: '2026.04-05',
    location: 'Beijing',
    image: chinaAssetImages.apolloDrive,
    heroImage: chinaAssetImages.forbiddenCityMoat,
    gallery: [
      chinaAssetImages.apolloDrive,
      chinaAssetImages.forbiddenCityMoat,
      chinaAssetImages.greatWallAlt,
      chinaAssetImages.shanghaiNightAlt,
    ],
    spotlights: [
      {
        label: 'Timing',
        title: 'Auto China 2026 in Beijing',
        summary:
          'Running from April 24 to May 3, 2026, this show is one of the clearest windows into China’s changing automotive landscape.',
        image: chinaAssetImages.forbiddenCityMoat,
      },
      {
        label: 'Clients',
        title: 'Strong fit for automotive-facing buyers',
        summary:
          'Relevant for auto-industry clients, parts distributors, dealers, investors, and companies watching EV and smart-mobility trends.',
        image: chinaAssetImages.apolloDrive,
      },
      {
        label: 'Value',
        title: 'More than vehicles, it is about direction',
        summary:
          'The strongest value lies in reading brand shifts, EV strategy, smart-driving momentum, and supply-chain innovation rather than just viewing car models.',
        image: chinaAssetImages.greatWallAlt,
      },
    ],
    overview:
      'Auto China matters because it helps clients understand how quickly China’s automotive sector is evolving. For Turkey-facing partners, it works best as a trend-reading and industry-orientation product: a way to look at brands, technology, smart mobility, and future cooperation possibilities with more clarity.',
    highlights: [
      'Brings EV and smart-driving conversations into one concentrated viewing window',
      'Works for dealers, investors, parts players, and broader automotive partners',
      'Helps visitors form a faster judgment on China’s automotive direction',
      'Can be paired with brand meetings and supply-chain conversations after the show',
    ],
    itinerary: [
      {
        day: 'Module 01',
        title: 'Brand and technology focus planning',
        description:
          'Before the show, we help narrow the visit around the brands, technologies, and halls most relevant to the client’s role and goals.',
      },
      {
        day: 'Module 02',
        title: 'Expo visit and trend interpretation',
        description:
          'The visit is guided around EVs, smart driving, intelligent cabins, and supply-chain shifts so the client can read the exhibition more effectively.',
      },
      {
        day: 'Module 03',
        title: 'Brand comparison and follow-up priorities',
        description:
          'We organize the client’s observations around positioning, product rhythm, technology direction, and cooperation potential.',
      },
      {
        day: 'Module 04',
        title: 'Beijing business meetings and local support',
        description:
          'If needed, the visit can continue with local meetings, brand exchanges, or broader business support in Beijing.',
      },
    ],
    idealFor: [
      'Automotive brands, dealers, investors, and parts-sector visitors',
      'Companies tracking China’s EV and smart-mobility direction',
      'Clients using the fair to build market judgment and cooperation leads',
    ],
    serviceStandards: [
      'Priority brand and hall route recommendations',
      'Automotive-context business interpretation support',
      'Trend notes and key-brand information summaries',
      'Beijing business reception and meeting support',
    ],
  },
  {
    id: 'x5',
    slug: 'cmef-medical-equipment-service',
    category: 'expo',
    badge: 'China Expo Business Services',
    title: 'CMEF Medical Equipment Service',
    subtitle: 'A professional expo support product for medical procurement, brand agency, and equipment cooperation',
    duration: '2026.04',
    location: 'Shanghai',
    image: chinaAssetImages.shanghaiNight,
    heroImage: chinaAssetImages.shanghaiNightAlt,
    gallery: [
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.factoryLine,
      chinaAssetImages.bayIndustry,
    ],
    spotlights: [
      {
        label: 'Timing',
        title: 'Spring CMEF 2026',
        summary:
          'Scheduled for April 9 to 12, 2026 at the National Exhibition and Convention Center in Shanghai, it remains one of China’s key medical equipment platforms.',
        image: chinaAssetImages.shanghaiNightAlt,
      },
      {
        label: 'Clients',
        title: 'Clear fit for medical procurement and agencies',
        summary:
          'Well suited to medical equipment distributors, hospital buyers, clinic groups, rehabilitation-focused buyers, and imaging-related companies.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Value',
        title: 'Best used for brand, agency, and product screening',
        summary:
          'Compared with broad cross-sector fairs, CMEF offers a more direct path into product assessment, agency evaluation, and supplier selection.',
        image: chinaAssetImages.bayIndustry,
      },
    ],
    overview:
      'CMEF is best used for clients with a clear healthcare objective. Whether the focus is distribution, hospital procurement, rehabilitation, or imaging devices, the value lies in structured product observation, brand screening, cooperation review, and faster post-show follow-up.',
    highlights: [
      'Covers the full medical equipment chain across key sub-sectors',
      'Strong fit for new-product discovery, brand screening, and agency talks',
      'Buyer intentions are usually clearer and more commercially direct',
      'Can be extended into company visits and specialist interpretation support',
    ],
    itinerary: [
      {
        day: 'Module 01',
        title: 'Procurement brief and brand-direction setup',
        description:
          'We structure the visit around the client’s target device categories, procurement goals, and preferred brand level before the fair begins.',
      },
      {
        day: 'Module 02',
        title: 'Onsite medical interpretation support',
        description:
          'Interpretation is aligned with technical specifications, certification questions, distribution models, and after-sales concerns common in medical discussions.',
      },
      {
        day: 'Module 03',
        title: 'Candidate brand review and next-step judgment',
        description:
          'We help organize the fair’s contacts by product fit, partnership potential, and urgency for follow-up after the event.',
      },
      {
        day: 'Module 04',
        title: 'Post-show company visits and Shanghai support',
        description:
          'Where needed, the trip can continue with company visits, meetings, and Shanghai-based business support.',
      },
    ],
    idealFor: [
      'Medical equipment distributors and agency-side buyers',
      'Hospital procurement teams and clinic-group decision makers',
      'Commercial visitors focused on rehab, imaging, and specialist devices',
    ],
    serviceStandards: [
      'Medical-fair visit planning based on procurement goals',
      'Specialist interpretation and business matching support',
      'Brand and product information screening',
      'Company-visit booking and Shanghai reception support',
    ],
  },
  {
    id: 'x6',
    slug: 'ciie-china-market-entry-service',
    category: 'expo',
    badge: 'China Expo Business Services',
    title: 'CIIE China Market Entry Service',
    subtitle: 'A business-support product for overseas companies seeking buyers, channels, and entry paths into China',
    duration: '2026.11',
    location: 'Shanghai',
    image: chinaAssetImages.shanghaiNightAlt,
    heroImage: chinaAssetImages.shanghaiNight,
    gallery: [
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.guangzhouNight,
      chinaAssetImages.bayIndustry,
    ],
    spotlights: [
      {
        label: 'Timing',
        title: 'The 9th China International Import Expo',
        summary:
          'Running from November 5 to 10, 2026 in Shanghai, it is one of the clearest platforms for overseas brands studying China market entry.',
        image: chinaAssetImages.shanghaiNight,
      },
      {
        label: 'Clients',
        title: 'Built for companies selling into China',
        summary:
          'A strong match for Turkey-based brands in food, consumer products, health, technology, and services that want Chinese buyers and channel partners.',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: 'Value',
        title: 'Not a sourcing fair but a market-entry platform',
        summary:
          'Its value comes from buyer exposure, brand visibility, channel discovery, and early market validation rather than buying from China.',
        image: chinaAssetImages.bayIndustry,
      },
    ],
    overview:
      'CIIE follows a completely different commercial logic from procurement fairs. It fits companies that want to sell Turkish products into China, meet buyers, build brand awareness, and evaluate channel opportunities. That makes it a true China-market-entry business service rather than a sourcing trip.',
    highlights: [
      'Designed around market entry and channel development in China',
      'More relevant for buyer exposure, brand visibility, and partner discovery',
      'Works well for food, consumer, health, technology, and service-trade clients',
      'Can be extended into channel visits, market sounding, and local business meetings',
    ],
    itinerary: [
      {
        day: 'Module 01',
        title: 'Market-entry objective setting',
        description:
          'Before the show, we help define whether the priority is buyer discovery, brand observation, channel judgment, or broader market validation.',
      },
      {
        day: 'Module 02',
        title: 'Expo visit and priority-resource screening',
        description:
          'The fair is approached through the lens of potential buyers, channel partners, and market-facing opportunities relevant to the client’s sector.',
      },
      {
        day: 'Module 03',
        title: 'Buyer and channel lead review',
        description:
          'We organize the strongest buyer, partner, and channel leads into a clearer post-show follow-up structure.',
      },
      {
        day: 'Module 04',
        title: 'Shanghai follow-up and local market support',
        description:
          'Where needed, we continue with channel visits, business meetings, and practical local support for China market-entry evaluation.',
      },
    ],
    idealFor: [
      'Companies aiming to sell Turkish products into China',
      'Brands looking for Chinese buyers, channels, and market partners',
      'Businesses that want early validation before committing more deeply to China',
    ],
    serviceStandards: [
      'Pre-show market-entry briefing and visit planning',
      'Onsite expo support and Chinese-language business assistance',
      'Buyer and channel lead organization',
      'Shanghai-based meetings and channel-visit support',
    ],
  },
];

const chinaExpoRoutesTr: Journey[] = [
  {
    id: 'x1',
    slug: 'canton-fair-sourcing-service',
    category: 'expo',
    badge: 'Çin Fuar İş Hizmetleri',
    title: 'Canton Fair Tedarik Hizmeti',
    subtitle: 'Çok kategorili satın alma ve tedarikçi elemesi için tek duraklı Çin fuar destek hizmeti',
    duration: '2026 İlkbahar',
    location: 'Guangzhou',
    image: chinaAssetImages.guangzhouNight,
    heroImage: chinaAssetImages.guangzhouNight,
    gallery: [
      chinaAssetImages.guangzhouNight,
      chinaAssetImages.yongqingFang,
      chinaAssetImages.factoryLine,
      chinaAssetImages.shenzhenNight,
    ],
    spotlights: [
      {
        label: 'Tarih',
        title: '139. Bahar Canton Fair',
        summary:
          '15 Nisan ile 5 Mayıs 2026 arasında üç faz halinde düzenlenir; böylece ziyaret penceresi satın alma kategorilerine göre daha doğru planlanabilir.',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: 'Müşteri',
        title: 'Geniş satın alma profili için en güçlü eşleşme',
        summary:
          'Özellikle tüccarlar, toptancılar, perakendeciler ve elektronik, yapı malzemesi, mobilya, ev yaşamı ve hırdavat alıcıları için uygundur.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Değer',
        title: 'Tek Çin seyahatinde çok sektörlü ön eleme',
        summary:
          'Asıl değer derin tek sektör uzmanlığından değil; tedarikçileri, numuneleri, fiyat seviyelerini ve fabrika ziyareti potansiyelini hızla karşılaştırmaktan gelir.',
        image: chinaAssetImages.yongqingFang,
      },
    ],
    overview:
      'Canton Fair, Çin’in en köklü tek duraklı tedarik platformlarından biridir. Özellikle Çin tedarik zincirine ilk kez girecek veya tek seyahatte çok sektörlü satın alma yapmak isteyen Türkiye odaklı müşteriler için güçlü bir başlangıç noktasıdır. Hizmetimiz fuar öncesi hazırlık, saha çevirisi, tedarikçi elemesi ve fuar sonrası fabrika ziyareti desteğini bir araya getirir.',
    highlights: [
      'Tek pencerede birden fazla sektörü kapsar',
      'Doğru fuar fazına göre daha isabetli tedarikçi elemesi yapılabilir',
      'Çin pazarını ilk kez değerlendiren müşteriler için güçlü bir giriş sağlar',
      'Fuar sonrası İnci Nehri Deltası fabrika ziyaretleriyle devam edebilir',
    ],
    itinerary: [
      {
        day: 'Modül 01',
        title: 'Kayıt desteği ve satın alma çerçevesi',
        description:
          'Müşterinin ürün ilgisine göre doğru faz belirlenir; kayıt hazırlığı tamamlanır ve önceden salon, tedarikçi tipi ve görüşme öncelikleri yapılandırılır.',
      },
      {
        day: 'Modül 02',
        title: 'Sahada çeviri ve fuar refakati',
        description:
          'Numune, fiyat, MOQ ve iş birliği koşullarını daha hızlı karşılaştırabilmek için saha içi çeviri ve iş desteği sağlanır.',
      },
      {
        day: 'Modül 03',
        title: 'Tedarikçi elemesi ve fuar sonrası tasnif',
        description:
          'Toplanan bağlantılar fiyat seviyesi, teslim süresi, ürün derinliği ve destek kapasitesi açısından ön elemeden geçirilir.',
      },
      {
        day: 'Modül 04',
        title: 'İnci Nehri Deltası fabrika uzantıları',
        description:
          'İhtiyaç halinde Guangzhou, Foshan, Dongguan, Zhongshan veya Shenzhen’de fabrika ve şirket ziyaretleriyle devam edilir.',
      },
    ],
    idealFor: [
      'Tek seyahatte çok sektörlü satın alma yapmak isteyen alıcılar',
      'Çin’de tedarikçi keşfi yapacak tüccarlar ve distribütörler',
      'Fuar sonrası fabrika takibi gerektiren toptan ve proje destek müşterileri',
    ],
    serviceStandards: [
      'Fuar kaydı ve ziyaret hazırlık desteği',
      'Çince-İngilizce iş çevirisi refakati',
      'Tedarikçi elemesi ve fuar sonrası iletişim düzeni',
      'İnci Nehri Deltası fabrika rezervasyonu ve Guangzhou yerel desteği',
    ],
  },
  {
    id: 'x2',
    slug: 'ciif-smart-manufacturing-service',
    category: 'expo',
    badge: 'Çin Fuar İş Hizmetleri',
    title: 'CIIF Akıllı Üretim Hizmeti',
    subtitle: 'Endüstriyel otomasyon, ekipman yenileme ve akıllı fabrika çözümlerine odaklanan profesyonel fuar hizmeti',
    duration: '2026.10',
    location: 'Shanghai',
    image: chinaAssetImages.factoryLine,
    heroImage: chinaAssetImages.bayIndustry,
    gallery: [
      chinaAssetImages.factoryLine,
      chinaAssetImages.bayIndustry,
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.apolloDrive,
    ],
    spotlights: [
      {
        label: 'Tarih',
        title: 'CIIF 2026 Şanghay',
        summary:
          '12-16 Ekim 2026 tarihlerinde Ulusal Sergi ve Kongre Merkezi’nde yapılacak; genel ticaret fuarlarına göre çok daha dikey bir sanayi odağı sunacaktır.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Müşteri',
        title: 'Sanayi alıcıları için daha güçlü uyum',
        summary:
          'Fabrikalar, üreticiler, ekipman acenteleri, robotik, takım tezgahı, endüstriyel otomasyon ve enerji ekipmanı müşterileri için uygundur.',
        image: chinaAssetImages.bayIndustry,
      },
      {
        label: 'Değer',
        title: 'B2B endüstriyel kararlar için daha uygun',
        summary:
          'Odak tüketim ürünü almak değil; ekipman yenilemesi, otomasyon stratejisi, teknik iş birliği ve endüstriyel kapasiteyi anlamaktır.',
        image: chinaAssetImages.shanghaiNight,
      },
    ],
    overview:
      'CIIF, geniş tüketim fuarlarına kıyasla sanayi ve üretim müşterileri için çok daha güçlü bir üründür. Fabrika sahipleri, ekipman distribütörleri ve endüstriyel proje şirketleri için daha odaklıdır ve daha yüksek değerli teknik görüşmelere kapı açar.',
    highlights: [
      'Otomasyon, robotik, takım tezgahı ve akıllı üretim ekseninde şekillenir',
      'Ekipman seçimi ve sanayi iş birliği için daha uygundur',
      'Alıcıları sanayi markaları, çözüm sağlayıcılar ve kanal ortaklarıyla buluşturur',
      'Yangtze Deltası fabrika ziyaretleriyle birleştirilebilir',
    ],
    itinerary: [
      {
        day: 'Modül 01',
        title: 'Fuar öncesi sektör haritalaması',
        description:
          'Müşterinin sektörüne ve yatırım önceliklerine göre hedef salonlar, markalar ve teknik temalar önceden hazırlanır.',
      },
      {
        day: 'Modül 02',
        title: 'Sahada endüstriyel fuar refakati',
        description:
          'Çeviri ve yönlendirme; otomasyon, robotik, takım tezgahı ve enerji ekipmanı gibi alanlarda daha doğru sanayi diliyle yürütülür.',
      },
      {
        day: 'Modül 03',
        title: 'Marka elemesi ve iş birliği değerlendirmesi',
        description:
          'Fuar sonrası öncelikli markalar ve çözüm sağlayıcılar acentelik, tedarik uyumu ve proje ilgisi açısından tasnif edilir.',
      },
      {
        day: 'Modül 04',
        title: 'Yangtze Deltası fabrika uzantıları',
        description:
          'Gerektiğinde ziyaret Şanghay, Kunshan, Suzhou, Jiaxing ve benzeri üretim merkezlerine taşınabilir.',
      },
    ],
    idealFor: [
      'Ekipman yenilemesi ve otomasyon planlayan sanayi alıcıları',
      'Marka ve kanal fırsatı arayan ekipman distribütörleri',
      'Fuar ziyaretini fabrika turuyla birleştirmek isteyen heyetler',
    ],
    serviceStandards: [
      'Sanayi salonu planlama ve rota tasarımı',
      'Sanayi ve ekipman odaklı iş çevirisi',
      'Öncelikli marka ve çözüm sağlayıcı kısa listesi',
      'Yangtze Deltası fabrika rezervasyonu ve Şanghay yerel desteği',
    ],
  },
  {
    id: 'x3',
    slug: 'bauma-china-machinery-service',
    category: 'expo',
    badge: 'Çin Fuar İş Hizmetleri',
    title: 'bauma CHINA Makine Hizmeti',
    subtitle: 'İnşaat, altyapı, madencilik ve ağır ekipman kanalları için profesyonel fuar hizmeti',
    duration: '2026.11',
    location: 'Shanghai',
    image: chinaAssetImages.bayIndustry,
    heroImage: chinaAssetImages.factoryLine,
    gallery: [
      chinaAssetImages.bayIndustry,
      chinaAssetImages.factoryLine,
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.shanghaiNight,
    ],
    spotlights: [
      {
        label: 'Tarih',
        title: 'bauma CHINA 2026',
        summary:
          '24-27 Kasım 2026 tarihlerinde Şanghay Yeni Uluslararası Fuar Merkezi’nde yapılacak; inşaat makineleri ve saha teknolojilerine odaklanır.',
        image: chinaAssetImages.bayIndustry,
      },
      {
        label: 'Müşteri',
        title: 'Mühendislik ve madencilik için yüksek uygunluk',
        summary:
          'İnşaat firmaları, müteahhitler, madencilik şirketleri, makine acenteleri, yedek parça kanalları ve ekipman alıcıları için uygundur.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Değer',
        title: 'Acentelik ve proje görüşmelerine daha hızlı geçiş',
        summary:
          'Genel fuarlara göre bu tip uzman fuarlar; makine, parça, servis ve proje seviyesindeki görüşmelere daha doğrudan geçiş sağlar.',
        image: chinaAssetImages.shanghaiNightAlt,
      },
    ],
    overview:
      'bauma CHINA, Çin makine sektörünün öne çıkan profesyonel fuarlarından biridir ve proje odaklı müşteriler için güçlü bir eşleşme sunar. İnşaat, madencilik, taahhüt ve ekipman kiralama alanındaki Türkiye odaklı firmalar için genel tedarik fuarlarına göre daha odaklı ve verimli görüşmeler üretir.',
    highlights: [
      'Makine, yedek parça, madencilik ekipmanı ve saha teknolojilerini kapsar',
      'Sektör yoğunluğu yüksek, müşteri niyeti daha nettir',
      'Acentelik, tedarik ve proje görüşmeleri için uygundur',
      'Fuar sonrası showroom, fabrika veya yerel marka ekipleriyle devam edebilir',
    ],
    itinerary: [
      {
        day: 'Modül 01',
        title: 'Ekipman özeti ve hedef marka listesi',
        description:
          'Ziyaret; müşterinin ekipman kategorileri, kullanım senaryoları ve acentelik hedefleri etrafında önceden yapılandırılır.',
      },
      {
        day: 'Modül 02',
        title: 'Sahada makine fuarı refakati',
        description:
          'Birimler, yedek parçalar, teslim süreleri, servis kapasitesi ve bölgesel iş birliği modelleri üzerinden çeviri desteği sağlanır.',
      },
      {
        day: 'Modül 03',
        title: 'İş birliği türüne göre önceliklendirme',
        description:
          'Toplanan bağlantılar acentelik, satın alma, proje ve kanal uygunluğu açısından ayrıştırılarak takip süreci hızlandırılır.',
      },
      {
        day: 'Modül 04',
        title: 'Fuar sonrası şirket ziyaretleri',
        description:
          'Gerekirse ziyaret showroom, fabrika veya Çin ekipleriyle daha derin toplantılara uzatılabilir.',
      },
    ],
    idealFor: [
      'İnşaat, mühendislik ve taahhüt şirketleri',
      'Makine kanalları, yedek parça distribütörleri ve kiralama odaklı alıcılar',
      'Markalara ve proje kaynaklarına doğrudan erişmek isteyen profesyonel alıcılar',
    ],
    serviceStandards: [
      'Fuar öncesi makine rota planlaması',
      'Ekipman ve proje çeviri desteği',
      'Fuar sonrası marka elemesi ve ilişki tasnifi',
      'Şanghay iş karşılama ve şirket ziyareti desteği',
    ],
  },
  {
    id: 'x4',
    slug: 'auto-china-ev-smart-mobility-service',
    category: 'expo',
    badge: 'Çin Fuar İş Hizmetleri',
    title: 'Auto China EV Hizmeti',
    subtitle: 'Çin’in elektrikli araç, akıllı sürüş ve otomotiv trendlerine odaklanan iş ziyareti ürünü',
    duration: '2026.04-05',
    location: 'Beijing',
    image: chinaAssetImages.apolloDrive,
    heroImage: chinaAssetImages.forbiddenCityMoat,
    gallery: [
      chinaAssetImages.apolloDrive,
      chinaAssetImages.forbiddenCityMoat,
      chinaAssetImages.greatWallAlt,
      chinaAssetImages.shanghaiNightAlt,
    ],
    spotlights: [
      {
        label: 'Tarih',
        title: 'Auto China 2026 Pekin',
        summary:
          '24 Nisan ile 3 Mayıs 2026 arasında düzenlenecek; Çin otomotiv dünyasındaki değişimi okumak için en net pencerelerden biridir.',
        image: chinaAssetImages.forbiddenCityMoat,
      },
      {
        label: 'Müşteri',
        title: 'Otomotiv odaklı alıcılar için güçlü uyum',
        summary:
          'Otomotiv müşterileri, yedek parça dağıtıcıları, bayiler, yatırımcılar ve EV ile akıllı mobiliteyi takip eden firmalar için uygundur.',
        image: chinaAssetImages.apolloDrive,
      },
      {
        label: 'Değer',
        title: 'Sadece araç değil, sektör yönü okunur',
        summary:
          'En büyük değer; marka değişimlerini, EV stratejilerini, akıllı sürüş ivmesini ve tedarik zinciri yeniliğini okumaktan gelir.',
        image: chinaAssetImages.greatWallAlt,
      },
    ],
    overview:
      'Auto China’nın değeri yalnızca araç göstermesinde değil, Çin otomotiv sektörünün ne kadar hızlı değiştiğini anlaşılır kılmasındadır. Türkiye odaklı ortaklar için bu ürün; markaları, teknolojileri, akıllı mobiliteyi ve gelecekteki iş birliği ihtimallerini daha net okumaya yarar.',
    highlights: [
      'EV ve akıllı sürüş başlıklarını tek pencerede sunar',
      'Bayiler, yatırımcılar, parça oyuncuları ve otomotiv ortakları için uygundur',
      'Ziyaretçilerin Çin otomotiv yönü hakkında daha hızlı fikir geliştirmesini sağlar',
      'Fuar sonrası marka görüşmeleri ve tedarik zinciri konuşmalarıyla genişleyebilir',
    ],
    itinerary: [
      {
        day: 'Modül 01',
        title: 'Marka ve teknoloji odak planlaması',
        description:
          'Fuar öncesinde ziyaret, müşterinin rolü ve hedefleri için en anlamlı marka, teknoloji ve salonlar etrafında daraltılır.',
      },
      {
        day: 'Modül 02',
        title: 'Fuar ziyareti ve trend yorumlama',
        description:
          'EV, akıllı sürüş, akıllı kabin ve tedarik zinciri değişimleri odaklı bir rehberlikle fuar daha doğru okunur.',
      },
      {
        day: 'Modül 03',
        title: 'Marka karşılaştırması ve takip öncelikleri',
        description:
          'Gözlemler; konumlandırma, ürün ritmi, teknoloji yönü ve iş birliği ihtimali başlıklarında düzenlenir.',
      },
      {
        day: 'Modül 04',
        title: 'Pekin iş toplantıları ve yerel destek',
        description:
          'Gerektiğinde ziyaret; yerel toplantılar, marka görüşmeleri ve daha geniş iş desteğiyle devam ettirilebilir.',
      },
    ],
    idealFor: [
      'Otomotiv markaları, bayiler, yatırımcılar ve yedek parça sektörü ziyaretçileri',
      'Çin’in EV ve akıllı mobilite yönünü takip eden şirketler',
      'Fuarı pazar okuması ve iş birliği ipucu için kullanan müşteriler',
    ],
    serviceStandards: [
      'Öncelikli marka ve salon rota önerileri',
      'Otomotiv bağlamına uygun iş çevirisi desteği',
      'Trend notları ve kilit marka bilgi özeti',
      'Pekin iş karşılama ve toplantı desteği',
    ],
  },
  {
    id: 'x5',
    slug: 'cmef-medical-equipment-service',
    category: 'expo',
    badge: 'Çin Fuar İş Hizmetleri',
    title: 'CMEF Medikal Ekipman Hizmeti',
    subtitle: 'Medikal satın alma, marka acenteliği ve ekipman iş birliği için profesyonel fuar destek ürünü',
    duration: '2026.04',
    location: 'Shanghai',
    image: chinaAssetImages.shanghaiNight,
    heroImage: chinaAssetImages.shanghaiNightAlt,
    gallery: [
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.factoryLine,
      chinaAssetImages.bayIndustry,
    ],
    spotlights: [
      {
        label: 'Tarih',
        title: 'CMEF İlkbahar 2026',
        summary:
          '9-12 Nisan 2026 tarihlerinde Şanghay Ulusal Sergi ve Kongre Merkezi’nde düzenlenecek; Çin’in temel medikal ekipman platformlarından biridir.',
        image: chinaAssetImages.shanghaiNightAlt,
      },
      {
        label: 'Müşteri',
        title: 'Medikal satın alma ve acentelik için net uyum',
        summary:
          'Medikal ekipman distribütörleri, hastane alıcıları, klinik grupları, rehabilitasyon odaklı alıcılar ve görüntüleme şirketleri için uygundur.',
        image: chinaAssetImages.factoryLine,
      },
      {
        label: 'Değer',
        title: 'Marka, acentelik ve ürün elemesi için ideal',
        summary:
          'Geniş sektör fuarlarına kıyasla CMEF; ürün değerlendirmesi, acentelik incelemesi ve tedarikçi seçimine daha doğrudan bir yol sunar.',
        image: chinaAssetImages.bayIndustry,
      },
    ],
    overview:
      'CMEF, sağlık sektöründe hedefi net olan müşteriler için en doğru kullanılır. Dağıtım, hastane satın alma, rehabilitasyon veya görüntüleme cihazları odaklı olsun; değer ürün gözlemi, marka elemesi, iş birliği değerlendirmesi ve fuar sonrası daha hızlı takiptir.',
    highlights: [
      'Temel alt segmentler üzerinden tüm medikal ekipman zincirini kapsar',
      'Yeni ürün keşfi, marka elemesi ve acentelik görüşmeleri için uygundur',
      'Alıcı niyeti genelde daha nettir ve ticari yol daha doğrudandır',
      'Şirket ziyaretleri ve uzman çeviri desteğiyle genişletilebilir',
    ],
    itinerary: [
      {
        day: 'Modül 01',
        title: 'Satın alma özeti ve marka yönünün kurulması',
        description:
          'Fuar öncesinde ziyaret, hedef cihaz kategorileri, satın alma amaçları ve tercih edilen marka seviyeleri etrafında yapılandırılır.',
      },
      {
        day: 'Modül 02',
        title: 'Sahada medikal çeviri desteği',
        description:
          'Teknik özellikler, sertifikasyon, dağıtım modeli ve satış sonrası konular üzerinden medikal bağlama uygun çeviri desteği sunulur.',
      },
      {
        day: 'Modül 03',
        title: 'Aday marka incelemesi ve sonraki adım kararı',
        description:
          'Toplanan bağlantılar ürün uyumu, ortaklık potansiyeli ve takip önceliğine göre düzenlenir.',
      },
      {
        day: 'Modül 04',
        title: 'Fuar sonrası şirket ziyaretleri ve Şanghay desteği',
        description:
          'Gerektiğinde ziyaret; şirket görüşmeleri, toplantılar ve Şanghay tabanlı iş desteğiyle devam eder.',
      },
    ],
    idealFor: [
      'Medikal ekipman distribütörleri ve acente tarafı alıcılar',
      'Hastane satın alma ekipleri ve klinik grubu karar vericileri',
      'Rehabilitasyon, görüntüleme ve uzman cihazlarda ticari ziyaretçiler',
    ],
    serviceStandards: [
      'Satın alma hedeflerine göre medikal fuar planlaması',
      'Uzman çeviri ve iş eşleştirme desteği',
      'Marka ve ürün bilgi elemesi',
      'Şirket ziyareti rezervasyonu ve Şanghay karşılama desteği',
    ],
  },
  {
    id: 'x6',
    slug: 'ciie-china-market-entry-service',
    category: 'expo',
    badge: 'Çin Fuar İş Hizmetleri',
    title: 'CIIE Çin Pazarına Giriş Hizmeti',
    subtitle: 'Çin’e giriş yolu, alıcı ve kanal arayan yurt dışı firmalar için iş destek ürünü',
    duration: '2026.11',
    location: 'Shanghai',
    image: chinaAssetImages.shanghaiNightAlt,
    heroImage: chinaAssetImages.shanghaiNight,
    gallery: [
      chinaAssetImages.shanghaiNightAlt,
      chinaAssetImages.shanghaiNight,
      chinaAssetImages.guangzhouNight,
      chinaAssetImages.bayIndustry,
    ],
    spotlights: [
      {
        label: 'Tarih',
        title: '9. Çin Uluslararası İthalat Fuarı',
        summary:
          '5-10 Kasım 2026 tarihlerinde Şanghay’da düzenlenecek; Çin pazarına giriş düşünen yurt dışı markalar için en net platformlardan biridir.',
        image: chinaAssetImages.shanghaiNight,
      },
      {
        label: 'Müşteri',
        title: 'Ürününü Çin’e satmak isteyen firmalar için',
        summary:
          'Gıda, tüketim ürünleri, sağlık, teknoloji ve hizmet ticareti alanlarında Çinli alıcı ve kanal ortakları arayan Türk markaları için güçlü bir uyum sunar.',
        image: chinaAssetImages.guangzhouNight,
      },
      {
        label: 'Değer',
        title: 'Tedarik fuarı değil, pazara giriş platformu',
        summary:
          'Asıl değer Çin’den alım yapmakta değil; alıcı görünürlüğü, marka görünürlüğü, kanal keşfi ve erken pazar doğrulamasındadır.',
        image: chinaAssetImages.bayIndustry,
      },
    ],
    overview:
      'CIIE, satın alma fuarlarından tamamen farklı bir ticari mantığa sahiptir. Türk ürünlerini Çin’e satmak, alıcılarla tanışmak, marka bilinirliği oluşturmak ve kanal fırsatlarını değerlendirmek isteyen firmalar için gerçek bir Çin pazarı giriş hizmetidir.',
    highlights: [
      'Çin’de pazar girişi ve kanal geliştirme etrafında tasarlanmıştır',
      'Alıcı görünürlüğü, marka farkındalığı ve iş ortağı keşfi için daha uygundur',
      'Gıda, tüketim, sağlık, teknoloji ve hizmet ticareti müşterileriyle iyi eşleşir',
      'Kanal ziyaretleri, pazar yoklaması ve yerel toplantılarla genişletilebilir',
    ],
    itinerary: [
      {
        day: 'Modül 01',
        title: 'Pazara giriş hedeflerinin netleştirilmesi',
        description:
          'Fuar öncesi önceliğin alıcı keşfi, marka gözlemi, kanal kararı ya da genel pazar doğrulaması olup olmadığı netleştirilir.',
      },
      {
        day: 'Modül 02',
        title: 'Fuar ziyareti ve öncelikli kaynak elemesi',
        description:
          'Ziyaret; müşterinin sektörüne göre potansiyel alıcılar, kanal ortakları ve pazar odaklı iş fırsatları üzerinden yapılandırılır.',
      },
      {
        day: 'Modül 03',
        title: 'Alıcı ve kanal temaslarının düzenlenmesi',
        description:
          'En güçlü alıcı, ortak ve kanal temasları fuar sonrası daha net bir takip yapısına dönüştürülür.',
      },
      {
        day: 'Modül 04',
        title: 'Şanghay takibi ve yerel pazar desteği',
        description:
          'Gerektiğinde ziyaret, kanal görüşmeleri, iş toplantıları ve yerel pazar değerlendirme desteğiyle devam ettirilir.',
      },
    ],
    idealFor: [
      'Türk ürünlerini Çin’e satmayı hedefleyen şirketler',
      'Çinli alıcı, kanal ve pazar ortağı arayan markalar',
      'Çin’e daha derin yatırım yapmadan önce erken doğrulama isteyen firmalar',
    ],
    serviceStandards: [
      'Fuar öncesi pazara giriş özeti ve ziyaret planı',
      'Sahada fuar desteği ve Çince iş desteği',
      'Alıcı ve kanal temaslarının düzenlenmesi',
      'Şanghay tabanlı toplantı ve kanal ziyareti desteği',
    ],
  },
];

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
      expo: '中国会展商务服务',
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
      ...chinaExpoRoutesZh,
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
      expo: 'Expo Services',
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
      ...chinaExpoRoutesEn,
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
      expo: 'Fuar Hizmetleri',
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
      ...chinaExpoRoutesTr,
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
