import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { BOOKING_URLS } from '../lib/bookingLinks';
import CardImage from '../components/CardImage';
import { itineraryPrice } from '../lib/pricing';

// Balkan landmark photos self-hosted under /img/remote/ (sourced from Wikimedia Commons,
// CC BY-SA — attribution preserved in the footer credits below).

const IMG = {
  belgradeStSava:  '/img/remote/wiki-church-of-saint-sava-belgrade-serbia-bc2799.webp',
  sarajevo:        '/img/remote/wiki-sebilj-at-ba-ar-ija-55019540284-b1aa95.webp',
  mostar:          '/img/remote/wiki-mostar-stari-most-bw-2024-10-01-13-00-05-9d7a12.webp',
  blagaj:          '/img/remote/wiki-blagaj-tekke-the-spring-of-the-buna-rive-a774b5.webp',
  kotorBay:        '/img/remote/wiki-kotor-and-boka-kotorska-view-from-city-w-d4cb72.webp',
  budva:           '/img/remote/wiki-view-of-budva-old-town-6dfaab.webp',
  durmitor:        '/img/remote/wiki-durmitor-crno-jezero-2daf4c.webp',
  taraBridge:      '/img/remote/wiki-ur-evi-a-tara-bridge-by-pudelek-0a1d80.webp',
  uvac:            '/img/remote/wiki-curving-meanders-in-special-nature-reser-8c5dd4.webp',
  goldGondola:     '/img/zlatibor-gold-gondola.jpg',
  sarganRail:      '/img/remote/wiki-sargan-eight-mokra-gora-station-1-b8a8d8.webp',
  zemun:           '/img/remote/wiki-zemun-panorama-from-gardo-tower-a18154.webp',
};

const heroImage = '/img/remote/wiki-ur-evi-a-tara-bridge-by-pudelek-0a1d80.webp';
const fallbackImage = IMG.kotorBay;

