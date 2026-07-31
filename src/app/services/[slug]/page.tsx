import { notFound } from "next/navigation";
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
    <>
      <JsonLd data={serviceSchema(service.name, service.metaDescription, `/services/${service.slug}`)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHeader
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.intro}
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <SectionHeading title="How it works" />
            <NumberedList items={service.steps} />
          </div>
          <aside className="h-fit border border-hairline bg-fog p-6 lg:sticky lg:top-28">
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
    </>
  );
}
