import Link from "next/link";
import { notFound } from "next/navigation";
import { segments, getSegment } from "@/content/segments";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/JsonLd";
import {
  PageHeader, Section, SectionHeading, NumberedList,
  CheckList, FaqList, CtaBand, LinkCard, Button,
} from "@/components/ui";

export function generateStaticParams() {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seg = getSegment(slug);
  if (!seg) return {};
  return buildMetadata({
    title: seg.metaTitle,
    description: seg.metaDescription,
    path: `/who-we-serve/${seg.slug}`,
  });
}

export default async function SegmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seg = getSegment(slug);
  if (!seg) notFound();

  const others = segments.filter((s) => s.slug !== seg.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Who We Serve", path: "/who-we-serve" },
    { name: seg.navLabel, path: `/who-we-serve/${seg.slug}` },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(seg.name, seg.metaDescription, `/who-we-serve/${seg.slug}`)} />
      <JsonLd data={faqSchema(seg.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {seg.industrial && <div className="hazard-stripe" aria-hidden />}

      <PageHeader
        eyebrow={seg.eyebrow}
        title={seg.headline}
        intro={seg.intro}
        breadcrumbs={crumbs}
      />

      <Section>
        <SectionHeading eyebrow="The problem" title="What we hear most often" />
        <NumberedList items={seg.problems} />
      </Section>

      <Section tone="fog">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <SectionHeading title="How we work with you" />
            <CheckList items={seg.approach} />
          </div>
          <div className="space-y-6">
            <div className="border border-hairline bg-white p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                Products for this application
              </p>
              <ul className="mt-4 space-y-2.5">
                {seg.products.map((p) => (
                  <li key={p.label + p.href}>
                    <Link
                      href={p.href}
                      className="text-charcoal underline decoration-hairline underline-offset-4 transition-colors hover:text-sbd-red hover:decoration-sbd-red"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-sbd-red bg-white p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                Worth knowing
              </p>
              <ul className="mt-3 space-y-2.5">
                {seg.proofPoints.map((p) => (
                  <li key={p} className="text-sm text-charcoal">{p}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={seg.cta.href}>{seg.cta.label}</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Questions we get asked" />
        <FaqList faqs={seg.faqs} />
      </Section>

      <Section tone="fog">
        <SectionHeading title="Other sectors we serve" />
        <div className="grid gap-5 sm:grid-cols-3">
          {others.map((s) => (
            <LinkCard key={s.slug} href={`/who-we-serve/${s.slug}`} title={s.navLabel} blurb={s.headline} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
