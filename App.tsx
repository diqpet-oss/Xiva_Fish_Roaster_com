import React, { useState } from 'react';
// 假设你的类型定义和翻译文件在同级目录
// import { translations } from './translations';
// import { Language, TranslationSet } from './types';

const App: React.FC = () => {
  // 1. 状态管理：语言 & 颜色
  const [lang, setLang] = useState('ko'); // 默认韩语
  const [selectedColor, setSelectedColor] = useState('Green'); // 默认绿色

  // 2. 颜色配置表 (对应图片前缀: Green, Silver, White, Yellow)
  const colorOptions = [
    { id: 'Green', name: { zh: '森林绿', en: 'Forest Green', ko: '포레스트 그린' }, hex: '#3d5a5a' },
    { id: 'Silver', name: { zh: '太空银', en: 'Space Silver', ko: '스페이스 실버' }, hex: '#c0c0c0' },
    { id: 'White', name: { zh: '珍珠白', en: 'Pearl White', ko: '펄 화이트' }, hex: '#f5f5f5' },
    { id: 'Yellow', name: { zh: '活力橙', en: 'Active Orange', ko: '액티브 오렌지' }, hex: '#e67e22' },
  ];

  // 模拟翻译数据结构 (需确保你的 translations 文件包含这些)
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const languages = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' },
    { code: 'ru', label: 'Русский' },
    { code: 'ar', label: 'العربية' }
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen font-sans selection:bg-teal-100 bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
              <span className="text-3xl font-black tracking-tighter text-teal-800">XIVA</span>
              <div className="h-6 w-[2px] bg-gray-200 hidden sm:block mx-4"></div>
              <div className={`hidden md:flex ${isRTL ? 'space-x-reverse' : ''} space-x-8 text-sm font-medium text-gray-600`}>
                <a href="#features" className="hover:text-teal-600 transition-colors">{t.nav.features}</a>
                <a href="#guide" className="hover:text-teal-600 transition-colors">{t.nav.guide}</a>
                <a href="#specs" className="hover:text-teal-600 transition-colors">{t.nav.specs}</a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative group">
                <button className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-all`}>
                  <span>{languages.find(l => l.code === lang)?.label}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden`}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`w-full px-4 py-2.5 ${isRTL ? 'text-right' : 'text-left'} text-xs hover:bg-teal-50 hover:text-teal-700 transition-colors ${lang === l.code ? 'bg-teal-50 text-teal-700 font-bold' : 'text-gray-700'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 首屏展示 (Hero) */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-1/2 h-full bg-teal-50/50 ${isRTL ? 'skew-x-12' : '-skew-x-12'} transform origin-top translate-x-20 -z-10`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-start">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-6 uppercase tracking-widest animate-pulse">
              {t.hero.badge}
            </span>
            <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              {t.hero.title}
            </h1>
            
            {/* 颜色选择器组件 */}
            <div className="mb-10 flex flex-col items-center lg:items-start">
               <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Select Finish / 选择外观</p>
               <div className="flex gap-4">
                 {colorOptions.map((color) => (
                   <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className="group flex flex-col items-center gap-2"
                   >
                     <div 
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        selectedColor === color.id ? 'border-teal-600 scale-110 shadow-lg' : 'border-transparent hover:border-gray-200'
                      }`}
                     >
                        <div className="w-7 h-7 rounded-full shadow-inner" style={{ backgroundColor: color.hex }} />
                     </div>
                     <span className={`text-[10px] font-bold transition-colors ${selectedColor === color.id ? 'text-teal-800' : 'text-gray-400'}`}>
                        {color.name[lang as keyof typeof color.name] || color.name.en}
                     </span>
                   </button>
                 ))}
               </div>
            </div>

            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 ${isRTL ? 'sm:space-x-reverse' : ''} sm:space-x-4 justify-center lg:justify-start`}>
              <a href="#features" className="px-8 py-4 bg-teal-800 text-white font-bold rounded-2xl hover:bg-teal-900 transition-all shadow-xl shadow-teal-900/30 text-center">
                {t.hero.cta}
              </a>
              <button className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-800 font-bold rounded-2xl hover:border-teal-200 transition-all">
                Product Video
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-teal-100 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            {/* 主图根据颜色动态切换 P1 */}
            <img 
              key={selectedColor} // 增加 key 强制重新渲染动画
              src={`/${selectedColor}_P1.png`} 
              alt={`XIVA Grill ${selectedColor}`} 
              className="relative w-full h-auto rounded-[2.5rem] shadow-2xl object-cover transform hover:scale-[1.02] transition-all duration-500 animate-in fade-in zoom-in-95"
            />
          </div>
        </div>
      </section>

      {/* 核心亮点 */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.mainFeatures.title}</h2>
            <div className="h-1 w-20 bg-teal-800 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {t.mainFeatures.items.map((item, idx) => (
              <div key={idx} className={`p-5 lg:p-8 bg-gray-50 rounded-2xl lg:rounded-3xl border border-gray-100 hover:border-teal-500 transition-colors group flex flex-col items-center text-center lg:items-start ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 shadow-sm group-hover:bg-teal-800 group-hover:text-white transition-all">
                  {idx === 0 && <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  {idx === 1 && <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>}
                  {idx === 2 && <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                  {idx === 3 && <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                </div>
                <h3 className="text-sm lg:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[10px] lg:text-sm text-gray-500 leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联动详情页展示 (P2, P3, P4...) */}
      {t.sections.map((section, idx) => (
        <section key={section.id} className={`py-20 ${idx % 2 === 1 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -left-6 lg:-left-10 text-7xl lg:text-9xl font-black text-gray-100/60 z-0">{section.num}</div>
                  <div className="relative z-10">
                    <span className="text-teal-600 font-bold uppercase tracking-widest text-xs lg:text-sm">{section.subtitle}</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      {section.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                {/* 这里的图片逻辑：Green_P2.png, Green_P3.png 等 */}
                <img 
                  src={`/${selectedColor}_P${idx + 2}.png`} 
                  alt={section.title} 
                  className="w-full h-[300px] lg:h-[450px] object-cover rounded-[2.5rem] lg:rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 烹饪指南 */}
      <section id="guide" className="py-20 bg-teal-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.cookingGuide.title}</h2>
            <p className="text-teal-300 font-light italic">Recommended settings for best results</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {t.cookingGuide.items.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center hover:bg-white/20 transition-all cursor-default group">
                <span className="text-sm font-medium mb-2 group-hover:scale-110 transition-transform">{item.name}</span>
                <span className="text-teal-300 font-black text-lg">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 参数表 */}
      <section id="specs" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">{t.specs.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {[
                { label: 'Model', val: t.specs.model.split(': ')[1] },
                { label: 'Certification', val: t.specs.certification.split(': ')[1] },
                { label: 'Power', val: t.specs.power.split(': ')[1] },
                { label: 'Release', val: t.specs.date.split(': ')[1] },
                { label: 'Dimensions', val: t.specs.size.split(': ')[1] },
                { label: 'Weight', val: t.specs.weight.split(': ')[1] }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between py-4 border-b border-gray-200">
                  <span className="text-gray-500 font-medium text-sm">{spec.label}</span>
                  <span className="text-gray-900 font-bold text-sm text-right">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <span className="text-4xl font-black tracking-tighter text-white">XIVA</span>
              <p className="mt-4 max-w-xs leading-relaxed text-sm">
                Empowering kitchens with innovative technology and sleek design since 2024.
              </p>
              <div className="mt-6 flex items-center justify-center md:justify-start text-teal-400 hover:text-teal-300 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:nickchan9836@foxmail.com" className="text-sm font-bold tracking-wider">
                  nickchan9836@foxmail.com
                </a>
              </div>
            </div>
      
            <div className="flex space-x-6">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                <a key={social} href="#" className="hover:text-white transition-colors text-sm font-semibold">{social}</a>
              ))}
            </div>
          </div>
          <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] lg:text-xs">
            <p>&copy; 2024 XIVA Global Technology. All rights reserved.</p>
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Warranty Info</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
