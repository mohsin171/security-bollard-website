"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Opens a datasheet in an overlay rather than a new tab, so the visitor can
 * close it with the × and carry on reading.
 *
 * Two things this has to work around:
 *  - The card is inside a .reveal element, which uses a transform. A transform
 *    makes an ancestor the containing block for position:fixed, so the overlay
 *    has to be portalled to <body> or it lands mid-page instead of on screen.
 *  - Safari's inline PDF viewer ignores #view=Fit and fits to width. Sizing the
 *    frame narrower than the page's aspect ratio means fit-to-width shows the
 *    whole sheet anyway.
 */
export default function DatasheetViewer({ file, title }: { file: string; title: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  // Touch-only devices (iOS, Android) render just the first page of a PDF in an
  // embedded frame, with no way to reach page 2. Hand those to the browser's own
  // full-screen viewer instead, which pages and pinch-zooms properly.
  const [nativeViewer, setNativeViewer] = useState(false);

  useEffect(() => {
    setMounted(true);
    setNativeViewer(!window.matchMedia("(any-pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} datasheet`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/85 backdrop-blur-sm sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl sm:aspect-[58/100] sm:h-[92vh] sm:w-auto sm:max-w-[95vw] sm:rounded-lg">
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-hairline px-4 py-3">
          <p className="truncate font-display text-sm font-bold text-charcoal">{title}</p>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={file}
              download
              className="font-display text-xs font-bold uppercase tracking-wider text-sbd-red hover:underline"
            >
              Download
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close datasheet"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-charcoal transition-colors hover:border-sbd-red hover:bg-sbd-red hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <iframe
          src={`${file}#view=Fit&navpanes=0`}
          title={`${title} datasheet`}
          className="min-h-0 w-full flex-1 bg-fog"
        />
      </div>
    </div>
  );

  const triggerClass =
    "btn-sheen inline-flex items-center gap-2 bg-sbd-red px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-sbd-red-dark hover:shadow-[0_6px_18px_rgba(200,16,46,0.3)] active:scale-[0.97]";

  const eyeIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );

  if (nativeViewer) {
    return (
      <a href={file} target="_blank" rel="noopener" className={triggerClass}>
        {eyeIcon}
        View PDF
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M14 4h6v6M20 4l-8 8M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="sr-only">(opens the full datasheet in a new tab)</span>
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClass}>
        {eyeIcon}
        View PDF
      </button>

      {mounted && open && createPortal(overlay, document.body)}
    </>
  );
}
