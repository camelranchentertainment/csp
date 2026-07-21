"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  ALL_REQUIREMENTS,
  REQUIREMENT_SECTIONS,
  TOTAL_REQUIREMENTS,
} from "@/lib/requirements";
import RequirementCard from "./RequirementCard";

const STATE_FILTERS = [
  { code: "ALL", label: "All states" },
  { code: "UNIV", label: "Universal" },
  { code: "CO", label: "Colorado" },
  { code: "CA", label: "California" },
  { code: "WA", label: "Washington" },
  { code: "MO", label: "Missouri" },
  { code: "AR", label: "Arkansas" },
];

const STATUS_FILTERS = ["ALL", "Mandatory", "Voluntary", "Mixed"];

export default function RequirementsBrowser() {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<number | "ALL">("ALL");
  const [state, setState] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  // Progressive enhancement: honor a ?section= deep link once mounted in
  // the browser, without blocking the static prerender of the full list.
  // This is a one-time sync from an external system (the URL) on mount,
  // not derived render state, so the setState-in-effect rule doesn't
  // apply here — see https://react.dev/learn/you-might-not-need-an-effect
  // ("Case: Adjusting state when a prop changes" does not cover this).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("section");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (s) setSection(Number(s));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_REQUIREMENTS.filter((r) => {
      if (section !== "ALL" && r.sectionNumber !== section) return false;
      if (state !== "ALL" && !r.states.toUpperCase().includes(state))
        return false;
      if (status !== "ALL" && !r.status.toLowerCase().includes(status.toLowerCase()))
        return false;
      if (
        q &&
        !`${r.id} ${r.title ?? ""} ${r.statement} ${r.source}`
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });
  }, [query, section, state, status]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-[480px]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)]"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search requirement text, ID, or source…"
            aria-label="Search requirements"
            className="w-full border border-[var(--color-rule-strong)] bg-[var(--color-surface)] pl-9 pr-3 py-2.5 text-[14px] focus:border-[var(--color-forest-600)] outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <FilterGroup label="Section">
            <select
              value={section}
              onChange={(e) =>
                setSection(e.target.value === "ALL" ? "ALL" : Number(e.target.value))
              }
              className="border border-[var(--color-rule-strong)] bg-[var(--color-surface)] px-2.5 py-1.5 text-[13px] font-mono"
            >
              <option value="ALL">All sections</option>
              {REQUIREMENT_SECTIONS.map((s) => (
                <option key={s.section} value={s.section}>
                  §{s.section} — {s.title}
                </option>
              ))}
            </select>
          </FilterGroup>

          <FilterGroup label="State">
            <div className="flex flex-wrap gap-1.5">
              {STATE_FILTERS.map((s) => (
                <button
                  key={s.code}
                  onClick={() => setState(s.code)}
                  className={`font-mono text-[11px] uppercase tracking-wide border px-2 py-1 transition-colors ${
                    state === s.code
                      ? "border-[var(--color-forest-700)] bg-[var(--color-forest-700)] text-white"
                      : "border-[var(--color-rule-strong)] text-[var(--color-ink-muted)] hover:border-[var(--color-forest-600)]"
                  }`}
                >
                  {s.code === "ALL" ? "All" : s.code}
                </button>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup label="Status">
            <div className="flex flex-wrap gap-1.5">
              {STATUS_FILTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`font-mono text-[11px] uppercase tracking-wide border px-2 py-1 transition-colors ${
                    status === s
                      ? "border-[var(--color-amber-600)] bg-[var(--color-amber-600)] text-white"
                      : "border-[var(--color-rule-strong)] text-[var(--color-ink-muted)] hover:border-[var(--color-amber-500)]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </FilterGroup>
        </div>
      </div>

      <div className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-ink-faint)] mb-2">
        Showing {filtered.length} of {TOTAL_REQUIREMENTS} requirements
      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center text-[var(--color-ink-muted)]">
          No requirements match those filters. Try clearing the search or
          state filter.
        </div>
      ) : (
        <div>
          {filtered.map((r) => (
            <RequirementCard key={r.id} req={r} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)] mb-1.5">
        {label}
      </div>
      {children}
    </div>
  );
}
