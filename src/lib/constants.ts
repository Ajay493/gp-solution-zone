export const WHATSAPP_NUMBER = "917014552855";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_DISPLAY = "+91 70145 52855";
export const FIRM_NAME = "GP Solution Zone";
export const FIRM_NAME_HI = "जीपी सॉल्यूशन ज़ोन";

export const MAP_LINK =
  "https://maps.app.goo.gl/5A3NXoVqQRoE1ckRA";

export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=G.P.+Solution+Zone,+Ambey+Vihar,+BK+Kaul+Nagar,+Dayanand+Colony,+Ajmer,+Rajasthan+305004,+India&hl=en&z=16&output=embed";

export function buildWhatsAppLink(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
