import Link from "next/link";
import Image from "next/image";
import { getProduct } from "@/content/products";
import { getCategory } from "@/content/categories";
import { services } from "@/content/services";
import { segments } from "@/content/segments";
import { applications } from "@/content/applications";
import { nav, site, capabilityStatement } from "@/content/site";
import Reveal from "@/components/Reveal";
import {
  Section,
  SectionHeading,
  Button,
  LinkCard,
  CheckList,
  CtaBand,
  Eyebrow,
} from "@/components/ui";

/* The four vulnerable points from the brand narrative. This is the most
   characteristic thing in the subject's world — specific, unglamorous,
   instantly recognisable to a facilities manager. */
const VULNERABLE_POINTS = [
  {
    place: "The garage ramp corner",
    detail: "Clipped every winter, bent by spring, still bent in July.",
  },
  {
    place: "The dock door",
    detail: "Found by a reversing trailer roughly twice a year.",
  },
  {
    place: "The storefront glazing",
    detail: "Nothing between it and the parking lot.",
  },
  {
    place: "The bike rack that was never installed",
    detail: "So bikes get chained to the accessibility railing instead.",
  },
];

/**
 * The home page lists the top-level product categories only — the same five
 * entries as the Products menu — not every individual bollard type beneath
 * them. Reading from `nav` keeps the two in step automatically.
 */
