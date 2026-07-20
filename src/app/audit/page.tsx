import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";

const METHODOLOGY = [
  {
    name: "60/40 observation-time discipline",
    body: "A substantial majority of on-site audit time is spent on floor observations and interviews rather than in a conference room reviewing documents — a direct carryover from SQF Lead Auditor training's objective-evidence-gathering standard.",
  },
  {
    name: "R-I-O objective-evidence standard",
    body: "Every finding is grounded in Records, Interviews, or Observations — never in an auditor's assumption or a facility's self-report alone. This is the same evidentiary discipline used across GFSI-benchmarked audit programs.",
  },
  {
    name: "5 C's CAPA methodology",
    body: "Corrective action responses follow a defined format: root-cause analysis, immediate correction, systemic corrective action, and verification-of-effectiveness evidence — not just a promise to fix the symptom.",
  },
];

const LIFECYCLE = [
  {
    title: "Suspension",
    body: "Triggered immediately by any Critical finding, any lapse in the facility's underlying state cannabis license, or confirmed falsified audit evidence. A suspended facility may not use the Canna-Safe mark during the suspension period, but retains its certification history.",
  },
  {
    title: "Withdrawal",
    body: "Applied where a Critical finding isn't closed within its timeline, a facility declines a required surveillance visit, or conduct constitutes a material integrity violation. Withdrawal requires re-entering the pathway from Stage 1 — not resuming from a surveillance point.",
  },
  {
    title: "Reinstatement",
    body: "A suspended facility is reinstated on independently verified closure — for any Critical finding, that requires an on-site re-verification visit, not documentation review alone. A withdrawn facility must complete a full new Stage 1–2 cycle, with no guarantee of reinstatement.",
  },
  {
    title: "Appeals",
    body: "A facility may appeal a finding classification, certification decision, or suspension/withdrawal action, reviewed by someone involved in neither the original audit nor the original decision. Written appeal within 15 business days; written decision within 30 days. An appeal does not pause a Critical-finding suspension while under review.",
  },
];

export default function AuditPage() {
  return (
    <>
      <PageHeader
        n="9"
        eyebrow="Audit"
        title="How an audit is actually conducted"
        dek="Certification is a maintained status, not a point-in-time event. Every audit — initial, surveillance, or recertification — follows the same evidentiary discipline and the same non-conformance lifecycle."
      />

      <Section kicker="Audit methodology" title="Three disciplines carried over from SQF Lead Auditor training">
        <div className="space-y-6">
          {METHODOLOGY.map((m) => (
            <div key={m.name} className="py-5 rule-bottom last:border-none">
              <h3 className="font-display text-[1.1rem] mb-2">{m.name}</h3>
              <p className="text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)] max-w-[64ch]">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Surveillance" title="Between full audits, not instead of them">
        <p className="text-[0.98rem] leading-relaxed">
          Announced surveillance audits use standard scheduling and notice
          practice, scoped to a defined subset of sections — typically
          prioritizing EMP, supplier/input testing, cannabinoid uniformity,
          and any section carrying an open Major finding. Unannounced
          audits are reserved for Tier 1 (elevated-risk) facilities and any
          facility with an open Critical-finding history, modeled on SQF
          and BRCGS unannounced-audit provisions.
        </p>
        <Callout label="Where a doc-only interim year applies" tone="forest">
          A documentation-only interim-year option is available only to
          Tier 3 (earned-reduction) facilities — see the{" "}
          <Link href="/risk-matrix" className="underline decoration-[var(--color-amber-500)] underline-offset-4">
            Risk Matrix
          </Link>{" "}
          — and never substitutes for the mandatory annual on-site audit in
          states, currently Colorado, that impose their own annual
          third-party on-site requirement.
        </Callout>
      </Section>

      <Section kicker="Certification status lifecycle" title="Suspension, withdrawal, reinstatement, appeals" wide>
        <div className="grid md:grid-cols-2 gap-px bg-[var(--color-rule)]">
          {LIFECYCLE.map((l) => (
            <div key={l.title} className="bg-[var(--color-surface)] p-6">
              <div className="font-display text-[1.1rem]">{l.title}</div>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-[var(--color-ink-muted)]">
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Scope rules" title="Certificates specify exactly what they cover">
        <ul className="space-y-3 text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)]">
          <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-amber-500)]">
            A certificate specifies the exact product categories, processes,
            and physical site(s) covered — no uncovered category may be
            marketed as Canna-Safe Certified.
          </li>
          <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-amber-500)]">
            Operating in multiple states requires a scope-extension audit
            addressing the newly triggered state-specific requirements,
            rather than an automatic multi-state certificate.
          </li>
          <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-amber-500)]">
            Multi-site operators under common ownership may qualify for a
            sampled multi-site audit approach only after each site has
            completed at least one full independent Stage 2 audit.
          </li>
          <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-amber-500)]">
            Any change to product category, extraction method, or primary
            state of operation triggers a scope-change notification
            obligation within 30 days.
          </li>
        </ul>
      </Section>
    </>
  );
}
