import Link from "next/link";
import Image from "next/image";
import { nav, site, capabilityStatement } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = nav.filter((n) => n.children);

  return (
    <footer className="ambient bg-charcoal text-white">
      {/* Ambient layer */}
      <div className="blueprint-grid blueprint-grid-dark" aria-hidden />
      <div
        className="glow-orb glow-orb-red"
        aria-hidden
        style={{ width: 480, height: 480, top: -180, left: -140 }}
      />
      <div
        className="glow-orb glow-orb-yellow"
        aria-hidden
        style={{ width: 360, height: 360, bottom: -160, right: -80, opacity: 0.25 }}
      />
      <div
        className="ring-circle ring-circle-light"
        aria-hidden
        style={{ width: 300, height: 300, top: 60, right: "12%" }}
      />
      <div
        className="ring-circle ring-circle-light"
        aria-hidden
        style={{ width: 160, height: 160, top: 130, right: "17%", animationDelay: "2s" }}
      />
      <div className="glow-line" aria-hidden style={{ top: 0, left: 0, right: 0 }} />

      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-sbd flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-safety-yellow">
              24-hour quote standard
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              Have a site problem? Send a photo.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/request-a-quote"
              className="btn-sheen inline-flex items-center bg-sbd-red px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-sbd-red-dark"
            >
              Request a quote
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center border-2 border-white/25 px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-safety-yellow hover:text-safety-yellow"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-sbd py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_repeat(3,1fr)]">
          {/* Brand column — logo on a white panel so the full lockup reads properly */}
          <div>
            <Link
              href="/"
              className="inline-block rounded-sm bg-white p-4 shadow-[0_0_40px_rgba(200,16,46,0.25)] transition-shadow hover:shadow-[0_0_56px_rgba(200,16,46,0.4)]"
              aria-label={`${site.name} — home`}
            >
              <Image
                src="/logos/sbd-logo-full.png"
                alt={site.name}
                width={1568}
                height={700}
                className="h-16 w-auto md:h-[4.5rem]"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Commercial-grade bollards, bike racks, barriers and covers for property protection,
              traffic control and safer public environments across the GTA and Ontario.
            </p>

            <div className="mt-7 space-y-2.5">
              <a href={site.phoneHref} className="group flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-white/15 transition-colors group-hover:border-safety-yellow">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"
                      stroke="#FFC72C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-display text-lg font-bold tracking-wide text-safety-yellow">
                  {site.phone}
                </span>
              </a>
              <a href={site.emailHref} className="group flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-white/15 transition-colors group-hover:border-white/50">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#fff" strokeOpacity="0.7" strokeWidth="2" />
                    <path d="m2 7 10 6 10-6" stroke="#fff" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                  {site.email}
                </span>
              </a>
              <p className="flex items-center gap-3 text-sm text-white/45">
                <span className="flex h-9 w-9 items-center justify-center border border-white/15">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="9" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
                    <path d="M12 7v5l3 3" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                {site.hours}
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <nav key={col.href} aria-label={`Footer — ${col.label}`}>
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                <Link href={col.href} className="transition-colors hover:text-safety-yellow">
                  {col.label}
                </Link>
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-sbd-red" />
              <ul className="mt-5 space-y-3 text-sm">
                {col.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
                    >
                      <span
                        aria-hidden
                        className="h-px w-3 bg-sbd-red opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100"
                      />
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        {child.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Secondary row */}
        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_1.5fr]">
          <nav aria-label="Footer — company">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-sbd-red" />
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
                { label: "Request a Quote", href: "/request-a-quote" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Sale", href: "/terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <div className="absolute left-0 top-0 h-full w-1 bg-sbd-red" aria-hidden />
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-sbd-red">
              Product capability — the straight answer
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{capabilityStatement}</p>
          </div>
        </div>

        {/* Service area */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="mr-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Serving
          </span>
          {site.areaServed.map((a) => (
            <span
              key={a}
              className="border border-white/10 px-3 py-1.5 text-xs text-white/55 transition-colors hover:border-safety-yellow/60 hover:text-white"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="glow-line" aria-hidden style={{ top: 0, left: "10%", right: "10%" }} />
        <div className="container-sbd flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/sbd-shield.png"
              alt=""
              width={952}
              height={1260}
              className="h-9 w-auto"
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
