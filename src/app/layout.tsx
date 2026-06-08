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
  title: "GP Solution Zone | Advocate Gaurav Jain — Ajmer",
  description:
    "Trusted legal counsel in Ajmer for property, civil, criminal, family, and corporate matters.",
  keywords: [
    "lawyer Ajmer",
    "advocate Ajmer",
    "property lawyer Rajasthan",
    "GP Solution Zone",
    "Gaurav Jain advocate",
  ],
  openGraph: {
    title: "GP Solution Zone | Advocate Gaurav Jain",
    description: "Your Legal Puzzle, Our Expert Solution.",
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
