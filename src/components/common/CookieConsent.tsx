import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

type ConsentPrefs = {
  necessary: true; // always true
  analytics: boolean;
  marketing: boolean;
};

type ConsentContextType = {
  prefs: ConsentPrefs;
  setPrefs: (p: ConsentPrefs) => void;
  openPreferences: () => void;
};

const ConsentContext = createContext<ConsentContextType | null>(null);

const STORAGE_KEY = "cookie-consent-v1";

function loadPrefs(): ConsentPrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentPrefs;
    return {
      necessary: true,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
    };
  } catch {
    return null;
  }
}

function savePrefs(p: ConsentPrefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prefs, setPrefsState] = useState<ConsentPrefs>(() => loadPrefs() ?? { necessary: true, analytics: false, marketing: false });
  const [visible, setVisible] = useState<boolean>(() => loadPrefs() == null);
  const [manageOpen, setManageOpen] = useState(false);

  useEffect(() => {
    const handler = () => setManageOpen(true);
    window.addEventListener("open-cookie-preferences", handler as EventListener);
    return () => window.removeEventListener("open-cookie-preferences", handler as EventListener);
  }, []);

  const setPrefs = useCallback((p: ConsentPrefs) => {
    const next = { ...p, necessary: true } as ConsentPrefs;
    setPrefsState(next);
    savePrefs(next);
  }, []);

  const openPreferences = useCallback(() => setManageOpen(true), []);

  const value = useMemo<ConsentContextType>(() => ({ prefs, setPrefs, openPreferences }), [prefs, setPrefs, openPreferences]);

  const acceptAll = () => {
    setPrefs({ necessary: true, analytics: true, marketing: true });
    setVisible(false);
  };

  const saveSelection = () => {
    setPrefs(prefs);
    setVisible(false);
    setManageOpen(false);
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}

      {(visible || manageOpen) && (
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="container mx-auto px-4 pb-6">
            <div className="rounded-xl border border-border/60 bg-card/90 backdrop-blur p-4 shadow-xl">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-medium">Cookies & privacy</h2>
                    <p className="text-sm text-muted-foreground">We use necessary cookies to run the site. Enable optional cookies for media embeds (YouTube/Twitch). You can change this anytime.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="secondary" onClick={() => setManageOpen((o) => !o)} aria-expanded={manageOpen}>
                      {manageOpen ? "Hide options" : "Manage preferences"}
                    </Button>
                    <Button variant="hero" onClick={acceptAll}>Accept all</Button>
                  </div>
                </div>

                {manageOpen && (
                  <div className="grid sm:grid-cols-3 gap-4 border-t border-border/60 pt-4">
                    <div className="rounded-lg border border-border/60 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Necessary</div>
                          <div className="text-xs text-muted-foreground">Always on</div>
                        </div>
                        <Switch checked disabled aria-readonly aria-label="Necessary cookies" />
                      </div>
                    </div>
                    <div className="rounded-lg border border-border/60 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Analytics</div>
                          <div className="text-xs text-muted-foreground">Off (not used)</div>
                        </div>
                        <Switch checked={prefs.analytics} onCheckedChange={(v) => setPrefsState((p) => ({ ...p, analytics: v }))} aria-label="Analytics cookies" />
                      </div>
                    </div>
                    <div className="rounded-lg border border-border/60 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Media</div>
                          <div className="text-xs text-muted-foreground">Required for YouTube/Twitch embeds</div>
                        </div>
                        <Switch checked={prefs.marketing} onCheckedChange={(v) => setPrefsState((p) => ({ ...p, marketing: v }))} aria-label="Media cookies" />
                      </div>
                    </div>
                    <div className="sm:col-span-3 flex justify-end gap-2">
                      <Button variant="secondary" onClick={() => setManageOpen(false)}>Cancel</Button>
                      <Button variant="hero" onClick={saveSelection}>Save selection</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </ConsentContext.Provider>
  );
};

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within CookieConsentProvider");
  return ctx;
}
