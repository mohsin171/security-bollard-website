import Link from "next/link";
import Image from "next/image";
import { nav, site, capabilityStatement } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = nav.filter((n) => n.children);

  return (
    <footer className="ambient bg-charcoal text-white">
      {/* Ambient layer — restrained */}
      <div className="blueprint-grid blueprint-grid-dark" aria-hidden />
      <div
        className="glow-orb glow-orb-red"
        aria-hidden
        style={{ width: 420, height: 420, top: -180, left: -140, opacity: 0.4 }}
      />
      <div
        className="ring-circle ring-circle-light"
        aria-hidden
        style={{ width: 220, height: 220, top: 30, right: "10%" }}
      />
      <div className="glow-line" aria-hidden style={{ top: 0, left: 0, right: 0 }} />

      {/* Main footer */}
      <div className="container-sbd py-12">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_repeat(3,1fr)]">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="inline-block rounded-sm bg-white p-3 shadow-[0_0_34px_rgba(200,16,46,0.28)] transition-shadow hover:shadow-[0_0_48px_rgba(200,16,46,0.42)]"
              aria-label={`${site.name} — home`}
            >
              <Image
                src="/logos/sbd-logo-full.png"
                alt={site.name}
                width={1568}
                height={700}
                className="h-14 w-auto md:h-16"
              />
            </Link>

            <div className="mt-5 space-y-1.5">
              <a
                href={site.phoneHref}
                className="block font-display text-xl font-bold tracking-wide text-safety-yellow transition-opacity hover:opacity-80"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="block text-sm text-white/70 transition-colors hover:text-white"
              >
                {site.email}
              </a>
              <p className="text-xs text-white/45">{site.hours}</p>
            </div>

            <p className="mt-5 max-w-xs border-l-2 border-sbd-red pl-3 text-xs leading-relaxed text-white/55">
              {capabilityStatement}
            </p>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <nav key={col.href} aria-label={`Footer — ${col.label}`}>
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                <Link href={col.href} className="transition-colors hover:text-safety-yellow">
                  {col.label}
                </Link>
              </h2>
              <div className="mt-2.5 h-[3px] w-9 bg-sbd-red" />
              <ul className="mt-4 space-y-2 text-sm">
                {col.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="text-white/60 transition-all duration-150 hover:pl-1 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Utility row */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm">
          {[
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" },
            { label: "Request a Quote", href: "/request-a-quote" },
            { label: "Privacy", href: "/privacy" },
            { label: "Terms of Sale", href: "/terms" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <span className="ml-auto hidden text-xs text-white/40 md:block">
            Serving {site.serviceArea}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="glow-line" aria-hidden style={{ top: 0, left: "15%", right: "15%" }} />
        <div className="container-sbd flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/sbd-shield.png"
              alt=""
              width={952}
              height={1260}
              className="h-8 w-auto"
            />
            <p className="text-xs text-white/45">
              &copy; {year} {site.name}. All rights reserved.
            </p>
          </div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-sbd-red">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
