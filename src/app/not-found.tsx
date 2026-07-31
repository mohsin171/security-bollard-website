import { Section, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-slate-grey">
          Error 404
        </p>
        <h1 className="mt-3 text-[length:var(--text-h1)] text-charcoal">
          That page is not here
        </h1>
        <div className="mx-auto mt-5 h-1 w-20 bg-sbd-red" />
        <p className="mt-6 text-slate-grey">
          The page may have moved. Try the products or services sections, or send us the details and
          we will point you to the right place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/products" variant="outline">
            Browse products
          </Button>
        </div>
      </div>
    </Section>
  );
}
