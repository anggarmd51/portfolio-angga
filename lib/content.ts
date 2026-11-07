export type CompanyLogoKey =
  | "nusawork"
  | "dretail"
  | "clipan"
  | "acc"
  | "bankmega"
  | "cnaf";

export interface ArchitectureStep {
  step: string;
  title: string;
  desc: string;
  metric: string;
  icon: "ShieldCheck" | "Compass" | "TrendingUp" | "Users";
}

export interface KpiBentoItem {
  metric: string;
  badge: string;
  label: string;
  role: string;
  company: string;
  period: string;
  featured?: boolean;
}

export const hero = {
  eyebrow: "B2B Sales · Business Development · Risk & SaaS",
  headline: ["Menjual dengan hitungan risiko.", "Membangun produk sendiri."],
  sub: "Saya Angga, praktisi B2B Sales, Business Development, dan Account Management di Medan. Selama 7+ tahun saya membangun pertumbuhan revenue dari survei risiko kredit di lapangan, perbankan, hingga memimpin akuisisi klien SaaS HRIS dan POS—sekaligus membangun perkakas web & CRM sendiri.",
  ctaPrimary: "Lihat Bukti & Studi Kasus",
  ctaSecondary: "Diskusi via WhatsApp / Email",
  proof: [
    {
      head: "100% target penjualan (Rp 50 juta)",
      sub: "Account Manager, HRIS Nusawork",
    },
    {
      head: "20+ merchant baru tiap bulan",
      sub: "Business Development Manager, POS Dretail, bersama 3 BDO",
    },
    {
      head: "Retensi bulanan 90%+",
      sub: "Customer Retention Syariah, Astra Sedaya Finance",
    },
  ],
  architectureSteps: [
    {
      step: "01",
      title: "Credit & Risk Screening",
      desc: "Verifikasi lapangan, analisis kelayakan usaha/debitur, dan pengendalian NPL secara disiplin.",
      metric: "NPL Terkendali",
      icon: "ShieldCheck",
    },
    {
      step: "02",
      title: "B2B Pipeline & Discovery",
      desc: "Pemetaan prospek mandiri, kualifikasi kebutuhan operasional HR, retail, dan pengambil keputusan C-level.",
      metric: "Full-Cycle Funnel",
      icon: "Compass",
    },
    {
      step: "03",
      title: "High-Stakes Closing",
      desc: "Demo solusi produk, negosiasi nilai komersial, dan eksekusi penutupan kontrak korporat maupun UMKM.",
      metric: "100% Target / Rp 50 Jt",
      icon: "TrendingUp",
    },
    {
      step: "04",
      title: "Onboarding & Retention",
      desc: "Pendampingan implementasi pasca-penjualan, layanan purna jual, dan menjaga loyalitas akun aktif.",
      metric: "90%+ Retensi Bulanan",
      icon: "Users",
    },
  ] satisfies ArchitectureStep[],
  kpiBento: [
    {
      metric: "100%",
      badge: "Rp 50 Juta Revenue",
      label: "Target Penjualan Tercapai",
      role: "Account Manager — SaaS HRIS Nusawork",
      company: "PT Media Antar Nusa, Medan",
      period: "Okt 2025 – Jun 2026",
      featured: true,
    },
    {
      metric: "20+",
      badge: "Memimpin 3 BDO",
      label: "Merchant Aktif Baru / Bulan",
      role: "Business Development Manager — POS Dretail",
      company: "PT Sarana Digital Retail, Medan",
      period: "Mar 2025 – Okt 2025",
      featured: false,
    },
    {
      metric: "90%+",
      badge: "Kepatuhan Syariah",
      label: "Retensi Nasabah Bulanan",
      role: "Customer Retention Syariah (Talangan Haji)",
      company: "PT Astra Sedaya Finance (ACC), Medan",
      period: "Mei 2023 – Apr 2024",
      featured: false,
    },
    {
      metric: "7+ Thn",
      badge: "2019 – 2026",
      label: "Transisi Risiko Kredit ke SaaS B2B",
      role: "7 Posisi Karir Progresif",
      company: "Multifinance · Perbankan · SaaS B2B",
      period: "Medan, Sumatera Utara",
      featured: false,
    },
  ] satisfies KpiBentoItem[],
  stripCaption: "Perjalanan karier terverifikasi, 2019 sampai 2026",
  stripTransition: "Mulai Era SaaS B2B",
};

