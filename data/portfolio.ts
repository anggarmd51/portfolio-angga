export interface FloatingBadge {
  text: string;
}

export interface BentoPillar {
  title: string;
  description: string;
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

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  websiteUrl: string;
  screenshots: string[];
  coverScreenshot: string;
  socials?: { platform: string; url: string }[];
  accessNote?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
  gpa: string;
  logo: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
}

export interface ContactChannel {
  label: string;
  sublabel: string;
  href: string;
  isDownload?: boolean;
  downloadFilename?: string;
  iconName: "whatsapp" | "mail" | "linkedin" | "github" | "file-text";
}

export const HERO_DATA = {
  eyebrow: "EXECUTIVE PORTFOLIO — MEDAN, INDONESIA",
  name: "Muhammad Angga Ramadhan",
  secondaryName: "(Angga)",
  tagline:
    "Menyatukan Disiplin Eksekusi Penjualan, Mitigasi Risiko Pembiayaan, dan Teknologi CRM untuk Mengakselerasi Pertumbuhan Bisnis.",
  subTagline:
    "Profesional Sales, Business Development, dan Manajemen Operasional dengan rekam jejak >7 tahun memimpin penetrasi pasar B2B/B2C, mengelola jaringan kemitraan, dan membangun sistem pipeline modern.",
  portraitUrl: "/profile-placeholder.png",
  floatingBadges: [
    { text: "7+ Tahun Pengalaman Finansial & B2B SaaS" },
    { text: "Sales Leadership • Risk Control • CRM Tech" },
  ],
  ctaPrimary: {
    label: "Eksplorasi Rekam Jejak",
    href: "#career",
  },
  ctaSecondary: {
    label: "Diskusikan Peluang Karir & Bisnis",
    href: "#contact",
  },
};

