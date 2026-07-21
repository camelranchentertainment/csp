export default function Seal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Outer registry ring — the "audited/certified" instrument mark */}
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="18.5" stroke="currentColor" strokeWidth="0.75" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const x1 = 24 + 18.5 * Math.cos(rad);
        const y1 = 24 + 18.5 * Math.sin(rad);
        const x2 = 24 + 20.5 * Math.cos(rad);
        const y2 = 24 + 20.5 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.75"
          />
        );
      })}

      {/* Shield — certification / audit protection */}
      <path
        d="M24 11.5 L32.5 14.9 V23 C32.5 29.8 28.8 34.1 24 36.6 C19.2 34.1 15.5 29.8 15.5 23 V14.9 Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />

      {/* Hexagon — cannabinoid / molecular ring, standing in for "cannabis"
          without a leaf, plus two short bond stubs for a chemistry-diagram cue */}
      <path
        d="M24 16.4 L27.12 18.2 L27.12 21.8 L24 23.6 L20.88 21.8 L20.88 18.2 Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path d="M24 16.4V14.1" stroke="currentColor" strokeWidth="0.75" />
      <path d="M27.12 18.2 28.9 17.1" stroke="currentColor" strokeWidth="0.75" />

      {/* Checkmark — the audit sign-off, sitting in the lower shield field */}
      <path
        d="M19.3 28.1 L22.7 31.5 L29 25.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
