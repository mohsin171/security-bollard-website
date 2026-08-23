import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PageHeader, Section, CheckList } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Send a photo and get a written commercial quote within 24 hours. Bollards, bike racks, covers and barriers across Toronto, the GTA and Ontario.",
  path: "/request-a-quote",
  image: "/request-a-quote-hero-6.webp",
});

export default function RequestQuotePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Request a Quote", path: "/request-a-quote" },
  ];

  return (
    <Reveal>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Request a quote"
        title="Send a photo. Get a written quote within 24 hours."
        intro="The more of this you can answer the faster we can price it, but if all you have is a photograph and an address, send that and we will ask the rest."
        breadcrumbs={crumbs}
        background={{
          src: "/request-a-quote-hero-6.webp",
          alt: "Someone photographing a row of stainless bollards on a phone, with the three steps to a quote listed beside them",
          tone: "artwork",
          copy: "md",
        }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <QuoteForm />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="border-l-4 border-sbd-red bg-fog p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                Rather just call?
              </p>
              <a
                href={site.phoneHref}
                className="mt-2 block font-display text-2xl font-bold text-charcoal"
              >
                {site.phone}
              </a>
              <p className="mt-1 text-sm text-slate-grey">{site.hours}</p>
              <a
                href={site.emailHref}
                className="mt-3 block text-sm text-slate-grey underline underline-offset-4 hover:text-sbd-red"
              >
                {site.email}
              </a>
            </div>

            <div className="reveal hover-lift border border-hairline p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                What you get back
              </p>
              <div className="mt-4">
                <CheckList
                  items={[
                    "A written quote within 24 hours on business days",
                    "Itemised part numbers and pricing",
                    "Lead time confirmed on each line",
                    "A board-ready one-page summary on request",
                  ]}
                />
              </div>
            </div>

            <div className="reveal hover-lift border border-hairline p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                The most useful thing you can send
              </p>
              <p className="mt-3 text-slate-grey">
                A photograph. Stand back far enough to show the surrounding area, then take a second
                one close up at the base. Between those two we can usually identify the product, the
                mounting condition and the size without visiting.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </Reveal>
  );
}
