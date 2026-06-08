"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTranslation, type Locale, type Translation } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "hi") {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
    document.documentElement.lang = next === "hi" ? "hi" : "en";
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale === "hi" ? "hi" : "en";
    }
  }, [locale, mounted]);

  const value = useMemo(
    () => ({
      locale,
      t: getTranslation(locale),
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
