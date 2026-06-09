"use client";

import { CheckCircle2, Gavel } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
              {t.about.label}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-700/80">
              {t.about.description}
            </p>
            <ul className="mt-8 space-y-4">
              {t.about.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span className="text-navy-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-navy-900/8 bg-white p-8 shadow-xl sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                  <Gavel className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-navy-900">
                    {t.about.advocate}
                  </p>
                  <p className="text-sm text-gold-600">{t.about.designation}</p>
                </div>
              </div>
              <div className="mt-8 space-y-4 border-t border-navy-900/8 pt-8">
                <div className="flex justify-between text-sm">
                  <span className="text-navy-700/70">{t.about.practiceLabel}</span>
                  <span className="font-medium text-navy-900">{t.about.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-700/70">{t.about.locationLabel}</span>
                  <span className="font-medium text-navy-900">Ajmer, Rajasthan</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-700/70">{t.about.firmLabel}</span>
                  <span className="font-medium text-navy-900">GP Solution Zone</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gold-400/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
