import { NavLink, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";

const navItems = [
  { to: "/about", key: "about" },
  { to: "/teams", key: "teams" },
  { to: "/partnership", key: "partnership" },
  { to: "/media", key: "media" },
  { to: "/join", key: "join" },
  { to: "/contact", key: "contact" },
];

export function SiteHeader() {
  const { t, i18n } = useTranslation();
  const activeCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary"
      : "text-foreground/80 hover:text-foreground transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img
  src="/logo-aurora.webp"
  alt="Aurora Esports"
  className="h-8 w-auto"
/>
          <span className="hidden sm:inline font-display text-lg tracking-wider">AURORA ESPORTS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={activeCls} end>
              {t(`common.nav.${item.key}`)}
            </NavLink>
          ))}
          <select
            aria-label="Language"
            className="bg-transparent border border-border/60 rounded-md px-2 py-1 text-sm"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="nl">NL</option>
          </select>
          <Button asChild variant="hero" size="sm" className="ml-2">
            <Link to="/partnership">{t('common.cta.becomePartner')}</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to} className={activeCls} end>
                    {t(`common.nav.${item.key}`)}
                  </NavLink>
                ))}
                <div className="flex items-center gap-2">
                  <label htmlFor="lang-mobile" className="text-sm text-muted-foreground">{t('common.language')}</label>
                  <select
                    id="lang-mobile"
                    aria-label="Language"
                    className="bg-transparent border border-border/60 rounded-md px-2 py-1 text-sm"
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                  >
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                    <option value="nl">NL</option>
                  </select>
                </div>
                <Button asChild variant="hero" className="mt-2">
                  <Link to="/partnership">{t('common.cta.becomePartner')}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}