import Image from "next/image";
import { products } from "@/content/products";
import Reveal from "@/components/Reveal";
import { categories } from "@/content/categories";
import { homeProductImages } from "@/content/homeCards";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, itemListSchema } from "@/components/JsonLd";
import { capabilityStatement } from "@/content/site";
import {
  PageHeader, Section, SectionHeading, LinkCard,
  CtaBand, CapabilityNote, Button, SpecTable,
} from "@/components/ui";

export const metadata = buildMetadata({
  title: "Commercial Products",
  description:
    "Commercial-grade bollards, bollard covers, bike racks and traffic barriers supplied across Toronto, the GTA and Ontario.",
  path: "/products",
  image: "/products-hero-4.webp",
});

export default function ProductsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  return (
    <Reveal>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={itemListSchema("Commercial products", "/products", products.map((p) => ({ name: p.name, path: `/products/${p.slug}` })))} />
      <PageHeader
        eyebrow="Commercial product portfolio"
        title="Products built for commercial sites and Canadian winters"
        intro="Every category, specified properly. Every product page carries dimensions, material grade, finish and mounting method: the information a facilities manager or an estimator actually needs before deciding."
        breadcrumbs={crumbs}
        background={{
          src: "/products-hero-4.webp",
          alt: "Stainless bollards with yellow bands guarding a row of loading dock doors at sunset",
          tone: "artwork",
        }}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((p) => (
            <article key={p.slug} className="reveal hover-lift flex flex-col overflow-hidden border border-hairline bg-white">
              <div className="h-1 w-full bg-sbd-red" />
              <div className="flex flex-1 flex-col p-7">
                {/* The product itself, not a scene: the first variant photo,
                    shown whole rather than cropped. Falls back to the page
                    hero for the categories that have no product shot yet. */}
                <div className="flex items-start gap-5">
                  {(() => {
                    const shot = p.variants.find((v) => v.image)?.image;
                    const pic = shot ?? p.hero;
                    if (!pic) return null;
                    return (
                      <span className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-hairline bg-fog sm:h-24 sm:w-24">
                        <Image
                          src={pic.src}
                          alt={pic.alt}
                          fill
                          sizes="96px"
                          className={shot ? "object-contain p-1.5" : "object-cover"}
                        />
                      </span>
                    );
                  })()}
                  <span className="block">
                    <span className="block font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                      {p.eyebrow}
                    </span>
                    <h2 className="mt-1.5 font-display text-2xl font-bold text-charcoal">{p.name}</h2>
                  </span>
                </div>
                <p className="mt-4 flex-1 text-slate-grey">{p.intro}</p>
                <ul className="mt-5 space-y-1.5 border-t border-hairline pt-5">
                  {p.variants.slice(0, 4).map((v) => (
                    <li key={v.name} className="flex gap-2.5 text-sm text-charcoal">
                      <span aria-hidden className="mt-[0.5rem] h-1 w-2.5 shrink-0 bg-sbd-red" />
                      {v.name}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href={`/products/${p.slug}`} variant="outline">
                    View specifications
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Categories from categories.ts, published without spec tables yet */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <LinkCard
              key={c.slug}
              href={`/products/${c.slug}`}
              eyebrow={c.eyebrow}
              title={c.name}
              blurb={c.intro.split(". ")[0] + "."}
              image={homeProductImages[c.slug]}
              imageAlt={c.name}
            />
          ))}
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading
          eyebrow="Quick reference"
          title="Common commercial specifications"
          intro="The figures asked for most often. Full data sits on each product page."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-display text-base font-bold text-charcoal">
              Round bike rack, SBD-UBRSS01
            </h3>
            <SpecTable
              rows={[
                { label: "Width", value: "33.46 in" },
                { label: "Height", value: "31.5 in" },
                { label: "Tube diameter", value: "1.89 in" },
                { label: "Surface", value: "Hot-dip galvanized (HDG)" },
                { label: "Capacity", value: "1 to 2 bikes" },
              ]}
            />
          </div>
          <div>
            <h3 className="mb-3 font-display text-base font-bold text-charcoal">
              Stainless bike rack, SBD-SSBR01
            </h3>
            <SpecTable
              rows={[
                { label: "Overall height", value: "42 in" },
                { label: "Loop height", value: "23 in" },
                { label: "Base diameter", value: "12 in" },
                { label: "Mounting holes", value: "4 \u00d7 \u00d81/2 in" },
                { label: "Capacity", value: "1 to 2 bikes" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <CapabilityNote text={capabilityStatement} />
      </Section>

      <Section tone="fog">
        <SectionHeading title="Also available" />
        <div className="grid gap-5 sm:grid-cols-2">
          <LinkCard
            href="/services/replacement-upgrades"
            title="Replacement & upgrade programs"
            blurb="Bent, rusted or missing hardware replaced on a schedule instead of as an emergency."
          />
          <LinkCard
            href="/services/portfolio-programs"
            title="Custom & project-specific"
            blurb="Sizing, finishes, mounting styles, quantities and layouts matched to the application."
          />
        </div>
      </Section>

      <CtaBand />
    </Reveal>
  );
}
