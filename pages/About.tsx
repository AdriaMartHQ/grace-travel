import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Globe, MapPin, Phone } from 'lucide-react';
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
  strengthTitle: string;
  strengths: Array<{ title: string; description: string }>;
  profileTitle: string;
  profileLead: string;
  profileBody: string[];
  factsTitle: string;
  facts: Array<{ label: string; value: string }>;
  recognitionTitle: string;
  recognitionLead: string;
  recognitionPoints: string[];
  closing: string;
};

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
    factsTitle: '资质与联系方式',
    facts: [
      { label: '公司名称', value: 'GRACE TRAVEL TURIZM VE TIC. LTD. STI.' },
      { label: '品牌名称', value: 'GRACE WAY TRAVEL AGENCY / 恩途国际旅行' },
      { label: '旅行社资质', value: 'TÜRSAB A 组旅行社经营许可（Belge No: 18717）' },
      { label: '资质边界', value: 'TÜRSAB 旅行社资质用于旅游接待、目的地管理与相关旅行服务；投资顾问、法律财税咨询等事项需另行确认适格主体或持牌合作方。' },
      { label: '主管部门', value: 'T.C. Kültür ve Turizm Bakanlığı（土耳其文化与旅游部）' },
      { label: '总部', value: 'Bakırköy, İstanbul, Türkiye' },
      { label: '地址', value: 'Zeytinlik Mah. Halkçı Sok. Moda Pasajı No:25/35, Kat:2 / Ofis 35, Bakırköy · İstanbul' },
      { label: '官网', value: 'grace.tr' },
      { label: '电话（TR）', value: '+90 554 136 6090  |  +90 212 570 15 28' },
      { label: '电话（CN）', value: '+86 134 2640 1777' },
      { label: '邮箱', value: 'taha@gracetravel.com.tr' },
    ],
    recognitionTitle: '服务范围边界',
    recognitionLead:
      '以土耳其为主轴，延伸线路只作为旅游产品处理',
    recognitionPoints: [
      '土耳其全境：伊斯坦布尔 · 卡帕多奇亚 · 棉花堡 · 以弗所 · 安塔利亚 · 费特希耶 · 特罗亚 · 伊兹密尔',
      '信仰之旅：启示录七教会（以弗所 · 士每拿 · 别迦摩等）· 保罗足迹 · 卡帕多奇亚洞穴教堂',
      '旅游延伸线路：巴尔干方向与以色列圣地方向，按项目确认资源、风险与交付主体',
      '商务 & 会展：仅展示土耳其本地商务考察、展会接待与 MICE 会奖旅游协助',
      '不在本站承诺范围内：非土耳其本地执行的商务、投资、法律财税或受监管咨询服务',
    ],
    closing:
      '如果你在寻找的，不是”便宜一次”，而是”安心很多次”，那么恩途 Grace Way Travel Agency 值得被认真选择。',
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
    factsTitle: 'Credentials & Public Identification',
    facts: [
      { label: 'Legal entity', value: 'GRACE TRAVEL TURIZM VE TIC. LTD. STI.' },
      { label: 'Brand', value: 'GRACE WAY TRAVEL AGENCY' },
      { label: 'License type', value: 'A Grubu Seyahat Acentasi Isletme Belgesi' },
      { label: 'Scope boundary', value: 'TURSAB licensing supports travel agency, destination management, and tourism services. Investment, legal, tax, and regulated consulting matters require a separately qualified entity or licensed partner.' },
      { label: 'Authority', value: 'T.C. Kultur ve Turizm Bakanligi' },
      { label: 'License no.', value: '18717' },
      { label: 'Website', value: 'https://www.gracetravel.com.tr  |  https://grace.tr' },
      { label: 'Email', value: 'taha@gracetravel.com.tr' },
    ],
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
  },
  tr: {
    heroBadge: 'GRACE WAY TRAVEL AGENCY',
    title: 'Hakkimizda',
    subtitle:
      'Istanbul merkezli, lisansli ve yerel bir seyahat acentesi olarak Cince konusan misafirler ve uluslararasi yolculara hizmet veriyoruz.',
    intro: [
      'Grace Way Travel Agency, Istanbul merkezli yerel bir seyahat acentesidir. Hizmet anlayisimiz netlik, guven ve duzenli operasyon uzerine kuruludur.',
      'Bizce nitelikli seyahat, sadece program yogunlugu degil; misafirin yolculuk boyunca anlasilmasi, rahat etmesi ve guvende hissetmesidir.',
    ],
    promiseTitle: 'Hizmet Standartimiz',
    promiseLead:
      'Yasal uyum, acik surecler ve dikkatli saha uygulamasi ile aile, bireysel, kurumsal ve grup misafirleri icin istikrarli hizmet sunuyoruz.',
    promisePoints: [
      'Ilk iletisimden itibaren Cince destek',
      'Yasal ve yerel kaynaklarla operasyon',
      'Acik beklentiler ve duzenli planlama',
      'Konforlu ve sakin seyahat deneyimi',
    ],
    serviceTitle: 'Temel Hizmetler',
    services: [
      'Ozel ve kisisel seyahat planlama',
      'Cince rehber ve sofor hizmeti',
      'Havalimani transfer ve arac planlama',
      'Aile ve ileri yas misafir odakli programlar',
      'Turkiye icinde is ziyaretleri ve ticari karsilama',
      'Turkiye icinde fuar ve MICE destegi',
    ],
    strengthTitle: 'Neden Grace Way',
    strengths: [
      {
        title: 'Yerelde kalici ekip',
        description: 'Gecici aracilar degil, Turkiye icinde faaliyet gosteren lisansli bir acenteyiz.',
      },
      {
        title: 'Seffaf ve duzenli',
        description: 'Sureclerimiz acik, kaynak yapimiz yasal ve hizmet standardimiz istikrarli sekilde uygulanir.',
      },
      {
        title: 'Nitelikli misafir profili',
        description: 'Ailelerden kurumsal heyetlere kadar farkli ihtiyaclara ayni ciddiyetle yaklasiyoruz.',
      },
    ],
    profileTitle: 'Sirket Profili',
    profileLead:
      'Grace Way Travel Agency, Istanbul merkezli bir destinasyon yonetimi ve seyahat hizmetleri sirketidir.',
    profileBody: [
      'Sirket Turkiye’de yasal olarak kayitlidir ve Kultur ve Turizm Bakanligi onayli A grubu seyahat acentesi lisansina sahiptir.',
      'Hizmet agimiz Istanbul, Kapadokya, Ege kiyilari, Akdeniz bolgesi ve Anadolu’daki onemli destinasyonlari kapsar.',
      'Balkanlar ve Israil yalnizca mevcut seyahat urunlerinin uzantisi olarak degerlendirilir; genis bolgesel danismanlik veya cikis hizmeti taahhudu degildir.',
    ],
    factsTitle: 'Kurumsal Bilgiler',
    facts: [
      { label: 'Sirket unvani', value: 'GRACE TRAVEL TURIZM VE TIC. LTD. STI.' },
      { label: 'Marka', value: 'GRACE WAY TRAVEL AGENCY' },
      { label: 'Belge tipi', value: 'A Grubu Seyahat Acentasi Isletme Belgesi' },
      { label: 'Kapsam siniri', value: 'TURSAB belgesi seyahat acentesi, destinasyon yonetimi ve turizm hizmetlerini kapsar. Yatirim, hukuk, vergi ve duzenlemeye tabi danismanlik konulari icin ayri yetkin kurum veya lisansli ortak gerekir.' },
      { label: 'Yetkili kurum', value: 'T.C. Kultur ve Turizm Bakanligi' },
      { label: 'Belge no', value: '18717' },
      { label: 'Web', value: 'https://www.gracetravel.com.tr  |  https://grace.tr' },
      { label: 'E-posta', value: 'taha@gracetravel.com.tr' },
    ],
    recognitionTitle: 'Hizmet Kapsami Siniri',
    recognitionLead:
      'grace.tr kamu kapsami Turkiye odaklidir; Turkiye disi rotalar sadece seyahat uzantisi olarak degerlendirilir.',
    recognitionPoints: [
      'Yerel lisansli acente kimligi',
      'Turkiye icinde Cince odakli yer hizmetleri ve destinasyon yonetimi',
      'Turkiye geneli hizmet kapsami',
      'Balkanlar ve Israil rotalari proje bazinda teyit edilen seyahat uzantilaridir',
    ],
    closing:
      'Tek seferlik ucuzluk degil, tekrar tekrar guven ariyorsaniz Grace Way Travel Agency dogru tercihtir.',
  },
};

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const content = aboutContent[language];

  return (
    <div className="bg-white pt-24">
      <SEO title={t.seo.about.title} description={t.seo.about.description} keywords={t.seo.about.keywords} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/img/remote/u-1524231757912-21f4fe3a7200.webp"
            alt="Istanbul skyline"
            className="h-full w-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,157,0,0.22),transparent_40%),linear-gradient(135deg,rgba(2,6,23,0.94),rgba(15,23,42,0.92))]"></div>
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-orange-300">
              <span>{content.heroBadge}</span>
            </div>
            <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">{content.title}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200 md:text-2xl">{content.subtitle}</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {content.strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md"
              >
                <h2 className="mb-3 text-xl font-black text-white">{item.title}</h2>
                <p className="text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-7">
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-2xl font-black text-slate-900">{content.promiseTitle}</h2>
            <p className="mb-6 text-sm leading-7 text-slate-600">{content.promiseLead}</p>
            <div className="space-y-4">
              {content.promisePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span className="text-sm font-bold leading-7 text-slate-800">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-orange-500">{content.serviceTitle}</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{content.strengthTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.services.map((service) => (
              <div
                key={service}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-base font-bold leading-8 text-slate-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-orange-500">{content.profileTitle}</p>
            <h2 className="mb-6 text-2xl font-bold leading-snug tracking-tight text-slate-900 md:text-3xl md:leading-normal">{content.profileLead}</h2>
            <div className="space-y-5">
              {content.profileBody.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_32px_80px_-30px_rgba(15,23,42,0.65)]">
            <p className="mb-6 text-[11px] font-black uppercase tracking-[0.28em] text-orange-400">{content.factsTitle}</p>
            <div className="space-y-5">
              {content.facts.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  <p className="text-sm font-bold leading-7 text-white/95">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-orange-500">{content.recognitionTitle}</p>
            <h2 className="mb-5 text-2xl font-bold leading-snug tracking-tight text-slate-900 md:text-3xl md:leading-normal">{content.recognitionLead}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {content.recognitionPoints.map((point) => (
              <div key={point} className="flex gap-4 rounded-[1.75rem] border border-orange-100 bg-white p-6">
                <p className="text-sm font-bold leading-7 text-slate-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:py-24 text-center">
        <div className="rounded-[2.5rem] bg-slate-950 px-8 py-16 text-white shadow-[0_40px_90px_-35px_rgba(15,23,42,0.8)]">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
            <MapPin className="h-7 w-7" />
          </div>
          <p className="mx-auto mb-10 max-w-2xl text-xl font-bold leading-loose tracking-tight md:text-2xl md:leading-[1.7]">{content.closing}</p>
          <div className="flex flex-col items-center justify-center gap-4 text-sm font-black uppercase tracking-[0.18em] text-slate-300 md:flex-row">
            <a href="tel:+905541366090" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 transition-colors hover:bg-white/10">
              <Phone className="h-4 w-4 text-orange-400" />
              <span>+90 554 136 6090</span>
            </a>
            <a href="https://grace.tr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 transition-colors hover:bg-white/10">
              <Globe className="h-4 w-4 text-orange-400" />
              <span>grace.tr</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
