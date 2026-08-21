import { notFound } from "next/navigation";
import Image from "next/image";
import { guides, getGuide } from "@/content/guides";
import { applications } from "@/content/applications";
import { capabilityStatement, site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import {
  PageHeader, Section, SectionHeading, CheckList,
  CtaBand, CapabilityNote, Button, LinkCard,
} from "@/components/ui";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/protecting/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const photo = applications.find((a) => a.image.includes(`/${guide.slug}.webp`))?.image;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: guide.name, path: `/protecting/${guide.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow={guide.eyebrow}
        title={guide.title}
        intro={guide.intro}
        breadcrumbs={crumbs}
      />

      {photo && (
        <Section className="!pb-0">
          <Reveal>
            <div className="reveal relative aspect-[21/9] w-full overflow-hidden border border-hairline">
              <Image
                src={photo}
                alt={`Bollards protecting ${guide.name.toLowerCase()}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Section>
      )}

      <Section>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div className="reveal">
              <SectionHeading title="What gets hit" />
              <CheckList items={guide.protects} />
            </div>
            <div className="reveal reveal-d1">
              <SectionHeading title="What a bollard changes" />
              <CheckList items={guide.outcomes} />
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="fog">
        <Reveal>
          <div className="reveal">
            <SectionHeading
              eyebrow="Straight answer"
              title={guide.note.title}
              intro={guide.note.body}
            />
          </div>
          <div className="reveal reveal-d1 flex flex-wrap items-center gap-4">
            <Button href="/request-a-quote" className="btn-sheen">
              Send a photo, get a quote
            </Button>
            <Button href={site.phoneHref} variant="outline">
              {site.phone}
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="reveal">
            <SectionHeading
              eyebrow="Which product"
              title="Ranges that suit this application"
              intro="Every product page carries dimensions, material grade, finish and mounting method."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guide.ranges.map((r, i) => (
              <div key={r.href} className={`reveal reveal-d${Math.min(i + 1, 4)} hover-lift`}>
                <LinkCard href={r.href} title={r.title} blurb={r.blurb} />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section tone="fog">
        <CapabilityNote text={capabilityStatement} />
      </Section>

      <CtaBand />
    </>
  );
}
