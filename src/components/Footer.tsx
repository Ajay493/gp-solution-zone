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
              <p className="text-sm text-white/60">{t.footer.tagline}</p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold-400/30 px-5 py-2 text-sm font-medium text-gold-400 transition hover:bg-gold-400/10"
          >
            {t.contact.whatsapp}
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-white/55">
            {t.footer.disclaimer}
          </p>
          <p className="mt-6 text-center text-xs text-white/40">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
