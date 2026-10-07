# Darkian Linux — Website

Source of [darkian.xyz](https://darkian.xyz) — the site for **Darkian Linux**, a Linux distro for true gamers, based on Debian 13 Trixie.

Built with:

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + [Lucide icons](https://lucide.dev/)
- [Framer Motion](https://motion.dev/) for animations

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Structure

```
src/
  app/
    layout.tsx          # Root layout (nav, footer, theme provider, metadata)
    page.tsx            # Home page (features, specs, download, donate)
    credits/page.tsx    # Credits page
  components/
    navbar.tsx          # Responsive navbar with mobile sheet menu
    footer.tsx
    hero.tsx            # Animated hero section
    reveal.tsx          # Scroll-reveal animation wrapper
    theme-provider.tsx  # next-themes provider
    theme-toggle.tsx    # Light / Dark / System dropdown
    ui/                 # shadcn/ui components
  lib/
    site.ts             # All external links (download mirrors, Discord, ...)
```

## Download mirrors

- **Mirror 1 (main):** https://cdn.darkian.xyz/
- **Mirror 2:** Google Drive (see `src/lib/site.ts`)

All links live in `src/lib/site.ts`.
