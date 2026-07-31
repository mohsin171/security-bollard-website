# Security Bollard Direct — Website

Marketing site for Security Bollard Direct. Next.js 15 (App Router), TypeScript,
Tailwind v4, deployed on Vercel with Neon Postgres.

**Built for Safety. Made to Last.**

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

The site runs with **no environment variables**. The quote form logs submissions
to the console and fails safe until email and database are configured.

---

## Deploying

```bash
git init
git remote add origin https://github.com/mohsin171/security-bollard-website.git
git add .
git commit -m "Initial website build"
git branch -M main
git push -u origin main
```

Vercel detects Next.js automatically — leave all build settings on default.

**Set the function region to `iad1` (Washington, D.C.)** in
Vercel → Settings → Functions, so it matches the Neon database region.

---

## Environment variables

Add in Vercel → Settings → Environment Variables (all three environments),
then run `vercel env pull .env.local` locally.

### Already injected by the Neon integration

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Pooled connection — what the app queries through |
| `DATABASE_URL_UNPOOLED` | Direct connection — migrations only |

### Add manually

| Variable | Example | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://securitybollarddirect.ca` | Canonical URLs, sitemap, Open Graph. **Set this first** — SEO depends on it. |
| `RESEND_API_KEY` | `re_xxxxx` | Sends quote notification emails |
| `QUOTE_NOTIFICATION_EMAIL` | `sales@securitybollarddirect.ca` | Where leads are delivered |
| `QUOTE_FROM_EMAIL` | `quotes@securitybollarddirect.ca` | Sender address (domain must be verified in Resend) |

> `NEXT_PUBLIC_` values are visible in the browser bundle. Never prefix a secret.
> Environment variables are read at build time — **redeploy after changing any of them.**

---

## Database

The schema is one table: `quotes`.

```bash
npm run db:generate   # generate migration from schema
npm run db:push       # apply to Neon
```

Migrations use `DATABASE_URL_UNPOOLED`; the app uses `DATABASE_URL`.

If you prefer to create the table by hand, the SQL is:

```sql
CREATE TABLE IF NOT EXISTS quotes (
  id            serial PRIMARY KEY,
  name          varchar(160) NOT NULL,
  company       varchar(200),
  email         varchar(200) NOT NULL,
  phone         varchar(60),
  site_type     varchar(120),
  site_address  varchar(300),
  protecting    varchar(160),
  quantity      varchar(60),
  locations     varchar(60),
  project_type  varchar(80),
  surface       varchar(60),
  timeline      varchar(80),
  installation  varchar(80),
  trigger       varchar(300),
  message       text,
  photo_url     text,
  source_page   varchar(200),
  created_at    timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS quotes_created_at_idx ON quotes (created_at DESC);
CREATE INDEX IF NOT EXISTS quotes_email_idx      ON quotes (email);
```

**Note on the Neon free tier:** compute suspends after inactivity, so the first
query after a quiet period takes a few seconds. The quote route emails *before*
it writes to the database, so a cold start or database error never loses a lead.

---

## Editing content

Almost all site copy lives in three files. You do not need to touch page
components to change wording, add a product, or add a service.

| File | Controls |
|---|---|
| `src/content/site.ts` | Phone, email, service area, navigation, capability statement |
| `src/content/products.ts` | Product pages — specs, applications, FAQs |
| `src/content/services.ts` | Service pages — steps, inclusions, outcomes |
| `src/content/segments.ts` | Who We Serve pages — problems, approach, FAQs |

Adding an entry to any array creates a new page, adds it to the navigation and
the sitemap, and generates its schema markup automatically.

### Adding a project / case study

Open `src/app/projects/page.tsx` and add to the `projects` array. The page
switches from the placeholder state to the grid as soon as there is one entry.

Photograph every completed job three ways, per the brand guide: **wide**
(context), **medium** (product in place), **close** (finish and base plate).

---

## Design system

Brand tokens are defined in `src/app/globals.css` under `@theme`, taken from
the Brand Guidelines v1.0.

| Token | Value |
|---|---|
| `--color-sbd-red` | `#C8102E` |
| `--color-charcoal` | `#1A1A1A` |
| `--color-safety-yellow` | `#FFC72C` |
| `--color-stainless` | `#A7A9AC` |
| `--color-slate-grey` | `#5A5A5A` |
| `--color-fog` | `#F4F4F4` |

Typefaces: **Archivo** (display) and **Inter** (body), loaded via `next/font`.

Two signature devices:

- `.red-rule` — the thick red rule under headings. The brand's structural device.
- `.hazard-stripe` — 45° yellow/black band. **Industrial-segment pages only**,
  per the brand guide. Currently used on the Warehouses & Industrial page.

---

## SEO

Already implemented:

- Per-page `generateMetadata` with canonical URLs and Open Graph
- JSON-LD: `LocalBusiness`, `Product`, `Service`, `FAQPage`, `BreadcrumbList`
- Dynamic `sitemap.xml` and `robots.txt`
- Every marketing page statically generated

After the first deploy:

1. Verify the domain in Google Search Console and submit `/sitemap.xml`
2. **Claim the Google Business Profile** — it will outrank the site for local
   searches in the early months, and reviews are the fastest fix for the
   credibility gap identified in the brand strategy
3. Keep marketing pages static — never add `dynamic = "force-dynamic"` to a
   content page

---

## Project structure

```
src/
├── app/
│   ├── page.tsx                     Home
│   ├── layout.tsx                   Fonts, metadata, header/footer, schema
│   ├── globals.css                  Brand tokens and signature devices
│   ├── sitemap.ts  robots.ts
│   ├── products/[slug]/             4 product pages
│   ├── products/spec-downloads/
│   ├── services/[slug]/             5 service pages
│   ├── who-we-serve/[slug]/         4 segment pages
│   ├── projects/  about/  contact/
│   ├── request-a-quote/
│   ├── privacy/  terms/
│   └── api/quote/route.ts           Validation → email → database
├── components/
│   ├── Header.tsx  Footer.tsx
│   ├── QuoteForm.tsx                Ten discovery questions
│   ├── ui.tsx                       Shared components
│   └── JsonLd.tsx                   Structured data
├── content/                         All site copy
└── lib/
    ├── seo.ts
    └── db/                          Drizzle schema and client
```

---

## Content decisions worth knowing

Three things were resolved during the build. Change them if you disagree.

1. **Stainless vs HDG.** The original spec sheets headline the Square U and
   Round racks as "Stainless" while listing HDG in the specification table.
   The site describes them as **hot-dip galvanized**, and the **SBD-BR2042 as
   Grade 304 stainless**. Correct the printed sheets to match.

2. **One phone number.** `416-474-4933` appears everywhere. The `1-866-412-7473`
   number is not used anywhere on the site.

3. **No crash-rating claims.** The capability statement in `src/content/site.ts`
   appears on product pages, the footer and the terms page. It states plainly
   that products are protective and deterrent, not certified to ASTM F2656 or
   IWA 14-1. Do not remove it without a certified product to back the change.

The **Projects page ships empty by design** — with an honest explanation rather
than stock photography, which the brand guide prohibits. Fill it as jobs complete.

---

## Not yet built

- Photo upload storage. The quote form accepts and validates a photo but does
  not persist it yet. Add Vercel Blob or Cloudflare R2 and store the URL in
  `quotes.photo_url`.
- Residential driveway page. Hold until package pricing and a price floor are
  published, per the ICP.
- CAD / Revit / CSI spec downloads. The page frames them as in production.
- Analytics. Add Vercel Analytics or GA4 when ready.
