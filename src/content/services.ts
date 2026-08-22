export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  /** Optional scene photo, shown in the full-viewport header. */
  hero?: { src: string; alt: string };
  forWho: string;
  steps: { title: string; detail: string }[];
  included: string[];
  notIncluded?: string[];
  outcome: string;
  cta: { label: string; href: string };
};

export const services: Service[] = [
  {
    slug: "site-assessment",
    name: "Site Assessment & Quotation",
    navLabel: "Site Assessment & Quotation",
    eyebrow: "How we start",
    hero: {
      src: "/services/site-assessment-hero.webp",
      alt: "Someone photographing a stainless bollard with a red band on a phone, outside a glass commercial entrance",
    },
    headline: "Send a photo. Get a quote within 24 hours.",
    intro:
      "Most site-protection problems can be identified from a photograph and two questions. You should not have to book a meeting, host a site visit and wait a week to find out what a replacement bollard costs. Send us a picture of the problem and we will come back with a part number, a price and a date.",
    metaTitle: "Site Assessment & 24-Hour Quotation",
    metaDescription:
      "Send a photo of the problem and get a commercial quote within 24 hours. Photo-based site assessment and same-week walkthroughs across the GTA.",
    forWho:
      "Property managers, facilities coordinators, building operators and anyone who needs a number they can put in front of an owner or a board this week.",
    steps: [
      {
        title: "You send what you have",
        detail:
          "A photo, an address, and a rough count. If you know the mounting surface, tell us. If you do not, the photo usually answers it.",
      },
      {
        title: "We ask what actually matters",
        detail:
          "What are you protecting, and from what? Is this a replacement or an addition? Who approves the spend? Ten questions, not fifty — and never a quote issued blind.",
      },
      {
        title: "You get a written quote inside 24 hours",
        detail:
          "Quote number, date, validity period, itemised part numbers, lead time on each line and delivery terms. Priced so you can forward it without editing it.",
      },
      {
        title: "We come and look if it warrants it",
        detail:
          "For larger or more complex sites we will attend in person, usually within the same week. For a bent bollard at a garage ramp, a photo is faster for both of us.",
      },
    ],
    included: [
      "Photo-based assessment at no cost",
      "Product recommendation matched to the application, not to the highest price",
      "Written quotation within 24 hours, with lead time per line",
      "Board-ready one-page summary on request, for condo and owner approvals",
      "Honest advice when the answer is a cheaper product than the one you asked for",
    ],
    outcome:
      "A quote you can act on, forward or file — issued fast enough that the problem does not roll into next quarter.",
    cta: { label: "Send a photo, get a quote", href: "/request-a-quote" },
  },
  {
    slug: "supply-installation",
    name: "Supply & Installation",
    navLabel: "Supply & Installation",
    eyebrow: "Getting it in the ground",
    hero: {
      src: "/services/supply-installation-hero.webp",
      alt: "An installer in a hard hat and hi-vis torquing down the base plate of a stainless bollard on a city sidewalk, with the truck behind",
    },
    headline: "Supply only, or supply with coordinated installation",
    intro:
      "Some buyers have a contractor and just need the right product delivered on the right day. Others want one number and one point of contact. We do both, and we are clear about which one you are buying.",
    metaTitle: "Bollard Supply & Installation Coordination | GTA & Ontario",
    metaDescription:
      "Commercial bollard and bike rack supply with coordinated installation across the GTA. Confirmed lead times, staged deliveries and multi-site rollouts.",
    forWho:
      "Property managers and facility managers who want the job finished, and contractors who only need product delivered to site on schedule.",
    steps: [
      {
        title: "Confirm the mounting condition",
        detail:
          "Concrete, asphalt, pavers or unknown. Slab thickness and condition drive the anchor specification and, often, the price.",
      },
      {
        title: "Choose supply-only or coordinated installation",
        detail:
          "Supply-only ships to your site or your contractor. Coordinated installation is quoted as a single number covering product and the install.",
      },
      {
        title: "Confirmed delivery date",
        detail:
          "Lead time is stated per line on the quote and confirmed in writing. Staged deliveries available for phased or multi-site work.",
      },
      {
        title: "Site work and sign-off",
        detail:
          "Access windows respected — off-hours for retail and distribution centres, summer windows for schools. Photographs on completion.",
      },
    ],
    included: [
      "Product supply with confirmed lead times",
      "Coordinated installation quoted as one number where required",
      "Staged and phased delivery for multi-site rollouts",
      "Delivery scheduling around your access and shutdown windows",
      "Completion photographs for your records",
    ],
    notIncluded: [
      "Stamped or sealed engineering drawings and deep foundation design",
      "Powered, hydraulic or automatic retractable bollard systems with controls integration",
      "Civil works, concrete pours and surface reinstatement beyond the mounting itself",
    ],
    outcome:
      "Product on site on the day you were told, installed to the mounting specification, with photographs to close the file.",
    cta: { label: "Request supply and install pricing", href: "/request-a-quote" },
  },
  {
    slug: "warehouse-safety-walkthrough",
    name: "Warehouse Safety Walkthrough",
    navLabel: "Warehouse Safety Walkthrough",
    eyebrow: "For EHS and facilities",
    hero: {
      src: "/services/warehouse-walkthrough-hero.webp",
      alt: "A row of black bollards with yellow reflective bands guarding a racking aisle in a distribution warehouse, with a forklift alongside",
    },
    headline: "A numbered risk list your JHSC can action",
    intro:
      "Most distribution centres have somewhere between fifteen and thirty unprotected strike points — dock doors, racking uprights, gas meters, electrical panels, eyewash stations, fire risers, pedestrian crossings. They are obvious once someone walks the floor looking for them, and invisible when you walk past them every day. We will walk your site and hand you the list.",
    metaTitle: "Free Warehouse Safety Walkthrough | Forklift Impact & Pedestrian Separation",
    metaDescription:
      "Free 30-minute warehouse safety walkthrough across Peel, Halton and the GTA. Get a numbered risk list of unprotected strike points for your JHSC.",
    forWho:
      "EHS managers, health and safety coordinators, plant and facility managers, and maintenance supervisors at distribution, 3PL, manufacturing and cold storage sites.",
    steps: [
      {
        title: "Thirty minutes on site",
        detail:
          "We walk the dock, the aisles, the yard and the pedestrian routes with you. No sales presentation, no slide deck.",
      },
      {
        title: "Every strike point photographed and numbered",
        detail:
          "Each item gets a number, a photograph, a location and a note on what would happen if it were struck.",
      },
      {
        title: "You get the list as a document",
        detail:
          "Formatted so it can go straight into a corrective action plan or a JHSC meeting package. It is yours whether or not you buy anything.",
      },
      {
        title: "Priced by priority, not all at once",
        detail:
          "We separate what should be done now from what can wait for next year's budget, and price it so it can be phased.",
      },
    ],
    included: [
      "Numbered, photographed list of unprotected strike points",
      "Notes on pedestrian and forklift separation where painted lines are being relied on",
      "Volume pricing on high-visibility bollards and covers",
      "Phased pricing so the work can be split across budget years",
      "No obligation — the list is yours regardless",
    ],
    outcome:
      "A document your JHSC can action, and a defensible answer when an auditor or a client asks what physical controls are in place.",
    cta: { label: "Book a walkthrough", href: "/request-a-quote" },
  },
  {
    slug: "portfolio-programs",
    name: "Multi-Site & Portfolio Programs",
    navLabel: "Multi-Site & Portfolio Programs",
    eyebrow: "For portfolios",
    hero: {
      src: "/services/portfolio-programs-hero.webp",
      alt: "A city map with red location pins marking multiple sites across a portfolio",
    },
    headline: "One supplier across every building you manage",
    intro:
      "Chasing three quotes for a $2,800 job costs more in management time than the job is worth. If you manage a portfolio, the sensible arrangement is standing pricing on file, one point of contact, and per-building quoting that does not restart from zero every time something gets hit.",
    metaTitle: "Multi-Site & Portfolio Programs | Property Management Supply",
    metaDescription:
      "Standing price lists, per-building quoting and repeat-order history for property management portfolios, condo corporations and multi-site retail operators.",
    forWho:
      "Property management firms, condominium corporations, multi-site retail and QSR operators, and anyone responsible for the same problem at more than five addresses.",
    steps: [
      {
        title: "We price your standard items once",
        detail:
          "The bollards, covers and racks you actually use, at agreed pricing, held on file.",
      },
      {
        title: "Re-orders become one line",
        detail:
          "\u201cTwo of the usual at 240 Front Street\u201d is a complete order. No re-tendering, no fresh measurement exercise.",
      },
      {
        title: "Quoting stays per building",
        detail:
          "Each property gets its own quote and its own invoice, so it fits your accounting and your board reporting.",
      },
      {
        title: "We track what is where",
        detail:
          "Sizes, colours, mounting types and order history by address, so the replacement matches what is already there.",
      },
    ],
    included: [
      "Standing price list held on file, reviewed annually",
      "Per-building quoting and invoicing",
      "Order history by property, so replacements match",
      "Standardised specification across a portfolio or a brand",
      "Phased rollout scheduling across fiscal years",
      "Board-ready one-page summaries for capital approvals",
    ],
    outcome:
      "The same product, the same price and the same supplier across the portfolio — and no procurement exercise for a job that does not deserve one.",
    cta: { label: "Set up portfolio pricing", href: "/request-a-quote" },
  },
  {
    slug: "replacement-upgrades",
    name: "Replacement & Upgrade Programs",
    navLabel: "Replacement & Upgrade Programs",
    eyebrow: "The recurring job",
    hero: {
      src: "/services/replacement-upgrades-hero.webp",
      alt: "A rusted-out old bollard stump beside its stainless replacement freshly bolted to the pavement, with anchors and an impact driver alongside",
    },
    headline: "Bent, rusted, missing — replaced on a schedule",
    intro:
      "Site protection hardware is consumable. The garage ramp corner gets clipped every winter. The dock door finds a reversing trailer twice a year. This is not a failure of the site, it is the hardware doing its job. The question is whether replacement happens on a plan or as an emergency.",
    metaTitle: "Bollard Replacement & Upgrade Programs | GTA Commercial",
    metaDescription:
      "Replace bent, rusted, damaged or missing bollards across commercial properties in the GTA. Scheduled replacement programs and reserve-fund planning support.",
    forWho:
      "Property managers, condo boards planning against a reserve fund study, building operators, and facility managers with a maintenance budget rather than a capital one.",
    steps: [
      {
        title: "Audit what is there",
        detail:
          "A photo walk of the site: what is bent, what is rusted, what is loose at the base, what is missing entirely.",
      },
      {
        title: "Separate replace from refresh",
        detail:
          "A sound bollard that looks bad takes a cover. A bent one, or one with pulled anchors, gets replaced. We will tell you which is which honestly, because the cheaper answer builds the relationship.",
      },
      {
        title: "Price it as a program",
        detail:
          "Priority items now, the rest scheduled against your budget cycle or reserve fund plan.",
      },
      {
        title: "Repeat annually",
        detail:
          "Most sites settle into a predictable pattern. Once we know yours, we can prompt you before the budget closes rather than after something gets hit.",
      },
    ],
    included: [
      "Photo-based condition audit of existing hardware",
      "Honest replace-or-refresh recommendation on each unit",
      "Matching replacements to what is already on site",
      "Program pricing split by priority and budget year",
      "Reserve fund and capital plan documentation support",
    ],
    outcome:
      "Damage handled as scheduled maintenance instead of an emergency purchase order, and a site that stops looking neglected.",
    cta: { label: "Request a replacement audit", href: "/request-a-quote" },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
