import React, { useState } from 'react';

// --- 1. 将翻译数据直接放在这里，彻底解决 "not defined" 报错 ---
const translations: any = {
  zh: {
    nav: { features: "产品特性", specs: "规格参数", guide: "烹饪指南", buy: "立即购买" },
    hero: {
      badge: "无需翻面，告别油烟",
      title: "XIVA 双面多功能鱼类烧烤机",
      subtitle: "双面加热技术，锁住鲜甜肉汁，外酥内嫩的完美体验。",
      cta: "探索更多"
    },
    mainFeatures: {
      title: "核心优势",
      items: [
        { title: "双面加热", desc: "上下发热管同时加热，无需翻面" },
        { title: "陶瓷过滤", desc: "内置陶瓷过滤网，减少油烟" },
        { title: "透明视窗", desc: "随时观察烹饪状态，不丢失热量" },
        { title: "自动定时", desc: "5-30分钟设定，省心省力" }
      ]
    },
    sections: [
      { id: "s1", num: "01", title: "外酥内嫩，锁住原味", subtitle: "无需担心油烟", desc: "高效循环热量，保持食材水分，烤出诱人色泽。" },
      { id: "s2", num: "02", title: "上下双面加热管", subtitle: "均匀受热", desc: "上下大功率发热管同时启动，极速锁鲜。" },
      { id: "s3", num: "03", title: "专业陶瓷过滤系统", subtitle: "清新厨房", desc: "有效过滤油烟微粒，保持空气清新。" },
      { id: "s4", num: "04", title: "Low-E 高透视窗", subtitle: "全程掌握", desc: "特种低辐射玻璃，安全防烫，清晰可见。" }
    ],
    cookingGuide: {
      title: "快速烹饪指南",
      items: [
        { name: "大虾", time: "10~12分" }, { name: "年糕", time: "5~6分" },
        { name: "比目鱼", time: "15~20分" }, { name: "披萨", time: "12~15分" },
        { name: "秋刀鱼", time: "20~25分" }, { name: "五花肉", time: "12~15分" },
        { name: "青鱼", time: "25~30分" }, { name: "地瓜", time: "20~30分" }
      ]
    },
    specs: {
      title: "产品详细规格",
      model: "型号: KSJ-FG600",
      certification: "安全认证: SU072738-22002",
      power: "额定功率: 220-240V~, 1100W",
      date: "发布日期: 2024年06月",
      size: "尺寸: 480x275x200mm",
      weight: "重量: 4.33kg"
    }
  },
  en: {
    nav: { features: "Features", specs: "Specs", guide: "Guide", buy: "Buy Now" },
    hero: { badge: "No Flipping, No Smoke", title: "XIVA Double-Sided Multi Grill", subtitle: "Advanced double-sided heating technology for a juicy inside and crispy outside.", cta: "Explore More" },
    mainFeatures: { title: "Key Advantages", items: [{ title: "Double-Sided", desc: "Heating from top and bottom simultaneously" }, { title: "Ceramic Filter", desc: "Reduces smoke and odors significantly" }, { title: "Glass Window", desc: "Monitor your cooking without opening the lid" }, { title: "Auto Timer", desc: "5-30 minute settings for perfect timing" }] },
    sections: [
        { id: "s1", num: "01", title: "Crispy & Juicy", subtitle: "No Smoke", desc: "High-efficiency heat circulation maintains moisture." },
        { id: "s2", num: "02", title: "Top & Bottom Heating", subtitle: "Even Heat", desc: "Powerful dual heating elements ensure even cooking." },
        { id: "s3", num: "03", title: "Ceramic Filter", subtitle: "Clean Kitchen", desc: "Effectively captures oil particles." },
        { id: "s4", num: "04", title: "Low-E Glass View", subtitle: "Full Control", desc: "Safety low-emissivity glass allows clear viewing." }
    ],
    cookingGuide: { title: "Quick Cooking Guide", items: [{ name: "Large Shrimp", time: "10~12m" }, { name: "Mackerel", time: "25~30m" }] },
    specs: { title: "Technical Specs", model: "Model: KSJ-FG600", certification: "Cert: SU072738-22002", power: "Power: 1100W", date: "Release: June 2024", size: "Size: 480x275x200mm", weight: "Weight: 4.33kg" }
  },
  ko: {
    nav: { features: "제품 특징", specs: "상세정보", guide: "조리안내", buy: "구매하기" },
    hero: { badge: "뒤집을 필요 없는 간편 조리", title: "XIVA 양면 멀티 생선 그릴", subtitle: "상하 더블 히팅으로 겉은 바삭하고 속은 촉촉하게.", cta: "더 보기" },
    mainFeatures: { title: "주요 특징", items: [{ title: "양면 그릴", desc: "상하 열선으로 뒤집을 필요 없는 조리" }, { title: "세라믹 필터", desc: "냄새와 연기를 잡아주는 세라믹 필터" }, { title: "투명 조리창", desc: "조리 과정을 직접 확인할 수 있는 창" }, { title: "자동 타이머", desc: "5~30분 설정 가능한 간편 타이머" }] },
    sections: [
        { id: "s1", num: "01", title: "바삭하고 촉촉하게", subtitle: "연기 걱정 없음", desc: "고효율 열 순환으로 속까지 완벽하게 익혀줍니다." },
        { id: "s2", num: "02", title: "상하 열선 양면 그릴", subtitle: "균일한 가열", desc: "상하 동시 가열로 열 손실을 줄이고 조리 시간을 단축합니다." },
        { id: "s3", num: "03", title: "세라믹 필터 탑재", subtitle: "쾌적한 주방", desc: "조리 시 발생하는 연기를 최소화하는 반영구 필터입니다." },
        { id: "s4", num: "04", title: "Low-E 글라스 조리창", subtitle: "완벽한 컨트롤", desc: "특수 코팅 유리로 열 효율은 높이고 안전성은 높였습니다." }
    ],
    cookingGuide: { title: "간편 조리 매뉴얼", items: [{ name: "대하", time: "10~12분" }, { name: "고등어", time: "25~30분" }] },
    specs: { title: "제품 상세 정보", model: "KSJ-FG600", certification: "SU072738-22002", power: "1100W", date: "2024.06", size: "480x275x200mm", weight: "4.33kg" }
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState('zh');
  const [selectedColor, setSelectedColor] = useState('Green');

  const t = translations[lang] || translations['en'];
  const isRTL = lang === 'ar';

  const colorOptions = [
    { id: 'Green', name: { zh: '森林绿', en: 'Green', ko: '그린' }, hex: '#3d5a5a' },
    { id: 'Silver', name: { zh: '太空银', en: 'Silver', ko: '실버' }, hex: '#c0c0c0' },
    { id: 'White', name: { zh: '珍珠白', en: 'White', ko: '화이트' }, hex: '#f5f5f5' },
    { id: 'Yellow', name: { zh: '活力橙', en: 'Orange', ko: '옐로우' }, hex: '#e67e22' },
  ];

  const languages = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' }
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen font-sans bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm px-4 h-20 flex justify-between items-center">
        <span className="text-3xl font-black text-teal-800">XIVA</span>
        <div className="flex gap-4">
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-gray-100 rounded-lg text-xs p-2">
            {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
          </select>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <span className="px-4 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">{t.hero.badge}</span>
          <h1 className="text-4xl font-extrabold mt-4 mb-6">{t.hero.title}</h1>
          
          <div className="mb-8">
            <p className="text-xs font-bold text-gray-400 mb-4">选择外观颜色</p>
            <div className="flex gap-4">
              {colorOptions.map(c => (
                <button key={c.id} onClick={() => setSelectedColor(c.id)} className="group flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full border-2 ${selectedColor === c.id ? 'border-teal-600' : 'border-transparent'}`} style={{ backgroundColor: c.hex }} />
                  <span className={`text-[10px] ${selectedColor === c.id ? 'text-teal-800' : 'text-gray-400'}`}>{c.name[lang as keyof typeof c.name] || c.id}</span>
                </button>
              ))}
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">{t.hero.subtitle}</p>
          <button className="bg-teal-800 text-white px-8 py-4 rounded-2xl font-bold">{t.hero.cta}</button>
        </div>
        <div className="flex-1">
          <img key={selectedColor} src={`/${selectedColor}_P1.png`} className="w-full rounded-[2.5rem] shadow-2xl" />
        </div>
      </section>

      {/* 动态介绍区 */}
      {t.sections.map((s: any, i: number) => (
        <section key={s.id} className={`py-20 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className={`max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">{s.title}</h2>
              <p className="text-gray-600">{s.desc}</p>
            </div>
            <div className="flex-1">
              <img src={`/${selectedColor}_P${i + 2}.png`} className="w-full rounded-[2rem] shadow-xl" />
            </div>
          </div>
        </section>
      ))}

      {/* 参数规格 */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-center mb-8">{t.specs.title}</h2>
          <div className="space-y-3">
            {Object.entries(t.specs).map(([key, val]: any) => (
              <div key={key} className="flex justify-between border-b pb-2 text-sm">
                <span className="text-gray-500">{key}</span>
                <span className="font-bold text-gray-900">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-xs">© 2026 XIVA Global Technology.</footer>
    </div>
  );
};

export default App;
