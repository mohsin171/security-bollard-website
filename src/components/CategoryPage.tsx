import type { Category } from "@/content/categories";
import { capabilityStatement, site } from "@/content/site";
import { JsonLd, breadcrumbSchema, productSchema } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import {
  PageHeader, Section, SectionHeading, CheckList,
  CtaBand, CapabilityNote, Button, LinkCard,
} from "@/components/ui";

/** Renders a lighter product page from `categories.ts`: framing, no spec tables. */
export default function CategoryPage({ category }: { category: Category }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: category.name, path: `/products/${category.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={productSchema(
          category.name,
          category.metaDescription ?? category.intro,
          `/products/${category.slug}`
        )}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow={category.eyebrow}
        title={category.headline}
        intro={category.intro}
        breadcrumbs={crumbs}
      />

      <Section>
        <Reveal>
          <div className="reveal">
            <SectionHeading title="Where it is used" />
          </div>
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="reveal reveal-d1">
              <CheckList items={category.applications} />
            </div>
            <div className="reveal reveal-d2 border-l-4 border-sbd-red bg-fog p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                {category.note.title}
              </p>
              <p className="mt-3 text-charcoal">{category.note.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/request-a-quote" className="btn-sheen">
                  Request a quote
                </Button>
                <Button href={site.phoneHref} variant="outline">
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="fog">
        <Reveal>
          <div className="reveal">
            <SectionHeading title="Related products" />
          </div>
          <div className="reveal reveal-d1 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.related.map((r) => (
              <LinkCard key={r.href} href={r.href} title={r.title} blurb={r.blurb} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <CapabilityNote text={capabilityStatement} />
      </Section>

      <CtaBand />
    </>
  );
}
