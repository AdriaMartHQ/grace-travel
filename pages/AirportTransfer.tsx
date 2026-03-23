import React, { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, PlaneTakeoff, ShieldCheck, Stars } from 'lucide-react';
import SEO from '../components/SEO';
import TransferBookingForm from '../components/transfer/TransferBookingForm';
import TransferPriceCard from '../components/transfer/TransferPriceCard';
import { useLanguage } from '../context/LanguageContext';
import { popularTransferSuggestions, turkeyAirports } from '../data/turkeyAirports';
import {
  buildTransferEmailUrl,
  buildTransferWhatsAppUrl,
  getTransferQuote,
  type TransferFormValues,
} from '../lib/airportTransfer';

const formatDateTimeValue = (hoursFromNow = 6) => {
  const date = new Date();
  date.setMinutes(0, 0, 0);
  date.setHours(date.getHours() + hoursFromNow);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const AirportTransfer: React.FC = () => {
  const { language } = useLanguage();
  const content =
    language === 'zh'
      ? {
          title: '土耳其机场接送服务',
          subtitle: '私人接送，固定价格 $50 起',
          intro:
            '覆盖伊斯坦布尔、安塔利亚、卡帕多奇亚等热门目的地。提前确认机场、地址与时间，即可快速获取预估报价，并优先通过 Email 提交预约；如你更习惯 WhatsApp，也可一键切换。',
          seoTitle: 'Airport Transfer Turkey | Private Pickup from $50',
          seoDescription:
            'Book reliable airport transfer in Turkey. Istanbul, Antalya, Cappadocia & more. Fixed price from $50.',
          seoKeywords:
            'Turkey airport transfer, Istanbul airport pickup, Antalya transfer, Cappadocia airport transfer, private transfer Turkey',
          startingFrom: '起价',
          supportNote: '当前支持 10 个核心机场，后续可扩展至土耳其 50+ 机场。',
          benefits: ['Fixed price', 'No hidden fees', 'English-speaking driver'],
          airport: '机场',
          address: '接送地址',
          dateTime: '日期时间',
          passengers: '人数',
          contactName: '联系人姓名',
          whatsapp: 'WhatsApp',
          email: 'Email',
          pickup: '机场接机',
          dropoff: '送机到机场',
          hotPlaces: '热门目的地',
          formHint:
            '输入酒店名、景点名或区域名即可估算距离；如路线超过 100km 或地址暂未匹配，将按你选择的联系方式转为人工报价。',
          preferredContact: '优先联系',
          quoteButtonEmail: '邮件获取报价',
          bookButtonEmail: '邮件提交预约',
          quoteButtonWhatsapp: 'WhatsApp 获取报价',
          bookButtonWhatsapp: 'WhatsApp 预约',
          quoteTitle: '实时价格',
          majorAirports: 'Turkey Major Airports',
          noAddress: '填写地址后即可显示预估距离与价格。',
          distance: '距离',
          route: '路线',
          customQuote: 'Custom Quote',
          fixedPrice: 'Fixed price',
          noHiddenFees: 'No hidden fees',
          englishDriver: 'English-speaking driver',
          liveEstimate: '系统会根据机场与目的地实时估算价格。',
          contactToConfirmEmail: '通过 Email 确认',
          contactToConfirmWhatsapp: '通过 WhatsApp 确认',
          readyLabel: '快速确认',
          sectionTitle: '从机场到酒店，一步完成',
          sectionSubtitle:
            '默认 Istanbul Airport（IST），你可以直接切换到 Antalya、Cappadocia、Izmir 等热门机场。',
          noteWhatsapp: '提交后将直接跳转 WhatsApp，并自动带上航班接送信息。',
          noteEmail: '提交后将打开邮件客户端，并自动填入接送机预约内容。',
          channelLabelWhatsapp: 'WhatsApp Direct',
          channelLabelEmail: 'Email Request',
          missingPreferredContact: '请填写你选中的优先联系方式。',
        }
      : language === 'tr'
      ? {
          title: 'Turkiye Havalimani Transferi',
          subtitle: '$50 baslangic fiyatli ozel karsilama ve birakma',
          intro:
            'Istanbul, Antalya ve Kapadokya dahil populer noktalari kapsar. Havalimani, adres ve saati girin; tahmini fiyati aninda gorun ve once Email ile rezervasyon talebi gonderin. Isterseniz WhatsApp\'a da tek tikla gecebilirsiniz.',
          seoTitle: 'Airport Transfer Turkey | Private Pickup from $50',
          seoDescription:
            'Book reliable airport transfer in Turkey. Istanbul, Antalya, Cappadocia & more. Fixed price from $50.',
          seoKeywords:
            'Turkey airport transfer, Istanbul airport pickup, Antalya transfer, Cappadocia airport transfer, private transfer Turkey',
          startingFrom: 'Baslangic',
          supportNote: 'Su an 10 ana havalimani destekleniyor; yapi 50+ Turkiye havalimani icin genislemeye hazir.',
          benefits: ['Fixed price', 'No hidden fees', 'English-speaking driver'],
          airport: 'Havalimani',
          address: 'Adres',
          dateTime: 'Tarih ve Saat',
          passengers: 'Yolcu',
          contactName: 'Iletisim Adi',
          whatsapp: 'WhatsApp',
          email: 'Email',
          pickup: 'Havalimanindan Karsilama',
          dropoff: 'Havalimanina Birakma',
          hotPlaces: 'Populer Noktalar',
          formHint:
            'Otel adi, bolge veya bilinen bir nokta girin. Mesafe 100 km uzerindeyse veya adres eslesmezse sistem sizi sectiginiz iletisim kanalina gore ozel fiyata yonlendirir.',
          preferredContact: 'Tercih Edilen Iletisim',
          quoteButtonEmail: 'Email ile Teklif Al',
          bookButtonEmail: 'Email ile Rezervasyon',
          quoteButtonWhatsapp: 'WhatsApp ile Teklif Al',
          bookButtonWhatsapp: 'WhatsApp ile Rezervasyon',
          quoteTitle: 'Canli Fiyat',
          majorAirports: 'Turkiye Ana Havalimanlari',
          noAddress: 'Adres girildiginde tahmini mesafe ve fiyat gorunur.',
          distance: 'Mesafe',
          route: 'Rota',
          customQuote: 'Ozel Teklif',
          fixedPrice: 'Fixed price',
          noHiddenFees: 'No hidden fees',
          englishDriver: 'English-speaking driver',
          liveEstimate: 'Sistem havalimani ve hedefe gore anlik tahmin uretir.',
          contactToConfirmEmail: 'Email ile netlestirilir',
          contactToConfirmWhatsapp: 'WhatsApp ile netlestirilir',
          readyLabel: 'Hizli Onay',
          sectionTitle: 'Havalimanindan sehre tek akista',
          sectionSubtitle:
            'Varsayilan olarak Istanbul Airport (IST) secilir; Antalya, Kapadokya, Izmir ve diger ana havalimanlarini aninda degistirebilirsiniz.',
          noteWhatsapp: 'Gonderdikten sonra bilgiler otomatik olarak WhatsApp mesajina eklenir.',
          noteEmail: 'Gonderdikten sonra e-posta uygulamasi acilir ve bilgiler otomatik doldurulur.',
          channelLabelWhatsapp: 'WhatsApp Direct',
          channelLabelEmail: 'Email Request',
          missingPreferredContact: 'Lutfen sectiginiz iletisim kanalini doldurun.',
        }
      : {
          title: 'Turkey Airport Transfer',
          subtitle: 'Private pickup & drop-off, fixed price from $50',
          intro:
            'Covering Istanbul, Antalya, Cappadocia, and more. Select the airport, enter the transfer address, see the live estimate, and continue with email first. WhatsApp stays available if you prefer faster chat.',
          seoTitle: 'Airport Transfer Turkey | Private Pickup from $50',
          seoDescription:
            'Book reliable airport transfer in Turkey. Istanbul, Antalya, Cappadocia & more. Fixed price from $50.',
          seoKeywords:
            'Turkey airport transfer, Istanbul airport pickup, Antalya transfer, Cappadocia airport transfer, private transfer Turkey',
          startingFrom: 'Starting from',
          supportNote: '10 major airports are live now, with a structure ready to expand to 50+ airports across Turkey.',
          benefits: ['Fixed price', 'No hidden fees', 'English-speaking driver'],
          airport: 'Airport',
          address: 'Pickup / drop-off address',
          dateTime: 'Date & Time',
          passengers: 'Passengers',
          contactName: 'Contact name',
          whatsapp: 'WhatsApp',
          email: 'Email',
          pickup: 'Airport pickup',
          dropoff: 'Airport drop-off',
          hotPlaces: 'Popular places',
          formHint:
            'Enter a hotel, landmark, or district to estimate the route. If the route is over 100 km or the address is not matched, we will switch to a custom quote in your preferred contact channel.',
          preferredContact: 'Preferred contact',
          quoteButtonEmail: 'Get Quote by Email',
          bookButtonEmail: 'Book by Email',
          quoteButtonWhatsapp: 'Get Quote on WhatsApp',
          bookButtonWhatsapp: 'Book on WhatsApp',
          quoteTitle: 'Live estimate',
          majorAirports: 'Turkey Major Airports',
          noAddress: 'Add an address to see the estimated fare.',
          distance: 'Distance',
          route: 'Route',
          customQuote: 'Custom Quote',
          fixedPrice: 'Fixed price',
          noHiddenFees: 'No hidden fees',
          englishDriver: 'English-speaking driver',
          liveEstimate: 'Your live estimate updates as soon as the route is recognized.',
          contactToConfirmEmail: 'Confirm via email',
          contactToConfirmWhatsapp: 'Confirm via WhatsApp',
          readyLabel: 'Direct request',
          sectionTitle: 'Airport pickup built for fast booking',
          sectionSubtitle:
            'Istanbul Airport (IST) is selected by default, and you can switch instantly to Antalya, Cappadocia, Izmir, and other key airports.',
          noteWhatsapp: 'Submitting opens WhatsApp with the trip details already filled in.',
          noteEmail: 'Submitting opens your email app with the transfer request already prepared.',
          channelLabelWhatsapp: 'WhatsApp Direct',
          channelLabelEmail: 'Email Request',
          missingPreferredContact: 'Please complete the contact method you selected.',
        };

  const [form, setForm] = useState<TransferFormValues>({
    direction: 'pickup',
    airportCode: 'IST',
    address: '',
    dateTime: formatDateTimeValue(),
    passengers: 2,
    contactName: '',
    whatsapp: '',
    email: '',
    preferredContact: 'email',
  });

  const quote = useMemo(
    () => getTransferQuote(form.airportCode, form.address),
    [form.airportCode, form.address],
  );

  const isReadyToBook =
    Boolean(form.address.trim()) &&
    Boolean(form.dateTime) &&
    Boolean(form.contactName.trim()) &&
    Boolean(
      form.preferredContact === 'whatsapp' ? form.whatsapp.trim() : form.email.trim(),
    );
  const submitLabel =
    form.preferredContact === 'email'
      ? isReadyToBook && !quote.is_custom_quote
        ? content.bookButtonEmail
        : content.quoteButtonEmail
      : isReadyToBook && !quote.is_custom_quote
      ? content.bookButtonWhatsapp
      : content.quoteButtonWhatsapp;
  const submitNote =
    form.preferredContact === 'email' ? content.noteEmail : content.noteWhatsapp;
  const submitChannelLabel =
    form.preferredContact === 'email'
      ? content.channelLabelEmail
      : content.channelLabelWhatsapp;
  const contactToConfirm =
    form.preferredContact === 'email'
      ? content.contactToConfirmEmail
      : content.contactToConfirmWhatsapp;

  const handleFieldChange = <Key extends keyof TransferFormValues>(
    field: Key,
    value: TransferFormValues[Key],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isReadyToBook) {
      window.alert(content.missingPreferredContact);
      return;
    }
    const targetUrl =
      form.preferredContact === 'email'
        ? buildTransferEmailUrl({
            form,
            quote,
            language,
          })
        : buildTransferWhatsAppUrl({
            form,
            quote,
            language,
          });

    if (form.preferredContact === 'email') {
      window.location.href = targetUrl;
      return;
    }

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50 pt-24 min-h-screen animate-in fade-in duration-700">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        keywords={content.seoKeywords}
      />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF9D00]">
              <PlaneTakeoff className="h-4 w-4" />
              {content.startingFrom} $50
            </div>
            <h1 className="mt-6 max-w-[12ch] text-[2.4rem] md:text-[4.5rem] font-black leading-[1.02] tracking-tight serif">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed [text-wrap:pretty]">
              {content.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/65 leading-relaxed [text-wrap:pretty]">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {content.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#FF9D00]" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#FF9D00]/10 p-3">
                <Stars className="h-6 w-6 text-[#FF9D00]" />
              </div>
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#FF9D00]">
                  {content.readyLabel}
                </div>
                <h2 className="mt-3 text-2xl font-black text-white serif leading-tight">
                  {content.sectionTitle}
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {content.sectionSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-slate-900/70 p-5 text-white/75">
              <div className="flex items-center gap-3 text-sm font-medium">
                <ShieldCheck className="h-4 w-4 text-[#FF9D00]" />
                {content.supportNote}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <TransferBookingForm
          airports={turkeyAirports}
          values={form}
          suggestions={popularTransferSuggestions}
          labels={{
            airport: content.airport,
            address: content.address,
            dateTime: content.dateTime,
            passengers: content.passengers,
            contactName: content.contactName,
            whatsapp: content.whatsapp,
            email: content.email,
            pickup: content.pickup,
            dropoff: content.dropoff,
            hotPlaces: content.hotPlaces,
            formHint: content.formHint,
            preferredContact: content.preferredContact,
            submitLabel,
          }}
          onFieldChange={handleFieldChange}
          onSuggestionClick={(address) => handleFieldChange('address', address)}
          onSubmit={handleSubmit}
        />

        <TransferPriceCard
          quote={quote}
          labels={{
            quoteTitle: content.quoteTitle,
            startingFrom: content.startingFrom,
            majorAirports: content.majorAirports,
            noAddress: content.noAddress,
            distance: content.distance,
            route: content.route,
            customQuote: content.customQuote,
            fixedPrice: content.fixedPrice,
            noHiddenFees: content.noHiddenFees,
            englishDriver: content.englishDriver,
            liveEstimate: content.liveEstimate,
            contactToConfirm,
          }}
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="rounded-[2.5rem] bg-white px-8 py-8 shadow-sm ring-1 ring-slate-100 md:px-12 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#FF9D00]">
                {submitChannelLabel}
              </div>
              <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
                {submitNote}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (!isReadyToBook) return;
                const targetUrl =
                  form.preferredContact === 'email'
                    ? buildTransferEmailUrl({
                        form,
                        quote,
                        language,
                      })
                    : buildTransferWhatsAppUrl({
                        form,
                        quote,
                        language,
                      });
                if (form.preferredContact === 'email') {
                  window.location.href = targetUrl;
                  return;
                }

                window.open(targetUrl, '_blank', 'noopener,noreferrer');
              }}
              disabled={!isReadyToBook}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-[12px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#FF9D00] disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {submitLabel}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportTransfer;
