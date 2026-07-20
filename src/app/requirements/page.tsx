import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import RequirementsBrowser from "@/components/RequirementsBrowser";
import {
  REQUIREMENT_SECTIONS,
  TOTAL_REQUIREMENTS,
  TOTAL_SECTIONS,
} from "@/lib/requirements";

export default function RequirementsPage() {
  return (
    <>
      <PageHeader
        n="8"
        eyebrow="Program Requirements — Long Text Version"
        title={`The full register: ${TOTAL_REQUIREMENTS} requirements across ${TOTAL_SECTIONS} sections`}
        dek="This is the Code — the full 'shall' statement for every requirement, alongside its jurisdictional applicability, product-category scope, mandatory/voluntary status, audit method, regulatory source, and auditor guidance. It is the counterpart to the Facility Compliance Narratives, which address how a facility demonstrates compliance rather than what is required."
      />

      <Section kicker="Section index" title="17 audit sections" wide>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-rule)]">
          {REQUIREMENT_SECTIONS.map((s) => (
            <a
              key={s.section}
              href="#register"
              className="bg-[var(--color-surface)] p-4 hover:bg-[var(--color-forest-50)] transition-colors"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[11px] text-[var(--color-amber-600)]">
                  §{s.section}
                </span>
                <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">
                  {s.requirements.length} reqs
                </span>
              </div>
              <div className="mt-1 text-[0.88rem] leading-snug font-medium text-[var(--color-forest-950)]">
                {s.title}
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section kicker="Reading key" title="Codes used throughout the register">
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-[0.9rem]">
          <div>
            <dt className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-ink-faint)]">
              Status
            </dt>
            <dd className="text-[var(--color-ink-muted)] mt-1">
              Mandatory · Voluntary/Best Practice · Mixed (varies by state or category)
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-ink-faint)]">
              Method
            </dt>
            <dd className="text-[var(--color-ink-muted)] mt-1">
              DOC Document Review · OBS Observation · INT Interview · TEST Lab Testing
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-ink-faint)]">
              States
            </dt>
            <dd className="text-[var(--color-ink-muted)] mt-1">
              CO · CA · WA · MO · AR — or UNIV where a requirement applies universally
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-ink-faint)]">
              Qualifiers
            </dt>
            <dd className="text-[var(--color-ink-muted)] mt-1">
              &ldquo;(explicit)&rdquo; means drawn directly from that state&rsquo;s published rule; &ldquo;(verify)&rdquo; flags an item pending full regulatory-text confirmation before live use.
            </dd>
          </div>
        </dl>
      </Section>

      <section id="register" className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="mb-7">
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-amber-600)] mb-2">
            Search & Filter
          </div>
          <h2 className="font-display text-[1.75rem] text-[var(--color-forest-950)]">
            The register
          </h2>
        </div>
        <Suspense fallback={<div className="text-[var(--color-ink-muted)]">Loading register…</div>}>
          <RequirementsBrowser />
        </Suspense>
      </section>
    </>
  );
}
