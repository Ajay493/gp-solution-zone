import { en } from "./en";
import { hi } from "./hi";
import type { Locale, Translation } from "./types";

export const translations: Record<Locale, Translation> = { en, hi };

export const locales: Locale[] = ["en", "hi"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिंदी",
};

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}

export type { Locale, Translation };
