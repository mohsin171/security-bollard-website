/**
 * APPLICATIONS
 * ---------------------------------------------------------------
 * The places a bollard actually gets installed, for the home page grid.
 * Wording is drawn from the owner's own gas station and electrical unit
 * write-ups, extended to the rest of the list in the same voice.
 *
 * These are applications rather than pages, so the tiles are not links. If a
 * category later gets its own page, add `href` here and the tile becomes a link.
 */

export type Application = {
  name: string;
  blurb: string;
  image: string;
  href?: string;
};

export const applications: Application[] = [
  {
    name: "Storefronts",
    image: "/applications/storefronts.webp",
    blurb: "Glazing, entrances, ATM and payment areas — where a low-speed nudge becomes a broken window.",
    href: "/who-we-serve/retail-storefronts",
  },
  {
    name: "Gas stations",
    image: "/applications/gas-stations.webp",
    blurb: "Fuel pumps and dispensers, propane cages, air and vacuum machines, car wash entrances.",
  },
  {
    name: "Electrical units",
    image: "/applications/electrical-units.webp",
    blurb: "Transformers, panels, switchgear and metering — expensive to repair, and often beside a parking space.",
  },
  {
    name: "Gas units",
    image: "/applications/gas-units.webp",
    blurb: "Meters, regulators and risers on a building face, where a reversing vehicle is the real risk.",
  },
  {
    name: "Daycares",
    image: "/applications/daycares.webp",
    blurb: "Drop-off loops, fenced play area edges and the path children walk between car and door.",
  },
  {
    name: "Schools",
    image: "/applications/schools.webp",
    blurb: "Bus loops, pedestrian entries and walkways that run alongside moving traffic.",
  },
  {
    name: "Parking lots",
    image: "/applications/parking-lots.webp",
    blurb: "Bays, islands, garage columns and the building face cars nose into every day.",
    href: "/products/parking-protection",
  },
  {
    name: "Drive-throughs",
    image: "/applications/drive-throughs.webp",
    blurb: "Order points and tight turns, where contact is routine rather than exceptional.",
    href: "/products/flexible-bollards",
  },
  {
    name: "Warehouses",
    image: "/applications/warehouses.webp",
    blurb: "Racking ends, forklift aisles and equipment, separated by hardware rather than painted lines.",
    href: "/who-we-serve/warehouse-industrial",
  },
  {
    name: "Truck docks",
    image: "/applications/truck-docks.webp",
    blurb: "Dock corners, door tracks and levellers — the highest-repeat impact zone on most sites.",
  },
  {
    name: "Public places",
    image: "/applications/public-places.webp",
    blurb: "Plazas, transit approaches and walkways, where the finish matters as much as the protection.",
    href: "/products/public-city-safety",
  },
];
