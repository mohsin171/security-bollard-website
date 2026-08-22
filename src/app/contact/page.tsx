import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PageHeader, Section, SectionHeading, Button, LinkCard, CheckList } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Security Bollard Direct for commercial bollards, bike racks and site protection across Toronto, the GTA and Ontario. Call 416-474-4933.",
  path: "/contact",
  image: "/contact-hero-6.webp",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <Reveal>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Contact us"
        title="Let's build a safer commercial space"
        intro="Practical products and responsive support for commercial properties, contractors and project teams across the GTA and Ontario."
        breadcrumbs={crumbs}
        background={{
          src: "/contact-hero-6.webp",
          alt: "Stainless bollards with red bands lining the entrance of the Security Bollard Direct building at sunset",
          tone: "artwork",
          copy: "md",
        }}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <div className="reveal overflow-hidden border border-hairline bg-white">
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

            <div className="reveal hover-lift border border-hairline bg-white p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                Email
              </p>
              <a
                href={site.emailHref}
                className="mt-1 block py-1.5 font-display text-lg font-bold text-charcoal transition-colors hover:text-sbd-red"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-slate-grey">
                Attach a photo of the problem and we will quote from it.
              </p>
            </div>

            <div className="reveal hover-lift border border-hairline bg-white p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                WhatsApp
              </p>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-2.5 py-1.5 font-display text-lg font-bold text-charcoal transition-colors hover:text-sbd-red"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]" aria-hidden>
                  <path d="M12.04 2.5A9.42 9.42 0 0 0 4 16.72L2.5 21.5l4.94-1.45a9.42 9.42 0 0 0 4.6 1.18h.01a9.43 9.43 0 0 0 0-18.73Zm0 17.06a7.7 7.7 0 0 1-3.92-1.07l-.28-.17-2.93.86.88-2.85-.18-.29a7.64 7.64 0 1 1 6.43 3.52Zm4.32-5.7c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.53.12-.16.24-.61.77-.77.93-.16.16-.32.18-.55.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.04-.42-.08-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4h-.46c-.16 0-.42.06-.63.3-.22.24-.83.81-.83 1.97 0 1.17.85 2.3.97 2.46.12.16 1.67 2.55 4.05 3.58.57.24 1.01.39 1.35.5.57.18 1.09.15 1.5.09.45-.06 1.4-.57 1.6-1.12.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
                </svg>
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-slate-grey">
                Send a photo of the spot straight from your phone.
              </p>
            </div>

            <div className="reveal hover-lift border border-hairline bg-white p-7">
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
                "Mounting surface: concrete, asphalt, pavers, or unknown",
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
    </Reveal>
  );
}
