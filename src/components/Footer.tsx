"use client";

import { Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppLink } from "@/lib/constants";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 py-12 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-white">
                GP Solution Zone
              </p>
              <p className="text-sm text-gold-400">{t.footer.tagline}</p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold-400/30 px-5 py-2 text-sm font-semibold text-gold-400 transition hover:bg-gold-400/10"
          >
            {t.contact.whatsapp}
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="font-display text-sm font-semibold tracking-widest text-gold-400 uppercase">
            {t.footer.slogan}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-white/50">
            {t.footer.disclaimer}
          </p>
          <p className="mt-6 text-xs text-white/40">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
