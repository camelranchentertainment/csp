import raw from "@/data/requirements.json";

export type Requirement = {
  id: string;
  title: string | null;
  statement: string;
  states: string;
  category: string;
  status: string;
  method: string;
  source: string;
  auditorNote: string;
};

export type RequirementSection = {
  section: number;
  title: string;
  expectedCount: number;
  requirements: Requirement[];
};

export const REQUIREMENT_SECTIONS = raw as RequirementSection[];

export const ALL_REQUIREMENTS: (Requirement & {
  sectionNumber: number;
  sectionTitle: string;
})[] = REQUIREMENT_SECTIONS.flatMap((s) =>
  s.requirements.map((r) => ({
    ...r,
    sectionNumber: s.section,
    sectionTitle: s.title,
  }))
);

export const TOTAL_REQUIREMENTS = ALL_REQUIREMENTS.length;
export const TOTAL_SECTIONS = REQUIREMENT_SECTIONS.length;

export function statusTone(status: string): "forest" | "amber" | "neutral" {
  if (/mandatory/i.test(status)) return "forest";
  if (/voluntary/i.test(status)) return "amber";
  return "neutral";
}
