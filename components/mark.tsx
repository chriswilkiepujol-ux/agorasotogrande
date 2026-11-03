/* Animated brand mark: a placeholder "Á" that slowly rotates inside a ring.
   Swap for Adolfo's final mark (SVG/Lottie) when he sends it. */
export function Mark({ size = 44 }: { size?: number }) {
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 mark-spin" fill="none">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" opacity=".7" />
      </svg>
      <span className="font-display text-[1.15em] leading-none">Á</span>
    </span>
  );
}
