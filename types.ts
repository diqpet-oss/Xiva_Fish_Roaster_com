
export type Language = 'zh' | 'en' | 'ko' | 'ja';

export interface TranslationSet {
  nav: {
    features: string;
    specs: string;
    guide: string;
    buy: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  mainFeatures: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  sections: {
    id: string;
    num: string;
    title: string;
    subtitle: string;
    desc: string;
    imageUrl: string;
  }[];
  cookingGuide: {
    title: string;
    items: {
      name: string;
      time: string;
    }[];
  };
  specs: {
    title: string;
    model: string;
    certification: string;
    power: string;
    date: string;
    manufacturer: string;
    size: string;
    weight: string;
  };
}

export interface Translations {
  [key: string]: TranslationSet;
}
