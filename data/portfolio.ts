export interface FloatingBadge {
  text: string;
}

export interface BentoPillar {
  title: string;
  description: string;
}

export interface CompetencyCategory {
  title: string;
  skills: string[];
}

export interface CareerRole {
  id: string;
  company: string;
  parenthesisNote?: string;
  role: string;
  period: string;
  logo: string;
  logoAlt: string;
  bullets: string[];
}

export interface ProjectScreenshot {
  src: string;
  title: string;
  caption: string;
}

export interface ProjectPreviewModule {
  title: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  websiteUrl: string;
  screenshots: ProjectScreenshot[];
  coverScreenshot: string;
  socials?: { platform: string; url: string }[];
  accessNote?: string;
  objective?: string;
  contribution?: string;
  techStack?: string[];
  status?: "Personal Project" | "Project Showcase";
  previewModules?: ProjectPreviewModule[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
  gpa: string;
  logo: string;
  professionalSummary: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  validity?: string;
  url?: string;
}

export interface ContactChannel {
  label: string;
  sublabel: string;
  href: string;
  isDownload?: boolean;
  downloadFilename?: string;
  iconName: "whatsapp" | "mail" | "linkedin" | "github" | "instagram" | "file-text";
}

export const HERO_DATA = {
  eyebrow: "SALES, BUSINESS DEVELOPMENT & ACCOUNT MANAGEMENT",
  name: "Muhammad Angga Ramadhan",
  secondaryName: "(Angga)",
  tagline:
    "Menangani Penjualan B2B, Pengelolaan Akun, dan Pengembangan Hubungan Bisnis di Sektor Pembiayaan & SaaS.",
  subTagline:
    "Berpengalaman sejak 2019 di industri pembiayaan, perbankan, dan perangkat lunak B2B (HRIS & POS) di Medan. Terbiasa mengelola siklus penjualan dari pemetaan kebutuhan klien, demonstrasi produk, hingga pendampingan onboarding.",
  portraitUrl: "/muhammad-angga-ramadhan-profile.png",
  floatingBadges: [{ text: "Berpengalaman sejak 2019 • Medan" }],
  ctaPrimary: {
    label: "Lihat Riwayat Kerja",
    href: "#career",
  },
  ctaSecondary: {
    label: "Diskusikan Peluang",
    href: "#contact",
  },
};

export const BENTO_DATA = {
  sectionTitle: "Dari Survei Kredit ke Penjualan B2B SaaS",
  sectionSubtitle:
    "Perjalanan karier yang dimulai sebagai surveyor pembiayaan di Astra Credit Companies (2019), berlanjut ke penjualan produk perbankan dan pembiayaan, hingga menangani penjualan perangkat lunak B2B.",
  box1: {
    headline: "Pengalaman Pembiayaan & Penjualan Solusi B2B",
    body: "Saya menangani proses penjualan dari pencarian prospek, pemetaan kebutuhan, presentasi solusi, hingga negosiasi kontrak dan pendampingan klien baru. Di luar pekerjaan utama, saya juga membangun aplikasi AR CRM pribadi untuk mencatat prospek dan aktivitas penjualan harian.",
  },
  box2: {
    label: "FOKUS PERAN",
    roles: ["Sales Manager", "B2B Sales", "Business Development Manager", "Account Manager"],
  },
  box3: {
    title: "Area Pengalaman",
    pillars: [
      {
        title: "Penjualan & Pengelolaan Akun",
        description:
          "Pencarian prospek, pemetaan kebutuhan, presentasi solusi, negosiasi, dan tindak lanjut klien.",
      },
      {
        title: "Pembiayaan & Layanan Keuangan",
        description:
          "Survei dan verifikasi calon debitur, serta penanganan produk pembiayaan reguler dan syariah.",
      },
      {
        title: "Koordinasi Mitra & Onboarding",
        description:
          "Koordinasi dengan dealer atau mitra usaha dan pendampingan klien baru saat implementasi.",
      },
    ],
  },
  box4: {
    competencyCategories: [
      {
        title: "Penjualan & Pengembangan Bisnis",
        skills: [
          "B2B Sales",
          "Account Management",
          "Business Development",
          "Presentasi & Demo Produk",
          "Negosiasi Kontrak",
          "Pengelolaan Pipeline & Tindak Lanjut Prospek",
        ],
      },
      {
        title: "Pembiayaan & Analisis Risiko",
        skills: [
          "Credit Survey & Verification",
          "Analisis Kelayakan Kredit",
          "Pembiayaan Reguler & Syariah",
          "Customer Retention",
          "Manajemen Relasi Dealer/Mitra",
          "Pembiayaan Ulang (Repeat Order/Refinancing)",
        ],
      },
      {
        title: "CRM, Digital & Alat Kerja",
        skills: [
          "CRM Pipeline Tracking",
          "Pipeline Management",
          "AI-Assisted Web Development (Vibe Coding)",
          "Riset Prospek B2B",
          "Next.js & Tailwind CSS Dasar",
          "Pembuatan Aplikasi CRM Pribadi (AR CRM)",
        ],
      },
    ] satisfies CompetencyCategory[],
  },
};

export const SALES_WORKFLOW_STEPS = [
  {
    id: "prospecting",
    number: "01",
    label: "Prospecting",
    title: "01 Prospecting",
    description: "Pemetaan pasar B2B & identifikasi akun potensial di sektor target.",
  },
  {
    id: "discovery",
    number: "02",
    label: "Discovery",
    title: "02 Discovery",
    description: "Analisis kendala operasional klien (HR/Retail/Pembiayaan) & kualifikasi kebutuhan.",
  },
  {
    id: "solution-demo",
    number: "03",
    label: "Solution Demo",
    title: "03 Solution Demo",
    description: "Presentasi produk terarah & simulasi penggunaan sistem kepada pengambil keputusan.",
  },
  {
    id: "commercial-closing",
    number: "04",
    label: "Commercial & Closing",
    title: "04 Commercial & Closing",
    description: "Penyusunan proposal penawaran, negosiasi klausul, dan penutupan kontrak.",
  },
  {
    id: "onboarding",
    number: "05",
    label: "Onboarding",
    title: "05 Onboarding",
    description: "Pendampingan implementasi awal bersama tim teknis hingga sistem berjalan stabil.",
  },
  {
    id: "account-retention",
    number: "06",
    label: "Account Retention",
    title: "06 Account Retention",
    description: "Evaluasi berkala dan penjagaan relasi jangka panjang untuk mencegah churn.",
  },
] as const;

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "role-1",
    company: "PT Media Antar Nusa (Nusawork HRIS)",
    role: "Account Manager",
    period: "Okt 2025 – Jun 2026",
    logo: "/assets/PT%20Media%20Antar%20Nusa%20(Nusawork%20HRIS).jpg",
    logoAlt: "Logo PT Media Antar Nusa - Nusawork HRIS",
    bullets: [
      "Memetakan akun B2B dan mengkualifikasi kebutuhan operasional bersama HR Manager serta Kepala Operasional, lalu mendemonstrasikan Nusawork HRIS kepada calon klien.",
      "Menyusun penawaran dan bernegosiasi dengan pengambil keputusan hingga penutupan kontrak.",
      "Mendampingi onboarding bersama tim teknis sampai klien mulai menggunakan sistem HRIS.",
    ],
  },
  {
    id: "role-2",
    company: "PT Sarana Digital Retail (Dretail POS)",
    role: "Business Development Manager",
    period: "Apr 2024 – Okt 2025",
    logo: "/assets/PT%20Sarana%20Digital%20Retail%20(Dretail%20POS).png",
    logoAlt: "Logo PT Sarana Digital Retail - Dretail POS",
    bullets: [
      "Mengoordinasi penjualan POS Dretail bersama tim Business Development Officer untuk merchant ritel dan F&B di Medan dan sekitarnya.",
      "Berdiskusi dengan pemilik bisnis dan pengelola operasional, mendemonstrasikan sistem POS, serta menyusun penawaran komersial.",
      "Mendampingi implementasi awal pada merchant baru dan menjaga tindak lanjut setelah penerapan.",
    ],
  },
  {
    id: "role-3",
    company: "PT Astra Sedaya Finance (Astra Credit Companies)",
    role: "Customer Retention Processing Syariah",
    period: "Mei 2023 – Apr 2024",
    logo: "/assets/PT%20Astra%20Sedaya%20Finance%20(Astra%20Credit%20Companies).webp",
    logoAlt: "Logo PT Astra Sedaya Finance - ACC",
    bullets: [
      "Mendampingi nasabah existing untuk kebutuhan produk pembiayaan syariah (Talangan Haji) dan menindaklanjuti pertanyaan layanan.",
      "Menangani pengajuan pembiayaan ulang (repeat order/refinancing) serta memeriksa kelengkapan dokumen administrasi.",
      "Melakukan tindak lanjut kepada nasabah sesuai proses layanan dan ketentuan pembiayaan yang berlaku.",
    ],
  },
  {
    id: "role-4",
    company: "PT Bank Mega Tbk",
    role: "Card Funding Officer",
    period: "Nov 2022 – Mei 2023",
    logo: "/assets/PT%20Bank%20Mega%20Tbk.png",
    logoAlt: "Logo PT Bank Mega Tbk",
    bullets: [
      "Menangani akuisisi nasabah untuk produk kartu kredit dan dana pihak ketiga melalui direct sales, canvassing, serta booth event.",
      "Menjelaskan fitur produk, manfaat promosi, dan ketentuan kepada calon nasabah.",
      "Mengawal kelengkapan berkas pengajuan untuk proses verifikasi dan persetujuan.",
    ],
  },
  {
    id: "role-5",
    company: "PT CIMB Niaga Auto Finance (CNAF)",
    role: "Sales Officer",
    period: "Sep 2021 – Okt 2022",
    logo: "/assets/PT%20CIMB%20Niaga%20Auto%20Finance%20(CNAF).png",
    logoAlt: "Logo PT CIMB Niaga Auto Finance - CNAF",
    bullets: [
      "Mempromosikan produk pembiayaan otomotif kepada calon debitur di Medan.",
      "Mengoordinasi pengajuan pembiayaan dengan showroom dan dealer rekanan serta mendampingi pengumpulan dokumen.",
      "Menindaklanjuti aplikasi pembiayaan selama proses verifikasi hingga keputusan.",
    ],
  },
  {
    id: "role-6",
    company: "PT Astra Sedaya Finance (Astra Credit Companies)",
    role: "Surveyor",
    period: "Okt 2019 – Apr 2021",
    logo: "/assets/PT%20Astra%20Sedaya%20Finance%20(Astra%20Credit%20Companies).webp",
    logoAlt: "Logo PT Astra Sedaya Finance - ACC Surveyor",
    bullets: [
      "Melakukan survei lapangan dan verifikasi informasi calon debitur, termasuk alamat tempat tinggal dan kapasitas usaha.",
      "Menyusun laporan hasil survei sebagai bahan pertimbangan proses analisis dan keputusan kredit.",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "lokerresmi",
    title: "LokerResmi.id",
    subtitle: "Platform Bursa Lowongan Kerja",
    role: "Web Developer & Inisiator Proyek",
    description:
      "Platform direktori bursa kerja terstruktur dengan pemetaan posisi, filter lokasi spesifik, dan transparansi sumber rekrutmen.",
    objective:
      "Memangkas waktu pencarian kerja dengan menyatukan informasi lowongan yang tersebar ke dalam satu antarmuka yang mudah difilter.",
    contribution:
      "Arsitektur web direktori dengan pencarian instan, filter kategori/wilayah berlapis, serta halaman detail lowongan berbasis Supabase.",
    techStack: ["Supabase", "Vercel"],
    status: "Personal Project",
    websiteUrl: "https://lokerresmi.vercel.app",
    coverScreenshot: "/assets/Tangkapan%20Layar%20Proyek%20LokerResmi.id.png",
    screenshots: [
      {
        src: "/assets/Tangkapan%20Layar%20Proyek%20LokerResmi.id.png",
        title: "Beranda LokerResmi.id",
        caption:
          "Tampilan pencarian lowongan, kategori, dan informasi posisi kerja.",
      },
    ],
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/lokerresmi_id" },
      { platform: "TikTok", url: "https://www.tiktok.com/@lokerresmi_id" },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/lokerresmi.id/",
      },
    ],
  },
  {
    id: "arcrm",
    title: "AR CRM",
    subtitle: "Personal B2B Sales Pipeline App",
    role: "Web Developer & Inisiator Proyek",
    description:
      "Progressive Web App (PWA) CRM internal untuk mendigitalisasi pelacakan prospek dan tahapan pipeline penjualan B2B harian.",
    objective:
      "Menggantikan pencatatan prospek manual di spreadsheet agar jadwal tindak lanjut (follow-up) dan riwayat interaksi klien tercatat rapi.",
    contribution:
      "Aplikasi CRM berbasis Firebase dengan autentikasi Google Sign-In khusus workspace, papan pipeline Kanban, database prospek, dan log aktivitas.",
    techStack: ["Firebase", "Progressive Web App"],
    status: "Personal Project",
    websiteUrl: "https://arcrmapp.vercel.app/",
    coverScreenshot: "/assets/Tangkapan%20Layar%20Proyek%20AR%20CRM%203.png",
    screenshots: [
      {
        src: "/assets/Tangkapan%20Layar%20Proyek%20AR%20CRM%203.png",
        title: "Tangkapan layar AR CRM",
        caption: "Tangkapan layar antarmuka aplikasi AR CRM.",
      },
    ],
    previewModules: [
      {
        title: "Pipeline Kanban & Deal Tracking",
        caption:
          "Ilustrasi pengelolaan tahapan pipeline dan tindak lanjut untuk setiap peluang penjualan.",
      },
      {
        title: "Database Prospek & Lead Generation",
        caption:
          "Ilustrasi pencatatan informasi prospek untuk membantu mengelola dan menelusuri lead.",
      },
      {
        title: "Log Aktivitas & Follow-up Harian",
        caption:
          "Ilustrasi pencatatan aktivitas penjualan dan jadwal tindak lanjut harian.",
      },
    ],
    accessNote:
      "Akses live aplikasi memerlukan autentikasi Google Sign-In internal workspace.",
  },
  {
    id: "thirteen-project",
    title: "Thirteen Project",
    subtitle: "Katalog Layanan & Portofolio Otomotif",
    role: "Web Developer",
    description:
      "Situs katalog komersial untuk layanan perawatan otomotif (auto detailing & custom lighting) serta inventori mobil bekas.",
    objective:
      "Meningkatkan kredibilitas visual bengkel di mata pelanggan dan mempercepat alur konsultasi maupun pemesanan jadwal via WhatsApp.",
    contribution:
      "Katalog web responsif yang memuat spesifikasi layanan, galeri hasil pengerjaan, etalase stok kendaraan, dan integrasi kontak langsung.",
    techStack: ["Supabase", "Vercel"],
    status: "Project Showcase",
    websiteUrl: "https://thirteenproject.vercel.app",
    coverScreenshot: "/assets/Tangkapan%20Layar%20Proyek%20Thirteen%20Project.png",
    screenshots: [
      {
        src: "/assets/Tangkapan%20Layar%20Proyek%20Thirteen%20Project.png",
        title: "Situs Thirteen Project",
        caption:
          "Tampilan katalog layanan dan portofolio otomotif Thirteen Project.",
      },
    ],
  },
];

