/**
 * PROTECTION GUIDES
 * ---------------------------------------------------------------
 * One article per application, reached from the "where bollards go" tiles on
 * the home page. Each explains what gets struck on that kind of site, what a
 * properly placed bollard changes, and which range suits it.
 *
 * Adding an object here creates the page and its sitemap entry. Keep the same
 * slug as the tile's photo in `applications.ts`.
 *
 * These are protective and deterrent products. Nothing here claims a crash
 * rating — the capability statement appears on every one of these pages.
 */

export type Guide = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  /** The standfirst heading, e.g. "Protect Your Gas Station, Customers & Equipment". */
  subtitle: string;
  intro: string;
  /** Second intro paragraph naming the company and the service area. */
  lede: string;
  metaTitle: string;
  metaDescription: string;
  /** The highest-value thing to protect on this kind of site. */
  focus: { title: string; paras: string[] };
  /** Closing supply-and-installation paragraph. */
  supply: string;
  /** What actually gets struck on this kind of site. */
  protects: string[];
  /** What a properly placed bollard changes. */
  outcomes: string[];
  /** The ranges that suit this application. */
  ranges: { href: string; title: string; blurb: string }[];
  note: { title: string; body: string };
};

const RANGE = {
  yellow: {
    href: "/products/yellow-steel-bollards",
    title: "Yellow steel bollards",
    blurb: "High-visibility powder-coated steel, 36in to 48in, with reflective banding.",
  },
  galvanized: {
    href: "/products/galvanized-steel-bollards",
    title: "Galvanized steel bollards",
    blurb: "Hot-dip galvanized for exposed positions where salt and standing water do the damage.",
  },
  stainless: {
    href: "/products/stainless-steel-bollards",
    title: "Stainless steel bollards",
    blurb: "Satin stainless, flat top or domed, where the finish is part of the frontage.",
  },
  flexible: {
    href: "/products/flexible-bollards",
    title: "Flexible bollards",
    blurb: "Spring-loaded posts that bend on impact and stand back up.",
  },
  removable: {
    href: "/products/removable-bollards",
    title: "Removable bollards",
    blurb: "Padlocked into a ground sleeve, lifted out when access is needed.",
  },
  retractable: {
    href: "/products/retractable-bollards",
    title: "Retractable bollards",
    blurb: "Manual lift units that drop flush into their own casing.",
  },
  automatic: {
    href: "/products/automatic-bollards",
    title: "Automatic bollards",
    blurb: "Electrically actuated rising bollards for openings used many times a day.",
  },
  covers: {
    href: "/products/bollard-covers",
    title: "Bollard covers",
    blurb: "Restore high-visibility colour over an existing post, without a repaint.",
  },
  barriers: {
    href: "/products/traffic-access-barriers",
    title: "Traffic & access barriers",
    blurb: "Guard rail and barrier runs where the risk follows a line, not a point.",
  },
  bikeRacks: {
    href: "/products/bike-racks",
    title: "Bike racks",
    blurb: "Stainless, round, Double Moon, 4-Way and 316 stainless U racks.",
  },
  signBollards: {
    href: "/products/sign-bollards",
    title: "Sign bollards",
    blurb: "Marks the rule and protects the space from one footing.",
  },
  parking: {
    href: "/products/parking-protection",
    title: "Parking protection",
    blurb: "Wheel stops, column guards and bay definition.",
  },
  safety: {
    href: "/products/safety-bollards",
    title: "All safety bollards",
    blurb: "The full range with dimensions, material grades and mounting details.",
  },
};

const QUOTE_NOTE = {
  title: "Send a photo of the spot",
  body:
    "Tell us what you are protecting and from what. We will come back with a part number, a price and a date within 24 hours — including the cheaper option if that is the right one.",
};

