"use client";

import { Award, HeartHandshake, MapPin, Wallet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [MapPin, HeartHandshake, Award, Wallet];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
            {t.whyUs.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            {t.whyUs.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyUs.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="card-hover rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/75">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
