export const site = {
  name: "Security Bollard Direct",
  shortName: "Security Bollard Direct",
  tagline: "Built for Safety. Made to Last.",
  phone: "416-474-4933",
  phoneHref: "tel:+14164744933",
  email: "sales@securitybollarddirect.ca",
  emailHref: "mailto:sales@securitybollarddirect.ca",
  domain: "securitybollarddirect.ca",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://securitybollarddirect.ca",
  serviceArea:
    "Toronto, Mississauga, Brampton, Vaughan, Markham, Scarborough, Oakville, Burlington, Hamilton and across Ontario",
  areaServed: [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Markham",
    "Scarborough",
    "Oakville",
    "Burlington",
    "Hamilton",
    "Ontario",
  ],
  description:
    "Commercial bollards, bike racks, barriers and bollard covers supplied across the GTA and Ontario. Quotes within 24 hours. Built for Safety. Made to Last.",
  hours: "Monday to Friday, 8:00am – 5:00pm ET",
} as const;

export type NavChild = { label: string; href: string; blurb?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Safety Bollards",
        href: "/products/safety-bollards",
        blurb: "Fixed, removable, surface-mount, stainless and decorative",
      },
      {
        label: "Bollard Covers",
        href: "/products/bollard-covers",
        blurb: "Restore visibility without repainting",
      },
      {
        label: "Bike Racks",
        href: "/products/bike-racks",
        blurb: "Square U, Round and SBD-BR2042",
      },
      {
        label: "Traffic & Access Barriers",
        href: "/products/traffic-access-barriers",
        blurb: "Define vehicle and pedestrian zones",
      },
      {
        label: "Spec Sheets & Downloads",
        href: "/products/spec-downloads",
        blurb: "Dimensions, materials and mounting data",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Site Assessment & Quotation",
        href: "/services/site-assessment",
        blurb: "Send a photo, get a quote in 24 hours",
      },
      {
        label: "Supply & Installation",
        href: "/services/supply-installation",
        blurb: "Supply only, or supply with coordinated installation",
      },
      {
        label: "Warehouse Safety Walkthrough",
        href: "/services/warehouse-safety-walkthrough",
        blurb: "A numbered risk list your JHSC can action",
      },
      {
        label: "Multi-Site & Portfolio Programs",
        href: "/services/portfolio-programs",
        blurb: "Standing pricing across every building you manage",
      },
      {
        label: "Replacement & Upgrade Programs",
        href: "/services/replacement-upgrades",
        blurb: "Bent, rusted, missing — replaced on a schedule",
      },
    ],
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
    children: [
      {
        label: "Property Managers & Condos",
        href: "/who-we-serve/property-management",
        blurb: "One supplier for the whole portfolio",
      },
      {
        label: "Warehouses & Industrial",
        href: "/who-we-serve/warehouse-industrial",
        blurb: "Physical separation, not painted lines",
      },
      {
        label: "Retail & Storefronts",
        href: "/who-we-serve/retail-storefronts",
        blurb: "Standardised protection across locations",
      },
      {
        label: "Contractors & Architects",
        href: "/who-we-serve/contractors",
        blurb: "Submittal-ready, lead times in writing",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** The capability statement from the brand guide. Used verbatim wherever
 *  a buyer might assume a crash rating we do not hold. */
export const capabilityStatement =
  "Our products are protective and deterrent hardware for the applications described. They are not crash-rated. If your project requires certified anti-ram performance to ASTM F2656 or IWA 14-1, we will tell you plainly and refer you to a rated manufacturer.";
