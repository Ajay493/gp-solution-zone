"use client";

import { ArrowRight, Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppLink } from "@/lib/constants";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="gradient-hero relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-sm text-gold-400">
            <Scale className="h-4 w-4" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 font-display text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
            {t.hero.title}
            <span className="mt-3 block text-xl font-semibold text-gold-400 sm:text-2xl lg:text-3xl">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
            {t.hero.practiceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-float relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-gold-400/20 shadow-2xl sm:max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-400/40 bg-navy-900/60">
                <Scale className="h-12 w-12 text-gold-400" />
              </div>
              <p className="font-display text-2xl font-bold text-white">Adv. Gaurav Jain</p>
              <p className="mt-2 text-sm text-gold-400">GP Solution Zone</p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Ajmer, Rajasthan
              </p>
              <div className="mt-8 w-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-xs tracking-widest text-gold-400 uppercase">
                  {t.hero.cardKnowledgeTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {t.hero.cardKnowledgeSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
