import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";
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
    image: seg.hero?.src,
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
    <Reveal>
      <JsonLd data={serviceSchema(seg.name, seg.metaDescription, `/who-we-serve/${seg.slug}`)} />
      <JsonLd data={faqSchema(seg.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {seg.industrial && <div className="hazard-stripe" aria-hidden />}

      {seg.hero ? (
        /* Same full-viewport header as the product pages: copy left, photo in a
           glowing red card on the right. */
        <header className="ambient border-b border-hairline bg-white">
          <div className="blueprint-grid" aria-hidden />
          <div
            className="glow-orb glow-orb-red"
            aria-hidden
            style={{ width: 460, height: 460, top: -180, left: -120, opacity: 0.22 }}
          />
          <div
            className="glow-orb glow-orb-yellow"
            aria-hidden
            style={{ width: 340, height: 340, bottom: -160, right: -80, opacity: 0.18 }}
          />
          <div
            className="ring-circle"
            aria-hidden
            style={{ width: 260, height: 260, bottom: -80, left: "34%" }}
          />
          <div className="glow-line" aria-hidden style={{ bottom: 0, left: 0, right: 0 }} />

          <div className="container-sbd grid min-h-[calc(100svh-4.6rem)] items-center gap-10 py-10 md:py-12 lg:min-h-[calc(100svh-7.4rem)] lg:grid-cols-[1.1fr_1fr]">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-x-2 text-xs text-slate-grey">
                  {crumbs.map((b, i) => (
                    <li key={b.path} className="flex items-center gap-2">
                      {i > 0 && <span aria-hidden>/</span>}
                      {i === crumbs.length - 1 ? (
                        <span className="text-charcoal">{b.name}</span>
                      ) : (
                        <Link href={b.path} className="transition-colors hover:text-sbd-red">
                          {b.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
              {/* The sector's own name, as it reads in the menu and on the cards. */}
              <p className="hero-in font-display text-sm font-bold uppercase tracking-[0.16em] text-sbd-red">
                {seg.navLabel}
              </p>
              <h1 className="hero-in hero-in-d1 mt-4 text-[length:var(--text-h1)] text-charcoal">
                {seg.headline}
              </h1>
              <div className="hero-in hero-in-d1 mt-6 h-1 w-24 bg-sbd-red" />
              <p className="hero-in hero-in-d2 mt-7 max-w-xl text-lg text-slate-grey">
                {seg.intro}
              </p>
            </div>

            <div className="hero-in hero-in-d2 relative mx-auto aspect-[4/5] w-full max-w-[24rem] lg:mx-0 lg:h-[min(70vh,37rem)] lg:w-auto lg:max-w-none lg:justify-self-end">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.3),transparent_70%)] blur-xl"
              />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-sbd-red/70 shadow-[0_0_26px_rgba(200,16,46,0.35),0_14px_50px_rgba(26,26,26,0.18)]">
                <Image
                  src={seg.hero.src}
                  alt={seg.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 24rem, 30rem"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-charcoal/10"
                />
              </div>
            </div>
          </div>
        </header>
      ) : (
        <PageHeader
          eyebrow={seg.eyebrow}
          title={seg.headline}
          intro={seg.intro}
          breadcrumbs={crumbs}
        />
      )}

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
            <div className="reveal border border-hairline bg-white p-6">
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
            <div className="reveal reveal-d1 border-l-4 border-sbd-red bg-white p-6">
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
    </Reveal>
  );
}
