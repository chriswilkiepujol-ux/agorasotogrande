/* eslint-disable @next/next/no-img-element */
/* Brand mark: the official Ágora "Á" inside a slowly turning ring. */
export function Mark({ size = 44 }: { size?: number }) {
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 mark-spin" fill="none">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" opacity=".7" />
      </svg>
      <img src="/brand/agora-a-white.png" alt="" width={245} height={256} style={{ height: size * 0.56, width: 'auto' }} className="relative" />
    </span>
  );
}
