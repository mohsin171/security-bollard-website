import Link from "next/link";
import Image from "next/image";
import { nav, site, capabilityStatement } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = nav.filter((n) => n.children);

  return (
    <footer className="bg-charcoal text-white">
      <div className="h-1 w-full bg-sbd-red" />

      <div className="container-sbd py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          {/* Brand column */}
          <div>
            <Image
              src="/logos/sbd-logo-full-transparent.png"
              alt={site.name}
              width={1204}
              height={504}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Commercial-grade bollards, bike racks, barriers and covers for property protection,
              traffic control and safer public environments.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <a
                href={site.phoneHref}
                className="block font-display text-lg font-bold text-safety-yellow"
              >
                {site.phone}
              </a>
              <a href={site.emailHref} className="block text-white/70 hover:text-white">
                {site.email}
              </a>
              <p className="text-white/50">{site.hours}</p>
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.href}>
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
                {col.label}
              </h2>
              <div className="mt-3 h-[3px] w-9 bg-sbd-red" />
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.children?.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="text-white/65 transition-colors hover:text-white">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secondary row */}
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
              Company
            </h2>
            <div className="mt-3 h-[3px] w-9 bg-sbd-red" />
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              <li>
                <Link href="/about" className="text-white/65 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/65 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/65 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="text-white/65 hover:text-white">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/65 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/65 hover:text-white">
                  Terms of Sale
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-sbd-red bg-white/[0.04] p-5">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
              Product capability
            </p>
            <p className="mt-2 text-sm text-white/70">{capabilityStatement}</p>
          </div>
        </div>

        <p className="mt-10 text-sm text-white/50">
          <span className="font-display font-bold uppercase tracking-wide text-white/80">
            Serving:
          </span>{" "}
          {site.serviceArea}
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="container-sbd flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/45 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="font-display font-bold uppercase tracking-[0.18em] text-sbd-red">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