export interface CorporateFootprintItem {
  key: CompanyLogoKey;
  name: string;
  shortName: string;
  sector: string;
  period: string;
}

export const corporateFootprint: CorporateFootprintItem[] = [
  {
    key: "nusawork",
    name: "PT Media Antar Nusa (Nusawork)",
    shortName: "Nusawork HRIS",
    sector: "Enterprise SaaS HRIS",
    period: "2025–2026",
  },
  {
    key: "dretail",
    name: "PT Sarana Digital Retail (Dretail)",
    shortName: "Dretail POS",
    sector: "SaaS POS Retail & F&B",
    period: "2025",
  },
  {
    key: "clipan",
    name: "PT Clipan Finance Indonesia Tbk",
    shortName: "Clipan Finance",
    sector: "Multifinance & Kredit",
    period: "2024–2025",
  },
  {
    key: "acc",
    name: "PT Astra Sedaya Finance (ACC)",
    shortName: "Astra Credit (ACC)",
    sector: "Multifinance & Syariah",
    period: "2019–2024",
  },
  {
    key: "bankmega",
    name: "PT Bank Mega Tbk",
    shortName: "Bank Mega",
    sector: "Perbankan & Card Funding",
    period: "2022–2023",
  },
  {
    key: "cnaf",
    name: "PT CIMB Niaga Auto Finance",
    shortName: "CIMB Niaga Auto",
    sector: "Pembiayaan Otomotif",
    period: "2021–2022",
  },
];

export const executiveThesis = {
  eyebrow: "Prinsip Eksekusi Komersial",
  quote:
    "Penjualan B2B yang sehat tidak berhenti saat kontrak ditandatangani—tetapi saat risiko kredit terkendali dan klien benar-benar memakai produknya.",
  sub: "Berangkat dari disiplin survei kelayakan kredit di Astra Sedaya Finance dan Clipan Finance hingga memimpin ekspansi SaaS di Dretail dan Nusawork, saya memadukan ketajaman komersial lapangan dengan sistem kerja digital yang presisi.",
};

export interface SkillBentoItem {
  id: string;
  label: string;
  text: string;
  colSpan: string;
  dark: boolean;
  icon: "TrendingUp" | "Users" | "ShieldCheck" | "Cpu";
  tags: string[];
  proof: string;
}

