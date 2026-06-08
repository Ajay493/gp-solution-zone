"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 hover:shadow-2xl sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-[#128C7E]" />
      </span>
    </a>
  );
}
