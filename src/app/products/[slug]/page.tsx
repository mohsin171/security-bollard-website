import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, getProduct } from "@/content/products";
import { getSegment } from "@/content/segments";
import { capabilityStatement } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, productSchema, faqSchema, breadcrumbSchema } from "@/components/JsonLd";
import {
  PageHeader, Section, SectionHeading, SpecTable, CheckList,
  FaqList, CtaBand, LinkCard, CapabilityNote, Button,
} from "@/components/ui";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  return (
    <>
      <JsonLd data={productSchema(product.name, product.metaDescription, `/products/${product.slug}`)} />
      <JsonLd data={faqSchema(product.choosing.map((c) => ({ q: c.question, a: c.answer })))} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {product.hero ? (
        <header className="ambient border-b border-hairline bg-white">
          <div className="blueprint-grid" aria-hidden />
          <div
            className="glow-orb glow-orb-red"
            aria-hidden
            style={{ width: 460, height: 460, top: -180, left: -120, opacity: 0.22 }}
          />
          <div
            className="ring-circle"
            aria-hidden
            style={{ width: 260, height: 260, bottom: -80, left: "34%" }}
          />
          <div className="glow-line" aria-hidden style={{ bottom: 0, left: 0, right: 0 }} />

          <div className="container-sbd grid min-h-[calc(100svh-4.6rem)] items-center gap-10 py-10 md:py-12 lg:min-h-[calc(100svh-7.4rem)] lg:grid-cols-[1.1fr_1fr]">
            {/* Text — left */}
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-x-2 text-xs text-slate-grey">
                  {crumbs.map((b, i) => (
                    <li key={b.path} className="flex items-center gap-2">
                      {i > 0 && <span aria-hidden>/</span>}
                      {i === crumbs.length - 1 ? (
                        <span className="text-charcoal">{b.name}</span>
                      ) : (
                        <Link href={b.path} className="transition-colors hover:text-sbd-red">
                          {b.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
              <p className="hero-in font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
                {product.eyebrow}
              </p>
              <h1 className="hero-in hero-in-d1 mt-4 text-[length:var(--text-h1)] text-charcoal">
                {product.headline}
              </h1>
              <div className="hero-in hero-in-d1 mt-6 h-1 w-24 bg-sbd-red" />
              <p className="hero-in hero-in-d2 mt-7 max-w-xl text-lg text-slate-grey">
                {product.intro}
              </p>
            </div>

            {/* Photo card — right, glowing red border, sized to the viewport */}
            <div className="hero-in hero-in-d2 relative mx-auto aspect-[4/5] w-full max-w-[24rem] lg:mx-0 lg:h-[min(70vh,37rem)] lg:w-auto lg:max-w-none lg:justify-self-end">
              {/* Outer glow halo */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.3),transparent_70%)] blur-xl"
              />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-sbd-red/70 shadow-[0_0_26px_rgba(200,16,46,0.35),0_14px_50px_rgba(26,26,26,0.18)]">
                <Image
                  src={product.hero.src}
                  alt={product.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 24rem, 30rem"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-charcoal/10"
                />
              </div>
            </div>
          </div>
        </header>
      ) : (
        <PageHeader
          eyebrow={product.eyebrow}
          title={product.headline}
          intro={product.intro}
          breadcrumbs={crumbs}
        />
      )}

      <Section>
        <SectionHeading title="Where it is used" />
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_1fr]">
          <CheckList items={product.applications} />
          <div className="relative flex">
            <div className="relative flex h-full w-full flex-col justify-center rounded-3xl border-2 border-sbd-red/60 bg-fog px-8 py-10 shadow-[0_0_14px_rgba(200,16,46,0.16),0_10px_30px_rgba(26,26,26,0.08)]">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-charcoal/10" />
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sbd-red">
                Not sure which option fits?
              </p>
              <p className="mt-4 text-lg text-charcoal">
                Send a photo of the location and tell us what you are protecting. We will specify it
                and quote it within 24 hours — including the cheaper option if that is the right one.
              </p>
              <div className="mt-7">
                <Button href="/request-a-quote" className="btn-sheen">Send a photo</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading eyebrow="Specifications" title="Options and technical data" />
        <div className="space-y-8">
          {product.variants.map((v) => (
            <article key={v.name} className="hover-lift border border-hairline bg-white">
              <div className="h-1 w-full bg-sbd-red" />
              <div
                className={`grid gap-8 p-6 md:p-8 ${
                  v.image ? "lg:grid-cols-[300px_1fr_1.05fr]" : "lg:grid-cols-[1fr_1.1fr]"
                }`}
              >
                {v.image && (
                  <div className="relative mx-auto w-full max-w-[300px] self-center">
                    <div
                      aria-hidden
                      className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.1),transparent_70%)]"
                    />
                    <Image
                      src={v.image.src}
                      alt={v.image.alt}
                      width={900}
                      height={900}
                      className="relative w-full transition-transform duration-500 hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 300px, 300px"
                    />
                    {v.model && (
                      <p className="mt-2 text-center font-mono text-[0.7rem] uppercase tracking-wider text-slate-grey">
                        {v.model}
                      </p>
                    )}
                  </div>
                )}
                <div className="self-center">
                  {v.model && (
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sbd-red">
                      Product code: {v.model}
                    </p>
                  )}
                  <h3 className="mt-1 font-display text-xl font-bold text-charcoal">{v.name}</h3>
                  <p className="mt-3 text-slate-grey">{v.summary}</p>
                  {v.notes && (
                    <p className="mt-4 border-l-2 border-stainless pl-4 text-sm italic text-slate-grey">
                      {v.notes}
                    </p>
                  )}
                </div>
                <div className="self-center">
                  <SpecTable rows={v.specs} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Before you order" title="Choosing the right option" />
        <FaqList faqs={product.choosing.map((c) => ({ q: c.question, a: c.answer }))} />
        <div className="mt-10">
          <CapabilityNote text={capabilityStatement} />
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading title="Commonly bought by" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {product.relatedSegments.map((s) => {
            const seg = getSegment(s);
            if (!seg) return null;
            return (
              <LinkCard
                key={seg.slug}
                href={`/who-we-serve/${seg.slug}`}
                title={seg.navLabel}
                blurb={seg.headline}
              />
            );
          })}
        </div>
        <p className="mt-8 text-sm text-slate-grey">
          Looking for dimensional data to attach to a submittal?{" "}
          <Link href="/products/spec-downloads" className="font-semibold text-sbd-red underline underline-offset-4">
            Spec sheets and downloads
          </Link>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
