export default function Callout({
  label,
  children,
  tone = "amber",
}: {
  label?: string;
  children: React.ReactNode;
  tone?: "amber" | "forest" | "critical";
}) {
  const cls =
    tone === "forest"
      ? "callout callout-notice"
      : tone === "critical"
      ? "callout callout-critical"
      : "callout";
  return (
    <div className={cls}>
      {label && (
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-ink-muted)] mb-1.5">
          {label}
        </div>
      )}
      <div className="text-[0.97rem] leading-relaxed text-[var(--color-ink)]">
        {children}
      </div>
    </div>
  );
}
