import { SALES_WORKFLOW_STEPS } from "@/data/portfolio";

export const RECRUITER_QA_ITEMS = [
  {
    id: "b2b-saas-experience",
    question: "Apa pengalaman utama Angga di B2B & SaaS?",
    heading: "Pengalaman utama di B2B & SaaS",
    summary:
      "Pengalaman Angga mencakup tiga peran yang berhubungan langsung dengan solusi B2B:",
    facts: [
      "Account Manager di Wavecomindo, menangani konektivitas korporasi dan jaringan enterprise.",
      "Account Manager di Nusawork HRIS, mencakup discovery, demo solusi, penawaran, dan onboarding klien.",
      "Business Development Manager di Dretail POS, mendukung akuisisi merchant, demo POS, implementasi awal, dan tindak lanjut.",
    ],
  },
  {
    id: "ar-crm-role",
    question: "Apa peran Angga dalam pembuatan aplikasi AR CRM?",
    heading: "Inisiator produk dan pengembang AR CRM",
    summary:
      "Angga menginisiasi produk dari kebutuhan lapangan B2B Sales, merancang alur pipeline dan follow-up, lalu membangun PWA berbasis Firebase melalui AI-assisted development.",
    facts: [
      "Menyusun workflow pipeline dan aktivitas penjualan untuk pencatatan prospek serta tindak lanjut.",
      "Mengembangkan aplikasi CRM internal berbentuk Progressive Web App dengan Firebase.",
    ],
  },
  {
    id: "b2b-sales-cycle",
    question: "Bagaimana pendekatan Angga dalam mengelola siklus penjualan B2B?",
    heading: "Enam tahap penjualan konsultatif",
    summary:
      "Alur kerja dimulai dari pemetaan akun dan kebutuhan, lalu berlanjut sampai penggunaan awal dan retensi akun:",
    facts: SALES_WORKFLOW_STEPS.map((step) => step.label),
  },
  {
    id: "target-role",
    question: "Peran dan kolaborasi apa yang sedang dicari?",
    heading: "Terbuka untuk peluang dan kolaborasi",
    summary:
      "Angga terbuka untuk posisi B2B Sales, Account Management, dan Business Development Manager, serta kolaborasi solusi digital di Medan maupun remote.",
    facts: [
      "Diskusi peluang karier atau kolaborasi dapat dilanjutkan melalui WhatsApp.",
      "CV lengkap tersedia untuk diunduh sebagai ringkasan pengalaman profesional.",
    ],
  },
] as const;
