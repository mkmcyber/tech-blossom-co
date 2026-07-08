import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: "var(--gradient-background)" }}
    >
      {/* Large glowing orbs */}
      <div
        className="absolute -left-[20%] -top-[10%] h-[60vw] max-h-[900px] min-h-[500px] w-[60vw] min-w-[500px] max-w-[900px] rounded-full opacity-40 blur-[120px] animate-orb-1"
        style={{ background: "radial-gradient(circle, var(--glow-1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-[15%] top-[25%] h-[50vw] max-h-[800px] min-h-[400px] w-[50vw] min-w-[400px] max-w-[800px] rounded-full opacity-30 blur-[120px] animate-orb-2"
        style={{ background: "radial-gradient(circle, var(--glow-2) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[5%] left-[20%] h-[45vw] max-h-[700px] min-h-[350px] w-[45vw] min-w-[350px] max-w-[700px] rounded-full opacity-25 blur-[120px] animate-orb-3"
        style={{ background: "radial-gradient(circle, var(--glow-3) 0%, transparent 70%)" }}
      />

      {/* Subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Fine radial scanlines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-radial-gradient(circle at 50% 0%, var(--scanline) 0px, transparent 2px, transparent 24px)",
        }}
      />

      {/* Vignette to keep edges dark and readable */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, var(--background) 85%)",
        }}
      />
    </div>
  );
}
