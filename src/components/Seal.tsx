export default function Seal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Outer registry ring — the "audited/certified" instrument mark */}
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const x1 = 24 + 18 * Math.cos(rad);
        const y1 = 24 + 18 * Math.sin(rad);
        const x2 = 24 + 20.4 * Math.cos(rad);
        const y2 = 24 + 20.4 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}

      {/* The mark itself: a single continuous stroke — a "C" that
          resolves into a checkmark. One gesture, ownable, no stock
          iconography (no shield, no leaf, no generic tick mark). */}
      <path
        d="M30.89 18.21
           A 9 9 0 1 0 30.89 29.79
           L 25.6 34.4
           L 33.4 24.6"
        stroke="currentColor"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
