import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { products } from "@/content/products";
import { categories } from "@/content/categories";
import { services } from "@/content/services";
import { segments } from "@/content/segments";
import { guides } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/request-a-quote", priority: 0.9, freq: "monthly" },
    { path: "/products", priority: 0.9, freq: "monthly" },
    { path: "/services", priority: 0.85, freq: "monthly" },
    { path: "/who-we-serve", priority: 0.85, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/projects", priority: 0.7, freq: "weekly" },
    { path: "/privacy", priority: 0.2, freq: "yearly" },
    { path: "/terms", priority: 0.2, freq: "yearly" },
  ];

  return [
    ...core.map((c) => ({
      url: `${site.url}${c.path === "/" ? "" : c.path}`,
      lastModified: now,
      changeFrequency: c.freq,
      priority: c.priority,
    })),
    ...products.map((p) => ({
      url: `${site.url}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...categories.map((c) => ({
      url: `${site.url}/products/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...guides.map((g) => ({
      url: `${site.url}/protecting/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...segments.map((s) => ({
      url: `${site.url}/who-we-serve/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
