import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Award,
  BookOpen,
  Briefcase,
  Car,
  CheckCircle2,
  Globe,
  Mail,
  Map,
  MapPin,
  Phone,
  Route,
  ShieldCheck,
  ShieldX,
} from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

type AboutContent = {
  heroBadge: string;
  title: string;
  subtitle: string;
  intro: string[];
  promiseTitle: string;
  promiseLead: string;
  promisePoints: string[];
  serviceTitle: string;
  services: string[];
  serviceLinks?: string[];
  strengthTitle: string;
  strengths: Array<{ title: string; description: string }>;
  profileTitle: string;
  profileLead: string;
  profileBody: string[];
  contactCard: {
    title: string;
    license: string;
    entity: string;
    scopeNote: string;
    address: string;
    phones: Array<{ region: string; numbers: string[] }>;
    email: string;
    web: string;
    detailsToggle: string;
    details: Array<{ label: string; value: string }>;
  };
  recognitionTitle: string;
  recognitionLead: string;
  recognitionPoints: string[];
  /** Index of the one point that states what is OUT of scope (rendered muted, with a ShieldX).
   *  Omit when a language's list contains no exclusion — positional guessing mislabels
   *  legitimate service lines (en/tr end on Balkans/Israel extensions, not an exclusion). */
  recognitionExcludedIndex?: number;
  closing: string;
  ctaTours: string;
  ctaContact: string;
  trustStats: Array<{ value: string; label: string }>;
};

const SERVICE_ICONS = [Map, BookOpen, Car, Briefcase, Globe] as const;
const SCOPE_ICONS = [MapPin, BookOpen, Route, Briefcase, ShieldX] as const;

