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
  /** Matches the guide slug in guides.ts and the photo filename. */
  slug: string;
  blurb: string;
  image: string;
};

export const applications: Application[] = [
  {
    name: "Storefronts",
    slug: "storefronts",
    image: "/applications/storefronts-5.webp",
    blurb: "Glazing, entrances, ATM and payment areas — where a low-speed nudge becomes a broken window.",
  },
  {
    name: "Gas stations",
    slug: "gas-stations",
    image: "/applications/gas-stations-4.webp",
    blurb: "Fuel pumps and dispensers, propane cages, air and vacuum machines, car wash entrances.",
  },
  {
    name: "Electrical units",
    slug: "electrical-units",
    image: "/applications/electrical-units-4.webp",
    blurb: "Transformers, panels, switchgear and metering — expensive to repair, and often beside a parking space.",
  },
  {
    name: "Gas units",
    slug: "gas-units",
    image: "/applications/gas-units-4.webp",
    blurb: "Meters, regulators and risers on a building face, where a reversing vehicle is the real risk.",
  },
  {
    name: "Daycares",
    slug: "daycares",
    image: "/applications/daycares-4.webp",
    blurb: "Drop-off loops, fenced play area edges and the path children walk between car and door.",
  },
  {
    name: "Schools",
    slug: "schools",
    image: "/applications/schools-4.webp",
    blurb: "Bus loops, pedestrian entries and walkways that run alongside moving traffic.",
  },
  {
    name: "Parking lots",
    slug: "parking-lots",
    image: "/applications/parking-lots-4.webp",
    blurb: "Bays, islands, garage columns and the building face cars nose into every day.",
  },
  {
    name: "Drive-throughs",
    slug: "drive-throughs",
    image: "/applications/drive-throughs-4.webp",
    blurb: "Order points and tight turns, where contact is routine rather than exceptional.",
  },
  {
    name: "Warehouses",
    slug: "warehouses",
    image: "/applications/warehouses-4.webp",
    blurb: "Racking ends, forklift aisles and equipment, separated by hardware rather than painted lines.",
  },
  {
    name: "Truck docks",
    slug: "truck-docks",
    image: "/applications/truck-docks-4.webp",
    blurb: "Dock corners, door tracks and levellers — the highest-repeat impact zone on most sites.",
  },
  {
    name: "Public places",
    slug: "public-places",
    image: "/applications/public-places-4.webp",
    blurb: "Plazas, transit approaches and walkways, where the finish matters as much as the protection.",
  },
];
