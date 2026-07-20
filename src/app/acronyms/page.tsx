import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { ACRONYM_GROUPS } from "@/data/acronyms";

export default function AcronymsPage() {
  return (
    <>
      <PageHeader
        n="10"
        eyebrow="Acronyms"
        title="Every abbreviation used across the program"
        dek="Grouped by domain — program-specific codes first, then the food safety, accreditation, and cannabis-regulatory terms they draw on."
      />

      {ACRONYM_GROUPS.map((g) => (
        <Section key={g.group} kicker="Glossary" title={g.group} wide>
          <dl className="grid sm:grid-cols-2 gap-x-10">
            {g.entries.map((e) => (
              <div
                key={e.term}
                className="py-3.5 rule-bottom flex gap-4 items-baseline"
              >
                <dt className="font-mono text-[13px] text-[var(--color-amber-600)] w-32 shrink-0">
                  {e.term}
                </dt>
                <dd className="text-[0.9rem] leading-relaxed">
                  {e.expansion}
                  {e.note && (
                    <span className="block text-[12px] text-[var(--color-ink-muted)] mt-0.5">
                      {e.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      ))}
    </>
  );
}