export const guides: Guide[] = [
  {
    slug: "storefronts",
    subtitle: "Protect Your Store Front, Customers & Entrances",
    lede: "Security Bollard Direct supplies and installs commercial store front bollards throughout the Greater Toronto Area, to help protect glazing, entrances, payment areas and the people using them.",
    focus: {
      title: "Store Front Glazing Protection Bollards",
      paras: [
        "Glazing is the single most expensive thing on a retail frontage and the least able to take a knock. A vehicle rolling forward at walking pace can put a window, a door frame and an automatic door mechanism out of service in one movement, and the replacement glass is rarely in stock.",
        "Properly positioned bollards create a physical stop between the parking area and the glass line, while keeping the entrance clear and the frontage looking like a shop rather than a compound.",
      ],
    },
    supply: "Security Bollard Direct provides bollard supply and professional installation for retail plazas, franchise locations, pharmacies, banks, restaurants and multi-site operators throughout the GTA. We can help determine the appropriate bollard type, size, placement and installation method for your frontage.",
    name: "Store Fronts",
    eyebrow: "Retail & customer-facing",
    title: "How bollards protect a store front",
    intro:
      "A store front is a sheet of glass with a parking lot pointed at it. Most of the damage is not dramatic — a driver reaches for the accelerator instead of the brake at two miles an hour, and a window, a door frame or a payment terminal is gone.",
    metaTitle: "Store Front Protection Bollards",
    metaDescription:
      "How properly placed bollards protect store front glazing, entrances and payment areas from low-speed vehicle impact. Supply and installation across the GTA.",
    protects: [
      "Glazing and window frames along the shop line",
      "Entrance doors and automatic door mechanisms",
      "ATMs, payment terminals and vestibule equipment",
      "Product displays close to the glass",
      "Customers walking between parked cars and the door",
      "Signage, light standards and planters at the frontage",
    ],
    outcomes: [
      "A vehicle is stopped short of the glass rather than after it",
      "The frontage keeps trading instead of being boarded while glass is ordered",
      "Insurers see a site that has taken reasonable precautions",
      "The same protection is repeatable across every location in a chain",
      "Pedestrian routes read clearly to drivers approaching the building",
    ],
    ranges: [RANGE.stainless, RANGE.safety, RANGE.covers],
    note: {
      title: "Finish matters more here than anywhere",
      body:
        "A yellow industrial post in front of a customer entrance protects the glass and damages the impression. Satin stainless does the same job and reads as part of the architecture. Where a site standard calls for colour, powder coat to the specified RAL rather than defaulting to safety yellow.",
    },
  },
  {
    slug: "gas-stations",
    subtitle: "Protect Your Gas Station, Customers & Equipment",
    lede: "Security Bollard Direct supplies and installs durable gas station security bollards throughout the Greater Toronto Area to help protect critical equipment, property and people.",
    focus: {
      title: "Gas Pump Protection Bollards",
      paras: [
        "Fuel dispensers are one of the most important areas of a gas station to protect. A vehicle striking a pump can cause expensive equipment damage, business interruption and serious safety concerns.",
        "Our steel bollard systems create a strong physical barrier between vehicles and fuel dispensing equipment while maintaining a professional appearance.",
      ],
    },
    supply: "Security Bollard Direct provides bollard supply and professional installation for independent gas stations, convenience stores, fuel retailers, property managers and commercial facilities throughout the GTA. We can help determine the appropriate bollard type, size, placement and installation method based on your property.",
    name: "Gas stations",
    eyebrow: "Fuel retail",
    title: "How bollards protect a gas station",
    intro:
      "Gas stations are exposed to vehicle movement every hour they are open, at close quarters, by drivers manoeuvring in tight spaces while distracted. Fuel dispensers, propane storage, store fronts, electrical equipment and pedestrian zones can all be damaged by a single low-speed collision.",
    metaTitle: "Gas Station Security Bollards",
    metaDescription:
      "Protect fuel pumps, propane cages, store fronts and electrical equipment at gas stations with properly placed bollards. Supply and installation across the GTA.",
    protects: [
      "Fuel pumps and dispensers",
      "Propane storage cages",
      "Air and vacuum machines",
      "Car wash entrances and equipment",
      "Electrical panels, transformers and metering",
      "Convenience store frontage and entrance doors",
      "ATM and payment areas",
      "Garbage and utility enclosures",
      "Pedestrian walkways between pumps and the store",
    ],
    outcomes: [
      "A struck dispenser becomes a scraped bollard instead of a fuel incident",
      "The forecourt stays open rather than closing a lane for repairs",
      "Propane and utility equipment is separated from vehicle paths",
      "Traffic flow across the site becomes more predictable",
      "Repeat damage stops being an annual line in the maintenance budget",
    ],
    ranges: [RANGE.yellow, RANGE.galvanized, RANGE.stainless, RANGE.covers],
    note: {
      title: "Position first, product second",
      body:
        "On a forecourt the placement decides whether a bollard works. Too close and it obstructs the nozzle or the pay point; too far and a vehicle reaches the dispenser anyway. Send photos of each pump island and we will mark up positions before anyone quotes hardware.",
    },
  },
  {
    slug: "electrical-units",
    subtitle: "Protect Electrical Equipment from Vehicle Impact",
    lede: "Security Bollard Direct supplies and installs durable electrical unit protection bollards throughout the Greater Toronto Area for commercial, industrial and institutional properties.",
    focus: {
      title: "Transformer Protection Bollards",
      paras: [
        "Transformers are often installed beside parking spaces, driveways and vehicle-access areas, because that is where the service runs. Properly positioned steel bollards create a strong physical barrier that helps reduce the risk of vehicles striking sensitive electrical equipment.",
        "Electrical cabinets and utility equipment can be expensive to repair and may require immediate service if damaged. We provide bollard solutions for both new construction and existing commercial properties.",
      ],
    },
    supply: "Proper placement matters as much as product here. Bollards need to provide effective vehicle protection while maintaining suitable access for inspection, maintenance and servicing. Security Bollard Direct provides supply and installation based on the layout and protection requirements of your property.",
    name: "Electrical units",
    eyebrow: "Utility & infrastructure",
    title: "How bollards protect electrical equipment",
    intro:
      "Transformers, switchgear and electrical cabinets are routinely installed beside parking spaces, driveways and loading areas — because that is where the service runs. Damage to them is expensive, slow to repair, and takes power with it.",
    metaTitle: "Electrical Unit Protection Bollards",
    metaDescription:
      "Protect transformers, electrical cabinets, switchgear and utility equipment from vehicle impact with properly placed bollards across Toronto and the GTA.",
    protects: [
      "Pad-mounted and hydro transformers",
      "Electrical panels and switchgear",
      "Utility and communication cabinets",
      "Generators and metering equipment",
      "EV charging equipment and its bollards",
      "Gas and utility infrastructure alongside",
      "Mechanical plant in building service areas",
    ],
    outcomes: [
      "A reversing vehicle meets steel rather than a cabinet door",
      "Power interruption and the cost of an emergency call-out are avoided",
      "Utility clearances for inspection and servicing are maintained",
      "Contractors on site have a visible boundary to work around",
      "The equipment stops being the cheapest thing to hit on the property",
    ],
    ranges: [RANGE.yellow, RANGE.galvanized, RANGE.removable, RANGE.covers],
    note: {
      title: "Leave the service access alone",
      body:
        "Bollards around electrical equipment have to stop vehicles without blocking the doors the utility needs to open. That usually means a run on the vehicle side only, or removable units on the access side. Confirm clearances with the utility before the holes are drilled.",
    },
  },
  {
    slug: "gas-units",
    subtitle: "Protect Gas Meters, Regulators & Risers",
    lede: "Security Bollard Direct supplies and installs gas meter protection bollards throughout the Greater Toronto Area, positioned to the clearances your utility requires.",
    focus: {
      title: "Gas Meter Protection Bollards",
      paras: [
        "Gas meters sit on the building face at bumper height, usually next to a parking space or a service drive. A reversing vehicle is the realistic risk, and unlike most impacts this one has consequences well beyond the repair bill.",
        "A short run of bollards on the vehicle side of the meter set gives the driver something solid to meet first, while leaving the meter accessible for reading, servicing and emergency shut-off.",
      ],
    },
    supply: "Security Bollard Direct provides supply and professional installation for commercial, industrial and multi-residential properties throughout the GTA. Gas utilities publish minimum clearances around meter sets, and those govern where a bollard can be placed \u2014 we position to the clearance rather than to whatever fits.",
    name: "Gas units",
    eyebrow: "Utility & infrastructure",
    title: "How bollards protect gas meters and regulators",
    intro:
      "Gas meters sit on the building face, at bumper height, usually next to a parking space or a service drive. A reversing vehicle is the realistic risk — and unlike most impacts, this one has consequences beyond the repair bill.",
    metaTitle: "Gas Meter Protection Bollards",
    metaDescription:
      "Protect gas meters, regulators and risers from vehicle impact with bollards placed to utility clearances. Supply and installation across the GTA.",
    protects: [
      "Gas meters and meter banks",
      "Regulators and relief vents",
      "Risers and service entries at the building face",
      "Shut-off valves and their access",
      "Adjacent electrical and mechanical equipment",
    ],
    outcomes: [
      "A vehicle is stopped before it reaches the meter set",
      "An evacuation, a utility call-out and a possible fine are avoided",
      "The meter stays accessible for reading and servicing",
      "Drivers see a boundary where previously there was only a wall",
    ],
    ranges: [RANGE.yellow, RANGE.galvanized, RANGE.safety],
    note: {
      title: "Clearances are set by the utility, not by us",
      body:
        "Gas utilities publish minimum distances around meter sets, and those govern where a bollard can go. Send a photo with the meter and the parking layout in frame; we will position to the clearance rather than to whatever fits.",
    },
  },
  {
    slug: "daycares",
    subtitle: "Protect Children, Play Areas & Drop-Off Zones",
    lede: "Security Bollard Direct supplies and installs safety bollards for daycares and childcare centres throughout the Greater Toronto Area, separating children on foot from vehicle movement.",
    focus: {
      title: "Drop-Off Zone Protection Bollards",
      paras: [
        "The drop-off loop concentrates the two things you least want to mix: small children on foot and parents in a hurry in vehicles. It is busiest in the two short windows either side of the working day, and that is when the risk is highest.",
        "Bollards along the walking route hold vehicles back from the path between car and door, and make the intended route obvious to a driver without anyone having to explain the signage.",
      ],
    },
    supply: "Security Bollard Direct provides supply and professional installation for licensed childcare centres, preschools, after-school programs and community facilities throughout the GTA. We can help determine appropriate placement around drop-off loops, play area fencing and building entrances.",
    name: "Daycares",
    eyebrow: "Childcare",
    title: "How bollards protect a daycare",
    intro:
      "A daycare concentrates the two things you least want to mix: small children on foot and parents in a hurry in vehicles. The drop-off loop is busiest in the two windows either side of the working day, and that is when the risk is highest.",
    metaTitle: "Daycare Safety Bollards",
    metaDescription:
      "Protect daycare drop-off loops, play area fences and pedestrian paths with bollards that separate children on foot from vehicle movement. GTA supply and installation.",
    protects: [
      "The path children walk between car and door",
      "Fenced play area edges next to parking",
      "Entrance doors and the vestibule",
      "Drop-off loop kerbs and waiting areas",
      "Strollers and waiting parents at the frontage",
      "Utility and mechanical equipment within reach of the loop",
    ],
    outcomes: [
      "Vehicles are physically held back from the walking route",
      "Parents read the intended route without needing signage explained",
      "A licensing or insurance reviewer sees a considered layout",
      "The fence line stops absorbing bumper contact",
    ],
    ranges: [RANGE.yellow, RANGE.stainless, RANGE.removable, RANGE.signBollards],
    note: {
      title: "Be honest about what a bollard is for",
      body:
        "These are protective and deterrent products, positioned to separate people from vehicle movement. They are not crash-rated barriers. If your licensing requirement calls for certified performance, we will say so and refer you to a rated manufacturer.",
    },
  },
  {
    slug: "schools",
    subtitle: "Protect Students, Entrances & Walkways",
    lede: "Security Bollard Direct supplies and installs safety bollards and bike racks for schools throughout the Greater Toronto Area, for bus loops, pedestrian entries and walkways alongside moving traffic.",
    focus: {
      title: "Pedestrian Entry Protection Bollards",
      paras: [
        "A school site runs a bus loop, a parent drop-off, a staff lot and a service entrance, often through the same few metres of asphalt, twice a day. Pedestrian routes cross all of it.",
        "Bollards define those routes with hardware rather than paint, which keeps working after the line has worn away and through a winter of plowing.",
      ],
    },
    supply: "Security Bollard Direct provides supply and professional installation for public and private schools, colleges and campuses throughout the GTA. Bus turning circles usually set the geometry of a school site, so we position around the bus path and the walking route.",
    name: "Schools",
    eyebrow: "Education",
    title: "How bollards protect a school",
    intro:
      "School sites run a bus loop, a parent drop-off, a staff lot and a service entrance, often through the same few metres of asphalt, twice a day. Pedestrian routes cross all of it.",
    metaTitle: "School Safety Bollards",
    metaDescription:
      "Bollards for school bus loops, pedestrian entries and walkways that run alongside moving traffic. Supply and installation across Toronto and the GTA.",
    protects: [
      "Pedestrian entries and the walkways feeding them",
      "Bus loop kerbs and waiting areas",
      "Portables, ramps and accessibility routes",
      "Bike parking and its approach",
      "Mechanical, gas and electrical equipment on the building face",
      "Play structures and field edges adjoining parking",
    ],
    outcomes: [
      "Walking routes are defined by hardware, not paint that fades",
      "Buses and cars are kept to their intended paths",
      "Service vehicles have a controlled entry rather than a shortcut",
      "Bikes stop being chained to accessibility railings",
    ],
    ranges: [RANGE.yellow, RANGE.bikeRacks, RANGE.removable, RANGE.barriers],
    note: {
      title: "Plan around the buses first",
      body:
        "Bus turning circles set the geometry of a school site, and a bollard in the wrong place gets clipped by every driver on the route. Give us the bus path and the walking route, and the positions follow from those two.",
    },
  },
  {
    slug: "parking-lots",
    subtitle: "Protect Buildings, Columns & Bays",
    lede: "Security Bollard Direct supplies and installs parking lot bollards, wheel stops and column protection throughout the Greater Toronto Area.",
    focus: {
      title: "Building Face & Column Protection",
      paras: [
        "A parking lot damages itself slowly. Overhang past the wheel stop, a clipped column, a nosed-in bumper against the building face \u2014 none of it looks serious on the day, and all of it appears in the repair budget every year.",
        "Bollards and wheel stops limit how far a vehicle can travel before it reaches something structural, which turns an annual repair into a one-off installation.",
      ],
    },
    supply: "Security Bollard Direct provides supply and professional installation for commercial plazas, office buildings, condominium properties, parking structures and retail centres throughout the GTA. Where a wheel stop solves the problem more cheaply than a bollard, we will say so.",
    name: "Parking lots",
    eyebrow: "Parking areas",
    title: "How bollards protect a parking lot",
    intro:
      "A parking lot damages itself slowly. Overhang past the wheel stop, a clipped column, a nosed-in bumper against the building face — none of it looks serious on the day, and all of it appears in the repair budget every year.",
    metaTitle: "Parking Lot Bollards & Protection",
    metaDescription:
      "Bollards, wheel stops and column guards that stop a commercial parking lot wearing itself out. Supply and installation across the GTA.",
    protects: [
      "The building face where cars nose in",
      "Garage columns and pillar corners",
      "Kerb ends, islands and landscaped edges",
      "Doors, glazing and equipment at grade",
      "Accessible, visitor and EV bays needing definition",
      "Ramps and turns with a history of wall damage",
    ],
    outcomes: [
      "Overhang is limited before it reaches the wall",
      "Structural columns stop taking bumper impact",
      "Bays read clearly, so drivers park where you intended",
      "Recurring concrete and cladding repairs stop recurring",
    ],
    ranges: [RANGE.parking, RANGE.yellow, RANGE.galvanized, RANGE.flexible],
    note: {
      title: "Cheapest fix first",
      body:
        "In a lot, a wheel stop often solves what people ask a bollard to solve, at a fraction of the cost. Where the risk is a specific point — a column, a door, a panel — the bollard is the right answer. We will tell you which applies.",
    },
  },
  {
    slug: "drive-throughs",
    subtitle: "Protect Order Points, Lanes & Equipment",
    lede: "Security Bollard Direct supplies and installs drive-through bollards throughout the Greater Toronto Area, for lanes where vehicle contact is routine rather than exceptional.",
    focus: {
      title: "Order Point & Menu Board Protection",
      paras: [
        "In a drive-through the lane is narrow by design, drivers are looking at a menu board rather than the kerb, and the same corner gets clipped week after week. Order points, speaker posts and payment windows take the consequences.",
        "Flexible bollards absorb that repeated contact and return to position, so a clipped post is not a replacement job. Where the bollard has to actually stop a vehicle \u2014 in front of glazing or a gas meter \u2014 a fixed steel post is the right answer instead.",
      ],
    },
    supply: "Security Bollard Direct provides supply and professional installation for quick service restaurants, coffee chains, pharmacies with drive-through service and car wash operators throughout the GTA. Most drive-throughs need both flexible and fixed bollards, in different positions.",
    name: "Drive-throughs",
    eyebrow: "Quick service",
    title: "How bollards protect a drive-through",
    intro:
      "In a drive-through, contact is routine rather than exceptional. The lane is narrow by design, drivers are looking at a menu board rather than the kerb, and the same corner gets clipped week after week.",
    metaTitle: "Drive-Through Bollards",
    metaDescription:
      "Flexible and fixed bollards for drive-through lanes, order points and tight turns where vehicle contact is routine. Supply and installation across the GTA.",
    protects: [
      "Order points, menu boards and speaker posts",
      "Payment and pickup windows",
      "Tight turns and pinch points along the lane",
      "Kerbs, islands and landscaped edges",
      "Building corners at the lane exit",
      "Staff crossing between the lane and the building",
    ],
    outcomes: [
      "A clipped post springs back instead of being cut out and replaced",
      "Customer vehicles are scraped less often, so claims drop",
      "The lane keeps operating through the repair cycle",
      "Menu boards and equipment stop being replaced annually",
    ],
    ranges: [RANGE.flexible, RANGE.yellow, RANGE.signBollards, RANGE.parking],
    note: {
      title: "Flexible where it will be hit, fixed where it must stop",
      body:
        "A flexible bollard is designed to give way, which is exactly right for guidance in a lane. It is the wrong choice in front of glazing or a gas meter. Most drive-throughs need both, in different positions.",
    },
  },
  {
    slug: "warehouses",
    subtitle: "Protect Racking, Equipment & People on Foot",
    lede: "Security Bollard Direct supplies and installs warehouse safety bollards and guard rail throughout the Greater Toronto Area, and will walk your floor at no charge to produce a numbered risk list.",
    focus: {
      title: "Racking & Aisle Protection Bollards",
      paras: [
        "Inside a warehouse the vehicles are forklifts, they operate all shift, and the driver's sightlines are blocked by whatever is on the forks. Painted lines record where people are supposed to walk; they do not stop anything.",
        "Bollards and guard rail at racking ends, aisle entries and walkway edges turn a struck upright into a struck bollard. That is the difference between a replaceable post and a rack collapse.",
      ],
    },
    supply: "Security Bollard Direct provides supply and professional installation for warehouses, distribution centres, manufacturing facilities and cold storage throughout the GTA. A free safety walkthrough gives your JHSC a numbered risk list in priority order, with a quote against each line and no obligation to buy any of it.",
    name: "Warehouses",
    eyebrow: "Industrial",
    title: "How bollards protect a warehouse",
    intro:
      "Inside a warehouse the vehicles are forklifts, they operate all shift, and the driver's sightlines are blocked by whatever is on the forks. Painted lines record where people are supposed to walk. They do not stop anything.",
    metaTitle: "Warehouse Safety Bollards",
    metaDescription:
      "Bollards and guard rail for racking ends, forklift aisles and equipment protection in warehouses across Toronto and the GTA. Free safety walkthrough available.",
    protects: [
      "Racking ends and aisle entries",
      "Pedestrian walkways beside operating aisles",
      "Electrical panels, compressors and mechanical equipment",
      "Overhead door tracks and man doors",
      "Charging stations and battery areas",
      "Sprinkler risers and fire equipment",
    ],
    outcomes: [
      "A struck upright becomes a struck bollard, not a rack collapse",
      "Walkways are separated physically, which is what an inspector looks for",
      "Doors and tracks stop being knocked out of alignment",
      "The JHSC has a numbered list of fixes rather than a general concern",
    ],
    ranges: [RANGE.yellow, RANGE.barriers, RANGE.covers, RANGE.safety],
    note: {
      title: "We will walk the floor for free",
      body:
        "A warehouse safety walkthrough gives you a numbered risk list your JHSC can action, in priority order, with a quote against each line. No obligation to buy any of it.",
    },
  },
  {
    slug: "truck-docks",
    subtitle: "Protect Doors, Levellers & Dock Corners",
    lede: "Security Bollard Direct supplies and installs dock protection bollards throughout the Greater Toronto Area, for the highest-repeat impact zone on most commercial sites.",
    focus: {
      title: "Dock Door & Corner Protection Bollards",
      paras: [
        "A trailer reverses onto the dock several times a day, guided by mirrors and a spotter who is not always there, with inches of margin either side. Corners, door tracks, levellers and control panels absorb the misses.",
        "Surface-mounted bollards on a base plate take that impact instead of the building, and can be swapped without breaking up the apron. Dock bollards are consumable, and that is the point \u2014 they are cheaper and quicker to replace than a door track.",
      ],
    },
    supply: "Security Bollard Direct provides supply and professional installation for distribution centres, warehouses, food and beverage facilities and retail service yards throughout the GTA. We can plan a replacement schedule so damage becomes a budgeted line rather than an emergency call.",
    name: "Truck docks",
    eyebrow: "Loading & shipping",
    title: "How bollards protect a truck dock",
    intro:
      "The dock is the highest-repeat impact zone on most commercial sites. A trailer reverses onto it several times a day, guided by mirrors and a spotter who is not always there, and the margin either side is measured in inches.",
    metaTitle: "Truck Dock Protection Bollards",
    metaDescription:
      "Dock bollards and guards for corners, door tracks and levellers — the highest-repeat impact zone on most sites. Supply and installation across the GTA.",
    protects: [
      "Dock corners and the wall either side of the opening",
      "Overhead door tracks and jambs",
      "Dock levellers, bumpers and their fixings",
      "Control panels and door operators",
      "Stairs, ramps and man doors beside the dock",
      "Trailer restraints and lighting",
    ],
    outcomes: [
      "Impact is taken by a replaceable post, not the building structure",
      "Doors keep sealing, so heating and cooling costs stay put",
      "A dock stays in service instead of being taken out for repair",
      "Damage becomes a scheduled replacement rather than an emergency",
    ],
    ranges: [RANGE.yellow, RANGE.galvanized, RANGE.barriers, RANGE.covers],
    note: {
      title: "Expect to replace them, and plan for it",
      body:
        "Dock bollards are consumable. The point is that they are cheaper and quicker to swap than a door track or a corner of the building. Surface-mounted units on a base plate can be changed without breaking up the apron.",
    },
  },
  {
    slug: "public-places",
    subtitle: "Protect Pedestrians, Plazas & Public Frontages",
    lede: "Security Bollard Direct supplies and installs streetscape and public realm bollards and bike racks throughout the Greater Toronto Area, for municipalities, BIAs, campuses and mixed-use developments.",
    focus: {
      title: "Streetscape & Plaza Protection Bollards",
      paras: [
        "In a plaza, a transit approach or a park entrance the requirement is the same as on a private site \u2014 separate people from vehicles \u2014 but the finish, the approvals and the design standard all matter more, and the hardware is looked at by thousands of people a day.",
        "Satin stainless and decorative bollards define pedestrian space without fencing it off, while removable and retractable units keep service and emergency access available.",
      ],
    },
    supply: "Security Bollard Direct provides supply and professional installation for municipal projects, BIA streetscape improvements, transit authorities, school and hospital campuses and mixed-use developments throughout the GTA. Send the specification section and the schedule, and we will confirm compliance in writing.",
    name: "Public places",
    eyebrow: "Public realm",
    title: "How bollards protect a public space",
    intro:
      "In a plaza, a transit approach or a park entrance the requirement is the same as on a private site — separate people from vehicles — but the finish, the approvals and the design standard all matter more, and the hardware is looked at by thousands of people a day.",
    metaTitle: "Public Realm & Streetscape Bollards",
    metaDescription:
      "Streetscape and public realm bollards and bike racks for plazas, transit approaches, parks and campus frontages across Toronto and the GTA.",
    protects: [
      "Plaza and sidewalk edges beside carriageways",
      "Transit approaches and station frontages",
      "Park and trail entrances against vehicle access",
      "Café seating, planters and street furniture",
      "Bicycle parking and its approach",
      "Building entrances on public frontages",
    ],
    outcomes: [
      "Pedestrian space is defined without fencing it off",
      "Vehicle access is controlled while service access is kept",
      "The streetscape meets the design standard it was approved against",
      "Bike parking is provided at grade, where the by-law expects it",
    ],
    ranges: [RANGE.stainless, RANGE.bikeRacks, RANGE.removable, RANGE.retractable],
    note: {
      title: "Approvals drive the specification",
      body:
        "On public projects the standard you are filing to usually decides the product before anyone looks at a catalogue. Send the specification section and the schedule; we will confirm compliance in writing and say plainly where something falls outside our range.",
    },
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export { QUOTE_NOTE };

/** Shared across every guide — the same commercial range, described once. */
export const BUILD_FEATURES = [
  "Heavy-duty steel construction",
  "Multiple bollard diameters and heights",
  "Surface-mounted and in-ground options",
  "Powder-coated finishes",
  "Galvanized finishes",
  "Stainless steel construction",
  "Reflective safety tape",
  "Custom colours",
  "Fixed, removable and automatic systems",
  "Professional installation",
];

/** Written out in full on each guide, as the owner's copy does. */
export const SERVICE_AREA = [
  "Toronto", "Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill",
  "Scarborough", "North York", "Etobicoke", "Oakville", "Burlington", "Milton",
];

/** The option descriptions that appear under "Bollard options for ...". */
export const OPTION_NOTES: Record<string, string> = {
  "/products/safety-bollards":
    "Heavy-duty steel bollards provide permanent protection for high-risk areas. Available in multiple diameters, heights and finishes.",
  "/products/yellow-steel-bollards":
    "High-visibility powder-coated steel with reflective banding, for positions where the bollard needs to be seen before it is hit.",
  "/products/galvanized-steel-bollards":
    "Designed for outdoor environments, galvanized bollards provide excellent corrosion resistance and long-term durability.",
  "/products/stainless-steel-bollards":
    "A premium option combining protection with a clean, modern appearance. Suited to store fronts, entrances and customer-facing areas.",
  "/products/flexible-bollards":
    "Spring-loaded posts that flex on impact and return to position, for lanes and turns where contact is routine.",
  "/products/removable-bollards":
    "Removable bollards allow controlled vehicle access while providing protection when required.",
  "/products/retractable-bollards":
    "Manual lift bollards that drop flush into their own casing, so nothing has to be carried away or stored.",
  "/products/automatic-bollards":
    "Automatic bollards provide convenient access control for restricted entrances, service areas and high-traffic openings.",
  "/products/bollard-covers":
    "Covers restore high-visibility colour over an existing post in minutes, without a crew, a repaint or a shutdown.",
  "/products/traffic-access-barriers":
    "Guard rail and barrier runs for where the risk follows a line rather than sitting at a single point.",
  "/products/bike-racks":
    "Stainless, round, Double Moon, 4-Way and 316 stainless U racks, with dimensions and datasheets for each.",
  "/products/sign-bollards":
    "Marks the rule and protects the space from one footing — accessible stalls, fire routes and directional markings.",
  "/products/parking-protection":
    "Wheel stops, column guards and bay definition, for the damage a parking area does to itself.",
};
