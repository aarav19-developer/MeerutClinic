/**
 * SectionDivider.tsx — Elegant wave + dot divider between sections.
 * Replaces the heartbeat line. Uses currentColor so it adapts to
 * the surrounding background by accepting a `color` prop.
 */

interface Props {
  /** Tailwind text-color class that drives the SVG fill — e.g. "text-primary-light" */
  flip?: boolean  // mirror the wave for variety
}

export default function SectionDivider({ flip = false }: Props) {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden leading-none relative"
      style={{ height: 56 }}
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        {/* Soft double wave */}
        <path
          d="M0 28 C180 8 360 48 540 28 C720 8 900 48 1080 28 C1260 8 1380 38 1440 28 L1440 56 L0 56 Z"
          fill="none"
          stroke="#d0e8e8"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path
          d="M0 36 C200 16 400 52 600 34 C800 16 1000 50 1200 32 C1320 20 1400 40 1440 34"
          fill="none"
          stroke="#e0f5f5"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* Decorative dots along the wave */}
        {[120, 360, 600, 840, 1080, 1320].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={i % 2 === 0 ? 22 : 34}
            r="3"
            fill="#2d8c8c"
            opacity="0.18"
          />
        ))}
        {/* Larger accent dots */}
        {[240, 720, 1200].map((x) => (
          <circle key={x} cx={x} cy={28} r="5" fill="#4a9eca" opacity="0.12" />
        ))}
      </svg>
    </div>
  )
}
