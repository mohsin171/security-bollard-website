import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { services, getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/JsonLd";
import {
  PageHeader, Section, SectionHeading, NumberedList,
  CheckList, CtaBand, LinkCard, Button,
} from "@/components/ui";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <Reveal>
      <JsonLd data={serviceSchema(service.name, service.metaDescription, `/services/${service.slug}`)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {service.hero ? (
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
              <p className="hero-in font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                {service.eyebrow}
              </p>
              <h1 className="hero-in hero-in-d1 mt-4 text-[length:var(--text-h1)] text-charcoal">
                {service.headline}
              </h1>
              <div className="hero-in hero-in-d1 mt-6 h-1 w-24 bg-sbd-red" />
              <p className="hero-in hero-in-d2 mt-7 max-w-xl text-lg text-slate-grey">
                {service.intro}
              </p>
            </div>

            <div className="hero-in hero-in-d2 relative mx-auto aspect-[4/5] w-full max-w-[24rem] lg:mx-0 lg:h-[min(70vh,37rem)] lg:w-auto lg:max-w-none lg:justify-self-end">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.3),transparent_70%)] blur-xl"
              />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-sbd-red/70 shadow-[0_0_26px_rgba(200,16,46,0.35),0_14px_50px_rgba(26,26,26,0.18)]">
                <Image
                  src={service.hero.src}
                  alt={service.hero.alt}
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
          eyebrow={service.eyebrow}
          title={service.headline}
          intro={service.intro}
          breadcrumbs={crumbs}
        />
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <SectionHeading title="How it works" />
            <NumberedList items={service.steps} />
          </div>
          <aside className="reveal h-fit border border-hairline bg-fog p-6 lg:sticky lg:top-28">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
              Who this is for
            </p>
            <p className="mt-3 text-charcoal">{service.forWho}</p>
            <div className="mt-6 border-t border-hairline pt-6">
              <Button href={service.cta.href}>{service.cta.label}</Button>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="fog">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="What is included" />
            <CheckList items={service.included} />
          </div>
          {service.notIncluded && (
            <div>
              <SectionHeading title="What we do not do" />
              <p className="-mt-4 mb-6 text-slate-grey">
                Stated plainly so nothing is assumed. Where a job needs these, we will say so and
                refer you on rather than quote something we cannot stand behind.
              </p>
              <ul className="space-y-3">
                {service.notIncluded.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-[0.55rem] h-[2px] w-3.5 shrink-0 bg-stainless" />
                    <span className="text-slate-grey">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-12 border-l-4 border-sbd-red bg-white p-6">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
            What you end up with
          </p>
          <p className="mt-2 text-lg text-charcoal">{service.outcome}</p>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Other services" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <LinkCard key={s.slug} href={`/services/${s.slug}`} title={s.navLabel} blurb={s.eyebrow} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </Reveal>
  );
}
