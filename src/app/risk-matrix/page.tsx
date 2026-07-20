import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import Badge from "@/components/Badge";

const TIERS = [
  {
    tier: "Tier 1 — Elevated",
    profile:
      "Multi-category production, on-site extraction, prior Critical/Major findings, or first-time certification.",
    duration: "2–3 days on-site",
    surveillance: "Semi-annual",
    tone: "critical" as const,
  },
  {
    tier: "Tier 2 — Standard",
    profile:
      "Single-category production, no on-site extraction, clean prior audit history.",
    duration: "1–2 days on-site",
    surveillance: "Annual",
    tone: "amber" as const,
  },
  {
    tier: "Tier 3 — Reduced (earned)",
    profile:
      "Two or more consecutive clean cycles, no Critical findings ever, strong CAPA closure history.",
    duration: "1 day on-site",
    surveillance: "Annual + doc-only interim year eligible",
    tone: "forest" as const,
  },
];

const SEVERITY = [
  {
    tier: "Critical",
    def: "Imminent consumer-safety or regulatory-license risk: unlicensed handler, uncertified extraction equipment, a failed test released to market, expired/suspended licensure.",
    closure: "24–48 hrs root-cause CAPA",
    impact: "Suspended immediately pending verified closure",
    tone: "critical" as const,
  },
  {
    tier: "Major",
    def: "Systemic program gap with latent risk: no EMP trending, incomplete hazard analysis, missing supplier verification, no mock recall program.",
    closure: "30 days (5 C's format)",
    impact: "Active pending closure; held if not closed",
    tone: "amber" as const,
  },
  {
    tier: "Minor",
    def: "Isolated documentation or execution gap with low latent risk: a single missed signature, one outdated SOP version.",
    closure: "By next scheduled audit",
    impact: "No immediate impact; repeats escalate to Major",
    tone: "neutral" as const,
  },
];

export default function RiskMatrixPage() {
  return (
    <>
      <PageHeader
        n="6"
        eyebrow="Risk Matrix"
        title="Frequency and duration scale with demonstrated risk"
        dek="A base three-year certification cycle carries mandatory annual surveillance — never a bare three-year gap between visits. Where a facility's audit lands on the matrix below is driven by its risk tier, adjusted upward by any state floor that requires more."
      />

      <Section kicker="Risk tier model" title="On-site duration & surveillance frequency" wide>
        <div className="space-y-0">
          {TIERS.map((t) => (
            <div
              key={t.tier}
              className="py-6 rule-bottom last:border-none grid md:grid-cols-[220px_1fr_auto] gap-4 md:gap-8 items-start"
            >
              <div>
                <Badge tone={t.tone}>{t.tier}</Badge>
              </div>
              <p className="text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)]">
                {t.profile}
              </p>
              <dl className="font-mono text-[12px] space-y-1 text-right md:text-left shrink-0">
                <div>
                  <dt className="inline text-[var(--color-ink-faint)]">Duration </dt>
                  <dd className="inline text-[var(--color-ink)]">{t.duration}</dd>
                </div>
                <div>
                  <dt className="inline text-[var(--color-ink-faint)]">Surveillance </dt>
                  <dd className="inline text-[var(--color-ink)]">{t.surveillance}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        <Callout label="Colorado sets a state-specific floor" tone="critical">
          Colorado&rsquo;s mandatory annual third-party cGMP audit
          requirement for hemp safe-harbor registrants sets an effective
          floor of annual on-site activity for Colorado-licensed clients —
          regardless of what the base Canna-Safe cycle or risk tier would
          otherwise allow. A documentation-only interim-year option never
          substitutes for that mandatory annual on-site requirement.
        </Callout>
      </Section>

      <Section kicker="How the model was built" title="Inverted from a conventional-food pattern">
        <p className="text-[0.98rem] leading-relaxed">
          On-site audit duration scales with facility complexity using a
          variable-weighted model directly adapted from the MFI Audit
          Frequency Reduction Justification methodology — but inverted in
          direction. In the conventional-food version, established
          suppliers earn reduced scrutiny over time by default. Here,
          cannabis clients start at a higher-scrutiny baseline, with
          reduction potential earned through a demonstrated track record
          rather than granted from day one.
        </p>
      </Section>

      <Section kicker="Non-conformance severity" title="One model, applied consistently" wide>
        <div className="space-y-0">
          {SEVERITY.map((s) => (
            <div
              key={s.tier}
              className="py-6 rule-bottom last:border-none grid md:grid-cols-[140px_1fr_180px_1fr] gap-4 md:gap-8 items-start"
            >
              <div>
                <Badge tone={s.tone}>{s.tier}</Badge>
              </div>
              <p className="text-[0.9rem] leading-relaxed text-[var(--color-ink-muted)]">
                {s.def}
              </p>
              <div className="font-mono text-[11.5px] text-[var(--color-ink)]">
                {s.closure}
              </div>
              <div className="text-[0.85rem] text-[var(--color-ink-muted)] leading-relaxed">
                {s.impact}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
