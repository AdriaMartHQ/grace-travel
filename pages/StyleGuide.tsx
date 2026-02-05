
import React from 'react';

const StyleGuide: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <h1 className="text-5xl font-bold serif mb-12 border-b border-slate-100 pb-8">Design Style Guide</h1>
      
      {/* Colors */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-400 text-sm">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="h-24 bg-blue-900 rounded-2xl shadow-inner"></div>
            <p className="font-bold text-sm">Grace Blue</p>
            <p className="text-xs text-slate-400">#0F172A</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-[#d4af37] rounded-2xl shadow-inner"></div>
            <p className="font-bold text-sm">Boutique Gold</p>
            <p className="text-xs text-slate-400">#D4AF37</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-slate-50 rounded-2xl shadow-inner border border-slate-100"></div>
            <p className="font-bold text-sm">Silk Cream</p>
            <p className="text-xs text-slate-400">#F8FAFC</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-slate-900 rounded-2xl shadow-inner"></div>
            <p className="font-bold text-sm">Deep Slate</p>
            <p className="text-xs text-slate-400">#0F172A</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-400 text-sm">Typography</h2>
        <div className="space-y-12">
          <div>
            <p className="text-xs text-[#d4af37] font-bold uppercase tracking-widest mb-4">Heading Serif (Playfair Display)</p>
            <h1 className="text-6xl serif text-slate-900">The Quick Brown Fox</h1>
          </div>
          <div>
            <p className="text-xs text-[#d4af37] font-bold uppercase tracking-widest mb-4">Body Sans (Inter)</p>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
              Turkey is a nation straddling eastern Europe and western Asia with cultural connections to ancient Greek, Persian, Roman, Byzantine and Ottoman empires.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-400 text-sm">Interactive Elements</h2>
        <div className="flex flex-wrap gap-6 items-center">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-900/20">Primary Button</button>
          <button className="bg-[#d4af37] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-gold-500/20">Accent Button</button>
          <button className="border-2 border-slate-200 text-slate-800 px-8 py-3 rounded-full font-bold hover:bg-slate-50">Outline Button</button>
          <button className="text-blue-900 font-bold underline">Text Link Button</button>
        </div>
      </section>

      {/* Forms */}
      <section>
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-400 text-sm">Form Inputs</h2>
        <div className="max-w-md space-y-6">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Text Input</label>
            <input type="text" placeholder="Placeholder text" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Dropdown Select</label>
            <select className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all appearance-none">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;
