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
