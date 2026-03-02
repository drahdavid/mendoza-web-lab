import type { Dictionary } from "./types";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  es: () => import("./es").then((module) => module.es),
  en: () => import("./en").then((module) => module.en),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Fallback to 'es' if locale is not supported
  const loadDictionary = dictionaries[locale] ?? dictionaries["es"];
  return loadDictionary();
};