const aboutContent: Record<'zh' | 'en' | 'tr', AboutContent> = {
  zh: {
    heroBadge: 'GRACE WAY TRAVEL AGENCY · 恩途国际旅行',
    title: '我们是谁',
    subtitle:
      '土耳其本地 A 组持牌旅行社，扎根伊斯坦布尔。土耳其精品定制游与信仰朝圣，全程中文，费用透明，专注服务全球华人。',
    intro: [
      '来土耳其，需要的不只是一张行程表，而是一个真正能托付的人。',
      '恩途 Grace Way Travel Agency 是一家总部位于伊斯坦布尔的本地持牌旅行社，TÜRSAB A 组认证，证书编号 18717，依法运营，公开可查。我们专注于服务中国及全球华人旅客，以土耳其精品定制游、信仰朝圣、中文地接与在土商务接待为核心。',
      '从第一次询价到旅程结束，全程中文对接。不用你猜规则，不用你担心临时状况——因为在你出发前，我们已经把大部分不确定性处理完毕。',
    ],
    promiseTitle: '我们坚持的标准',
    promiseLead:
      '服务好，因为我们始终站在客户立场；品质好，因为我们只用合规资源；导游好，因为导游决定一段旅程的高度。',
    promisePoints: [
      '真正懂中国文化与出行习惯的本地领队',
      '沟通清晰，有边界感，不模糊不拖沓',
      '出发前把所有不确定性处理在前面',
      '纯玩、无强制购物、费用完全透明',
    ],
    serviceTitle: '我们能提供什么',
    strengthTitle: '核心产品与服务',
    services: [
      '土耳其精品定制游（S系列 · 人文经典 · 6–10天）',
      '信仰朝圣之旅（Z系列 · 启示录七教会 · 保罗足迹）',
      '机场接送 & 土耳其全境包车',
      '土耳其本地商务考察、展会接待与 MICE 会奖协助',
      '巴尔干与以色列作为旅游线路延伸，按项目单独确认',
    ],
    serviceLinks: ['/tours', '/tours', '/airport-transfer', '/contact', '/tours'],
    strengths: [
      {
        title: '本地持牌，可被核验',
        description:
          '我们不是临时中介，是长期在地、依法持证（TÜRSAB A 组 · 证书 18717）、地址公开、可被核验的本地旅行社。',
      },
      {
        title: '合规透明，费用清晰',
        description:
          '所有行程与服务均在土耳其本地依法执行，流程清楚、规则明确、费用透明，不靠低价吸引，不靠模糊承诺。',
      },
      {
        title: '中文全程，专业领队',
        description:
          '从询价到落地，全中文对接。领队真正理解华人出行习惯，分寸得当、节奏合理，让旅程既有深度也有舒适感。',
      },
    ],
    profileTitle: '企业简介',
    profileLead:
      '恩途 Grace Way Travel Agency 是面向全球华人提供土耳其旅游、中文地接与目的地管理服务的本地旅行社。',
    profileBody: [
      '公司依法在土耳其注册，取得文化与旅游部批准的 A 类旅行社经营资质（Belge No: 18717），具备旅游接待、国际旅游组织及目的地管理的合法资格。',
      '服务网络覆盖土耳其全境（伊斯坦布尔、卡帕多奇亚、棉花堡、以弗所、安塔利亚、费特希耶、特罗亚等）。巴尔干与以色列仅作为现有旅行产品的延伸线路，不作为泛区域出海服务承诺。',
      '依托本地长期运营团队与稳定供应商网络，保障土耳其境内多场景项目的稳定交付与合规执行。',
    ],
    contactCard: {
      title: '资质与联系',
      license: 'TÜRSAB A 组 · Belge 18717',
      entity: 'GRACE TRAVEL TURİZM VE TİC. LTD. ŞTİ.',
      scopeNote: '旅游接待与目的地管理；投资/法律财税需持牌合作方另行确认。',
      address: 'Moda Pasajı No:25/35, Kat:2, Bakırköy · İstanbul',
      phones: [
        { region: 'TR', numbers: ['+90 554 136 6090', '+90 212 570 15 28'] },
        { region: 'CN', numbers: ['+86 134 2640 1777'] },
      ],
      email: 'taha@gracetravel.com.tr',
      web: 'grace.tr',
      detailsToggle: '完整资质信息',
      details: [
        { label: '品牌', value: 'GRACE WAY TRAVEL AGENCY / 恩途国际旅行' },
        { label: '主管部门', value: 'T.C. Kültür ve Turizm Bakanlığı' },
      ],
    },
    recognitionTitle: '服务范围边界',
    recognitionLead: '以土耳其为主轴，延伸线路只作为旅游产品处理',
    recognitionPoints: [
      '土耳其全境：伊斯坦布尔 · 卡帕多奇亚 · 棉花堡 · 以弗所 · 安塔利亚 · 费特希耶 · 特罗亚 · 伊兹密尔',
      '信仰之旅：启示录七教会（以弗所 · 士每拿 · 别迦摩等）· 保罗足迹 · 卡帕多奇亚洞穴教堂',
      '旅游延伸线路：巴尔干方向与以色列圣地方向，按项目确认资源、风险与交付主体',
      '商务 & 会展：仅展示土耳其本地商务考察、展会接待与 MICE 会奖旅游协助',
      '不在本站承诺范围内：非土耳其本地执行的商务、投资、法律财税或受监管咨询服务',
    ],
    recognitionExcludedIndex: 4,
    closing:
      '如果你在寻找的，不是「便宜一次」，而是「安心很多次」，那么恩途 Grace Way Travel Agency 值得被认真选择。',
    ctaTours: '浏览行程线路',
    ctaContact: '联系我们',
    trustStats: [
      { value: '18717', label: 'TÜRSAB A 组证书' },
      { value: '伊斯坦布尔', label: '总部所在地' },
      { value: '全程中文', label: '询价到落地' },
    ],
  },
  en: {
    heroBadge: 'GRACE WAY TRAVEL AGENCY',
    title: 'About Us',
    subtitle:
      'A licensed local travel agency based in Istanbul, serving Chinese-speaking and international travelers across Turkey.',
    intro: [
      'Grace Way Travel Agency is rooted in Istanbul and focuses on clear, dependable, high-touch travel service for clients who value quality, structure, and peace of mind.',
      'We believe premium travel is not about stacking itinerary items. It is about being understood, respected, and well taken care of in a foreign country.',
    ],
    promiseTitle: 'Our Service Standard',
    promiseLead:
      'We build each trip around compliance, clarity, and thoughtful execution, with guides and drivers who understand both local realities and Chinese-speaking guest expectations.',
    promisePoints: [
      'Chinese-speaking coordination from the first inquiry',
      'Licensed and compliant local execution',
      'Structured planning with clear boundaries and expectations',
      'Comfort, depth, and calm throughout the journey',
    ],
    serviceTitle: 'Core Services',
    services: [
      'Private customized journeys',
      'Chinese-speaking guides and drivers',
      'Airport transfers and vehicle dispatch',
      'Family and senior-friendly travel design',
      'Turkey-based business visits and trade reception',
      'Exhibition and MICE support inside Turkey',
    ],
    serviceLinks: ['/tours', '/tours', '/airport-transfer', '/contact', '/contact', '/contact'],
    strengthTitle: 'Why Grace Way',
    strengths: [
      {
        title: 'Locally established',
        description: 'We are not a temporary broker. We are a licensed local agency operating on the ground in Turkey.',
      },
      {
        title: 'Clear and compliant',
        description: 'Our workflow is transparent, structured, and built on compliant local resources and stable execution standards.',
      },
      {
        title: 'Built for demanding clients',
        description: 'We serve leisure, family, business, and group travelers with the same level of care and operational discipline.',
      },
    ],
    profileTitle: 'Company Profile',
    profileLead:
      'Grace Way Travel Agency is a destination management and travel service company headquartered in Istanbul, Turkey.',
    profileBody: [
      'The company is legally registered in Turkey and holds an A-group travel agency operating license approved by the Ministry of Culture and Tourism.',
      'Its service network covers Istanbul, Cappadocia, the Aegean coast, the Mediterranean region, and key destinations across Anatolia.',
      'The Balkans and Israel are treated only as travel extensions to existing itineraries, not as a broad regional consulting or outbound-service promise.',
    ],
    contactCard: {
      title: 'License & Contact',
      license: 'TÜRSAB A-Group · Belge 18717',
      entity: 'GRACE TRAVEL TURİZM VE TİC. LTD. ŞTİ.',
      scopeNote: 'Licensed for travel and DMC services; investment/legal/tax matters require a separately qualified partner.',
      address: 'Moda Pasaji No:25/35, Kat:2, Bakirkoy · Istanbul',
      phones: [{ region: 'TR', numbers: ['+90 554 136 6090', '+90 212 570 15 28'] }],
      email: 'taha@gracetravel.com.tr',
      web: 'grace.tr',
      detailsToggle: 'Full credentials',
      details: [
        { label: 'Brand', value: 'GRACE WAY TRAVEL AGENCY' },
        { label: 'Authority', value: 'T.C. Kultur ve Turizm Bakanligi' },
        { label: 'Website', value: 'gracetravel.com.tr · grace.tr' },
      ],
    },
    recognitionTitle: 'Service Scope Boundary',
    recognitionLead:
      'The public grace.tr scope is anchored in Turkey, with non-Turkey itineraries treated only as travel extensions.',
    recognitionPoints: [
      'Common Chinese name: En Tu Turkey Travel Agency',
      'Business scope: Turkey travel, Chinese-speaking ground handling, transfers, business reception, exhibitions, and DMC services inside Turkey',
      'Coverage: major destinations across Turkey',
      'Balkans and Israel remain travel extensions confirmed project by project',
    ],
    closing:
      'If you are looking for long-term reliability rather than one-time convenience, Grace Way Travel Agency is a serious choice.',
    ctaTours: 'Explore Tours',
    ctaContact: 'Contact Us',
    trustStats: [
      { value: '18717', label: 'TÜRSAB A-Group License' },
      { value: 'Istanbul', label: 'Headquarters' },
      { value: 'Chinese', label: 'Full coordination' },
    ],
  },
  tr: {
    heroBadge: 'GRACE WAY TRAVEL AGENCY',
    title: 'Hakkımızda',
    subtitle:
      'İstanbul merkezli, lisanslı ve yerel bir seyahat acentesi olarak Çince konuşan misafirler ve uluslararası yolculara hizmet veriyoruz.',
    intro: [
      'Grace Way Travel Agency, İstanbul merkezli yerel bir seyahat acentesidir. Hizmet anlayışımız netlik, güven ve düzenli operasyon üzerine kuruludur.',
      'Bizce nitelikli seyahat, sadece program yoğunluğu değil; misafirin yolculuk boyunca anlaşılması, rahat etmesi ve güvende hissetmesidir.',
    ],
    promiseTitle: 'Hizmet Standardımız',
    promiseLead:
      'Yasal uyum, açık süreçler ve dikkatli saha uygulaması ile aile, bireysel, kurumsal ve grup misafirleri için istikrarlı hizmet sunuyoruz.',
    promisePoints: [
      'İlk iletişimden itibaren Çince destek',
      'Yasal ve yerel kaynaklarla operasyon',
      'Açık beklentiler ve düzenli planlama',
      'Konforlu ve sakin seyahat deneyimi',
    ],
    serviceTitle: 'Temel Hizmetler',
    services: [
      'Özel ve kişisel seyahat planlama',
      'Çince rehber ve şoför hizmeti',
      'Havalimanı transfer ve araç planlama',
      'Aile ve ileri yaş misafir odaklı programlar',
      'Türkiye içinde iş ziyaretleri ve ticari karşılama',
      'Türkiye içinde fuar ve MICE desteği',
    ],
    serviceLinks: ['/tours', '/tours', '/airport-transfer', '/contact', '/contact', '/contact'],
    strengthTitle: 'Neden Grace Way',
    strengths: [
      {
        title: 'Yerelde kalıcı ekip',
        description: 'Geçici aracılar değil, Türkiye içinde faaliyet gösteren lisanslı bir acenteyiz.',
      },
      {
        title: 'Şeffaf ve düzenli',
        description: 'Süreçlerimiz açık, kaynak yapımız yasal ve hizmet standardımız istikrarlı şekilde uygulanır.',
      },
      {
        title: 'Nitelikli misafir profili',
        description: 'Ailelerden kurumsal heyetlere kadar farklı ihtiyaçlara aynı ciddiyetle yaklaşıyoruz.',
      },
    ],
    profileTitle: 'Şirket Profili',
    profileLead:
      'Grace Way Travel Agency, İstanbul merkezli bir destinasyon yönetimi ve seyahat hizmetleri şirketidir.',
    profileBody: [
      'Şirket Türkiye’de yasal olarak kayıtlıdır ve Kültür ve Turizm Bakanlığı onaylı A grubu seyahat acentesi lisansına sahiptir.',
      'Hizmet ağımız İstanbul, Kapadokya, Ege kıyıları, Akdeniz bölgesi ve Anadolu’daki önemli destinasyonları kapsar.',
      'Balkanlar ve İsrail yalnızca mevcut seyahat ürünlerinin uzantısı olarak değerlendirilir; geniş bölgesel danışmanlık veya çıkış hizmeti taahhüdü değildir.',
    ],
    contactCard: {
      title: 'Belge ve İletişim',
      license: 'TÜRSAB A Grubu · Belge 18717',
      entity: 'GRACE TRAVEL TURİZM VE TİC. LTD. ŞTİ.',
      scopeNote: 'Seyahat ve DMC hizmetleri; yatırım/hukuk/vergi konuları ayrı yetkin ortak gerektirir.',
      address: 'Moda Pasajı No:25/35, Kat:2, Bakırköy · İstanbul',
      phones: [{ region: 'TR', numbers: ['+90 554 136 6090', '+90 212 570 15 28'] }],
      email: 'taha@gracetravel.com.tr',
      web: 'grace.tr',
      detailsToggle: 'Tam belge bilgisi',
      details: [
        { label: 'Marka', value: 'GRACE WAY TRAVEL AGENCY' },
        { label: 'Yetkili kurum', value: 'T.C. Kültür ve Turizm Bakanlığı' },
        { label: 'Web', value: 'gracetravel.com.tr · grace.tr' },
      ],
    },
    recognitionTitle: 'Hizmet Kapsamı Sınırı',
    recognitionLead:
      'grace.tr kamu kapsamı Türkiye odaklıdır; Türkiye dışı rotalar sadece seyahat uzantısı olarak değerlendirilir.',
    recognitionPoints: [
      'Yerel lisanslı acente kimliği',
      'Türkiye içinde Çince odaklı yer hizmetleri ve destinasyon yönetimi',
      'Türkiye geneli hizmet kapsamı',
      'Balkanlar ve İsrail rotaları proje bazında teyit edilen seyahat uzantılarıdır',
    ],
    closing:
      'Tek seferlik ucuzluk değil, tekrar tekrar güven arıyorsanız Grace Way Travel Agency doğru tercihtir.',
    ctaTours: 'Turları İncele',
    ctaContact: 'İletişim',
    trustStats: [
      { value: '18717', label: 'TÜRSAB A Grubu Belge' },
      { value: 'İstanbul', label: 'Merkez Ofis' },
      { value: 'Çince', label: 'Tam koordinasyon' },
    ],
  },
};

