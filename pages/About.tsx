import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Shield, Users, Target, Award, CheckCircle2, MapPin, Phone, Mail, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  const a = t.about;

  if (!a) return null;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop" 
            alt="Istanbul View" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase"
          >
            {a.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-orange-400 font-bold tracking-widest uppercase"
          >
            {a.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-4 border-l-4 border-orange-500 pl-4">
              {a.philosophy.title}
            </h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
              {a.philosophy.content}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12 rounded-3xl border border-slate-100"
          >
            <Target className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">{a.advantage.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              {a.advantage.content}
            </p>
            <ul className="space-y-4">
              {a.advantage.points.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-4">
              {a.team.title}
            </h2>
            <p className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-relaxed">
              {a.team.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.team.list.map((item: string, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <Users className="w-8 h-8 text-orange-500 mb-6" />
                <p className="text-lg font-medium leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center mt-16 text-slate-400 italic">
            {a.team.footer}
          </p>
        </div>
      </section>

      {/* Service Scope */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-4">
            {a.scope.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {a.scope.list.map((item: string, idx: number) => (
            <div key={idx} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
              </div>
              <span className="font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black text-white/80 uppercase tracking-[0.3em] mb-4">
                {a.trust.title}
              </h2>
              <p className="text-3xl font-black mb-8 leading-tight">
                {a.trust.content}
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                {a.trust.details}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
              <Shield className="w-16 h-16 text-white mb-8" />
              <p className="text-2xl font-bold leading-relaxed">
                {a.trust.footer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-32 px-6 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-12">
            "{a.summary.content}"
          </p>
          <div className="inline-block px-12 py-5 bg-slate-900 text-white rounded-full font-black tracking-widest uppercase hover:bg-orange-500 transition-colors cursor-default">
            GRACE WAY TRAVEL AGENCY
          </div>
        </div>
      </section>

      {/* Credentials & Contact */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-8">
              {a.credentials.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {a.credentials.list.map((item: string, idx: number) => {
                const firstColonIndex = item.search(/[:：]/);
                const label = firstColonIndex !== -1 ? item.substring(0, firstColonIndex) : item;
                const value = firstColonIndex !== -1 ? item.substring(firstColonIndex + 1) : '';
                
                return (
                  <div key={idx} className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
                    <p className="text-sm font-bold text-slate-800 whitespace-pre-line leading-relaxed">{value || label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-slate-900 p-10 rounded-3xl text-white">
            <Award className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Official Licensed DMC</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              We are a fully licensed A-Group travel agency operating under the Ministry of Culture and Tourism of the Republic of Turkey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-bold">Bakırköy, İstanbul</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-bold">+90 554 136 6090</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-bold">taha@gracetravel.com.tr</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-bold">grace.tr</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
