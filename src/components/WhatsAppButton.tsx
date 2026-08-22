import { site } from "@/content/site";

/**
 * Floating click-to-chat button, on every page.
 *
 * Kept in WhatsApp's own green rather than SBD red: it is a third-party mark
 * and people recognise it instantly, which is the whole point of a floating
 * button. z-40 sits under the header (z-50) and the datasheet viewer (z-100),
 * so it never covers the menu or a PDF.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${site.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(26,26,26,0.28)] transition-transform duration-200 hover:scale-105 focus-visible:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 md:bottom-7 md:right-7"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
        <path d="M12.04 2.5A9.42 9.42 0 0 0 4 16.72L2.5 21.5l4.94-1.45a9.42 9.42 0 0 0 4.6 1.18h.01a9.43 9.43 0 0 0 0-18.73Zm0 17.06a7.7 7.7 0 0 1-3.92-1.07l-.28-.17-2.93.86.88-2.85-.18-.29a7.64 7.64 0 1 1 6.43 3.52Zm4.32-5.7c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.53.12-.16.24-.61.77-.77.93-.16.16-.32.18-.55.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.04-.42-.08-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4h-.46c-.16 0-.42.06-.63.3-.22.24-.83.81-.83 1.97 0 1.17.85 2.3.97 2.46.12.16 1.67 2.55 4.05 3.58.57.24 1.01.39 1.35.5.57.18 1.09.15 1.5.09.45-.06 1.4-.57 1.6-1.12.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}
