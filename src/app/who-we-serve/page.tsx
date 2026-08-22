import { segments } from "@/content/segments";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { PageHeader, Section, SectionHeading, CtaBand, Button, LinkCard } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Who We Serve",
  description:
    "Commercial site protection for property managers and condos, warehouses and industrial sites, retail and storefronts, and contractors and architects across the GTA.",
  path: "/who-we-serve",
});

const ALSO_SERVED = [
  "Schools, daycares and private campuses",
  "Municipalities, BIAs, transit and parks",
  "Auto dealerships and fleet yards",
  "Self-storage and car wash sites",
  "Healthcare clinics and pharmacies",
  "Gas station and convenience forecourts",
  "EV charging stall protection",
  "Hotels and porte-cochères",
];

export default function WhoWeServePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Who We Serve", path: "/who-we-serve" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Markets served"
        title="Same hardware, four very different conversations"
        intro="A property manager wants the problem gone without three phone calls. An EHS manager wants a numbered list for the next JHSC meeting. A contractor wants a submittal that gets approved first time. We have written a page for each of them."
        breadcrumbs={crumbs}
        background={{
          src: "/who-we-serve-hero-4.webp",
          alt: "Stainless bollards with red bands and a bike rack along a downtown Toronto office frontage at sunset",
          tone: "artwork",
        }}
      />

      <Section>
        <div className="space-y-6">
          {segments.map((s) => (
            <article key={s.slug} className="border border-hairline bg-white">
              <div className="h-1 w-full bg-sbd-red" />
              <div className="grid gap-6 p-7 md:grid-cols-[1.3fr_1fr] md:p-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-charcoal">{s.name}</h2>
                  <p className="mt-3 text-slate-grey">{s.intro}</p>
                  <div className="mt-6">
                    <Button href={`/who-we-serve/${s.slug}`} variant="outline">
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="border-l-4 border-sbd-red bg-fog p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                    What matters here
                  </p>
                  <ul className="mt-3 space-y-2">
                    {s.proofPoints.map((p) => (
                      <li key={p} className="text-sm text-charcoal">{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading
          title="Also regularly supplied"
          intro="These sites do not have their own page yet, but the products and the process are the same. Call and ask."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ALSO_SERVED.map((a) => (
            <div key={a} className="border border-hairline bg-white px-4 py-3 text-sm text-charcoal">
              {a}
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <LinkCard href="/products" title="Browse products" blurb="Bollards, covers, racks and barriers" />
          <LinkCard href="/services" title="How we work" blurb="Assessment, supply, installation and programs" />
          <LinkCard href="/request-a-quote" title="Request a quote" blurb="Photo to written quote in 24 hours" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
