import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { BOOKING_URLS } from '../lib/bookingLinks';

// 配图：逐站真实地标。多数为 Wikimedia Commons 实景照片(CC BY-SA，页脚已署名)；
// 金色缆车无自由授权图，采用 goldgondola.rs 官方图(本地托管)。最终成行将替换为本社实拍。
// (images now self-hosted under /img/remote/ — sourced from Wikimedia Commons, CC BY-SA; footer credits preserved)

const IMG = {
  belgradeStSava: '/img/remote/wiki-church-of-saint-sava-belgrade-serbia-bc2799.webp',
  sarajevo: '/img/remote/wiki-sarajevo-view-from-ba-ar-ija-31ff38.webp',
  mostar: '/img/remote/wiki-mostar-stari-most-bw-2024-10-01-13-00-05-9d7a12.webp',
  kotorBay: '/img/remote/wiki-kotor-and-boka-kotorska-view-from-city-w-d4cb72.webp',
  svetiStefan: '/img/remote/wiki-sveti-stefan-06-337b79.webp',
  lovcen: '/img/remote/wiki-jezerski-vrh-njegos-mausoleum-2-d3c077.webp',
  taraBridge: '/img/remote/wiki-ur-evi-a-tara-bridge-by-pudelek-0a1d80.webp',
  uvac: '/img/remote/wiki-curving-meanders-in-special-nature-reser-8c5dd4.webp',
  goldGondola: '/img/zlatibor-gold-gondola.jpg', // goldgondola.rs 官方图，本地托管
  petrovaradin: '/img/remote/wiki-petrovaradin-fortress-2014-ae1d27.webp',
  zemun: '/img/remote/wiki-zemun-panorama-from-gardo-tower-a18154.webp',
  kalemegdan: '/img/remote/wiki-kalemegdan-a04-1b17bf.webp',
};

const heroImage = '/img/remote/wiki-kotor-and-boka-kotorska-view-from-city-w-d4cb72.webp';
const fallbackImage = IMG.kotorBay;

