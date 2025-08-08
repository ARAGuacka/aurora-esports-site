import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  structuredData?: object;
};

export function SEO({ title, description, image, structuredData }: SEOProps) {
  const { i18n } = useTranslation();
  const canonical = typeof window !== 'undefined' ? window.location.href : '';
  const jsonLd = structuredData ? JSON.stringify(structuredData) : undefined;

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const buildHref = (lng: string) => `${origin}${path}?lng=${lng}`;
  const currentLocale = i18n.language || 'en';

  return (
    <Helmet htmlAttributes={{ lang: currentLocale }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={buildHref('en')} />
      <link rel="alternate" hrefLang="fr" href={buildHref('fr')} />
      <link rel="alternate" hrefLang="nl" href={buildHref('nl')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:locale" content={currentLocale.replace('-', '_')} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index,follow" />
      {jsonLd && (
        <script type="application/ld+json">{jsonLd}</script>
      )}
    </Helmet>
  );
}
