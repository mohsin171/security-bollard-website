import { site, social } from "@/content/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  slogan: site.tagline,
  image: `${site.url}/logos/sbd-logo-full.png`,
  logo: `${site.url}/logos/sbd-logo-full.png`,
  priceRange: "$$",
  sameAs: social.map((s) => s.href),
  address: {
    "@type": "PostalAddress",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: site.areaServed.map((a) => ({ "@type": "City", name: a })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areaServed.map((a) => ({ "@type": "City", name: a })),
  };
}

export function productSchema(name: string, description: string, path: string, image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${site.url}${path}`,
    brand: { "@type": "Brand", name: site.name },
    category: "Commercial site protection hardware",
    ...(image ? { image: [`${site.url}${image}`] } : {}),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

/** Long-form application guides: /protecting/<slug>. */
/** These guides were written and last revised in August 2026. */
const GUIDE_DATE = "2026-08-22";

export function articleSchema({
  headline,
  description,
  path,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${path}` },
    url: `${site.url}${path}`,
    ...(image ? { image: [`${site.url}${image}`] } : {}),
    datePublished: GUIDE_DATE,
    dateModified: GUIDE_DATE,
    inLanguage: "en-CA",
    isPartOf: { "@id": `${site.url}/#website` },
    author: { "@id": `${site.url}/#business` },
    publisher: { "@id": `${site.url}/#business` },
    isAccessibleForFree: true,
  };
}

/** Site-level entity, so search engines tie the pages to one brand. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "en-CA",
  publisher: { "@id": `${site.url}/#business` },
};

/** Listing pages: what the collection contains, in order. */
export function itemListSchema(
  name: string,
  path: string,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: `${site.url}${path}`,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${site.url}${it.path}`,
    })),
  };
}