export const skills: SkillBentoItem[] = [
  {
    id: "sales-pipeline",
    label: "Penjualan & Ekspansi Pipeline B2B",
    text: "Penjualan B2B dan B2C, lead generation mandiri, manajemen pipeline dan funnel, presentasi solusi ke C-level, negosiasi komersial sampai closing, social selling, dan ekspansi pasar regional.",
    colSpan: "lg:col-span-7",
    dark: false,
    icon: "TrendingUp",
    tags: [
      "B2B & B2C Sales Strategy",
      "Full-Cycle Pipeline",
      "C-Level Product Demo",
      "Negotiation & Closing",
      "Market Expansion",
      "Social Selling & Referral",
    ],
    proof:
      "Bukti: Mencapai 100% target penjualan (Rp 50 Juta) di HRIS Nusawork & akuisisi 20+ merchant baru/bulan di POS Dretail.",
  },
  {
    id: "account-retention",
    label: "Key Account Management & Retensi",
    text: "Pengelolaan akun strategis, retensi nasabah bernilai tinggi, layanan purna jual, pendampingan onboarding klien enterprise baru, serta kepemimpinan dan coaching tim sales lapangan.",
    colSpan: "lg:col-span-5",
    dark: false,
    icon: "Users",
    tags: [
      "Key Account Management (KAM)",
      "Enterprise Client Onboarding",
      "Customer Retention",
      "Sales Team Coaching (3 BDO)",
      "After-Sales Service",
    ],
    proof:
      "Bukti: Mempertahankan 90%+ retensi bulanan nasabah pembiayaan syariah di ACC & mengawal implementasi klien HRIS.",
  },
  {
    id: "credit-risk",
    label: "Analisis Kredit & Mitigasi Risiko",
    text: "Analisis kelayakan kredit komprehensif, pengendalian rasio NPL, survei dan verifikasi fisik di lapangan, serta konsultasi produk pembiayaan berbasis kepatuhan syariah.",
    colSpan: "lg:col-span-5",
    dark: false,
    icon: "ShieldCheck",
    tags: [
      "Credit Worthiness Analysis",
      "NPL Control & Mitigation",
      "Field Survey & Verification",
      "Sharia Financing Compliance",
      "Dealer & Partner Relations",
    ],
    proof:
      "Bukti: Menjaga kualitas portofolio kredit tetap sehat dengan NPL terkendali di Clipan Finance & Astra Sedaya Finance.",
  },
  {
    id: "crm-tech",
    label: "CRM Architecture & AI-Assisted Builder",
    text: "Pengelolaan HubSpot Sales Hub, analitik dasbor CRM dan pipeline modern, Microsoft Excel tingkat mahir, serta kemampuan membangun web aplikasi dan PWA pendukung penjualan secara mandiri.",
    colSpan: "lg:col-span-7",
    dark: true,
    icon: "Cpu",
    tags: [
      "HubSpot Sales Hub Certified",
      "CRM Pipeline Analytics",
      "AI-Assisted Web Development",
      "React & Next.js Builder",
      "Advanced Excel & Reporting",
    ],
    proof:
      "Bukti: Merancang dan merilis AR CRM App (PWA pelacak prospek B2B) serta portal LokerResmi.id secara independen.",
  },
];

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  category: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "Sales Management Certification",
    issuer: "HubSpot Academy",
    date: "Okt 2026 – Nov 2028",
    category: "Sales Leadership",
  },
  {
    name: "HubSpot Sales Hub Software Certified",
    issuer: "HubSpot Academy",
    date: "Jun 2026 – Jul 2027",
    category: "CRM & Pipeline Tech",
  },
  {
    name: "Boosting MSME Growth through AI",
    issuer: "Hacktiv8 Indonesia, Google.org, dan Asian Development Bank",
    date: "Nov 2025",
    category: "AI for Business Growth",
  },
  {
    name: "Vibe Coding: Building AI Application for Students",
    issuer: "Ruangguru Engineering Academy+",
    date: "Okt 2026",
    category: "Product Engineering",
  },
  {
    name: "Introduction to Digital Marketing",
    issuer: "Classpedia",
    date: "Okt 2026",
    category: "Growth & Acquisition",
  },
  {
    name: "Financial Literacy and Job Readiness (You RISE)",
    issuer: "DBS Foundation dan Plan International",
    date: "Sep 2026",
    category: "Financial Advisory",
  },
];

export const experienceIntro =
  "Rekam jejak progresif selama 7+ tahun: dimulai dari disiplin verifikasi risiko kredit di lapangan pada 2019, berkembang ke akuisisi perbankan & multifinance, hingga memimpin ekspansi SaaS B2B.";

export interface RoleItem {
  id: number;
  year: string;
  period: string;
  title: string;
  company: string;
  companyLogo: CompanyLogoKey;
  sector: string;
  impactBadge: string;
  summary: string;
  detail: string;
  highlights: string[];
}

