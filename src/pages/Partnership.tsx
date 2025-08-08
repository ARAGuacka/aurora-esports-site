import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/ui/button";

export default function Partnership() {
  return (
    <>
      <SEO
        title="Partnerships — Aurora Esports"
        description="Sponsor Aurora Esports: logo placements, brand integrations, co-content and giveaways."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aurora Esports ASBL",
          seeks: {
            "@type": "Offer",
            description: "Brand partnerships and sponsorships",
          }
        }}
      />
      <section className="container mx-auto px-4 py-16">
        <header className="mb-10 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl mb-3">Partnership & Sponsorship</h1>
          <p className="text-muted-foreground">We deliver meaningful brand moments across competition, content and community. Our partners join stories that fans follow — not just logos on a jersey.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { kpi: "5.9%", label: "Avg. Engagement Rate" },
            { kpi: "230K+", label: "Yearly Impressions" },
            { kpi: "161%", label: "YoY Community Growth" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-border/60 p-6 bg-card/60 text-center">
              <div className="font-display text-3xl text-primary mb-1">{m.kpi}</div>
              <div className="text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>

        <section className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="rounded-xl border border-border/60 p-6 bg-card/60">
            <h2 className="font-display text-2xl mb-3">What we offer</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Premium logo placements (jersey, stream overlays, website)</li>
              <li>Brand integrations within content and live broadcasts</li>
              <li>Co-produced campaigns and storytelling</li>
              <li>Co-produced team roster cinematic announcement</li>
              <li>Giveaways and community activations</li>
              <li>Event presence and product seeding</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 p-6 bg-card/60">
            <h2 className="font-display text-2xl mb-3">Why Aurora</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Professional ASBL structure and governance</li>
              <li>Champion pedigree with a player-first approach</li>
              <li>High-quality production and design capabilities</li>
              <li>Authentic connection to Belgian esports</li>
            </ul>
          </div>
        </section>

        <div className="flex items-center gap-4">
          <Button variant="hero" asChild>
            <a href="/contact?type=partner">Become an Official Partner</a>
          </Button>
          <Button variant="glow" asChild>
            <a href="/media">See our Media</a>
          </Button>
        </div>
      </section>
    </>
  );
}
