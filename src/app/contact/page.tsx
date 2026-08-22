import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PageHeader, Section, SectionHeading, Button, LinkCard, CheckList } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Security Bollard Direct for commercial bollards, bike racks and site protection across Toronto, the GTA and Ontario. Call 416-474-4933.",
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={localBusinessSchema} />
      <PageHeader
        eyebrow="Contact us"
        title="Let's build a safer commercial space"
        intro="Practical products and responsive support for commercial properties, contractors and project teams across the GTA and Ontario."
        breadcrumbs={crumbs}
        background={{
          src: "/contact-hero-3.webp",
          alt: "Stainless bollards with red bands lining the entrance of the Security Bollard Direct building at sunset",
          tone: "artwork",
          copy: "md",
        }}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <div className="border border-hairline bg-white">
              <div className="h-1 w-full bg-sbd-red" />
              <div className="p-7">
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-1 block font-display text-3xl font-bold text-charcoal transition-colors hover:text-sbd-red"
                >
                  {site.phone}
                </a>
                <p className="mt-2 text-sm text-slate-grey">{site.hours}</p>
              </div>
            </div>

            <div className="border border-hairline bg-white p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                Email
              </p>
              <a
                href={site.emailHref}
                className="mt-1 block font-display text-lg font-bold text-charcoal transition-colors hover:text-sbd-red"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-slate-grey">
                Attach a photo of the problem and we will quote from it.
              </p>
            </div>

            <div className="border border-hairline bg-white p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                Service area
              </p>
              <p className="mt-2 text-charcoal">{site.serviceArea}</p>
              <p className="mt-3 text-sm text-slate-grey">
                Canada-wide supply available by freight. Minimum order values apply outside Ontario.
              </p>
            </div>

            <div className="border-l-4 border-sbd-red bg-fog p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                Service
              </p>
              <p className="mt-2 text-charcoal">
                Commercial product supply, specification support and project coordination.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading title="What to include when you get in touch" />
            <CheckList
              items={[
                "What you are protecting, and from what",
                "Site type and address, or at least the city",
                "How many units, and across how many locations",
                "Mounting surface — concrete, asphalt, pavers, or unknown",
                "Whether this is a replacement, an addition or new construction",
                "Any architect's specification or drawing, if one exists",
                "Who approves the spend, and what that process looks like",
                "Target date, and any shutdown or access window",
              ]}
            />
            <p className="mt-6 text-slate-grey">
              None of it is mandatory. A photograph and a phone number is enough to start.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/request-a-quote">Request a quote</Button>
              <Button href={site.phoneHref} variant="outline">
                Call {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading title="Common starting points" />
        <div className="grid gap-5 sm:grid-cols-3">
          <LinkCard
            href="/services/site-assessment"
            title="Send a photo, get a quote"
            blurb="Photo-based assessment with a written quote inside 24 hours."
          />
          <LinkCard
            href="/services/warehouse-safety-walkthrough"
            title="Book a safety walkthrough"
            blurb="Free 30-minute walk of your facility and a numbered risk list."
          />
          <LinkCard
            href="/who-we-serve/contractors"
            title="Add us to your bid list"
            blurb="Submittal-ready product data and lead times in writing."
          />
        </div>
      </Section>
    </>
  );
}
