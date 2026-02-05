
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage, t } = useLanguage();

  // Scroll lock implementation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[420px] max-h-[86vh] bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 border border-white/5">
        
        {/* Fixed Header */}
        <div className="sticky top-0 z-20 h-14 flex items-center justify-between px-6 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
          <div className="w-10"></div> {/* Spacer */}
          <h2 className="text-[13px] font-black uppercase tracking-[0.3em] text-white/80">
            {language === 'zh' ? '门票体验' : language === 'tr' ? 'BİLET DENEYİMİ' : 'TICKET EXPERIENCE'}
          </h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 -mr-2 flex items-center justify-center text-white/40 hover:text-white transition-colors active:scale-90"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto overflow-x-hidden relative">
          
          {/* Background Image with optimized Gradients */}
          <div className="absolute inset-0 z-0 h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80" 
              alt="Bosphorus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/80 to-slate-900"></div>
          </div>

          <div className="relative z-10 p-6 pt-4 flex flex-col">
            
            {/* Language Segmented Control */}
            <div className="flex justify-center mb-10">
              <div className="bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 flex gap-1 h-9">
                {(['en', 'zh', 'tr'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-4 h-full rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                      language === lang 
                        ? 'bg-[#FF9D00] text-white shadow-lg' 
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Section */}
            <div className="text-center mb-12">
              <h1 className="text-[clamp(22px,6.5vw,32px)] font-black text-white mb-6 leading-[1.15] serif tracking-tight line-clamp-2">
                {t.hero.title}
              </h1>
              <p className="text-[14.5px] text-white/90 font-light leading-relaxed tracking-wide italic line-clamp-4 max-w-[320px] mx-auto">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 mt-auto pb-6">
              <button 
                onClick={onClose} // Typically links to /tours in a real app
                className="h-14 bg-[#FF9D00] hover:bg-[#FF8A00] text-white rounded-full text-base font-black uppercase tracking-[0.2em] transition-all transform active:scale-[0.98] shadow-xl shadow-orange-500/20"
              >
                {t.hero.cta1}
              </button>
              <button 
                onClick={onClose} // Typically links to /contact
                className="h-14 bg-white/5 border border-white/20 hover:bg-white/10 text-white rounded-full text-base font-black uppercase tracking-[0.2em] transition-all backdrop-blur-sm"
              >
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>

        {/* Safe Area Inset Bottom */}
        <div className="h-[env(safe-area-inset-bottom)] bg-slate-900"></div>
      </div>
    </div>
  );
};

export default TicketModal;
