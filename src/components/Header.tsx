"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedChild, setExpandedChild] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
    setExpandedChild(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-charcoal py-2 text-white md:block">
        <div className="container-sbd flex items-center justify-between text-xs">
          <p className="text-white/70">
            Commercial site protection across {site.serviceArea.split(",")[0]} and the GTA
          </p>
          <div className="flex items-center gap-5">
            <a href={site.emailHref} className="text-white/70 transition-colors hover:text-white">
              {site.email}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                <path d="M12.04 2.5A9.42 9.42 0 0 0 4 16.72L2.5 21.5l4.94-1.45a9.42 9.42 0 0 0 4.6 1.18h.01a9.43 9.43 0 0 0 0-18.73Zm0 17.06a7.7 7.7 0 0 1-3.92-1.07l-.28-.17-2.93.86.88-2.85-.18-.29a7.64 7.64 0 1 1 6.43 3.52Zm4.32-5.7c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.53.12-.16.24-.61.77-.77.93-.16.16-.32.18-.55.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.04-.42-.08-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4h-.46c-.16 0-.42.06-.63.3-.22.24-.83.81-.83 1.97 0 1.17.85 2.3.97 2.46.12.16 1.67 2.55 4.05 3.58.57.24 1.01.39 1.35.5.57.18 1.09.15 1.5.09.45-.06 1.4-.57 1.6-1.12.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              WhatsApp
            </a>
            <a href={site.phoneHref} className="font-display font-bold tracking-wide text-safety-yellow">
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur-sm">
        <div className="container-sbd flex items-center justify-between gap-4 py-2.5">
          <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
            <Image
              src="/logos/sbd-logo-full.png"
              alt={site.name}
              width={320}
              height={143}
              priority
              sizes="(min-width: 768px) 144px, 126px"
              className="h-14 w-auto md:h-16"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 font-display text-[0.8rem] font-bold uppercase tracking-wide transition-colors ${
                        active ? "text-sbd-red" : "text-charcoal hover:text-sbd-red"
                      }`}
                    >
                      {item.label}
                      {item.children && (
                        <span aria-hidden className="text-[0.6rem] opacity-50">
                          &#9660;
                        </span>
                      )}
                    </Link>
                    {item.children && (
                      <div className="invisible absolute left-0 top-full z-50 flex max-h-[calc(100vh-7rem)] w-80 flex-col border border-hairline bg-white opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <div className="h-1 w-full shrink-0 bg-sbd-red" />
                        <ul className="overflow-y-auto py-1">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-5 py-3 transition-colors hover:bg-fog"
                              >
                                <span className="block font-display text-[0.85rem] font-bold text-charcoal">
                                  {child.label}
                                </span>
                                {child.blurb && (
                                  <span className="mt-0.5 block text-xs text-slate-grey">
                                    {child.blurb}
                                  </span>
                                )}
                              </Link>
                              {child.children && (
                                <ul className="border-l-2 border-hairline pb-1 pl-5 ml-5">
                                  {child.children.map((sub) => (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        className="block py-2 pr-5 text-[0.82rem] text-slate-grey transition-colors hover:text-sbd-red"
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/request-a-quote"
              className="btn-sheen hidden bg-sbd-red px-5 py-3 font-display text-[0.78rem] font-bold uppercase tracking-wider text-white transition-colors hover:bg-sbd-red-dark sm:inline-block"
            >
              Request a Quote
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-hairline lg:hidden"
            >
              <span
                className={`block h-[2px] w-5 bg-charcoal transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-charcoal transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-charcoal transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-hairline bg-white lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="divide-y divide-hairline">
                {nav.map((item) => (
                  <li key={item.href}>
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                          aria-expanded={expanded === item.href}
                          className="flex w-full items-center justify-between px-5 py-4 text-left font-display text-sm font-bold uppercase tracking-wide text-charcoal"
                        >
                          {item.label}
                          <span
                            aria-hidden
                            className={`text-sbd-red transition-transform ${
                              expanded === item.href ? "rotate-45" : ""
                            }`}
                          >
                            +
                          </span>
                        </button>
                        {expanded === item.href && (
                          <ul className="bg-fog pb-2">
                            <li>
                              <Link
                                href={item.href}
                                className="block px-5 py-2.5 text-sm font-semibold text-sbd-red"
                              >
                                All {item.label}
                              </Link>
                            </li>
                            {item.children.map((child) =>
                              child.children ? (
                                // Tapping the name opens the page; the + reveals the range.
                                <li key={child.href}>
                                  <div className="flex items-center">
                                    <Link
                                      href={child.href}
                                      className="flex-1 px-5 py-2.5 text-sm text-charcoal"
                                    >
                                      {child.label}
                                    </Link>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setExpandedChild(
                                          expandedChild === child.href ? null : child.href
                                        )
                                      }
                                      aria-expanded={expandedChild === child.href}
                                      aria-label={`${
                                        expandedChild === child.href ? "Hide" : "Show"
                                      } ${child.label} range`}
                                      className="mr-2 flex h-11 w-11 items-center justify-center text-lg text-sbd-red"
                                    >
                                      <span
                                        aria-hidden
                                        className={`transition-transform duration-200 ${
                                          expandedChild === child.href ? "rotate-45" : ""
                                        }`}
                                      >
                                        +
                                      </span>
                                    </button>
                                  </div>
                                  {expandedChild === child.href && (
                                    <ul>
                                      {child.children.map((sub) => (
                                        <li key={sub.href}>
                                          <Link
                                            href={sub.href}
                                            className="block border-l-2 border-hairline py-2.5 pl-4 ml-9 pr-5 text-sm text-slate-grey"
                                          >
                                            {sub.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ) : (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="block px-5 py-2.5 text-sm text-charcoal"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-5 py-4 font-display text-sm font-bold uppercase tracking-wide text-charcoal"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-3 border-t border-hairline p-5">
              <Link
                href="/request-a-quote"
                className="block bg-sbd-red px-5 py-3.5 text-center font-display text-sm font-bold uppercase tracking-wider text-white"
              >
                Request a Quote
              </Link>
              <a
                href={site.phoneHref}
                className="block border-2 border-charcoal px-5 py-3.5 text-center font-display text-sm font-bold uppercase tracking-wider text-charcoal"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
