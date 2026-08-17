"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Shot = { src: string; alt: string };

/**
 * One random base per page load, shared by every gallery on the page. Combined
 * with each card's position it staggers the opening photo, so a range sharing
 * one set of colour options never renders as a column of identical images.
 */
let sharedBase: number | null = null;
function galleryBase() {
  if (sharedBase === null) sharedBase = Math.floor(Math.random() * 997);
  return sharedBase;
}

/** Swipeable product gallery: drag on touch, arrows and dots on desktop. */
export default function ProductGallery({
  images,
  model,
  randomStart = false,
  offset = 0,
}: {
  images: Shot[];
  model?: string;
  randomStart?: boolean;
  offset?: number;
}) {
  const [i, setI] = useState(0);
  const startX = useRef<number | null>(null);
  const last = images.length - 1;

  // Picked after mount, not during render, so the server and client agree on
  // the first paint and only then does it move to a random photo.
  useEffect(() => {
    if (randomStart && images.length > 1) {
      setI((galleryBase() + offset) % images.length);
    }
  }, [randomStart, offset, images.length]);

  const go = (next: number) => setI(next < 0 ? last : next > last ? 0 : next);

  return (
    <div className="relative mx-auto w-full max-w-[300px] self-center">
      <div
        aria-hidden
        className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.1),transparent_70%)]"
      />

      <div
        className="relative touch-pan-y select-none outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(i - 1);
          if (e.key === "ArrowRight") go(i + 1);
        }}
        onTouchStart={(e) => {
          startX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (startX.current === null) return;
          const dx = e.changedTouches[0].clientX - startX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1);
          startX.current = null;
        }}
        role="group"
        aria-roledescription="carousel"
        aria-label={`${model ?? "Product"} photos — swipe or use the arrow keys`}
      >
        <div className="relative aspect-square w-full overflow-hidden">
          {images.map((img, n) => (
            <Image
              key={`${img.src}-${n}`}
              src={img.src}
              alt={img.alt}
              width={900}
              height={900}
              sizes="300px"
              aria-hidden={n !== i}
              className={`absolute inset-0 h-full w-full object-contain transition-[opacity,transform] duration-500 ease-out ${
                n === i
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-[0.97] opacity-0"
              }`}
            />
          ))}
        </div>

      </div>

      {images.length > 1 && (
        <div className="relative mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(i - 1)}
            aria-label="Previous photo"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-white text-charcoal transition-all duration-200 hover:border-sbd-red hover:bg-sbd-red hover:text-white active:scale-90"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {images.map((img, n) => (
              <button
                key={`${img.src}-${n}`}
                type="button"
                onClick={() => go(n)}
                aria-label={`Photo ${n + 1} of ${images.length}`}
                aria-current={n === i}
                className={`grid h-7 w-5 place-items-center transition-transform active:scale-90`}
              >
                <span
                  aria-hidden
                  className={`block rounded-full transition-all duration-300 ${
                    n === i ? "h-2 w-5 bg-sbd-red" : "h-2 w-2 bg-stainless hover:bg-slate-grey"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(i + 1)}
            aria-label="Next photo"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-white text-charcoal transition-all duration-200 hover:border-sbd-red hover:bg-sbd-red hover:text-white active:scale-90"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {model && (
        <p className="mt-2 text-center font-mono text-[0.7rem] uppercase tracking-wider text-slate-grey">
          {model}
        </p>
      )}
    </div>
  );
}
