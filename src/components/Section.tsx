export default function Section({
  title,
  kicker,
  children,
  wide = false,
}: {
  title?: string;
  kicker?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-12 rule-bottom last:border-none">
      {(title || kicker) && (
        <div className="mb-7">
          {kicker && (
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-amber-600)] mb-2">
              {kicker}
            </div>
          )}
          {title && (
            <h2 className="font-display text-[1.75rem] text-[var(--color-forest-950)]">
              {title}
            </h2>
          )}
        </div>
      )}
      <div className={wide ? "" : "max-w-[72ch]"}>{children}</div>
    </section>
  );
}
