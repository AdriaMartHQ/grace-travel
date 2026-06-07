import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const fallbackImage =
  '/img/remote/u-1542743408-218cc173cda0.webp';

const heroImage =
  '/img/remote/u-1542743408-218cc173cda0.webp';

const itineraryContent = {
  zh: {
    meta: {
      code: 'I1',
      seriesTitle: 'I 系列 · 以色列圣地灵修线路｜8天7晚经典朝圣之旅',
      title: 'I1 线路 · 8天7晚以色列圣地灵修之旅',
      subtitle: '走进圣经现场，在耶路撒冷与加利利之间完成一次更有次序的属灵回望',
      tagline:
        '海法与加利利事工现场｜耶路撒冷受难与复活路线｜约旦河、死海与伯利恒核心节点｜适合教会、团契与家庭小团',
      transport: '全程空调旅游巴士，中文导游与领队陪同，适合以灵修、朝圣与圣经背景讲解为重点的团队出行。',
      hotels: '当地四星标准双人间为主，含早餐与晚餐；部分中午安排当地特色餐，兼顾团体执行与旅途舒适度。',
      transport_label: '交通服务',
      hotels_label: '住宿与餐饮',
      price_label: '参考团费',
      price: '14890',
      meals_label: '餐饮安排',
      stay_label: '入住参考',
      footer_cta_title: '开启您的以色列圣地朝圣之旅',
      cta_consult: '立即咨询顾问',
      cta_plan: '获取详细方案',
      sticky_cta: '即刻定制',
      seo: {
        title: '以色列圣地朝圣8天7晚 | 耶路撒冷·加利利·伯利恒·死海 | 恩途信仰之旅',
        description:
          '恩途 I1：8天7晚以色列圣地朝圣，走遍耶路撒冷苦路、加利利传道现场、约旦河受洗处、伯利恒马槽、死海、海法与约帕，全程中文圣经讲解，适合教会团契组团。',
        keywords:
          '以色列圣地朝圣8天, 耶路撒冷朝圣旅游攻略, 加利利旅游华人, 约旦河受洗伯利恒, 死海以色列旅游, 华人教会以色列朝圣团, 圣地灵修之旅中文导游',
      },
    },
    highlights: {
      title: '行程核心亮点',
      items: [
        {
          title: '完整覆盖圣地核心脉络',
          desc: '从海法、拿撒勒、加利利，到耶利哥、死海、伯利恒、耶路撒冷与约帕，初次朝圣所需的关键节点基本完整。',
        },
        {
          title: '耶稣事工主线清晰',
          desc: '围绕报喜、加利利传道、受洗、受难、埋葬与复活这些核心主题展开，适合配合讲解、查经与祷告。',
        },
        {
          title: '兼顾旧约与新约背景',
          desc: '米吉多、耶利哥、昆兰、西墙、圣殿山等地点，帮助团队把以色列历史、圣殿传统与福音书现场串联起来。',
        },
        {
          title: '加利利与耶路撒冷双重重点',
          desc: '前半段安静进入主耶稣公开事工现场，后半段集中在耶路撒冷的苦路、圣墓与复活信息，属灵节奏更完整。',
        },
        {
          title: '适合教会与团契包团',
          desc: '线路结构清楚，便于安排分享、领圣餐、受洗纪念、车上信息与晚间团契，是非常典型的圣地灵修团底版。',
        },
        {
          title: '自然与圣经历史并行',
          desc: '死海漂浮、加利利海游船、约旦河与耶路撒冷山城视角，增强团队体验感，不至于只剩古迹打卡。',
        },
      ],
    },
    summaryTable: {
      title: '行程简表',
      columns: ['天数', '行程安排', '早', '中', '晚', '住宿参考'],
      rows: [
        { day: 'D1', route: '抵达特拉维夫 → 本古里安机场 → 入住酒店', breakfast: '/', lunch: '/', dinner: '/', hotel: '特拉维夫 / 周边' },
        { day: 'D2', route: '海法 → 凯撒利亚 → 米吉多 → 迦拿 → 拿撒勒 → 提比利亚', breakfast: '酒店', lunch: '含', dinner: '含', hotel: '提比利亚' },
        { day: 'D3', route: '凯撒利亚腓立比 → 八福山 → 五饼二鱼堂 → 彼得授职堂 → 迦百农 → 约旦河', breakfast: '酒店', lunch: '含', dinner: '含', hotel: '提比利亚' },
        { day: 'D4', route: '大博尔山 → 伯珊 → 约旦峡谷 → 耶利哥 → 昆兰 → 死海', breakfast: '酒店', lunch: '含', dinner: '含', hotel: '死海 / 耶路撒冷' },
        { day: 'D5', route: '橄榄山 → 客西马尼园 → 万国教堂 → 主祷文堂 → 国会大厦 → 伯利恒', breakfast: '酒店', lunch: '含', dinner: '含', hotel: '耶路撒冷' },
        { day: 'D6', route: '锡安山 → 毕士大池 → 圣殿山 → 西墙 → 苦路十四站 → 圣墓堂', breakfast: '酒店', lunch: '含', dinner: '含', hotel: '耶路撒冷' },
        { day: 'D7', route: '大屠杀纪念馆 → 以色列博物馆 → 约帕 → 彼得教堂 → 特拉维夫机场', breakfast: '酒店', lunch: '含', dinner: '/', hotel: '送机返程' },
        { day: 'D8', route: '返抵出发地', breakfast: '/', lunch: '/', dinner: '/', hotel: '回到温暖的家' },
      ],
    },
    sections: {
      days: [
        {
          day: '01',
          title: '抵达以色列｜旅程正式开始',
          stay: '特拉维夫 / 周边酒店',
          image: '/img/remote/u-1516483638261-f4dbaf036963.webp',
          paragraphs: [
            '抵达特拉维夫本古里安国际机场后，由当地接待人员迎接并协助团队完成入境后的集合与上车。',
            '当日以安顿休息为主，帮助团队从长途飞行中调整节奏，为接下来的圣地朝圣做好身心预备。',
          ],
          meals: { breakfast: '/', lunch: '/', dinner: '/' },
        },
        {
          day: '02',
          title: '海法、凯撒利亚、米吉多、迦拿与拿撒勒｜进入圣经地理',
          stay: '提比利亚酒店',
          image: '/img/remote/u-1505763941729-634dfa346b1b.webp',
          paragraphs: [
            '由海法迦密山开启旅程，在以利亚先知与巴力先知对峙的背景中进入旧约叙事；随后探访凯撒利亚遗址，回顾彼得向哥尼流传福音的重要节点，并经过米吉多平原体会圣经中的末世意象。',
            '下午前往迦拿与拿撒勒，围绕耶稣第一个神迹、报喜事件与圣家生活展开现场讲解，使团队从地理空间进入福音书的真实历史语境。',
          ],
          meals: { breakfast: '酒店', lunch: '含', dinner: '含' },
        },
        {
          day: '03',
          title: '加利利海一线｜从认信到跟随',
          stay: '提比利亚酒店',
          image: '/img/remote/u-1542743408-218cc173cda0.webp',
          paragraphs: [
            '前往凯撒利亚腓立比，回顾彼得对基督身份的伟大认信；随后沿加利利海岸访问八福山、五饼二鱼堂、彼得授职堂与迦百农，重走耶稣最集中开展事工的区域。',
            '行程中安排加利利海游船与约旦河纪念环节，让团队在祷告、诗歌或默想中，将圣经文本与现场体验真正连接起来。',
          ],
          meals: { breakfast: '酒店', lunch: '含', dinner: '含' },
        },
        {
          day: '04',
          title: '约旦河谷、耶利哥、昆兰与死海｜旷野、试炼与古卷',
          stay: '死海 / 耶路撒冷酒店',
          image: '/img/remote/u-1500530855697-b586d89ba3ee.webp',
          paragraphs: [
            '由大博尔山与伯珊开始南下，穿越约旦峡谷进入耶利哥，回顾约书亚时代与耶稣受试探、撒该蒙恩等圣经场景。',
            '之后探访昆兰遗址并体验死海漂浮，在自然地貌与《死海古卷》发现背景之间，帮助团队理解圣经文本流传与旷野传统的真实重量。',
          ],
          meals: { breakfast: '酒店', lunch: '含', dinner: '含' },
        },
        {
          day: '05',
          title: '橄榄山与伯利恒｜从降生到受难前夜',
          stay: '耶路撒冷酒店',
          image: '/img/remote/u-1548013146-72479768bada.webp',
          paragraphs: [
            '在橄榄山俯瞰圣城，依次经过主哭耶路撒冷堂、客西马尼园、万国教堂、主祷文堂与圣母之墓，在地形与经文中体会耶稣进入耶路撒冷后的情感与使命。',
            '随后前往伯利恒，探访主诞堂与牧羊人野地相关圣址，将“道成肉身”的起点与耶路撒冷受难叙事衔接起来，使整条福音主线更完整。',
          ],
          meals: { breakfast: '酒店', lunch: '含', dinner: '含' },
        },
        {
          day: '06',
          title: '耶路撒冷老城｜苦路、圣墓与复活信息',
          stay: '耶路撒冷酒店',
          image: '/img/remote/u-1528901166007-3784c7dd3653.webp',
          paragraphs: [
            '今日聚焦耶路撒冷老城核心，访问锡安山、马可楼、鸡鸣堂、毕士大池、圣殿山与西墙，在犹太圣殿传统与耶稣受审背景中理解福音书后半程。',
            '下午依次走完苦路十四站并进入圣墓堂，最终以空坟墓信息作为属灵高潮，让整团在默想、祷告与回应中完成最重要的一日朝圣。',
          ],
          meals: { breakfast: '酒店', lunch: '含', dinner: '含' },
        },
        {
          day: '07',
          title: '新耶路撒冷与约帕｜历史回望后的返程',
          stay: '送机返程',
          image: '/img/remote/u-1510076857177-7470076d4098.webp',
          paragraphs: [
            '前往大屠杀纪念馆与以色列博物馆，从现代犹太民族记忆、圣经文物与国家重建脉络，补足团队对当代以色列的理解。',
            '最后抵达约帕，回顾彼得异象与约拿故事相关背景，在古港口为整趟旅程作温柔收束，随后前往特拉维夫机场办理离境返程。',
          ],
          meals: { breakfast: '酒店', lunch: '含', dinner: '/' },
        },
        {
          day: '08',
          title: '回程抵达｜带着更新后的理解回到日常',
          stay: '回到温暖的家',
          image: heroImage,
          paragraphs: [
            '结束返程航班后抵达出发地，整趟圣地之旅在现实生活中告一段落。',
            '更重要的是把在圣地看见、听见、祷告过的内容带回日常，让这趟旅程不只停留在地理抵达，而成为生命里的继续回应。',
          ],
          meals: { breakfast: '/', lunch: '/', dinner: '/' },
        },
      ],
    },
    notices: {
      title: '重要提示与备注',
      items: [
        '行程调整：以上行程安排及顺序仅供参考，具体执行可能因航班、天气、交通管制、宗教节期或当地政策而调整。',
        '安全说明：以色列及周边地区的局势变化可能较快，实际出发前需再次核验航班、边境政策与安全指引。',
        '团队节奏：本线路包含连续古迹步行、山城台阶与车程转换，建议准备舒适步行鞋、防晒用品及基础常备药。',
        '灵修安排：可按团队需要加入车上分享、集体祷告、约旦河纪念、圣餐或晚间团契内容。',
      ],
    },
  },
  en: {
    meta: {
      code: 'I1',
      seriesTitle: 'I Series · Israel Holy Land Route | 8 Days 7 Nights Pilgrimage',
      title: 'I1 Route · 8 Days 7 Nights Israel Holy Land Journey',
      subtitle: 'From Galilee to Jerusalem, revisit the biblical landscape in a more ordered pilgrimage rhythm',
      tagline:
        'Haifa, Nazareth and Galilee ministry scenes | Jerusalem Passion route | Jordan River, Dead Sea, Bethlehem and Jaffa | Suitable for church and fellowship groups',
      transport: 'Air-conditioned coach service throughout with Chinese-speaking guide and tour leader accompaniment for pilgrimage-focused groups.',
      hotels: 'Mainly local 4-star standard twin rooms with breakfast and dinner included, plus selected local lunches.',
      transport_label: 'Transport Service',
      hotels_label: 'Stay & Dining',
      price_label: 'Reference Price',
      price: '2165',
      meals_label: 'Dining',
      stay_label: 'Stay Reference',
      footer_cta_title: 'Begin Your Holy Land Pilgrimage',
      cta_consult: 'Consult Expert Now',
      cta_plan: 'Get Detailed Plan',
      sticky_cta: 'Enquire Now',
      seo: {
        title: 'I1 Israel Holy Land Journey | 8 Days 7 Nights Pilgrimage Route',
        description:
          'An 8-day Israel Holy Land itinerary linking Haifa, Nazareth, Galilee, Jordan River, Dead Sea, Bethlehem, Jerusalem, and Jaffa for church and faith-based groups.',
        keywords:
          'Israel pilgrimage, Holy Land journey, Jerusalem itinerary, Galilee tour, Jordan River baptism site, Bethlehem pilgrimage',
      },
    },
    highlights: {
      title: 'Core Highlights',
      items: [
        { title: 'A complete first Holy Land route', desc: 'A strong first-time pilgrimage framework covering Galilee, Jordan Valley, Bethlehem, Jerusalem, and Jaffa.' },
        { title: 'Clear Jesus-ministry storyline', desc: 'The route follows annunciation, Galilee ministry, baptism memory, Passion, burial, and resurrection themes in a readable sequence.' },
        { title: 'Old and New Testament context together', desc: 'Carmel, Megiddo, Jericho, Qumran, Temple traditions, and Gospel locations are placed within one coherent journey.' },
        { title: 'Strong Jerusalem finale', desc: 'The second half of the trip concentrates emotional and spiritual focus around the Passion route and resurrection message.' },
      ],
    },
    summaryTable: {
      title: 'Itinerary Summary',
      columns: ['Day', 'Route', 'B', 'L', 'D', 'Stay'],
      rows: [
        { day: 'D1', route: 'Arrival Tel Aviv → Ben Gurion Airport → Hotel', breakfast: '/', lunch: '/', dinner: '/', hotel: 'Tel Aviv / Nearby' },
        { day: 'D2', route: 'Haifa → Caesarea → Megiddo → Cana → Nazareth → Tiberias', breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes', hotel: 'Tiberias' },
        { day: 'D3', route: 'Caesarea Philippi → Beatitudes → Tabgha → Capernaum → Jordan River', breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes', hotel: 'Tiberias' },
        { day: 'D4', route: 'Jordan Valley → Jericho → Qumran → Dead Sea', breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes', hotel: 'Dead Sea / Jerusalem' },
        { day: 'D5', route: 'Mount of Olives → Gethsemane → Knesset → Bethlehem', breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes', hotel: 'Jerusalem' },
        { day: 'D6', route: 'Mount Zion → Bethesda → Temple Mount area → Western Wall → Via Dolorosa', breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes', hotel: 'Jerusalem' },
        { day: 'D7', route: 'Yad Vashem → Israel Museum → Jaffa → Airport', breakfast: 'Hotel', lunch: 'Yes', dinner: '/', hotel: 'Departure' },
        { day: 'D8', route: 'Arrival home', breakfast: '/', lunch: '/', dinner: '/', hotel: 'Home' },
      ],
    },
    sections: {
      days: [
        {
          day: '01',
          title: 'Arrival in Israel | Opening the journey',
          stay: 'Tel Aviv / Nearby Hotel',
          image: '/img/remote/u-1516483638261-f4dbaf036963.webp',
          paragraphs: [
            'Arrive at Ben Gurion Airport and meet the local team before transferring to the hotel.',
            'The first day is kept gentle so the group can settle after the international flight and prepare for the pilgrimage rhythm ahead.',
          ],
          meals: { breakfast: '/', lunch: '/', dinner: '/' },
        },
        {
          day: '02',
          title: 'Haifa, Caesarea, Megiddo, Cana and Nazareth',
          stay: 'Tiberias Hotel',
          image: '/img/remote/u-1505763941729-634dfa346b1b.webp',
          paragraphs: [
            'Begin at Mount Carmel and Caesarea, then continue through Megiddo, Cana, and Nazareth to enter the biblical geography in a meaningful sequence.',
            'This day connects Old Testament memory, the first miracle at Cana, and the Annunciation setting in Nazareth.',
          ],
          meals: { breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes' },
        },
        {
          day: '03',
          title: 'Galilee core route | Confession, calling and followership',
          stay: 'Tiberias Hotel',
          image: '/img/remote/u-1542743408-218cc173cda0.webp',
          paragraphs: [
            'Visit Caesarea Philippi, the Beatitudes area, Tabgha, Peter-related sites, Capernaum, and the Jordan River memorial zone.',
            'The day is especially suited for biblical background sharing, prayer, and group reflection on discipleship.',
          ],
          meals: { breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes' },
        },
        {
          day: '04',
          title: 'Jordan Valley, Jericho, Qumran and the Dead Sea',
          stay: 'Dead Sea / Jerusalem Hotel',
          image: '/img/remote/u-1500530855697-b586d89ba3ee.webp',
          paragraphs: [
            'Travel south through the Jordan Valley into Jericho, then continue to Qumran and the Dead Sea.',
            'This day links wilderness themes, biblical memory, the Dead Sea Scrolls, and the physical landscape of the region.',
          ],
          meals: { breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes' },
        },
        {
          day: '05',
          title: 'Mount of Olives and Bethlehem',
          stay: 'Jerusalem Hotel',
          image: '/img/remote/u-1548013146-72479768bada.webp',
          paragraphs: [
            'Explore the Mount of Olives line, including Gethsemane-related locations, then continue to Bethlehem.',
            'The day helps the group connect the incarnation narrative with the final Jerusalem section of the Gospel story.',
          ],
          meals: { breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes' },
        },
        {
          day: '06',
          title: 'Jerusalem Old City | Passion route and resurrection message',
          stay: 'Jerusalem Hotel',
          image: '/img/remote/u-1528901166007-3784c7dd3653.webp',
          paragraphs: [
            'Visit Mount Zion, Bethesda, Temple traditions, the Western Wall, Via Dolorosa, and the Holy Sepulchre setting.',
            'This is the spiritual high point of the itinerary and is ideal for prayerful reflection with the group.',
          ],
          meals: { breakfast: 'Hotel', lunch: 'Yes', dinner: 'Yes' },
        },
        {
          day: '07',
          title: 'Modern Israel memory and Jaffa',
          stay: 'Departure',
          image: '/img/remote/u-1510076857177-7470076d4098.webp',
          paragraphs: [
            'Visit Yad Vashem and the Israel Museum before heading to Jaffa to close the journey with Acts-related memory and ancient port history.',
            'After the final reflection, transfer to the airport for departure.',
          ],
          meals: { breakfast: 'Hotel', lunch: 'Yes', dinner: '/' },
        },
        {
          day: '08',
          title: 'Arrival home',
          stay: 'Home',
          image: heroImage,
          paragraphs: [
            'Return home and carry the biblical landscape, reflections, and prayers back into daily life.',
          ],
          meals: { breakfast: '/', lunch: '/', dinner: '/' },
        },
      ],
    },
    notices: {
      title: 'Important Notices',
      items: [
        'Schedule Adjustment: Visit order may change due to flights, local conditions, holidays, and operational needs.',
        'Security Note: Conditions in Israel and surrounding areas can change quickly and should be rechecked before departure.',
        'Walking Intensity: Ancient sites, steps, and coach transfers are part of the route. Comfortable walking shoes are recommended.',
      ],
    },
  },
  tr: {
    unavailable: true,
  },
} as const;

const ItineraryI1: React.FC = () => {
  const { language } = useLanguage();
  const content = itineraryContent[language as keyof typeof itineraryContent] || itineraryContent.en;
  const currencySymbol = language === 'zh' ? '¥' : '$';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackImage;
  };

  if ('unavailable' in content && content.unavailable) {
    return (
      <div className="pt-40 pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center animate-in fade-in duration-700 bg-white">
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-10 border border-orange-100">
          <svg className="w-10 h-10 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-black serif mb-6 text-slate-900 uppercase tracking-tight">I1: Israel Holy Land Journey</h1>
        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Bu rotanın Turkce icerigi su anda hazirlaniyor.
            <br className="hidden md:block" />
            Detayli bilgi icin lutfen Cince veya Ingilizce seceneklerini kullanin.
          </p>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-block">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF9D00]">
              Detayli planlama icin bizimle iletisime gecin.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="px-12 py-5 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105 active:scale-95">
            ILETISIME GECIN
          </Link>
          <Link to="/tours?category=family" className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105 active:scale-95">
            DIGER ROTALAR
          </Link>
        </div>
      </div>
    );
  }

  const page = content as typeof itineraryContent.zh | typeof itineraryContent.en;

  return (
    <div className="bg-[#fdfcfb] text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      <SEO
        title={page.meta.seo.title}
        description={page.meta.seo.description}
        keywords={page.meta.seo.keywords}
      />

      <section className="relative h-[80vh] md:h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img src={heroImage} className="w-full h-full object-cover" alt="Grace Way Israel Holy Land" onError={handleImageError} />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative z-20 max-w-6xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="inline-block px-3 py-1 bg-[#FF9D00] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.3em] rounded mb-6">
            {page.meta.code} Series · Faith Path
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black serif text-white mb-6 leading-[1.06] tracking-tight">
            {page.meta.title}
          </h1>
          <p className="text-white/80 text-[1.05rem] md:text-[1.6rem] font-light mb-10 tracking-[0.02em] md:tracking-[0.08em] [text-wrap:pretty]">
            {page.meta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto px-8 md:px-10 py-4 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-[0.16em] md:tracking-widest text-[12px] md:text-sm shadow-2xl">
              {page.meta.cta_consult}
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 md:px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-[0.16em] md:tracking-widest text-[12px] md:text-sm">
              {page.meta.cta_plan}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-black serif text-slate-900 leading-tight border-l-4 md:border-l-8 border-[#FF9D00] pl-5 md:pl-8 mb-4">
              {page.meta.seriesTitle}
            </h2>
            <p className="text-sm md:text-lg text-slate-500 font-medium italic mb-6 pl-5 md:pl-8">
              {page.meta.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col gap-3 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">🚌</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{page.meta.transport_label}</span>
              </div>
              <p className="text-sm font-bold text-slate-800 leading-relaxed">{page.meta.transport}</p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col gap-3 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏨</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{page.meta.hotels_label}</span>
              </div>
              <p className="text-sm font-bold text-slate-800 leading-relaxed">{page.meta.hotels}</p>
            </div>

            <div className="p-8 bg-orange-50 border border-orange-100 rounded-[2rem] flex flex-col gap-3 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{page.meta.price_label}</span>
              </div>
              <p className="text-3xl font-black text-[#FF9D00] tracking-tight">{currencySymbol}{page.meta.price}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black serif italic">{page.highlights.title}</h2>
            <div className="w-16 h-1 bg-[#FF9D00] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {page.highlights.items.map((item, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-sm flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF9D00]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#FF9D00] font-black">{i < 9 ? `0${i + 1}` : i + 1}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black serif uppercase tracking-widest mb-2">{page.summaryTable.title}</h2>
        </div>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <table className="w-full text-left border-separate border-spacing-0 min-w-[800px] md:min-w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <thead>
              <tr className="bg-slate-50">
                {page.summaryTable.columns.map((col, i) => {
                  const isMealCol = ['早', '中', '晚', 'B', 'L', 'D', 'K', 'Ö', 'A'].includes(col);
                  return (
                    <th key={i} className={`px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 ${isMealCol ? 'text-center' : ''}`}>
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {page.summaryTable.rows.map((row, i) => (
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

      <section className="py-20 md:py-32 space-y-24 md:space-y-40">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="text-3xl md:text-5xl font-black serif text-center italic">
            {language === 'zh' ? '行程安排详解' : 'Detailed Itinerary'}
          </h2>
          <div className="w-16 h-1 bg-[#FF9D00] mx-auto mt-4"></div>
        </div>

        {page.sections.days.map((item, i) => (
          <div key={i} className={`max-w-7xl mx-auto px-6 flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-20 items-start`}>
            <div className="w-full lg:w-1/2 sticky top-24">
              <div className="w-full aspect-[16/9] bg-slate-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg relative group">
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-slate-900 shadow-xl uppercase z-10 border border-slate-100">
                  DAY {item.day}
                </div>
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} onError={handleImageError} />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <h3 className="text-2xl md:text-4xl font-black serif text-slate-900 leading-tight">{item.title}</h3>
              <div className="space-y-4">
                {item.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-base md:text-lg text-slate-500 font-light leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="p-6 md:p-10 bg-[#fdfaf6] rounded-[2rem] border border-orange-100/50 flex flex-col sm:flex-row gap-6 md:gap-12 mt-8">
                <div>
                  <p className="text-[9px] font-black text-orange-300 uppercase tracking-widest mb-1">{page.meta.meals_label}</p>
                  <p className="text-slate-800 font-bold text-xs">
                    {language === 'zh' ? '早' : 'B'}：{item.meals.breakfast} / {language === 'zh' ? '午' : 'L'}：{item.meals.lunch} / {language === 'zh' ? '晚' : 'D'}：{item.meals.dinner}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-orange-300 uppercase tracking-widest mb-1">{page.meta.stay_label}</p>
                  <p className="text-slate-800 font-bold text-xs">{item.stay}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-20 md:py-32 bg-slate-50 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-sm border border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black serif uppercase tracking-widest inline-block border-b-4 border-[#FF9D00] pb-2">
              {page.notices.title}
            </h2>
          </div>
          <div className="space-y-10 max-w-4xl mx-auto">
            {page.notices.items.map((item, i) => {
              const delimiter = item.includes('：') ? '：' : ': ';
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 text-white relative text-center px-6">
        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-6xl font-black serif italic">{page.meta.footer_cta_title}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-xl">
              {page.meta.cta_consult}
            </Link>
            <Link to="/tours?category=family" className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-sm">
              {language === 'zh' ? '返回信仰之旅' : 'Back to Faith Journeys'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItineraryI1;
