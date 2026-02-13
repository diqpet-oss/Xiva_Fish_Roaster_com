
import { Translations } from './types';

// 导出完整的翻译对象
export const translations: any = {
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
        { name: "大虾", time: "10~12分" },
        { name: "年糕", time: "5~6分" },
        { name: "比目鱼", time: "15~20分" },
        { name: "披萨", time: "12~15分" },
        { name: "秋刀鱼", time: "20~25分" },
        { name: "五花肉", time: "12~15分" },
        { name: "青鱼", time: "25~30分" },
        { name: "地瓜", time: "20~30分" }
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
    hero: {
      badge: "No Flipping, No Smoke",
      title: "XIVA Double-Sided Multi Grill",
      subtitle: "Advanced double-sided heating technology for a juicy inside and crispy outside.",
      cta: "Explore More"
    },
    mainFeatures: {
      title: "Key Advantages",
      items: [
        { title: "Double-Sided", desc: "Heating from top and bottom simultaneously" },
        { title: "Ceramic Filter", desc: "Reduces smoke and odors significantly" },
        { title: "Glass Window", desc: "Monitor your cooking without opening the lid" },
        { title: "Auto Timer", desc: "5-30 minute settings for perfect timing" }
      ]
    },
    sections: [
      { id: "s1", num: "01", title: "Crispy & Juicy", subtitle: "No Smoke Worry", desc: "High-efficiency heat circulation maintains moisture while browning the surface." },
      { id: "s2", num: "02", title: "Top & Bottom Heating", subtitle: "Even Heat", desc: "Powerful dual heating elements ensure even cooking for both sides." },
      { id: "s3", num: "03", title: "Ceramic Filter System", subtitle: "Clean Kitchen", desc: "Effectively captures oil particles and minimizes smoke." },
      { id: "s4", num: "04", title: "Low-E Glass View", subtitle: "Full Control", desc: "Safety low-emissivity glass allows clear viewing without heat loss." }
    ],
    cookingGuide: {
      title: "Quick Cooking Guide",
      items: [
        { name: "Large Shrimp", time: "10~12m" },
        { name: "Rice Cake", time: "5~6m" },
        { name: "Flatfish", time: "15~20m" },
        { name: "Pizza", time: "12~15m" },
        { name: "Mackerel Pike", time: "20~25m" },
        { name: "Pork Belly", time: "12~15m" },
        { name: "Mackerel", time: "25~30m" },
        { name: "Sweet Potato", time: "20~30m" }
      ]
    },
    specs: {
      title: "Technical Specs",
      model: "Model: KSJ-FG600",
      certification: "Cert: SU072738-22002",
      power: "Power: 220-240V~, 1100W",
      date: "Release: June 2024",
      size: "Size: 480x275x200mm",
      weight: "Weight: 4.33kg"
    }
  },
  ko: {
    nav: { features: "특징", specs: "상세정보", guide: "조리안내", buy: "구매하기" },
    hero: {
      badge: "뒤집을 필요 없는 간편 조리",
      title: "XIVA 양면 멀티 생선 그릴",
      subtitle: "상하 더블 히팅으로 겉은 바삭하고 속은 촉촉하게.",
      cta: "더 보기"
    },
    mainFeatures: {
      title: "주요 특징",
      items: [
        { title: "양면 그릴", desc: "상하 열선으로 뒤집을 필요 없는 조리" },
        { title: "세라믹 필터", desc: "냄새와 연기를 잡아주는 세라믹 필터" },
        { title: "투명 조리창", desc: "조리 과정을 직접 확인할 수 있는 창" },
        { title: "자동 타이머", desc: "5~30분 설정 가능한 간편 타이머" }
      ]
    },
    sections: [
      { id: "s1", num: "01", title: "바삭하고 촉촉하게", subtitle: "연기 걱정 없음", desc: "고효율 열 순환으로 속까지 완벽하게 익혀줍니다." },
      { id: "s2", num: "02", title: "상하 열선 양면 그릴", subtitle: "균일한 가열", desc: "상하 동시 가열로 열 손실을 줄이고 조리 시간을 단축합니다." },
      { id: "s3", num: "03", title: "세라믹 필터 탑재", subtitle: "쾌적한 주방", desc: "조리 시 발생하는 연기를 최소화하는 반영구 필터입니다." },
      { id: "s4", num: "04", title: "Low-E 글라스 조리창", subtitle: "완벽한 컨트롤", desc: "특수 코팅 유리로 열 효율은 높이고 안전성은 높였습니다." }
    ],
    cookingGuide: {
      title: "간편 조리 매뉴얼",
      items: [
        { name: "대하", time: "10~12분" },
        { name: "떡", time: "5~6분" },
        { name: "가자미", time: "15~20분" },
        { name: "피자", time: "12~15분" },
        { name: "꽁치", time: "20~25분" },
        { name: "삼겹살", time: "12~15분" },
        { name: "고등어", time: "25~30분" },
        { name: "고구마", time: "20~30분" }
      ]
    },
    specs: {
      title: "제품 상세 정보",
      model: "모델명: KSJ-FG600",
      certification: "인증번호: SU072738-22002",
      power: "소비전력: 220-240V~, 1100W",
      date: "출시일: 2024년 06월",
      size: "크기: 480x275x200mm",
      weight: "중량: 4.33kg"
    }
  },
  ja: {
    nav: { features: "特徴", specs: "スペック", guide: "ガイド", buy: "購入" },
    hero: {
      badge: "裏返し不要、煙をカット",
      title: "XIVA 両面マルチフィッシュグリル",
      subtitle: "上下同時加熱で、外はカリッと、中はジューシーに仕上げます。",
      cta: "詳細を見る"
    },
    mainFeatures: {
      title: "主な特徴",
      items: [
        { title: "両面グリル", desc: "上下ヒーターで裏返しなしの簡単調理" },
        { title: "セラミック", desc: "煙とニオイを抑えるセラミックフィルター" },
        { title: "確認窓", desc: "蓋を開けずに調理状態を確認可能" },
        { title: "タイマー", desc: "5〜30分の設定が可能なオートタイマー" }
      ]
    },
    sections: [
      { id: "s1", num: "01", title: "外はパリッと、中はふわっと", subtitle: "煙の心配なし", desc: "素材の水分を逃さず、本来の味を引き出します。" },
      { id: "s2", num: "02", title: "上下ダブルヒーター", subtitle: "均一な加热", desc: "上下からの強力熱線で、均一に焼き上げます。" },
      { id: "s3", num: "03", title: "セラミックフィルター", subtitle: "クリーン設計", desc: "キッチンを汚さず、快適に調理を楽しめます。" },
      { id: "s4", num: "04", title: "Low-E ガラス窓", subtitle: "自由なコントロール", desc: "断熱性に優れた低放射ガラスを採用し、安全性を向上。" }
    ],
    cookingGuide: {
      title: "クイック調理ガイド",
      items: [
        { name: "エビ", time: "10~12分" },
        { name: "餅", time: "5~6分" },
        { name: "カレイ", time: "15~20分" },
        { name: "ピザ", time: "12~15分" },
        { name: "サンマ", time: "20~25分" },
        { name: "豚バラ", time: "12~15分" },
        { name: "サバ", time: "25~30分" },
        { name: "サツマイモ", time: "20~30分" }
      ]
    },
    specs: {
      title: "製品仕様",
      model: "モデル: KSJ-FG600",
      certification: "認証番号: SU072738-22002",
      power: "消費電力: 220-240V~, 1100W",
      date: "発売日: 2024年06月",
      size: "サイズ: 480x275x200mm",
      weight: "重量: 4.33kg"
    }
  },
  ru: {
    nav: { features: "Особенности", specs: "Характеристики", guide: "Рецепты", buy: "Купить" },
    hero: {
      badge: "Без переворачивания, без дыма",
      title: "Мультигриль XIVA с двусторонним нагревом",
      subtitle: "Технология двустороннего нагрева для сочности внутри и хрустящей корочки снаружи.",
      cta: "Узнать больше"
    },
    mainFeatures: {
      title: "Ключевые преимущества",
      items: [
        { title: "Двусторонний", desc: "Одновременный нагрев сверху и снизу" },
        { title: "Керамический фильтр", desc: "Значительно уменьшает количество дыма и запахов" },
        { title: "Стеклянное окно", desc: "Следите за готовкой, не открывая крышку" },
        { title: "Автотаймер", desc: "Настройка на 5-30 минут для идеального результата" }
      ]
    },
    sections: [
      { id: "s1", num: "01", title: "Хрустящий и сочный", subtitle: "Без дыма", desc: "Высокоэффективная циркуляция тепла сохраняет влагу, подрумянивая поверхность." },
      { id: "s2", num: "02", title: "Верхний и нижний нагрев", subtitle: "Равномерный нагрев", desc: "Мощные двойные нагревательные элементы обеспечивают равномерное приготовление." },
      { id: "s3", num: "03", title: "Керамический фильтр", subtitle: "Чистая кухня", desc: "Эффективно улавливает частицы масла и минимизирует дым." },
      { id: "s4", num: "04", title: "Окно из Low-E стекла", subtitle: "Полный контроль", desc: "Безопасное низкоэмиссионное стекло обеспечивает четкий обзор." }
    ],
    cookingGuide: {
      title: "Краткое руководство",
      items: [
        { name: "Креветки", time: "10~12 мин" },
        { name: "Рисовые коржи", time: "5~6 мин" },
        { name: "Камбала", time: "15~20 мин" },
        { name: "Пицца", time: "12~15 мин" },
        { name: "Сайра", time: "20~25 мин" },
        { name: "Свинина", time: "12~15 мин" },
        { name: "Скумбрия", time: "25~30 мин" },
        { name: "Батат", time: "20~30 мин" }
      ]
    },
    specs: {
      title: "Технические характеристики",
      model: "Модель: KSJ-FG600",
      certification: "Сертификат: SU072738-22002",
      power: "Мощность: 220-240V~, 1100W",
      date: "Выпуск: Июнь 2024",
      size: "Размер: 480x275x200 мм",
      weight: "Вес: 4.33 кг"
    }
  },
  ar: {
    nav: { features: "المميزات", specs: "المواصفات", guide: "دليل الطهي", buy: "اشتري الآن" },
    hero: {
      badge: "بدون تقليب، بدون دخان",
      title: "شواية XIVA المتعددة ذات الوجهين",
      subtitle: "تكنولوجيا التسخين المزدوج المتقدمة للحصول على طعام طري من الداخل ومقرمش من الخارج.",
      cta: "استكشف المميزات"
    },
    mainFeatures: {
      title: "المزايا الرئيسية",
      items: [
        { title: "تسخين مزدوج", desc: "تسخين من الأعلى والأسفل في وقت واحد" },
        { title: "فلتر سيراميك", desc: "يقلل الدخان والروائح بشكل كبير" },
        { title: "نافذة زجاجية", desc: "راقب الطهي دون فتح الغطاء" },
        { title: "مؤقت تلقائي", desc: "ضبط الوقت بين 5-30 دقيقة لنتائج مثالية" }
      ]
    },
    sections: [
      { id: "s1", num: "01", title: "مقرمش وطري", subtitle: "لا داعي للقلق من الدخان", desc: "دوران حراري عالي الكفاءة يحافظ على الرطوبة مع تحمير السطح." },
      { id: "s2", num: "02", title: "تسخين علوي وسفلي", subtitle: "تسخين متساوٍ", desc: "تضمن عناصر التسخين المزدوجة القوية طهياً متساوياً لكلا الجانبين." },
      { id: "s3", num: "03", title: "نظام فلتر السيراميك", subtitle: "مطبخ نظيف", desc: "يلتقط جزيئات الزيت بفعالية ويقلل من الدخان." },
      { id: "s4", num: "04", title: "زجاج Low-E للرؤية", subtitle: "تحكم كامل", desc: "زجاج منخفض الانبعاثية يسمح برؤية واضحة دون فقدان الحرارة." }
    ],
    cookingGuide: {
      title: "دليل الطهي السريع",
      items: [
        { name: "جمبري", time: "10~12 دقيقة" },
        { name: "كعك الأرز", time: "5~6 دقيقة" },
        { name: "سمك مفلطح", time: "15~20 دقيقة" },
        { name: "بيتزا", time: "12~15 دقيقة" },
        { name: "سمك صوري", time: "20~25 دقيقة" },
        { name: "لحم الخنزير", time: "12~15 دقيقة" },
        { name: "ماكريل", time: "25~30 دقيقة" },
        { name: "بطاطا حلوة", time: "20~30 دقيقة" }
      ]
    },
    specs: {
      title: "المواصفات التقنية",
      model: "الموديل: KSJ-FG600",
      certification: "شهادة السلامة: SU072738-22002",
      power: "الطاقة: 220-240 فولت~، 1100 واط",
      date: "الإصدار: يونيو 2024",
      size: "الحجم: 480x275x200 ملم",
      weight: "الوزن: 4.33 كجم"
    }
  }
};