const ServiceCard: React.FC<{
  service: string;
  index: number;
  href?: string;
}> = ({ service, index, href }) => {
  const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
  const inner = (
    <>
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF9D00]/10 text-[#FF9D00] transition-colors group-hover:bg-[#FF9D00] group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-base font-bold leading-8 text-slate-800">{service}</p>
    </>
  );
  const className =
    'group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF9D00]/30 hover:shadow-xl';
  return href ? (
    <Link to={href} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  );
};

const ScopeCard: React.FC<{ point: string; index: number; excludedIndex?: number }> = ({
  point,
  index,
  excludedIndex,
}) => {
  const isExcluded = index === excludedIndex;
  const Icon = isExcluded ? ShieldX : SCOPE_ICONS[index % SCOPE_ICONS.length];
  return (
    <div
      className={`flex gap-4 rounded-[1.75rem] border p-6 ${
        isExcluded ? 'border-slate-200 bg-slate-50' : 'border-orange-100 bg-white shadow-sm'
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          isExcluded ? 'bg-slate-200 text-slate-500' : 'bg-[#FF9D00]/10 text-[#FF9D00]'
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <p className={`text-sm font-bold leading-7 ${isExcluded ? 'text-slate-500' : 'text-slate-800'}`}>{point}</p>
    </div>
  );
};

const BalancedCardRows: React.FC<{
  items: string[];
  renderCard: (item: string, index: number) => React.ReactNode;
}> = ({ items, renderCard }) => {
  if (items.length === 5) {
    return (
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((item, index) => renderCard(item, index))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.666%+0.625rem)]">
          {items.slice(3).map((item, index) => renderCard(item, index + 3))}
        </div>
      </div>
    );
  }

  return <div className="grid gap-5 md:grid-cols-2">{items.map((item, index) => renderCard(item, index))}</div>;
};

const ContactCard: React.FC<{ card: AboutContent['contactCard'] }> = ({ card }) => (
  <div className="rounded-[2rem] bg-slate-900 p-7 text-white shadow-[0_32px_80px_-30px_rgba(15,23,42,0.65)] lg:sticky lg:top-28">
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF9D00]/15 text-[#FF9D00]">
        <ShieldCheck className="h-5 w-5" />
      </div>
      <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#FF9D00]">{card.title}</p>
    </div>

    <div className="mb-6 rounded-2xl border border-[#FF9D00]/25 bg-[#FF9D00]/10 px-5 py-4">
      <p className="serif text-2xl font-black text-[#FF9D00]">18717</p>
      <p className="mt-1 text-sm font-bold text-white/90">{card.license}</p>
      <p className="mt-2 text-[11px] leading-5 text-slate-400">{card.entity}</p>
    </div>

    <p className="mb-6 text-xs leading-6 text-slate-400">{card.scopeNote}</p>

    <div className="space-y-3 border-t border-white/10 pt-5">
      <div className="flex items-start gap-3">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF9D00]" />
        <p className="text-sm font-bold leading-6 text-white/90">{card.address}</p>
      </div>

      {card.phones.map(({ region, numbers }) => (
        <div key={region} className="flex flex-wrap items-center gap-2">
          <Phone className="h-4 w-4 shrink-0 text-[#FF9D00]" />
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">{region}</span>
          {numbers.map((num) => (
            <a
              key={num}
              href={`tel:${num.replace(/\s/g, '')}`}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/90 transition-colors hover:border-[#FF9D00]/40 hover:text-[#FF9D00]"
            >
              {num}
            </a>
          ))}
        </div>
      ))}

      <a
        href={`mailto:${card.email}`}
        className="flex items-center gap-3 text-sm font-bold text-white/90 transition-colors hover:text-[#FF9D00]"
      >
        <Mail className="h-4 w-4 shrink-0 text-[#FF9D00]" />
        {card.email}
      </a>

      <a
        href={`https://${card.web}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 text-sm font-bold text-white/90 transition-colors hover:text-[#FF9D00]"
      >
        <Globe className="h-4 w-4 shrink-0 text-[#FF9D00]" />
        {card.web}
      </a>
    </div>

    <details className="mt-5 border-t border-white/10 pt-4">
      <summary className="cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-[#FF9D00]">
        {card.detailsToggle}
      </summary>
      <div className="mt-4 space-y-3">
        {card.details.map((item) => (
          <div key={item.label}>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
            <p className="text-xs font-bold leading-6 text-slate-300">{item.value}</p>
          </div>
        ))}
      </div>
    </details>
  </div>
);

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const content = aboutContent[language];
  const [pullQuote, ...introRest] = content.intro;

  return (
    <div className="bg-white pt-24">
      <SEO title={t.seo.about.title} description={t.seo.about.description} keywords={t.seo.about.keywords} />

      {/* Hero */}
      <section className="relative min-h-[72vh] overflow-hidden bg-slate-950 text-white md:min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="/img/remote/u-1524231757912-21f4fe3a7200.webp"
            alt="Istanbul skyline"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/[0.88] via-slate-950/[0.55] to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.75] via-transparent to-slate-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,157,0,0.18),transparent_45%)]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-20 md:gap-14 md:pb-24 md:pt-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-orange-300">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>{content.heroBadge}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF9D00]/30 bg-[#FF9D00]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF9D00]">
                TÜRSAB A · 18717
              </div>
            </div>
            <h1 className="serif mb-6 text-[2.5rem] font-black leading-[1.05] tracking-tight [text-wrap:balance] md:text-7xl">
              {content.title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/[0.88] [text-wrap:pretty] md:text-xl md:leading-relaxed">
              {content.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/tours"
                className="inline-flex items-center justify-center rounded-full bg-[#FF9D00] px-8 py-4 text-[12px] font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-orange-500/25 transition-all active:scale-95"
              >
                {content.ctaTours}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-[12px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all hover:bg-white/15"
              >
                {content.ctaContact}
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {content.trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md"
              >
                <p className="serif text-2xl font-black text-[#FF9D00] md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {content.strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-7"
              >
                <h2 className="mb-2 text-lg font-black text-white md:text-xl">{item.title}</h2>
                <p className="text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Promise */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-8">
            {pullQuote && (
              <blockquote className="relative border-l-4 border-[#FF9D00] pl-6 md:pl-8">
                <p className="serif text-2xl font-black leading-snug tracking-tight text-slate-900 md:text-3xl md:leading-snug">
                  {pullQuote}
                </p>
              </blockquote>
            )}
            {introRest.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-600 md:text-lg md:leading-9">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.2)] lg:sticky lg:top-28">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9D00]/10 text-[#FF9D00]">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="serif mb-4 text-2xl font-black text-slate-900">{content.promiseTitle}</h2>
            <p className="mb-6 text-sm leading-7 text-slate-600">{content.promiseLead}</p>
            <div className="space-y-4">
              {content.promisePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF9D00]" />
                  <span className="text-sm font-bold leading-7 text-slate-800">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF9D00]">{content.serviceTitle}</p>
            <h2 className="serif text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{content.strengthTitle}</h2>
          </div>
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.services.slice(0, 3).map((service, index) => (
                <ServiceCard
                  key={service}
                  service={service}
                  index={index}
                  href={content.serviceLinks?.[index]}
                />
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.666%+0.625rem)]">
              {content.services.slice(3).map((service, index) => (
                <ServiceCard
                  key={service}
                  service={service}
                  index={index + 3}
                  href={content.serviceLinks?.[index + 3]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profile + Facts */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF9D00]">{content.profileTitle}</p>
            <h2 className="serif mb-6 text-2xl font-black leading-snug tracking-tight text-slate-900 md:text-3xl md:leading-normal">
              {content.profileLead}
            </h2>
            <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-100 shadow-lg">
              <img
                src="/img/remote/u-1636021597151-cc28dacd915c.webp"
                srcSet="/img/remote/u-1636021597151-cc28dacd915c-768.webp 768w, /img/remote/u-1636021597151-cc28dacd915c-1080.webp 1080w, /img/remote/u-1636021597151-cc28dacd915c.webp 1366w"
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Hagia Sophia, Istanbul"
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              {content.profileBody.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ContactCard card={content.contactCard} />
        </div>
      </section>

      {/* Service scope */}
      <section className="bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF9D00]">{content.recognitionTitle}</p>
            <h2 className="serif text-2xl font-black leading-snug tracking-tight text-slate-900 md:text-3xl md:leading-normal">
              {content.recognitionLead}
            </h2>
          </div>
          <BalancedCardRows
            items={content.recognitionPoints}
            renderCard={(point, index) => (
              <ScopeCard
                key={point}
                point={point}
                index={index}
                excludedIndex={content.recognitionExcludedIndex}
              />
            )}
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-slate-950 px-8 py-14 text-white shadow-[0_40px_90px_-35px_rgba(15,23,42,0.8)] md:py-16"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9D00]/15 text-[#FF9D00]">
            <MapPin className="h-7 w-7" />
          </div>
          <p className="serif mx-auto mb-10 max-w-2xl text-center text-xl font-black leading-relaxed tracking-tight md:text-2xl md:leading-[1.6]">
            {content.closing}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/tours"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#FF9D00] px-8 py-4 text-[12px] font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-orange-500/20 transition-all active:scale-95 sm:w-auto"
            >
              {content.ctaTours}
            </Link>
            <a
              href="tel:+905541366090"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-200 transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-4 w-4 text-[#FF9D00]" />
              <span>+90 554 136 6090</span>
            </a>
            <a
              href="mailto:taha@gracetravel.com.tr"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-200 transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Mail className="h-4 w-4 text-[#FF9D00]" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
