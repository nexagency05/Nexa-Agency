# Nexa Agency Website

Production-grade marketing website for **Nexa Agency** — a web design studio based in Bandung, Indonesia.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis

---

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

---

## Configuration

### 1. Site config (`lib/site.ts`)

Update before launch:
- `contact.whatsapp` — WA number without `+`, e.g. `6288290639426` ✅ set
- `contact.email` — `hello@nexaagency.id` ← **[CONFIRM]**
- `contact.telegram` — `@nexaagency` ← **[CONFIRM]**
- `domain` / `baseUrl` — `nexaagency.id` ← **[CONFIRM]**
- `social.instagram` — ✅ set
- `social.tiktok` — ✅ set

### 2. Fonts (optional upgrade)

The site uses Fontshare CDN (Clash Display + Satoshi) via `@import` in `app/globals.css`.
To self-host for zero layout-shift in production:

1. Download from [fontshare.com](https://www.fontshare.com):
   - **Clash Display Variable** → `/public/fonts/ClashDisplay-Variable.woff2`
   - **Satoshi Variable** → `/public/fonts/Satoshi-Variable.woff2`

2. Replace the `@import` in `globals.css` with `@font-face` declarations:
```css
@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-Variable.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Variable.woff2') format('woff2');
  font-weight: 300 700;
  font-display: swap;
}
```

### 3. Work images (`/public/work/`)

21 sample-build PNG images are already in place (`1080×1080`, categories × tiers):
```
company-profile_starter.png   company-profile_business.png   company-profile_premium.png
ecommerce_starter.png          ecommerce_business.png          ecommerce_premium.png
landing_starter.png            landing_business.png            landing_premium.png
inventory_starter.png          inventory_business.png          inventory_premium.png
attendance_starter.png         attendance_business.png         attendance_premium.png
financial_starter.png          financial_business.png          financial_premium.png
wedding_starter.png            wedding_business.png            wedding_premium.png
```

Image metadata is in `lib/work.ts`.

### 4. Logo (`/public/logo.png`)

Already placed. If you update the logo file, keep the filename or update references in:
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `app/layout.tsx` (OG image, favicon)

### 5. OG / Favicon

Add these to `/public/`:
- `og-image.png` — 1200×630px (open graph image)
- `favicon.ico`
- `apple-touch-icon.png` — 180×180px

---

## Pricing Data (`lib/pricing.ts`)

All 7 categories × 3 tiers are defined as typed TypeScript objects.
Edit prices, features, or add/remove tiers here — the `/pricing` page renders from this data.

Maintenance packages are in the `maintenanceTiers` export.

---

## Founding Client Offer (`components/home/FoundingBand.tsx`)

The offer copy contains a `[CONFIRM]` comment. Update line 42:
```tsx
{/* [CONFIRM: tentukan jumlah slot pasti, misal "Hanya 5 slot tersedia"] */}
```

---

## Vercel Deployment

1. Push to a GitHub repo
2. Import in Vercel
3. No env vars required for base functionality
4. Set the production domain → update `lib/site.ts` `baseUrl` to match

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Trust, Services, Work preview, Why Nexa, Process, Pricing teaser, Founding offer, FAQ, CTA |
| `/services` | All 7 service categories with per-tier cards, Process steps |
| `/pricing` | Full price list (tab-filtered, 3-tier cards), Maintenance, Payment terms |
| `/work` | Filterable gallery of 21 sample builds with lightbox |
| `/contact` | Direct links (WA/Email/Telegram) + contact form that opens WA |

---

## Key Notes

- **No fake credibility** — no fabricated clients, reviews, years, or project counts anywhere
- Work is labeled as "Contoh Karya / Sample Builds" — not delivered client projects
- All CTAs point to WhatsApp with pre-filled messages defined in `lib/site.ts`
- Custom cursor (desktop only), smooth scroll (Lenis), and all motion respect `prefers-reduced-motion`
