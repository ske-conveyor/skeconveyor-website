# SK Engineers & Conveyor Systems — Website

Built with [Astro](https://astro.build) (static output) and deployed on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321 — edits to files in `src/` hot-reload automatically.

## Build

```bash
npm run build
```

Outputs static files to `dist/`. This is exactly what Cloudflare Pages runs on every push.

## Cloudflare Pages build settings

In the Pages project settings, confirm:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

## Project structure

```
src/
  layouts/Layout.astro     — shared <head>, header, footer wrapper
  components/              — Header, Footer, TelescopicBoom (hero animation)
  pages/                   — one file = one route (index, about, products, clients, contact)
  styles/global.css        — design tokens (colors, type, spacing) — edit here to rebrand
public/
  images/                  — static assets, served as-is
    clients/               — DROP BRITANNIA & GODREJ LOGO FILES HERE
                              (britannia.png, godrej.png — see src/pages/clients.astro)
```

## Adding client logos

1. Save the official logo files as `britannia.png` and `godrej.png` (transparent background PNG or SVG preferred).
2. Place them in `public/images/clients/`.
3. Commit and push — no code changes needed, the page already looks for these exact filenames.

## Editing content

Every page is plain HTML-like markup in `.astro` files — no CMS yet. To change text:
1. Open the relevant file in `src/pages/`.
2. Edit the text between tags.
3. Commit + push → Cloudflare Pages rebuilds and deploys automatically (~1–2 min).

A future phase can add a lightweight CMS (e.g. Decap CMS or a headless CMS) so non-technical
edits don't require touching code — flag this when ready and we'll wire it in.
