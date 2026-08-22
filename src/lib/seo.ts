import type { Metadata } from "next";
import { site } from "@/content/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  image,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  /** Page-specific share image; falls back to the generic OG card. */
  image?: string;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const share = image ? `${site.url}${image}` : `${site.url}/og/sbd-og-2.png`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [{ url: share, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [share],
    },
  };
}