export const roles: RoleItem[] = [
  {
    id: 1,
    year: "2025 – 2026",
    period: "Okt 2025 – Jun 2026",
    title: "Account Manager (SaaS HRIS Nusawork)",
    company: "PT Media Antar Nusa, Medan",
    companyLogo: "nusawork",
    sector: "B2B SaaS HRIS",
    impactBadge: "100% Target / Rp 50 Juta",
    summary:
      "Mengelola siklus penuh penjualan B2B sistem HRIS Nusawork ke perusahaan di Sumatera Utara, dari prospecting mandiri hingga penutupan kontrak.",
    detail:
      "Saya membangun daftar prospek sendiri, memetakan titik masalah administrasi HR klien, lalu mendemokan solusi produk secara langsung ke jajaran HR Manager dan C-level. Target penjualan tercapai 100% senilai Rp 50 juta. Pasca-penjualan, saya mengawal proses onboarding klien baru agar sistem benar-benar diadopsi secara berkelanjutan.",
    highlights: [
      "Mencapai 100% target penjualan dengan total nilai kontrak Rp 50 Juta",
      "Menjalankan end-to-end B2B sales cycle: cold outreach, discovery, live product demo ke HR & C-Level, hingga negosiasi kontrak",
      "Memimpin proses onboarding dan layanan purna jual untuk memastikan retensi dan adopsi sistem HRIS oleh klien baru",
    ],
  },
  {
    id: 2,
    year: "2025",
    period: "Mar 2025 – Okt 2025",
    title: "Business Development Manager (SaaS POS Dretail)",
    company: "PT Sarana Digital Retail, Medan",
    companyLogo: "dretail",
    sector: "B2B SaaS POS Retail & F&B",
    impactBadge: "20+ Merchant Baru / Bulan",
    summary:
      "Memimpin 3 Business Development Officer (BDO) untuk memperluas adopsi sistem kasir cloud Dretail pada segmen bisnis retail dan F&B di Medan.",
    detail:
      "Tim yang saya pimpin secara konsisten meng-onboard 20+ merchant baru setiap bulan. Selain mengarahkan strategi akuisisi lapangan dan coaching tim BDO, saya menganalisis kebutuhan operasional tiap merchant untuk merancang bundel perangkat keras dan lisensi POS yang paling efisien.",
    highlights: [
      "Memimpin, melatih, dan memonitor performa harian 3 Business Development Officer (BDO)",
      "Mengakuisisi dan meng-onboard 20+ merchant retail & F&B baru secara konsisten setiap bulan",
      "Merancang rekomendasi paket perangkat keras & lisensi SaaS POS yang presisi sesuai skala operasional merchant",
    ],
  },
  {
    id: 3,
    year: "2024 – 2025",
    period: "Mei 2024 – Feb 2025",
    title: "Credit Marketing Officer",
    company: "PT Clipan Finance Indonesia, Medan",
    companyLogo: "clipan",
    sector: "Multifinance & Asset Financing",
    impactBadge: "NPL Terkendali & Target Tercapai",
    summary:
      "Mengakuisisi calon debitur baru sekaligus melakukan penilaian kelayakan kredit mendalam untuk pembiayaan kendaraan dan aset produktif.",
    detail:
      "Saya merawat kemitraan aktif dengan jaringan dealer dan showroom agar aliran aplikasi pembiayaan masuk secara konsisten. Seluruh pengajuan diverifikasi melalui survei lapangan dan analisis kapasitas bayar yang ketat sehingga rasio kredit macet (NPL) tetap terjaga di bawah batas aman perusahaan.",
    highlights: [
      "Menggabungkan ekspansi akuisisi kredit dengan analisis kelayakan risiko (5C) secara seimbang",
      "Menjaga rasio Non-Performing Loan (NPL) tetap di bawah ambang batas melalui survei dan verifikasi lapangan ketat",
      "Memperkuat relasi B2B dengan jaringan showroom dan mitra dealer di wilayah Medan",
    ],
  },
  {
    id: 4,
    year: "2023 – 2024",
    period: "Mei 2023 – Apr 2024",
    title: "Customer Retention Processing Syariah (Talangan Haji)",
    company: "PT Astra Sedaya Finance, Medan",
    companyLogo: "acc",
    sector: "Sharia Multifinance (Astra Group)",
    impactBadge: "90%+ Retensi Bulanan",
    summary:
      "Mengelola portofolio nasabah pembiayaan syariah eksisting (produk unggulan Talangan Haji) untuk program perpanjangan dan pembiayaan ulang.",
    detail:
      "Fokus utama saya adalah memberikan konsultasi pembiayaan syariah yang transparan, memastikan kelengkapan dokumen sesuai standar kepatuhan regulasi, dan menjaga kepuasan nasabah hingga berhasil mempertahankan tingkat retensi bulanan di atas 90%.",
    highlights: [
      "Mencapai tingkat retensi nasabah bulanan sebesar 90%+ secara konsisten",
      "Mengelola konsultasi dan pemberkasan produk pembiayaan syariah (Talangan Haji) sesuai kepatuhan akad",
      "Membangun hubungan jangka panjang berbasis kepercayaan dengan nasabah prioritas Astra Sedaya Finance",
    ],
  },
  {
    id: 5,
    year: "2022 – 2023",
    period: "Nov 2022 – Mei 2023",
    title: "Card Funding Officer",
    company: "PT Bank Mega Tbk, Medan",
    companyLogo: "bankmega",
    sector: "Commercial Banking",
    impactBadge: "Akuisisi Kartu Kredit & DPK",
    summary:
      "Mengakuisisi nasabah baru untuk produk kartu kredit dan Dana Pihak Ketiga (DPK) melalui strategi direct sales, canvassing korporat, dan booth pameran.",
    detail:
      "Saya mengedukasi calon nasabah mengenai manfaat ekosistem CT Corp dan fitur promo perbankan, sekaligus mendampingi verifikasi dokumen pengajuan dari tahap awal hingga kartu dan rekening disetujui.",
    highlights: [
      "Menjalankan akuisisi nasabah baru lewat direct sales, canvassing area komersial, dan event exhibition",
      "Mengedukasi fitur produk kartu kredit & tabungan dengan pendekatan konsultatif sesuai profil finansial nasabah",
      "Mengawal kelengkapan dokumen KYC hingga pengajuan disetujui oleh tim analis perbankan",
    ],
  },
  {
    id: 6,
    year: "2021 – 2022",
    period: "Sep 2021 – Okt 2022",
    title: "Sales Officer",
    company: "PT CIMB Niaga Auto Finance, Medan",
    companyLogo: "cnaf",
    sector: "Automotive Financing",
    impactBadge: "Target Pembiayaan Tercapai",
    summary:
      "Menjual produk pembiayaan kendaraan bermotor melalui kemitraan aktif dengan jaringan showroom dan dealer rekanan di Medan.",
    detail:
      "Target pencairan pembiayaan bulanan tercapai secara konsisten berkat respons cepat terhadap aplikasi dealer dan pendampingan intensif kepada nasabah selama proses persetujuan kredit.",
    highlights: [
      "Mencapai target penjualan pembiayaan kendaraan bulanan melalui kanal dealer dan showroom rekanan",
      "Mempercepat SLA proses pengajuan kredit nasabah melalui koordinasi aktif antara dealer, nasabah, dan tim kredit",
    ],
  },
  {
    id: 7,
    year: "2019 – 2021",
    period: "Okt 2019 – Apr 2021",
    title: "Surveyor",
    company: "PT Astra Sedaya Finance, Medan",
    companyLogo: "acc",
    sector: "Credit Risk & Field Verification",
    impactBadge: "Fondasi Analisis Risiko Kredit",
    summary:
      "Melakukan investigasi dan verifikasi fisik di lapangan terhadap data pemohon kredit, kondisi tempat tinggal, serta kelayakan operasional usaha.",
    detail:
      "Setiap temuan lapangan saya susun menjadi laporan analisis risiko yang objektif beserta rekomendasi persetujuan atau penolakan kredit bagi komite pemutus, membentuk fondasi kuat saya dalam membaca profil risiko bisnis.",
    highlights: [
      "Melaksanakan survei lapangan, wawancara lingkungan, dan validasi keabsahan dokumen calon debitur",
      "Menyusun laporan kelayakan kredit objektif sebagai dasar pengambilan keputusan komite kredit",
    ],
  },
];

