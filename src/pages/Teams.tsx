import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const roster = [
  { name: "Vodin", role: "Top" },
  { name: "Gremy", role: "Jungle" },
  { name: "Shizuki", role: "Mid" },
  { name: "Khaydarin", role: "ADC" },
  { name: "Garank", role: "Support" },
];
const staff = [
  { name: 'Miguel "Guacka" Peters', role: "Founder" },
  { name: 'Maurice "MostWanted" Witt', role: "Co-CEO" },
  { name: 'Viktor "Shadowgream"', role: "Head Coach" },
  { name: 'Lisa "Novyy"', role: "Assistant Coach" },
  { name: 'Juan "ThunderYordle"', role: "Analyst" },
  { name: 'Alexis "Paradoxe"', role: "General Manager" },
];

export default function Teams() {
  return (
    <>
      <SEO
        title="Teams — Aurora Esports"
        description="Meet our players and staff. Competitive highlights and major results."
      />
      <section className="container mx-auto px-4 py-16">
        <h1 className="font-display text-4xl md:text-5xl mb-8">Teams</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">League of Legends — Division 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {roster.map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <Avatar><AvatarFallback>{p.name[0]}</AvatarFallback></Avatar>
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-muted-foreground">{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-display">Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                {staff.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <Avatar><AvatarFallback>{s.name[0]}</AvatarFallback></Avatar>
                    <div>
                      <div className="font-medium">{s.name}</div>
                      <div className="text-sm text-muted-foreground">{s.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { title: "ESLOL D2 — Spring 2024", desc: "Split Champions" },
            { title: "ESLOL D2 Spring Playoffs — 2024", desc: "Champions" },
            { title: "Road of Legends — 2025", desc: "Division 1" },
            { title: "Community Events", desc: "+ Content activations" },
          ].map((h) => (
            <div key={h.title} className="rounded-xl border border-border/60 p-6 bg-card/60">
              <div className="font-display text-xl">{h.title}</div>
              <p className="text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
