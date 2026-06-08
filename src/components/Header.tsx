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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onHero
          ? "border-b border-white/10 bg-navy-950/85 shadow-lg backdrop-blur-md"
          : "glass border-b border-navy-900/10 shadow-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="group flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full shadow-md transition group-hover:scale-105 ${
              onHero
                ? "border border-gold-400/30 bg-navy-900 text-gold-400"
                : "bg-navy-900 text-gold-400"
            }`}
          >
            <Scale className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p
              className={`font-display text-lg font-bold tracking-tight ${
                onHero ? "text-white" : "text-navy-900"
              }`}
            >
              GP Solution Zone
            </p>
            <p className={`text-xs ${onHero ? "text-white/60" : "text-navy-700/70"}`}>
              Adv. Gaurav Jain
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium transition ${
                onHero
                  ? "text-white/80 hover:text-gold-400"
                  : "text-navy-800 hover:text-gold-600"
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className={`flex rounded-full p-1 ${
              onHero
                ? "border border-white/15 bg-white/10"
                : "border border-navy-900/10 bg-white/60"
            }`}
          >
            {(["en", "hi"] as Locale[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  locale === lang
                    ? onHero
                      ? "bg-gold-500 text-navy-950"
                      : "bg-navy-900 text-gold-400"
                    : onHero
                      ? "text-white/70 hover:text-white"
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
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              onHero
                ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
                : "bg-navy-900 text-gold-400 hover:bg-navy-800"
            }`}
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${onHero ? "text-white" : "text-navy-900"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          className={`border-t px-4 py-6 lg:hidden ${
            onHero
              ? "border-white/10 bg-navy-950/95 backdrop-blur-md"
              : "glass border-white/20"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  onHero ? "text-white" : "text-navy-900"
                }`}
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
                    ? onHero
                      ? "bg-gold-500 text-navy-950"
                      : "bg-navy-900 text-gold-400"
                    : onHero
                      ? "border border-white/20 text-white"
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
            className={`mt-4 block rounded-full py-3 text-center text-sm font-semibold ${
              onHero
                ? "bg-gold-500 text-navy-950"
                : "bg-navy-900 text-gold-400"
            }`}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
