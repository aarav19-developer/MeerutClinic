# Medical Clinic Website

A production-ready, single-page website for a medical clinic with a General Physician and a Child Specialist (Pediatrician). Built with Vite 5 + React 18 + TypeScript 5 + Tailwind CSS v3.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

Open your browser at `http://localhost:5173`.

---

## Editing Clinic Content

**All clinic content lives in one file:**

```
src/data/clinic.ts
```

Open that file and replace every `[PLACEHOLDER]` value:

| Placeholder | What to put |
|-------------|-------------|
| `[CLINIC NAME]` | Your clinic's full name |
| `[TAGLINE]` | A short one-line tagline |
| `[SHORT NAME]` | Abbreviated name for the header logo |
| `[FULL ADDRESS…]` | Full postal address |
| `[LINK]` in `mapsLink` | Google Maps URL for your location |
| `[PHONE NUMBER]` | Main phone number (include country code) |
| `919876543210` in `whatsapp` | WhatsApp number — digits only, no `+` or spaces |
| `[EMAIL ADDRESS]` | Contact email |
| `[EMERGENCY NUMBER]` | Emergency phone number |
| Doctor name, qualifications, experience | Replace in the `doctors` array |
| `testimonials` array | Replace sample reviews with real ones (with patient consent) |

After editing, run `npm run build` to confirm no TypeScript errors.

---

## Adding / Replacing Doctor Photos

1. Prepare a square image (recommended: 400×400 px), JPEG or PNG.
2. Name it `doctor-1.jpg` (for the General Physician) or `doctor-2.jpg` (for the Pediatrician).
3. Drop it into `public/images/doctors/`.
4. Update `avatarSrc` in `src/data/clinic.ts`:
   ```ts
   avatarSrc: '/images/doctors/doctor-1.jpg',
   ```

The SVG placeholder files in that folder can be deleted once real photos are in place.

---

## Adding Icons

All icons are defined in `src/assets/svg/sprite.svg` as `<symbol>` elements.

To add a new icon:

1. Open `src/assets/svg/sprite.svg`.
2. Add a new `<symbol>` inside `<defs>`:
   ```xml
   <symbol id="icon-my-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
     <!-- SVG paths here -->
   </symbol>
   ```
3. Use it in any component:
   ```tsx
   <Icon id="my-icon" size={24} aria-hidden="true" />
   ```

---

## Optimising SVG Assets

Run SVGO to compress all SVG files:

```bash
npm run optimize:svg
```

This processes `src/assets/svg/` and `public/images/` recursively. Safe to run before every production build.

---

## Embedding the Real Google Map

1. Go to [Google Maps](https://maps.google.com), search your clinic address.
2. Click **Share → Embed a map → Copy HTML**.
3. Copy the `src="https://www.google.com/maps/embed?pb=..."` URL.
4. Open `src/components/Contact.tsx` and replace the `src` prop on the `<iframe>`:
   ```tsx
   src="https://www.google.com/maps/embed?pb=YOUR_EMBED_ID"
   ```

---

## Updating SEO Meta Tags

Edit `index.html` directly — replace all `[PLACEHOLDER]` values in the `<head>`:

- `<title>` — clinic name + city
- `<meta name="description">` — 150–160 character description
- `og:url`, `og:image`, `twitter:image` — your domain and OG image
- `link rel="canonical"` — your canonical URL

Create an `og-image.png` (1200×630 px) and place it in `public/` for social share previews.

---

## Deploying

### Vercel

```bash
npx vercel --prod
```

Or connect the GitHub repository in the Vercel dashboard — it detects Vite automatically.

### Netlify

```bash
npx netlify deploy --prod --dir=dist
```

Or drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

### Build output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── images/
```

---

## Project Structure

```
vite-project/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── doctors/       ← Drop doctor photos here
│       └── clinic/        ← Drop clinic photos here
├── src/
│   ├── assets/svg/
│   │   ├── sprite.svg              ← All icons as <symbol>
│   │   └── illustrations/          ← Hero, blobs, divider
│   ├── components/
│   │   ├── ui/Icon.tsx             ← Icon component
│   │   ├── ui/SvgSprite.tsx        ← Sprite injector
│   │   └── [Section].tsx           ← One file per section
│   ├── data/clinic.ts              ← ALL content here ← EDIT THIS
│   ├── lib/seo.ts                  ← JSON-LD helpers
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                      ← SEO meta tags
├── tailwind.config.ts              ← Design tokens
├── vite.config.ts
└── tsconfig.json
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 5 | Build tool & dev server |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| vite-plugin-svgr | 4 | SVG as React components |
| SVGO | 3 | SVG optimisation |

---

## Accessibility

- WCAG AA colour contrast throughout
- Single `<h1>` (Hero headline)
- Keyboard navigable (Tab, Enter, Space, ESC)
- Focus trap in mobile menu
- ARIA live regions for dynamic content (Open/Closed badge, form errors)
- Skip-to-main-content link (first focusable element)
- All images have descriptive `alt` text
- Decorative SVGs are `aria-hidden="true"`

---

## Medical Disclaimer

> This website is for informational purposes only and does not constitute medical advice. Please consult your doctor for diagnosis and treatment.
