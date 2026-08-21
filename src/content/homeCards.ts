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
  "safety-bollards": "/home/products/safety-bollards-2.webp",
  "sign-bollards": "/home/products/sign-bollards-2.webp",
  "public-city-safety": "/home/products/public-city-safety-2.webp",
  "bollard-covers": "/home/products/bollard-covers-2.webp",
  "traffic-access-barriers": "/home/products/traffic-access-barriers-2.webp",
};

export const homeServiceImages: Record<string, string> = {
  "site-assessment": "/home/services/site-assessment-2.webp",
  "supply-installation": "/home/services/supply-installation-2.webp",
  "warehouse-safety-walkthrough": "/home/services/warehouse-safety-walkthrough-2.webp",
  "portfolio-programs": "/home/services/portfolio-programs-2.webp",
  "replacement-upgrades": "/home/services/replacement-upgrades-2.webp",
};

export const homeSegmentImages: Record<string, string> = {
  "property-management": "/home/segments/property-management-2.webp",
  "warehouse-industrial": "/home/segments/warehouse-industrial-2.webp",
  "retail-storefronts": "/home/segments/retail-storefronts-2.webp",
  contractors: "/home/segments/contractors-2.webp",
};
