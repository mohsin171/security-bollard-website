import Link from "next/link";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { site } from "@/content/site";

/* ---------- Layout primitives ---------- */

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "fog" | "charcoal";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    fog: "bg-fog",
    charcoal: "bg-charcoal text-white",
  };
  return (
    <section id={id} className={`${tones[tone]} py-14 md:py-20 ${className}`}>
      <div className="container-sbd">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`font-display text-xs font-bold uppercase tracking-[0.18em] ${
        light ? "text-white/60" : "text-slate-grey"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} mb-10`}>
      {eyebrow && <div className="mb-3"><Eyebrow light={light}>{eyebrow}</Eyebrow></div>}
      <h2
        className={`red-rule text-[length:var(--text-h2)] ${light ? "text-white" : "text-charcoal"} ${
          center ? "[&::after]:mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 text-lg ${light ? "text-white/75" : "text-slate-grey"}`}>{intro}</p>
      )}
    </div>
  );
}

/* ---------- Buttons ---------- */

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-px active:translate-y-0";
  const variants = {
    primary: "bg-sbd-red text-white hover:bg-sbd-red-dark",
    outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    ghost: "border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-charcoal",
    light: "bg-white text-charcoal hover:bg-fog",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/* ---------- Cards ---------- */

export function LinkCard({
  href,
  title,
  blurb,
  eyebrow,
  image,
  imageAlt,
  imageAspect = "16/9",
}: {
  href: string;
  title: string;
  blurb?: string;
  eyebrow?: string;
  /** Optional photo above the copy. */
  image?: string;
  imageAlt?: string;
  imageAspect?: "16/9" | "4/5";
}) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col border border-hairline bg-white transition-all duration-300 hover:-translate-y-1 hover:border-sbd-red hover:shadow-[0_12px_32px_rgba(200,16,46,0.1)] ${
        image ? "overflow-hidden" : "p-6"
      }`}
    >
      {image && (
        <span
          className={`relative block w-full overflow-hidden bg-fog ${
            imageAspect === "4/5" ? "aspect-[4/5]" : "aspect-[16/9]"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </span>
      )}
      <span className={image ? "flex flex-1 flex-col p-6" : "contents"}>
      {eyebrow && (
        <p className="mb-2 font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-grey">
          {eyebrow}
        </p>
      )}
      <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-sbd-red">
        {title}
      </h3>
      {blurb && <p className="mt-2 flex-1 text-[0.95rem] text-slate-grey">{blurb}</p>}
      <span className="mt-4 inline-flex items-center gap-1 font-display text-xs font-bold uppercase tracking-wider text-sbd-red">
          View
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </span>
      </span>
    </Link>
  );
}