export const EDUCATION_DATA: EducationItem = {
  institution: "Universitas Islam Negeri Sumatera Utara (UIN SU)",
  degree: "Diploma 3 (D3)",
  field: "Perbankan Syariah",
  graduationYear: "2019",
  gpa: "3.26",
  logo: "/assets/Logo-UIN-SU-Medan-PNG-1.png",
  professionalSummary:
    "Fondasi akademik di bidang Perbankan Syariah yang diperkuat dengan sertifikasi praktisi dalam manajemen penjualan B2B, pengoperasian perangkat lunak CRM (HubSpot), serta pengembangan aplikasi berbantuan AI.",
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Sales Management Certification",
    issuer: "HubSpot Academy",
    period: "Okt 2026 – Nov 2028",
    validity: "Okt 2026 – Nov 2028",
    url: "/assets/sertifikat/Hubspot%20Academy%20-%20Sales%20Management.pdf",
  },
  {
    id: "cert-2",
    title: "HubSpot Sales Hub Software Certified",
    issuer: "HubSpot Academy",
    period: "Jun 2026 – Jul 2027",
    validity: "Jun 2026 – Jul 2027",
    url: "/assets/sertifikat/HubSpot%20Academy%20-%20Sales%20Hub%20Software.pdf",
  },
  {
    id: "cert-3",
    title: "Boosting MSME Growth through AI",
    issuer: "Hacktiv8, Google.org & ADB",
    period: "Nov 2025",
    url: "/assets/sertifikat/Hacktiv8%20-%20Boosting%20MSME%20Growth%20through%20AI.pdf",
  },
  {
    id: "cert-4",
    title: "Sales Forecasting",
    issuer: "HP LIFE (HP Foundation)",
    period: "Oktober 2026",
    url: "/assets/sertifikat/Certificate%20of%20Completion%20-%20HP%20LIFE.pdf",
  },
  {
    id: "cert-5",
    title: "Frictionless Sales",
    issuer: "HubSpot Academy",
    period: "Okt 2026",
    url: "/assets/sertifikat/Hubspot%20Academy%20-%20Frictionless%20Sales.pdf",
  },
  {
    id: "cert-6",
    title: "Financial Literacy and Job Readiness",
    issuer: "DBS Foundation & Plan Int.",
    period: "Sep 2026",
    url: "/assets/sertifikat/Muhammad%20Angga%20Ramadhan%20-%20Sertifikat%20Financial%20Literasi.pdf",
  },
];

