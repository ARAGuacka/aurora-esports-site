import { SEO } from "@/components/common/SEO";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aurora Esports ASBL",
          foundingDate: "2025",
          url: typeof window !== 'undefined' ? window.location.href : ''
        }}
      />
      <section className="container mx-auto px-4 py-16">
        <header className="mb-10">
	 {/* LOGO */}
          <img
            src="/logo-aurora.webp"
            alt="Aurora Esports Logo"
            className="mx-auto h-20 mb-6"
          />

          <h1 className="font-display text-4xl md:text-5xl mb-3">{t('about.headerTitle')}</h1>
          <p className="text-muted-foreground max-w-2xl">{t('about.headerDesc')}</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { title: t('about.values.development.title'), desc: t('about.values.development.desc') },
            { title: t('about.values.professionalism.title'), desc: t('about.values.professionalism.desc') },
            { title: t('about.values.community.title'), desc: t('about.values.community.desc') },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-border/60 p-6 bg-card/60">
              <h3 className="font-display text-xl mb-2">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="font-display text-2xl mb-4">{t('about.timeline.title')}</h2>
          <ol className="relative border-l border-border/60 ml-3">
            {[
              { year: "2023", text: t('about.timeline.y2023') },
              { year: "2024", text: t('about.timeline.y2024') },
              { year: "2025", text: t('about.timeline.y2025') },
            ].map((item) => (
              <li key={item.year} className="mb-8 ml-6">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-primary" />
                <time className="font-semibold">{item.year}</time>
                <p className="text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </section>
    </>
  );
}
