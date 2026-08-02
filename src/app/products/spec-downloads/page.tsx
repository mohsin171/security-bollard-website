import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { site } from "@/content/site";
import { products } from "@/content/products";
import {
  PageHeader, Section, SectionHeading, SpecTable,
  CtaBand, Button, CheckList,
} from "@/components/ui";

export const metadata = buildMetadata({
  title: "Spec Sheets & Downloads",
  description:
    "Dimensional data, material grades, finishes and mounting details for commercial bollards and bike racks. Submittal support for GTA contractors and architects.",
  path: "/products/spec-downloads",
});

const CSI = [
  { section: "32 39 13", title: "Manufactured Metal Bollards", note: "Fixed, removable and decorative bollards" },
  { section: "12 93 13", title: "Bicycle Racks", note: "Round hoop, stainless post-and-loop, Double Moon and 4-Way racks" },
  { section: "34 71 13", title: "Vehicle Barriers", note: "Traffic and access barrier products" },
];

export default function SpecDownloadsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Spec Sheets & Downloads", path: "/products/spec-downloads" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="For estimators, contractors and architects"
        title="Specifications, dimensions and submittal support"
        intro="Everything you need to price a line item or put together a submittal package. If the specification section you are working to is not covered here, send it over and we will confirm compliance in writing."
        breadcrumbs={crumbs}
      />

      <Section>
        <SectionHeading
          eyebrow="Product datasheets"
          title="Download product datasheets"
          intro="Current PDF datasheets with dimensions, materials, finishes and mounting details."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { code: "SBD-SSBR01", name: "Stainless Steel Bike Rack", file: "/datasheets/SBD-SSBR01-datasheet.pdf" },
            { code: "SBD-BRBM01", name: "Double Moon Bike Rack Bollard", file: "/datasheets/SBD-BRBM01-datasheet.pdf" },
            { code: "SBD-UBR31601", name: "Stainless Steel U Bike Rack", file: "/datasheets/SBD-UBR31601-datasheet.pdf" },
            { code: "SBD-CBS4W01", name: "4-Way Bike Rack", file: "/datasheets/SBD-CBS4W01-datasheet.pdf" },
            { code: "SBD-UBRSS01", name: "Round Bike Rack", file: "/datasheets/SBD-UBRSS01-datasheet.pdf" },
          ].map((d) => (
            <div
              key={d.code}
              className="flex items-center justify-between gap-4 border border-hairline bg-white px-5 py-4 transition-colors hover:border-sbd-red"
            >
              <span>
                <span className="block font-mono text-xs font-semibold text-sbd-red">{d.code}</span>
                <span className="block font-display text-sm font-bold text-charcoal">{d.name}</span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                
                  href={d.file}
                  target="_blank"
                  rel="noopener"
                  className="bg-sbd-red px-3.5 py-2 font-display text-[0.65rem] font-bold uppercase tracking-wider text-white transition-colors hover:bg-sbd-red-dark"
                >
                  View
                </a>
                
                  href={d.file}
                  download
                  aria-label={"Download " + d.code + " datasheet"}
                  className="border-2 border-charcoal/25 p-2 text-charcoal transition-colors hover:border-sbd-red hover:text-sbd-red"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading
          eyebrow="Relevant sections"
          title="CSI MasterFormat references"
          intro="The divisions our products are typically specified under."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {CSI.map((c) => (
            <div key={c.section} className="border border-hairline bg-white p-6">
              <p className="font-mono text-lg font-bold text-sbd-red">{c.section}</p>
              <h3 className="mt-1 font-display text-base font-bold text-charcoal">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-grey">{c.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Technical data"
          title="Published specifications"
          intro="Dimensional and material data for the products most often specified. Full detail sits on each product page."
        />

        <div className="space-y-10">
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-charcoal">
              SBD-SSBR01 — Stainless Steel Bike Rack
            </h3>
            <div className="grid gap-6 lg:grid-cols-2">
              <SpecTable
                rows={[
                  { label: "Product code", value: "SBD-SSBR01" },
                  { label: "Overall height", value: "42 in" },
                  { label: "Loop height", value: "23 in" },
                  { label: "Overall width", value: "33.46 in" },
                  { label: "Tube diameter", value: "1.89 in" },
                ]}
              />
              <SpecTable
                rows={[
                  { label: "Base diameter", value: "12 in" },
                  { label: "Mounting holes", value: "4 \u00d7 \u00d81/2 in" },
                  { label: "Surface", value: "Stainless steel" },
                  { label: "Capacity", value: "1 to 2 bikes" },
                  { label: "Mounting", value: "Surface mount, round base plate" },
                ]}
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-charcoal">
              Round Bike Rack — SBD-UBRSS01
            </h3>
            <div className="grid gap-6 lg:grid-cols-2">
              <SpecTable
                rows={[
                  { label: "Width", value: "33.46 in" },
                  { label: "Height", value: "31.5 in" },
                  { label: "Tube diameter", value: "1.89 in" },
                ]}
              />
              <SpecTable
                rows={[
                  { label: "Surface / finish", value: "Hot-dip galvanized (HDG)" },
                  { label: "Capacity", value: "1 to 2 bikes" },
                  { label: "Mounting", value: "Surface mount, flanged base plates" },
                ]}
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-charcoal">
              SBD-BRBM01 Double Moon &amp; SBD-CBS4W01 4-Way
            </h3>
            <div className="grid gap-6 lg:grid-cols-2">
              <SpecTable
                rows={[
                  { label: "Double Moon post", value: "60 mm" },
                  { label: "Double Moon height", value: "853 mm" },
                  { label: "Double Moon width", value: "338 mm" },
                  { label: "Base plate", value: "120 mm" },
                  { label: "Capacity", value: "2 bikes" },
                ]}
              />
              <SpecTable
                rows={[
                  { label: "4-Way height", value: "35.25 in" },
                  { label: "4-Way width", value: "28.25 in" },
                  { label: "Post diameter", value: "4.5 in" },
                  { label: "U-tube diameter", value: "1.5 in" },
                  { label: "Capacity", value: "Up to 8 bikes" },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Submittal support"
              title="What we can turn around"
            />
            <CheckList
              items={[
                "Dimensional data, material grade, finish and mounting detail on request",
                "Submittal package within 48 hours where the specification section is supplied",
                "Written confirmation of lead time, per line, at quotation",
                "Honest notes on any deviation from the specification, rather than a silent substitution",
                "Stock status before you commit to a schedule",
              ]}
            />
          </div>
          <div className="border-l-4 border-sbd-red bg-fog p-7">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
              CAD, Revit and three-part specs
            </p>
            <p className="mt-3 text-charcoal">
              CAD/DWG files, Revit families and three-part CSI specifications are in production. If
              you need a specific file for a live project, contact us and we will prioritise it
              rather than make you wait for the full library.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Request a file</Button>
              <Button href={site.phoneHref} variant="outline">
                {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading title="Product pages with full specifications" />
        <div className="grid gap-3 sm:grid-cols-2">
          {products.map((p) => (
            <a
              key={p.slug}
              href={`/products/${p.slug}`}
              className="flex items-center justify-between border border-hairline bg-white px-5 py-4 transition-colors hover:border-sbd-red"
            >
              <span className="font-display text-sm font-bold text-charcoal">{p.name}</span>
              <span className="font-display text-xs font-bold uppercase tracking-wider text-sbd-red">
                View &rarr;
              </span>
            </a>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Need it priced against a drawing?"
        body="Send the specification section and the schedule. We will confirm compliance, flag any deviation and give you lead time in writing."
        primary={{ label: "Send a specification", href: "/request-a-quote" }}
      />
    </>
  );
}
