
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import L from 'leaflet';

// 真实微信图标：双气泡结构 + 圆点眼睛，品牌标准色 #07C160
const WeChatIcon = ({ className = "" }) => (
  <svg className={`${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.352 2C19.742 2 23.3 5.093 23.3 8.907C23.3 10.966 22.259 12.825 20.593 14.137L21.148 16.059L18.926 14.954C17.815 15.402 16.519 15.815 15.352 15.815C15.111 15.815 14.889 15.796 14.667 15.778C14.889 15.222 15.019 14.611 15.019 13.963C15.019 10.815 12.204 8.259 8.722 8.259C8.315 8.259 7.926 8.296 7.537 8.352C8.259 4.704 11.426 2 15.352 2ZM17.167 5.759C16.519 5.759 16.019 6.259 16.019 6.889C16.019 7.519 16.519 8.019 17.167 8.019C17.796 8.019 18.315 7.519 18.315 6.889C18.315 6.259 17.796 5.759 17.167 5.759ZM12.759 5.759C12.111 5.759 11.611 6.259 11.611 6.889C11.611 7.519 12.111 8.019 12.759 8.019C13.407 8.019 13.907 7.519 13.907 6.889C13.907 6.259 13.407 5.759 12.759 5.759ZM8.722 9.537C4.833 9.537 1.704 12.241 1.704 15.537C1.704 17.389 2.593 19.019 4 20.148L3.5 21.889L5.444 20.907C6.389 21.278 7.5 21.537 8.722 21.537C12.611 21.537 15.741 18.833 15.741 15.537C15.741 12.241 12.611 9.537 8.722 9.537ZM10.519 12.611C9.981 12.611 9.556 13.037 9.556 13.574C9.556 14.111 9.981 14.537 10.519 14.537C11.037 14.537 11.481 14.111 11.481 13.574C11.481 13.037 11.037 12.611 10.519 12.611ZM6.926 12.611C6.389 12.611 5.963 13.037 5.963 13.574C5.963 14.111 6.389 14.537 6.926 14.537C7.444 14.537 7.889 14.111 7.889 13.574C7.889 13.037 7.444 12.611 6.926 12.611Z" fill="#07C160"/>
  </svg>
);

// WhatsApp 图标：品牌标准色 #25D366
const WhatsAppIcon = ({ className = "" }) => (
  <svg className={`${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.625 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
  </svg>
);

const EmailIcon = ({ className = "" }) => (
  <svg className={`fill-current ${className}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const MapComponent: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;
    const ISTANBUL_CENTER: [number, number] = [41.0082, 28.9784];
    const initialZoom = window.innerWidth < 768 ? 9 : 10;
    const map = L.map(mapContainerRef.current, {
      center: ISTANBUL_CENTER,
      zoom: initialZoom,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);
    const icon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="marker-pulse"></div>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });
    L.marker([lat, lng], { icon }).addTo(map);
    mapInstanceRef.current = map;
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng]);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[420px] rounded-[16px] overflow-hidden shadow-xl border border-slate-100 z-10 gpu-layer"
    />
  );
};

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  // 指定的联系电话与微信 ID
  const weChatID = "+86 134 2640 1777";
  const tahaPhone = "+86 134 2640 1777";
  const arwenPhone = "+86 181 4463 3364";
  const waLink = "https://wa.me/905064972026";
  
  const lat = 40.979763;
  const lng = 28.872890;

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText(weChatID.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-700">
      <section className="py-12 px-6 max-w-[1440px] mx-auto space-y-16 lg:space-y-24">
        
        {/* 信息卡片区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="flex flex-col space-y-8">
            <div className="mb-6 text-left">
              <span className="text-[#FF9D00] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Bespoke Travel Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black serif text-slate-900 mb-4 tracking-tight leading-tight">
                {t.contact.title}
              </h1>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed font-light max-w-lg">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Taha（大华）卡片 */}
            <div className="p-8 lg:p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 text-left">
               <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-1">Taha（大华）</h3>
                    <p className="text-[10px] font-black text-[#FF9D00] uppercase tracking-widest">{t.contact.licensedSpecialist}</p>
                 </div>
                 <span className="bg-white px-3 py-1 rounded-full text-[8px] font-black border border-slate-200 uppercase text-slate-400">{t.contact.residentTag}</span>
               </div>
               <div className="space-y-4">
                  <div className="group">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1.5">{t.contact.wechatPhone}</p>
                    <a href={`tel:${tahaPhone.replace(/\s/g, '')}`} className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight hover:text-[#FF9D00] transition-colors whitespace-nowrap block">
                      {tahaPhone}
                    </a>
                  </div>
               </div>
            </div>

            {/* Arwen（阿文）卡片 */}
            <div className="p-8 lg:p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 text-left">
               <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-1">Arwen（阿文）</h3>
                    <p className="text-[10px] font-black text-[#FF9D00] uppercase tracking-widest">{t.contact.dmcDirector}</p>
                 </div>
                 <span className="bg-white px-3 py-1 rounded-full text-[8px] font-black border border-slate-200 uppercase text-slate-400">{t.contact.residentTag}</span>
               </div>
               <div className="space-y-4">
                  <div className="group">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1.5">{t.contact.wechatPhone}</p>
                    <a href={`tel:${arwenPhone.replace(/\s/g, '')}`} className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight hover:text-[#FF9D00] transition-colors whitespace-nowrap block">
                      {arwenPhone}
                    </a>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-[0_32px_96px_-15px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col items-center justify-center text-center relative overflow-hidden h-fit">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#FF9D00]"></div>
            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-8">
               <svg className="w-6 h-6 text-[#FF9D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2 2h2v4l.586-.586z" />
               </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight serif uppercase">
               {t.contact.talkToExpert}
            </h2>
            
            {/* 行动入口区域：对等白底描边体系 */}
            <div className="w-full space-y-4 max-w-[320px] mb-12">
               {/* 微信按钮 */}
               <button 
                 onClick={handleCopyWeChat}
                 className="group relative w-full h-14 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 rounded-2xl font-bold tracking-wide text-[13px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2.5 overflow-hidden active:scale-[0.98]"
               >
                 <WeChatIcon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                 <span>{t.contact.chatWeChat}</span>
                 {copied && (
                   <div className="absolute inset-0 bg-slate-900 text-white flex items-center justify-center animate-in fade-in zoom-in duration-200 uppercase font-black text-[10px] tracking-widest">
                     {t.contact.copied}
                   </div>
                 )}
               </button>

               {/* WhatsApp 按钮 */}
               <a 
                 href={waLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group w-full h-14 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 rounded-2xl font-bold tracking-wide text-[13px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2.5 active:scale-[0.98]"
               >
                 <WhatsAppIcon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                 <span>{t.contact.chatWhatsApp}</span>
               </a>
            </div>

            <div className="w-full max-w-[320px] border-t border-slate-100 pt-10">
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 text-center">
                  {t.contact.emailInquiry}
               </div>
               <div className="space-y-8 text-left">
                  <div>
                     <p className="text-[9px] text-slate-400 font-black mb-2 uppercase tracking-widest">{t.contact.bookings}</p>
                     <a href="mailto:bookings@grace.tr" className="text-sm font-black text-slate-900 hover:text-[#FF9D00] transition-colors flex items-center gap-3">
                        <EmailIcon className="w-4 h-4 opacity-40" /> bookings@grace.tr
                     </a>
                  </div>
                  <div>
                     <p className="text-[9px] text-slate-400 font-black mb-2 uppercase tracking-widest">{t.contact.partnerships}</p>
                     <a href="mailto:partners@grace.tr" className="text-sm font-black text-slate-900 hover:text-[#FF9D00] transition-colors flex items-center gap-3">
                        <EmailIcon className="w-4 h-4 opacity-40" /> partners@grace.tr
                     </a>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 地图区域 */}
        <div className="space-y-8 pb-12">
           <div className="relative">
              <MapComponent lat={lat} lng={lng} />
              <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-1000">
                 <div className="w-2 h-2 bg-[#FF9D00] rounded-full animate-pulse shadow-[0_0_8px_rgba(255,157,0,0.6)]"></div>
                 <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">
                   {t.contact.hqLocation}
                 </span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
