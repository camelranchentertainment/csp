export default function Seal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="18.5" stroke="currentColor" strokeWidth="0.75" />
      {/* Radial ticks, evoking a calibrated instrument / registry seal */}
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
      {/* Two-leaf mark at center — cannabis + agriculture, rendered abstractly */}
      <path
        d="M24 15c2.6 3 4 6.4 4 9.3 0 3.4-1.8 6.1-4 7.7-2.2-1.6-4-4.3-4-7.7 0-2.9 1.4-6.3 4-9.3Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M24 17.5v14.2" stroke="currentColor" strokeWidth="0.75" />
      <path
        d="M24 21c-3.4-.4-6-2-7.6-4.1M24 21c3.4-.4 6-2 7.6-4.1M24 26c-3.6.2-6.6 1.6-8.6 3.6M24 26c3.6.2 6.6 1.6 8.6 3.6"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  );
}
