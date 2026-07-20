import Badge from "./Badge";
import { Requirement, statusTone } from "@/lib/requirements";

export default function RequirementCard({
  req,
}: {
  req: Requirement;
}) {
  return (
    <article className="py-6 rule-bottom last:border-none">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[13px] text-[var(--color-amber-600)] shrink-0">
            {req.id}
          </span>
          {req.title && (
            <h3 className="font-display text-[1.15rem] leading-snug text-[var(--color-forest-950)]">
              {req.title}
            </h3>
          )}
        </div>
      </div>

      <p className="mt-2.5 text-[0.96rem] leading-relaxed text-[var(--color-ink)] max-w-[74ch]">
        {req.statement}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <Badge tone={statusTone(req.status)}>{req.status}</Badge>
        <Badge>States · {req.states}</Badge>
        <Badge>Category · {req.category}</Badge>
        <Badge>Method · {req.method}</Badge>
      </div>

      <dl className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-[6rem_1fr] text-[13px] leading-relaxed">
        <dt className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-ink-faint)] pt-0.5">
          Source
        </dt>
        <dd className="text-[var(--color-ink-muted)] italic">{req.source}</dd>
        <dt className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-ink-faint)] pt-0.5">
          Auditor note
        </dt>
        <dd className="text-[var(--color-ink-muted)]">{req.auditorNote}</dd>
      </dl>
    </article>
  );
}
