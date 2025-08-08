import { useMemo } from "react";
import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

export default function Join() {
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Application — Aurora Esports");
    const body = encodeURIComponent(
      `Hello Aurora Team,%0D%0A%0D%0AMy name is ... and I'd like to join as ...%0D%0ADiscord: ...%0D%0AMotivation: ...`
    );
    return `mailto:contact@aurora-esports.be?subject=${subject}&body=${body}`;
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Opening your email client…", description: "Your application template is ready." });
    window.location.href = mailto;
  };

  return (
    <>
      <SEO
        title="Join Us — Aurora Esports"
        description="Apply as player, staff or creator. Share your Discord and motivation in a short form."
      />
      <section className="container mx-auto px-4 py-16">
        <header className="mb-8 max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl mb-3">Join Aurora</h1>
          <p className="text-muted-foreground">We’re always looking for motivated players, staff and creators. Tell us how you want to contribute and we’ll get back to you.</p>
        </header>

        <form onSubmit={onSubmit} className="max-w-2xl space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@email.com" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="discord">Discord</Label>
              <Input id="discord" required placeholder="username#0000" />
            </div>
            <div>
              <Label>Role</Label>
              <Select>
                <SelectTrigger aria-required="true"><SelectValue placeholder="Select a role" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="player">Player</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="creator">Creator</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="motivation">Motivation</Label>
            <Textarea id="motivation" required placeholder="Tell us about you and why you want to join." />
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" variant="hero">Send Application</Button>
            <Button asChild variant="glow">
              <a href="https://discord.gg" target="_blank" rel="noreferrer">Join our Discord</a>
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
