import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { site, capabilityStatement } from "@/content/site";
import {
  PageHeader, Section, SectionHeading, NumberedList,
  CheckList, CtaBand, CapabilityNote,
} from "@/components/ui";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Security Bollard Direct supplies commercial-grade bollards, bike racks, barriers and covers across the GTA and Ontario, with 24-hour quoting.",
  path: "/about",
  image: "/about-hero-6.webp",
});

const VALUES = [
  {
    title: "Answer fast",
    detail:
      "A written quote inside 24 hours, every time. It is the operating promise the business is built on, and it is entirely within our control.",
  },
  {
    title: "Say what it is",
    detail:
      "Precise about capability. Our products are protective and deterrent, not crash-certified, and we volunteer that rather than wait to be asked.",
  },
  {
    title: "Solve the site, not the SKU",
    detail:
      "We ask what is being protected and from what before quoting a part number. Sometimes the answer is a cheaper product than the one you asked for.",
  },
  {
    title: "Be there again",
    detail:
      "The second order matters more than the first. When the same corner gets hit next winter, you should already know who to call.",
  },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <Reveal>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="About us"
        title="Commercial site protection, supplied and installed"
        intro="Security Bollard Direct supplies and installs safety bollards, bike racks, traffic barriers and bollard covers for commercial properties across Toronto, the GTA and Ontario. We assess the spot, recommend hardware that suits the application, and put a written quote with a part number and a price in your inbox within 24 hours."
        breadcrumbs={crumbs}
        background={{
          src: "/about-hero-6.webp",
          alt: "A Security Bollard Direct truck loaded with stainless bollards outside the depot, with three colleagues reviewing a job on a tablet and the Toronto skyline behind",
          tone: "artwork",
          copy: "md",
        }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-2xl space-y-5 text-lg text-slate-grey">
            <p>
              Every commercial site has the same handful of vulnerable points. The garage ramp
              corner that gets clipped every winter. The dock door that a reversing trailer finds
              twice a year. The store front glazing with nothing between it and the parking lot. The
              bike rack that was never installed, so bikes are chained to the accessibility railing.
            </p>
            <p>
              None of this is dramatic. It is steady, predictable, budgeted damage, and the
              hardware that prevents it has existed for decades.
            </p>
            <p className="font-semibold text-charcoal">
              The problem was never the product. It was getting a straight answer and a fast quote
              from someone who understood the site.
            </p>
            <p>
              National suppliers ship from a catalogue and cannot see the problem. Local crews
              install driveway posts and cannot quote a bike rack package. Marketplace sellers ship
              a box with no idea what it is for.
            </p>
            <p>
              We are built for the space in between: a full commercial range, a supplier local
              enough to come and look, and a quote in your inbox within 24 hours. We tell you
              plainly what the product does and what it does not. We keep your pricing on file so
              you never have to re-tender a small job. And when the same corner gets hit again next
              winter, you already know who to call.
            </p>
            <p className="font-display text-xl font-bold text-sbd-red">{site.tagline}</p>
          </div>

          <aside className="h-fit space-y-6">
            <div className="reveal border border-hairline bg-fog p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                What commercial customers can expect
              </p>
              <div className="mt-4">
                <CheckList
                  items={[
                    "Commercial-focused product selection for new construction, upgrades and replacement",
                    "Clear specifications to support estimating and procurement",
                    "Solutions for store fronts, parking areas, sidewalks, loading zones and campuses",
                    "Support from product selection through delivery and installation planning",
                  ]}
                />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading
          eyebrow="How we operate"
          title="Four things we hold ourselves to"
          intro="Not slogans. These are the standards a buyer can hold us to, and the ways we would fail them."
        />
        <NumberedList items={VALUES} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Our approach" title="Assess, recommend, deliver" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Assess",
              d: "Understand the site, the risk, the traffic flow and the design requirement.",
            },
            {
              n: "2",
              t: "Recommend",
              d: "Match the application with suitable products, finishes and mounting options.",
            },
            {
              n: "3",
              t: "Deliver",
              d: "Coordinate supply and practical project support for commercial installation.",
            },
          ].map((s) => (
            <div key={s.n} className="reveal hover-lift border border-hairline bg-white p-7">
              <div className="h-1 w-12 bg-sbd-red" />
              <p className="mt-5 font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                Step {s.n}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-charcoal">{s.t}</h3>
              <p className="mt-2 text-slate-grey">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading
          eyebrow="Being straight about it"
          title="What we are not"
          intro="Knowing where a supplier stops is as useful as knowing what they sell."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <CapabilityNote text={capabilityStatement} />
          <div className="reveal border border-hairline bg-white p-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
              We will refer you elsewhere for
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Certified crash-rated perimeter systems (ASTM F2656 / IWA 14-1)",
                "Powered, hydraulic or automatic retractable bollards with controls integration",
                "Stamped or sealed engineering and deep foundation design",
                "Prime contractor and self-performed civil works",
              ].map((i) => (
                <li key={i} className="flex gap-3 text-slate-grey">
                  <span aria-hidden className="mt-[0.55rem] h-[2px] w-3.5 shrink-0 bg-stainless" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
    </Reveal>
  );
}
