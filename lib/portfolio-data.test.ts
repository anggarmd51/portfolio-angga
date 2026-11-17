import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  HERO_DATA,
  CAREER_ROLES,
  PROJECTS_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  CONTACT_DATA,
  NAVIGATION_SECTIONS,
  SALES_WORKFLOW_STEPS,
  DIGITAL_ECOSYSTEM_CATEGORIES,
} from "../data/portfolio";

const projectRoot = process.cwd();

test("Executive Editorial design tokens, fonts, and protected integrations are present", () => {
  const css = readFileSync(join(projectRoot, "app/globals.css"), "utf8");
  const design = readFileSync(join(projectRoot, "DESIGN.md"), "utf8");
  const layout = readFileSync(join(projectRoot, "app/layout.tsx"), "utf8");
  const page = readFileSync(join(projectRoot, "app/page.tsx"), "utf8");
  for (const token of ["#0A0F18", "#151D29", "#F1F3F5", "#A6B0BD", "#19C69A"]) {
    assert.ok(css.toLowerCase().includes(token.toLowerCase()), `${token} is in the CSS theme`);
    assert.ok(design.toLowerCase().includes(token.toLowerCase()), `${token} is documented`);
  }
  for (const token of ["#F1F4F2", "#FFFFFF", "#0D3B33", "#52625E", "#F2B705"]) {
    assert.ok(css.toLowerCase().includes(token.toLowerCase()), `${token} is available for the light theme`);
  }
  assert.match(layout, /Instrument_Serif, Inter, Manrope/);
  assert.match(css, /--radius-2xl: 14px/);
  assert.match(layout, /process\.env\.VERCEL === "1" \? <Analytics \/> : null/);
  assert.match(layout, /data-theme="dark"/);
  assert.match(page, /<feTurbulence/);
  assert.match(css, /main section\[id\]::before/);
  assert.doesNotMatch(`${css}\n${layout}`, /three\.js|webglrenderer/i);
});

test("navigation contains the five requested English sections and representative anchors", () => {
  assert.equal(NAVIGATION_SECTIONS.length, 5);
  assert.deepEqual(
    NAVIGATION_SECTIONS.map((section) => section.id),
    ["home", "career", "projects", "credentials", "contact"]
  );
  assert.deepEqual(
    NAVIGATION_SECTIONS.map((section) => section.shortLabel),
    ["Home", "Experience", "Projects", "Credentials", "Contact"]
  );
  assert.ok(NAVIGATION_SECTIONS.every((section) => section.label === section.shortLabel));
  assert.equal(NAVIGATION_SECTIONS[1]?.id, "career");
  const navigation = readFileSync(join(projectRoot, "components/SectionNavigation.tsx"), "utf8");
  assert.match(navigation, /href=\{`#\$\{section\.id\}`\}/);
});