export const education = {
  label: "Pendidikan Formal",
  degree: "Ahli Madya (D3) Perbankan Syariah",
  institution: "Universitas Islam Negeri Sumatera Utara (UINSU), Medan",
  year: "Lulus 2019",
  gpa: "IPK 3,26 / 4,00",
  text: "D3 Perbankan Syariah, UIN Sumatera Utara, lulus 2019, IPK 3,26.",
};

// [KONFIRMASI] visible: false sampai dikonfirmasi
export const roleCandidate = {
  id: 0,
  visible: false,
  year: "2026",
  period: "Jul 2026 – sekarang",
  title: "PIC Project Lending balé by BTN",
  company: "PT Beran Solusindo Pratama",
  summary:
    "Saya memegang proyek pembiayaan digital balé by BTN sebagai PIC dari sisi vendor.",
  detail: "Saya membawahi 1 Team Leader dan 10 sales freelance.",
};

export const projectsIntro =
  "Bukti nyata eksekusi produk dan operasional: mulai dari aplikasi CRM mobile-first yang saya rancang untuk mengakselerasi pipeline penjualan B2B, portal bursa kerja independen, hingga kepemimpinan operasional proyek perbankan digital.";

export type ProjectMockupType = "crm" | "jobportal" | "automotive" | "banking";