const zh = {
    ui: {
      heroAlt: '塔拉大桥 — 黑山巴尔干之旅',
      seriesSuffix: '系列 · 巴尔干三国',
      dayByDayTitle: '行程安排详解',
      mealNames: ['早', '午', '晚'],
      mealSep: '：',
      otherRouteCta: '查看 B1 · 12天线路',
      contactLabel: '巴尔干业务对接人',
      wechatNote: '微信同号（WeChat：+381 66 542 3472）',
      credits:
        '图片版权：本页风光照片多来自 Wikimedia Commons，依 CC BY-SA 许可使用 —— 圣萨瓦教堂 © Petar Milošević；萨拉热窝 Sebilj 广场 © Filip Maljković；莫斯塔尔古桥 © Berthold Werner；布拉加伊修道院 © Diego Delso；科托尔湾 © Diego Delso；杜米托尔黑湖 © Mercy；塔拉大桥 © Pudelek (Marcin Szala)；乌瓦茨 © Srdjan Marincic；沙尔干八字铁路（Mokra Gora）© Whitepixels（CC0）；泽蒙 © Petar Milošević。金色缆车图片来自 goldgondola.rs 官方网站。最终成行将替换为本社实拍照片。',
    },
    meta: {
      code: 'B2',
      seriesTitle: 'B 系列 · 巴尔干三国精品团｜塞尔维亚 · 黑山 · 波黑 10天9晚',
      title: 'B2 线路 · 塞尔维亚 + 黑山 + 波黑 10天9晚精品团',
      subtitle: '贝尔格莱德进出，从萨拉热窝老城到黑山峡谷，从乌瓦茨秘境到兹拉蒂博尔山间',
      tagline:
        '贝尔格莱德进出｜萨拉热窝与莫斯塔尔古桥｜科托尔湾落日飞车｜杜米托尔国家公园黑湖｜乌瓦茨蛇形峡湾｜兹拉蒂博尔金色缆车｜八字小火车与木头城',
      transport: '全程空调旅游车，中文导游与领队全程陪同；私家小团形式，行程节奏可按需灵活调整。',
      hotels: '精选当地四星舒适型酒店，含每日早餐；部分山区段入住特色小木屋，体验地道巴尔干山居风情。',
      transport_label: '交通服务',
      hotels_label: '住宿与早餐',
      price_label: '参考团费',
      meals_label: '餐饮安排',
      stay_label: '入住参考',
      footer_cta_title: '开启你的巴尔干10天之旅',
      cta_consult: '立即咨询顾问',
      cta_plan: '获取详细方案',
      sticky_cta: '即刻定制',
      seo: {
        title: '巴尔干三国10天9晚精品团 | 塞尔维亚·黑山·波黑 | 乌瓦茨·杜米托尔·兹拉蒂博尔',
        description:
          '恩途 B2 线路：塞尔维亚、黑山、波黑 10 天 9 晚，贝尔格莱德进出，串联萨拉热窝、莫斯塔尔古桥、科托尔湾、杜米托尔黑湖、乌瓦茨蛇形峡谷、兹拉蒂博尔金色缆车与八字小火车。',
        keywords:
          '巴尔干10天旅游, 塞尔维亚黑山波黑10天, 乌瓦茨峡谷游船, 杜米托尔国家公园, 兹拉蒂博尔金色缆车, 莫斯塔尔古桥, 八字小火车',
      },
    },
    highlights: {
      title: '行程核心亮点',
      items: [
        {
          title: '波黑双城精华',
          desc: '萨拉热窝——东西方文明在此交汇，奥斯曼街区与奥匈帝国建筑并肩而立；莫斯塔尔——跨越内雷特瓦河的古桥（世界遗产）与布拉加伊修道院，是巴尔干最让人驻足的地方。',
        },
        {
          title: '黑山海岸黄金线',
          desc: '乘船出海探蓝洞，登科托尔城墙俯瞰湾景，黄昏乘科托尔缆车赶一场“落日飞车”，看亚得里亚海从橙红到深蓝；随后入住巴尔干最美的海滨布德瓦。',
        },
        {
          title: '杜米托尔国家公园',
          desc: '黑湖倒映原始针叶林，塔拉大桥飞架欧洲最深峡谷之上，徒步与深呼吸是这里最好的行程安排，海拔 1500 米的清冽让人忘了时间。',
        },
        {
          title: '乌瓦茨蛇形秘境',
          desc: '乘船穿行"蛇形峡谷"，在弯道叠套弯道的河曲中寻找白头秃鹫的轨迹，冰洞与观景台交替出现，这是巴尔干藏得最深的自然奇迹之一。',
        },
        {
          title: '兹拉蒂博尔金色缆车',
          desc: '搭乘号称全球最长的山地缆车缓缓登顶，群山层叠、峡谷静默，在山顶吃一顿地道的塞尔维亚烤肉，是旅程里最闲适的半天。',
        },
        {
          title: '八字小火车与木头城',
          desc: '沙尔干八字铁路蜿蜒穿行山间，终点是库斯滕多夫（木头城），电影《生命是个奇迹》的拍摄地，导演库斯图里卡亲手搭起的木质小镇至今仍有人居住。',
        },
      ],
    },
    summaryTable: {
      title: '行程简表',
      columns: ['天数', '行程安排', '早', '中', '晚', '住宿参考'],
      rows: [
        { day: 'D1', route: '出发城市 → 贝尔格莱德（BEG）抵达，市区自由活动', breakfast: '/', lunch: '/', dinner: '/', hotel: '贝尔格莱德 ★★★★' },
        { day: 'D2', route: '贝尔格莱德 → 萨拉热窝（巴什察尔希亚老城 · 拉丁桥 · 黄堡观景台）', breakfast: '含', lunch: '—', dinner: '—', hotel: '萨拉热窝 ★★★★' },
        { day: 'D3', route: '萨拉热窝 → 莫斯塔尔（古桥 · 老城 · 布拉加伊修道院）', breakfast: '含', lunch: '—', dinner: '—', hotel: '莫斯塔尔 ★★★★' },
        { day: 'D4', route: '莫斯塔尔 → 科托尔（蓝洞出海 · 古城 · 科托尔缆车“落日飞车”）→ 布德瓦', breakfast: '含', lunch: '—', dinner: '—', hotel: '布德瓦 ★★★★' },
        { day: 'D5', route: '布德瓦 → 扎布利亚克（杜米托尔国家公园 · 黑湖 · 塔拉大桥）', breakfast: '含', lunch: '—', dinner: '—', hotel: '扎布利亚克（小木屋）' },
        { day: 'D6', route: '塔拉大桥 → 乌瓦茨（游船5h · 蛇形峡谷 · 冰洞 · 观景台）', breakfast: '含', lunch: '—', dinner: '—', hotel: '布尔多（小木屋）' },
        { day: 'D7', route: '布尔多 → 兹拉蒂博尔（金色缆车 · 山顶观景）', breakfast: '含', lunch: '—', dinner: '—', hotel: '兹拉蒂博尔 ★★★★' },
        { day: 'D8', route: '兹拉蒂博尔 → 莫克拉戈拉（八字小火车 · 木头城 · 库斯滕多夫）→ 贝尔格莱德', breakfast: '含', lunch: '—', dinner: '—', hotel: '贝尔格莱德 ★★★★' },
        { day: 'D9', route: '贝尔格莱德市区（国家博物馆 · 圣萨瓦大教堂 · 泽蒙小镇 · 多瑙河步道）', breakfast: '含', lunch: '—', dinner: '—', hotel: '—（候机）' },
        { day: 'D10', route: '贝尔格莱德 → 出发城市（凌晨航班）', breakfast: '/', lunch: '/', dinner: '/', hotel: '温暖的家' },
      ],
    },
    sections: {
      days: [
        {
          day: '01',
          title: '抵达贝尔格莱德｜白城第一印象',
          stay: '贝尔格莱德四星酒店',
          image: IMG.belgradeStSava,
          paragraphs: [
            '抵达贝尔格莱德，中文司机接机，办理入住。稍作休整后可前往共和国广场与米哈伊洛大公街漫步，感受这座"白城"的市井气息，或远眺圣萨瓦大教堂的穹顶在暮色中发光。',
            '今晚的行程不作安排，留给你按自己的节奏开始这趟巴尔干之旅。',
          ],
          meals: { breakfast: '/', lunch: '/', dinner: '/' },
        },
        {
          day: '02',
          title: '贝尔格莱德 → 萨拉热窝｜东西方交汇的城市',
          stay: '萨拉热窝四星酒店',
          image: IMG.sarajevo,
          paragraphs: [
            '约5小时车程，下午抵达波黑首都萨拉热窝。走进巴什察尔希亚老城，奥斯曼时代的铜匠街与铜制手工艺品一如百年前，旁边却矗立着奥匈帝国时代的巴洛克建筑，两种文明在同一条街上安然共处。',
            '漫步至拉丁桥，这座古桥见证了改变世界历史的一刻；傍晚登上黄堡观景台，俯瞰整座城市夹在山谷里的夜景。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '03',
          title: '萨拉热窝 → 莫斯塔尔｜古桥与修道院',
          stay: '莫斯塔尔四星酒店',
          image: IMG.mostar,
          paragraphs: [
            '约3小时车程，抵达莫斯塔尔。以内雷特瓦河为界，东西两岸分属两种信仰，而莫斯塔尔古桥（世界遗产）横跨其上，成为和解的象征。老城的石板路、叫卖声与咖啡香让时间慢下来。',
            '下午驱车约30分钟，前往布拉加伊——一座依山傍水的苏菲派修道院，建于悬崖之下、清泉之旁，是内雷特瓦河谷最宁静的一隅。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '04',
          title: '科托尔湾 · 蓝洞 · 布德瓦｜黑山海岸黄金段',
          stay: '布德瓦四星酒店',
          image: IMG.kotorBay,
          paragraphs: [
            '乘船出海约3小时，探访科托尔湾的蓝洞——阳光从水面折射进洞，一切都在蓝光里悬浮。上岸后进入科托尔古城，沿城墙拾级而上，湾区全景在脚下铺开。',
            '傍晚乘科托尔缆车升上山顶，赶一场“落日飞车”：橙红色的落日从亚得里亚海面缓缓下沉，整片湾区在脚下由金转蓝，或许是整趟旅程里最让人沉默的时刻。随后前往布德瓦入住。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '05',
          title: '杜米托尔国家公园｜黑山的山与峡谷',
          stay: '扎布利亚克山间小木屋',
          image: IMG.durmitor,
          paragraphs: [
            '约2.5小时车程，穿越黑山内陆，抵达杜米托尔国家公园。黑湖是园内最具代表性的景点，湖水清澈，四周是原始的云杉与松林，静得只听见风声。',
            '继续前行至塔拉大桥，这座建于1940年的混凝土拱桥飞架欧洲最深峡谷之上，深达1300米的塔拉河峡谷在桥下沉默。今晚入住山间特色小木屋，感受巴尔干山区的另一面。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '06',
          title: '乌瓦茨峡谷｜蛇形秘境与白头秃鹫',
          stay: '布尔多山间小木屋',
          image: IMG.uvac,
          paragraphs: [
            '约2.5小时车程抵达乌瓦茨特别自然保护区，随后乘船深入"蛇形峡谷"约5小时。河道在高山之间蜿蜒盘绕，每一个弯道都似乎藏着另一段峡谷。这里是欧洲极危物种白头秃鹫的重要繁殖地，运气好时可见它们在热气流中盘旋。',
            '探访冰洞、登上观景台俯瞰整片峡谷曲流全貌。这是整趟行程里最少人踏足的角落，也是许多人事后回忆中最难忘的一天。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '07',
          title: '兹拉蒂博尔｜金色缆车登顶',
          stay: '兹拉蒂博尔四星酒店',
          image: IMG.goldGondola,
          paragraphs: [
            '约1小时车程，抵达兹拉蒂博尔高原。搭乘号称全球最长的山地缆车——金色缆车——缓缓登顶，沿途群山层叠，峡谷沉静，高度每升一分，视野便宽一尺。',
            '山顶有观景台、餐厅与徒步道，可根据天气选择停留时间。今晚在兹拉蒂博尔小镇休息，明天将是返程前最后一段精彩。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '08',
          title: '八字小火车 · 木头城 → 贝尔格莱德',
          stay: '贝尔格莱德四星酒店',
          image: IMG.sarganRail,
          paragraphs: [
            '约1小时车程至莫克拉戈拉，乘坐沙尔干八字铁路（Šargan Eight）穿行山间，小火车在蜿蜒的8字形轨道上盘旋上升，窗外是塞尔维亚西部的原始山林。',
            '终点站步行可达库斯滕多夫——导演库斯图里卡亲手建起的木质小镇，电影《生命是个奇迹》在此拍摄，时至今日仍有人在这里生活与创作。随后约3小时车程返回贝尔格莱德。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
        {
          day: '09',
          title: '贝尔格莱德市区｜告别白城',
          stay: '（候机）',
          image: IMG.zemun,
          paragraphs: [
            '走进塞尔维亚国家博物馆，欣赏巴尔干艺术与历史珍藏，随后前往圣萨瓦大教堂——世界上在建规模最大的东正教教堂之一，内部的马赛克穹顶令人屏息。',
            '午后前往泽蒙古镇，沿多瑙河步道漫步，在加尔多什钟楼俯瞰河湾，用一杯土耳其咖啡为整段旅程收尾。今晚候机，凌晨出发返程。',
          ],
          meals: { breakfast: '含', lunch: '—', dinner: '—' },
        },
      ],
    },
    notices: {
      title: '出发前须知',
      items: [
        '签证：中国公民前往塞尔维亚、波黑免签；黑山对持中国护照游客免签，建议出发前确认最新政策。',
        '货币：三国均有各自货币（塞尔维亚第纳尔 / 波黑可兑换马克 / 欧元在黑山通用），建议携带适量欧元备用，当地 ATM 取款方便。',
        '天气：春秋两季最为舒适，山区（扎布利亚克 / 乌瓦茨）日夜温差较大，建议备一件轻薄外套。',
        '行李：全程约需换乘 8-9 次住宿，建议使用可拉伸滚轮行李箱；山区小木屋道路可能有坡度，不建议携带超大型行李。',
        '体力：乌瓦茨游船约5小时，全程户外；杜米托尔与兹拉蒂博尔含步行，整体强度中等，适合一般体力的成年游客。',
        '出发地与航班：本行程以贝尔格莱德为进出点，中国各主要城市均有直飞或一程转机航班可选，具体航班由顾问协助确认。',
      ],
    },
};

// English and Turkish are adapted, not literal: visa, guide-language and flight notes in the
// Chinese copy are written for Chinese passport holders flying from China, so these versions
// say what holds for their readers instead, and promise no specific guiding language.
const en: typeof zh = {
  ui: {
    heroAlt: 'Tara Bridge — Montenegro, Balkans tour',
    seriesSuffix: 'Series · Balkans 3-Country',
    dayByDayTitle: 'Day by Day',
    mealNames: ['Breakfast', 'Lunch', 'Dinner'],
    mealSep: ': ',
    otherRouteCta: 'See B1 · 12-Day Route',
    contactLabel: 'Balkan Desk',
    wechatNote: 'Same number on WeChat',
    credits:
      'Photo credits: most landscape photos on this page are from Wikimedia Commons, used under CC BY-SA — Church of Saint Sava © Petar Milošević; Sebilj, Sarajevo © Filip Maljković; Old Bridge, Mostar © Berthold Werner; Blagaj Tekke © Diego Delso; Bay of Kotor © Diego Delso; Black Lake, Durmitor © Mercy; Tara Bridge © Pudelek (Marcin Szala); Uvac © Srdjan Marincic; Šargan Eight railway, Mokra Gora © Whitepixels (CC0); Zemun © Petar Milošević. Gold Gondola photo from goldgondola.rs. They will be replaced with our own photos once the tour runs.',
  },
  meta: {
    code: 'B2',
    seriesTitle: 'B Series · Balkans Boutique Tour | Serbia · Montenegro · Bosnia, 10 Days 9 Nights',
    title: 'B2 · Serbia + Montenegro + Bosnia, 10 Days 9 Nights',
    subtitle: 'In and out of Belgrade — from Sarajevo’s old town to Montenegro’s canyons, from the Uvac meanders to the Zlatibor highlands',
    tagline:
      'Belgrade in & out | Sarajevo and the Old Bridge of Mostar | Bay of Kotor and a sunset cable-car ride | Black Lake in Durmitor National Park | The Uvac meanders | Zlatibor Gold Gondola | Šargan Eight railway and the wooden village',
    transport: 'Air-conditioned coach throughout with a professional tour leader. Private small-group format, so the pace can be adjusted as you go. Tell us your preferred guiding language when you enquire.',
    hotels: 'Selected comfortable 4-star hotels with daily breakfast; in the mountains you stay in characterful wooden chalets for a taste of Balkan highland life.',
    transport_label: 'Transport',
    hotels_label: 'Hotels & Breakfast',
    price_label: 'Price',
    meals_label: 'Meals',
    stay_label: 'Overnight',
    footer_cta_title: 'Start your 10 days in the Balkans',
    cta_consult: 'Talk to a consultant',
    cta_plan: 'Get the detailed plan',
    sticky_cta: 'Plan my trip',
    seo: {
      title: 'Balkans 10-Day Tour | Serbia, Montenegro & Bosnia | Uvac, Durmitor, Zlatibor',
      description:
        'Grace Way B2: 10 days and 9 nights through Serbia, Montenegro and Bosnia and Herzegovina, in and out of Belgrade — Sarajevo, the Old Bridge of Mostar, the Bay of Kotor, Durmitor’s Black Lake, the Uvac meanders, the Zlatibor Gold Gondola and the Šargan Eight railway.',
      keywords:
        'Balkans 10 day tour, Serbia Montenegro Bosnia tour, Uvac canyon boat trip, Durmitor National Park, Zlatibor Gold Gondola, Mostar Old Bridge, Sargan Eight railway',
    },
  },
  highlights: {
    title: 'Highlights',
    items: [
      {
        title: 'Two Bosnian cities',
        desc: 'Sarajevo, where East meets West and Ottoman lanes run into Austro-Hungarian façades; Mostar, with its Old Bridge over the Neretva (UNESCO World Heritage) and the Blagaj Tekke nearby — the places people linger longest in the Balkans.',
      },
      {
        title: 'Montenegro’s golden coast',
        desc: 'A boat trip to the Blue Cave, the walls of Kotor above the bay, and at dusk the Kotor cable car for a sunset ride as the Adriatic turns from orange to deep blue — then on to Budva.',
      },
      {
        title: 'Durmitor National Park',
        desc: 'The Black Lake mirrors old-growth conifer forest and the Tara Bridge spans one of Europe’s deepest canyons. At 1,500 metres the best plan is a walk and a deep breath.',
      },
      {
        title: 'The Uvac meanders',
        desc: 'By boat through the looping “snake” canyon, watching for griffon vultures above bend after bend, with an ice cave and viewpoints along the way — one of the Balkans’ best-hidden natural wonders.',
      },
      {
        title: 'Zlatibor Gold Gondola',
        desc: 'Ride what is billed as the world’s longest panoramic gondola over layered hills and quiet valleys, then have a proper Serbian grill at the top — the most relaxed half-day of the trip.',
      },
      {
        title: 'Šargan Eight & the wooden village',
        desc: 'The figure-of-eight mountain railway winds up to Küstendorf (Drvengrad), the wooden village director Emir Kusturica built for his film “Life Is a Miracle”, where people still live today.',
      },
    ],
  },
  summaryTable: {
    title: 'At a Glance',
    columns: ['Day', 'Route', 'B', 'L', 'D', 'Stay'],
    rows: [
      { day: 'D1', route: 'Your city → arrive Belgrade (BEG); free time in town', breakfast: '/', lunch: '/', dinner: '/', hotel: 'Belgrade ★★★★' },
      { day: 'D2', route: 'Belgrade → Sarajevo (Baščaršija old town · Latin Bridge · Yellow Fortress viewpoint)', breakfast: 'Incl.', lunch: '—', dinner: '—', hotel: 'Sarajevo ★★★★' },
      { day: 'D3', route: 'Sarajevo → Mostar (Old Bridge · old town · Blagaj Tekke)', breakfast: 'Incl.', lunch: '—', dinner: '—', hotel: 'Mostar ★★★★' },
      { day: 'D4', route: 'Mostar → Kotor (Blue Cave boat trip · old town · sunset ride on the Kotor cable car) → Budva', breakfast: 'Incl.', lunch: '—', dinner: '—', hotel: 'Budva ★★★★' },
      { day: 'D5', route: 'Budva → Žabljak (Durmitor National Park · Black Lake · Tara Bridge)', breakfast: 'Incl.', lunch: '—', dinner: '—', hotel: 'Žabljak (chalet)' },
      { day: 'D6', route: 'Tara Bridge → Uvac (5-hour boat trip · meanders · ice cave · viewpoint)', breakfast: 'Incl.', lunch: '—', dinner: '—', hotel: 'Brdo (chalet)' },
      { day: 'D7', route: 'Brdo → Zlatibor (Gold Gondola · summit views)', breakfast: 'Incl.', lunch: '—', dinner: '—', hotel: 'Zlatibor ★★★★' },
      { day: 'D8', route: 'Zlatibor → Mokra Gora (Šargan Eight · wooden village · Küstendorf) → Belgrade', breakfast: 'Incl.', lunch: '—', dinner: '—', hotel: 'Belgrade ★★★★' },
      { day: 'D9', route: 'Belgrade (National Museum · Church of Saint Sava · Zemun · Danube promenade)', breakfast: 'Incl.', lunch: '—', dinner: '—', hotel: '— (overnight flight)' },
      { day: 'D10', route: 'Belgrade → home (early-morning flight)', breakfast: '/', lunch: '/', dinner: '/', hotel: 'Home' },
    ],
  },
  sections: {
    days: [
      {
        day: '01',
        title: 'Arrive in Belgrade | First look at the White City',
        stay: '4-star hotel, Belgrade',
        image: IMG.belgradeStSava,
        paragraphs: [
          'Arrive in Belgrade, where your driver meets you and takes you to the hotel. After a rest, stroll Republic Square and Knez Mihailova Street to feel the everyday pulse of the “White City”, or watch the dome of the Church of Saint Sava glow at dusk.',
          'Nothing else is planned tonight, so you can start the Balkans at your own pace.',
        ],
        meals: { breakfast: '/', lunch: '/', dinner: '/' },
      },
      {
        day: '02',
        title: 'Belgrade → Sarajevo | Where East meets West',
        stay: '4-star hotel, Sarajevo',
        image: IMG.sarajevo,
        paragraphs: [
          'About five hours by road to the Bosnian capital, arriving in the afternoon. In the Baščaršija old town the Ottoman coppersmiths’ lane looks much as it did a century ago, while Austro-Hungarian baroque buildings stand a few steps away — two civilisations sharing one street.',
          'Walk to the Latin Bridge, where a single moment in 1914 changed world history, and at dusk climb to the Yellow Fortress to see the city lit up in its valley.',
        ],
        meals: { breakfast: 'Incl.', lunch: '—', dinner: '—' },
      },
      {
        day: '03',
        title: 'Sarajevo → Mostar | The Old Bridge and the tekke',
        stay: '4-star hotel, Mostar',
        image: IMG.mostar,
        paragraphs: [
          'About three hours to Mostar. The Neretva divides the town, and the Old Bridge (UNESCO World Heritage) spans it as a symbol of reconciliation. Cobbled lanes, market calls and the smell of coffee slow everything down.',
          'In the afternoon drive about 30 minutes to Blagaj, a Dervish tekke set beneath a cliff beside the spring of the Buna — the most peaceful corner of the Neretva valley.',
        ],
        meals: { breakfast: 'Incl.', lunch: '—', dinner: '—' },
      },
      {
        day: '04',
        title: 'Bay of Kotor · Blue Cave · Budva | Montenegro’s coast',
        stay: '4-star hotel, Budva',
        image: IMG.kotorBay,
        paragraphs: [
          'A three-hour boat trip takes you to the Blue Cave, where sunlight refracts through the water and everything seems to float in blue. Back on shore, enter Kotor’s old town and climb the walls until the whole bay opens up below.',
          'At dusk ride the Kotor cable car up the mountain for the sunset: the sun sinks into the Adriatic and the whole bay turns from gold to blue beneath you — perhaps the quietest, most memorable moment of the trip. Then on to Budva for the night.',
        ],
        meals: { breakfast: 'Incl.', lunch: '—', dinner: '—' },
      },
      {
        day: '05',
        title: 'Durmitor National Park | Montenegro’s mountains and canyons',
        stay: 'Mountain chalet, Žabljak',
        image: IMG.durmitor,
        paragraphs: [
          'About two and a half hours through Montenegro’s interior to Durmitor National Park. The Black Lake is its best-known sight: clear water ringed by old spruce and pine, so still you hear only the wind.',
          'Continue to the Tara Bridge, a concrete arch completed in 1940 over one of Europe’s deepest canyons: the Tara flows about 170 metres below the deck, in a gorge up to 1,300 metres deep. Tonight you stay in a mountain chalet and see the other side of the Balkans.',
        ],
        meals: { breakfast: 'Incl.', lunch: '—', dinner: '—' },
      },
      {
        day: '06',
        title: 'Uvac | The snake canyon and griffon vultures',
        stay: 'Mountain chalet, Brdo',
        image: IMG.uvac,
        paragraphs: [
          'About two and a half hours to the Uvac Special Nature Reserve, then roughly five hours by boat into the “snake” canyon, where the river coils between the mountains and every bend hides another. Uvac is one of the most important breeding grounds of the griffon vulture in the Balkans, and with luck you will see them circling on the thermals.',
          'Visit the ice cave and climb to the viewpoint over the meanders. It is the least-visited corner of the trip — and for many travellers the day they remember best.',
        ],
        meals: { breakfast: 'Incl.', lunch: '—', dinner: '—' },
      },
      {
        day: '07',
        title: 'Zlatibor | Up the Gold Gondola',
        stay: '4-star hotel, Zlatibor',
        image: IMG.goldGondola,
        paragraphs: [
          'About an hour to the Zlatibor plateau. Ride the Gold Gondola — billed as the world’s longest panoramic gondola — slowly up over layered hills and silent valleys, the view widening with every metre.',
          'At the top there are viewpoints, a restaurant and walking trails; stay as long as the weather invites. Tonight you rest in Zlatibor before the last highlights of the trip.',
        ],
        meals: { breakfast: 'Incl.', lunch: '—', dinner: '—' },
      },
      {
        day: '08',
        title: 'Šargan Eight · the wooden village → Belgrade',
        stay: '4-star hotel, Belgrade',
        image: IMG.sarganRail,
        paragraphs: [
          'About an hour to Mokra Gora to ride the Šargan Eight, the narrow-gauge railway that climbs through the mountains of western Serbia on a figure-of-eight track.',
          'From the line it is a short walk to Küstendorf, the wooden village director Emir Kusturica built for his film “Life Is a Miracle”, where people still live and work. Then about three hours back to Belgrade.',
        ],
        meals: { breakfast: 'Incl.', lunch: '—', dinner: '—' },
      },
      {
        day: '09',
        title: 'Belgrade | Farewell to the White City',
        stay: '(overnight flight)',
        image: IMG.zemun,
        paragraphs: [
          'Visit the National Museum of Serbia and its Balkan art and history collections, then the Church of Saint Sava — one of the largest Orthodox churches in the world, with a breathtaking mosaic dome.',
          'In the afternoon head to old Zemun, walk the Danube promenade and look over the river from the Gardoš Tower, ending the journey with a cup of coffee. Transfer to the airport tonight for your early-morning flight.',
        ],
        meals: { breakfast: 'Incl.', lunch: '—', dinner: '—' },
      },
    ],
  },
  notices: {
    title: 'Before You Go',
    items: [
      'Visas: requirements for Serbia, Bosnia and Herzegovina and Montenegro depend on your nationality. Holders of EU, UK, US and Turkish passports, among others, can currently visit all three visa-free for short stays — please check the latest rules for your passport before travelling; we are happy to advise.',
      'Currency: Serbia uses the dinar, Bosnia and Herzegovina the convertible mark, and Montenegro the euro. Carry some euros; ATMs are easy to find.',
      'Weather: spring and autumn are the most comfortable. In the mountains (Žabljak, Uvac) nights are much cooler than days, so bring a light jacket.',
      'Luggage: you change accommodation 8–9 times, so a wheeled suitcase that is easy to handle works best. Paths to the mountain chalets can be steep — avoid oversized luggage.',
      'Fitness: the Uvac boat trip lasts about five hours outdoors, and Durmitor and Zlatibor include walking. Overall the pace is moderate and suits adults of average fitness.',
      'Flights: the tour starts and ends in Belgrade (BEG), which has direct flights from Istanbul and many European cities. Your consultant can help you choose flights.',
    ],
  },
};

const tr: typeof zh = {
  ui: {
    heroAlt: 'Tara Köprüsü — Karadağ, Balkan turu',
    seriesSuffix: 'Serisi · Üç Balkan Ülkesi',
    dayByDayTitle: 'Gün Gün Program',
    mealNames: ['Kahvaltı', 'Öğle', 'Akşam'],
    mealSep: ': ',
    otherRouteCta: 'B1 · 12 Günlük Rotayı Gör',
    contactLabel: 'Balkan Masası',
    wechatNote: 'Aynı numara WeChat’te de kayıtlı',
    credits:
      'Fotoğraflar: bu sayfadaki manzara fotoğraflarının çoğu Wikimedia Commons’tan alınmış olup CC BY-SA lisansıyla kullanılmaktadır — Aziz Sava Kilisesi © Petar Milošević; Sebil, Saraybosna © Filip Maljković; Mostar Köprüsü © Berthold Werner; Blagay Tekkesi © Diego Delso; Kotor Körfezi © Diego Delso; Kara Göl, Durmitor © Mercy; Tara Köprüsü © Pudelek (Marcin Szala); Uvac © Srdjan Marincic; Şargan Sekizi demiryolu, Mokra Gora © Whitepixels (CC0); Zemun © Petar Milošević. Altın Teleferik fotoğrafı goldgondola.rs’den alınmıştır. Tur gerçekleştiğinde kendi çekimlerimizle değiştirilecektir.',
  },
  meta: {
    code: 'B2',
    seriesTitle: 'B Serisi · Butik Balkan Turu | Sırbistan · Karadağ · Bosna-Hersek, 10 Gün 9 Gece',
    title: 'B2 · Sırbistan + Karadağ + Bosna-Hersek, 10 Gün 9 Gece',
    subtitle: 'Belgrad giriş-çıkışlı — Saraybosna’nın eski çarşısından Karadağ kanyonlarına, Uvac kıvrımlarından Zlatibor yaylalarına',
    tagline:
      'Belgrad giriş-çıkış | Saraybosna ve Mostar Köprüsü | Kotor Körfezi ve teleferikle gün batımı | Durmitor Milli Parkı’nda Kara Göl | Uvac menderesleri | Zlatibor Altın Teleferik | Şargan Sekizi treni ve ahşap köy',
    transport: 'Tüm tur boyunca klimalı otobüs ve profesyonel tur lideri. Özel küçük grup formatı sayesinde tempo yol boyunca ayarlanabilir. Tercih ettiğiniz rehberlik dilini talebinizde belirtmeniz yeterli.',
    hotels: 'Kahvaltı dahil, özenle seçilmiş konforlu 4 yıldızlı oteller; dağlık bölümde Balkan yayla yaşamını yansıtan ahşap dağ evlerinde konaklama.',
    transport_label: 'Ulaşım',
    hotels_label: 'Konaklama ve Kahvaltı',
    price_label: 'Fiyat',
    meals_label: 'Yemekler',
    stay_label: 'Konaklama',
    footer_cta_title: '10 günlük Balkan yolculuğunuza başlayın',
    cta_consult: 'Danışmanla görüşün',
    cta_plan: 'Detaylı programı alın',
    sticky_cta: 'Turumu planla',
    seo: {
      title: '10 Günlük Balkan Turu | Sırbistan, Karadağ ve Bosna-Hersek | Uvac, Durmitor, Zlatibor',
      description:
        'Grace Way B2: Belgrad giriş-çıkışlı 10 gün 9 gece Sırbistan, Karadağ ve Bosna-Hersek turu — Saraybosna, Mostar Köprüsü, Kotor Körfezi, Durmitor’daki Kara Göl, Uvac menderesleri, Zlatibor Altın Teleferik ve Şargan Sekizi treni.',
      keywords:
        'Balkan turu 10 gün, Sırbistan Karadağ Bosna turu, Uvac kanyonu tekne turu, Durmitor Milli Parkı, Zlatibor teleferik, Mostar Köprüsü, Şargan Sekizi treni',
    },
  },
  highlights: {
    title: 'Öne Çıkanlar',
    items: [
      {
        title: 'Bosna’nın iki şehri',
        desc: 'Doğu ile Batı’nın buluştuğu, Osmanlı sokaklarının Avusturya-Macaristan cepheleriyle yan yana durduğu Saraybosna; Neretva üzerindeki tarihi köprüsü (UNESCO Dünya Mirası) ve yakınındaki Blagay Tekkesi ile Mostar — Balkanlar’da insanın en çok oyalandığı yerler.',
      },
      {
        title: 'Karadağ’ın altın kıyısı',
        desc: 'Mavi Mağara’ya tekne turu, körfeze tepeden bakan Kotor surları ve akşamüstü Kotor teleferiğiyle gün batımı: Adriyatik turuncudan laciverte döner — ardından Budva’ya geçiş.',
      },
      {
        title: 'Durmitor Milli Parkı',
        desc: 'Kara Göl kadim iğne yapraklı ormanı yansıtır, Tara Köprüsü Avrupa’nın en derin kanyonlarından birinin üzerinden geçer. 1.500 metrede en iyi program, bir yürüyüş ve derin bir nefestir.',
      },
      {
        title: 'Uvac menderesleri',
        desc: 'Kıvrılarak ilerleyen “yılan” kanyonunda tekneyle yol alırken her dönemeçte kızıl akbabaları gözleyin; yol üzerinde buz mağarası ve seyir noktaları — Balkanlar’ın en saklı doğa harikalarından biri.',
      },
      {
        title: 'Zlatibor Altın Teleferik',
        desc: 'Dünyanın en uzun panoramik teleferiği olarak tanıtılan hatla katman katman tepelerin ve sessiz vadilerin üzerinden süzülün, zirvede gerçek bir Sırp ızgarası yiyin — yolculuğun en rahat yarım günü.',
      },
      {
        title: 'Şargan Sekizi ve ahşap köy',
        desc: 'Sekiz şeklindeki dağ demiryolu, yönetmen Emir Kusturica’nın “Hayat Bir Mucize” filmi için inşa ettiği ahşap köy Küstendorf’a (Drvengrad) kadar tırmanır — köyde bugün de yaşayanlar var.',
      },
    ],
  },
  summaryTable: {
    title: 'Program Özeti',
    columns: ['Gün', 'Program', 'K', 'Ö', 'A', 'Konaklama'],
    rows: [
      { day: 'D1', route: 'Şehriniz → Belgrad (BEG) varış; şehirde serbest zaman', breakfast: '/', lunch: '/', dinner: '/', hotel: 'Belgrad ★★★★' },
      { day: 'D2', route: 'Belgrad → Saraybosna (Başçarşı · Latin Köprüsü · Sarı Tabya seyir noktası)', breakfast: 'Dahil', lunch: '—', dinner: '—', hotel: 'Saraybosna ★★★★' },
      { day: 'D3', route: 'Saraybosna → Mostar (Mostar Köprüsü · eski şehir · Blagay Tekkesi)', breakfast: 'Dahil', lunch: '—', dinner: '—', hotel: 'Mostar ★★★★' },
      { day: 'D4', route: 'Mostar → Kotor (Mavi Mağara tekne turu · eski şehir · Kotor teleferiğiyle gün batımı) → Budva', breakfast: 'Dahil', lunch: '—', dinner: '—', hotel: 'Budva ★★★★' },
      { day: 'D5', route: 'Budva → Žabljak (Durmitor Milli Parkı · Kara Göl · Tara Köprüsü)', breakfast: 'Dahil', lunch: '—', dinner: '—', hotel: 'Žabljak (dağ evi)' },
      { day: 'D6', route: 'Tara Köprüsü → Uvac (5 saatlik tekne turu · menderesler · buz mağarası · seyir noktası)', breakfast: 'Dahil', lunch: '—', dinner: '—', hotel: 'Brdo (dağ evi)' },
      { day: 'D7', route: 'Brdo → Zlatibor (Altın Teleferik · zirve manzarası)', breakfast: 'Dahil', lunch: '—', dinner: '—', hotel: 'Zlatibor ★★★★' },
      { day: 'D8', route: 'Zlatibor → Mokra Gora (Şargan Sekizi · ahşap köy · Küstendorf) → Belgrad', breakfast: 'Dahil', lunch: '—', dinner: '—', hotel: 'Belgrad ★★★★' },
      { day: 'D9', route: 'Belgrad (Ulusal Müze · Aziz Sava Kilisesi · Zemun · Tuna kıyısı)', breakfast: 'Dahil', lunch: '—', dinner: '—', hotel: '— (gece uçuşu)' },
      { day: 'D10', route: 'Belgrad → dönüş (sabah erken uçuş)', breakfast: '/', lunch: '/', dinner: '/', hotel: 'Evinize dönüş' },
    ],
  },
  sections: {
    days: [
      {
        day: '01',
        title: 'Belgrad’a varış | Beyaz Şehir ile ilk tanışma',
        stay: 'Belgrad, 4 yıldızlı otel',
        image: IMG.belgradeStSava,
        paragraphs: [
          'Belgrad’a varışta şoförünüz sizi karşılar ve otele götürür. Dinlendikten sonra Cumhuriyet Meydanı ile Knez Mihailova Caddesi’nde yürüyerek “Beyaz Şehir”in gündelik ritmini hissedebilir ya da alacakaranlıkta parlayan Aziz Sava Kilisesi’nin kubbesini izleyebilirsiniz.',
          'Bu akşam program yok; Balkanlar’a kendi temponuzla başlayın.',
        ],
        meals: { breakfast: '/', lunch: '/', dinner: '/' },
      },
      {
        day: '02',
        title: 'Belgrad → Saraybosna | Doğu ile Batı’nın buluştuğu şehir',
        stay: 'Saraybosna, 4 yıldızlı otel',
        image: IMG.sarajevo,
        paragraphs: [
          'Yaklaşık beş saatlik yolculukla öğleden sonra Bosna-Hersek’in başkentine varış. Başçarşı’da Osmanlı döneminden kalma bakırcılar çarşısı yüz yıl önceki gibidir; birkaç adım ötede Avusturya-Macaristan dönemi barok binalar yükselir — iki medeniyet aynı sokağı paylaşır.',
          'Dünya tarihini 1914’te değiştiren anın yaşandığı Latin Köprüsü’ne yürüyün, akşamüstü Sarı Tabya’ya çıkarak vadideki şehrin ışıklarını seyredin.',
        ],
        meals: { breakfast: 'Dahil', lunch: '—', dinner: '—' },
      },
      {
        day: '03',
        title: 'Saraybosna → Mostar | Köprü ve tekke',
        stay: 'Mostar, 4 yıldızlı otel',
        image: IMG.mostar,
        paragraphs: [
          'Yaklaşık üç saatte Mostar’a varış. Neretva nehri şehri ikiye böler; UNESCO Dünya Mirası listesindeki Mostar Köprüsü ise iki yakayı birleştiren bir barış sembolü olarak üzerinde yükselir. Arnavut kaldırımlı sokaklar, esnafın sesleri ve kahve kokusu zamanı yavaşlatır.',
          'Öğleden sonra yaklaşık 30 dakikalık yolculukla Blagay’a: Buna ırmağının kaynağında, sarp bir kayalığın dibine kurulmuş derviş tekkesi, Neretva vadisinin en huzurlu köşesidir.',
        ],
        meals: { breakfast: 'Dahil', lunch: '—', dinner: '—' },
      },
      {
        day: '04',
        title: 'Kotor Körfezi · Mavi Mağara · Budva | Karadağ kıyıları',
        stay: 'Budva, 4 yıldızlı otel',
        image: IMG.kotorBay,
        paragraphs: [
          'Üç saatlik tekne turuyla Mavi Mağara’ya: güneş ışığı sudan kırılarak içeri süzülür, her şey maviliğin içinde asılı kalmış gibidir. Karaya döndükten sonra Kotor eski şehrine girip surlara tırmanın; körfezin tamamı ayaklarınızın altına serilir.',
          'Akşamüstü Kotor teleferiğiyle dağa çıkıp gün batımını izleyin: güneş Adriyatik’e gömülürken tüm körfez ayaklarınızın altında altın renginden maviye döner — belki de yolculuğun en sessiz, en unutulmaz anı. Ardından geceyi geçirmek üzere Budva’ya geçiş.',
        ],
        meals: { breakfast: 'Dahil', lunch: '—', dinner: '—' },
      },
      {
        day: '05',
        title: 'Durmitor Milli Parkı | Karadağ’ın dağları ve kanyonları',
        stay: 'Žabljak, dağ evi',
        image: IMG.durmitor,
        paragraphs: [
          'Karadağ’ın iç kesimlerinden geçen yaklaşık iki buçuk saatlik yolculukla Durmitor Milli Parkı’na varış. Parkın simgesi Kara Göl’dür: yaşlı ladin ve çam ağaçlarıyla çevrili berrak su, yalnızca rüzgârın duyulduğu bir sessizlik.',
          'Ardından 1940’ta tamamlanan ve Avrupa’nın en derin kanyonlarından birinin üzerinden geçen beton kemerli Tara Köprüsü; Tara nehri köprünün yaklaşık 170 metre altında, derinliği 1.300 metreyi bulan bir vadide akar. Bu gece bir dağ evinde kalarak Balkanlar’ın öbür yüzünü tanıyın.',
        ],
        meals: { breakfast: 'Dahil', lunch: '—', dinner: '—' },
      },
      {
        day: '06',
        title: 'Uvac | Yılan kanyonu ve kızıl akbabalar',
        stay: 'Brdo, dağ evi',
        image: IMG.uvac,
        paragraphs: [
          'Yaklaşık iki buçuk saatte Uvac Özel Doğa Koruma Alanı’na, ardından yaklaşık beş saat tekneyle “yılan” kanyonunun içlerine: nehir dağların arasında kıvrılır, her dönemeç bir başkasını saklar. Uvac, Balkanlar’daki kızıl akbabaların en önemli üreme alanlarından biridir; şansınız varsa sıcak hava akımlarında süzüldüklerini görürsünüz.',
          'Buz mağarasını gezin ve menderesleri tepeden gören seyir noktasına çıkın. Turun en az bilinen köşesi — ve pek çok gezginin en çok hatırladığı gün.',
        ],
        meals: { breakfast: 'Dahil', lunch: '—', dinner: '—' },
      },
      {
        day: '07',
        title: 'Zlatibor | Altın Teleferik ile zirveye',
        stay: 'Zlatibor, 4 yıldızlı otel',
        image: IMG.goldGondola,
        paragraphs: [
          'Yaklaşık bir saatte Zlatibor yaylasına varış. Dünyanın en uzun panoramik teleferiği olarak tanıtılan Altın Teleferik ile katman katman tepelerin ve sessiz vadilerin üzerinden yavaşça yükselin; her metrede manzara biraz daha genişler.',
          'Zirvede seyir terasları, restoran ve yürüyüş parkurları var; hava izin verdiği kadar kalın. Bu gece, yolculuğun son güzel bölümünden önce Zlatibor’da dinlenin.',
        ],
        meals: { breakfast: 'Dahil', lunch: '—', dinner: '—' },
      },
      {
        day: '08',
        title: 'Şargan Sekizi · ahşap köy → Belgrad',
        stay: 'Belgrad, 4 yıldızlı otel',
        image: IMG.sarganRail,
        paragraphs: [
          'Yaklaşık bir saatte Mokra Gora’ya varıp batı Sırbistan’ın dağlarında sekiz şeklinde bir hat üzerinde tırmanan dar hatlı Şargan Sekizi trenine binin.',
          'Hattın yakınındaki Küstendorf, yönetmen Emir Kusturica’nın “Hayat Bir Mucize” filmi için kurduğu ahşap köydür ve bugün de yaşayanları vardır. Ardından yaklaşık üç saatlik yolculukla Belgrad’a dönüş.',
        ],
        meals: { breakfast: 'Dahil', lunch: '—', dinner: '—' },
      },
      {
        day: '09',
        title: 'Belgrad | Beyaz Şehir’e veda',
        stay: '(gece uçuşu)',
        image: IMG.zemun,
        paragraphs: [
          'Balkan sanatı ve tarihi koleksiyonlarıyla Sırbistan Ulusal Müzesi’ni, ardından dünyanın en büyük Ortodoks kiliselerinden biri olan ve nefes kesen mozaik kubbesiyle Aziz Sava Kilisesi’ni ziyaret edin.',
          'Öğleden sonra eski Zemun’da Tuna kıyısında yürüyün, Gardoş Kulesi’nden nehre bakın ve yolculuğu bir fincan kahveyle noktalayın. Bu gece sabah erken uçuşunuz için havalimanına transfer.',
        ],
        meals: { breakfast: 'Dahil', lunch: '—', dinner: '—' },
      },
    ],
  },
  notices: {
    title: 'Yola Çıkmadan Önce',
    items: [
      'Vize: Sırbistan, Bosna-Hersek ve Karadağ için vize şartları uyruğa göre değişir. Türk vatandaşları şu anda üç ülkeye de kısa süreli seyahatlerde vizesiz girebilmektedir; yola çıkmadan önce pasaportunuz için güncel kuralları kontrol edin, yardımcı olmaktan memnuniyet duyarız.',
      'Para birimi: Sırbistan’da dinar, Bosna-Hersek’te konvertibl mark, Karadağ’da euro kullanılır. Yanınızda bir miktar euro bulundurun; ATM bulmak kolaydır.',
      'Hava durumu: En rahat mevsimler ilkbahar ve sonbahardır. Dağlarda (Žabljak, Uvac) geceler gündüzden çok daha serin olur; ince bir mont alın.',
      'Bagaj: Tur boyunca 8–9 kez konaklama yeri değişir; taşıması kolay tekerlekli bir valiz en iyisidir. Dağ evlerine giden yollar dik olabilir, çok büyük bagajdan kaçının.',
      'Kondisyon: Uvac tekne turu yaklaşık beş saat açık havada sürer; Durmitor ve Zlatibor’da yürüyüş vardır. Genel tempo orta düzeydedir ve ortalama kondisyondaki yetişkinlere uygundur.',
      'Uçuşlar: Tur Belgrad’da (BEG) başlar ve biter; İstanbul’dan ve pek çok Avrupa şehrinden direkt uçuşlar vardır. Danışmanınız uçuş seçiminde yardımcı olur.',
    ],
  },
};

const itineraryContent: Record<'zh' | 'en' | 'tr', typeof zh> = { zh, en, tr };

const ItineraryB2: React.FC = () => {
  const { language, t } = useLanguage();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackImage;
  };

  const page = itineraryContent[language as keyof typeof itineraryContent] ?? itineraryContent.zh;

  return (
    <div className="bg-[#fdfcfb] text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      <SEO
        title={page.meta.seo.title}
        description={page.meta.seo.description}
        keywords={page.meta.seo.keywords}
      />

      {/* Hero */}
      <section className="relative h-[80vh] md:h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img src={heroImage} className="w-full h-full object-cover" alt={page.ui.heroAlt} onError={handleImageError} />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative z-20 max-w-6xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="inline-block px-3 py-1 bg-[#FF9D00] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.18em] md:tracking-[0.3em] rounded mb-6">
            {page.meta.code} {page.ui.seriesSuffix}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black serif text-white mb-6 leading-[1.06] tracking-tight">
            {page.meta.title}
          </h1>
          <p className="text-white/80 text-[1.05rem] md:text-[1.6rem] font-light mb-10 tracking-[0.02em] md:tracking-[0.08em] [text-wrap:pretty]">
            {page.meta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={BOOKING_URLS.B2} className="w-full sm:w-auto px-8 md:px-10 py-4 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-[0.16em] md:tracking-widest text-[12px] md:text-sm shadow-2xl">
              {t.nav.bookOnline}
            </a>
            <Link to="/contact" className="w-full sm:w-auto px-8 md:px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-[0.16em] md:tracking-widest text-[12px] md:text-sm">
              {page.meta.cta_plan}
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
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
              <p className="text-3xl font-black text-[#FF9D00] tracking-tight group-hover:underline">{itineraryPrice(language)}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
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

      {/* Summary Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black serif uppercase tracking-widest mb-2">{page.summaryTable.title}</h2>
        </div>
        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left border-separate border-spacing-0 min-w-[800px] md:min-w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <thead>
              <tr className="bg-slate-50">
                {page.summaryTable.columns.map((col, i) => {
                  // Columns 2-4 are breakfast / lunch / dinner in every language.
                  const isMealCol = i >= 2 && i <= 4;
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

      {/* Day-by-day */}
      <section className="py-20 md:py-32 space-y-24 md:space-y-40">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="text-3xl md:text-5xl font-black serif text-center italic">{page.ui.dayByDayTitle}</h2>
          <div className="w-16 h-1 bg-[#FF9D00] mx-auto mt-4"></div>
        </div>
        {page.sections.days.map((item, i) => (
          <div key={i} className={`max-w-7xl mx-auto px-6 flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-20 items-start`}>
            <div className="w-full lg:w-1/2 sticky top-24">
              <div className="w-full aspect-[16/9] bg-slate-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg relative group">
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-slate-900 shadow-xl uppercase z-10 border border-slate-100">
                  DAY {item.day}
                </div>
                <CardImage src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} loading="lazy" decoding="async" fallback={fallbackImage} />
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
                    {page.ui.mealNames[0]}{page.ui.mealSep}{item.meals.breakfast} / {page.ui.mealNames[1]}{page.ui.mealSep}{item.meals.lunch} / {page.ui.mealNames[2]}{page.ui.mealSep}{item.meals.dinner}
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

      {/* Notices */}
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

      {/* Footer CTA */}
      <section className="py-32 bg-slate-950 text-white relative text-center px-6">
        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-6xl font-black serif italic">{page.meta.footer_cta_title}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URLS.B2} className="w-full sm:w-auto px-12 py-5 bg-[#FF9D00] text-white rounded-full font-black uppercase tracking-widest text-sm shadow-xl">
              {t.nav.bookOnline}
            </a>
            <Link to="/itineraries/b1-balkan-3-countries-12-days" className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-sm">
              {page.ui.otherRouteCta}
            </Link>
          </div>
          <div className="pt-8 mt-2 border-t border-white/10 max-w-md mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">{page.ui.contactLabel}</p>
            <a href="tel:+381665423472" className="inline-block text-2xl md:text-3xl font-black text-[#FF9D00] tracking-tight hover:text-white transition-colors">+381 66 542 3472</a>
            <p className="text-sm text-white/60 font-medium mt-2">{page.ui.wechatNote}</p>
          </div>
        </div>
      </section>

      {/* Photo credits */}
      <div className="bg-white py-8 px-6 border-t border-slate-100">
        <p className="max-w-5xl mx-auto text-[11px] leading-relaxed text-slate-400 text-center">
          {page.ui.credits}
        </p>
      </div>
    </div>
  );
};

export default ItineraryB2;
