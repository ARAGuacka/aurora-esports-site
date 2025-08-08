import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SUPPORTED = ["en", "fr", "nl"] as const;

type Lng = (typeof SUPPORTED)[number];

export function LanguageSync() {
  const { i18n } = useTranslation();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const fromUrl = params.get("lng");
    const stored = typeof window !== 'undefined' ? localStorage.getItem("lng") : null;
    const next = (fromUrl || stored) as Lng | null;

    if (next && SUPPORTED.includes(next)) {
      if (i18n.language !== next) i18n.changeLanguage(next);
    }
  }, [search, i18n]);

  useEffect(() => {
    // persist and reflect in <html lang>
    if (typeof window !== 'undefined') {
      localStorage.setItem("lng", i18n.language);
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  return null;
}
