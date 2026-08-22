import { services } from "@/content/services";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, itemListSchema } from "@/components/JsonLd";
import { PageHeader, Section, SectionHeading, CtaBand, Button, NumberedList } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Commercial Services",
  description:
    "Site assessment with 24-hour quotes, supply and coordinated installation, free warehouse safety walkthroughs, portfolio programs.",
  path: "/services",
  image: "/services-hero-9.webp",
});

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <Reveal>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={itemListSchema("Commercial services", "/services", services.map((s) => ({ name: s.name, path: `/services/${s.slug}` })))} />
      <PageHeader
        eyebrow="How we work"
        title="Supply is the easy part. The service is why people call back."
        intro="Anyone can sell you a bollard. What makes a difference on a commercial site is how fast you get a quote, whether the product is right for the application, and whether the same supplier is still there when the same corner gets hit next winter."
        breadcrumbs={crumbs}
        background={{
          src: "/services-hero-9.webp",
          alt: "An installer bolting down a stainless bollard beside a rusted post being replaced, with a building frontage and loading docks behind",
          tone: "artwork",
        }}
      />

      <Section>
        <div className="space-y-6">
          {services.map((s, i) => (
            <article key={s.slug} className="reveal hover-lift overflow-hidden border border-hairline bg-white">
              <div className="h-1 w-full bg-sbd-red" />
              <div className="grid gap-6 p-7 md:grid-cols-[4rem_1fr_auto] md:items-center md:p-8">
                <span className="font-display text-3xl font-bold tabular-nums text-sbd-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                    {s.eyebrow}
                  </p>
                  <h2 className="mt-1.5 font-display text-xl font-bold text-charcoal">{s.name}</h2>
                  <p className="mt-2 max-w-2xl text-slate-grey">{s.headline}</p>
                </div>
                <Button href={`/services/${s.slug}`} variant="outline" className="md:shrink-0">
                  Details
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading
          eyebrow="Our approach"
          title="Assess, recommend, deliver"
          intro="The same three steps whether it is one replacement bollard or a rollout across forty buildings."
        />
        <NumberedList
          items={[
            {
              title: "Assess",
              detail:
                "Understand the site, the risk, the traffic flow and the design requirement. Usually from a photograph; in person where the site warrants it.",
            },
            {
              title: "Recommend",
              detail:
                "Match the application to suitable products, finishes and mounting options, including the cheaper option when that is the right answer.",
            },
            {
              title: "Deliver",
              detail:
                "Coordinate supply, confirmed lead times and practical project support, scheduled around your access and shutdown windows.",
            },
          ]}
        />
      </Section>

      <CtaBand />
    </Reveal>
  );
}
