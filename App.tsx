import React, { useState } from 'react';
import { translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState('zh');
  const [selectedColor, setSelectedColor] = useState('Green');

  const t = translations[lang] || translations['en'];
  const isRTL = lang === 'ar';

  const languages = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' },
    { code: 'ru', label: 'Русский' },
    { code: 'ar', label: 'العربية' }
  ];

  const colorOptions = [
    { id: 'Green', name: { zh: '森林绿', en: 'Green', ko: '그린' }, hex: '#3d5a5a' },
    { id: 'Silver', name: { zh: '太空银', en: 'Silver', ko: '실버' }, hex: '#c0c0c0' },
    { id: 'White', name: { zh: '珍珠白', en: 'White', ko: '화이트' }, hex: '#f5f5f5' },
    { id: 'Yellow', name: { zh: '活力橙', en: 'Orange', ko: '옐로우' }, hex: '#e67e22' },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen font-sans bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <span className="text-3xl font-black tracking-tighter text-teal-800">XIVA</span>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
              <a href="#features" className="hover:text-teal-600">{t.nav.features}</a>
              <a href="#guide" className="hover:text-teal-600">{t.nav.guide}</a>
              <a href="#specs" className="hover:text-teal-600">{t.nav.specs}</a>
            </div>
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-gray-100 border-none rounded-lg text-xs p-2 focus:ring-2 focus:ring-teal-500"
            >
              {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="relative pt-12 pb-20 lg:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-start">
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-6 inline-block uppercase">{t.hero.badge}</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">{t.hero.title}</h1>
            
            {/* 颜色切换按钮 */}
            <div className="mb-8 flex flex-col items-center lg:items-start">
              <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest text-center">Select Finish / 选择颜色</p>
              <div className="flex gap-4">
                {colorOptions.map((color) => (
                  <button key={color.id} onClick={() => setSelectedColor(color.id)} className="group flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.id ? 'border-teal-600 scale-110 shadow-md' : 'border-transparent hover:border-gray-200'}`} style={{ backgroundColor: color.hex }} />
                    <span className={`text-[10px] font-bold ${selectedColor === color.id ? 'text-teal-800' : 'text-gray-400'}`}>
                      {color.name[lang as keyof typeof color.name] || color.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-10 max-w-xl">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#features" className="px-8 py-4 bg-teal-800 text-white font-bold rounded-2xl hover:bg-teal-900 transition-all text-center">{t.hero.cta}</a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="absolute -inset-4 bg-teal-100 rounded-[3rem] blur-2xl opacity-20"></div>
            {/* 动态切换 P1 图 */}
            <img key={selectedColor} src={`/${selectedColor}_P1.png`} alt="XIVA Grill" className="relative w-full h-auto rounded-[2.5rem] shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95" />
          </div>
        </div>
      </section>

      {/* 详情 Sections 联动 */}
      {t.sections.map((section: any, idx: number) => (
        <section key={section.id} className={`py-20 ${idx % 2 === 1 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12" style={{ flexDirection: (idx % 2 === 1) ? 'row-reverse' : 'row' }}>
            <div className="lg:w-1/2">
              <span className="text-teal-600 font-bold uppercase text-sm">{section.subtitle}</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">{section.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{section.desc}</p>
            </div>
            <div className="lg:w-1/2">
              {/* 动态切换 P2, P3, P4, P5 图 */}
              <img src={`/${selectedColor}_P${idx + 2}.png`} alt={section.title} className="w-full h-auto rounded-[2.5rem] shadow-xl" />
            </div>
          </div>
        </section>
      ))}

      {/* 烹饪指南 */}
      <section id="guide" className="py-20 bg-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t.cookingGuide.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.cookingGuide.items.map((item: any, i: number) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                <p className="text-sm font-medium mb-1">{item.name}</p>
                <p className="text-teal-300 font-black text-xl">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 参数规格 */}
      <section id="specs" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10">{t.specs.title}</h2>
          <div className="space-y-4">
            {Object.values(t.specs).slice(1).map((val: any, i: number) => (
              <div key={i} className="flex justify-between border-b pb-2 text-sm">
                <span className="text-gray-500">{val.split(': ')[0]}</span>
                <span className="font-bold text-gray-900">{val.split(': ')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-500 py-12 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4">© 2024-2026 XIVA Global Technology. All rights reserved.</p>
          <p>Contact: nickchan9836@foxmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
