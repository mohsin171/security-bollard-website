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
        /**
         * Security headers, site-wide.
         *
         * The CSP restricts where scripts, styles, images and connections may
         * come from. 'unsafe-inline' is present for scripts because Next
         * inlines its hydration payload and there is no nonce middleware here;
         * a nonce-based policy would be stricter, at the cost of an edge
         * function on every request. Even so, this blocks any third-party
         * script origin that is not listed, which is the realistic risk on a
         * static marketing site. googletagmanager is allowed so the dormant
         * Google Analytics slot works if an ID is ever set.
         */
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://*.vercel-insights.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://*.vercel-insights.com https://vitals.vercel-insights.com https://www.google-analytics.com",
              "frame-src 'self'",
              "object-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
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
