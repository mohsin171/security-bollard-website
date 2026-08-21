/**
 * HOME PAGE CARD PHOTOGRAPHY
 * ---------------------------------------------------------------
 * Photos for the product, service and segment cards on the home page only.
 * Kept here rather than in products.ts / services.ts / segments.ts because
 * these crops are composed for the home page grid; the pages themselves use
 * their own hero images.
 *
 * Keyed by slug. A slug with no entry simply renders without a photo.
 */

export const homeProductImages: Record<string, string> = {
  "safety-bollards": "/home/products/safety-bollards.webp",
  "sign-bollards": "/home/products/sign-bollards.webp",
  "public-city-safety": "/home/products/public-city-safety.webp",
  "bollard-covers": "/home/products/bollard-covers.webp",
  "traffic-access-barriers": "/home/products/traffic-access-barriers.webp",
};

export const homeServiceImages: Record<string, string> = {
  "site-assessment": "/home/services/site-assessment.webp",
  "supply-installation": "/home/services/supply-installation.webp",
  "warehouse-safety-walkthrough": "/home/services/warehouse-safety-walkthrough.webp",
  "portfolio-programs": "/home/services/portfolio-programs.webp",
  "replacement-upgrades": "/home/services/replacement-upgrades.webp",
};

export const homeSegmentImages: Record<string, string> = {
  "property-management": "/home/segments/property-management.webp",
  "warehouse-industrial": "/home/segments/warehouse-industrial.webp",
  "retail-storefronts": "/home/segments/retail-storefronts.webp",
  contractors: "/home/segments/contractors.webp",
};
