import { SEO } from "@/components/common/SEO";

export default function Legal() {
  return (
    <>
      <SEO
        title="Legal Notice & GDPR — Aurora Esports ASBL"
        description="RGPD and legal information for Aurora Esports ASBL: publisher, hosting, IP and personal data."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aurora Esports ASBL",
          email: "aurorabenelux@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "72 Kattenberg",
            postalCode: "1170",
            addressLocality: "Watermael-Boitsfort",
            addressCountry: "BE",
          },
        }}
      />
      <section className="container mx-auto px-4 py-16">
        <h1 className="font-display text-4xl md:text-5xl mb-8">RGPD / Legal Information</h1>
        <div className="space-y-6 text-muted-foreground">
          <p>
            In accordance with Belgian law, here is the legal information relating to the Aurora Esports ASBL website.
          </p>
          <section>
            <h2 className="font-display text-2xl mb-2">1. Website publisher</h2>
            <p>
              Aurora Esports ASBL<br />
              Company number: 1026030168<br />
              Headquarters: 72 Kattenberg 1170 Watermael-Boitsfort, Belgium<br />
              Publication manager: Peters Miguel<br />
              Contact email: <a className="story-link" href="mailto:aurorabenelux@gmail.com">aurorabenelux@gmail.com</a>
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">2. Hosting</h2>
            <p>
              The website is hosted by: [Name and address of the host to be completed]<br />
              Domain name: [Your URL to be completed]
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">3. Intellectual property</h2>
            <p>
              All elements on the website are the exclusive property of ASBL Aurora Esports, unless otherwise stated. Any partial or total reproduction is prohibited without written authorization.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-2">4. Personal data</h2>
            <p>
              Data collected via the website is processed in accordance with the GDPR. See the ASBL's GDPR charter for more details.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
