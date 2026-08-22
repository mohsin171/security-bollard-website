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
        // Photography is versioned in the filename (-2, -3, -4), so a hard
        // cache is safe: a replacement always arrives under a new name.
        source: "/:path*.webp",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/logos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
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
      // Datasheets recompressed Aug 2026 (-r2 -> -r3); keep shared links alive.
      {
        source: "/datasheets/SBD-SSBR01-datasheet-r2.pdf",
        destination: "/datasheets/SBD-SSBR01-datasheet-r3.pdf",
        permanent: true,
      },
      {
        source: "/datasheets/SBD-UBR31601-datasheet-r2.pdf",
        destination: "/datasheets/SBD-UBR31601-datasheet-r3.pdf",
        permanent: true,
      },
      {
        source: "/datasheets/SBD-CBS4W01-datasheet-r2.pdf",
        destination: "/datasheets/SBD-CBS4W01-datasheet-r3.pdf",
        permanent: true,
      },
      {
        source: "/datasheets/SBD-UBRSS01-datasheet-r2.pdf",
        destination: "/datasheets/SBD-UBRSS01-datasheet-r3.pdf",
        permanent: true,
      },
      {
        source: "/datasheets/SBD-BRBM01-datasheet-r2.pdf",
        destination: "/datasheets/SBD-BRBM01-datasheet-r3.pdf",
        permanent: true,
      },
      {
        source: "/datasheets/SBD-FSB42Y-datasheet-r2.pdf",
        destination: "/datasheets/SBD-FSB42Y-datasheet-r3.pdf",
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
