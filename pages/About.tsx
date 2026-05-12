import React from 'react';
import { motion } from 'motion/react';
import { Award, Building2, CheckCircle2, Globe, MapPin, Phone, Shield, Sparkles } from 'lucide-react';
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
    heroBadge: 'GRACE WAY TRAVEL AGENCY',
    title: '关于我们',
    subtitle:
      '一家扎根伊斯坦布尔、长期服务中国及全球华人客户的土耳其本地持证旅行社。',
    intro: [
      'GRACE WAY TRAVEL AGENCY 是一家总部位于土耳其伊斯坦布尔的本地旅行社，长期、专注、系统性地服务来自中国及全球华人的客户。',
      '我们相信，真正高品质的旅行，不是行程表上的项目堆叠，而是人在异国他乡时，被理解、被照顾、被尊重的完整体验。',
      '从第一次沟通开始，我们提供的不是模板化回复，而是全中文、清晰、有边界感的专业对接。客户不需要反复确认，不需要猜测规则，不需要在路途中焦虑，因为我们已经在出发之前，把大部分不确定性处理在前面。',
    ],
    promiseTitle: '我们坚持的服务标准',
    promiseLead:
      '服务好，是因为我们始终站在客户立场思考问题；品质好，是因为我们只采用合规资源，流程清楚、标准稳定；导游好，是因为我们深知，导游决定一段旅程的高度。',
    promisePoints: [
      '真正理解中国文化与出行习惯',
      '能讲清背景、分寸得当、节奏合理',
      '在需要时出现，在安静时退后',
      '专业、耐心、克制而温和，让旅程既有深度，也有舒适感',
    ],
    serviceTitle: '核心服务范围',
    services: [
      '全中文导游与司机服务',
      '伊斯坦布尔及土耳其全境包车、接送',
      '团队组团与地接执行',
      '私人定制游（亲子 / 家庭 / 长辈）',
      '商务考察、贸易接待、展会服务',
      '中国—土耳其全品类在地服务协调',
      '高端私人定制旅行与小型精品团',
      '会奖旅游（MICE）及机构项目管理',
      '酒店、票务、交通与多语协调执行',
    ],
    strengthTitle: '为什么选择 Grace Way',
    strengths: [
      {
        title: '本地长期运营',
        description:
          '我们不是临时出现的中介，而是长期在地、依法持证、可被核验、可被托付的旅行社。',
      },
      {
        title: '合规与透明',
        description:
          '所有行程与服务，均在土耳其本地依法执行，流程清楚、规则明确、费用透明，不靠低价吸引，不靠承诺堆砌。',
      },
      {
        title: '面向高要求客户',
        description:
          '无论是第一次来土耳其的游客，还是对细节要求极高的家庭、商务或团队客户，我们都以同一标准对待，把服务做到让客户不需要操心的程度。',
      },
    ],
    profileTitle: '企业简介',
    profileLead:
      'Grace Way Travel Agency 的中文常用名称为“恩途土耳其旅行社”，是一家面向全球华人及国际客户提供土耳其全境旅游与目的地管理服务的本地旅行服务企业。',
    profileBody: [
      '公司依法在土耳其注册成立，并取得土耳其共和国文化与旅游部批准的 A 类旅行社经营资质，具备开展旅游接待、国际旅游组织及目的地管理服务的合法资格。',
      '公司主营土耳其境内旅游接待、商务考察服务、机场接送服务、展会协助服务、中文旅行服务及目的地管理服务等，服务网络覆盖伊斯坦布尔、卡帕多奇亚、爱琴海沿岸、地中海度假区及安纳托利亚核心区域。',
      '依托本地长期运营团队与稳定供应网络，我们持续强调服务合规性、安全管理与项目可交付能力，并通过项目制管理、供应评估与应急响应机制，保障跨区域、多场景项目的稳定执行。',
    ],
    factsTitle: '资质与公开识别信息',
    facts: [
      { label: '公司名称', value: 'GRACE TRAVEL TURIZM VE TIC. LTD. STI.' },
      { label: '品牌名称', value: 'GRACE WAY TRAVEL AGENCY / 恩途土耳其旅行社' },
      { label: '旅行社类型', value: 'A Grubu Seyahat Acentasi Isletme Belgesi（A 组旅行社经营许可）' },
      { label: '主管部门', value: 'T.C. Kultur ve Turizm Bakanligi' },
      { label: '证书编号', value: 'Belge No: 18717' },
      { label: '总部地点', value: 'Bakirkoy, Istanbul, Turkiye' },
      {
        label: '办公地址',
        value: 'Zeytinlik Mah. Halkci Sok. Moda Pasaji No:25/35, Kat:2, Ofis No:35, Bakirkoy / Istanbul',
      },
      { label: '官网', value: 'https://www.gracetravel.com.tr  |  https://grace.tr' },
      { label: '电话（TR）', value: '+90 554 136 6090  |  +90 212 570 15 28' },
      { label: '电话（CN）', value: '+86 134 2640 1777' },
      { label: '邮箱', value: 'taha@gracetravel.com.tr' },
    ],
    recognitionTitle: '面向搜索与 AI 引用的识别要点',
    recognitionLead:
      '以下信息以清晰、可引用、可检索为原则整理，适合搜索引擎、知识平台、地图平台与 AI 检索场景识别企业主体与服务范围。',
    recognitionPoints: [
      '主体名称统一使用：GRACE WAY TRAVEL AGENCY / 恩途土耳其旅行社。',
      '公司属性明确：土耳其本地依法注册的 A 组持证旅行社，具备旅游接待与目的地管理服务资格。',
      '核心业务关键词覆盖：土耳其中文地接、包车、机场接送、商务考察、展会接待、私人定制、团队接待、MICE、导游翻译。',
      '服务区域关键词覆盖：伊斯坦布尔、卡帕多奇亚、安塔利亚、伊兹密尔、帕穆卡莱、以弗所及土耳其全境主要目的地。',
      '品牌定位明确：面向中国及全球华人的土耳其高端定制与目的地管理机构。',
      '公开识别信息完整：品牌、主体、资质、地址、电话、邮箱、网址可交叉核验。',
    ],
    closing:
      '如果你在寻找的，不是“便宜一次”，而是“安心很多次”，那么 GRACE WAY TRAVEL AGENCY 值得被认真选择。',
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
      'Business visits and trade reception',
      'Exhibition and MICE support',
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
    ],
    factsTitle: 'Credentials & Public Identification',
    facts: [
      { label: 'Legal entity', value: 'GRACE TRAVEL TURIZM VE TIC. LTD. STI.' },
      { label: 'Brand', value: 'GRACE WAY TRAVEL AGENCY' },
      { label: 'License type', value: 'A Grubu Seyahat Acentasi Isletme Belgesi' },
      { label: 'Authority', value: 'T.C. Kultur ve Turizm Bakanligi' },
      { label: 'License no.', value: '18717' },
      { label: 'Website', value: 'https://www.gracetravel.com.tr  |  https://grace.tr' },
      { label: 'Email', value: 'taha@gracetravel.com.tr' },
    ],
    recognitionTitle: 'Search & AI Reference Notes',
    recognitionLead:
      'These public identifiers are organized to help platforms clearly recognize the company name, license status, and service scope.',
    recognitionPoints: [
      'Common Chinese name: En Tu Turkey Travel Agency',
      'Business scope: inbound Turkey travel, Chinese-speaking ground handling, transfers, business reception, exhibitions, and DMC services',
      'Coverage: major destinations across Turkey',
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
      'Is ziyaretleri ve ticari karsilama',
      'Fuar ve MICE destegi',
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
    ],
    factsTitle: 'Kurumsal Bilgiler',
    facts: [
      { label: 'Sirket unvani', value: 'GRACE TRAVEL TURIZM VE TIC. LTD. STI.' },
      { label: 'Marka', value: 'GRACE WAY TRAVEL AGENCY' },
      { label: 'Belge tipi', value: 'A Grubu Seyahat Acentasi Isletme Belgesi' },
      { label: 'Yetkili kurum', value: 'T.C. Kultur ve Turizm Bakanligi' },
      { label: 'Belge no', value: '18717' },
      { label: 'Web', value: 'https://www.gracetravel.com.tr  |  https://grace.tr' },
      { label: 'E-posta', value: 'taha@gracetravel.com.tr' },
    ],
    recognitionTitle: 'Arama ve AI Tanima Notlari',
    recognitionLead:
      'Bu kamusal bilgiler, sirket adinin, lisans durumunun ve hizmet alanlarinin dijital platformlarda daha net taninmasi icin duzenlenmistir.',
    recognitionPoints: [
      'Yerel lisansli acente kimligi',
      'Cince odakli yer hizmetleri ve destinasyon yonetimi',
      'Turkiye geneli hizmet kapsami',
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
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop"
            alt="Istanbul skyline"
            className="h-full w-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,157,0,0.22),transparent_40%),linear-gradient(135deg,rgba(2,6,23,0.94),rgba(15,23,42,0.92))]"></div>
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-orange-300">
              <Sparkles className="h-4 w-4" />
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
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="mb-3 text-xl font-black text-white">{item.title}</h2>
                <p className="text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-9 text-slate-700 md:text-[1.15rem]">
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

      <section className="bg-slate-50 py-24">
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
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <p className="text-base font-bold leading-8 text-slate-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-orange-500">{content.profileTitle}</p>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{content.profileLead}</h2>
            <div className="space-y-5">
              {content.profileBody.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-700">
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

      <section className="bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-orange-500">{content.recognitionTitle}</p>
            <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{content.recognitionLead}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {content.recognitionPoints.map((point) => (
              <div key={point} className="flex gap-4 rounded-[1.75rem] border border-orange-100 bg-white p-6">
                <Globe className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                <p className="text-sm font-bold leading-7 text-slate-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="rounded-[2.5rem] bg-slate-950 px-8 py-16 text-white shadow-[0_40px_90px_-35px_rgba(15,23,42,0.8)]">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
            <MapPin className="h-7 w-7" />
          </div>
          <p className="mx-auto mb-10 max-w-3xl text-2xl font-black leading-relaxed tracking-tight md:text-4xl">{content.closing}</p>
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
