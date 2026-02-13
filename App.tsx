import React, { useState } from 'react';
import { translations } from './translations';

const App: React.FC = () => {
  // 状态管理：当前语言与选中颜色
  const [lang, setLang] = useState('ko'); 
  const [selectedColor, setSelectedColor] = useState('Green');

  // 获取当前语言包，若不存在则降级为英文
  const t = translations[lang] || translations['en'];
  const isRTL = lang === 'ar';

  const languages = [
   // { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' },
    { code: 'ru', label: 'Русский' },
    { code: 'ar', label: 'العربية' }
  ];

  // 颜色配置及其对应的十六进制值
  const colorOptions = [
    { id: 'Green', name: { zh: '森林绿', en: 'Forest Green', ko: '포레스트 그린', ja: 'フォレストグリーン', ru: 'Лесной зеленый', ar: 'أخضر غابة' }, hex: '#3d5a5a' },
    { id: 'Silver', name: { zh: '太空银', en: 'Space Silver', ko: '스페이스 실버', ja: 'スペースシルバー', ru: 'Космический серебристый', ar: 'فضي فضاء' }, hex: '#c0c0c0' },
    { id: 'White', name: { zh: '珍珠白', en: 'Pearl White', ko: '펄 화이트', ja: 'パールホワイト', ru: 'Жемчужно-белый', ar: 'أبيض لؤلؤي' }, hex: '#f5f5f5' },
    { id: 'Yellow', name: { zh: '活力橙', en: 'Active Orange', ko: '액티브 오렌지', ja: 'アクティブオレンジ', ru: 'Активный оранжевый', ar: 'برتقالي حيوي' }, hex: '#e67e22' },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen font-sans bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <span className="text-3xl font-black tracking-tighter text-teal-800">XIVA</span>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
              <a href="#features" className="hover:text-teal-600 transition-colors">{t.nav.features}</a>
              <a href="#guide" className="hover:text-teal-600 transition-colors">{t.nav.guide}</a>
              <a href="#specs" className="hover:text-teal-600 transition-colors">{t.nav.specs}</a>
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

      {/* Hero 区域：支持颜色切换大图 */}
      <section className="relative pt-12 pb-20 lg:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-start">
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-6 inline-block uppercase tracking-widest">{t.hero.badge}</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">{t.hero.title}</h1>
            
            {/* 颜色选择器 */}
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Select Finish / Select Color</p>
              <div className="flex gap-4">
                {colorOptions.map((color) => (
                  <button 
                    key={color.id} 
                    onClick={() => setSelectedColor(color.id)} 
                    className="group flex flex-col items-center gap-2"
                  >
                    <div 
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${selectedColor === color.id ? 'border-teal-600 scale-110 shadow-lg' : 'border-transparent hover:border-gray-200'}`} 
                      style={{ backgroundColor: color.hex }} 
                    />
                    <span className={`text-[10px] font-bold ${selectedColor === color.id ? 'text-teal-800' : 'text-gray-400'}`}>
                      {color.name[lang as keyof typeof color.name] || color.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-10 max-w-xl font-light leading-relaxed">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#features" className="px-8 py-4 bg-teal-800 text-white font-bold rounded-2xl hover:bg-teal-900 transition-all text-center">{t.hero.cta}</a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-teal-100 rounded-[3rem] blur-2xl opacity-20"></div>
            {/* 动态加载 P1 图片 */}
            <img 
              key={selectedColor} 
              src={`/${selectedColor}_P1.png`} 
              alt="XIVA Grill" 
              className="relative w-full h-auto rounded-[2.5rem] shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95" 
            />
          </div>
        </div>
      </section>

      {/* 技术细节展示：图片随颜色联动 */}
      {t.sections.map((section: any, idx: number) => (
        <section key={section.id} className={`py-20 ${idx % 2 === 1 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className={`max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">{section.subtitle}</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">{section.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{section.desc}</p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={`/${selectedColor}_P${idx + 2}.png`} 
                alt={section.title} 
                className="w-full h-auto rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all" 
              />
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
