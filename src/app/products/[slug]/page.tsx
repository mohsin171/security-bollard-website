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

      <PageHeader
        eyebrow={product.eyebrow}
        title={product.headline}
        intro={product.intro}
        breadcrumbs={crumbs}
      />

      <Section>
        <SectionHeading title="Where it is used" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <CheckList items={product.applications} />
          <div className="border border-hairline bg-fog p-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
              Not sure which option fits?
            </p>
            <p className="mt-3 text-slate-grey">
              Send a photo of the location and tell us what you are protecting. We will specify it
              and quote it within 24 hours — including the cheaper option if that is the right one.
            </p>
            <div className="mt-5">
              <Button href="/request-a-quote">Send a photo</Button>
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
