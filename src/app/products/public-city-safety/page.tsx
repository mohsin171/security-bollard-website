import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { capabilityStatement, site } from "@/content/site";
import {
  PageHeader, Section, SectionHeading, CheckList,
  CtaBand, CapabilityNote, Button, LinkCard,
} from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Public & City Safety",
  description:
    "Public realm and streetscape hardware for municipalities, BIAs and campuses across Toronto and the GTA — bike racks, pedestrian protection and site furniture.",
  path: "/products/public-city-safety",
});

/**
 * PUBLIC & CITY SAFETY
 * ---------------------------------------------------------------
 * Category page. Bike Racks is the first range published under it;
 * further ranges get added as the owner supplies specifications.
 */
export default function PublicCitySafetyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Public & City Safety", path: "/products/public-city-safety" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Public realm"
        title="Public and city safety"
        intro="Hardware for spaces the public walks through rather than works in: sidewalks, plazas, transit approaches, parks and campus frontages. The requirement is the same as on a private site — separate people from vehicles — but the finish, the approvals and the design standard all matter more."
        breadcrumbs={crumbs}
      />

      <Section>
        <Reveal>
          <div className="reveal">
            <SectionHeading
              eyebrow="Published ranges"
              title="What is available now"
              intro="Full dimensions, material grades and datasheets are live for bike racks. Further ranges under this category are being published."
            />
          </div>
          <div className="reveal reveal-d1 grid gap-5 sm:grid-cols-2">
            <LinkCard
              href="/products/bike-racks"
              eyebrow="Bicycle parking"
              title="Bike racks"
              blurb="Stainless, Round, Double Moon, 4-Way and 316 stainless U racks — with photographs, spec tables and datasheets for each."
            />
            <LinkCard
              href="/products/safety-bollards"
              eyebrow="Pedestrian protection"
              title="Safety bollards"
              blurb="Decorative and architectural options for streetscape frontages, plazas and campus entries."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="fog">
        <Reveal>
          <div className="reveal">
            <SectionHeading title="Where it is used" />
          </div>
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="reveal reveal-d1">
              <CheckList
                items={[
                  "Streetscape and BIA improvement projects",
                  "Municipal parks, trails and community centres",
                  "Transit approaches and station frontages",
                  "School, college and hospital campuses",
                  "Plazas, public squares and waterfront paths",
                  "Mixed-use developments filing for Site Plan Approval",
                ]}
              />
            </div>
            <div className="reveal reveal-d2 border-l-4 border-sbd-red bg-fog p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                Specifying for a public project?
              </p>
              <p className="mt-3 text-charcoal">
                Tell us the standard you are working to and the schedule. We will confirm what we can
                supply, in writing, and say plainly where something falls outside our range.
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

      <Section>
        <CapabilityNote text={capabilityStatement} />
      </Section>

      <CtaBand />
    </>
  );
}
