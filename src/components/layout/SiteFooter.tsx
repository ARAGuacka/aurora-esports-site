import { Link } from "react-router-dom";
import { Twitter, Twitch, Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/60">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
                      <img
  src="/logo-aurora.webp"
  alt="Aurora Esports"
  className="h-8 w-auto"
/>
            <span className="font-display text-lg tracking-wider">AURORA ESPORTS</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            {t('common.footer.orgBlurb')}
          </p>
          <p className="text-sm text-muted-foreground mt-3">{t('common.footer.location')}</p>
          <a href="mailto:aurorabenelux@gmail.com" className="text-sm story-link">aurorabenelux@gmail.com</a>
        </div>

        <div>
          <h3 className="font-medium mb-3">{t('common.footer.navigation')}</h3>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground">{t('common.nav.about')}</Link>
            <Link to="/teams" className="hover:text-foreground">{t('common.nav.teams')}</Link>
            <Link to="/partnership" className="hover:text-foreground">{t('common.nav.partnership')}</Link>
            <Link to="/media" className="hover:text-foreground">{t('common.nav.media')}</Link>
            <Link to="/join" className="hover:text-foreground">{t('common.nav.join')}</Link>
            <Link to="/contact" className="hover:text-foreground">{t('common.nav.contact')}</Link>
            <Link to="/legal" className="hover:text-foreground">RGPD / Legal</Link>
          </nav>
        </div>

        <div>
          <h3 className="font-medium mb-3">{t('common.footer.connect')}</h3>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="https://x.com/AuroraGamingBE" aria-label="X (Twitter)" className="hover:text-primary"><Twitter /></a>
            <a href="https://www.twitch.tv/aurora_esport_be" aria-label="Twitch" className="hover:text-primary"><Twitch /></a>
            <a href="mailto:aurorabenelux@gmail.com" aria-label="Email" className="hover:text-primary"><Mail /></a>
            <a href="https://discord.gg/hJMxHrjyxq" aria-label="Discord" className="hover:text-primary"><MessageSquare /></a>
          </div>
          <div className="mt-4">
            <Link to="/contact" className="text-sm story-link">{t('common.footer.requestPdf')}</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Aurora Esports ASBL — {t('common.footer.rights')}
      </div>
    </footer>
  );
}
