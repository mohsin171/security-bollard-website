import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Datasheets are versioned in the filename (-r2), so they can be
        // cached hard. Saves re-downloading multi-MB PDFs on repeat visits.
        source: "/datasheets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Projects page removed Aug 2026 — send saved links to the product range.
      {
        source: "/projects",
        destination: "/products",
        permanent: true,
      },
      // Renamed Aug 2026: Motorised Bollards -> Automatic Bollards.
      {
        source: "/products/motorised-bollards",
        destination: "/products/automatic-bollards",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
