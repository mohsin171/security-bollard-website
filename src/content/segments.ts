export type Segment = {
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  problems: { title: string; detail: string }[];
  approach: string[];
  products: { label: string; href: string }[];
  proofPoints: string[];
  faqs: { q: string; a: string }[];
  cta: { label: string; href: string };
  industrial?: boolean;
};

export const segments: Segment[] = [
  {
    slug: "property-management",
    name: "Property Managers & Condominiums",
    navLabel: "Property Managers & Condos",
    eyebrow: "Who we serve",
    headline: "Bent, rusted or missing bollards? One supplier for the whole portfolio.",
    intro:
      "You manage between eight and fifteen properties. A bollard at a garage ramp gets clipped, a resident complains that bikes are chained to the accessibility railing, and suddenly a $2,800 job needs three quotes and a board meeting. The job is not hard. Getting it quoted, approved and finished without it consuming a week of your time is the hard part.",
    metaTitle: "Bollards & Bike Racks for Property Managers",
    metaDescription:
      "Commercial bollard replacement, bollard covers and bike racks for property management portfolios and condo corporations across the GTA. Photo to quote in 24 hours.",
    problems: [
      {
        title: "Garage entries and ramps take constant damage",
        detail:
          "Ramp corners, pillar edges and curb entries get hit through the winter. The damage is predictable, which means it can be planned for rather than treated as a surprise each spring.",
      },
      {
        title: "Small jobs cost disproportionate management time",
        detail:
          "Sourcing three quotes for a job worth a few thousand dollars is a poor use of a manager's day. Standing pricing on file removes that step entirely.",
      },
      {
        title: "Board approval cycles slow everything down",
        detail:
          "Capital items need a board, and boards need something they can read in two minutes. We supply a one-page summary with a photograph, the exposure, the price and the expected lifespan.",
      },
      {
        title: "Bikes end up chained to railings and accessibility posts",
        detail:
          "It generates complaints, it creates a liability question, and it is usually cheaper to solve than to keep answering emails about.",
      },
    ],
    approach: [
      "Send a photo from your phone — we quote from it, usually the same day",
      "Standing price list held on file so re-orders are one line of email",
      "Per-building quoting and invoicing that fits your accounting",
      "Order history by address, so a replacement matches what is already there",
      "Board-ready one-page summaries for capital approvals, supplied unprompted",
      "Honest replace-or-refresh advice: a sound bollard that looks bad takes a cover, not a replacement",
    ],
    products: [
      { label: "Replacement bollards", href: "/products/safety-bollards" },
      { label: "Bollard covers", href: "/products/bollard-covers" },
      { label: "Round and Double Moon bike racks", href: "/products/bike-racks" },
      { label: "Removable bollards for fire routes", href: "/products/safety-bollards" },
      { label: "Visitor parking barriers", href: "/products/traffic-access-barriers" },
    ],
    proofPoints: [
      "Quotes issued within 24 hours — this is a published operating standard, not an aspiration",
      "Photo-based assessment, so no site visit needs scheduling for routine work",
      "One point of contact across every building in the portfolio",
    ],
    faqs: [
      {
        q: "Can you quote from just a photo?",
        a: "For routine replacement work, almost always. Send the photo, the address and a rough count. If we need the mounting surface confirmed or a measurement, we will ask one follow-up question rather than book a visit.",
      },
      {
        q: "We have a reserve fund study coming up. Can you help?",
        a: "Yes. We can audit the existing hardware across the property, separate what needs replacing now from what can be scheduled, and give you documentation that drops into a capital plan.",
      },
      {
        q: "Do you handle installation?",
        a: "We supply, and we coordinate installation where required so it can be quoted as a single number. For contractors who only need product delivered, supply-only is available.",
      },
      {
        q: "What if the building is leased and the landlord has to approve?",
        a: "Tell us early. Landlord approval at leased plazas is the single most common reason a quote stalls, and it is much easier to build into the timeline than to discover late.",
      },
    ],
    cta: { label: "Send a photo, get a quote today", href: "/request-a-quote" },
  },
  {
    slug: "warehouse-industrial",
    name: "Warehouses & Industrial Sites",
    navLabel: "Warehouses & Industrial",
    eyebrow: "Who we serve",
    headline: "Physical separation between forklifts and people — not just painted lines",
    intro:
      "Forklift damage is not an event, it is a line item. Dock doors, racking uprights, overhead door tracks, gas meters, electrical panels, eyewash stations and fire risers all take cumulative hits. A single sprinkler riser strike can shut a shift down. And when an auditor asks how pedestrians are separated from operating traffic, a painted line is not a control.",
    metaTitle: "Warehouse Safety Bollards & Barriers",
    metaDescription:
      "High-visibility safety bollards, covers and barriers for distribution, 3PL and manufacturing sites across Peel, Halton and the GTA. Free safety walkthrough.",
    industrial: true,
    problems: [
      {
        title: "Strike damage is continuous and cumulative",
        detail:
          "Dock corners, racking ends and door tracks absorb impacts daily. Each one is small; the annual repair cost is not.",
      },
      {
        title: "One strike on the wrong thing stops production",
        detail:
          "A dock door, a sprinkler riser or an electrical panel taken out by a reversing trailer is a shutdown, not a repair ticket.",
      },
      {
        title: "Painted floor lines fail an audit",
        detail:
          "Marking tells people where to walk. It does not stop a forklift. Corrective action plans that call for pedestrian separation are generally asking for a physical control.",
      },
      {
        title: "Nobody has a list of what is unprotected",
        detail:
          "The strike points are obvious to a fresh set of eyes and invisible to people who walk past them every shift.",
      },
    ],
    approach: [
      "Free 30-minute walkthrough that produces a numbered, photographed risk list",
      "The list is formatted for a corrective action plan or a JHSC meeting package",
      "Volume pricing on high-visibility yellow-black steel bollards",
      "Replaceable covers, so a struck unit is refreshed for a few dollars instead of replaced",
      "Phased pricing that splits priority work from next budget year",
      "Delivery and install scheduled around shift patterns and shutdown windows",
    ],
    products: [
      { label: "Yellow-black steel safety bollards", href: "/products/safety-bollards" },
      { label: "Bollard covers and sleeves", href: "/products/bollard-covers" },
      { label: "Removable bollards at dock and access points", href: "/products/safety-bollards" },
      { label: "Traffic and access barriers", href: "/products/traffic-access-barriers" },
    ],
    proofPoints: [
      "The walkthrough list is yours whether or not you buy anything",
      "Volume pricing on the products that make up the bulk of an industrial order",
      "Covers mean a struck bollard is a consumable, not a capital replacement",
    ],
    faqs: [
      {
        q: "What does the walkthrough actually cost?",
        a: "Nothing. It takes about thirty minutes and you keep the numbered list regardless of whether you order anything. We do it because a site that has the list tends to act on it eventually, and we would like to be the supplier when it does.",
      },
      {
        q: "Can you work around our shift schedule?",
        a: "Yes. Deliveries and installation are scheduled around operating hours, shutdown windows and shipping peaks. Tell us the constraint up front and we will build the timeline around it.",
      },
      {
        q: "Do your bollards have an impact rating?",
        a: "No, and be cautious of anyone who tells you otherwise about a surface-mount product. These are protective and deterrent products for the applications described. If you need certified crash performance to ASTM F2656 or IWA 14-1, we will say so and refer you on.",
      },
      {
        q: "We have twelve sites. Can pricing be consistent across them?",
        a: "That is the sensible way to buy. We hold a standing price list, quote per site, and keep the specification identical so a replacement at one facility matches every other.",
      },
    ],
    cta: { label: "Book a free safety walkthrough", href: "/request-a-quote" },
  },
  {
    slug: "retail-storefronts",
    name: "Retail & Storefronts",
    navLabel: "Retail & Storefronts",
    eyebrow: "Who we serve",
    headline: "Protect the glazing, the entry and the people — the same way at every location",
    intro:
      "One vehicle into a storefront costs more in downtime, glazing, inventory and insurance than a full bollard package across several sites. For multi-location operators the harder problem is consistency: getting the same protection specified, priced and installed the same way at forty stores without quoting each one from scratch.",
    metaTitle: "Storefront Protection Bollards for Retail",
    metaDescription:
      "Storefront protection bollards for retail, pharmacy, cannabis, convenience and QSR operators across the GTA. Standardised per-site packages and phased rollouts.",
    problems: [
      {
        title: "Glazing and entries are unprotected",
        detail:
          "Storefront glass, entry vestibules, ATMs and propane cages sit directly in line with a parking lot and nothing in between.",
      },
      {
        title: "Rollouts vary store to store",
        detail:
          "Without a standard package, each location gets a different answer at a different price, and none of it is auditable.",
      },
      {
        title: "Franchisees push back on cost",
        detail:
          "Corporate needs a defensible, standardised specification and a price per site that can be phased across fiscal years.",
      },
      {
        title: "Damaged bollards fail brand audits",
        detail:
          "Faded, rusted and chipped hardware makes a location look neglected. Covers fix it in minutes without a repaint.",
      },
    ],
    approach: [
      "A standardised storefront protection package priced per location",
      "Phased rollout scheduling across regions and budget years",
      "One specification applied identically at every site",
      "Removable bollards where curbside pickup or patio access is required",
      "Bollard covers as an ongoing appearance and brand-standard item",
      "Landlord approval flagged early at leased plazas, before it stalls the quote",
    ],
    products: [
      { label: "Fixed and surface-mount bollards", href: "/products/safety-bollards" },
      { label: "Stainless steel bollards for visible frontages", href: "/products/safety-bollards" },
      { label: "Bollard covers and visibility products", href: "/products/bollard-covers" },
      { label: "Removable bollards for curbside and patio", href: "/products/safety-bollards" },
    ],
    proofPoints: [
      "Per-site package pricing removes the quoting burden from a rollout",
      "One specification means an audit finds the same thing at every location",
      "Phasing across fiscal years makes a large program approvable",
    ],
    faqs: [
      {
        q: "Can you price a rollout per site rather than per quote?",
        a: "Yes, and this is how a multi-location program should be bought. We build a standard package, price it per location, and you roll it out by region instead of quoting site by site.",
      },
      {
        q: "Our locations are leased. Does that change anything?",
        a: "It usually means landlord approval is required before anything is anchored into their surface. Raise it on the first call — it is the most common reason a retail quote stalls in legal.",
      },
      {
        q: "Will bollards stop a ram-raid?",
        a: "They are a deterrent and a physical obstacle, and they change the risk calculation considerably. They are not certified anti-ram barriers. If your insurer or corporate standard requires a certified rating, tell us and we will refer you to a rated manufacturer.",
      },
    ],
    cta: { label: "Request multi-site package pricing", href: "/request-a-quote" },
  },
  {
    slug: "contractors",
    name: "Contractors & Architects",
    navLabel: "Contractors & Architects",
    eyebrow: "Who we serve",
    headline: "Submittal-ready product data and lead times confirmed in writing",
    intro:
      "You are buying against a drawing and a deadline. What you need from a supplier is a submittal package that gets approved the first time, a lead time that holds, and a price that does not move between tender and delivery. What you do not need is marketing language.",
    metaTitle: "Bollard & Bike Rack Supply for Contractors",
    metaDescription:
      "Submittal-ready bollard and bike rack supply for GTA site, landscape and general contractors. Dimensional data, materials, mounting details and confirmed lead times.",
    problems: [
      {
        title: "Submittals get rejected on incomplete data",
        detail:
          "Missing material grade, mounting detail or dimensional information turns a two-day approval into a three-week loop.",
      },
      {
        title: "Lead times move after award",
        detail:
          "A stated lead time that turns out to be an estimate is a scheduling problem that lands on you, not the supplier.",
      },
      {
        title: "Bike parking is a code item, not an extra",
        detail:
          "Toronto ICI and mid/high-rise projects carry bicycle parking requirements under Chapter 230 and the Toronto Green Standard. The line item exists whether or not it was priced properly at tender.",
      },
      {
        title: "Specification conflicts get discovered late",
        detail:
          "A sheet that says stainless in the title and galvanized in the table costs somebody a week. We would rather resolve it before you submit.",
      },
    ],
    approach: [
      "Dimensional data, material grade, finish and mounting detail on every product",
      "Lead time confirmed in writing at quotation, per line",
      "Submittal turnaround in 48 hours where we have the specification",
      "Direct answers on substitution requests and equivalence",
      "Supply-only delivery to site on your schedule, staged if required",
      "Clear statement of what we do not supply, so nothing is assumed",
    ],
    products: [
      { label: "Bike racks — SBD-SSBR01, Round, Double Moon, 4-Way", href: "/products/bike-racks" },
      { label: "Manufactured metal bollards", href: "/products/safety-bollards" },
      { label: "Traffic and access barriers", href: "/products/traffic-access-barriers" },
    ],
    proofPoints: [
      "Relevant sections: 32 39 13 Manufactured Metal Bollards, 12 93 13 Bicycle Racks, 34 71 13 Vehicle Barriers",
      "48-hour submittal turnaround where the specification is supplied",
      "Written lead times, per line, at quotation",
    ],
    faqs: [
      {
        q: "Do you have CAD and Revit files?",
        a: "Dimensional data and mounting details are available now on the product spec sheets. CAD, Revit families and three-part CSI specifications are in production — if you need a specific file for a live project, contact us and we will prioritise it.",
      },
      {
        q: "How fast can you turn a submittal?",
        a: "48 hours where we have the specification section and the schedule. Send the relevant pages and we will confirm compliance, note any deviation honestly, and give you lead time in writing.",
      },
      {
        q: "Are your bike racks compliant with Toronto requirements?",
        a: "Our racks meet the standard two-point-contact, U-lock-compatible configuration expected for short-term bicycle parking. Compliance also depends on placement — short-term spaces need to be at grade, publicly accessible, and within 30 metres of a pedestrian entrance. We are glad to review the layout with you.",
      },
      {
        q: "Do you self-perform installation?",
        a: "No. We supply, and we coordinate installation through partners where a client wants a single number. On contractor-supplied projects we deliver to site and stay out of your sequence.",
      },
    ],
    cta: { label: "Add us to your bid list", href: "/contact" },
  },
];

export const getSegment = (slug: string) => segments.find((s) => s.slug === slug);