export const BENTO_DATA = {
  box1: {
    headline: "Fondasi Perbankan yang Kuat. Ketangkasan Eksekusi B2B SaaS.",
    body: "Karir saya dibangun dari lapangan—mulai dari analisis kelayakan kredit dan kontrol risiko di industri pembiayaan, hingga memimpin tim penetrasi pasar dan negosiasi tingkat eksekutif (C-Level) di industri perangkat lunak (SaaS). Saya tidak hanya menjalankan target penjualan, tetapi merancang ulang alur kerja tim menggunakan pendekatan berbasis data dan sistem CRM yang saya kembangkan sendiri.",
  },
  box2: {
    label: "TARGET & FOKUS PERAN MANAJERIAL",
    roles: [
      "Sales Manager",
      "Branch Manager",
      "Business Development Manager",
      "Key Account / Commercial Lead",
    ],
  },
  box3: {
    title: "Tiga Pilar Kapabilitas Utama",
    pillars: [
      {
        title: "Commercial Execution",
        description:
          "Penjualan B2B/B2C, Key Account Management, Negosiasi & Retensi.",
      },
      {
        title: "Team & Branch Operations",
        description:
          "Kepemimpinan Tim (BDO/Sales), Penyelarasan SOP, Akuisisi Mitra/Dealer.",
      },
      {
        title: "Risk & Credit Governance",
        description:
          "Analisis Kelayakan Kredit, Pengendalian NPL, Kepatuhan Syariah.",
      },
    ],
  },
  box4: {
    marqueeText:
      "B2B & B2C Sales Strategy • Pipeline Management • Sales Team Coaching • Credit & Risk Analysis • NPL Mitigation • Key Account Management • HubSpot CRM • Web Development",
  },
};

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "role-1",
    company: "PT Media Antar Nusa (Nusawork HRIS)",
    role: "Account Manager",
    period: "Okt 2025 – Jun 2026",
    logo: "/assets/PT%20Media%20Antar%20Nusa%20(Nusawork%20HRIS).jpg",
    logoAlt: "Logo PT Media Antar Nusa - Nusawork HRIS",
    bullets: [
      "Membangun pipeline prospek B2B secara proaktif dan memimpin demonstrasi solusi SaaS HRIS Nusawork di hadapan jajaran HR dan eksekutif C-Level.",
      "Mengelola siklus penjualan menyeluruh (end-to-end), mulai dari pemetaan kebutuhan organisasi, penyusunan penawaran komersial, hingga negosiasi kontrak dan closing.",
      "Mengawal proses onboarding dan adopsi sistem pada klien korporat baru guna menjaga keberlanjutan penggunaan dan meminimalkan risiko churn.",
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
      "Merancang dan mengeksekusi strategi penetrasi pasar B2B untuk memperluas adopsi sistem kasir pintar (POS) Dretail pada pelaku usaha Retail dan F&B di wilayah Medan.",
      "Memimpin, mengarahkan, dan mengevaluasi kinerja tim lapangan (3 BDO) dalam akuisisi merchant dan kemitraan pemilik bisnis.",
      "Menganalisis alur operasional merchant untuk merumuskan rekomendasi paket bundling perangkat keras dan perangkat lunak POS yang tepat guna.",
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
      "Mengelola program retensi nasabah existing untuk produk pembiayaan syariah (Talangan Haji) melalui pendekatan konsultatif.",
      "Memproses pengajuan pembiayaan ulang (repeat order/refinancing) dengan menjaga kecepatan layanan.",
      "Memverifikasi kelengkapan dokumen administratif agar pencairan memenuhi standar kepatuhan (compliance).",
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
      "Mengakuisisi nasabah baru untuk produk kartu kredit dan dana pihak ketiga melalui eksekusi direct sales, canvassing, dan booth event.",
      "Memberikan edukasi langsung mengenai fitur produk, manfaat promosi, dan ketentuan.",
      "Mengawal pemberkasan pengajuan nasabah dari tahap awal hingga verifikasi dan persetujuan.",
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
      "Memasarkan produk pembiayaan otomotif (auto loan) dan memperluas jaringan kemitraan distribusi dengan showroom serta dealer rekanan di Medan.",
      "Menjaga hubungan kerja sama harian dengan tim penjualan dealer untuk distribusi aplikasi kredit.",
      "Mendampingi calon debitur selama proses pengumpulan syarat pengajuan hingga tahap realisasi.",
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
      "Melaksanakan survei lapangan, verifikasi faktual, serta penilaian kelayakan tempat tinggal dan kapasitas usaha calon debitur untuk memitigasi risiko kredit macet (NPL).",
      "Menyusun laporan survei objektif dan merumuskan rekomendasi kredit sesuai pedoman tata kelola risiko perusahaan.",
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
      "Platform direktori dan bursa pencarian kerja independen untuk menghubungkan pencari kerja dengan perusahaan secara transparan.",
    websiteUrl: "https://lokerresmi.vercel.app",
    coverScreenshot:
      "/assets/Tangkapan%20Layar%20Proyek%20LokerResmi.id.png",
    screenshots: [
      "/assets/Tangkapan%20Layar%20Proyek%20LokerResmi.id.png",
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
      "Aplikasi Progressive Web App (PWA) CRM mandiri untuk melacak sales pipeline, lead generation, dan manajemen aktivitas penjualan B2B harian.",
    websiteUrl: "https://arcrmapp.vercel.app/",
    coverScreenshot:
      "/assets/Tangkapan%20Layar%20Proyek%20AR%20CRM%203.png",
    screenshots: [
      "/assets/Tangkapan%20Layar%20Proyek%20AR%20CRM%203.png",
    ],
    accessNote:
      "Akses live aplikasi memerlukan autentikasi Google Sign-In internal workspace.",
  },
  {
    id: "thirteen-project",
    title: "Thirteen Project",
    subtitle: "Katalog & Portofolio Klien",
    role: "Web Developer",
    description:
      "Website katalog layanan dan portofolio visual untuk mendukung kebutuhan branding dan presentasi klien korporat/B2B otomotif premium.",
    websiteUrl: "https://thirteenproject.vercel.app",
    coverScreenshot:
      "/assets/Tangkapan%20Layar%20Proyek%20Thirteen%20Project.png",
    screenshots: [
      "/assets/Tangkapan%20Layar%20Proyek%20Thirteen%20Project.png",
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
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Sales Management Certification",
    issuer: "HubSpot Academy",
    period: "Okt 2026 – Nov 2028",
  },
  {
    id: "cert-2",
    title: "HubSpot Sales Hub Software Certified",
    issuer: "HubSpot Academy",
    period: "Jun 2026 – Jul 2027",
  },
  {
    id: "cert-3",
    title: "Boosting MSME Growth through AI",
    issuer: "Hacktiv8, Google.org & ADB",
    period: "Nov 2025",
  },
  {
    id: "cert-4",
    title: "Vibe Coding: AI App for Students",
    issuer: "Ruangguru Engineering Academy+",
    period: "Okt 2026",
  },
  {
    id: "cert-5",
    title: "Introduction to Digital Marketing",
    issuer: "Classpedia",
    period: "Okt 2026",
  },
  {
    id: "cert-6",
    title: "Financial Literacy and Job Readiness",
    issuer: "DBS Foundation & Plan Int.",
    period: "Sep 2026",
  },
];

export const CONTACT_DATA = {
  headline: "Siap Memimpin Pertumbuhan Tim dan Target Bisnis Anda Berikutnya.",
  subheadline:
    "Mari jadwalkan diskusi singkat untuk membahas bagaimana kombinasi kepemimpinan penjualan, manajemen risiko, dan inisiatif digital saya dapat memberikan kontribusi nyata bagi perusahaan Anda.",
  channels: [
    {
      label: "Chat via WhatsApp",
      sublabel: "0852-0660-2391",
      href: "https://wa.me/6285206602391",
      iconName: "whatsapp" as const,
    },
    {
      label: "Kirim Email",
      sublabel: "anggaramadhan538@gmail.com",
      href: "mailto:anggaramadhan538@gmail.com",
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
  { id: "profile", label: "Profil Eksekutif", shortLabel: "Profil" },
  { id: "career", label: "Rekam Jejak Karir", shortLabel: "Karir" },
  { id: "projects", label: "Inisiatif Digital", shortLabel: "Proyek" },
  { id: "credentials", label: "Pendidikan & Sertifikasi", shortLabel: "Kredensial" },
  { id: "contact", label: "Kontak & Diskusi", shortLabel: "Kontak" },
] as const;