export interface ProjectEntry {
  id: string;
  name: string;
  role: string;
  category: string;
  featuredDark?: boolean;
  mockupType: ProjectMockupType;
  description: string;
  challenge: string;
  outcome: string;
  url: string | null;
  stack: string;
  tags: string[];
  stackConfirmed: boolean;
}

export const projects: ProjectEntry[] = [
  {
    id: "ar-crm-app",
    name: "AR CRM App",
    role: "Product Creator & Frontend Developer",
    category: "B2B Sales Enablement PWA",
    featuredDark: true,
    mockupType: "crm",
    description:
      "PWA mobile-first yang saya bangun sendiri untuk melacak pipeline penjualan pribadi, mencatat aktivitas follow-up prospek B2B, dan mempercepat prospecting di lapangan.",
    challenge:
      "Sales lapangan membutuhkan pencatatan prospek B2B yang instan dari smartphone tanpa hambatan spreadsheet yang rumit.",
    outcome:
      "Memangkas waktu administrasi harian sales sekaligus memastikan tidak ada jadwal follow-up klien B2B yang terlewat.",
    url: "https://arcrmapp.vercel.app/",
    stack: "React, TypeScript, Tailwind CSS, Firebase",
    tags: ["React", "TypeScript", "Tailwind CSS", "PWA Mobile-First", "Sales Pipeline"],
    stackConfirmed: true,
  },
  {
    id: "lokerresmi-id",
    name: "LokerResmi.id",
    role: "Web Developer & Inisiator Proyek",
    category: "Verified Job Exchange Platform",
    featuredDark: false,
    mockupType: "jobportal",
    description:
      "Platform bursa lowongan kerja terverifikasi yang saya rancang dan bangun secara independen untuk menghubungkan pencari kerja dengan informasi karier yang kredibel.",
    challenge:
      "Banyaknya informasi lowongan kerja yang tidak terstruktur dan sulit diverifikasi oleh pencari kerja daerah.",
    outcome:
      "Menyajikan direktori lowongan kerja terstruktur dengan pencarian cepat, filter kategori, dan antarmuka bersih yang mudah diakses.",
    url: "https://lokerresmi.vercel.app",
    stack: "Next.js, React, Tailwind CSS, Vercel",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel", "Full-Stack Portal"],
    stackConfirmed: true,
  },
  {
    id: "thirteen-project",
    name: "Thirteen Project",
    role: "Web Developer (Katalog & Portofolio Klien)",
    category: "Commercial Brand & Catalog Web",
    featuredDark: false,
    mockupType: "automotive",
    description:
      "Website katalog produk dan portofolio layanan profesional untuk bisnis modifikasi dan pencahayaan otomotif guna meningkatkan konversi konsultasi pelanggan.",
    challenge:
      "Klien membutuhkan etalase digital yang mampu menampilkan hasil pengerjaan custom otomotif secara meyakinkan kepada calon pelanggan baru.",
    outcome:
      "Meningkatkan kredibilitas visual brand dan mempermudah calon pelanggan memilih paket layanan sebelum berkonsultasi.",
    url: "https://thirteenproject.vercel.app",
    stack: "React, Tailwind CSS, Vercel",
    tags: ["React", "Tailwind CSS", "Vercel", "Digital Catalog", "Client Project"],
    stackConfirmed: true,
  },
  {
    id: "lending-bale-btn",
    name: "Lending balé by BTN",
    role: "PIC Project (PT Beran Solusindo Pratama)",
    category: "Digital Banking Acquisition Operations",
    featuredDark: false,
    mockupType: "banking",
    description:
      "Memimpin dan mengelola operasional lapangan proyek akuisisi pembiayaan digital balé by BTN sebagai Person in Charge (PIC) dari sisi perusahaan mitra vendor.",
    challenge:
      "Mengkoordinasikan eksekusi akuisisi produk perbankan digital di lapangan agar memenuhi target kuantitas sekaligus kepatuhan verifikasi.",
    outcome:
      "Mengelola struktur tim penjualan lapangan (Team Leader & tim sales) dengan pemantauan pipeline harian yang terukur.",
    url: null,
    stack: "Project Operations, Field Team Leadership, Digital Lending Acquisition",
    tags: ["PIC Project", "Digital Banking", "Team Leadership", "B2B Vendor Ops"],
    stackConfirmed: true,
  },
];