const itineraryContent = {
  zh: {
    meta: {
      code: 'B1',
      seriesTitle: 'B 系列 · 巴尔干三国精品私家团｜塞尔维亚 · 黑山 · 波黑 12天11晚',
      title: 'B1 线路 · 塞尔维亚 + 黑山 + 波黑 12天11晚精品私家团',
      subtitle: '贝尔格莱德进出，一条线串起三国的老城、海湾、峡谷与雪山，慢下来深度体验巴尔干',
      tagline:
        '贝尔格莱德双城进出｜萨拉热窝与莫斯塔尔老城｜科托尔湾与布德瓦海滨｜洛夫琴雪山与塔拉大桥｜乌瓦茨秃鹫峡湾｜兹拉蒂博尔与诺维萨德',
      transport: '全程空调旅游车，中文导游与领队陪同；私家小团形式，行程节奏与停留可按客人需求灵活定制。',
      hotels: '全程精选当地舒适型酒店，含每日酒店早餐；布德瓦海滨连住三晚，减少频繁换店的奔波。',
      transport_label: '交通服务',
      hotels_label: '住宿与早餐',
      price_label: '参考团费',
      price: '询价',
      meals_label: '餐饮安排',
      stay_label: '入住参考',
      footer_cta_title: '开启您的巴尔干三国深度之旅',
      cta_consult: '立即咨询顾问',
      cta_plan: '获取详细方案',
      sticky_cta: '即刻定制',
      seo: {
        title: '巴尔干三国 12天11晚精品私家团 | 塞尔维亚·黑山·波黑深度之旅',
        description:
          '恩途 B1 线路：塞尔维亚、黑山、波黑 12 天 11 晚精品私家团，贝尔格莱德进出，串联萨拉热窝、莫斯塔尔古桥、科托尔湾、布德瓦海滨、塔拉大桥、乌瓦茨与诺维萨德。',
        keywords:
          '巴尔干旅游, 塞尔维亚黑山波黑, 贝尔格莱德, 萨拉热窝, 莫斯塔尔古桥, 科托尔, 布德瓦, 巴尔干私家团, 黑山深度游',
      },
    },
    highlights: {
      title: '行程核心亮点',
      items: [
        {
          title: '一线串起三国',
          desc: '贝尔格莱德进出，顺势衔接波黑、黑山与塞尔维亚西部，少走回头路，12 天看遍巴尔干腹地的城市、海岸与高山。',
        },
        {
          title: '两座灵魂老城',
          desc: '萨拉热窝的东西方交汇与莫斯塔尔的古桥老城，让你读懂巴尔干层层叠叠的历史与多元信仰共处的底色。',
        },
        {
          title: '亚得里亚海湾与海滨',
          desc: '科托尔湾观景、科托尔与布德瓦老城、圣斯特凡岛，山海相拥的黑山海岸线，是地中海少有的清静一隅。',
        },
        {
          title: '雪山 · 峡谷 · 大桥',
          desc: '洛夫琴国家公园、莫拉查峡谷、塔拉大桥与黑湖，集中呈现巴尔干最具张力的自然地貌。',
        },
        {
          title: '乌瓦茨秘境',
          desc: '乘船穿行乌瓦茨蜿蜒的河曲峡湾，探访欧洲珍稀的白头秃鹫保护区，抵达少有旅行团到达的巴尔干腹地。',
        },
        {
          title: '私家慢节奏',
          desc: '布德瓦海滨连住三晚、整体不赶路；木头村、沙尔干八字铁路等可选体验，可按兴趣灵活加入。',
        },
      ],
    },
    summaryTable: {
      title: '行程简表',
      columns: ['天数', '行程安排', '早', '中', '晚', '住宿参考'],
      rows: [
        { day: 'D1', route: '抵达贝尔格莱德 → 圣萨瓦教堂 → 共和国广场 → 米哈伊洛大公街 → 卡莱梅格丹城堡 → 多瑙河与萨瓦河交汇', breakfast: '/', lunch: '/', dinner: '/', hotel: '贝尔格莱德' },
        { day: 'D2', route: '贝尔格莱德 → 萨拉热窝（巴什察尔希亚老城 · 拉丁桥 · 黄堡观景台）', breakfast: '含', lunch: '—', dinner: '—', hotel: '萨拉热窝' },
        { day: 'D3', route: '萨拉热窝 → 莫斯塔尔（古桥 · 老城 · 跳桥表演 · 内雷特瓦河谷）', breakfast: '含', lunch: '—', dinner: '—', hotel: '莫斯塔尔' },
        { day: 'D4', route: '莫斯塔尔 → 科托尔（湾区观景台 · 科托尔古城）→ 布德瓦', breakfast: '含', lunch: '—', dinner: '—', hotel: '布德瓦' },
        { day: 'D5', route: '布德瓦海滨（老城 · 圣斯特凡岛 · 海滨步道）', breakfast: '含', lunch: '—', dinner: '—', hotel: '布德瓦' },
        { day: 'D6', route: '洛夫琴国家公园（科托尔缆车 · 涅戈什陵墓）', breakfast: '含', lunch: '—', dinner: '—', hotel: '布德瓦' },
        { day: 'D7', route: '布德瓦 → 扎布利亚克（莫拉查峡谷 · 塔拉大桥 · 黑湖）', breakfast: '含', lunch: '—', dinner: '—', hotel: '扎布利亚克' },
        { day: 'D8', route: '扎布利亚克 → 乌瓦茨（游船 · 白头秃鹫保护区 · 观景台）→ 新瓦罗什', breakfast: '含', lunch: '—', dinner: '—', hotel: '新瓦罗什' },
        { day: 'D9', route: '新瓦罗什 → 兹拉蒂博尔（金色缆车；可选木头村 · 八字铁路）', breakfast: '含', lunch: '—', dinner: '—', hotel: '兹拉蒂博尔' },
        { day: 'D10', route: '兹拉蒂博尔 → 诺维萨德（红酒小镇 · 彼得罗瓦拉丁要塞 · 老城）', breakfast: '含', lunch: '—', dinner: '—', hotel: '诺维萨德' },
        { day: 'D11', route: '诺维萨德 → 贝尔格莱德（泽蒙古镇 · 加尔多什塔 · 多瑙河步道 · 自由活动）', breakfast: '含', lunch: '—', dinner: '—', hotel: '贝尔格莱德' },
        { day: 'D12', route: '贝尔格莱德送机 → 返程', breakfast: '含', lunch: '/', dinner: '/', hotel: '温暖的家' },
      ],
    },
    sections: {
      days: [
        {
          day: '01',
          title: '抵达贝尔格莱德｜白城初印象',
          stay: '贝尔格莱德酒店',
          image: IMG.belgradeStSava,
          paragraphs: [
            '抵达贝尔格莱德，由中文导游接机。先前往世界上最大的东正教教堂之一——圣萨瓦教堂，在恢弘的穹顶下感受塞尔维亚的信仰与国族记忆，随后漫步共和国广场与米哈伊洛大公街，触摸这座“白城”的日常脉搏。',
            '傍晚登上卡莱梅格丹城堡，在多瑙河与萨瓦河交汇处看落日，两河相拥、舟楫往来，为整趟巴尔干之旅写下从容的序章。',
          ],
          meals: { breakfast: '/', lunch: '/', dinner: '/' },
        },
        {
          day: '02',
          title: '贝尔格莱德 → 萨拉热窝｜东西方交汇之城',
          stay: '萨拉热窝酒店',
          image: IMG.sarajevo,
          paragraphs: [
            '上午驱车前往波黑首都萨拉热窝（车程约 4.5 小时）。这座城市在一条街上就能完成从清真寺到东正教堂、再到天主教堂与犹太会堂的步行，被称为“欧洲的耶路撒冷”。',
            '深入巴什察尔希亚老城的铜匠街与古老市集，途经见证一战导火索的拉丁桥，并在《瓦尔特保卫萨拉热窝》的取景地重温那段熟悉的旋律；登上黄堡观景台，俯瞰被群山环抱的红顶老城。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '03',
          title: '萨拉热窝 → 莫斯塔尔｜古桥与跳桥少年',
          stay: '莫斯塔尔酒店',
          image: IMG.mostar,
          paragraphs: [
            '前往波黑南部的莫斯塔尔（车程约 2.5 小时），这里以横跨内雷特瓦河的莫斯塔尔古桥闻名于世——奥斯曼时代的石拱桥在战火中倒塌后又被精心重建，是巴尔干韧性与和解的象征。',
            '在鹅卵石铺就的老城里穿行，欣赏勇敢的跳桥少年从古桥一跃入碧绿的河水，再沿内雷特瓦河谷感受群山与翡翠色河流交织的独特风景。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '04',
          title: '莫斯塔尔 → 科托尔 → 布德瓦｜驶入亚得里亚海湾',
          stay: '布德瓦酒店',
          image: IMG.kotorBay,
          paragraphs: [
            '一路向南进入黑山，抵达被群山环抱的科托尔湾。在湾区观景台俯瞰这条深入内陆、形似峡湾的海湾，蜿蜒的海岸线与依山而建的村落构成地中海少见的画面。',
            '走进世界文化遗产科托尔古城，在中世纪石巷与城墙间寻访教堂与广场，随后前往黑山最迷人的海滨度假地布德瓦入住，开启连住三晚的海滨慢时光。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '05',
          title: '布德瓦海滨｜老城与圣斯特凡岛',
          stay: '布德瓦酒店',
          image: IMG.svetiStefan,
          paragraphs: [
            '今日留给海岸线。上午漫步布德瓦老城，威尼斯风格的城墙、教堂与窄巷紧贴海面，是亚得里亚海岸上保存完好的古城之一。',
            '远眺如珍珠般卧在海中的圣斯特凡岛——昔日渔村、今日传奇度假地，再沿海滨步道散步、看海，享受一段完全属于自己的悠闲时光。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '06',
          title: '洛夫琴国家公园｜黑山之巅的诗与远方',
          stay: '布德瓦酒店',
          image: IMG.lovcen,
          paragraphs: [
            '乘坐科托尔缆车扶摇直上，在空中俯瞰科托尔湾层层退去的蓝，是黑山最具冲击力的视角之一，随后进入黑山的精神高地——洛夫琴国家公园。',
            '登临山顶的涅戈什陵墓，凭吊这位黑山的诗人与统治者，在群峰之巅远望，理解“黑山”之名从何而来。傍晚返回布德瓦海滨。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '07',
          title: '布德瓦 → 扎布利亚克｜峡谷与高山黑湖',
          stay: '扎布利亚克酒店',
          image: IMG.taraBridge,
          paragraphs: [
            '告别海岸，向北深入黑山腹地。途经壮丽的莫拉查峡谷，再抵达横跨塔拉河谷的塔拉大桥——曾是欧洲最高的公路混凝土拱桥，桥下是欧洲最深的峡谷之一。',
            '抵达杜米托尔山区的扎布利亚克，前往静卧群山与黑松林间的黑湖，在清澈的湖水与雪峰倒影前散步，感受巴尔干高山截然不同的气息。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '08',
          title: '扎布利亚克 → 乌瓦茨 → 新瓦罗什｜秃鹫翱翔的河曲秘境',
          stay: '新瓦罗什酒店',
          image: IMG.uvac,
          paragraphs: [
            '进入塞尔维亚西南，前往少有人至的乌瓦茨特别自然保护区。乘游船在层层叠叠的河曲峡湾间穿行，两岸峭壁如屏，是巴尔干最摄人心魄的地貌之一。',
            '这里是欧洲珍稀的白头秃鹫栖息地，运气好时可见它们在峡谷上空盘旋；登上乌瓦茨观景台俯瞰著名的“河曲蜿蜒”全景后，前往新瓦罗什入住。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '09',
          title: '新瓦罗什 → 兹拉蒂博尔｜金色缆车与怀旧时光',
          stay: '兹拉蒂博尔酒店',
          image: IMG.goldGondola,
          paragraphs: [
            '前往塞尔维亚著名的山地度假胜地兹拉蒂博尔，乘坐世界最长的全景观光缆车之一——“金色缆车”，在空中览过高原牧场与松林风光，在清新的空气里放慢脚步。',
            '可选前往著名导演库斯图里卡打造的“木头村”，或体验如时光倒流般的沙尔干八字铁路，在蜿蜒的窄轨小火车上邂逅巴尔干田园。（可选项目可在定制时一并安排）',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '10',
          title: '兹拉蒂博尔 → 诺维萨德｜要塞与多瑙河畔',
          stay: '诺维萨德酒店',
          image: IMG.petrovaradin,
          paragraphs: [
            '北上前往塞尔维亚第二大城诺维萨德，途中可探访塞尔维亚的红酒小镇，品味当地风土。',
            '登临多瑙河畔的彼得罗瓦拉丁要塞，在“多瑙河上的直布罗陀”俯瞰河湾与对岸老城，再漫步诺维萨德老城的彩色街巷与广场，感受这座文艺之城的从容。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '11',
          title: '诺维萨德 → 贝尔格莱德｜泽蒙古镇与多瑙河漫步',
          stay: '贝尔格莱德酒店',
          image: IMG.zemun,
          paragraphs: [
            '返回贝尔格莱德，前往多瑙河畔的泽蒙古镇——这片曾属于奥匈帝国的街区保留着中欧的优雅气质。登上加尔多什塔（千禧塔），俯瞰多瑙河与红顶老城。',
            '沿多瑙河步道散步，看渔船与水上餐厅，随后留出自由活动时间，购物或在河畔咖啡馆小坐，为旅程收尾。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '12',
          title: '贝尔格莱德送机｜带着巴尔干的故事回家',
          stay: '返回温暖的家',
          image: IMG.kalemegdan,
          paragraphs: [
            '根据航班时间安排送机，结束这段愉快的巴尔干三国之旅。',
            '从贝尔格莱德的两河交汇，到莫斯塔尔的古桥、科托尔的海湾与杜米托尔的雪山——愿这一路的山海与老城，成为你心里关于巴尔干的长久记忆。',
          ],
          meals: { breakfast: '含', lunch: '/', dinner: '/' },
        },
      ],
    },
    notices: {
      title: '重要提示与备注',
      items: [
        '行程说明：本线路为私家定制团，以上天数、顺序与停留均可按航班、人数与兴趣灵活调整，最终以确认行程为准。',
        '餐饮安排：含每日酒店早餐；午晚餐为方便客人灵活体验当地餐饮，默认不固定打包，可按需求加入正餐安排。',
        '边境与交通：行程跨塞尔维亚、波黑、黑山三国，含多次陆路过境，请备齐有效证件；山区与峡谷路段以安全为先，时间留有弹性。',
        '体力与装备：含老城石板路、城堡台阶、缆车与游船等环节，建议舒适步行鞋、防晒与基础常备药；山区与海滨温差较大，注意备衣。',
        '可选体验：兹拉蒂博尔的木头村、沙尔干八字铁路等为可选项目，可在定制行程时一并安排。',
      ],
    },
  },
  en: {
    unavailable: true,
  },
  tr: {
    unavailable: true,
  },
} as const;

const ItineraryB1: React.FC = () => {
  const { language, t } = useLanguage();
  const content = itineraryContent[language as keyof typeof itineraryContent] || itineraryContent.zh;

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
        <h1 className="text-3xl md:text-4xl font-black serif mb-6 text-slate-900 uppercase tracking-tight">B1: Balkans 3-Country Private Tour</h1>
        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            This itinerary is currently detailed in Chinese.
            <br className="hidden md:block" />
            Please switch to 中文, or contact us for a tailored plan.
          </p>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-block">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF9D00]">
              Serbia · Montenegro · Bosnia · 12 Days
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="px-12 py-5 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105 active:scale-95">
            CONTACT US
          </Link>
          <Link to="/tours" className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105 active:scale-95">
            OTHER ROUTES
          </Link>
        </div>
      </div>
    );
  }

  const page = content as typeof itineraryContent.zh;

  return (
    <div className="bg-[#fdfcfb] text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      <SEO
        title={page.meta.seo.title}
        description={page.meta.seo.description}
        keywords={page.meta.seo.keywords}
      />

      <section className="relative h-[80vh] md:h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img src={heroImage} className="w-full h-full object-cover" alt="Grace Way Balkans - Kotor Bay" onError={handleImageError} />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative z-20 max-w-6xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="inline-block px-3 py-1 bg-[#FF9D00] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.3em] rounded mb-6">
            {page.meta.code} 系列 · 巴尔干三国
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black serif text-white mb-6 leading-[1.06] tracking-tight">
            {page.meta.title}
          </h1>
          <p className="text-white/80 text-[1.05rem] md:text-[1.6rem] font-light mb-10 tracking-[0.02em] md:tracking-[0.08em] [text-wrap:pretty]">
            {page.meta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={BOOKING_URLS.B1} className="w-full sm:w-auto px-8 md:px-10 py-4 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-[0.16em] md:tracking-widest text-[12px] md:text-sm shadow-2xl">
              {t.nav.bookOnline}
            </a>
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

            <Link to="/contact" className="p-8 bg-orange-50 border border-orange-100 rounded-[2rem] flex flex-col gap-3 shadow-sm transition-transform hover:-translate-y-1 group">
              <div className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{page.meta.price_label}</span>
              </div>
              <p className="text-3xl font-black text-[#FF9D00] tracking-tight group-hover:underline">{page.meta.price}</p>
            </Link>
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
                  const isMealCol = ['早', '中', '晚'].includes(col);
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
          <h2 className="text-3xl md:text-5xl font-black serif text-center italic">行程安排详解</h2>
          <div className="w-16 h-1 bg-[#FF9D00] mx-auto mt-4"></div>
        </div>

        {page.sections.days.map((item, i) => (
          <div key={i} className={`max-w-7xl mx-auto px-6 flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-20 items-start`}>
            <div className="w-full lg:w-1/2 sticky top-24">
              <div className="w-full aspect-[16/9] bg-slate-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg relative group">
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-slate-900 shadow-xl uppercase z-10 border border-slate-100">
                  DAY {item.day}
                </div>
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} loading="lazy" onError={handleImageError} />
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
                    早：{item.meals.breakfast} / 午：{item.meals.lunch} / 晚：{item.meals.dinner}
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
            <a href={BOOKING_URLS.B1} className="w-full sm:w-auto px-12 py-5 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-xl">
              {t.nav.bookOnline}
            </a>
            <Link to="/tours?category=balkan" className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-sm">
              返回巴尔干线路
            </Link>
          </div>
          <div className="pt-8 mt-2 border-t border-white/10 max-w-md mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">巴尔干业务对接人</p>
            <a href="tel:+381665423472" className="inline-block text-2xl md:text-3xl font-black text-[#FF9D00] tracking-tight hover:text-white transition-colors">+381 66 542 3472</a>
            <p className="text-sm text-white/60 font-medium mt-2">微信同号（WeChat：+381 66 542 3472）</p>
          </div>
        </div>
      </section>

      <div className="bg-white py-8 px-6 border-t border-slate-100">
        <p className="max-w-5xl mx-auto text-[11px] leading-relaxed text-slate-400 text-center">
          图片版权：本页风光照片多来自 Wikimedia Commons，依 CC BY-SA 许可使用 —— 圣萨瓦教堂 © Petar Milošević；萨拉热窝老城、科托尔湾、塔拉大桥 © Pudelek (Marcin Szala)；莫斯塔尔古桥 © Berthold Werner；圣斯特凡岛 © Marcin Konsek；洛夫琴 © Ingo Mehling；乌瓦茨 © Srdjan Marincic；兹拉蒂博尔（如使用）© Dani. zuni；彼得罗瓦拉丁要塞 © Choinowski；泽蒙 © Petar Milošević；卡莱梅格丹 © Mickey Mystique。金色缆车图片来自 goldgondola.rs 官方网站。最终成行将替换为本社实拍照片。
        </p>
      </div>
    </div>
  );
};

export default ItineraryB1;
