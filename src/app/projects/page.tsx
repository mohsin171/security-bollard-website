import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PageHeader, Section, SectionHeading, CtaBand, Button, LinkCard } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Completed commercial bollard, bike rack and site protection installations across Toronto and the GTA. Photographed project references from Security Bollard Direct.",
  path: "/projects",
});

/**
 * PROJECTS
 * ---------------------------------------------------------------
 * Add entries as jobs are completed. Every completed job should get
 * three photographs — wide (context), medium (product in place) and
 * close (finish / baseplate detail) — per the brand guidelines.
 *
 * Example:
 * {
 *   title: "Garage ramp bollard replacement",
 *   sector: "Condominium",
 *   location: "Mississauga, ON",
 *   scope: "Six replacement bollards, surface mounted",
 *   summary: "Three bollards at the P1 ramp entry had been struck over two winters...",
 *   images: ["/projects/mississauga-ramp-wide.jpg"],
 * }
 */
type Project = {
  title: string;
  sector: string;
  location: string;
  scope: string;
  summary: string;
  images?: string[];
};

const projects: Project[] = [];

const CAPTURE_STANDARD = [
  "Wide — the site context, so a buyer recognises the situation",
  "Medium — the product in place, showing spacing and alignment",
  "Close — finish and base plate detail, showing the workmanship",
];

export default function ProjectsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Project references"
        title="Completed commercial installations"
        intro="Photographed references from commercial sites across the GTA — what the problem was, what was specified, and how it was resolved."
        breadcrumbs={crumbs}
      />

      {projects.length > 0 ? (
        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="border border-hairline bg-white">
                <div className="h-1 w-full bg-sbd-red" />
                <div className="p-7">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                    {p.sector} &middot; {p.location}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-charcoal">{p.title}</h2>
                  <p className="mt-1 font-mono text-xs text-sbd-red">{p.scope}</p>
                  <p className="mt-3 text-slate-grey">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : (
        <Section>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading
                title="We are photographing our current work"
                intro="Rather than fill this page with stock imagery of somebody else's installations, it stays empty until we can show our own. Project references are being documented now and will be published here as they complete."
              />
              <p className="text-slate-grey">
                In the meantime, if you would like to speak to a reference or see photographs of a
                comparable installation, call{" "}
                <a href={site.phoneHref} className="font-display font-bold text-sbd-red">
                  {site.phone}
                </a>{" "}
                and ask. We will send what we have for a site like yours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/request-a-quote">Request a quote</Button>
                <Button href="/products" variant="outline">
                  Browse products
                </Button>
              </div>
            </div>

            <div className="border border-hairline bg-fog p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                How we document every job
              </p>
              <ul className="mt-4 space-y-3">
                {CAPTURE_STANDARD.map((c, i) => (
                  <li key={c} className="flex gap-3">
                    <span className="font-display text-sm font-bold tabular-nums text-sbd-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-charcoal">{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-hairline pt-5 text-sm text-slate-grey">
                Client sites are only ever published with written permission, and we tag location at
                city level rather than by address.
              </p>
            </div>
          </div>
        </Section>
      )}

      <Section tone="fog">
        <SectionHeading title="See what we supply" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <LinkCard href="/products/safety-bollards" title="Safety bollards" blurb="Fixed, removable, stainless and decorative" />
          <LinkCard href="/products/bollard-covers" title="Bollard covers" blurb="Restore visibility without repainting" />
          <LinkCard href="/products/bike-racks" title="Bike racks" blurb="Stainless, Round, Double Moon and 4-Way" />
          <LinkCard href="/products/traffic-access-barriers" title="Barriers" blurb="Define vehicle and pedestrian zones" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
