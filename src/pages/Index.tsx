import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/common/SEO";
import MouseLight from "@/components/common/MouseLight";
const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <SEO
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          name: "Aurora Esports ASBL",
          url: typeof window !== 'undefined' ? window.location.origin : '',
          foundingDate: "2023",
          sport: "Esports",
          address: { "@type": "PostalAddress", addressCountry: "BE" }
        }}
      />
      <MouseLight />
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-36">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 text-center">
            <p className="font-medium text-primary mb-3 tracking-widest uppercase">{t('home.badge')}</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              {t('home.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.desc')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild variant="hero" size="xl" className="hover-scale">
                <Link to="/join">{t('home.ctas.join')}</Link>
              </Button>
              <Button asChild variant="glow" size="xl">
                <Link to="/about">{t('home.ctas.mission')}</Link>
              </Button>
              <Button asChild variant="ghost" size="xl">
                <Link to="/contact">{t('home.ctas.contact')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: t('home.cards.competitive.title'),
              desc: t('home.cards.competitive.desc'),
              to: t('home.cards.competitive.to'),
            },
            {
              title: t('home.cards.partnership.title'),
              desc: t('home.cards.partnership.desc'),
              to: t('home.cards.partnership.to'),
            },
            {
              title: t('home.cards.media.title'),
              desc: t('home.cards.media.desc'),
              to: t('home.cards.media.to'),
            },
          ].map((c) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl mb-2">{c.title}</h3>
                  <p className="text-muted-foreground mb-4">{c.desc}</p>
                  <Button asChild variant="link" className="px-0">
                    <Link to={c.to} className="story-link">{t('common.explore')}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="rounded-xl border border-border/60 p-8 md:p-12 bg-card/60">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-3">{t('home.built.title')}</h2>
              <p className="text-muted-foreground">{t('home.built.desc')}</p>
            </div>
            <div className="flex flex-wrap gap-6 justify-start md:justify-end">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary">{t('home.built.stats.year')}</div>
                <p className="text-sm text-muted-foreground">{t('home.built.stats.yearLabel')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold">{t('home.built.stats.league')}</div>
                <p className="text-sm text-muted-foreground">{t('home.built.stats.leagueLabel')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold">{t('home.built.stats.growth')}</div>
                <p className="text-sm text-muted-foreground">{t('home.built.stats.growthLabel')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
