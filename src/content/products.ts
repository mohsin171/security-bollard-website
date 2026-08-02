export type SpecRow = { label: string; value: string };

export type Variant = {
  name: string;
  model?: string;
  summary: string;
  specs: SpecRow[];
  notes?: string;
  image?: { src: string; alt: string };
};

export type Product = {
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  hero?: { src: string; alt: string };
  applications: string[];
  variants: Variant[];
  choosing: { question: string; answer: string }[];
  relatedSegments: string[];
};

export const products: Product[] = [
  {
    slug: "safety-bollards",
    name: "Safety Bollards",
    navLabel: "Safety Bollards",
    eyebrow: "Property protection",
    headline: "Safety bollards for commercial sites",
    intro:
      "A bollard does one job: put something solid between a vehicle and the thing you cannot afford to have hit. Storefront glazing, a dock door, a gas meter, an electrical panel, a pedestrian walkway. We supply fixed, removable, surface-mounted, stainless and decorative bollards for commercial properties across the GTA and Ontario.",
    metaTitle: "Commercial Safety Bollards Toronto",
    metaDescription:
      "Fixed, removable, surface-mount, stainless and yellow-black safety bollards for commercial sites across Toronto and the GTA. Quote within 24 hours.",
    applications: [
      "Storefront and glazing protection at retail, pharmacy and cannabis locations",
      "Loading dock corners, overhead door tracks and dock aprons",
      "Gas meters, electrical panels, transformers and fire risers",
      "Parking garage ramps, pillar corners and curb entries",
      "Pedestrian walkways, drop-off loops and building approaches",
      "Drive-thru order points, patios and curbside pickup zones",
    ],
    variants: [
      {
        name: "Yellow-Black Steel Safety Bollard",
        summary:
          "The high-visibility workhorse. Steel pipe with a yellow and black banded finish, used wherever a bollard needs to be seen before it is hit. Highest unit counts in warehouse and industrial settings.",
        specs: [
          { label: "Material", value: "Carbon steel pipe" },
          { label: "Finish", value: "High-visibility yellow with black bands" },
          { label: "Mounting", value: "Surface mount on base plate, or embedded" },
          { label: "Typical heights", value: "36in / 42in / 48in above grade" },
          { label: "Base plate", value: "Pre-drilled for anchor bolts" },
          { label: "Options", value: "Reflective banding, protective cap, custom heights" },
        ],
        notes:
          "Specify height and diameter against the vehicle type you are protecting against. Forklift aisles and dock aprons usually take a shorter, heavier unit than a storefront line.",
      },
      {
        name: "Stainless Steel Bollard",
        summary:
          "Where the bollard is visible to customers and the finish matters. Corrosion resistant, low maintenance, and appropriate for storefronts, plazas, building entrances and public-facing frontages.",
        specs: [
          { label: "Material", value: "Grade 304 stainless steel" },
          { label: "Grade 316", value: "Available on request for coastal or de-icing salt exposure" },
          { label: "Finish", value: "Satin / brushed stainless" },
          { label: "Mounting", value: "Surface mount on round base plate" },
          { label: "Head styles", value: "Flat, domed or angle-cut" },
          { label: "Options", value: "Reflective bands, custom heights" },
        ],
      },
      {
        name: "Removable Bollard",
        summary:
          "For access that has to be closed most of the time and open occasionally. Fire routes, service lanes, loading areas, patio seasons and curbside pickup zones.",
        specs: [
          { label: "Material", value: "Steel or stainless steel" },
          { label: "Mounting", value: "Ground sleeve, flush cap when removed" },
          { label: "Locking", value: "Padlock or keyed lock options" },
          { label: "Finish", value: "Powder coat, galvanized or stainless" },
          { label: "Use case", value: "Fire route access, seasonal patio, service vehicle entry" },
        ],
        notes:
          "Ground sleeves require a core drill and a drainage consideration. Confirm the mounting surface before ordering.",
      },
      {
        name: "Decorative & Architectural Bollard",
        summary:
          "Where the site has a design standard to meet. Streetscape frontages, BIA improvements, campus entries and mixed-use developments.",
        specs: [
          { label: "Material", value: "Steel, stainless or cast options" },
          { label: "Finish", value: "Powder coat to specified colour, or stainless" },
          { label: "Mounting", value: "Surface mount or embedded" },
          { label: "Application", value: "Streetscape, plaza, campus and public realm" },
        ],
      },
    ],
    choosing: [
      {
        question: "Fixed or removable?",
        answer:
          "Fixed unless something legitimately needs to drive through. Removable units cost more, need a sleeve set into the surface, and add a maintenance item. If access is required only once or twice a year, fixed with a planned removal is often cheaper over the life of the site.",
      },
      {
        question: "What height do I need?",
        answer:
          "42in above grade is the common commercial standard — high enough to be seen over a hood, low enough not to obstruct sightlines. Warehouse and dock applications often use a shorter, heavier-wall unit. Tell us what you are protecting and from what, and we will specify it.",
      },
      {
        question: "Concrete, asphalt or pavers?",
        answer:
          "This determines everything about mounting and price. Surface-mount base plates need sound concrete of adequate thickness. Asphalt and pavers usually need a different approach. If you are not sure, send a photo — we can usually tell.",
      },
      {
        question: "Will it stop a truck?",
        answer:
          "Be careful with this question and be careful with anyone who answers it too quickly. Our bollards are protective and deterrent products for the applications described here. They are not crash-rated. If your project requires certified anti-ram performance to ASTM F2656 or IWA 14-1, we will say so and refer you to a rated manufacturer.",
      },
    ],
    relatedSegments: ["retail-storefronts", "warehouse-industrial", "property-management"],
  },
  {
    slug: "bollard-covers",
    name: "Bollard Covers & Visibility Products",
    navLabel: "Bollard Covers",
    eyebrow: "Visibility & appearance",
    headline: "Bollard covers and visibility products",
    intro:
      "A faded, rusted, chipped bollard fails two jobs at once: it stops being visible, and it makes the whole site look neglected. Covers restore both in minutes, without a crew, a repaint or a shutdown. This is usually the easiest and least disruptive improvement available on a commercial site.",
    metaTitle: "Bollard Covers & Sleeves",
    metaDescription:
      "High-visibility bollard covers and sleeves for commercial and industrial sites across the GTA. Restore visibility without repainting. Quote in 24 hours.",
    applications: [
      "Warehouse and dock bollards that are chipped, scraped or faded",
      "Parking garage and ramp bollards after winter damage",
      "Retail frontages failing a brand or franchisor appearance audit",
      "Sites where repainting annually has become a recurring line item",
      "Anywhere high-visibility compliance needs restoring quickly",
    ],
    variants: [
      {
        name: "High-Visibility Bollard Cover",
        summary:
          "A moulded sleeve that fits over the existing bollard. Restores high-visibility colour immediately and hides impact damage, rust and chipped paint underneath.",
        specs: [
          { label: "Fit", value: "Sized to existing bollard outside diameter" },
          { label: "Colours", value: "Safety yellow, and other colours on request" },
          { label: "Installation", value: "Slides over existing bollard — no tools, no shutdown" },
          { label: "Maintenance", value: "Wipe clean; replace individually when struck" },
          { label: "Options", value: "Reflective banding for low-light areas" },
        ],
        notes:
          "Measure the outside diameter of the existing bollard, not the nominal pipe size. If you are unsure, send us a photo with a tape measure held against it.",
      },
      {
        name: "Reflective Banding & Visibility Upgrades",
        summary:
          "Where the bollard itself is sound but visibility is the problem. Common in poorly lit garages, yards and dock aprons.",
        specs: [
          { label: "Application", value: "Applied to new or existing bollards" },
          { label: "Use case", value: "Low-light garages, night operations, yard traffic" },
          { label: "Pairs with", value: "Covers, or supplied on new bollards at order" },
        ],
      },
    ],
    choosing: [
      {
        question: "Cover or replace?",
        answer:
          "If the bollard is structurally sound and only looks bad, cover it. If it is bent, loose at the base, or the base plate anchors have pulled, replace it — a cover on a compromised bollard hides a problem instead of fixing it. Send a photo and we will tell you honestly which one you are looking at.",
      },
      {
        question: "Why not just repaint?",
        answer:
          "Repainting is labour, it needs dry weather and a cure window, and it has to be repeated. A cover goes on in under a minute, does not need redoing annually, and can be replaced individually for a few dollars when a forklift finds it.",
      },
      {
        question: "Can we standardise across a portfolio?",
        answer:
          "Yes, and this is the sensible way to buy them. We keep your sizes and colours on file so re-orders across multiple buildings are a one-line email rather than a fresh measurement exercise.",
      },
    ],
    relatedSegments: ["warehouse-industrial", "property-management", "retail-storefronts"],
  },
  {
    slug: "bike-racks",
    name: "Bike Racks",
    navLabel: "Bike Racks",
    eyebrow: "Bicycle parking",
    hero: {
      src: "/products/bike-racks-hero-2.webp",
      alt: "Row of steel bicycle rack hoops casting long shadows on a concrete plaza",
    },
    headline: "Commercial and public bike racks",
    intro:
      "In Toronto, bicycle parking is a code requirement rather than an amenity. Chapter 230 of Zoning By-law 569-2013 sets bicycle parking rates, short-term spaces must be visible and publicly accessible at grade, and the Toronto Green Standard applies to new mid-to-high-rise residential and all ICI development. If you are filing a Site Plan Approval application, there is a bike rack line item in your project.",
    metaTitle: "Commercial Bike Racks Toronto",
    metaDescription:
      "Stainless (SBD-SSBR01), Round, Double Moon and 4-Way bike racks for commercial, condo and public properties in Toronto and the GTA. Submittal-ready specifications.",
    applications: [
      "New ICI and mid/high-rise development under Site Plan Approval",
      "Condominium visitor and resident short-term bicycle parking",
      "Commercial plazas, offices and campus frontages",
      "Streetscape and BIA improvements",
      "Schools, community centres and transit-adjacent sites",
      "Replacing informal parking where bikes are locked to railings and accessibility posts",
    ],
    variants: [
      {
        name: "Stainless Steel Bike Rack",
        model: "SBD-SSBR01",
        summary:
          "Built for durability, security and style. Integrated side loops give U-lock compatibility at two heights, and the heavy-duty 12-inch base plate provides exceptional stability. Specified for urban streets, parks, schools, businesses and public spaces where finish quality is part of the design intent.",
        image: { src: "/products/sbd-ssbr01-stainless.webp", alt: "SBD-SSBR01 stainless steel bike rack with integrated side loops" },
        specs: [
          { label: "Overall height", value: "42 in" },
          { label: "Loop height", value: "23 in" },
          { label: "Overall width", value: "33.46 in" },
          { label: "Tube diameter", value: "1.89 in" },
          { label: "Base diameter", value: "12 in" },
          { label: "Mounting holes", value: "4 \u00d7 \u00d81/2 in" },
          { label: "Surface", value: "Stainless steel" },
          { label: "Capacity", value: "1 to 2 bikes" },
        ],
        notes:
          "Round base plate with four pre-drilled mounting holes for secure surface installation. Corrosion-resistant through Ontario winters.",
      },
      {
        name: "Round Bike Rack",
        model: "SBD-UBRSS01",
        summary:
          "Simple, sturdy and secure. The classic hoop offers the two points of contact and U-lock capability cyclists trust, with clean lines and all-steel construction that sits comfortably in architectural and landscape designs.",
        image: { src: "/products/sbd-ubrss01-round.webp", alt: "SBD-UBRSS01 round hoop bike rack with flanged base plates" },
        specs: [
          { label: "Width", value: "33.46 in" },
          { label: "Height", value: "31.5 in" },
          { label: "Tube diameter", value: "1.89 in" },
          { label: "Surface", value: "Hot-dip galvanized (HDG)" },
          { label: "Mounting", value: "Surface mount, flanged base plates" },
          { label: "Capacity", value: "1 to 2 bikes" },
        ],
        notes:
          "Hot-dip galvanizing gives long service life against road salt. Polished stainless available on request for design-led frontages.",
      },
      {
        name: "Double Moon Bike Rack Bollard",
        model: "SBD-BRBM01",
        summary:
          "A bollard and a bike rack in one footprint. The circular locking loops park two bicycles while the post itself works as vehicle access control \u2014 useful where a site needs both jobs done in a tight frontage. Assembles on site and mounts to a compact 120 mm base plate.",
        image: { src: "/products/sbd-brbm01-double-moon.webp", alt: "SBD-BRBM01 Double Moon bike rack bollard in powder-coated black" },
        specs: [
          { label: "Post size", value: "60 mm" },
          { label: "Height", value: "853 mm" },
          { label: "Width", value: "338 mm" },
          { label: "Base plate", value: "120 mm" },
          { label: "Mounting style", value: "Surface mount" },
          { label: "Finish", value: "Powder-coated black" },
          { label: "Capacity", value: "2 bikes" },
        ],
        notes:
          "Also available in-ground for installation into a concrete footing where the site allows.",
      },
      {
        name: "4-Way Bike Rack",
        model: "SBD-CBS4W01",
        summary:
          "The highest-capacity unit in the range: four U-shaped locking tubes around a heavy central post park up to eight bicycles in a single compact footprint. The efficient answer where a site plan calls for numbers, not just presence.",
        image: { src: "/products/sbd-cbs4w01-4way.webp", alt: "SBD-CBS4W01 4-Way bike rack with four U-shaped locking tubes" },
        specs: [
          { label: "Overall height", value: "35.25 in" },
          { label: "Overall width", value: "28.25 in" },
          { label: "Post diameter", value: "4.5 in" },
          { label: "U-shaped tubes", value: "1.5 in diameter" },
          { label: "Bike capacity", value: "Up to 8 bikes" },
          { label: "Finish", value: "Powder-coated black" },
        ],
        notes:
          "One 4-Way replaces a row of four hoops \u2014 worth pricing against multiple single racks when space is tight.",
      },
    ],
    choosing: [
      {
        question: "How many racks does my project need?",
        answer:
          "It depends on the use, the gross floor area and the zone under Chapter 230. Short-term spaces must be located within 30 metres of a pedestrian entrance to the principal building and be publicly accessible at grade. Send us the drawing or the SPA submission and we will help you count.",
      },
      {
        question: "Galvanized or stainless?",
        answer:
          "Hot-dip galvanized is the value choice and performs well through Ontario winters — it is what most ICI and streetscape projects use. Stainless is specified where the rack is a visible part of the design at a building entrance or high-end frontage. The Round rack (SBD-UBRSS01) is HDG; the SBD-SSBR01 is stainless steel.",
      },
      {
        question: "What about AODA clearances?",
        answer:
          "Rack placement has to respect clear path-of-travel widths and not create a projection hazard. This is a layout question more than a product question, and it is worth resolving on the drawing rather than on site. We can advise on spacing and setback.",
      },
      {
        question: "Can you provide submittal documentation?",
        answer:
          "Yes. Dimensional data, materials and mounting details are on our spec sheets. Tell us what the specification calls for and we will confirm compliance and lead time in writing.",
      },
    ],
    relatedSegments: ["contractors", "property-management", "retail-storefronts"],
  },
  {
    slug: "traffic-access-barriers",
    name: "Traffic & Access Barriers",
    navLabel: "Traffic & Access Barriers",
    eyebrow: "Access management",
    headline: "Traffic and access barriers",
    intro:
      "Bollards protect a point. Barriers organise a whole area — where vehicles go, where people walk, and where the two are not allowed to meet. Used to define parking, protect equipment and staging areas, and separate pedestrian routes from operating traffic.",
    metaTitle: "Traffic & Access Barriers",
    metaDescription:
      "Traffic and access barriers for commercial and industrial sites across the GTA. Define vehicle and pedestrian zones, protect equipment and staging areas.",
    applications: [
      "Separating pedestrian routes from forklift and yard traffic",
      "Protecting racking ends, staging areas and equipment",
      "Defining visitor parking, fire routes and service lanes",
      "Controlling access to restricted or hazardous zones",
      "Organising vehicle flow at loading and receiving areas",
    ],
    variants: [
      {
        name: "Guard Rail & Perimeter Barriers",
        summary:
          "Continuous protection where a single bollard would leave a gap. Used along walkways, around equipment and at the ends of racking runs.",
        specs: [
          { label: "Application", value: "Pedestrian separation, equipment protection" },
          { label: "Mounting", value: "Surface mount to concrete" },
          { label: "Finish", value: "High-visibility safety yellow" },
          { label: "Configuration", value: "Straight runs, corners and returns" },
        ],
      },
      {
        name: "Access Control Barriers",
        summary:
          "Where a route needs to be closed to general traffic but opened for authorised vehicles. Fire routes, service lanes, restricted yards.",
        specs: [
          { label: "Types", value: "Swing, drop and removable configurations" },
          { label: "Locking", value: "Padlock or keyed" },
          { label: "Finish", value: "High-visibility or powder coat" },
        ],
        notes:
          "Powered and hydraulic access systems fall outside our supply. We will refer you to a specialist rather than quote something we do not stand behind.",
      },
      {
        name: "Parking & Wheel Stops",
        summary:
          "Low-cost definition of parking bays, setbacks and vehicle overhang limits. Frequently paired with bollards at building faces.",
        specs: [
          { label: "Application", value: "Parking bays, curb protection, overhang control" },
          { label: "Mounting", value: "Anchored to asphalt or concrete" },
        ],
      },
    ],
    choosing: [
      {
        question: "Barrier or bollards?",
        answer:
          "Bollards where the risk is a specific point — a door, a panel, a corner. Barriers where the risk is anywhere along a line, such as a walkway running beside an operating aisle. Most industrial sites need both, and a walkthrough is the fastest way to work out which goes where.",
      },
      {
        question: "Is painted floor marking enough?",
        answer:
          "For wayfinding, yes. As a control, no — and auditors will say so. A painted line does not stop a forklift. If a corrective action plan calls for pedestrian separation, it is generally asking for a physical control.",
      },
    ],
    relatedSegments: ["warehouse-industrial", "property-management", "contractors"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
