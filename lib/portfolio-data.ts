export const DEFAULT_EXPANDED_EXPERIENCE_IDS = [1, 2] as const;

export function toggleAccordionIds(currentIds: number[], targetId: number): number[] {
  return currentIds.includes(targetId)
    ? currentIds.filter((id) => id !== targetId)
    : [...currentIds, targetId];
}

export const PIPELINE_CAREER_ROLES = [
  "Surveyor",
  "Sales Officer",
  "Card Funding Officer",
  "Customer Retention Syariah",
  "Credit Marketing Officer",
  "Business Development Manager",
  "Account Manager",
] as const;
