import { site } from "@/content/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
