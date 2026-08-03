"use client";

import { useEffect, useState } from "react";

/**
 * Opens a datasheet in an overlay on the page rather than a new tab, so the
 * visitor can close it with the × and carry on reading. `#view=Fit` asks the
 * browser's PDF viewer to show the whole page instead of zooming to width.
 */
export default function DatasheetViewer({ file, title }: { file: string; title: string }) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-sheen inline-flex items-center gap-2 bg-sbd-red px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-sbd-red-dark hover:shadow-[0_6px_18px_rgba(200,16,46,0.3)]"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.2" />
        </svg>
        View PDF
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} datasheet`}
          className="fixed inset-0 z-[60] flex flex-col bg-charcoal/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-hairline px-4 py-3">
              <p className="truncate font-display text-sm font-bold text-charcoal">{title}</p>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={file}
                  download
                  className="hidden font-display text-xs font-bold uppercase tracking-wider text-sbd-red hover:underline sm:inline"
                >
                  Download
                </a>
                <a
                  href={file}
                  target="_blank"
                  rel="noopener"
                  className="hidden font-display text-xs font-bold uppercase tracking-wider text-slate-grey hover:text-charcoal sm:inline"
                >
                  Open in new tab
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close datasheet"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-charcoal transition-colors hover:border-sbd-red hover:bg-sbd-red hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              src={`${file}#view=Fit&toolbar=1`}
              title={`${title} datasheet`}
              className="h-full w-full flex-1 bg-fog"
            />
          </div>
        </div>
      )}
    </>
  );
}
