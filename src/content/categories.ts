/**
 * PRODUCT CATEGORIES
 * ---------------------------------------------------------------
 * Lighter-weight product pages than `products.ts`. A category page carries
 * the framing — what the product is for and where it gets used — but no
 * dimensional or material data, because a buyer could order from that and
 * these ranges are not specified yet.
 *
 * Adding an object here creates the page, the sitemap entry and the card on
 * /products automatically. Wire it into the Products menu in `site.ts`.
 *
 * When a category gets real specifications, move it into `products.ts` as a
 * full Product with variants and spec tables, and delete it from here.
 */

export type Category = {
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  applications: string[];
  /** The panel beside the applications list. */
  note: { title: string; body: string };
  related: { href: string; title: string; blurb: string }[];
};

const SPECS_ON_REQUEST = {
  title: "Specifications on request",
  body:
    "Sizes, finishes and mounting details for this range are being published. If you need them for a live project now, call and we will send what applies to your application rather than make you wait.",
};

export const categories: Category[] = [
  {
    slug: "flexible-bollards",
    name: "Flexible Bollards",
    navLabel: "Flexible Bollards",
    eyebrow: "Impact recovery",
    headline: "Flexible bollards",
    intro:
      "A bollard that bends and stands back up. Where contact is expected rather than exceptional — drive-thru lanes, tight turns, wash bays — a flexible bollard absorbs the hit and recovers, instead of bending permanently and needing replacement every season.",
    metaTitle: "Flexible Bollards Toronto",
    metaDescription:
      "Flexible impact-recovery bollards for drive-thrus, parking lots and tight turns across Toronto and the GTA. Quote within 24 hours.",
    applications: [
      "Drive-thru lanes and order points",
      "Tight turns and pinch points where clipping is routine",
      "Car wash and wash bay guidance",
      "Parking lot islands and lane definition",
      "Sites where a bent steel bollard has become a recurring line item",
      "Locations where damage to the vehicle matters as much as damage to the site",
    ],
    note: {
      title: "Choosing flexible over steel",
      body:
        "Flexible bollards are for guidance and repeated low-speed contact. They deform on purpose, so they are the wrong choice where the job is to physically stop a vehicle. Tell us what you are protecting and we will say which one the application needs.",
    },
    related: [
      {
        href: "/products/safety-bollards",
        title: "All safety bollards",
        blurb: "Fixed steel options where the bollard has to stand firm.",
      },
      {
        href: "/products/parking-protection",
        title: "Parking protection",
        blurb: "Wheel stops, corner guards and bay definition.",
      },
      {
        href: "/products/traffic-access-barriers",
        title: "Traffic & access barriers",
        blurb: "Where the risk runs along a line rather than at a point.",
      },
    ],
  },
  {
    slug: "stainless-steel-bollards",
    name: "Stainless Steel Bollards",
    navLabel: "Stainless Steel Bollards",
    eyebrow: "Finish & appearance",
    headline: "Stainless steel bollards",
    intro:
      "Where the bollard is visible to customers and the finish is part of the design. Corrosion resistant, low maintenance, and appropriate for storefronts, plazas, building entrances and any frontage where a painted steel post would look like an afterthought.",
    metaTitle: "Stainless Steel Bollards Toronto",
    metaDescription:
      "Stainless steel bollards for storefronts, plazas and building entrances across Toronto and the GTA. Grade 304 and 316 options.",
    applications: [
      "Storefront and glazing protection at customer-facing locations",
      "Building entrances, lobbies and porte-cochères",
      "Plazas, streetscapes and public realm frontages",
      "Hotels, clinics and pharmacies",
      "Sites with a design standard or franchisor appearance requirement",
      "Coastal and heavy de-icing salt exposure, in Grade 316",
    ],
    note: SPECS_ON_REQUEST,
    related: [
      {
        href: "/products/safety-bollards",
        title: "All safety bollards",
        blurb: "Full dimensions, grades and head styles.",
      },
      {
        href: "/products/public-city-safety",
        title: "Public & city safety",
        blurb: "Streetscape and public realm hardware.",
      },
      {
        href: "/products/bike-racks",
        title: "Bike racks",
        blurb: "Matching stainless bicycle parking for the same frontage.",
      },
    ],
  },
  {
    slug: "removable-bollards",
    name: "Removable Bollards",
    navLabel: "Removable Bollards",
    eyebrow: "Occasional access",
    headline: "Removable bollards",
    intro:
      "For access that has to be closed most of the time and open occasionally. The bollard drops into a ground sleeve and lifts out with a key or padlock, leaving a flush cap in the surface — fire routes, service lanes, patio seasons and curbside pickup zones.",
    metaTitle: "Removable Bollards Toronto",
    metaDescription:
      "Removable bollards with ground sleeves and locking options for fire routes, service lanes and seasonal access across Toronto and the GTA.",
    applications: [
      "Fire route access that must stay closed to general traffic",
      "Service lanes and delivery entries opened on a schedule",
      "Seasonal patios and curbside pickup zones",
      "Restricted yards and staff-only entries",
      "Event and market closures on private property",
      "Anywhere a permanent bollard would block a legitimate vehicle twice a year",
    ],
    note: {
      title: "Before you specify removable",
      body:
        "Ground sleeves need a core drill and a drainage consideration, and they add a maintenance item. If access is genuinely needed only once or twice a year, a fixed bollard with a planned removal is often cheaper over the life of the site. We will tell you which way the numbers point.",
    },
    related: [
      {
        href: "/products/safety-bollards",
        title: "All safety bollards",
        blurb: "Fixed, surface-mount and embedded options.",
      },
      {
        href: "/products/retractable-bollards",
        title: "Retractable bollards",
        blurb: "Lowers into the ground instead of lifting out.",
      },
      {
        href: "/products/traffic-access-barriers",
        title: "Traffic & access barriers",
        blurb: "Swing, drop and removable barrier configurations.",
      },
    ],
  },
  {
    slug: "galvanized-steel-bollards",
    name: "Galvanized Steel Bollards",
    navLabel: "Galvanized Steel Bollards",
    eyebrow: "Corrosion resistance",
    headline: "Galvanized steel bollards",
    intro:
      "Hot-dip galvanized steel, for outdoor positions where road salt and standing water do the damage rather than impact. The coating goes on after fabrication and covers cut edges and welds, which is why a galvanized post outlasts a painted one on an exposed site.",
    metaTitle: "Galvanized Steel Bollards Toronto",
    metaDescription:
      "Hot-dip galvanized steel bollards for exposed outdoor sites, garage entries and salt-heavy locations across Toronto and the GTA.",
    applications: [
      "Exposed parking lots and lot perimeters",
      "Garage entries and ramps where salt is tracked in",
      "Yards, laydown areas and fleet compounds",
      "Transit-adjacent and roadside positions",
      "Sites where painted bollards rust out on a two to three year cycle",
      "Positions that are awkward to repaint once installed",
    ],
    note: SPECS_ON_REQUEST,
    related: [
      {
        href: "/products/safety-bollards",
        title: "All safety bollards",
        blurb: "Finishes, heights and mounting methods compared.",
      },
      {
        href: "/products/yellow-steel-bollards",
        title: "Yellow steel bollards",
        blurb: "Where being seen matters more than the coating.",
      },
      {
        href: "/products/bollard-covers",
        title: "Bollard covers",
        blurb: "Add high-visibility colour over a galvanized post.",
      },
    ],
  },
  {
    slug: "retractable-bollards",
    name: "Retractable Bollards",
    navLabel: "Retractable Bollards",
    eyebrow: "Access control",
    headline: "Retractable bollards",
    intro:
      "A bollard that lowers into the ground instead of being lifted out, so the same opening can be closed to general traffic and released for authorised vehicles without anything to carry or store. Used where access changes through the day rather than through the year.",
    metaTitle: "Retractable Bollards Toronto",
    metaDescription:
      "Retractable bollards for controlled vehicle access at commercial sites across Toronto and the GTA. Talk to us before you design around one.",
    applications: [
      "Shared entries used by both authorised and general traffic",
      "Service courts and loading areas with scheduled access",
      "Pedestrian zones opened for deliveries at set hours",
      "Restricted yards and staff parking entries",
      "Frontages where a lifted-out bollard has nowhere to be stored",
      "Sites where staff will not reliably re-install a removable post",
    ],
    note: {
      title: "Talk to us before you design around one",
      body:
        "Retractable units need a pit, drainage and a maintenance plan, and the installed cost is a different order to a fixed bollard. Tell us the opening, the traffic and how often it changes, and we will tell you plainly what is involved and where we would recommend something simpler.",
    },
    related: [
      {
        href: "/products/removable-bollards",
        title: "Removable bollards",
        blurb: "Lifts out into storage — lower cost, more handling.",
      },
      {
        href: "/products/motorised-bollards",
        title: "Motorised bollards",
        blurb: "Operated from a control point rather than by hand.",
      },
      {
        href: "/products/traffic-access-barriers",
        title: "Traffic & access barriers",
        blurb: "Swing, drop and removable barrier configurations.",
      },
    ],
  },
  {
    slug: "motorised-bollards",
    name: "Motorised Bollards",
    navLabel: "Motorised Bollards",
    eyebrow: "Access control",
    headline: "Motorised bollards",
    intro:
      "Rising bollards operated from a control point rather than by hand — a fob, a keypad, an intercom or a gate controller. Used where an opening is closed by default, opened many times a day, and nobody is available to lift a post in and out.",
    metaTitle: "Motorised Bollards Toronto",
    metaDescription:
      "Motorised rising bollards for controlled vehicle access at commercial sites across Toronto and the GTA. Talk to us about your project.",
    applications: [
      "Entries opened many times a day under access control",
      "Pedestrianised frontages with timed vehicle access",
      "Condominium and commercial parking entries",
      "Service courts shared between tenants",
      "Sites already running fobs, keypads or gate controllers",
      "Openings where manual handling is not practical",
    ],
    note: {
      title: "Specified as a project, not a part number",
      body:
        "A motorised installation involves a pit, power, drainage, controls and commissioning, and it is quoted against the site rather than off a price list. Send us the opening and how you want it operated. We will tell you what we can stand behind and be straight with you about anything we would bring a specialist in for.",
    },
    related: [
      {
        href: "/products/retractable-bollards",
        title: "Retractable bollards",
        blurb: "The same idea, operated at the bollard.",
      },
      {
        href: "/products/traffic-access-barriers",
        title: "Traffic & access barriers",
        blurb: "Swing, drop and removable configurations.",
      },
      {
        href: "/services/site-assessment",
        title: "Site assessment",
        blurb: "Send a photo of the opening and get a quote in 24 hours.",
      },
    ],
  },
  {
    slug: "sign-bollards",
    name: "Sign Bollards",
    navLabel: "Sign Bollards",
    eyebrow: "Signage & protection",
    headline: "Sign bollards",
    intro:
      "A sign on a post tells a driver the rule. A bollard stops the driver reaching what is behind it. A sign bollard does both from one footing — which is why it turns up wherever a site needs to mark a space and protect it at the same time.",
    metaTitle: "Sign Bollards Toronto",
    metaDescription:
      "Sign bollards for commercial and industrial sites across Toronto and the GTA — physical protection and signage in a single post.",
    applications: [
      "Accessible parking stalls that need both a sign and a physical guard",
      "Visitor, reserved and EV charging bays",
      "Fire routes and no-parking zones",
      "Directional and one-way markings in parking structures",
      "Loading zones and service lanes where signs get clipped by trucks",
      "Pedestrian crossings and walkway entries",
    ],
    note: {
      title: "Specifications on request",
      body:
        "Sizes, finishes, sign plate options and mounting details for this range are being published. If you need them for a live project now, call and we will send what applies to your application rather than make you wait.",
    },
    related: [
      {
        href: "/products/parking-protection",
        title: "Parking protection",
        blurb: "Wheel stops, corner guards and bay definition.",
      },
      {
        href: "/products/safety-bollards",
        title: "Safety bollards",
        blurb: "Fixed, removable, surface-mount and stainless options.",
      },
      {
        href: "/products/traffic-access-barriers",
        title: "Traffic & access barriers",
        blurb: "Define vehicle and pedestrian zones across an area.",
      },
    ],
  },
  {
    slug: "parking-protection",
    name: "Parking Protection",
    navLabel: "Parking Protection",
    eyebrow: "Parking areas",
    headline: "Parking protection",
    intro:
      "The low-cost hardware that stops a parking area wearing itself out: wheel stops that limit overhang, guards on the columns and corners that get clipped, and protection at the building face where cars nose in every day.",
    metaTitle: "Parking Protection Toronto",
    metaDescription:
      "Wheel stops, column guards, corner protection and bay definition for commercial parking areas across Toronto and the GTA.",
    applications: [
      "Parking bays, setbacks and vehicle overhang limits",
      "Garage columns and pillar corners",
      "Building faces where cars nose in against glazing or cladding",
      "Curb ends, islands and landscaped edges",
      "Visitor, accessible and EV bays needing definition",
      "Ramps and turns where wall damage is recurring",
    ],
    note: SPECS_ON_REQUEST,
    related: [
      {
        href: "/products/sign-bollards",
        title: "Sign bollards",
        blurb: "Mark the bay and protect it from one footing.",
      },
      {
        href: "/products/safety-bollards",
        title: "Safety bollards",
        blurb: "Point protection at doors, panels and corners.",
      },
      {
        href: "/products/flexible-bollards",
        title: "Flexible bollards",
        blurb: "Guidance where contact is routine rather than rare.",
      },
    ],
  },
  {
    slug: "public-city-safety",
    name: "Public & City Safety",
    navLabel: "Public & City Safety",
    eyebrow: "Public realm",
    headline: "Public and city safety",
    intro:
      "Hardware for spaces the public walks through rather than works in: sidewalks, plazas, transit approaches, parks and campus frontages. The requirement is the same as on a private site — separate people from vehicles — but the finish, the approvals and the design standard all matter more.",
    metaTitle: "Public & City Safety Hardware Toronto",
    metaDescription:
      "Public realm and streetscape hardware for municipalities, BIAs and campuses across Toronto and the GTA — bike racks and pedestrian protection.",
    applications: [
      "Streetscape and BIA improvement projects",
      "Municipal parks, trails and community centres",
      "Transit approaches and station frontages",
      "School, college and hospital campuses",
      "Plazas, public squares and waterfront paths",
      "Mixed-use developments filing for Site Plan Approval",
    ],
    note: {
      title: "Specifying for a public project?",
      body:
        "Tell us the standard you are working to and the schedule. We will confirm what we can supply, in writing, and say plainly where something falls outside our range.",
    },
    related: [
      {
        href: "/products/bike-racks",
        title: "Bike racks",
        blurb:
          "Stainless, Round, Double Moon, 4-Way and 316 stainless U racks, with photographs, spec tables and datasheets.",
      },
      {
        href: "/products/stainless-steel-bollards",
        title: "Stainless steel bollards",
        blurb: "Decorative and architectural options for public frontages.",
      },
      {
        href: "/who-we-serve/contractors",
        title: "Contractors & architects",
        blurb: "Submittal-ready information and lead times in writing.",
      },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
