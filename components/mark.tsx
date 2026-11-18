/* eslint-disable @next/next/no-img-element */
/* Brand mark: the official Ágora "Á" inside a slowly turning ring.
   The glyph's weight sits right and low (thick right leg, accent top right), so it is nudged
   up-left to sit in the optical centre of the ring rather than its box centre. */
export function Mark({ size = 44 }: { size?: number }) {
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 mark-spin" fill="none">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" opacity=".7" />
      </svg>
      <img src="/brand/agora-a-white.png" alt="" width={245} height={256} style={{ height: size * 0.56, width: 'auto', transform: 'translate(-6%, -5%)' }} className="relative" />
    </span>
  );
}
