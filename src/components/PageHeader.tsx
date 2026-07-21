export default function PageHeader({
  n,
  eyebrow,
  title,
  dek,
}: {
  n: string;
  eyebrow: string;
  title: string;
  dek?: string;
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pt-14 pb-10 section-rule">
      <div className="flex items-baseline gap-3 font-mono text-[12px] tracking-[0.14em] uppercase text-[var(--color-amber-600)]">
        <span>§{n}</span>
        <span className="text-[var(--color-ink-faint)]">/</span>
        <span>{eyebrow}</span>
      </div>
      <h1 className="font-display text-[2.5rem] md:text-[3.25rem] leading-[1.05] mt-3 max-w-[16ch]">
        {title}
      </h1>
      {dek && (
        <p className="mt-5 max-w-[62ch] text-[1.05rem] leading-relaxed text-[var(--color-ink-muted)]">
          {dek}
        </p>
      )}
    </div>
  );
}
