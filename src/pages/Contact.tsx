import { useMemo } from "react";
import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Contact — Aurora Esports");
    return `mailto:aurorabenelux@gmail.com?subject=${subject}`;
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Opening your email client…", description: "Your message template is ready." });
    window.location.href = mailto;
  };

  return (
    <>
      <SEO
        title="Contact — Aurora Esports"
        description="Contact Aurora Esports ASBL. Media, partnership and general enquiries."
      />
      <section className="container mx-auto px-4 py-16">
        <header className="mb-8 max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl mb-3">Contact</h1>
          <p className="text-muted-foreground">Media, partnership and general enquiries. We aim to respond within 48 hours.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <form onSubmit={onSubmit} className="space-y-6">
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
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required placeholder="How can we help?" />
            </div>
            <Button type="submit" variant="hero">Send Message</Button>
          </form>

          <aside className="rounded-xl border border-border/60 p-6 bg-card/60">
            <h2 className="font-display text-2xl mb-3">Aurora Esports ASBL</h2>
            <p className="text-muted-foreground">Brussels, Belgium</p>
            <a href="mailto:aurorabenelux@gmail.com" className="story-link text-sm inline-block mt-2">aurorabenelux@gmail.com</a>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Socials: Twitter, Instagram, Twitch, YouTube and Discord</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
