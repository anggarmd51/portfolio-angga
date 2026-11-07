export interface PipelineStageItem {
  label: string;
  years: string;
  months: number;
  title: string;
  company?: string;
  metric?: string;
  saasStart?: boolean;
  latest?: boolean;
}

export const pipelineStages: PipelineStageItem[] = [
  {
    label: "Surveyor",
    years: "2019–2021",
    months: 19,
    title: "Surveyor, PT Astra Sedaya Finance",
    company: "PT Astra Sedaya Finance (ACC)",
    metric: "Verifikasi & Mitigasi Risiko Lapangan",
  },
  {
    label: "Sales",
    years: "2021–2022",
    months: 14,
    title: "Sales Officer, PT CIMB Niaga Auto Finance",
    company: "PT CIMB Niaga Auto Finance",
    metric: "Target Pembiayaan Dealer Tercapai",
  },
  {
    label: "Funding",
    years: "2022–2023",
    months: 7,
    title: "Card Funding Officer, PT Bank Mega Tbk",
    company: "PT Bank Mega Tbk",
    metric: "Akuisisi Kartu Kredit & DPK",
  },
  {
    label: "Retensi",
    years: "2023–2024",
    months: 12,
    title: "Customer Retention Processing Syariah (Talangan Haji), PT Astra Sedaya Finance",
    company: "PT Astra Sedaya Finance (ACC)",
    metric: "90%+ Retensi Nasabah Bulanan",
  },
  {
    label: "Kredit",
    years: "2024–2025",
    months: 10,
    title: "Credit Marketing Officer, PT Clipan Finance Indonesia",
    company: "PT Clipan Finance Indonesia",
    metric: "Akuisisi Kredit & NPL Terkendali",
  },
  {
    label: "BDM",
    years: "2025",
    months: 8,
    title: "Business Development Manager (SaaS POS Dretail), PT Sarana Digital Retail",
    company: "PT Sarana Digital Retail (Dretail)",
    metric: "20+ Merchant Baru / Bulan (Tim 3 BDO)",
    saasStart: true,
  },
  {
    label: "Account Mgr",
    years: "2025–2026",
    months: 9,
    title: "Account Manager (SaaS HRIS Nusawork), PT Media Antar Nusa",
    company: "PT Media Antar Nusa (Nusawork)",
    metric: "100% Target Sales / Rp 50 Juta",
    latest: true,
  },
];

export const DEFAULT_EXPANDED_EXPERIENCE_IDS = [1, 2] as const;

export function toggleAccordionIds(currentIds: number[], targetId: number): number[] {
  return currentIds.includes(targetId)
    ? currentIds.filter((id) => id !== targetId)
    : [...currentIds, targetId];
}

export const PIPELINE_CAREER_ROLES = pipelineStages.map((s) => s.label);
