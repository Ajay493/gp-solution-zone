import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Advocate Gaurav Jain | GP Solution Zone — Ajmer",
  description:
    "Information about the legal practice of Advocate Gaurav Jain in Ajmer relating to property documentation, registration, and allied legal matters.",
  keywords: [
    "advocate Ajmer",
    "property documentation Ajmer",
    "property registration Ajmer",
    "GP Solution Zone",
    "Gaurav Jain advocate",
  ],
  openGraph: {
    title: "Advocate Gaurav Jain | GP Solution Zone",
    description:
      "Property documentation, registration and legal drafting — Ajmer.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
