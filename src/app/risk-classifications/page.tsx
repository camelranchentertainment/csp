import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import { REQUIREMENT_SECTIONS } from "@/lib/requirements";

const PRODUCT_RISK = [
  {
    label: "Ingestible — Edibles, Tinctures, Beverages",
    tier: "Highest",
    body: "Treated as 'food' for adulteration purposes regardless of whether FDA directly regulates the cannabis component. PCQI-equivalent oversight, full HARPC hazard analysis, and cannabinoid-uniformity process controls are all mandatory.",
  },
  {
    label: "Topicals",
    tier: "Reduced",
    body: "Lower ingestion-hazard profile shifts several requirements — PCQI-equivalent qualification among them — from mandatory to voluntary/best-practice, while core sanitation, EMP, and labeling requirements still apply universally.",
  },
];

const INGREDIENT_RISK = [
  {
    label: "Non-cannabis food ingredients",
    body: "Verified through the same commercially-manufactured-ingredient controls used in conventional food manufacturing: current COAs, specification sheets, and an approved supplier program on file for every ingredient.",
  },
  {
    label: "Cannabis extract / distillate inputs",
    body: "Carries the framework's highest input-verification burden: cannabinoid-potency confirmation, contaminant testing, and traceability back to a licensed cultivator or processor of record.",
  },
  {
    label: "Packaging & child-resistant components",
    body: "Verified against state-specific child-resistant packaging standards, with per-serving dosage caps and child-appealing-design restrictions layered on top of standard food-packaging controls.",
  },
];

const SUPPLIER_RISK = [
  {
    label: "Approved Supplier & Ingredient Program",
    section: 9,
    body: "Every input — cannabis and non-cannabis alike — moves through a documented approved-supplier program before it reaches production: current COAs, risk-based supplier audits, and rejection/hold procedures for anything that fails verification.",
  },
  {
    label: "Testing Laboratory Verification",
    section: 17,
    body: "Handled as approved-supplier due diligence rather than a standalone certification track. A facility verifies its lab's ISO/IEC 17025 accreditation, confirms the accredited scope actually covers the analyte and matrix in use, and reviews method-validation studies for any non-standard method.",
  },
];

export default function RiskClassificationsPage() {
  const supplierSection = REQUIREMENT_SECTIONS.find((s) => s.section === 9);
  const labSection = REQUIREMENT_SECTIONS.find((s) => s.section === 17);

  return (
    <>
      <PageHeader
        n="7"
        eyebrow="Risk Classifications"
        title="Three lenses on the same question: where is the hazard?"
        dek="Risk is classified along three independent axes — product type, ingredient/input type, and supplier process — and a requirement's mandatory/voluntary status shifts depending on where a facility's operation falls on each."
      />

      <Section kicker="By product type" title="Ingestion risk sets the baseline">
        <div className="space-y-0">
          {PRODUCT_RISK.map((p) => (
            <div key={p.label} className="py-6 rule-bottom last:border-none grid md:grid-cols-[280px_1fr] gap-4 md:gap-10">
              <div>
                <div className="font-display text-[1.1rem] leading-snug">{p.label}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-amber-600)] mt-1">
                  {p.tier} risk
                </div>
              </div>
              <p className="text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="By ingredient type" title="Not every input carries the same burden">
        <div className="space-y-0">
          {INGREDIENT_RISK.map((p) => (
            <div key={p.label} className="py-5 rule-bottom last:border-none">
              <div className="font-display text-[1.02rem]">{p.label}</div>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--color-ink-muted)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="By supplier process" title="Verification scales to the input's own risk" wide>
        <div className="grid md:grid-cols-2 gap-px bg-[var(--color-rule)]">
          {SUPPLIER_RISK.map((p) => {
            const sec =
              p.section === 9 ? supplierSection : labSection;
            return (
              <div key={p.label} className="bg-[var(--color-surface)] p-6">
                <div className="font-mono text-[11px] text-[var(--color-amber-600)]">
                  §{p.section} — {sec?.requirements.length ?? 0} requirements
                </div>
                <div className="font-display text-[1.1rem] mt-2">{p.label}</div>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-[var(--color-ink-muted)]">
                  {p.body}
                </p>
                <Link
                  href={`/requirements?section=${p.section}`}
                  className="mt-4 inline-block text-[12px] font-mono uppercase tracking-wide text-[var(--color-forest-700)] underline decoration-[var(--color-amber-500)] underline-offset-4"
                >
                  View §{p.section} in the register →
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <Callout label="Auditor note" tone="amber">
          Classification drives audit method, not just documentation
          burden — a lab-verification item might be satisfied by a document
          review (DOC), while a cannabinoid-uniformity control point
          typically requires direct observation (OBS) or physical testing
          (TEST). See the Program Requirements register for the exact
          method code on every individual requirement.
        </Callout>
      </Section>
    </>
  );
}