function mainProducts() {
  const children = nav.find((n) => n.href === "/products")?.children ?? [];
  return children.map((child) => {
    const slug = child.href.replace("/products/", "");
    const entry = getProduct(slug) ?? getCategory(slug);
    return {
      href: child.href,
      name: entry?.name ?? child.label,
      eyebrow: entry?.eyebrow,
      intro: entry?.intro ?? child.blurb ?? "",
    };
  });
}

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-white">
        {/* Scene sits to the right; the artwork fades to white where the copy goes */}
        <Image
          src="/home-hero.webp"
          alt="Stainless bollards with red bands and a bike rack outside a Toronto commercial building, with the CN Tower behind"
          fill
          priority
          sizes="100vw"
          /* contain on large screens so the artwork is never cropped; cover below,
             where the frame is far taller than the image */
          className="object-cover object-right lg:object-contain"
        />
        {/* Insurance for the copy at every width, since the fade in the artwork moves */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-white from-30% via-white/85 via-55% to-transparent to-72% lg:from-38% lg:via-white/55 lg:via-58% lg:to-70%"
        />

        <div className="container-sbd relative flex min-h-[calc(100svh-4.6rem)] items-center py-12 lg:min-h-[calc(100svh-7.4rem)] lg:py-6">
          <div className="max-w-xl">
            <div className="hero-in flex items-center gap-2.5">
              <Eyebrow>Bollards &middot; Bike racks &middot; Barriers &middot; Covers</Eyebrow>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-sbd-red" aria-hidden>
                <path d="M12 1.8l1.2 3.9 2.7-2-.6 3.5 3.4-1.2-1.7 3 3.9.9-3.1 2.1 2.4 2-4.2.3.8 2.5-3.4-1.3-.5 2.1-1.3-1.3v5.4h-.8v-5.4l-1.3 1.3-.5-2.1-3.4 1.3.8-2.5-4.2-.3 2.4-2L2.1 9.9l3.9-.9-1.7-3 3.4 1.2-.6-3.5 2.7 2L12 1.8Z" />
              </svg>
            </div>
            <h1 className="hero-in hero-in-d1 mt-4 text-[length:var(--text-hero)] leading-[1.05] text-charcoal">
              Built to protect what matters.{" "}
              <span className="block text-sbd-red">Made for Canada.</span>
            </h1>
            <div className="hero-in hero-in-d1 mt-6 h-1 w-24 bg-sbd-red" />
            <p className="hero-in hero-in-d2 mt-6 max-w-lg text-lg text-slate-grey">
              High-quality bollards, bike racks, barriers and covers for commercial sites across
              Canada. Durable. Reliable. Built to last.
            </p>
            <div className="hero-in hero-in-d3 mt-8 flex flex-wrap gap-3">
              <Button href="/request-a-quote" className="btn-sheen">Send a photo, get a quote</Button>
              <Button href="/products" variant="outline">
                Browse products
              </Button>
            </div>

            {/* Assess, supply, install — the order a buyer moves through */}
            <ul className="hero-in hero-in-d3 mt-7 flex flex-wrap items-stretch gap-x-5 gap-y-3">
              {[
                {
                  label: "Security assessment",
                  href: "/services/site-assessment",
                  icon: (
                    <>
                      <path d="M12 3.2l6.6 2.4v4.9c0 4-2.7 7.7-6.6 8.7-3.9-1-6.6-4.7-6.6-8.7V5.6L12 3.2Z" />
                      <path d="m9.1 11.9 2 2 3.8-3.9" />
                    </>
                  ),
                },
                {
                  label: "Supply",
                  href: "/products",
                  icon: (
                    <>
                      <path d="M3 7.5h9.5v7.8H3zM12.5 10.4h3.9l2.6 3v1.9h-6.5z" />
                      <circle cx="7" cy="17.6" r="1.5" />
                      <circle cx="16.4" cy="17.6" r="1.5" />
                    </>
                  ),
                },
                {
                  label: "Professional installation",
                  href: "/services/supply-installation",
                  icon: (
                    <>
                      <path d="M14.6 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.7 3.7Z" />
                    </>
                  ),
                },
              ].map((step, i) => (
                <li key={step.href} className={i > 0 ? "border-l border-hairline pl-5" : ""}>
                  <Link href={step.href} className="group flex items-center gap-2.5">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-sbd-red"
                      aria-hidden
                    >
                      {step.icon}
                    </svg>
                    <span className="max-w-[8.5rem] font-display text-[0.8rem] font-bold uppercase leading-tight tracking-wide text-charcoal transition-colors group-hover:text-sbd-red">
                      {step.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="hero-in hero-in-d4 mt-6 text-sm text-slate-grey">
              Or call{" "}
              <a href={site.phoneHref} className="font-display font-bold text-sbd-red">
                {site.phone}
              </a>{" "}
              &middot; {site.hours}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Where the damage happens ---------- */}
      <Section>
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow="Where the damage happens"
              title="The same four places, on almost every site"
              intro="None of it is dramatic. It is steady, budgeted damage — and the hardware that prevents it has existed for decades."
            />
          </div>
          <ul className="reveal reveal-d1 divide-y divide-hairline border-y border-hairline">
            {VULNERABLE_POINTS.map((p, i) => (
              <li key={p.place} className="flex gap-5 py-5">
                <span className="font-display text-sm font-bold tabular-nums text-sbd-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[0.95rem] font-bold text-charcoal">{p.place}</p>
                  <p className="mt-0.5 text-sm text-slate-grey">{p.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ---------- Promise bar ---------- */}
      <section className="bg-charcoal">
        <div className="container-sbd grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { k: "24 hours", v: "Written quote turnaround, every time" },
            { k: "GTA-based", v: "Local enough to come and look at it" },
            { k: "Full range", v: "Bollards, covers, racks and barriers" },
          ].map((item) => (
            <div key={item.k} className="px-2 py-7 md:px-8">
              <p className="font-display text-xl font-bold text-safety-yellow">{item.k}</p>
              <p className="mt-1 text-sm text-white/70">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Products ---------- */}
      <Section>
        <Reveal>
          <div className="reveal">
            <SectionHeading
              eyebrow="What we supply"
              title="Commercial-grade product, specified properly"
              intro="Real dimensions, real material grades, real mounting details. If a spec sheet says stainless, the specification table says stainless."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mainProducts().map((p, i) => (
              <div key={p.href} className={`reveal reveal-d${Math.min(i + 1, 4)} hover-lift`}>
                <LinkCard
                  href={p.href}
                  eyebrow={p.eyebrow}
                  title={p.name}
                  blurb={(() => {
                    const t = p.intro.split(". ").slice(0, 2).join(". ");
                    return t.endsWith(".") ? t : `${t}.`;
                  })()}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ---------- Services ---------- */}
      <Section tone="fog">
        <Reveal>
          <div className="reveal">
            <SectionHeading
              eyebrow="How we work"
              title="The supplier a facilities manager keeps on file"
              intro="National catalogues ship boxes. Local crews install driveway posts. We do the part in between: a full commercial range, from someone close enough to come and look at the problem."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.slug} className={`reveal reveal-d${Math.min(i + 1, 4)} hover-lift`}>
                <LinkCard
                  href={`/services/${s.slug}`}
                  eyebrow={s.eyebrow}
                  title={s.name}
                  blurb={s.headline}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ---------- Who we serve ---------- */}
      <Section>
        <Reveal>
          <div className="reveal">
            <SectionHeading
              eyebrow="Who we serve"
              title="Different sites, different language, same hardware"
              intro="A property manager and an EHS manager are solving different problems with overlapping products. Pick the one that sounds like your week."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((s, i) => (
              <div key={s.slug} className={`reveal reveal-d${Math.min(i + 1, 4)} hover-lift`}>
                <LinkCard
                  href={`/who-we-serve/${s.slug}`}
                  title={s.navLabel}
                  blurb={s.headline}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ---------- Where bollards go ---------- */}
      <Section tone="fog">
        <Reveal>
          <div className="reveal">
            <SectionHeading
              eyebrow="Where bollards go"
              title="Eleven places a vehicle meets something expensive"
              intro="Even a low-speed impact can write off a fuel pump, a transformer or a storefront window — and take the business offline while it is repaired. A bollard is the cheapest thing on site that stops that happening."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((a, i) => {
              const body = (
                <>
                  <span className="flex items-start gap-3">
                    <span aria-hidden className="mt-[0.6rem] h-1.5 w-4 shrink-0 bg-sbd-red" />
                    <span>
                      <span className="block font-display text-base font-bold text-charcoal">
                        {a.name}
                      </span>
                      <span className="mt-1.5 block text-sm text-slate-grey">{a.blurb}</span>
                    </span>
                  </span>
                  {a.href && (
                    <span className="mt-3 block pl-7 font-display text-[0.65rem] font-bold uppercase tracking-wider text-sbd-red">
                      See the range &rarr;
                    </span>
                  )}
                </>
              );
              return (
                <div key={a.name} className={`reveal reveal-d${Math.min((i % 3) + 1, 4)}`}>
                  {a.href ? (
                    <Link
                      href={a.href}
                      className="hover-lift block h-full border border-hairline bg-white p-6 transition-colors hover:border-sbd-red"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="h-full border border-hairline bg-white p-6">{body}</div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="reveal reveal-d2 mt-8 flex flex-wrap items-center gap-4">
            <Button href="/request-a-quote" className="btn-sheen">
              Send a photo of the spot
            </Button>
            <p className="text-sm text-slate-grey">
              Tell us what you are protecting and from what. Quote back within 24 hours.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Why us ---------- */}
      <Section>
        <Reveal className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <SectionHeading
              eyebrow="Why buy from us"
              title="Local, specific and honest about capability"
            />
            <CheckList
              items={[
                "Quotes within 24 hours — a published operating standard, not an aspiration",
                "Photo-based site assessment, so routine work needs no site visit",
                "Full commercial range: bollards, covers, bike racks and barriers",
                "Per-building quoting and standing price lists for portfolios",
                "Lead times confirmed in writing, per line, at quotation",
                "Plain statements about what our products are and are not",
              ]}
            />
            <div className="mt-8">
              <Button href="/about" variant="outline">
                About Security Bollard Direct
              </Button>
            </div>
          </div>

          <div className="reveal reveal-d2 space-y-6">
            <div className="border-l-4 border-sbd-red bg-white p-6 shadow-[0_0_36px_rgba(200,16,46,0.07)]">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                Straight answer
              </p>
              <h3 className="mt-3 font-display text-lg font-bold text-charcoal">
                &ldquo;Will it stop a truck?&rdquo;
              </h3>
              <p className="mt-2 text-slate-grey">{capabilityStatement}</p>
            </div>
            <div className="border border-hairline bg-white p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                Bicycle parking is a code item
              </p>
              <p className="mt-3 text-slate-grey">
                Toronto sets bicycle parking rates under Chapter 230 of Zoning By-law 569-2013, and
                the Toronto Green Standard applies to new mid-to-high-rise residential and all ICI
                development. Short-term spaces must be publicly accessible at grade and within 30
                metres of a pedestrian entrance.
              </p>
              <Link
                href="/products/bike-racks"
                className="mt-4 inline-block font-display text-xs font-bold uppercase tracking-wider text-sbd-red"
              >
                Bike rack specifications &rarr;
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Service area ---------- */}
      <Section>
        <Reveal className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Image
            src="/logos/sbd-shield.png"
            alt=""
            width={952}
            height={1260}
            className="reveal hidden h-36 w-auto md:block"
          />
          <div className="reveal reveal-d1">
            <SectionHeading
              eyebrow="Service area"
              title="GTA and Ontario, with freight across Canada"
            />
            <p className="-mt-4 max-w-3xl text-slate-grey">
              We are anchored in the Greater Toronto Area and serve {site.serviceArea}. Being local
              is the point: a national supplier can ship you a box, but it cannot photograph the
              bent bollard at your garage ramp this afternoon.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.areaServed.map((a) => (
                <span
                  key={a}
                  className="border border-hairline bg-fog px-3 py-1.5 text-xs font-semibold text-slate-grey"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