test("light and dark semantic theme tokens resolve distinct backgrounds, surfaces, and readable text", () => {
  const css = readFileSync(join(projectRoot, "app/globals.css"), "utf8");
  const recruiterQa = readFileSync(join(projectRoot, "components/RecruiterQASection.tsx"), "utf8");
  const ecosystem = readFileSync(join(projectRoot, "components/DigitalEcosystemSection.tsx"), "utf8");
  const competencies = readFileSync(join(projectRoot, "components/CoreCompetenciesSection.tsx"), "utf8");
  const career = readFileSync(join(projectRoot, "components/CareerSection.tsx"), "utf8");
  assert.match(css, /:root\s*\{[\s\S]*?--page-background:\s*#f1f4f2;[\s\S]*?--surface:\s*#ffffff;[\s\S]*?--text-primary:\s*#0d3b33;[\s\S]*?--text-muted:\s*#52625e;/);
  assert.match(css, /:root:is\(\.dark, \[data-theme="dark"\]\)\s*\{[\s\S]*?--page-background:\s*#0a0f18;[\s\S]*?--surface:\s*#151d29;[\s\S]*?--text-primary:\s*#f1f3f5;[\s\S]*?--text-muted:\s*#a6b0bd;/);
  assert.match(css, /--color-background:\s*var\(--page-background\)/);
  assert.match(css, /--color-surface:\s*var\(--surface\)/);
  assert.match(css, /--color-foreground:\s*var\(--text-primary\)/);
  assert.match(css, /--color-muted-foreground:\s*var\(--text-muted\)/);
  assert.match(css, /--color-white:\s*#ffffff/);
  assert.match(css, /\.dark \*\)\);/);
  assert.match(recruiterQa, /recruiter-qa-panel[\s\S]*bg-surface[\s\S]*text-foreground[\s\S]*text-muted-foreground/);
  assert.match(ecosystem, /digital-tool-card[\s\S]*text-foreground[\s\S]*text-muted-foreground/);
  assert.match(competencies, /competency-strip[\s\S]*text-foreground[\s\S]*text-muted-foreground/);
  assert.match(career, /border-l-2 border-signature-teal\/70 bg-surface/);
});

test("hero uses the approved role copy and keeps portrait fallback assets", () => {
  assert.equal(HERO_DATA.name, "Muhammad Angga Ramadhan");
  assert.equal(HERO_DATA.secondaryName, "(Angga)");
  assert.equal(HERO_DATA.eyebrow, "B2B SALES · BUSINESS DEVELOPMENT · ACCOUNT MANAGEMENT");
  assert.equal(
    HERO_DATA.tagline,
    "Driving Business Growth Through Strategic B2B Sales & Account Management."
  );
  assert.equal(
    HERO_DATA.subTagline,
    "Mengembangkan peluang bisnis, mengelola hubungan strategis dengan klien, dan mengoptimalkan proses penjualan melalui pendekatan konsultatif serta pemanfaatan teknologi."
  );
  assert.equal(HERO_DATA.portraitUrl, "/muhammad-angga-ramadhan-profile.png");
  assert.equal(HERO_DATA.floatingBadges.length, 1);
  assert.ok(existsSync(join(projectRoot, "public/muhammad-angga-ramadhan-profile.png")));
  assert.ok(existsSync(join(projectRoot, "public/profile-placeholder.png")));
});

test("executive profile and core competencies use four verified snapshot facts and editorial rows", () => {
  const profile = readFileSync(join(projectRoot, "components/ExecutiveProfileSection.tsx"), "utf8");
  const competencies = readFileSync(join(projectRoot, "components/CoreCompetenciesSection.tsx"), "utf8");
  for (const fact of [
    "Sejak 2019",
    "7 Peran",
    "B2B & SaaS",
    "3 Produk",
    "Pengalaman Profesional Lintas Industri",
    "Perbankan, Pembiayaan, B2B SaaS & Konektivitas",
    "Spesialisasi Akuisisi, Pipeline & Retensi Akun",
    "Inisiator Aplikasi Web & CRM Mandiri",
  ]) {
    assert.ok(profile.includes(fact), `profile snapshot contains ${fact}`);
  }
  for (const skill of [
    "B2B Sales & Prospecting",
    "Business Development",
    "Account Management & Retention",
    "Sales Operations & CRM",
    "kualifikasi prospek pengambil keputusan",
    "koordinasi tim akuisisi lapangan",
    "retensi dan pertumbuhan akun jangka panjang",
    "pengembangan sistem CRM internal berbantuan AI",
  ]) {
    assert.ok(competencies.includes(skill), `competencies include ${skill}`);
  }
  assert.doesNotMatch(`${profile}\n${competencies}`, /<li[^>]*rounded-|glass-card|flex-wrap gap-2/i);
});

test("B2B sales workflow contains the six approved stages in order", () => {
  assert.deepEqual(
    SALES_WORKFLOW_STEPS.map(({ number, label }) => `${number} ${label}`),
    [
      "01 Prospecting",
      "02 Discovery",
      "03 Solution Demo",
      "04 Commercial & Closing",
      "05 Onboarding",
      "06 Account Retention",
    ]
  );
  assert.ok(
    SALES_WORKFLOW_STEPS.every((step) =>
      [step.objective, step.activity, step.output].every((detail) => detail.trim().length > 0)
    )
  );
});

test("career history places the current Wavecomindo role above the six earlier roles", () => {
  assert.equal(CAREER_ROLES.length, 7);
  assert.deepEqual(
    CAREER_ROLES.map(({ company, role, period }) => [company, role, period]),
    [
      ["PT Wave Communication Indonesia (Wavecomindo)", "Account Manager", "Okt 2026 – Sekarang"],
      ["PT Media Antar Nusa (Nusawork HRIS)", "Account Manager", "Okt 2025 – Jun 2026"],
      ["PT Sarana Digital Retail (Dretail POS)", "Business Development Manager", "Apr 2024 – Okt 2025"],
      ["PT Astra Sedaya Finance (Astra Credit Companies)", "Customer Retention Processing Syariah", "Mei 2023 – Apr 2024"],
      ["PT Bank Mega Tbk", "Card Funding Officer", "Nov 2022 – Mei 2023"],
      ["PT CIMB Niaga Auto Finance (CNAF)", "Sales Officer", "Sep 2021 – Okt 2022"],
      ["PT Astra Sedaya Finance (Astra Credit Companies)", "Surveyor", "Okt 2019 – Apr 2021"],
    ]
  );
  assert.ok(CAREER_ROLES.every((role) => role.bullets.length === 3));
  assert.ok(CAREER_ROLES.every((role) => role.coreDevelopment.trim().length > 0));
  assert.ok(CAREER_ROLES.every((role) => role.industry?.trim()));
  assert.equal(CAREER_ROLES[0].industry, "B2B Connectivity & Enterprise Network");
  assert.equal(CAREER_ROLES[0].location, "Medan, Sumatera Utara");
  assert.equal(CAREER_ROLES[0].isCurrentRole, true);
  assert.equal(CAREER_ROLES[0].logo, "/assets/logo-wavecomindo.png");
  assert.equal(CAREER_ROLES[0].logoAlt, "Logo Wavecomindo - PT Wave Communication Indonesia");
  assert.ok(existsSync(join(projectRoot, "public/assets/logo-wavecomindo.png")));
  const career = readFileSync(join(projectRoot, "components/CareerSection.tsx"), "utf8");
  assert.match(career, /src=\{role\.logo\}[\s\S]*width=\{48\}[\s\S]*height=\{48\}/);
  assert.match(CAREER_ROLES[1].bullets[0], /mendemonstrasikan Nusawork HRIS/);
  assert.match(CAREER_ROLES[2].bullets[0], /Business Development Officer/);
  assert.doesNotMatch(JSON.stringify(CAREER_ROLES), /mentransformasi|\b\d+%/i);
});

test("featured project order is AR CRM, LokerResmi.id, and Thirteen Project with complete case studies", () => {
  assert.equal(PROJECTS_DATA.length, 3);
  assert.equal(PROJECTS_DATA[0].title, "AR CRM");
  assert.equal(PROJECTS_DATA[0].websiteUrl, "https://arcrmapp.vercel.app/");
  assert.equal(PROJECTS_DATA[1].title, "LokerResmi.id");
  assert.equal(PROJECTS_DATA[1].websiteUrl, "https://lokerresmi.vercel.app");
  assert.equal(PROJECTS_DATA[2].title, "Thirteen Project");
  assert.equal(PROJECTS_DATA[2].websiteUrl, "https://thirteenproject.vercel.app");

  for (const project of PROJECTS_DATA) {
    assert.ok(project.objective);
    assert.ok(project.businessProblem);
    assert.ok(project.myContribution);
    assert.ok(project.solution);
    assert.ok(project.status);
    assert.ok(project.techStack?.length);
    assert.ok(project.screenshots.length > 0);
    for (const screenshot of project.screenshots) {
      const assetPath = decodeURIComponent(screenshot.src.replace(/^\//, ""));
      assert.ok(existsSync(join(projectRoot, "public", assetPath)), `${project.title} asset exists`);
      assert.ok(screenshot.title);
      assert.ok(screenshot.caption);
    }
    assert.notEqual(project.businessProblem, project.objective, `${project.title} copy is distinct`);
  }

  assert.match(PROJECTS_DATA[0].businessProblem, /spreadsheet manual/);
  assert.match(PROJECTS_DATA[0].objective, /Mendigitalisasi pencatatan prospek/);
  assert.match(PROJECTS_DATA[0].solution, /pipeline Kanban/);
  assert.match(PROJECTS_DATA[1].businessProblem, /Informasi lowongan kerja tersebar/);
  assert.match(PROJECTS_DATA[1].objective, /Menyatukan informasi lowongan/);
  assert.match(PROJECTS_DATA[2].businessProblem, /layanan perawatan otomotif/);

  const arcrm = PROJECTS_DATA[0];
  assert.equal(arcrm?.screenshots.length, 4);
  assert.equal(arcrm?.coverScreenshot, "/assets/arcrm-dashboard-sanitized.png");
  assert.equal(arcrm?.previewModules, undefined);
  assert.deepEqual(arcrm?.screenshots.map((screenshot) => screenshot.src), [
    "/assets/arcrm-dashboard-sanitized.png",
    "/assets/arcrm-pipeline-sanitized.png",
    "/assets/arcrm-leads-finder-sanitized.png",
    "/assets/arcrm-activities-sanitized.png",
  ]);
  assert.ok(arcrm?.screenshots.every((screenshot) => screenshot.caption.startsWith("Tangkapan layar asli")));
  assert.equal(new Set(arcrm?.screenshots.map((screenshot) => screenshot.src)).size, 4);
  assert.match(arcrm?.accessNote ?? "", /autentikasi Google Sign-In/);
});

test("public portfolio data contains no Rupiah amounts", () => {
  const publicCopy = JSON.stringify({
    HERO_DATA,
    CAREER_ROLES,
    PROJECTS_DATA,
    EDUCATION_DATA,
    CERTIFICATIONS_DATA,
    CONTACT_DATA,
    NAVIGATION_SECTIONS,
  });
  assert.doesNotMatch(publicCopy, /\b(?:Rp\.?\s*\d|Rupiah|IDR\s*\d)/i);
});

test("metadata and share card use the approved title and description", () => {
  const layout = readFileSync(join(projectRoot, "app/layout.tsx"), "utf8");
  const navigation = readFileSync(join(projectRoot, "components/SectionNavigation.tsx"), "utf8");
  assert.match(layout, /Muhammad Angga Ramadhan \| B2B Sales & Business Development/);
  assert.match(layout, /Portofolio profesional B2B Sales, Account Management, dan Business Development\. Berpengalaman dalam pipeline management dan SaaS CRM\./);
  assert.match(layout, /https:\/\/www\.anggaramadhan\.my\.id\/assets\/og-image\.png/);
  assert.match(layout, /metadataBase: new URL\("https:\/\/www\.anggaramadhan\.my\.id"\)/);
  assert.match(layout, /canonical: "\/"/);
  assert.match(layout, /url: "https:\/\/www\.anggaramadhan\.my\.id"/);
  assert.match(layout, /width: 1200/);
  assert.match(layout, /height: 630/);
  assert.match(layout, /alt: "Muhammad Angga Ramadhan B2B Sales Portfolio"/);
  assert.match(layout, /images: \[\{ url: ogImage, alt: "Muhammad Angga Ramadhan B2B Sales Portfolio" \}\]/);
  assert.match(layout, /card: "summary_large_image"/);
  assert.match(layout, /process\.env\.VERCEL === "1" \? <Analytics \/> : null/);
  assert.match(layout, /<Analytics \/>[\s\S]*<\/body>/);
  assert.equal(existsSync(join(projectRoot, "app/opengraph-image.tsx")), false);
  assert.match(navigation, /aria-label="Navigasi utama"/);
  assert.match(navigation, /layoutId="active-nav-indicator"/);
  assert.match(navigation, /const targetLeft = Math\.max\(\s*0,\s*Math\.min\(nav\.scrollWidth - nav\.clientWidth/);
  assert.match(navigation, /nav\.scrollTo\(\{ left: targetLeft, behavior: "smooth" \}\)/);
  assert.match(navigation, /Aktifkan tema terang/);
  assert.match(navigation, /fixed left-1\/2 top-5/);
  assert.doesNotMatch(`${layout}\n${navigation}`, /Executive Portfolio/);
});

test("floating WhatsApp CTA is accessible, mobile-only, animated, and gated by scroll", () => {
  const cta = readFileSync(join(projectRoot, "components/FloatingCTA.tsx"), "utf8");
  const page = readFileSync(join(projectRoot, "app/page.tsx"), "utf8");
  const layout = readFileSync(join(projectRoot, "app/layout.tsx"), "utf8");
  assert.match(cta, /window\.scrollY > 300/);
  assert.match(cta, /window\.matchMedia\("\(max-width: 767px\)"\)/);
  const ctaClasses = cta.match(/className="([^"]+)"/)?.[1]?.split(/\s+/) ?? [];
  assert.ok(
    ["fixed", "bottom-6", "right-6", "z-50", "md:hidden"].every((className) =>
      ctaClasses.includes(className)
    )
  );
  assert.match(cta, /wa\.me\/6285206602391/);
  assert.match(cta, /aria-label=/);
  assert.match(cta, /focus-visible:ring/);
  assert.match(cta, /AnimatePresence/);
  assert.match(layout, /MotionConfig reducedMotion="never"/);
  assert.match(page, /<FloatingCTA \/>/);
});

test("education and certifications preserve the six listed certificates and optional verification", () => {
  assert.match(EDUCATION_DATA.institution, /Universitas Islam Negeri Sumatera Utara/);
  assert.equal(EDUCATION_DATA.gpa, "3.26");
  assert.equal(EDUCATION_DATA.logo, "/assets/Logo-UIN-SU-Medan-PNG-1.png");
  assert.equal(
    EDUCATION_DATA.professionalSummary,
    "Fondasi akademik di bidang Perbankan Syariah yang diperkuat dengan sertifikasi praktisi dalam manajemen penjualan B2B, pengoperasian perangkat lunak CRM (HubSpot), serta pengembangan aplikasi berbantuan AI."
  );
  assert.equal(CERTIFICATIONS_DATA.length, 6);
  assert.equal(CERTIFICATIONS_DATA[0].title, "Sales Management Certification");
  assert.equal(CERTIFICATIONS_DATA[1].title, "HubSpot Sales Hub Software Certified");
  assert.equal(CERTIFICATIONS_DATA[3].title, "Sales Forecasting");
  assert.equal(CERTIFICATIONS_DATA[3].issuer, "HP LIFE (HP Foundation)");
  assert.equal(CERTIFICATIONS_DATA[3].period, "Oktober 2026");
  assert.equal(CERTIFICATIONS_DATA[4].title, "Frictionless Sales Certified");
  assert.equal(CERTIFICATIONS_DATA[4].issuer, "HubSpot Academy");
  assert.equal(CERTIFICATIONS_DATA[0].validity, "8 Okt 2026 – 6 Nov 2028");
  assert.ok(CERTIFICATIONS_DATA.every((certification) => certification.url?.trim()));
  for (const certification of CERTIFICATIONS_DATA) {
    assert.match(certification.url!, /\.webp$/i);
    const assetPath = decodeURIComponent(certification.url!.replace(/^\//, ""));
    assert.ok(existsSync(join(projectRoot, "public", assetPath)), `${certification.title} certificate file exists`);
  }
});

test("contact presents six actions in the approved order and career positioning", () => {
  assert.equal(CONTACT_DATA.panelTitle, "Peluang Karier & Kolaborasi");
  assert.equal(CONTACT_DATA.channels.length, 6);
  assert.equal(CONTACT_DATA.headline, "Membangun Pertumbuhan Bisnis Dimulai dari Kolaborasi yang Tepat.");
  assert.match(CONTACT_DATA.subheadline, /B2B Sales, Account Management, Sales Manager, Business Development Manager/);
  assert.match(CONTACT_DATA.subheadline, /kolaborasi solusi digital/);
  const labels = CONTACT_DATA.channels.map((channel) => channel.label);
  assert.deepEqual(labels, [
    "Chat via WhatsApp",
    "Email",
    "Profil LinkedIn",
    "Repositori GitHub",
    "Instagram",
    "Unduh CV Lengkap (PDF)",
  ]);
  const whatsapp = CONTACT_DATA.channels.find((channel) => channel.iconName === "whatsapp");
  assert.equal(whatsapp?.href, "https://wa.me/6285206602391");
  const cv = CONTACT_DATA.channels.find((channel) => channel.isDownload);
  assert.equal(cv?.href, "/assets/CV_Angga.pdf");
  assert.equal(CONTACT_DATA.channels.find((channel) => channel.iconName === "mail")?.href, "");
  const instagram = CONTACT_DATA.channels.find((channel) => channel.iconName === "instagram");
  assert.equal(instagram?.href, "https://www.instagram.com/angga.rmd_/" );
  assert.equal(instagram?.sublabel, "@angga.rmd_");
});

test("copy-email control keeps its approved address and touch-sized accessible feedback", () => {
  const contactSource = readFileSync(join(projectRoot, "components/ContactSection.tsx"), "utf8");
  const contactCss = readFileSync(join(projectRoot, "app/globals.css"), "utf8");
  assert.match(contactSource, /const email = "anggaramadhan538@gmail\.com"/);
  assert.match(contactSource, /navigator\.clipboard\.writeText\(email\)/);
  assert.match(contactSource, /document\.execCommand\("copy"\)/);
  assert.match(contactSource, /href=\{`mailto:\$\{email\}`\}/);
  assert.match(contactSource, /Tersalin!/);
  assert.match(contactSource, /\}, 2000\)/);
  assert.match(contactSource, /aria-live="polite"/);
  assert.match(contactSource, /<div className="contact-email-card min-h-\[76px\] w-full grid/);
  assert.match(contactSource, /overflow-hidden text-ellipsis whitespace-nowrap/);
  assert.match(contactSource, /className="block min-w-0 truncate text-xs/);
  assert.match(contactSource, /contact-email-copy min-h-\[44px\] min-w-\[48px\]/);
  assert.match(contactSource, /<button[\s\S]*?Salin alamat email/);
  assert.match(contactCss, /@media \(max-width: 639px\)[\s\S]*?\.contact-secondary-grid \.contact-action-link \{\s*gap: 0\.25rem;\s*padding: 0\.375rem;/);
  assert.doesNotMatch(contactSource, /prefers-reduced-motion/);
  assert.match(contactSource, /min-h-\[44px\]/);
});

test("six credential cards share one grid and use an accessible split image viewer", () => {
  const credentials = readFileSync(join(projectRoot, "components/CredentialsSection.tsx"), "utf8");
  assert.doesNotMatch(credentials, /0\{idx \+ 1\}/);
  assert.match(credentials, /<a href={imageUrl} target="_blank" rel="noopener noreferrer"/);
  assert.match(credentials, /Buka Gambar Ukuran Penuh/);
  assert.match(credentials, /<dialog/);
  assert.match(credentials, /dialog\.showModal\(\)/);
  assert.match(credentials, /aria-haspopup="dialog"/);
  assert.match(credentials, /aria-labelledby="certificate-viewer-title"/);
  assert.match(credentials, /<Image/);
  assert.match(credentials, /src=\{imageUrl\}/);
  assert.match(credentials, /object-contain/);
  assert.match(credentials, /alt=\{`Sertifikat/);
  assert.doesNotMatch(credentials, /<iframe|<object|pdfViewerEnabled|application\/pdf|method: "HEAD"/);
  assert.match(credentials, /event\.key === "Escape"/);
  assert.match(credentials, /event\.target === event\.currentTarget/);
  assert.match(credentials, /previouslyFocusedRef\.current\?\.focus\(\)/);
  assert.match(credentials, /Coba lagi/);
  assert.match(credentials, /animate-pulse/);
  assert.match(credentials, /priority/);
  assert.match(credentials, /grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3/);
  assert.match(credentials, /CERTIFICATIONS_DATA\.map\(\(cert\)/);
  assert.match(credentials, /md:grid-cols-\[minmax\(0,1\.45fr\)_minmax\(18rem,0\.85fr\)\]/);
  assert.match(credentials, /md:overflow-y-auto md:border-l/);
  assert.match(credentials, /certificate\.description/);
  assert.match(credentials, /Lihat pratinjau sertifikat/);
  assert.doesNotMatch(credentials, /featured-credential|featuredCertificate|CERTIFICATIONS_DATA\.slice\(1\)/i);
  assert.match(credentials, /Masa berlaku:/);
  assert.deepEqual(CERTIFICATIONS_DATA.map(({ description }) => description), [
    "Validasi kemampuan merancang strategi penjualan B2B, mengelola pipeline, dan memimpin eksekusi target secara terukur.",
    "Penguasaan teknis dalam mengoperasikan CRM HubSpot untuk pelacakan prospek, otomatisasi tugas, dan analitik penjualan.",
    "Pemahaman fundamental integrasi kecerdasan buatan (AI) untuk mempercepat riset prospek dan efisiensi operasional bisnis.",
    "Kemampuan menyusun proyeksi pendapatan (revenue projection) berbasis data historis dan tren pipeline secara akurat.",
    "Penerapan metode penjualan berbasis nilai (value-based) yang mengurangi hambatan dalam proses buying journey klien.",
    "Pemahaman dasar literasi keuangan yang mendukung analisis kelayakan dan negosiasi komersial yang sehat.",
  ]);
});

test("section eyebrow labels use the approved English copy", () => {
  const labels = [
    ["components/ExecutiveProfileSection.tsx", "EXECUTIVE PROFILE"],
    ["components/CoreCompetenciesSection.tsx", "CORE COMPETENCIES"],
    ["components/CareerSection.tsx", "CAREER MILESTONES"],
    ["components/ProjectShowcase.tsx", "FEATURED PROJECTS"],
    ["components/SalesMethodologySection.tsx", "SALES METHODOLOGY"],
    ["components/DigitalEcosystemSection.tsx", "DIGITAL ECOSYSTEM"],
    ["components/CredentialsSection.tsx", "ACADEMICS & CREDENTIALS"],
    ["components/ContactSection.tsx", "CONTACT & COLLABORATION"],
  ] as const;
  for (const [file, label] of labels) {
    assert.ok(readFileSync(join(projectRoot, file), "utf8").includes(label), `${file} has ${label}`);
  }
});

test("page renders the nine requested content sections, capsule navigation, and FloatingCTA", () => {
  const page = readFileSync(join(projectRoot, "app/page.tsx"), "utf8");
  const layout = readFileSync(join(projectRoot, "app/layout.tsx"), "utf8");
  assert.match(page, /<SectionNavigation \/>/);
  assert.doesNotMatch(`${page}\n${layout}`, /Navigasi Samping|Navigasi Bawah Mobile/);
  const renderedComponents = [...page.matchAll(/<([A-Z][A-Za-z]+)\s*\/>/g)].map((match) => match[1]);
  assert.deepEqual(renderedComponents, [
    "SectionNavigation",
    "HeroSection",
    "ExecutiveProfileSection",
    "CoreCompetenciesSection",
    "CareerSection",
    "ProjectShowcase",
    "SalesMethodologySection",
    "DigitalEcosystemSection",
    "CredentialsSection",
    "ContactSection",
    "FloatingCTA",
  ]);
  assert.doesNotMatch(page, /7rem\+env\(safe-area-inset-bottom\)/);
});

test("sales journey and digital ecosystem render accessible interactive data", () => {
  const methodology = readFileSync(join(projectRoot, "components/SalesMethodologySection.tsx"), "utf8");
  const ecosystem = readFileSync(join(projectRoot, "components/DigitalEcosystemSection.tsx"), "utf8");
  const showcase = readFileSync(join(projectRoot, "components/ProjectShowcase.tsx"), "utf8");
  const css = readFileSync(join(projectRoot, "app/globals.css"), "utf8");
  assert.match(methodology, /role="tablist"/);
  assert.match(methodology, /role="tabpanel"/);
  assert.match(methodology, /ArrowRight/);
  assert.match(methodology, /event\.key === "Home"/);
  assert.match(methodology, /className="sales-stepper-line"/);
  assert.match(methodology, /strokeDashoffset=\{1 - activeIndex \//);
  assert.match(methodology, /Objective/);
  assert.match(methodology, /Aktivitas Utama/);
  assert.match(methodology, /Output Proses/);
  assert.match(ecosystem, /role="group" aria-label="Sorot kategori tools"/);
  assert.match(ecosystem, /aria-pressed=\{activeIndex === index\}/);
  assert.match(ecosystem, /DIGITAL_ECOSYSTEM_CATEGORIES\.map\(\(category, categoryIndex\)/);
  assert.match(ecosystem, /category\.items\.map\(\(tool\)/);
  assert.match(ecosystem, /is-dimmed/);
  assert.doesNotMatch(ecosystem, /activeCategory|aria-hidden=\{isDimmed\}/);
  assert.match(css, /digital-tool-card\.is-dimmed[\s\S]*transform: scale\(0\.98\)/);
  assert.match(css, /@media \(hover: hover\) and \(pointer: fine\)/);
  assert.deepEqual(
    DIGITAL_ECOSYSTEM_CATEGORIES.map(({ label }) => label),
    ["Sales & Business Development", "AI & Productivity", "Digital Product & Development"]
  );
  assert.deepEqual(DIGITAL_ECOSYSTEM_CATEGORIES.map(({ items }) => items.length), [8, 5, 8]);
  assert.ok(DIGITAL_ECOSYSTEM_CATEGORIES.every(({ items }) => items.length <= 8));
  assert.ok(DIGITAL_ECOSYSTEM_CATEGORIES.every((category) =>
    category.items.every((tool) => tool.name.trim() && tool.description.trim() && tool.icon.trim())
  ));
  assert.deepEqual(DIGITAL_ECOSYSTEM_CATEGORIES[0]?.items.slice(4).map(({ id, name, icon, description }) => [id, name, icon, description]), [
    ["salesforce", "Salesforce", "briefcase-business", "Mendukung manajemen prospek tingkat enterprise, analisis pipeline, dan pelaporan metrik kinerja penjualan (KPI)."],
    ["make", "Make.com", "workflow", "Merancang otomatisasi alur kerja (workflow) untuk integrasi data antar aplikasi tanpa kode manual."],
    ["microsoft-office", "Microsoft Office", "file-spreadsheet", "Mendukung pengelolaan administrasi penjualan, analisis data komersial, dan penyusunan proposal bisnis secara komprehensif."],
    ["zoom-google-meet", "Zoom / Google Meet", "video", "Memfasilitasi presentasi solusi (solution demo) interaktif dan negosiasi virtual dengan klien B2B."],
  ]);
  assert.deepEqual(DIGITAL_ECOSYSTEM_CATEGORIES[1]?.items.map(({ id, description }) => [id, description]), [
    ["chatgpt", "Asisten AI untuk membantu riset, penyusunan draf, dan eksplorasi ide kerja."],
    ["gemini", "Asisten AI untuk membantu merangkum informasi dan mengembangkan ide."],
    ["claude", "Asisten AI untuk membantu analisis teks dan penyusunan materi."],
    ["notion", "Menyusun catatan, dokumentasi, dan basis pengetahuan kerja."],
    ["cue", "Asisten AI untuk membantu mengatur riset, penulisan, dan alur kerja."],
  ]);
  assert.deepEqual(DIGITAL_ECOSYSTEM_CATEGORIES[2]?.items.map(({ id, description }) => [id, description]), [
    ["github", "Mengelola source code dan kolaborasi perubahan proyek."],
    ["firebase", "Layanan backend untuk autentikasi dan data aplikasi."],
    ["supabase", "Backend aplikasi dengan basis data dan layanan terkelola."],
    ["vercel", "Meng-host aplikasi web dan menjalankan alur deployment."],
    ["nextjs", "Kerangka kerja React untuk membangun aplikasi web."],
    ["react", "Pustaka antarmuka berbasis komponen untuk aplikasi web."],
    ["tailwind-css", "Menyusun tampilan web melalui utility CSS."],
    ["visual-studio-code", "Editor kode untuk pengembangan dan peninjauan proyek."],
  ]);
  for (const icon of ["BriefcaseBusiness", "Workflow", "FileSpreadsheet", "Video"]) {
    assert.match(ecosystem, new RegExp(`\\b${icon}\\b`));
  }
  assert.doesNotMatch(`${ecosystem}\n${css}`, /ToolMarquee|tool-marquee|@keyframes\s+tool-marquee/i);
  assert.match(showcase, /Tangkapan Layar Aplikasi/);
  assert.match(showcase, /Ilustrasi Modul Fitur/);
  assert.match(showcase, /Memuat pratinjau gambar/);
  assert.match(showcase, /createPortal\([\s\S]*document\.body,/);
  assert.match(showcase, /typeof document !== "undefined"/);
  assert.match(showcase, /z-\[60\]/);
  assert.match(showcase, /max-h-\[72vh\]/);
  assert.match(showcase, /h-\[90dvh\]/);
  assert.match(showcase, /event.key === "ArrowLeft"/);
  assert.match(showcase, /event.key === "ArrowRight"/);
  assert.match(showcase, /project-preview-image/);
  assert.match(showcase, /Math\.max\(0\.72, 1 - 0\.16 \*/);
  assert.match(showcase, /Lihat Galeri \/ Preview/);
  assert.match(showcase, /Kunjungi Website/);
  assert.match(showcase, /Business Problem/);
  assert.match(showcase, /My Contribution/);
  assert.match(showcase, /className="project-deck-card[\s\S]*md:sticky/);
  assert.match(showcase, /top: `calc\(6rem \+ \$\{projectIndex\}rem\)`/);
  assert.match(showcase, /Konteks &amp; Tantangan/);
  assert.match(showcase, /Peran, Solusi &amp; Tech/);
  assert.match(showcase, /AnimatePresence mode="wait"/);
  assert.match(showcase, /transition=\{\{ layout: \{/);
  assert.match(css, /\.project-deck-surface[\s\S]*background: var\(--slate-surface\)/);
});

test("contact CTA uses an asymmetric conversion grid and a clean muted copyright footer", () => {
  const contact = readFileSync(join(projectRoot, "components/ContactSection.tsx"), "utf8");
  assert.match(contact, /CONTACT_DATA\.channels\.filter\(\(channel\) => channel\.iconName === "whatsapp" \|\| channel\.isDownload\)/);
  assert.match(contact, /CONTACT_DATA\.channels\.filter\(\(channel\) => channel\.iconName !== "whatsapp" && !channel\.isDownload\)/);
  assert.match(contact, /contact-primary-grid/);
  assert.match(contact, /contact-secondary-grid/);
  assert.doesNotMatch(contact, /MUHAMMAD ANGGA RAMADHAN|editorial-watermark/);
  assert.match(contact, /font-sans text-muted-foreground/);
  assert.equal(CONTACT_DATA.footer, "© 2026 Muhammad Angga Ramadhan. All rights reserved.");
  assert.match(contact, /portfolio-dark-stage/);
});

test("career timeline presents seven accessible interactive milestones with complete role detail", () => {
  const career = readFileSync(join(projectRoot, "components/CareerSection.tsx"), "utf8");
  assert.ok(CAREER_ROLES.every((role) => role.bullets.every((bullet) => !/^\d{2}[\s.)]/.test(bullet))));
  assert.match(career, /Daftar tujuh milestone karier/);
  assert.match(career, /<svg/);
  assert.match(career, /strokeDashoffset=\{1 - progress\}/);
  assert.match(career, /aria-pressed=\{active\}/);
  assert.match(career, /onFocus=\{\(\) => setSelectedRoleId\(role\.id\)\}/);
  assert.match(career, /md:sticky md:top-8/);
  assert.match(career, /Core Development/);
  assert.match(career, /Ruang Lingkup Pekerjaan/);
  assert.match(career, /md:hidden/);
  assert.ok(CAREER_ROLES.every((role) => role.industry && role.coreDevelopment));
});

test("presentation scroll-snap uses proximity at all sizes and keeps mobile sections natural", () => {
  const css = readFileSync(join(projectRoot, "app/globals.css"), "utf8");
  assert.match(css, /html\s*\{\s*scroll-snap-type: y proximity;/);
  assert.match(css, /\.presentation-section\s*\{\s*scroll-snap-align: start;\s*scroll-snap-stop: normal;/);
  assert.match(css, /scrollbar-width: none/);
  assert.match(css, /min-height: 100svh/);
  assert.doesNotMatch(css, /scroll-snap-type: y mandatory/);
  assert.doesNotMatch(css, /prefers-reduced-motion/);
});

test("site motion is force-active and displays scroll progress", () => {
  const css = readFileSync(join(projectRoot, "app/globals.css"), "utf8");
  const layout = readFileSync(join(projectRoot, "app/layout.tsx"), "utf8");
  assert.match(layout, /MotionConfig reducedMotion="never"/);
  assert.doesNotMatch(`${css}\n${layout}`, /prefers-reduced-motion/);
  assert.match(layout, /<ScrollProgress \/>/);
  const progress = readFileSync(join(projectRoot, "components/ScrollProgress.tsx"), "utf8");
  assert.match(progress, /--scroll-progress/);
  assert.match(progress, /className="scroll-progress-indicator"/);
  assert.match(css, /height: 2px/);
  assert.doesNotMatch(css, /tool-marquee|@keyframes\s+tool-marquee/i);
  const motionSource = readFileSync(join(projectRoot, "components/MotionReveal.tsx"), "utf8");
  assert.match(motionSource, /initial=\{\{[\s\S]*?opacity: 0,[\s\S]*?\by,[\s\S]*?\}\}/);
  assert.match(motionSource, /whileInView=\{\{[\s\S]*?opacity: 1,[\s\S]*?y: 0,[\s\S]*?\}\}/);
  assert.match(motionSource, /duration = 0\.4/);
  assert.match(motionSource, /duration: 0\.4/);
  assert.doesNotMatch(`${css}\n${motionSource}`, /prefers-reduced-motion|clipPath|transition:\s*all/);
});

test("project mockup tilt and competency strips respond to touch or keyboard focus", () => {
  const showcase = readFileSync(join(projectRoot, "components/ProjectShowcase.tsx"), "utf8");
  const competencies = readFileSync(join(projectRoot, "components/CoreCompetenciesSection.tsx"), "utf8");
  const css = readFileSync(join(projectRoot, "app/globals.css"), "utf8");
  assert.match(showcase, /onPointerDown=\{\(event\) => \{/);
  assert.match(showcase, /event\.pointerType === "touch"/);
  assert.match(showcase, /data-touch-active="false"/);
  assert.match(showcase, /onFocus=\{\(event\) => \{/);
  assert.match(css, /\.project-mockup-frame\[data-touch-active="true"\]/);
  assert.match(competencies, /tabIndex=\{0\}/);
  assert.match(competencies, /competency-strip/);
  assert.match(css, /\.competency-strip:active/);
  assert.match(css, /\.competency-strip:focus-visible/);
});
