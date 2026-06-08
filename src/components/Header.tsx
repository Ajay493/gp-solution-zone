"use client";

import { Menu, Scale, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppLink } from "@/lib/constants";
import { localeLabels, type Locale } from "@/lib/i18n";

const navIds = ["home", "about", "services", "knowledge", "contact"] as const;

export function Header() {
  const { locale, t, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/20 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-400 shadow-md transition group-hover:scale-105">
            <Scale className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-bold tracking-tight text-navy-900">
              GP Solution Zone
            </p>
            <p className="text-xs text-navy-700/70">Adv. Gaurav Jain</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-navy-800 transition hover:text-gold-600"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-full border border-navy-900/10 bg-white/60 p-1">
            {(["en", "hi"] as Locale[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  locale === lang
                    ? "bg-navy-900 text-gold-400"
                    : "text-navy-700 hover:text-navy-900"
                }`}
              >
                {localeLabels[lang]}
              </button>
            ))}
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-gold-400 transition hover:bg-navy-800"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-navy-900 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-white/20 px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-navy-900"
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex gap-2">
            {(["en", "hi"] as Locale[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={`flex-1 rounded-full py-2 text-sm font-semibold ${
                  locale === lang
                    ? "bg-navy-900 text-gold-400"
                    : "border border-navy-900/15 text-navy-800"
                }`}
              >
                {localeLabels[lang]}
              </button>
            ))}
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-navy-900 py-3 text-center text-sm font-semibold text-gold-400"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
