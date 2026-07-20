import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";

const LADDER = [
  {
    stage: "Eligibility",
    items: [
      "Four-year degree in food science, microbiology, chemistry, or related field — or 4+ years documented equivalent experience.",
      "Minimum two years food safety/quality experience in a manufacturing or processing environment (not retail or food-service management alone).",
      "Current HACCP certification from an accredited training provider.",
      "No active or recent (trailing 24 months) employment or paid consulting relationship with any facility the individual would audit.",
    ],
  },
  {
    stage: "Foundational training",
    items: [
      "PCQI training, or equivalent HACCP/preventive-controls coursework.",
      "An ISO-based Lead Auditor course (ISO 9001 or ISO 22000), 5-day format — the same pathway required for SQF Auditor candidates.",
      "Cannabis-industry orientation: state licensing frameworks, track-and-trace systems (METRC/BioTrack), cannabis-specific hazard categories.",
    ],
  },
  {
    stage: "Canna-Safe Auditor Training Course",
    items: [
      "Candidate-specific course (proposed 3-day format, mirroring the SQF Auditor Training Course) covering the full requirements framework.",
      "Covers the R-I-O objective-evidence standard, the 5 C's CAPA methodology, and the 60/40 observation-time discipline.",
      "Concludes with a written competency exam — a passing score is required before advancing to supervised practice.",
    ],
  },
  {
    stage: "Supervised practice",
    items: [
      "Minimum three shadow audits, observing a qualified auditor conduct a full Stage 2 audit, performing no audit function themselves.",
      "Minimum two co-audits, actively performing audit functions under direct supervision, with the supervising auditor retaining sign-off authority.",
      "One witnessed audit — the candidate leads, a senior auditor observes and formally evaluates against a defined competency checklist.",
    ],
  },
  {
    stage: "Certification & maintenance",
    items: [
      "Designated a Qualified Canna-Safe Auditor upon successful witnessed audit, valid for a 3-year term.",
      "Minimum 20 hours continuing education per year — regulatory updates across all five target states, emerging product categories, technique refreshers.",
      "Minimum audit-activity requirement (proposed: 4 audits per rolling 12 months) to maintain active-auditor status.",
      "Recertification every 3 years, requiring a renewed competency exam and a documented calibration exercise.",
    ],
  },
];

export default function AuditorsPage() {
  return (
    <>
      <PageHeader
        n="5"
        eyebrow="Auditor / Reviewer Qualifications & Training"
        title="Eligibility → training → supervised practice → certification → maintenance"
        dek="No individual conducts an unsupervised Canna-Safe certification audit without completing every rung of this ladder — a standard that applies regardless of company size."
      />

      <Section kicker="The qualification ladder" title="Five stages" wide>
        <div className="space-y-0">
          {LADDER.map((stage, i) => (
            <div
              key={stage.stage}
              className="py-7 rule-bottom last:border-none grid md:grid-cols-[220px_1fr] gap-4 md:gap-10"
            >
              <div className="flex items-baseline gap-3 md:block">
                <span className="font-mono text-[13px] text-[var(--color-amber-600)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.2rem] leading-snug">
                  {stage.stage}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {stage.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-amber-500)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="A separate, walled-off track" title="Qualified Implementers / Consultants">
        <p className="text-[0.98rem] leading-relaxed">
          A Qualified Implementer helps a facility build or improve its
          food safety program — writing SOPs, developing the hazard
          analysis, standing up the EMP program. It&rsquo;s a legitimate,
          valuable role, sharing the same foundational eligibility as an
          auditor candidate, but strictly separated from the audit
          function.
        </p>
        <Callout label="The firewall" tone="critical">
          An individual who has served as a facility&rsquo;s
          implementer/consultant may never subsequently serve as the
          auditor of record for that facility&rsquo;s certification audit —
          for the life of the relationship plus a minimum 24-month
          cooling-off period. Marketing and client-facing materials must
          never suggest implementation services guarantee, expedite, or
          influence certification outcomes.
        </Callout>
      </Section>

      <Section kicker="The reviewer" title="Certification decisions are never made by the auditor of record">
        <p className="text-[0.98rem] leading-relaxed">
          Modeled on the impartiality principle in ISO/IEC 17065 (§7.6), a
          second qualified individual — the technical reviewer — evaluates
          the complete audit file and CAPA closure evidence before a
          certificate is issued. At small Phase 1 scale, this is a
          documented technical review, not a large committee.
        </p>
        <p className="mt-4 text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)]">
          The technical reviewer confirms findings are correctly
          classified, that CAPA evidence resolves the root cause rather
          than only the symptom, and that no scope, product category, or
          state-specific requirement was omitted — with authority to
          return the file for more evidence, adjust a finding&rsquo;s
          severity with documented rationale, or escalate to a
          certification hold.
        </p>
      </Section>
    </>
  );
}
