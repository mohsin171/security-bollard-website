"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Shot = { src: string; alt: string };

/** Swipeable product gallery: drag on touch, arrows and dots on desktop. */
export default function ProductGallery({ images, model }: { images: Shot[]; model?: string }) {
  const [i, setI] = useState(0);
  const startX = useRef<number | null>(null);
  const last = images.length - 1;

  const go = (next: number) => setI(next < 0 ? last : next > last ? 0 : next);

  return (
    <div className="relative mx-auto w-full max-w-[300px] self-center">
      <div
        aria-hidden
        className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.1),transparent_70%)]"
      />

      <div
        className="relative touch-pan-y select-none"
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
        aria-label={`${model ?? "Product"} photos`}
      >
        <div className="relative aspect-square w-full overflow-hidden">
          {images.map((img, n) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={900}
              height={900}
              sizes="300px"
              aria-hidden={n !== i}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${
                n === i ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous photo"
              className="absolute left-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-white/90 text-charcoal shadow-sm transition-colors hover:border-sbd-red hover:bg-sbd-red hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next photo"
              className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-white/90 text-charcoal shadow-sm transition-colors hover:border-sbd-red hover:bg-sbd-red hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((img, n) => (
            <button
              key={img.src}
              type="button"
              onClick={() => go(n)}
              aria-label={`Photo ${n + 1} of ${images.length}`}
              aria-current={n === i}
              className={`h-2 w-2 rounded-full transition-colors ${
                n === i ? "bg-sbd-red" : "bg-stainless hover:bg-slate-grey"
              }`}
            />
          ))}
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
