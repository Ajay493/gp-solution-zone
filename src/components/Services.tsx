"use client";

import {
  Briefcase,
  FileText,
  Gavel,
  Home,
  Scale,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Home, Briefcase, Gavel, Scale, FileText, Shield];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
            {t.services.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-navy-700/75">{t.services.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                key={item.title}
                className="card-hover group rounded-2xl border border-navy-900/6 bg-cream-50 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-navy-900/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
