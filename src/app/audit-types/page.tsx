import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";

const AUDIT_TYPES = [
  {
    name: "Stage 1 — Desk / Document Review",
    body: "Remote, off-site review of the food safety plan, HACCP/HARPC documentation, licensure, prior audit history, and org chart. Never skipped in favor of going straight to an on-site visit.",
  },
  {
    name: "Stage 2 — Certification Audit",
    body: "Full on-site audit against every applicable requirement in the framework, following the 60/40 observation discipline and R-I-O evidence standard. 1–3 days depending on risk tier.",
  },
  {
    name: "Surveillance — Announced",
    body: "Standard scheduling and notice, scoped to a defined subset of sections — typically EMP, supplier/input testing, cannabinoid uniformity, and any section with an open Major finding.",
  },
  {
    name: "Surveillance — Unannounced",
    body: "Reserved for Tier 1 (elevated-risk) facilities and any facility with an open Critical-finding history, modeled on SQF and BRCGS unannounced-audit provisions.",
  },
  {
    name: "Recertification Audit",
    body: "Full-scope audit repeating Stages 2–5, scheduled 60–90 days before the certificate's expiration to avoid any lapse in certification status.",
  },
  {
    name: "Scope-Extension Audit",
    body: "Required when a facility adds a new state, product category, or extraction method — addresses only the newly triggered requirements rather than repeating the full audit from scratch.",
  },
];

const CERT_TYPES = [
  {
    name: "Full certification",
    body: "Issued when all applicable requirements are met and any findings have been closed and independently verified — covers the exact product categories, processes, and site(s) named on the certificate.",
  },
  {
    name: "Conditional / limited-scope certification",
    body: "Issued where a facility meets requirements for a subset of its intended scope — for example, edibles but not yet beverages — with the uncovered category excluded from marketing claims until it's separately audited.",
  },
  {
    name: "Multi-site (sampled) certification",
    body: "Available to multi-site operators under common ownership only after each individual site has completed at least one full independent Stage 2 audit.",
  },
];

const TRAININGS = [
  {
    name: "Canna-Safe Auditor Training Course",
    body: "Proposed 3-day format covering the full requirements framework, the R-I-O standard, the 5 C's CAPA methodology, and the 60/40 discipline — concluding in a written competency exam.",
  },
  {
    name: "Cannabis-industry orientation",
    body: "State licensing frameworks, track-and-trace systems (METRC/BioTrack), and cannabis-specific hazard categories — required foundational training for any auditor or implementer candidate.",
  },
  {
    name: "Qualified Implementer track",
    body: "Same foundational eligibility as an auditor candidate; the training course is strongly recommended, though the witnessed-audit and shadow-audit requirements don't apply to an implementer-only path.",
  },
  {
    name: "Continuing education",
    body: "Minimum 20 hours per year for active auditors — regulatory updates across all five target states, emerging product categories, and audit-technique refreshers.",
  },
];

export default function AuditTypesPage() {
  return (
    <>
      <PageHeader
        n="12"
        eyebrow="Types of Audits, Certifications & Training"
        title="Six audit types, three certification outcomes, four training paths"
        dek="One shared calendar, but not every visit looks the same — and not every facility needs the same preparation to get ready for one."
      />

      <Section kicker="Audits" title="Six distinct audit types" wide>
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-rule)]">
          {AUDIT_TYPES.map((a) => (
            <div key={a.name} className="bg-[var(--color-surface)] p-6">
              <div className="font-display text-[1.05rem] leading-snug">
                {a.name}
              </div>
              <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[var(--color-ink-muted)]">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Certifications" title="What a facility can actually earn">
        <div className="space-y-0">
          {CERT_TYPES.map((c) => (
            <div key={c.name} className="py-5 rule-bottom last:border-none">
              <div className="font-display text-[1.05rem]">{c.name}</div>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--color-ink-muted)]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Training" title="Four training paths">
        <div className="space-y-0">
          {TRAININGS.map((t) => (
            <div key={t.name} className="py-5 rule-bottom last:border-none">
              <div className="font-display text-[1.05rem]">{t.name}</div>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--color-ink-muted)]">
                {t.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[0.9rem] text-[var(--color-ink-muted)]">
          See{" "}
          <Link href="/auditors" className="underline decoration-[var(--color-amber-500)] underline-offset-4">
            Auditor / Reviewer Qualifications
          </Link>{" "}
          for the full eligibility-to-certification ladder.
        </p>
      </Section>

      <Section kicker="Prep help" title="Getting ready before Stage 1 begins">
        <p className="text-[0.98rem] leading-relaxed">
          Skipping straight to an on-site Stage 2 audit without a Stage 1
          desk review is the single most common cause of failed first-time
          certifications across every GFSI scheme. A facility preparing for
          its first audit gets the most value from working through the{" "}
          <Link href="/requirements" className="underline decoration-[var(--color-amber-500)] underline-offset-4">
            full requirements register
          </Link>{" "}
          against its own product category and target state before the
          desk review even begins — closing gaps on paper is dramatically
          cheaper than closing them after an on-site finding.
        </p>
        <Callout label="Where to start" tone="forest">
          Filter the register by your state and product category, read
          each requirement&rsquo;s auditor note for what evidence will
          actually be checked, and cross-reference the{" "}
          <Link href="/risk-matrix" className="underline decoration-[var(--color-amber-500)] underline-offset-4">
            Risk Matrix
          </Link>{" "}
          to understand which tier your facility profile falls into before
          scheduling.
        </Callout>
      </Section>
    </>
  );
}
