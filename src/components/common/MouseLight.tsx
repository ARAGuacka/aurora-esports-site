import { useEffect, useRef } from "react";

export default function MouseLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      el.style.background = `radial-gradient(600px 300px at ${x}px ${y}px, hsl(var(--brand) / 0.15), transparent 60%)`;
    };

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!media.matches) window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-0" aria-hidden />;
}
