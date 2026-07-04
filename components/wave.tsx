/*
 * Full-width curved seam between two tonal bands.
 * `from` is the color the wave sits on (the outgoing band);
 * `to` is the color that flows in beneath it (the incoming band).
 * Both accept theme CSS variables, e.g. "var(--color-paper)".
 */

const PATHS = [
  "M0,52 C240,88 480,12 720,44 C960,76 1200,20 1440,56 L1440,88 L0,88 Z",
  "M0,44 C280,10 520,80 760,48 C1000,16 1240,72 1440,40 L1440,88 L0,88 Z",
  "M0,56 C220,20 500,84 740,50 C980,16 1220,76 1440,44 L1440,88 L0,88 Z",
  "M0,48 C260,84 540,14 780,46 C1020,78 1260,24 1440,52 L1440,88 L0,88 Z",
];

export default function Wave({
  from,
  to,
  variant = 0,
}: {
  from: string;
  to: string;
  variant?: 0 | 1 | 2 | 3;
}) {
  return (
    <svg
      viewBox="0 0 1440 88"
      preserveAspectRatio="none"
      aria-hidden
      className="block h-[52px] w-full sm:h-[88px]"
      style={{ background: from }}
    >
      <path fill={to} d={PATHS[variant]} />
    </svg>
  );
}
