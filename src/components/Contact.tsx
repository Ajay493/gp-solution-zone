"use client";

import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { buildWhatsAppLink, MAP_EMBED_URL, MAP_LINK, PHONE_DISPLAY } from "@/lib/constants";

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      t.contact.formDefaultMessage,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
            {t.contact.label}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-navy-700/75">{t.contact.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-navy-900/8 bg-cream-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">{t.contact.addressLabel}</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-700/80">
                    {t.contact.address}
                  </p>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-gold-600 hover:underline"
                  >
                    {t.contact.mapLink}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-900/8 bg-cream-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">{t.contact.phoneLabel}</p>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm font-medium text-gold-600 hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-900/8 bg-cream-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">{t.contact.hours}</p>
                  <p className="mt-1 text-sm text-navy-700/80">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 text-sm font-bold text-white transition hover:bg-[#1fb855]"
            >
              <MessageCircle className="h-5 w-5" />
              {t.contact.whatsapp}
            </a>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-navy-900/8 bg-cream-50 p-6 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-navy-800"
                  >
                    {t.contact.formName}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-navy-800"
                  >
                    {t.contact.formPhone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-navy-800"
                  >
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-navy-900 py-3.5 text-sm font-bold text-gold-400 transition hover:bg-navy-800"
                >
                  {t.contact.formSubmit}
                </button>
              </div>
            </form>

            <div className="mt-6 overflow-hidden rounded-2xl border border-navy-900/8">
              <p className="bg-navy-900 px-4 py-3 text-sm font-semibold text-gold-400">
                {t.contact.mapTitle}
              </p>
              <iframe
                title="GP Solution Zone — Ajmer"
                src={MAP_EMBED_URL}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
