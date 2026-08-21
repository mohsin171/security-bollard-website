import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  guides, getGuide, BUILD_FEATURES, SERVICE_AREA, OPTION_NOTES,
} from "@/content/guides";
import { applications } from "@/content/applications";
import { capabilityStatement, site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import {
  PageHeader, Section, SectionHeading, CheckList,
  CtaBand, CapabilityNote, Button,
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

  const photo = applications.find((a) => a.slug === guide.slug)?.image;
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

      {/* Standfirst + where they go */}
      <Section>
        <Reveal>
          <div className="reveal max-w-3xl">
            <h2 className="red-rule text-[length:var(--text-h2)] text-charcoal">{guide.subtitle}</h2>
            <p className="mt-6 text-lg text-slate-grey">{guide.lede}</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="reveal reveal-d1">
              <h3 className="font-display text-lg font-bold text-charcoal">
                Strong protection where it matters most
              </h3>
              <p className="mt-2 text-sm text-slate-grey">
                Our commercial bollards can be installed around:
              </p>
              <div className="mt-5">
                <CheckList items={guide.protects} />
              </div>
            </div>
            <div className="reveal reveal-d2">
              <h3 className="font-display text-lg font-bold text-charcoal">
                Why {guide.name.toLowerCase()} need bollards
              </h3>
              <p className="mt-2 text-sm text-slate-grey">
                Even a low-speed vehicle impact can cause significant damage. A professionally
                planned installation can help:
              </p>
              <div className="mt-5">
                <CheckList items={guide.outcomes} />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* The highest-value target on this kind of site */}
      <Section tone="fog">
        <Reveal>
          <div className="reveal max-w-3xl">
            <SectionHeading title={guide.focus.title} />
            {guide.focus.paras.map((para) => (
              <p key={para} className="mt-5 text-lg text-slate-grey first:mt-0">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Bollard options */}
      <Section>
        <Reveal>
          <div className="reveal">
            <SectionHeading
              eyebrow="Which product"
              title={`Bollard options for ${guide.name.toLowerCase()}`}
              intro="Every product page carries dimensions, material grade, finish and mounting method."
            />
          </div>
          <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {guide.ranges.map((r, i) => (
              <Link
                key={r.href}
                href={r.href}
                className={`reveal reveal-d${Math.min(i + 1, 4)} group bg-white p-7 transition-colors hover:bg-fog`}
              >
                <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-sbd-red">
                  {r.title}
                </h3>
                <p className="mt-3 text-slate-grey">{OPTION_NOTES[r.href] ?? r.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-display text-xs font-bold uppercase tracking-wider text-sbd-red">
                  View
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Built for commercial environments */}
      <Section tone="fog">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="reveal">
              <SectionHeading
                eyebrow="Specification"
                title="Built for commercial environments"
                intro="Our bollard solutions are designed for demanding commercial applications. Available features include:"
              />
            </div>
            <ul className="reveal reveal-d1 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {BUILD_FEATURES.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-charcoal">
                  <span aria-hidden className="mt-[0.45rem] h-1.5 w-3.5 shrink-0 bg-sbd-red" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Straight answer */}
      <Section>
        <Reveal>
          <div className="reveal max-w-3xl border-l-4 border-sbd-red bg-fog p-8">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
              Straight answer
            </p>
            <h2 className="mt-3 font-display text-xl font-bold text-charcoal">{guide.note.title}</h2>
            <p className="mt-3 text-charcoal">{guide.note.body}</p>
          </div>
        </Reveal>
      </Section>

      {/* Supply & installation, and the service area */}
      <Section tone="fog">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="reveal">
              <SectionHeading title="Commercial supply & installation" />
              <p className="text-lg text-slate-grey">{guide.supply}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/request-a-quote" className="btn-sheen">
                  Request a free quote
                </Button>
                <Button href={site.phoneHref} variant="outline">
                  {site.phone}
                </Button>
              </div>
            </div>
            <div className="reveal reveal-d1 border border-hairline bg-white p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                Serving the Greater Toronto Area
              </p>
              <p className="mt-4 text-charcoal">
                {SERVICE_AREA.join(" · ")} and surrounding GTA communities.
              </p>
              <p className="mt-5 border-t border-hairline pt-5 text-sm text-slate-grey">
                Send your location, photos and the areas you want protected. We will recommend a
                suitable bollard solution and quote supply and installation — within 24 hours.
              </p>
            </div>
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