/* ---------- Lists ---------- */

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-[0.45rem] h-1.5 w-3.5 shrink-0 bg-sbd-red" />
          <span className={light ? "text-white/80" : "text-charcoal"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedList({ items }: { items: { title: string; detail: string }[] }) {
  return (
    <ol className="space-y-0">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="grid gap-x-6 gap-y-2 border-t border-hairline py-6 md:grid-cols-[4rem_1fr] last:border-b"
        >
          <span className="font-display text-2xl font-bold text-sbd-red tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-charcoal">{item.title}</h3>
            <p className="mt-1.5 text-slate-grey">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Spec table ---------- */

export function SpecTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="overflow-hidden border border-hairline">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 ? "bg-fog" : "bg-white"}>
              <th
                scope="row"
                className="w-2/5 border-b border-hairline px-4 py-2.5 text-left font-semibold text-charcoal"
              >
                {row.label}
              </th>
              <td className="border-b border-hairline px-4 py-2.5 font-mono text-[0.82rem] text-slate-grey">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- FAQ ---------- */

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <span className="font-display text-base font-bold text-charcoal">{f.q}</span>
            <span
              aria-hidden
              className="mt-1 shrink-0 font-display text-xl leading-none text-sbd-red transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-slate-grey">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- Page header ---------- */

export function PageHeader({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  background,
  actions,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { name: string; path: string }[];
  /**
   * tone "artwork" is for banner art that already carries its own white field
   * for the copy — it is shown whole rather than cropped, and gets no wash on
   * large screens so the artwork's own shapes survive.
   */
  background?: {
    src: string;
    alt?: string;
    tone?: "dark" | "light" | "artwork";
    /** How wide the copy may run before it meets the artwork's curve. */
    copy?: "md" | "lg" | "xl";
    /** Artwork aspect ratio; the frame takes its height from this. Default 2:1. */
    ratio?: number;
  };
  actions?: ReactNode;
}) {
  const onPhoto = Boolean(background);
  const artwork = background?.tone === "artwork";
  const lightPhoto = background?.tone === "light" || artwork;
  // Light-toned photos keep the default charcoal type; dark ones flip to white.
  const invert = onPhoto && !lightPhoto;

  return (
    <header
      style={artwork ? ({ "--art-ar": background?.ratio ?? 2 } as CSSProperties) : undefined}
      className={`ambient border-b ${
        artwork
          ? "art-hero relative isolate flex items-center overflow-hidden border-hairline bg-white pb-16 pt-12 md:pb-24 md:pt-16 lg:py-0"
          : `pb-12 pt-10 md:pb-16 md:pt-14 ${
              onPhoto
                ? `flex min-h-[calc(100svh-4.6rem)] items-center lg:min-h-[calc(100svh-7.4rem)] ${
                    lightPhoto ? "border-hairline bg-white" : "border-charcoal/20 bg-charcoal"
                  }`
                : "border-hairline bg-fog"
            }`
      }`}
    >
      {background && (
        <>
          <Image
            src={background.src}
            alt={background.alt ?? ""}
            fill
            priority
            sizes="100vw"
            className={artwork ? "object-cover object-right" : "object-cover"}
          />
          {/* Scrim — keeps the copy legible over the photo. Artwork carries its
              own white field on large screens, so it only needs one below. */}
          <div
            aria-hidden
            className={
              artwork
                ? "absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent xl:hidden"
                : lightPhoto
                  ? "absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/20"
                  : "absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40"
            }
          />
          {!artwork && (
            <div
              aria-hidden
              className={lightPhoto ? "absolute inset-0 bg-white/10" : "absolute inset-0 bg-charcoal/15"}
            />
          )}
        </>
      )}
      {!artwork && (
        <>
          <div
            className="glow-orb glow-orb-red"
            aria-hidden
            style={{ width: 380, height: 380, top: -190, right: -110, opacity: invert ? 0.35 : 0.2 }}
          />
          <div
            className={`ring-circle ${invert ? "ring-circle-light" : ""}`}
            aria-hidden
            style={{ width: 240, height: 240, top: -60, right: "10%" }}
          />
        </>
      )}
      <div className="glow-line" aria-hidden style={{ bottom: 0, left: 0, right: 0 }} />
      <div className={`container-sbd relative ${onPhoto ? "w-full" : ""}`}>
        <div
          className={
            artwork
              ? { md: "max-w-md", lg: "max-w-lg", xl: "max-w-xl" }[background?.copy ?? "lg"]
              : ""
          }
        >
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol
              className={`flex flex-wrap items-center gap-x-2 text-xs ${
                invert ? "text-white/60" : "text-slate-grey"
              }`}
            >
              {breadcrumbs.map((b, i) => (
                <li key={b.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className={invert ? "text-white" : "text-charcoal"}>{b.name}</span>
                  ) : (
                    <Link href={b.path} className="hover:text-sbd-red">
                      {b.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <div className="mb-3">
            <Eyebrow light={invert}>{eyebrow}</Eyebrow>
          </div>
        )}
        <h1
          className={`red-rule max-w-4xl text-[length:var(--text-h1)] ${
            invert ? "text-white" : "text-charcoal"
          }`}
        >
          {title}
        </h1>
        {intro && (
          <p
            className={`mt-7 max-w-3xl text-lg ${invert ? "text-white/75" : "text-slate-grey"}`}
          >
            {intro}
          </p>
        )}
        {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </header>
  );
}

/* ---------- CTA band ---------- */

export function CtaBand({
  title = "Send a photo. Get a quote within 24 hours.",
  body = "Tell us what you are protecting and from what. We will come back with a part number, a price and a date.",
  primary = { label: "Request a quote", href: "/request-a-quote" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-sbd">
        <div className="ambient rounded-3xl bg-charcoal px-6 py-12 shadow-[0_20px_55px_rgba(26,26,26,0.22)] ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-[0_26px_70px_rgba(26,26,26,0.3)] md:px-12 md:py-14">
          <div className="blueprint-grid blueprint-grid-dark" aria-hidden />
          <div
            className="glow-orb glow-orb-red"
            aria-hidden
            style={{ width: 420, height: 420, top: -160, right: -100, opacity: 0.45 }}
          />
          <div className="ring-circle ring-circle-light" aria-hidden style={{ width: 220, height: 220, bottom: -70, left: "8%" }} />
          <div className="glow-line" aria-hidden style={{ top: 0, left: "15%", right: "15%" }} />
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <h2 className="text-[length:var(--text-h2)] text-white">{title}</h2>
              <p className="mt-4 text-white/70">{body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Button href={primary.href} variant="primary" className="btn-sheen">
                {primary.label}
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white hover:text-charcoal"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Capability note ---------- */

export function CapabilityNote({ text }: { text: string }) {
  return (
    <aside className="border-l-4 border-sbd-red bg-fog p-6">
      <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
        Straight answer
      </p>
      <p className="text-charcoal">{text}</p>
    </aside>
  );
}
