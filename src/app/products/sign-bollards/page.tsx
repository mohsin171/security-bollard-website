import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { capabilityStatement, site } from "@/content/site";
import {
  PageHeader, Section, SectionHeading, CheckList,
  CtaBand, CapabilityNote, Button, LinkCard,
} from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Sign Bollards",
  description:
    "Sign bollards for commercial and industrial sites across Toronto and the GTA — physical protection and signage in a single post. Quote within 24 hours.",
  path: "/products/sign-bollards",
});

/**
 * SIGN BOLLARDS
 * ---------------------------------------------------------------
 * Category page. Product options, dimensions, finishes and datasheets
 * are still to be added — this page deliberately carries no dimensional
 * or material data until the owner supplies it, so nothing here can be
 * ordered from in error.
 */
export default function SignBollardsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Sign Bollards", path: "/products/sign-bollards" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Signage & protection"
        title="Sign bollards"
        intro="A sign on a post tells a driver the rule. A bollard stops the driver reaching what is behind it. A sign bollard does both from one footing — which is why it turns up wherever a site needs to mark a space and protect it at the same time."
        breadcrumbs={crumbs}
      />

      <Section>
        <Reveal>
          <div className="reveal">
            <SectionHeading title="Where it is used" />
          </div>
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="reveal reveal-d1">
              <CheckList
                items={[
                  "Accessible parking stalls that need both a sign and a physical guard",
                  "Visitor, reserved and EV charging bays",
                  "Fire routes and no-parking zones",
                  "Directional and one-way markings in parking structures",
                  "Loading zones and service lanes where signs get clipped by trucks",
                  "Pedestrian crossings and walkway entries",
                ]}
              />
            </div>
            <div className="reveal reveal-d2 border-l-4 border-sbd-red bg-fog p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                Specifications on request
              </p>
              <p className="mt-3 text-charcoal">
                Sizes, finishes, sign plate options and mounting details for this range are being
                published. If you need them for a live project now, call and we will send what
                applies to your application rather than make you wait.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/request-a-quote" className="btn-sheen">
                  Request a quote
                </Button>
                <Button href={site.phoneHref} variant="outline">
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="fog">
        <SectionHeading title="Related products" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <LinkCard
            href="/products/safety-bollards"
            title="Safety bollards"
            blurb="Fixed, removable, surface-mount, stainless and decorative options."
          />
          <LinkCard
            href="/products/traffic-access-barriers"
            title="Traffic & access barriers"
            blurb="Define vehicle and pedestrian zones across a whole area."
          />
          <LinkCard
            href="/products/bollard-covers"
            title="Bollard covers"
            blurb="Restore high-visibility colour without repainting."
          />
        </div>
      </Section>

      <Section>
        <CapabilityNote text={capabilityStatement} />
      </Section>

      <CtaBand />
    </>
  );
}
