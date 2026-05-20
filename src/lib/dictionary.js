const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  kn: () => import('@/dictionaries/kn.json').then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]?.() || dictionaries.en();
