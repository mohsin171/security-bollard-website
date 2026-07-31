import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHeader, Section } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Security Bollard Direct collects, uses and protects personal information.",
  path: "/privacy",
});

const prose = "max-w-3xl space-y-4 text-slate-grey [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-charcoal [&_a]:text-sbd-red [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        intro="How we handle the information you share with us."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]}
      />
      <Section>
        <div className={prose}>
          <p className="text-sm">Last updated: {new Date().getFullYear()}</p>

          <h2>Who we are</h2>
          <p>
            {site.name} supplies commercial site protection hardware across Ontario. You can reach
            us at <a href={site.emailHref}>{site.email}</a> or {site.phone}.
          </p>

          <h2>What we collect</h2>
          <p>When you submit a quote request or contact us, we collect:</p>
          <ul>
            <li>Your name, company, email address and phone number</li>
            <li>Details about your site, including address or city, and any photograph you send</li>
            <li>Information about the products or services you are enquiring about</li>
          </ul>
          <p>
            We also collect standard technical information such as pages visited, which is used to
            understand how the website is performing.
          </p>

          <h2>Why we collect it</h2>
          <p>
            To prepare and send your quotation, to answer your enquiry, to fulfil an order, and to
            follow up about your project. We do not sell personal information, and we do not share
            it with third parties except where necessary to fulfil your order, such as with a
            delivery carrier or an installation partner.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Quote requests and correspondence are retained for as long as needed to service the
            enquiry and to meet business record-keeping obligations. You can ask us to delete your
            information at any time.
          </p>

          <h2>Site photographs</h2>
          <p>
            Photographs you send are used to prepare your quotation. We will not publish photographs
            of your property in marketing material without your written permission.
          </p>

          <h2>Cookies</h2>
          <p>
            This website uses only what is necessary to function, plus any analytics we may add to
            understand traffic. We do not use advertising cookies.
          </p>

          <h2>Your rights</h2>
          <p>
            Under Canadian privacy legislation you may request access to the personal information we
            hold about you, ask for corrections, or ask us to delete it. Contact{" "}
            <a href={site.emailHref}>{site.email}</a>.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. The date at the top reflects the most
            recent revision.
          </p>
        </div>
      </Section>
    </>
  );
}
