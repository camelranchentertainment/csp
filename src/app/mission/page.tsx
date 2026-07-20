import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Callout from "@/components/Callout";

const GOALS = [
  {
    n: "01",
    title: "Build a food-safety-auditing-style program for cannabis",
    body: "Apply the same rigor conventional food manufacturing auditing already relies on — GFSI-benchmarked methodology, structured non-conformance management, independent certification decisions — to cannabis-infused food, and do it in partnership with state regulators and certification bodies rather than around them.",
  },
  {
    n: "02",
    title: "Set up a clear path to ISO and GFSI-aligned certification",
    body: "Build the structural separations — Scheme Owner, Qualified Auditor, Certified Facility, and a walled-off Implementer role — now, in Phase 1, so that pursuing ISO/IEC 17065 accreditation in Phase 2 is a natural extension rather than a costly organizational retrofit.",
  },
  {
    n: "03",
    title: "Package the program for states, industry, and industry groups",
    body: "Present a program that a state regulator can recognize as rigorous, that a facility can adopt without friction, and that an industry group can point to as a credible, non-accredited-but-honest interim standard while formal accreditation is pursued.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        n="3"
        eyebrow="Mission Statement"
        title="Cannabis food manufacturing deserves the same rigor as any other food category"
        dek="Cannabis-infused edibles, tinctures, and beverages are food. Consumers eat and drink them the same way they eat and drink anything else on a shelf — and they deserve a certification standard built with that seriousness, not one improvised around a regulatory gap."
      />

      <Section kicker="Why this program exists">
        <p className="text-[1.02rem] leading-relaxed">
          Federal food-safety oversight of cannabis products is
          inconsistent by design — FDA does not treat cannabis itself as a
          regulated substance the way it treats other food ingredients, and
          state cannabis programs vary widely in how much conventional food
          safety discipline they require. Canna-Safe Programs exists to
          close that gap directly: bringing the structural discipline of
          GFSI-benchmarked food safety auditing to a category of
          manufacturing that has largely had to build its own patchwork of
          practices, state by state, without a shared framework.
        </p>
        <p className="mt-4 text-[1.02rem] leading-relaxed">
          The program is built by someone who has audited conventional food
          manufacturing facilities under SQF-style methodology, and
          deliberately imports that discipline rather than inventing a
          lighter-weight cannabis-specific substitute — the 5 C&rsquo;s
          corrective-action format, the R-I-O objective-evidence standard,
          and the 60/40 observation-to-document-review time allocation all
          carry over unchanged.
        </p>
      </Section>

      <Section kicker="Three goals" title="What success looks like">
        <div className="space-y-8">
          {GOALS.map((g) => (
            <div key={g.n} className="flex gap-6">
              <div className="font-mono text-[13px] text-[var(--color-amber-600)] shrink-0 pt-1">
                {g.n}
              </div>
              <div>
                <h3 className="font-display text-[1.2rem] leading-snug mb-2">
                  {g.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-[var(--color-ink-muted)] max-w-[62ch]">
                  {g.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="An honest starting point">
        <Callout label="What we are, and what we are not" tone="forest">
          Canna-Safe Programs is an independently operated Phase 1
          consulting and pre-certification body. It is not accredited by,
          certified by, endorsed by, or affiliated with SQFI, GFSI, ISO, or
          IEC. Every structural reference to those schemes describes a
          design pattern this program is modeled on — not a claim of
          conformance. The mission is to earn accreditation by building the
          right structure first, not to claim it before it exists.
        </Callout>
      </Section>
    </>
  );
}
