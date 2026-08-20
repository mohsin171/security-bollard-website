import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
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
