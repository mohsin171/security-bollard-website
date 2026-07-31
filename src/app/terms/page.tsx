import { buildMetadata } from "@/lib/seo";
import { site, capabilityStatement } from "@/content/site";
import { PageHeader, Section, CapabilityNote } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Terms of Sale",
  description: "Quotation validity, lead times, delivery, returns and product capability terms.",
  path: "/terms",
});

const prose = "max-w-3xl space-y-4 text-slate-grey [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-charcoal [&_a]:text-sbd-red [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Sale"
        intro="The commercial terms that apply to quotations and orders."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Terms of Sale", path: "/terms" }]}
      />
      <Section>
        <div className={prose}>
          <p className="text-sm">Last updated: {new Date().getFullYear()}</p>

          <h2>Quotations</h2>
          <p>
            Quotations state a validity period on the document. Pricing is held for that period
            unless a material change in supply cost occurs, in which case we will contact you before
            proceeding rather than revise an accepted order.
          </p>

          <h2>Lead times</h2>
          <p>
            Lead times are stated per line on the quotation and confirmed in writing. Where a lead
            time changes after order, we will notify you as soon as we know.
          </p>

          <h2>Delivery</h2>
          <p>
            Delivery terms are stated on the quotation. Staged and phased deliveries are available
            for multi-site and project work. Minimum order values apply to orders outside Ontario.
          </p>

          <h2>Installation</h2>
          <p>
            We supply product, and coordinate installation where quoted. Where installation is
            included it is stated explicitly on the quotation. We do not perform civil works, deep
            foundation construction, electrical work, or provide stamped or sealed engineering.
          </p>

          <h2>Site conditions</h2>
          <p>
            Pricing assumes a sound mounting surface suitable for the specified anchor. Where site
            conditions differ from those described at quotation, additional work may be required and
            will be quoted before proceeding.
          </p>

          <h2>Product capability</h2>
          <CapabilityNote text={capabilityStatement} />
          <p>
            No statement on this website, in a quotation, or in any conversation should be taken as
            a representation that our products carry a crash rating or certification they do not
            hold.
          </p>

          <h2>Returns</h2>
          <p>
            Standard stock items may be returned in original condition, subject to a restocking
            charge and prior authorisation. Custom, made-to-order and special-finish items are
            non-returnable.
          </p>

          <h2>Warranty</h2>
          <p>
            Products carry the manufacturer&rsquo;s warranty against defects in materials and
            workmanship. Warranty does not cover impact damage, which is the product performing its
            intended function.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={site.emailHref}>{site.email}</a> or {site.phone}.
          </p>
        </div>
      </Section>
    </>
  );
}
