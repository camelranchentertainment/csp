import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Seal from "@/components/Seal";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import { TOTAL_REQUIREMENTS, TOTAL_SECTIONS } from "@/lib/requirements";
import states from "@/data/states.json";

const STATS = [
  { value: String(TOTAL_REQUIREMENTS), label: "Requirements" },
  { value: String(TOTAL_SECTIONS), label: "Audit sections" },
  { value: "5", label: "States covered" },
  { value: "4", label: "Product categories" },
];

const PILLARS = [
  {
    n: "01",
    title: "State law is the floor, never the ceiling",
    body: "Every audit frequency and requirement defaults to whichever standard is stricter — the state's mandate or the program's own. Colorado's mandatory annual third-party cGMP audit sets the model example: a state requirement that raises the bar above what the base program would otherwise ask for.",
  },
  {
    n: "02",
    title: "Scrutiny is earned down, not granted up",
    body: "Cannabis clients start at a higher-scrutiny baseline than the conventional-food model this program is adapted from, with frequency reduction available only after a demonstrated track record — the inverse of a typical supplier-reduction model.",
  },
  {
    n: "03",
    title: "Design-reference, not compliance-claim",
    body: "Every reference to SQF, GFSI, or ISO/IEC 17065 describes a structural pattern this program is modeled on for design purposes — never a claim of accreditation, endorsement, or formal conformance. That distinction is stated plainly, everywhere it matters.",
  },
];

export default function OverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[var(--color-amber-600)] mb-4">
              §1 / Program Overview
            </div>
            <h1 className="font-display text-[2.75rem] md:text-[4rem] leading-[1.02] text-[var(--color-forest-950)] max-w-[18ch]">
              A food-safety audit discipline, built for cannabis.
            </h1>
            <p className="mt-6 max-w-[56ch] text-[1.1rem] leading-relaxed text-[var(--color-ink-muted)]">
              Canna-Safe Programs applies the rigor of conventional food
              safety auditing — GFSI-benchmarked methodology, structured
              non-conformance management, an independent certification
              decision — to cannabis-infused food manufacturing, across
              every product category and every target state.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/requirements"
                className="inline-flex items-center gap-2 bg-[var(--color-forest-900)] text-white px-5 py-3 text-[14px] font-medium hover:bg-[var(--color-forest-800)] transition-colors"
              >
                Browse the requirements register <ArrowRight size={15} />
              </Link>
              <Link
                href="/scope"
                className="inline-flex items-center gap-2 border border-[var(--color-rule-strong)] px-5 py-3 text-[14px] font-medium text-[var(--color-forest-900)] hover:border-[var(--color-forest-700)] transition-colors"
              >
                See program scope
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <Seal className="w-40 h-40 text-[var(--color-forest-800)]" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="rule-top rule-bottom bg-[var(--color-surface)]">
        <div className="mx-auto max-w-[1200px] px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[2.25rem] text-[var(--color-forest-950)] leading-none">
                {s.value}
              </div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-[var(--color-ink-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section kicker="What the program is" title="How the framework holds together">
        <p className="text-[1.02rem] leading-relaxed">
          The program is built as four companion documents that share one
          numbering system: a{" "}
          <Link href="/requirements" className="underline decoration-[var(--color-amber-500)] underline-offset-4">
            Master Requirements Register
          </Link>{" "}
          stating the binding &ldquo;shall&rdquo; language for all {TOTAL_REQUIREMENTS} requirements;
          Facility Compliance Narratives describing how a facility
          demonstrates each one in practice; a{" "}
          <Link href="/auditors" className="underline decoration-[var(--color-amber-500)] underline-offset-4">
            Governance Standard
          </Link>{" "}
          defining the certification pathway and auditor qualification
          ladder; and a State Regulatory Reference that re-sorts the same
          requirements by jurisdiction for fast single-state lookup.
        </p>
        <Callout label="Program status" tone="forest">
          Canna-Safe Programs currently operates as an independent
          consulting and pre-certification body (Phase 1). It is not
          accredited by, certified by, endorsed by, or affiliated with
          SQFI, GFSI, ISO, or IEC. Pursuit of ISO/IEC 17065 accreditation
          as a true Certification Body is a stated Phase 2 goal, not a
          current status.
        </Callout>
      </Section>

      <Section kicker="Operating principles" title="Three decisions that shape everything else">
        <div className="grid md:grid-cols-3 gap-10">
          {PILLARS.map((p) => (
            <div key={p.n}>
              <div className="font-mono text-[13px] text-[var(--color-amber-600)] mb-2">
                {p.n}
              </div>
              <h3 className="font-display text-[1.2rem] leading-snug mb-2.5">
                {p.title}
              </h3>
              <p className="text-[0.92rem] leading-relaxed text-[var(--color-ink-muted)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Coverage" title="Five states, one shared framework" wide>
        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-px bg-[var(--color-rule)]">
          {(states as { code: string; name: string; regulatoryBody: string; requirementCount: number }[]).map(
            (s) => (
              <Link
                key={s.code}
                href="/scope"
                className="bg-[var(--color-surface)] p-5 hover:bg-[var(--color-forest-50)] transition-colors"
              >
                <div className="font-mono text-[11px] text-[var(--color-amber-600)]">
                  {s.code}
                </div>
                <div className="font-display text-[1.1rem] mt-1">{s.name}</div>
                <div className="mt-2 text-[12px] text-[var(--color-ink-muted)] leading-relaxed">
                  {s.regulatoryBody}
                </div>
                <div className="mt-3 font-mono text-[11px] text-[var(--color-ink-faint)]">
                  {s.requirementCount} citations
                </div>
              </Link>
            )
          )}
        </div>
      </Section>
    </>
  );
}
