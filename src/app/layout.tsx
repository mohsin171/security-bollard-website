import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import { site } from "@/content/site";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Commercial Bollards, Bike Racks & Site Protection — GTA & Ontario`,
    template: `%s | ${site.name}`,
  },
  description:
    "Commercial-grade safety bollards, bike racks, bollard covers and traffic barriers supplied across Toronto, the GTA and Ontario. Written quotes within 24 hours. Built for Safety. Made to Last.",
  applicationName: site.name,
  keywords: [
    "commercial bollards Toronto",
    "safety bollards GTA",
    "bike racks Toronto",
    "bollard covers",
    "bollard supplier Ontario",
    "warehouse safety bollards",
    "store front protection bollards",
    "traffic barriers commercial",
    "removable bollards Toronto",
    "stainless steel bollards",
    "parking lot bollards GTA",
    "bollard installation Mississauga",
  ],
  category: "Commercial site protection",
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, address: false, email: true },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon-2.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon-2.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico?v=2"],
  },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Commercial Bollards, Bike Racks & Site Protection`,
    description: site.description,
    images: [
      {
        url: `${site.url}/og/sbd-og.png`,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Commercial Bollards & Site Protection`,
    description: site.description,
    images: [`${site.url}/og/sbd-og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#C8102E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${archivo.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
      <noscript>
        <style>{`.reveal { opacity: 1; transform: none; }`}</style>
      </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-sbd-red focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-bold focus:uppercase focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
