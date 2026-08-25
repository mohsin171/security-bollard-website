# CLAUDE.md — Security Bollard Direct website

Marketing site for Security Bollard Direct (SBD), a GTA commercial supplier of
bollards, bike racks, barriers and bollard covers. Next.js 15 App Router,
TypeScript, Tailwind v4, Drizzle + Neon Postgres, Resend email, deployed on
Vercel (auto-deploys on push to main).

Live: securitybollarddirect.ca (Vercel; apex is primary, www 308-redirects to it)
Repo: github.com/mohsin171/security-bollard-website

## Commands

- npm run dev — local dev
- npm run build — production build. RUN THIS before every push.
- npm run db:push — apply Drizzle schema to Neon (uses DATABASE_URL_UNPOOLED)

Vercel blocks vulnerable Next.js versions; package.json pins "next": "^15.5.0".
Do not pin an exact older version.

## Architecture

Nearly all copy lives in src/content/:
- site.ts — phone, email, nav, service area, and the capability statement
- products.ts — 4 product pages incl. all bike rack variants + datasheets
- services.ts — 5 service pages
- segments.ts — 4 Who We Serve pages

Adding an object to these arrays creates the page, nav entry, sitemap entry and
JSON-LD automatically. Templates: src/app/{products,services,who-we-serve}/[slug]/page.tsx.

Shared UI: src/components/ui.tsx, Header.tsx, Footer.tsx, QuoteForm.tsx,
Reveal.tsx (scroll animations), JsonLd.tsx.

Design tokens in src/app/globals.css under @theme:
SBD Red #C8102E, Charcoal #1A1A1A, Safety Yellow #FFC72C, Stainless #A7A9AC,
Slate #5A5A5A, Fog #F4F4F4. Fonts: Archivo (display) / Inter (body).
Signature devices: .red-rule under headings; .hazard-stripe (industrial pages
ONLY); ambient system (.glow-orb, .blueprint-grid, .ring-circle, .reveal) —
keep restrained, respect prefers-reduced-motion.

## Hard content rules — never violate

1. No crash-rating claims. Products are protective/deterrent, NOT rated to
   ASTM F2656 / IWA 14-1. The capability statement in site.ts appears on
   product pages, footer and terms. Never remove or soften it.
2. One phone number: 416-474-4933. The 1-866 number must not appear.
3. Materials: Round SBD-UBRSS01 = HDG. SBD-SSBR01 = stainless. SBD-UBR31601 =
   Grade 316 stainless. Double Moon SBD-BRBM01 and 4-Way SBD-CBS4W01 =
   powder-coated black. Site follows spec tables, not sheet headlines.
4. No yellow text on white backgrounds. Yellow accents on charcoal only.
5. No stock photos implying SBD's own work. Projects page ships empty by
   design until real installs are photographed (wide / medium / close).
6. Bike rack display order: silver/black alternating —
   SSBR01, BRBM01, UBR31601, CBS4W01, UBRSS01.

## Gotchas learned the hard way

- Never overwrite an image under the same filename — Next/Vercel cache
  optimized images by URL. Bump the name (-2, -3) and update the src.
- Datasheet PDFs live in public/datasheets/, wired via the datasheet field on
  variants. Buttons: red "View PDF" (new tab) + secondary "Download".
- Bike racks hero: full-viewport (min-h calc(100svh - 7.4rem) on lg), white
  background, photo card right with subtle red border glow — keep glow calm.
- Pushes over ~2MB may fail HTTP 400; fix: git config http.postBuffer 157286400
- Commit author should be mohsin171 (git config user.name/email if commits
  show as i229839).

## Pending setup (ask the owner first)

- Vercel env vars: NEXT_PUBLIC_SITE_URL, RESEND_API_KEY,
  QUOTE_NOTIFICATION_EMAIL, QUOTE_FROM_EMAIL (Resend domain verification).
  Redeploy after adding.
- Reconnect Neon integration; set Vercel function region iad1; run
  npm run db:push to create the quotes table.
- Photo upload storage (Vercel Blob or R2) — form validates photos but does
  not persist them yet.
- GitHub 2FA before Aug 22, 2026.

## Working style

The owner is not a developer. Explain changes in plain language, verify builds
before pushing, prefer small focused commits. If a request conflicts with a
Hard Content Rule, say so rather than complying silently.
