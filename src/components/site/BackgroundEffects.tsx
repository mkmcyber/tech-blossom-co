export function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: "var(--gradient-background)" }}
    >
      {/* Large glowing orbs */}
      <div
        className="absolute -left-[20%] -top-[10%] h-[60vw] max-h-[900px] min-h-[500px] w-[60vw] min-w-[500px] max-w-[900px] rounded-full opacity-70 blur-[100px] animate-orb-1"
        style={{ background: "radial-gradient(circle, var(--glow-1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-[15%] top-[25%] h-[50vw] max-h-[800px] min-h-[400px] w-[50vw] min-w-[400px] max-w-[800px] rounded-full opacity-60 blur-[100px] animate-orb-2"
        style={{ background: "radial-gradient(circle, var(--glow-2) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[5%] left-[20%] h-[45vw] max-h-[700px] min-h-[350px] w-[45vw] min-w-[350px] max-w-[700px] rounded-full opacity-55 blur-[100px] animate-orb-3"
        style={{ background: "radial-gradient(circle, var(--glow-3) 0%, transparent 70%)" }}
      />

      {/* Subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
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
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-radial-gradient(circle at 50% 0%, var(--scanline) 0px, transparent 2px, transparent 24px)",
        }}
      />

      {/* Soft vignette — keep it light so glows stay visible at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.55) 100%)",
        }}
      />
    </div>
  );
}
