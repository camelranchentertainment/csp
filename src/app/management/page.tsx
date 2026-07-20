import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import states from "@/data/states.json";

const ROLES = [
  {
    role: "Scheme Owner",
    who: "Canna-Safe Programs",
    body: "Owns the requirements framework, sets auditor qualification criteria, and governs certification decisions. Does not conduct on-site audits itself.",
  },
  {
    role: "Qualified Auditors",
    who: "Independent, credentialed individuals",
    body: "Conduct on-site assessments against the full requirements framework. Do not make the final certification decision for a facility they audited.",
  },
  {
    role: "Certified Facilities",
    who: "Client operations being assessed",
    body: "The manufacturing sites under audit. Never self-certify, and never share personnel with the auditor role for their own site.",
  },
  {
    role: "Qualified Implementers",
    who: "Consultants — deliberately walled off",
    body: "May help a facility build its food safety plan or SOPs, but may never subsequently audit that same facility — for the life of the relationship plus a minimum 24-month cooling-off period.",
  },
];

const PATHWAY = [
  { step: "1", title: "Application & Scoping", time: "1–2 weeks" },
  { step: "2", title: "Stage 1 — Desk / Document Review", time: "1–3 weeks" },
  { step: "3", title: "Stage 2 — Certification Audit", time: "1–3 days on-site" },
  { step: "4", title: "Corrective Action Period", time: "24h – 30d, severity-dependent" },
  { step: "5", title: "Technical Review & Certification Decision", time: "5–10 business days" },
  { step: "6", title: "Surveillance Audits", time: "Per risk-tier frequency" },
  { step: "7", title: "Recertification", time: "Scheduled 60–90 days before expiry" },
];

export default function ManagementPage() {
  return (
    <>
      <PageHeader
        n="4"
        eyebrow="Management of the Certification Program"
        title="Governed as a scheme, not run as an audit-for-hire arrangement"
        dek="Canna-Safe Programs is structured on the same role separation GFSI-benchmarked schemes require of any credible certification program — even at small, single-auditor scale."
      />

      <Section kicker="Structural model" title="Four separated roles">
        <div className="space-y-0">
          {ROLES.map((r) => (
            <div key={r.role} className="py-5 rule-bottom last:border-none grid sm:grid-cols-[1fr_2fr] gap-2 sm:gap-8">
              <div>
                <div className="font-display text-[1.1rem]">{r.role}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-amber-600)] mt-1">
                  {r.who}
                </div>
              </div>
              <p className="text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)]">
                {r.body}
              </p>
            </div>
          ))}
        </div>
        <Callout label="Non-negotiable, even at small scale" tone="forest">
          This conflict-of-interest firewall is the same one used by SQFI
          and GFSI-benchmarked schemes. In a small, single-auditor Phase 1
          environment it takes the form of a documented independence
          declaration and, ideally, a second qualified reviewer for the
          certification decision itself — not a waiver of the principle.
        </Callout>
      </Section>

      <Section kicker="Certification pathway" title="Seven stages, one shared calendar" wide>
        <div className="grid gap-px bg-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-4">
          {PATHWAY.map((p) => (
            <div key={p.step} className="bg-[var(--color-surface)] p-5">
              <div className="font-mono text-[11px] text-[var(--color-amber-600)]">
                Step {p.step}
              </div>
              <div className="font-display text-[1.02rem] mt-1.5 leading-snug">
                {p.title}
              </div>
              <div className="mt-2.5 font-mono text-[11px] text-[var(--color-ink-faint)]">
                {p.time}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[70ch] text-[0.94rem] leading-relaxed text-[var(--color-ink-muted)]">
          Stage 1 desk review is never skipped in favor of going straight
          to an on-site audit — facilities that haven&rsquo;t had their
          paperwork reviewed in advance are the single most common source
          of failed first-time certifications across every GFSI scheme,
          and a desk review catches those gaps cheaply, before an
          expensive on-site visit.
        </p>
      </Section>

      <Section kicker="Reference materials" title="Organized by state" wide>
        <p className="mb-6 text-[0.96rem] leading-relaxed max-w-[70ch]">
          The Master Requirements Register organizes all requirements by
          audit section. The companion State Regulatory Reference re-sorts
          the same requirements by jurisdiction, so an auditor scoping a
          single-state audit — or a facility preparing a scope-extension
          into a new state — can see every citation that applies to that
          state in one place.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-px bg-[var(--color-rule)]">
          {(
            states as { code: string; name: string; regulatoryBody: string; requirementCount: number }[]
          ).map((s) => (
            <Link
              key={s.code}
              href="/requirements"
              className="bg-[var(--color-surface)] p-5 hover:bg-[var(--color-forest-50)] transition-colors"
            >
              <div className="font-mono text-[11px] text-[var(--color-amber-600)]">
                {s.code}
              </div>
              <div className="font-display text-[1.05rem] mt-1">{s.name}</div>
              <div className="mt-2 text-[11.5px] text-[var(--color-ink-muted)] leading-relaxed">
                {s.regulatoryBody}
              </div>
              <div className="mt-3 font-mono text-[11px] text-[var(--color-ink-faint)]">
                {s.requirementCount} requirements
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section kicker="Company qualifications" title="What Canna-Safe Programs itself must document">
        <p className="text-[0.98rem] leading-relaxed">
          The auditor qualification ladder in Section 5 applies regardless
          of company size — even a one-person Phase 1 operation documents
          that its own qualifications satisfy every rung before
          self-certifying its authority to audit. That same standard
          extends to the program&rsquo;s own governance: the certification
          decision is never made by the same person who conducted the
          audit, appeals are reviewed by someone uninvolved in the original
          decision, and every certification decision — including denials —
          is documented in a retained decision record available to the
          facility on request.
        </p>
      </Section>
    </>
  );
}