export const contact = {
  eyebrow: "Mari Berdiskusi",
  heading:
    "Siap mendorong pertumbuhan revenue B2B atau berdiskusi tentang peluang strategis di tim Anda?",
  sub: "Saya terbuka untuk peran kepemimpinan dan eksekusi di bidang B2B Sales, Business Development, Account Management, maupun kolaborasi proyek komersial di Medan dan seluruh Indonesia.",
  recruiterCard: {
    badge: "Jalur Rekrutmen & Eksekutif",
    title: "Untuk HRD, Recruiter & VP of Sales",
    desc: "Diskusikan kebutuhan ekspansi pasar, pengelolaan akun enterprise/UMKM, atau undang saya untuk sesi wawancara langsung.",
  },
  partnerCard: {
    badge: "Jejaring & Kolaborasi Bisnis",
    title: "Untuk Kemitraan B2B & Koneksi Profesional",
    desc: "Terhubung melalui LinkedIn untuk jejaring industri atau tinjau repositori eksperimen produk web saya di GitHub.",
  },
  email: "anggaramadhan538@gmail.com",
  whatsappHref: "https://wa.me/6285206602391",
  whatsappText: "+62 852-0660-2391",
  location: "Medan, Sumatera Utara, Indonesia",
  links: [
    {
      label: "LinkedIn",
      text: "linkedin.com/in/anggarmd",
      href: "https://linkedin.com/in/anggarmd",
      desc: "Profil karier lengkap, rekam jejak B2B & sertifikasi resmi",
    },
    {
      label: "GitHub",
      text: "github.com/anggarmd51",
      href: "https://github.com/anggarmd51",
      desc: "Repositori kode sumber proyek web & eksperimen aplikasi",
    },
  ],
  footer: "© 2026 Muhammad Angga Ramadhan · Medan, Sumatera Utara, Indonesia.",
};
