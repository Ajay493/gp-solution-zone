"use client";

import { BookOpen, Lightbulb } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const colorMap: Record<string, string> = {
  emerald: "from-emerald-500 to-emerald-700",
  rose: "from-rose-500 to-rose-700",
  blue: "from-blue-500 to-blue-700",
  violet: "from-violet-500 to-violet-700",
  amber: "from-amber-500 to-amber-700",
  teal: "from-teal-500 to-teal-700",
};

export function Knowledge() {
  const { t } = useLanguage();

  return (
    <section id="knowledge" className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gold-400 uppercase">
            <BookOpen className="h-4 w-4" />
            {t.knowledge.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {t.knowledge.title}
          </h2>
          <p className="mt-2 text-lg text-gold-400">{t.knowledge.subtitle}</p>
          <p className="mt-4 text-white/65">{t.knowledge.definition}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.knowledge.methods.map((method) => (
            <article
              key={method.title}
              className="card-hover overflow-hidden rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm"
            >
              <div
                className={`bg-gradient-to-r px-5 py-3 ${colorMap[method.color] ?? "from-navy-700 to-navy-800"}`}
              >
                <h3 className="font-display text-lg font-bold text-white">
                  {method.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-white/70">
                  {method.description}
                </p>
                <p className="mt-4 text-xs font-semibold tracking-wider text-gold-400 uppercase">
                  {t.knowledge.requirementsLabel}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {method.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gold-400/20 bg-navy-900 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-gold-400" />
              <h3 className="font-display text-xl font-bold text-white">
                {t.knowledge.remember.title}
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {t.knowledge.remember.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-white/75"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-gold-500/10 to-transparent p-8 text-center">
            <blockquote className="font-display text-xl leading-relaxed text-white italic sm:text-2xl">
              &ldquo;{t.knowledge.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
