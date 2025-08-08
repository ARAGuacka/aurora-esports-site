import { SEO } from "@/components/common/SEO";

export default function Media() {
  const parent = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  return (
    <>
      <SEO
        title="Media & Content — Aurora Esports"
        description="Image and video gallery with behind-the-scenes, events and live streams."
      />
      <section className="container mx-auto px-4 py-16">
        <h1 className="font-display text-4xl md:text-5xl mb-8">Media & Content</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-border/60">
            <div className="aspect-video">
              <iframe
                title="Twitch Player"
                src={`https://player.twitch.tv/?channel=aurora_esport_be&parent=${parent}&muted=true`}
                allowFullScreen
                className="w-full h-full rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-sm text-muted-foreground">Live on Twitch when streaming.</div>
          </div>

          <div className="rounded-xl border border-border/60">
            <div className="aspect-video">
              <iframe
                title="YouTube Showcase"
                src="https://www.youtube.com/embed/lR2NvdO_Fak"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-sm text-muted-foreground">Featured content — latest match or documentary.</div>
          </div>

          <div className="rounded-xl border border-border/60 lg:col-span-2">
            <div className="p-6">
              <h2 className="font-display text-2xl mb-3">Featured on X (Twitter)</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><a className="story-link" href="https://x.com/i/status/1944850925941658070" target="_blank" rel="noopener noreferrer">Highlight 1</a></li>
                <li><a className="story-link" href="https://x.com/i/status/1888996358507614702" target="_blank" rel="noopener noreferrer">Highlight 2</a></li>
                <li><a className="story-link" href="https://x.com/AuroraGamingBE/status/1844392457317831034/video/1" target="_blank" rel="noopener noreferrer">Highlight 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
