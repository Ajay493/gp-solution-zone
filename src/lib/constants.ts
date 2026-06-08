export const WHATSAPP_NUMBER = "917737910900";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_DISPLAY = "+91 77379 10900";
export const FIRM_NAME = "GP Solution Zone";
export const FIRM_NAME_HI = "जीपी सॉल्यूशन ज़ोन";

export function buildWhatsAppLink(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
