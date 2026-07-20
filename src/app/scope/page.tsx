import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import states from "@/data/states.json";

const CATEGORIES = [
  {
    name: "Edibles",
    note: "Full food-safety scope. Treated as 'food' for adulteration purposes even in states where FDA does not regulate cannabis itself — the single most consequential crosswalk point in the entire framework.",
    status: "Mandatory",
  },
  {
    name: "Tinctures",
    note: "Full food-safety scope, with added process-control emphasis on cannabinoid uniformity and carrier-solvent handling. CA DCC §17302-series citations apply specifically here.",
    status: "Mandatory",
  },
  {
    name: "Beverages",
    note: "Full food-safety scope, with the framework's most state-specific requirement density — beverage-specific labeling, fill-volume, and shelf-stability rules vary the most by jurisdiction.",
    status: "Mandatory",
  },
  {
    name: "Topicals",
    note: "Reduced scope relative to ingestible categories — PCQI-equivalent qualification and several food-contact requirements shift from mandatory to voluntary/best-practice, reflecting the lower ingestion-hazard profile.",
    status: "Mixed",
  },
];

const OUT_OF_SCOPE = [
  {
    title: "Cultivation",
    note: "Scoped as a future supply-chain sector extension. Not covered by the current manufacturing-facility framework.",
  },
  {
    title: "Extraction & processing (upstream)",
    note: "Scoped as a future supply-chain sector extension, distinct from the infused-manufacturing scope this program currently certifies.",
  },
  {
    title: "Distribution & transportation",
    note: "Scoped as a future supply-chain sector extension.",
  },
  {
    title: "Retail / dispensary",
    note: "Scoped as a future supply-chain sector extension.",
  },
  {
    title: "Testing laboratories",
    note: "Not a certification sector under this program. Laboratory verification is handled as approved-supplier due diligence — Section 17 (LAB.01–LAB.10) inside the Approved Supplier & Ingredient Program — not a standalone audit track.",
  },
];

export default function ScopePage() {
  return (
    <>
      <PageHeader
        n="2"
        eyebrow="Program Scope"
        title="What this program certifies — and what it doesn't"
        dek="The current framework covers cannabis-infused food manufacturing facilities across four product categories in five states. Everything upstream and downstream of manufacturing is deliberately out of scope for now."
      />

      <Section kicker="In scope" title="Product categories">
        <div className="space-y-0">
          {CATEGORIES.map((c) => (
            <div key={c.name} className="py-5 rule-bottom last:border-none flex gap-6">
              <div className="w-32 shrink-0">
                <div className="font-display text-[1.15rem]">{c.name}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-amber-600)] mt-1">
                  {c.status}
                </div>
              </div>
              <p className="text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)]">
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="In scope" title="Jurisdictions" wide>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-px bg-[var(--color-rule)]">
          {(
            states as {
              code: string;
              name: string;
              regulatoryBody: string;
              requirementCount: number;
              distinct: string;
            }[]
          ).map((s) => (
            <div key={s.code} className="bg-[var(--color-surface)] p-5">
              <div className="font-mono text-[11px] text-[var(--color-amber-600)]">
                {s.code}
              </div>
              <div className="font-display text-[1.1rem] mt-1">{s.name}</div>
              <p className="mt-2.5 text-[12px] leading-relaxed text-[var(--color-ink-muted)]">
                {s.distinct}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Not yet in scope" title="On the horizon: supply-chain extension">
        <p className="text-[0.98rem] leading-relaxed mb-6">
          A section-level applicability matrix (Full / Modified / Not
          Applicable) has already been mapped for each of the sectors
          below, and new section titles have been identified — but none of
          these tracks are built or open for certification yet.
        </p>
        <div className="space-y-0">
          {OUT_OF_SCOPE.map((o) => (
            <div key={o.title} className="py-4 rule-bottom last:border-none">
              <div className="font-display text-[1.02rem]">{o.title}</div>
              <p className="mt-1 text-[0.9rem] leading-relaxed text-[var(--color-ink-muted)]">
                {o.note}
              </p>
            </div>
          ))}
        </div>
        <Callout label="Why this boundary matters" tone="forest">
          Keeping the certification boundary at the manufacturing facility —
          rather than expanding it prematurely into cultivation, extraction,
          distribution, or retail — lets each new sector get its own
          properly scoped requirement set instead of an ill-fitting subset
          of the manufacturing framework.
        </Callout>
      </Section>
    </>
  );
}