export const CONTACT_DATA = {
  headline: "Mari Diskusikan Peluang Kerja atau Kolaborasi Bisnis",
  subheadline:
    "Saya terbuka untuk peran B2B Sales, Account Management, Sales Manager atau Business Development Manager di Medan maupun remote. Silakan hubungi saya melalui WhatsApp, email, atau LinkedIn, serta unduh CV terbaru saya untuk rincian lengkap.",
  panelTitle: "Peluang Karier & Kolaborasi",
  panelDescription: "Pilih kanal yang paling nyaman untuk menghubungi saya atau melihat profil profesional.",
  channels: [
    {
      label: "Chat via WhatsApp",
      sublabel: "0852-0660-2391",
      href: "https://wa.me/6285206602391",
      iconName: "whatsapp" as const,
    },
    {
      label: "Email",
      sublabel: "anggaramadhan538@gmail.com",
      href: "",
      iconName: "mail" as const,
    },
    {
      label: "Profil LinkedIn",
      sublabel: "linkedin.com/in/anggarmd",
      href: "https://linkedin.com/in/anggarmd",
      iconName: "linkedin" as const,
    },
    {
      label: "Repositori GitHub",
      sublabel: "github.com/anggarmd51",
      href: "https://github.com/anggarmd51",
      iconName: "github" as const,
    },
    {
      label: "Instagram",
      sublabel: "@angga.rmd_",
      href: "https://www.instagram.com/angga.rmd_/",
      iconName: "instagram" as const,
    },
    {
      label: "Unduh CV Lengkap (PDF)",
      sublabel: "Versi 2 Halaman Resmi",
      href: "/assets/CV_Angga.pdf",
      isDownload: true,
      downloadFilename: "CV_Muhammad_Angga_Ramadhan.pdf",
      iconName: "file-text" as const,
    },
  ],
  footer: "Medan, Sumatera Utara, Indonesia • © 2026 Muhammad Angga Ramadhan",
};

export const NAVIGATION_SECTIONS = [
  { id: "home", label: "Beranda", shortLabel: "Home" },
  { id: "profile", label: "Profil", shortLabel: "Profil" },
  { id: "career", label: "Riwayat Kerja", shortLabel: "Karir" },
  { id: "projects", label: "Proyek", shortLabel: "Proyek" },
  { id: "credentials", label: "Pendidikan & Sertifikasi", shortLabel: "Kredensial" },
  { id: "contact", label: "Kontak & Diskusi", shortLabel: "Kontak" },
] as const;
