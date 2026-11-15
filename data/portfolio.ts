export interface FloatingBadge {
  text: string;
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
  coreDevelopment: string;
  industry?: string;
  location?: string;
  isCurrentRole?: boolean;
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
  businessProblem: string;
  solution: string;
  myContribution: string;
  websiteUrl: string;
  screenshots: ProjectScreenshot[];
  coverScreenshot: string;
  socials?: { platform: string; url: string }[];
  accessNote?: string;
  objective: string;
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
  eyebrow: "B2B SALES · BUSINESS DEVELOPMENT · ACCOUNT MANAGEMENT",
  name: "Muhammad Angga Ramadhan",
  secondaryName: "(Angga)",
  tagline: "Driving Business Growth Through Strategic B2B Sales & Account Management.",
  subTagline:
    "Mengembangkan peluang bisnis, mengelola hubungan strategis dengan klien, dan mengoptimalkan proses penjualan melalui pendekatan konsultatif serta pemanfaatan teknologi.",
  portraitUrl: "/muhammad-angga-ramadhan-profile.png",
  floatingBadges: [{ text: "Account Manager · Wavecomindo" }],
  ctaPrimary: {
    label: "Lihat Pengalaman",
    href: "#career",
  },
  ctaSecondary: {
    label: "Diskusikan Peluang",
    href: "#contact",
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
    id: "role-wavecomindo",
    company: "PT Wave Communication Indonesia (Wavecomindo)",
    role: "Account Manager",
    period: "Okt 2026 – Sekarang",
    logo: "/assets/wavecomindo-monogram.svg",
    logoAlt: "Monogram ilustratif Wavecomindo",
    industry: "B2B Connectivity & Enterprise Network",
    location: "Medan, Sumatera Utara",
    isCurrentRole: true,
    bullets: [
      "Mengelola siklus penjualan B2B dan pengembangan akun korporasi untuk solusi konektivitas internet dedicated serta infrastruktur jaringan bisnis di wilayah Medan.",
      "Melakukan pemetaan kebutuhan teknis bersama tim IT dan manajemen klien, menyusun proposal komersial, serta memimpin negosiasi kontrak layanan.",
      "Mengawal proses onboarding instalasi bersama tim teknis serta menjaga retensi dan hubungan strategis jangka panjang dengan klien.",
    ],
    coreDevelopment: "Menautkan kebutuhan jaringan korporasi dengan proposal komersial, koordinasi instalasi, onboarding, dan retensi akun.",
  },
  {
    id: "role-1",
    company: "PT Media Antar Nusa (Nusawork HRIS)",
    role: "Account Manager",
    period: "Okt 2025 – Jun 2026",
    logo: "/assets/PT%20Media%20Antar%20Nusa%20(Nusawork%20HRIS).jpg",
    logoAlt: "Logo PT Media Antar Nusa - Nusawork HRIS",
    industry: "B2B SaaS · HRIS",
    bullets: [
      "Memetakan akun B2B dan mengkualifikasi kebutuhan operasional bersama HR Manager serta Kepala Operasional, lalu mendemonstrasikan Nusawork HRIS kepada calon klien.",
      "Menyusun penawaran dan bernegosiasi dengan pengambil keputusan hingga penutupan kontrak.",
      "Mendampingi onboarding bersama tim teknis sampai klien mulai menggunakan sistem HRIS.",
    ],
    coreDevelopment: "Mengembangkan keterampilan discovery, demo HRIS, negosiasi dengan pengambil keputusan, dan pendampingan onboarding.",
  },
  {
    id: "role-2",
    company: "PT Sarana Digital Retail (Dretail POS)",
    role: "Business Development Manager",
    period: "Apr 2024 – Okt 2025",
    logo: "/assets/PT%20Sarana%20Digital%20Retail%20(Dretail%20POS).png",
    logoAlt: "Logo PT Sarana Digital Retail - Dretail POS",
    industry: "B2B SaaS · Retail POS",
    bullets: [
      "Mengoordinasi penjualan POS Dretail bersama tim Business Development Officer untuk merchant ritel dan F&B di Medan dan sekitarnya.",
      "Berdiskusi dengan pemilik bisnis dan pengelola operasional, mendemonstrasikan sistem POS, serta menyusun penawaran komersial.",
      "Mendampingi implementasi awal pada merchant baru dan menjaga tindak lanjut setelah penerapan.",
    ],
    coreDevelopment: "Mengoordinasikan tim akuisisi dan memperkuat proses demo POS, penawaran komersial, onboarding merchant, serta tindak lanjut.",
  },
  {
    id: "role-3",
    company: "PT Astra Sedaya Finance (Astra Credit Companies)",
    role: "Customer Retention Processing Syariah",
    period: "Mei 2023 – Apr 2024",
    logo: "/assets/PT%20Astra%20Sedaya%20Finance%20(Astra%20Credit%20Companies).webp",
    logoAlt: "Logo PT Astra Sedaya Finance - ACC",
    industry: "Pembiayaan · Layanan Syariah",
    bullets: [
      "Mendampingi nasabah existing untuk kebutuhan produk pembiayaan syariah (Talangan Haji) dan menindaklanjuti pertanyaan layanan.",
      "Menangani pengajuan pembiayaan ulang (repeat order/refinancing) serta memeriksa kelengkapan dokumen administrasi.",
      "Melakukan tindak lanjut kepada nasabah sesuai proses layanan dan ketentuan pembiayaan yang berlaku.",
    ],
    coreDevelopment: "Mendalami layanan nasabah existing, administrasi pembiayaan syariah, dan tindak lanjut repeat order/refinancing.",
  },
  {
    id: "role-4",
    company: "PT Bank Mega Tbk",
    role: "Card Funding Officer",
    period: "Nov 2022 – Mei 2023",
    logo: "/assets/PT%20Bank%20Mega%20Tbk.png",
    logoAlt: "Logo PT Bank Mega Tbk",
    industry: "Perbankan · Akuisisi Produk",
    bullets: [
      "Menangani akuisisi nasabah untuk produk kartu kredit dan dana pihak ketiga melalui direct sales, canvassing, serta booth event.",
      "Menjelaskan fitur produk, manfaat promosi, dan ketentuan kepada calon nasabah.",
      "Mengawal kelengkapan berkas pengajuan untuk proses verifikasi dan persetujuan.",
    ],
    coreDevelopment: "Mengasah akuisisi melalui direct sales, canvassing, dan event, disertai penjelasan produk serta kelengkapan pengajuan.",
  },
  {
    id: "role-5",
    company: "PT CIMB Niaga Auto Finance (CNAF)",
    role: "Sales Officer",
    period: "Sep 2021 – Okt 2022",
    logo: "/assets/PT%20CIMB%20Niaga%20Auto%20Finance%20(CNAF).png",
    logoAlt: "Logo PT CIMB Niaga Auto Finance - CNAF",
    industry: "Pembiayaan Otomotif",
    bullets: [
      "Mempromosikan produk pembiayaan otomotif kepada calon debitur di Medan.",
      "Mengoordinasi pengajuan pembiayaan dengan showroom dan dealer rekanan serta mendampingi pengumpulan dokumen.",
      "Menindaklanjuti aplikasi pembiayaan selama proses verifikasi hingga keputusan.",
    ],
    coreDevelopment: "Membangun pengalaman penjualan pembiayaan otomotif melalui relasi dealer, pengumpulan dokumen, dan tindak lanjut aplikasi.",
  },
  {
    id: "role-6",
    company: "PT Astra Sedaya Finance (Astra Credit Companies)",
    role: "Surveyor",
    period: "Okt 2019 – Apr 2021",
    logo: "/assets/PT%20Astra%20Sedaya%20Finance%20(Astra%20Credit%20Companies).webp",
    logoAlt: "Logo PT Astra Sedaya Finance - ACC Surveyor",
    industry: "Pembiayaan Konsumen · Analisis Kredit",
    bullets: [
      "Melakukan survei lapangan terhadap calon debitur.",
      "Memverifikasi informasi calon debitur, termasuk alamat tempat tinggal dan kapasitas usaha.",
      "Menyusun laporan hasil survei sebagai bahan pertimbangan proses analisis dan keputusan kredit.",
    ],
    coreDevelopment: "Membangun fondasi analisis kredit melalui survei lapangan, verifikasi informasi, dan pelaporan untuk proses keputusan.",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "arcrm",
    title: "AR CRM",
    subtitle: "Personal B2B Sales Pipeline Application",
    role: "Inisiator Produk & Pengembang",
    businessProblem:
      "Pencatatan prospek, tahapan pipeline, dan tindak lanjut penjualan masih tersebar pada spreadsheet manual.",
    objective:
      "Mendigitalisasi pencatatan prospek, jadwal follow-up, dan riwayat interaksi untuk alur penjualan B2B harian.",
    myContribution:
      "Menginisiasi produk, merancang workflow pipeline dan aktivitas penjualan, serta mengembangkan aplikasi berbantuan AI.",
    solution:
      "CRM internal berbasis PWA dengan Google Sign-In workspace, database prospek, pipeline Kanban, Leads Finder, dan log aktivitas.",
    techStack: ["Firebase", "Progressive Web App"],
    status: "Personal Project",
    websiteUrl: "https://arcrmapp.vercel.app/",
    coverScreenshot: "/assets/arcrm-dashboard-sanitized.png",
    screenshots: [
      {
        src: "/assets/arcrm-dashboard-sanitized.png",
        title: "Dashboard AR CRM",
        caption:
          "Tangkapan layar asli dashboard forecast dan pengingat follow-up. Identitas akun dan nominal disamarkan untuk privasi.",
      },
      {
        src: "/assets/arcrm-pipeline-sanitized.png",
        title: "Pipeline Kanban AR CRM",
        caption:
          "Tangkapan layar asli papan pipeline Kanban pada workspace kosong. Nominal disamarkan untuk privasi.",
      },
      {
        src: "/assets/arcrm-leads-finder-sanitized.png",
        title: "Leads Finder AR CRM",
        caption:
          "Tangkapan layar asli antarmuka riset prospek dan filter jabatan, tanpa menampilkan hasil pencarian atau kontak pribadi.",
      },
      {
        src: "/assets/arcrm-activities-sanitized.png",
        title: "Field Activities AR CRM",
        caption:
          "Tangkapan layar asli daftar aktivitas dan filter check-in pada workspace kosong, tanpa catatan bisnis pribadi.",
      },
    ],
    accessNote:
      "Akses live aplikasi memerlukan autentikasi Google Sign-In internal workspace.",
  },
  {
    id: "lokerresmi",
    title: "LokerResmi.id",
    subtitle: "Platform Direktori Bursa Kerja Terstruktur",
    role: "Inisiator Proyek & Web Developer",
    businessProblem:
      "Informasi lowongan kerja tersebar dan sulit dibandingkan menurut posisi, lokasi, serta sumber rekrutmen.",
    objective:
      "Menyatukan informasi lowongan ke dalam antarmuka terstruktur yang mudah dicari dan difilter.",
    myContribution:
      "Menginisiasi produk, merancang arsitektur direktori dan alur pencarian, serta mengembangkan website berbantuan AI.",
    solution:
      "Direktori lowongan dengan pemetaan posisi, filter kategori dan wilayah, halaman detail berbasis Supabase, serta sumber rekrutmen yang transparan.",
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
    id: "thirteen-project",
    title: "Thirteen Project",
    subtitle: "Katalog Layanan & Etalase Digital Otomotif",
    role: "Web Developer",
    businessProblem:
      "Informasi layanan perawatan otomotif, galeri hasil pengerjaan, dan inventori kendaraan membutuhkan etalase digital yang mudah diakses.",
    objective:
      "Meningkatkan kredibilitas visual bengkel dan mempermudah konsultasi maupun pemesanan jadwal via WhatsApp.",
    myContribution:
      "Menyusun struktur katalog layanan, portofolio, dan inventori kendaraan serta mengembangkan website berbantuan AI.",
    solution:
      "Katalog web responsif berisi spesifikasi layanan, galeri hasil pengerjaan, etalase stok kendaraan, dan integrasi kontak langsung.",
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
    url: "/assets/sertifikat/Hubspot%20Academy%20-%20Sales%20Management.webp",
  },
  {
    id: "cert-2",
    title: "HubSpot Sales Hub Software Certified",
    issuer: "HubSpot Academy",
    period: "Jun 2026 – Jul 2027",
    validity: "Jun 2026 – Jul 2027",
    url: "/assets/sertifikat/HubSpot%20Academy%20-%20Sales%20Hub%20Software.webp",
  },
  {
    id: "cert-3",
    title: "Boosting MSME Growth through AI",
    issuer: "Hacktiv8, Google.org & ADB",
    period: "Nov 2025",
    url: "/assets/sertifikat/Hacktiv8%20-%20Boosting%20MSME%20Growth%20through%20AI.webp",
  },
  {
    id: "cert-4",
    title: "Sales Forecasting",
    issuer: "HP LIFE (HP Foundation)",
    period: "Oktober 2026",
    url: "/assets/sertifikat/Certificate%20of%20Completion%20-%20HP%20LIFE.webp",
  },
  {
    id: "cert-5",
    title: "Frictionless Sales Certified",
    issuer: "HubSpot Academy",
    period: "Okt 2026",
    url: "/assets/sertifikat/Hubspot%20Academy%20-%20Frictionless%20Sales.webp",
  },
  {
    id: "cert-6",
    title: "Financial Literacy and Job Readiness",
    issuer: "DBS Foundation & Plan Int.",
    period: "Sep 2026",
    url: "/assets/sertifikat/Muhammad%20Angga%20Ramadhan%20-%20Sertifikat%20Financial%20Literasi.webp",
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
  footer: "© 2026 Muhammad Angga Ramadhan",
};

export const NAVIGATION_SECTIONS = [
  { id: "home", label: "Beranda", shortLabel: "Home" },
  { id: "profile", label: "Profil", shortLabel: "Profil" },
  { id: "competencies", label: "Kompetensi", shortLabel: "Keahlian" },
  { id: "career", label: "Riwayat Kerja", shortLabel: "Karir" },
  { id: "projects", label: "Proyek", shortLabel: "Proyek" },
  { id: "methodology", label: "Metodologi Penjualan", shortLabel: "Metode" },
  { id: "ecosystem", label: "Ekosistem Digital", shortLabel: "Ekosistem" },
  { id: "credentials", label: "Pendidikan & Sertifikasi", shortLabel: "Kredensial" },
  { id: "contact", label: "Kontak & Diskusi", shortLabel: "Kontak" },
] as const;
