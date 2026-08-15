export type SpecRow = { label: string; value: string };

export type Variant = {
  name: string;
  model?: string;
  summary: string;
  specs: SpecRow[];
  notes?: string;
  image?: { src: string; alt: string };
  /** Extra views shown in a swipeable gallery alongside `image`. */
  gallery?: { src: string; alt: string }[];
  datasheet?: string;
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
    hero: {
      src: "/products/safety-bollards-hero.webp",
      alt: "A row of stainless steel bollards with yellow bands protecting the glass frontage of a commercial building",
    },
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
    slug: "yellow-steel-bollards",
    name: "Yellow Steel Bollards",
    navLabel: "Yellow Steel Bollards",
    eyebrow: "High visibility",
    hero: {
      src: "/products/yellow-steel-bollards-hero.webp",
      alt: "A round yellow bollard with a red reflective band and a square yellow bollard with black hazard striping, bolted to a paved walkway outside a commercial building",
    },
    headline: "Yellow steel bollards",
    intro:
      "The high-visibility workhorse. Steel pipe finished in safety yellow with reflective banding, used wherever a bollard needs to be seen before it is hit. This is the highest-volume bollard on most warehouse and industrial sites, and the one that gets replaced most often.",
    metaTitle: "Yellow Steel Bollards Toronto",
    metaDescription:
      "Round and square yellow steel bollards in 36in, 42in and 48in heights for warehouse, dock and industrial sites across Toronto and the GTA. Datasheets and dimensions.",
    applications: [
      "Loading dock corners, door tracks and dock aprons",
      "Forklift aisles and pedestrian walkway edges",
      "Racking ends and equipment protection inside the building",
      "Gas meters, electrical panels and fire risers",
      "Parking garage ramps and pillar corners",
      "Driveways, parking lots and industrial yards",
    ],
    variants: [
      {
        name: "Round Steel Bollard — 4.5 in × 36 in",
        model: "SBD-RSB4536Y",
        datasheet: "/datasheets/SBD-RSB4536Y-datasheet.pdf",
        summary:
          "The standard height for aisle ends, racking protection and anything a forklift operator needs to see at eye level from a seated position. Domed cap and a red reflective band above the shaft.",
        image: {
          src: "/products/sbd-rsb-round-yellow.webp",
          alt: "SBD-RSB4536Y round yellow steel bollard with red reflective band and flanged base plate",
        },
        specs: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "UV powder-coated yellow" },
          { label: "Size", value: "4.5\u2033 \u00d7 36\u2033" },
          { label: "Base plate", value: "8\u2033 (203 mm)" },
          { label: "Hole size", value: "5/8\u2033" },
          { label: "Wall thickness", value: "1/8\u2033" },
          { label: "Reflective tape", value: "Red" },
        ],
      },
      {
        name: "Round Steel Bollard — 4.5 in × 42 in",
        model: "SBD-RSB4542Y",
        datasheet: "/datasheets/SBD-RSB4542Y-datasheet.pdf",
        summary:
          "The common commercial height — tall enough to be seen over a car hood, low enough not to obstruct sightlines. The default choice at storefronts, ramps and building approaches.",
        image: {
          src: "/products/sbd-rsb-round-yellow.webp",
          alt: "SBD-RSB4542Y round yellow steel bollard with red reflective band and flanged base plate",
        },
        specs: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "UV powder-coated yellow" },
          { label: "Size", value: "4.5\u2033 \u00d7 42\u2033" },
          { label: "Base plate", value: "8\u2033 (203 mm)" },
          { label: "Hole size", value: "5/8\u2033" },
          { label: "Wall thickness", value: "1/8\u2033" },
          { label: "Reflective tape", value: "Red" },
        ],
      },
      {
        name: "Round Steel Bollard — 6 in × 48 in",
        model: "SBD-RSB648Y",
        datasheet: "/datasheets/SBD-RSB648Y-datasheet.pdf",
        summary:
          "The heaviest of the three: a wider 6 inch shaft and 48 inches above grade, for truck yards, dock aprons and anywhere the vehicle likely to hit it is larger than a car.",
        image: {
          src: "/products/sbd-rsb-round-yellow.webp",
          alt: "SBD-RSB648Y round yellow steel bollard with red reflective band and flanged base plate",
        },
        specs: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "UV powder-coated yellow" },
          { label: "Size", value: "6\u2033 \u00d7 48\u2033" },
          { label: "Base plate", value: "8\u2033 (203 mm)" },
          { label: "Hole size", value: "5/8\u2033" },
          { label: "Wall thickness", value: "1/8\u2033" },
          { label: "Reflective tape", value: "Red" },
        ],
      },
      {
        name: "Square Steel Bollard — 4 in × 36 in",
        model: "SBD-SSB436Y",
        datasheet: "/datasheets/SBD-SSB436Y-datasheet.pdf",
        summary:
          "Square section with a black hazard stripe rather than a reflective band. Sits flat against a wall, column or racking upright, which makes it useful where a round post would leave an awkward gap.",
        image: {
          src: "/products/sbd-ssb-square-yellow.webp",
          alt: "SBD-SSB436Y square yellow steel bollard with black hazard striping on a square base plate",
        },
        specs: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "UV powder-coated yellow" },
          { label: "Size", value: "4\u2033 \u00d7 36\u2033" },
          { label: "Base plate", value: "8\u2033 (203 mm)" },
          { label: "Hole size", value: "5/8\u2033" },
          { label: "Wall thickness", value: "1/8\u2033" },
          { label: "Reflective tape", value: "Black" },
        ],
      },
    ],
    choosing: [
      {
        question: "Which height should I order?",
        answer:
          "36 inches for inside the building — aisle ends, racking, equipment — where the driver is seated on a forklift. 42 inches outdoors at storefronts, ramps and walkways, which is the common commercial standard. 48 inches where trucks rather than cars are the risk. If you are unsure, send a photo of the location and we will specify it.",
      },
      {
        question: "Round or square?",
        answer:
          "Round for open positions and anywhere the bollard is seen from all sides. Square where the post sits against a wall, a column or a racking upright, because the flat face closes the gap a round shaft leaves. Both take the same anchors.",
      },
      {
        question: "What do I need for the base?",
        answer:
          "All four mount on an 8 inch base plate with 5/8 inch holes, anchored to concrete. The concrete needs to be sound and thick enough to hold the anchors — asphalt and pavers usually need a different approach. Send a photo of the surface if you are not sure.",
      },
      {
        question: "Will it stop a truck?",
        answer:
          "Be careful with this question. These are protective and deterrent bollards for the applications described here. They are not crash-rated. If your project requires certified anti-ram performance to ASTM F2656 or IWA 14-1, we will say so and refer you to a rated manufacturer.",
      },
      {
        question: "The paint is already faded on ours. Do I have to replace them?",
        answer:
          "Usually not. A bollard cover slides over the existing post and restores high-visibility colour in minutes without a crew or a repaint. Replace the post when it is bent or rusted through, not when it has just lost its colour.",
      },
    ],
    relatedSegments: ["warehouse-industrial", "property-management", "retail-storefronts"],
  },
  {
    slug: "flexible-bollards",
    name: "Flexible Bollards",
    navLabel: "Flexible Bollards",
    eyebrow: "Impact recovery",
    hero: {
      src: "/products/flexible-bollards-hero.webp",
      alt: "A yellow flexible spring bollard with a red reflective band and ribbed spring base, bolted to a paved forecourt outside a commercial building, with two more in the background",
    },
    headline: "Flexible bollards",
    intro:
      "A bollard that bends and stands back up. Where contact is expected rather than exceptional — drive-thru lanes, tight turns, wash bays — a spring-loaded bollard absorbs the hit and returns to position, instead of bending permanently and needing replacement every season.",
    metaTitle: "Flexible Spring Bollards Toronto",
    metaDescription:
      "Spring-loaded flexible bollards that flex on impact and return to position. Bolt-on mounting, 42in high, for drive-thrus and parking lots across Toronto and the GTA.",
    applications: [
      "Drive-thru lanes and order points",
      "Tight turns and pinch points where clipping is routine",
      "Car wash and wash bay guidance",
      "Parking lot islands and lane definition",
      "Sites where a bent steel bollard has become a recurring line item",
      "Locations where damage to the vehicle matters as much as damage to the site",
    ],
    variants: [
      {
        name: "Flexible Spring Bollard — 42″",
        model: "SBD-FSB42Y",
        datasheet: "/datasheets/SBD-FSB42Y-datasheet.pdf",
        summary:
          "Steel post on a spring base. A vehicle clips it, the bollard lays over, and the spring stands it back up — no bent post to cut out and replace. Bolt-on base plate, so it goes down without a core drill.",
        image: {
          src: "/products/sbd-fsb42y-flexible-yellow.webp",
          alt: "SBD-FSB42Y yellow flexible spring bollard with a red reflective band, black cap and bolt-on spring base",
        },
        specs: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "Yellow Powder Coated" },
          { label: "Height", value: "42″" },
          { label: "Diameter", value: "2 1/8″" },
          { label: "Mount type", value: "Bolt-On" },
          { label: "Reflective tape", value: "Red (High Visibility)" },
          { label: "Flexibility", value: "Spring Loaded" },
        ],
      },
    ],
    choosing: [
      {
        question: "When is flexible the right choice?",
        answer:
          "When contact is routine rather than rare. A drive-thru lane, a tight turn, a wash bay — anywhere a rigid post gets clipped several times a year. The spring absorbs the hit and stands the bollard back up, which takes the replacement off your maintenance list.",
      },
      {
        question: "When is it the wrong choice?",
        answer:
          "When the job is to physically stop a vehicle. A flexible bollard is designed to give way. If you are protecting glazing, a gas meter or a dock door, you want a fixed steel post, not this. Tell us what is behind the bollard and we will say which one the application needs.",
      },
      {
        question: "Does it damage the vehicle?",
        answer:
          "Far less than a rigid post does. That matters at customer-facing locations, where a scraped bumper turns into a claim. It is one of the main reasons drive-thrus specify flexible over fixed.",
      },
      {
        question: "How does it mount?",
        answer:
          "Bolt-on base plate, anchored to concrete — no core drill and no sleeve to set into the surface. That also makes it straightforward to relocate if the lane layout changes.",
      },
      {
        question: "Will it stop a truck?",
        answer:
          "No, and it is not meant to. This is a guidance and delineation product that gives way on impact by design. It is not crash-rated. If your project requires certified anti-ram performance to ASTM F2656 or IWA 14-1, we will say so and refer you to a rated manufacturer.",
      },
    ],
    relatedSegments: ["retail-storefronts", "property-management", "warehouse-industrial"],
  },
  {
    slug: "removable-bollards",
    name: "Removable Bollards",
    navLabel: "Removable Bollards",
    eyebrow: "Occasional access",
    hero: {
      src: "/products/removable-bollards-hero-2.webp",
      alt: "A satin stainless and a yellow removable bollard side by side, each with a red band and a padlocked ground sleeve, on a paved forecourt outside a commercial building",
    },
    headline: "Removable bollards",
    intro:
      "For access that has to be closed most of the time and open occasionally. The bollard drops into a ground sleeve and lifts out once the padlock is released, leaving a flush cap in the surface — fire routes, service lanes, patio seasons and curbside pickup zones.",
    metaTitle: "Removable Bollards Toronto",
    metaDescription:
      "Removable bollards with ground sleeve and padlock, in yellow powder-coated steel and satin stainless, for fire routes and service lanes across Toronto and the GTA.",
    applications: [
      "Fire route access that must stay closed to general traffic",
      "Service lanes and delivery entries opened on a schedule",
      "Seasonal patios and curbside pickup zones",
      "Restricted yards and staff-only entries",
      "Event and market closures on private property",
      "Anywhere a permanent bollard would block a legitimate vehicle twice a year",
    ],
    variants: [
      {
        name: "Removable Steel Bollard — 4.5″ × 36″",
        model: "SBD-RSB436Y",
        datasheet: "/datasheets/SBD-RSB436Y-datasheet-2.pdf",
        summary:
          "Yellow powder-coated steel in the slimmer size, with a red reflective band. The high-visibility option where the opening is narrow and the post still needs to be seen before it is reversed into.",
        image: {
          src: "/products/sbd-rsb636y-removable-yellow.webp",
          alt: "SBD-RSB436Y removable yellow steel bollard with a red reflective band, padlock and ground sleeve",
        },
        specs: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "UV powder-coated yellow" },
          { label: "Size", value: "4.5″ × 36″" },
          { label: "Diameter", value: "4.5″" },
          { label: "Reflective tape", value: "Red" },
        ],
      },
      {
        name: "Removable Stainless Bollard — 4″ × 36″",
        model: "SBD-RSSB436",
        datasheet: "/datasheets/SBD-RSSB436-datasheet.pdf",
        summary:
          "Satin stainless in the slimmer size, for customer-facing frontages where a painted post would look wrong. Same padlock and ground sleeve arrangement, in a finish that does not need repainting.",
        image: {
          src: "/products/sbd-rss-removable-stainless.webp",
          alt: "SBD-RSSB436 removable satin stainless bollard with padlock and ground sleeve",
        },
        specs: [
          { label: "Material", value: "Stainless Steel" },
          { label: "Finish", value: "Satin" },
          { label: "Size", value: "4″ × 36″" },
          { label: "Diameter", value: "4.5″" },
          { label: "Reflective tape", value: "Optional" },
        ],
      },
      {
        name: "Removable Steel Bollard — 6″ × 36″",
        model: "SBD-RSB636Y",
        datasheet: "/datasheets/SBD-RSB636Y-datasheet-2.pdf",
        summary:
          "The heavier yellow option at 6 inches, for openings that see larger vehicles but still need the post to stand out.",
        image: {
          src: "/products/sbd-rsb636y-removable-yellow.webp",
          alt: "SBD-RSB636Y removable yellow steel bollard with a red reflective band, padlock and ground sleeve",
        },
        specs: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "UV powder-coated yellow" },
          { label: "Size", value: "6″ × 36″" },
          { label: "Diameter", value: "6.67″" },
          { label: "Reflective tape", value: "Red" },
        ],
      },
      {
        name: "Removable Stainless Bollard — 6″ × 36″",
        model: "SBD-RSSB636",
        datasheet: "/datasheets/SBD-RSSB636-datasheet.pdf",
        summary:
          "The heavier stainless option at 6 inches, where the opening sees larger vehicles but the finish still has to suit a public frontage.",
        image: {
          src: "/products/sbd-rss-removable-stainless.webp",
          alt: "SBD-RSSB636 removable satin stainless bollard with padlock and ground sleeve",
        },
        specs: [
          { label: "Material", value: "Stainless Steel" },
          { label: "Finish", value: "Satin" },
          { label: "Size", value: "6″ × 36″" },
          { label: "Diameter", value: "6.67″" },
          { label: "Reflective tape", value: "Optional" },
        ],
      },
    ],
    choosing: [
      {
        question: "Yellow steel or stainless?",
        answer:
          "Yellow where being seen matters — yards, service lanes, anywhere a driver needs to notice the post before reversing into it. Stainless where the bollard sits in front of customers and the finish is part of the frontage. Stainless also stops the annual repaint.",
      },
      {
        question: "What does the ground sleeve need?",
        answer:
          "A core drill into sound concrete, and a thought about where water goes once the sleeve fills. That is the part people forget. Send a photo of the surface and we will tell you whether the location suits a sleeve or whether a fixed bollard makes more sense.",
      },
      {
        question: "Removable or fixed?",
        answer:
          "Fixed unless something legitimately needs to drive through. Removable costs more, needs the sleeve set into the surface, and adds a maintenance item. If access is genuinely needed only once or twice a year, a fixed bollard with a planned removal is often cheaper over the life of the site.",
      },
      {
        question: "How is it secured?",
        answer:
          "A padlock through the sleeve collar holds the bollard down. Release the lock and it lifts out by hand, leaving the sleeve flush with the surface. Keep the cap in place when the bollard is out, or the sleeve fills with grit.",
      },
      {
        question: "Will it stop a truck?",
        answer:
          "No, and be careful with anyone who says otherwise about a removable post. These are protective and deterrent products for the applications described here. They are not crash-rated. If your project requires certified anti-ram performance to ASTM F2656 or IWA 14-1, we will say so and refer you to a rated manufacturer.",
      },
    ],
    relatedSegments: ["property-management", "retail-storefronts", "warehouse-industrial"],
  },
  {
    slug: "bike-racks",
    name: "Bike Racks",
    navLabel: "Bike Racks",
    eyebrow: "Bicycle parking",
    hero: {
      src: "/products/bike-racks-hero-4.webp",
      alt: "A row of stainless and black bike racks — post, round hoop, U and Double Moon — on a paved commercial forecourt at dusk",
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
        datasheet: "/datasheets/SBD-SSBR01-datasheet-2.pdf",
        summary:
          "Built for durability, security and style. Integrated side loops give U-lock compatibility at two heights, and the heavy-duty 12-inch base plate provides exceptional stability. Specified for urban streets, parks, schools, businesses and public spaces where finish quality is part of the design intent.",
        image: { src: "/products/sbd-ssbr01-stainless.webp", alt: "SBD-SSBR01 stainless steel bike rack with integrated side loops" },
        gallery: [
          { src: "/products/sbd-ssbr01-front.webp", alt: "SBD-SSBR01 stainless bike rack from the front, showing both integrated side loops" },
          { src: "/products/sbd-ssbr01-side.webp", alt: "SBD-SSBR01 stainless bike rack from the side, with the loops edge on to the post" },
          { src: "/products/sbd-ssbr01-top.webp", alt: "SBD-SSBR01 stainless bike rack from above, showing the post cap and the loops either side" },
          { src: "/products/sbd-ssbr01-baseplate.webp", alt: "Close view of the SBD-SSBR01 round base plate and its mounting holes" },
        ],
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
        name: "Double Moon Bike Rack Bollard",
        model: "SBD-BRBM01",
        datasheet: "/datasheets/SBD-BRBM01-datasheet-2.pdf",
        summary:
          "A bollard and a bike rack in one footprint. The circular locking loops park two bicycles while the post itself works as vehicle access control \u2014 useful where a site needs both jobs done in a tight frontage. Assembles on site and mounts to a compact 120 mm base plate.",
        image: { src: "/products/sbd-brbm01-double-moon.webp", alt: "SBD-BRBM01 Double Moon bike rack bollard in powder-coated black" },
        gallery: [
          { src: "/products/sbd-brbm01-front.webp", alt: "SBD-BRBM01 Double Moon bollard from the front, with the loop edge on to the post" },
          { src: "/products/sbd-brbm01-angle.webp", alt: "SBD-BRBM01 Double Moon bollard at an angle, showing the locking loop" },
          { src: "/products/sbd-brbm01-top.webp", alt: "SBD-BRBM01 Double Moon bollard from above, showing the loop across the base plate" },
          { src: "/products/sbd-brbm01-baseplate.webp", alt: "Close view of the SBD-BRBM01 base plate and its eight mounting holes" },
        ],
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
        name: "Stainless Steel U Bike Rack",
        model: "SBD-UBR31601",
        datasheet: "/datasheets/SBD-UBR31601-datasheet-2.pdf",
        summary:
          "The minimalist U-shape in Grade 316 stainless \u2014 the highest corrosion resistance in the range, suited to heavy de-icing salt exposure. Two points of contact and U-lock capability in a clean form that blends into sidewalks, parks, campuses and commercial frontages.",
        image: { src: "/products/sbd-ubr31601-u-rack.webp", alt: "SBD-UBR31601 stainless steel U bike rack with flanged base plates" },
        gallery: [
          { src: "/products/sbd-ubr31601-angle.webp", alt: "SBD-UBR31601 stainless U bike rack seen at an angle, showing both flanged base plates" },
          { src: "/products/sbd-ubr31601-top.webp", alt: "SBD-UBR31601 stainless U bike rack from above, showing the base plate mounting holes" },
          { src: "/products/sbd-ubr31601-top-2.webp", alt: "SBD-UBR31601 stainless U bike rack laid flat, base plate faces to camera" },
          { src: "/products/sbd-ubr31601-post.webp", alt: "Single stainless upright with a domed top and flanged base plate" },
        ],
        specs: [
          { label: "Width", value: "33.46 in" },
          { label: "Height", value: "31.5 in" },
          { label: "Tube diameter", value: "1.89 in" },
          { label: "Material", value: "Stainless Steel 316" },
          { label: "Capacity", value: "1 to 2 bikes" },
          { label: "Mounting", value: "Surface mount (bolted)" },
        ],
        notes:
          "Grade 316 is the specification to reach for where road salt is heavy \u2014 garage entries, transit-adjacent sites and exposed frontages.",
      },
      {
        name: "4-Way Bike Rack",
        model: "SBD-CBS4W01",
        datasheet: "/datasheets/SBD-CBS4W01-datasheet-2.pdf",
        summary:
          "The highest-capacity unit in the range: four U-shaped locking tubes around a heavy central post park up to eight bicycles in a single compact footprint. The efficient answer where a site plan calls for numbers, not just presence.",
        image: { src: "/products/sbd-cbs4w01-4way.webp", alt: "SBD-CBS4W01 4-Way bike rack with four U-shaped locking tubes" },
        gallery: [
          { src: "/products/sbd-cbs4w01-front.webp", alt: "SBD-CBS4W01 4-Way bike rack, front elevation with the loops square to the post" },
          { src: "/products/sbd-cbs4w01-angle.webp", alt: "SBD-CBS4W01 4-Way bike rack seen at an angle, showing all four locking loops" },
          { src: "/products/sbd-cbs4w01-top.webp", alt: "SBD-CBS4W01 4-Way bike rack from above, showing the four loops and the bolt-down base plate" },
        ],
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
      {
        name: "Round Bike Rack",
        model: "SBD-UBRSS01",
        datasheet: "/datasheets/SBD-UBRSS01-datasheet-4.pdf",
        summary:
          "Simple, sturdy and secure. The classic hoop offers the two points of contact and U-lock capability cyclists trust, with clean lines and all-steel construction that sits comfortably in architectural and landscape designs.",
        image: { src: "/products/sbd-ubrss01-round.webp", alt: "SBD-UBRSS01 round hoop bike rack with flanged base plates" },
        gallery: [
          { src: "/products/sbd-ubrss01-side.webp", alt: "SBD-UBRSS01 round bike rack seen edge on, showing tube profile" },
          { src: "/products/sbd-ubrss01-top.webp", alt: "SBD-UBRSS01 round bike rack viewed from above, base plate to base plate" },
          { src: "/products/sbd-ubrss01-baseplate.webp", alt: "Close view of the SBD-UBRSS01 flanged base plate and mounting holes" },
        ],
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
          "Hot-dip galvanized is the value choice and performs well through Ontario winters — it is what most ICI and streetscape projects use. Stainless is specified where the rack is a visible part of the design at a building entrance or high-end frontage. The Round rack (SBD-UBRSS01) is HDG; the SBD-SSBR01 is stainless, and the U rack (SBD-UBR31601) is Grade 316 stainless for heavy salt exposure.",
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
    slug: "bollard-covers",
    name: "Bollard Covers & Visibility Products",
    navLabel: "Bollard Covers",
    eyebrow: "Visibility & appearance",
    hero: {
      src: "/products/bollard-covers-hero.webp",
      alt: "Two black bollards with red and white banding marking a city street corner",
    },
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
    slug: "traffic-access-barriers",
    name: "Traffic & Access Barriers",
    navLabel: "Traffic & Access Barriers",
    eyebrow: "Access management",
    hero: {
      src: "/products/traffic-access-barriers-hero.webp",
      alt: "Red and white barrier arms across a vehicle entrance, closing the route to general traffic",
    },
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
