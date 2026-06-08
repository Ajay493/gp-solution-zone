# GP Solution Zone — Advocate Gaurav Jain

A modern, bilingual (English / Hindi) static website for **GP Solution Zone**, a legal practice in Ajmer, Rajasthan.

## Features

- English and Hindi language toggle (saved in browser)
- Fully static — deploys to Vercel with zero configuration
- WhatsApp integration (+91 70145 52855)
- Practice areas, legal knowledge section, contact form
- Google Maps embed for Ajmer (exact pin can be updated later)
- Mobile-responsive modern design

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this project to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

Or use the Vercel CLI:

```bash
npx vercel
```

## Customization

- **Translations**: `src/lib/i18n/en.ts` and `src/lib/i18n/hi.ts`
- **Contact number**: `src/lib/constants.ts`
- **Map pin**: Update the iframe `src` in `src/components/Contact.tsx`
