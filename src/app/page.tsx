import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Seal from "@/components/Seal";
import Section from "@/components/Section";
import Callout from "@/components/Callout";
import Badge from "@/components/Badge";
import RequirementCard from "@/components/RequirementCard";
import { ALL_REQUIREMENTS, TOTAL_REQUIREMENTS, TOTAL_SECTIONS } from "@/lib/requirements";
import states from "@/data/states.json";

const STATS = [
  { value: String(TOTAL_REQUIREMENTS), label: "Requirements" },
  { value: String(TOTAL_SECTIONS), label: "Audit sections" },
  { value: "5", label: "States covered" },
  { value: "4", label: "Product categories" },
];

const METHODOLOGY_IMPORTS = [
  {
    name: "SQF Lead Auditor training",
    detail: "Source of the 5 C's CAPA format (root cause, correction, corrective action, confirmation, closure) and the 60/40 floor-time-to-document-review discipline.",
  },
  {
    name: "ISO 9001 / ISO 22000 Lead Auditor course",
    detail: "5-day format required of every auditor candidate before the Canna-Safe-specific training course — the same prerequisite SQF itself requires.",
  },
  {
    name: "GFSI Code Ed. 9 / SQF Code Ed. 10",
    detail: "§2.1.1-pattern governance requirements (written policy, management commitment, document control) carried over structurally, with SQF/SQFI attribution removed from client-facing materials.",
  },
  {
    name: "21 CFR 117 (FDA preventive controls rule)",
    detail: "Used as the HARPC baseline wherever cannabis-specific federal guidance doesn't exist — flagged explicitly in the register anywhere no direct 21 CFR 117 equivalent applies.",
  },
];

const PILLARS = [
  {
    n: "01",
    title: "State law is the floor, never the ceiling",
    body: "Every audit frequency and requirement defaults to whichever standard is stricter — the state's mandate or the program's own. Colorado's mandatory annual third-party cGMP audit requirement for hemp safe-harbor registrants is the model example: it sets an effective floor of annual on-site activity regardless of a facility's earned risk tier.",
  },
  {
    n: "02",
    title: "Scrutiny is earned down, not granted up",
    body: "The audit-frequency model is adapted directly from the MFI Audit Frequency Reduction Justification methodology — but inverted. Cannabis clients start at Tier 1/2 scrutiny (1–3 days on-site, semi-annual to annual surveillance) with reduction to Tier 3 (1 day, doc-only interim years) available only after two consecutive clean cycles with zero Critical findings.",
  },
  {
    n: "03",
    title: "Design-reference, not compliance-claim",
    body: "Every reference to SQF, GFSI, or ISO/IEC 17065 describes a structural pattern this program is modeled on — never a claim of accreditation. All SQF/SQFI brand references have been stripped from client-facing materials specifically because that attribution tested poorly in audit contexts.",
  },
];

const SEVERITY_QUICK = [
  { tier: "Critical", window: "24–48 hrs", tone: "critical" as const, note: "Unlicensed handler, uncertified extraction equipment, a failed test released to market — suspension is immediate pending independently verified closure." },
  { tier: "Major", window: "30 days", tone: "amber" as const, note: "Systemic gap with latent risk — no EMP trending, incomplete hazard analysis — closed via the 5 C's CAPA format." },
  { tier: "Minor", window: "Next audit cycle", tone: "neutral" as const, note: "Isolated documentation gap. Repeat occurrences escalate to Major on the following audit." },
];

// Three real requirements, chosen to show the range: a universal governance
// item, an explicit multi-state product-safety item, and a state-specific
// licensure item — verbatim from the register, not paraphrased.
const SPOTLIGHT_IDS = ["1.01", "12.01", "1.07"];

export default function OverviewPage() {
  const spotlightReqs = SPOTLIGHT_IDS.map((id) =>
    ALL_REQUIREMENTS.find((r) => r.id === id)
  ).filter((r): r is NonNullable<typeof r> => Boolean(r));

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
            <p className="mt-6 max-w-[58ch] text-[1.1rem] leading-relaxed text-[var(--color-ink-muted)]">
              {TOTAL_REQUIREMENTS} requirements across {TOTAL_SECTIONS} audit
              sections, adapted from SQF Lead Auditor methodology and
              GFSI Benchmarking Requirements — the same R-I-O
              (Records/Interviews/Observations) evidence standard and 5 C&rsquo;s
              CAPA format used across conventional food manufacturing,
              applied to cannabis-infused edibles, tinctures, topicals, and
              beverages in five states.
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
      <div className="border-t-[3px] border-b-[3px] border-[var(--color-forest-900)] bg-[var(--color-surface)]">
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
          stating the binding &ldquo;shall&rdquo; language for all {TOTAL_REQUIREMENTS} requirements
          across {TOTAL_SECTIONS} sections; Facility Compliance Narratives
          describing how a facility demonstrates each one in practice; a{" "}
          <Link href="/auditors" className="underline decoration-[var(--color-amber-500)] underline-offset-4">
            Governance Standard
          </Link>{" "}
          defining the certification pathway, the five-stage auditor
          qualification ladder, and the non-conformance severity model; and
          a State Regulatory Reference that re-sorts every requirement by
          jurisdiction — Colorado, California, Washington, Missouri, and
          Arkansas — for fast single-state lookup.
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

      <Section kicker="Where the methodology comes from" title="Nothing here was invented from scratch" wide>
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-rule)]">
          {METHODOLOGY_IMPORTS.map((m) => (
            <div key={m.name} className="bg-[var(--color-surface)] p-6">
              <div className="font-display text-[1.05rem] leading-snug">
                {m.name}
              </div>
              <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[var(--color-ink-muted)]">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Proof, not paraphrase" title="Three requirements, exactly as written" wide>
        <p className="mb-6 max-w-[70ch] text-[0.98rem] leading-relaxed text-[var(--color-ink-muted)]">
          Not a summary — the actual binding language from the register,
          chosen to show the range: a universal governance requirement, a
          multi-state product-safety requirement, and a state-specific
          licensure requirement.
        </p>
        <div>
          {spotlightReqs.map((r) => (
            <RequirementCard key={r.id} req={r} />
          ))}
        </div>
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

      <Section kicker="By the numbers" title="What severity actually determines" wide>
        <div className="space-y-0">
          {SEVERITY_QUICK.map((s) => (
            <div
              key={s.tier}
              className="py-5 rule-bottom last:border-none grid md:grid-cols-[140px_140px_1fr] gap-3 md:gap-8 items-start"
            >
              <Badge tone={s.tone}>{s.tier}</Badge>
              <div className="font-mono text-[12px] text-[var(--color-ink)]">
                Closure: {s.window}
              </div>
              <p className="text-[0.9rem] leading-relaxed text-[var(--color-ink-muted)]">
                {s.note}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[0.88rem] text-[var(--color-ink-muted)]">
          Full detail on risk tiers, audit duration, and surveillance
          frequency: see the{" "}
          <Link href="/risk-matrix" className="underline decoration-[var(--color-amber-500)] underline-offset-4">
            Risk Matrix
          </Link>
          .
        </p>
      </Section>

      <Section kicker="Coverage" title="Five states, one shared framework" wide>
        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-px bg-[var(--color-rule)]">
          {(
            states as {
              code: string;
              name: string;
              regulatoryBody: string;
              requirementCount: number;
              distinct: string;
            }[]
          ).map((s) => (
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
              <p className="mt-3 text-[11.5px] leading-relaxed text-[var(--color-ink-muted)] line-clamp-3">
                {s.distinct}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

