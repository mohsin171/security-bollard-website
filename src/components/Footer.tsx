import Link from "next/link";
import Image from "next/image";
import { nav, site, social } from "@/content/site";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Request a Quote", href: "/request-a-quote", emphasis: true },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Sale", href: "/terms" },
];

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M14 8.5h2V6h-2c-1.93 0-3.5 1.57-3.5 3.5V11H8.5v2.5h2V19H13v-5.5h2l.5-2.5H13V9.5c0-.55.45-1 1-1Z" />
  ),
  Instagram: (
    <>
      <path
        fillRule="evenodd"
        d="M9 5.5h6A3.5 3.5 0 0 1 18.5 9v6a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 15V9A3.5 3.5 0 0 1 9 5.5ZM7 9v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM10.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
        clipRule="evenodd"
      />
      <circle cx="15.6" cy="8.4" r="0.85" />
    </>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = nav.filter((n) => n.children);

  return (
    <footer className="ambient bg-charcoal text-white">
      {/* Ambient layer — same treatment as the quote band */}
      <div className="blueprint-grid blueprint-grid-dark" aria-hidden />
      <div
        className="glow-orb glow-orb-red"
        aria-hidden
        style={{ width: 420, height: 420, top: -160, right: -100, opacity: 0.45 }}
      />
      <div
        className="ring-circle ring-circle-light"
        aria-hidden
        style={{ width: 220, height: 220, bottom: -70, left: "8%" }}
      />
      <div className="glow-line" aria-hidden style={{ top: 0, left: "15%", right: "15%" }} />

      <div className="container-sbd py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_repeat(4,1fr)] lg:gap-8">
          {/* Brand column */}
          <div className="lg:pr-8">
            <Link
              href="/"
              className="inline-block rounded-sm bg-white p-2.5"
              aria-label={`${site.name} — home`}
            >
              <Image
                src="/logos/sbd-logo-full.png"
                alt={site.name}
                width={1568}
                height={700}
                className="h-11 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Commercial bollards, bike racks, barriers and bollard covers,
              supplied and installed across the GTA and Ontario.
            </p>

            <div className="mt-5 space-y-1">
              <a
                href={site.phoneHref}
                className="block py-1.5 font-display text-lg font-bold tracking-wide text-safety-yellow transition-opacity hover:opacity-80"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="block py-2 text-sm text-white/55 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </div>

            {/* Social */}
            <ul className="mt-6 flex items-center gap-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${s.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/65 transition-colors hover:border-white/45 hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[18px] w-[18px]"
                      aria-hidden
                    >
                      {socialIcons[s.label]}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <nav key={col.href} aria-label={`Footer — ${col.label}`}>
              <h2 className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                <Link href={col.href} className="inline-block py-2.5 transition-colors hover:text-white/70">
                  {col.label}
                </Link>
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {col.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="inline-block py-2.5 text-white/55 transition-colors hover:text-white"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Company column */}
          <nav aria-label="Footer — Company">
            <h2 className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`inline-block py-2.5 ${
                      l.emphasis
                        ? "font-semibold text-white transition-colors hover:text-safety-yellow"
                        : "text-white/55 transition-colors hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6 text-xs">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block py-2.5 text-white/40 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
