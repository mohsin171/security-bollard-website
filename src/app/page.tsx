import Link from "next/link";
import Image from "next/image";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { segments } from "@/content/segments";
import { site, capabilityStatement } from "@/content/site";
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

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="ambient border-b border-hairline bg-white">
        <div className="blueprint-grid" aria-hidden />
        <div
          className="glow-orb glow-orb-red"
          aria-hidden
          style={{ width: 520, height: 520, top: -220, right: -160, opacity: 0.32 }}
        />
        <div
          className="glow-orb glow-orb-yellow"
          aria-hidden
          style={{ width: 380, height: 380, bottom: -190, left: -120, opacity: 0.22 }}
        />
        <div className="ring-circle" aria-hidden style={{ width: 340, height: 340, top: -90, right: "16%" }} />
        <div className="ring-circle" aria-hidden style={{ width: 190, height: 190, top: 30, right: "24%", animationDelay: "2.5s" }} />
        <div className="glow-line" aria-hidden style={{ bottom: 0, left: "5%", right: "5%" }} />
        <div className="container-sbd grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="hero-in"><Eyebrow>Commercial safety &amp; streetscape solutions</Eyebrow></div>
            <h1 className="hero-in hero-in-d1 mt-4 text-[length:var(--text-hero)] text-charcoal">
              Every commercial site has{" "}
              <span className="block text-sbd-red">the same weak points.</span>
            </h1>
            <div className="hero-in hero-in-d1 mt-6 h-1 w-24 bg-sbd-red" />
            <p className="hero-in hero-in-d2 mt-7 max-w-xl text-lg text-slate-grey">
              We supply the hardware that protects them — bollards, bike racks, barriers and covers
              — to commercial properties across the GTA and Ontario. Send us a photo of the problem
              and you will have a written quote within 24 hours.
            </p>
            <div className="hero-in hero-in-d3 mt-9 flex flex-wrap gap-3">
              <Button href="/request-a-quote" className="btn-sheen">Send a photo, get a quote</Button>
              <Button href="/products" variant="outline">
                Browse products
              </Button>
            </div>
            <p className="hero-in hero-in-d4 mt-6 text-sm text-slate-grey">
              Or call{" "}
              <a href={site.phoneHref} className="font-display font-bold text-sbd-red">
                {site.phone}
              </a>{" "}
              &middot; {site.hours}
            </p>
          </div>

          {/* Signature: the vulnerable points list, as a numbered ledger */}
          <div className="hero-in hero-in-d2 border border-hairline bg-fog shadow-[0_0_60px_rgba(200,16,46,0.08)]">
            <div className="h-1 w-full bg-sbd-red" />
            <div className="p-6 md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                Where the damage happens
              </p>
              <ul className="mt-5 divide-y divide-hairline">
                {VULNERABLE_POINTS.map((p, i) => (
                  <li key={p.place} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="font-display text-sm font-bold tabular-nums text-sbd-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-[0.95rem] font-bold text-charcoal">
                        {p.place}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-grey">{p.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-hairline pt-5 text-sm text-slate-grey">
                None of it is dramatic. It is steady, predictable, budgeted damage — and the
                hardware that prevents it has existed for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <div key={p.slug} className={`reveal reveal-d${Math.min(i + 1, 4)} hover-lift`}>
                <LinkCard
                  href={`/products/${p.slug}`}
                  eyebrow={p.eyebrow}
                  title={p.name}
                  blurb={p.intro.split(". ").slice(0, 2).join(". ") + "."}
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

      {/* ---------- Why us ---------- */}
      <Section tone="fog">
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
