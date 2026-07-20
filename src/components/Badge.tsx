export default function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "forest" | "amber" | "critical";
}) {
  const tones: Record<string, string> = {
    neutral:
      "text-[var(--color-ink-muted)] border-[var(--color-rule-strong)]",
    forest: "text-[var(--color-forest-700)] border-[var(--color-forest-500)]",
    amber: "text-[var(--color-amber-700)] border-[var(--color-amber-500)]",
    critical: "text-[var(--color-critical)] border-[var(--color-critical)]",
  };
  return (
    <span
      className={`inline-flex items-center font-mono text-[10.5px] tracking-[0.05em] uppercase border px-1.5 py-0.5 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
