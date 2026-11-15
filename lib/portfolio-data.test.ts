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
  for (const token of ["#0A0F18", "#151D29", "#202B39", "#F1F3F5", "#A6B0BD", "#19C69A"]) {
    assert.ok(css.toLowerCase().includes(token.toLowerCase()), `${token} is in the CSS theme`);
    assert.ok(design.toLowerCase().includes(token.toLowerCase()), `${token} is documented`);
  }
  assert.match(layout, /Instrument_Serif, Inter, Manrope/);
  assert.match(css, /--radius-2xl: 14px/);
  assert.match(layout, /process\.env\.VERCEL === "1" \? <Analytics \/> : null/);
});

test("navigation contains the nine requested sections in architectural order", () => {
  assert.equal(NAVIGATION_SECTIONS.length, 9);
  assert.deepEqual(
    NAVIGATION_SECTIONS.map((section) => section.id),
    ["home", "profile", "competencies", "career", "projects", "methodology", "ecosystem", "credentials", "contact"]
  );
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
  assert.equal(CAREER_ROLES[0].logo, "/assets/wavecomindo-monogram.svg");
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
  assert.match(navigation, /Portofolio Sales & Business Development/);
  assert.match(navigation, /group-focus-visible:opacity-100/);
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
  assert.match(layout, /MotionConfig reducedMotion="user"/);
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
  assert.match(contactSource, /const email = "anggaramadhan538@gmail\.com"/);
  assert.match(contactSource, /navigator\.clipboard\.writeText\(email\)/);
  assert.match(contactSource, /document\.execCommand\("copy"\)/);
  assert.match(contactSource, /href=\{`mailto:\$\{email\}`\}/);
  assert.match(contactSource, /Tersalin!/);
  assert.match(contactSource, /\}, 2000\)/);
  assert.match(contactSource, /aria-live="polite"/);
  assert.match(contactSource, /<div className="min-h-\[72px\] w-full grid/);
  assert.match(contactSource, /<button[\s\S]*?Salin alamat email/);
  assert.doesNotMatch(contactSource, /prefers-reduced-motion/);
  assert.match(contactSource, /min-h-\[44px\]/);
});

test("role and certificate cards omit sequence badges and certificates use an internal accessible image viewer", () => {
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
  assert.match(credentials, /Featured Credential/);
  assert.match(credentials, /Lihat Pratinjau Sertifikat/);
  assert.match(credentials, /CERTIFICATIONS_DATA\.slice\(1\)/);
  assert.match(credentials, /Masa berlaku:/);
  assert.match(credentials, /pengujian atas praktik terbaik dan kesiapan untuk tanggung jawab manajer penjualan/);
});

test("page renders the nine requested content sections in exact order and preserves FloatingCTA", () => {
  const page = readFileSync(join(projectRoot, "app/page.tsx"), "utf8");
  const layout = readFileSync(join(projectRoot, "app/layout.tsx"), "utf8");
  assert.doesNotMatch(`${page}\n${layout}`, /SectionNavigation|Navigasi Samping/);
  const renderedComponents = [...page.matchAll(/<([A-Z][A-Za-z]+)\s*\/>/g)].map((match) => match[1]);
  assert.deepEqual(renderedComponents, [
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
  assert.match(ecosystem, /role="tablist"/);
  assert.match(ecosystem, /role="tabpanel"/);
  assert.match(ecosystem, /aria-selected=\{active\}/);
  assert.deepEqual(
    DIGITAL_ECOSYSTEM_CATEGORIES.map(({ label }) => label),
    ["Sales & Business Development", "AI & Productivity", "Digital Product & Development"]
  );
  assert.deepEqual(DIGITAL_ECOSYSTEM_CATEGORIES.map(({ items }) => items.length), [4, 5, 8]);
  assert.ok(DIGITAL_ECOSYSTEM_CATEGORIES.every((category) =>
    category.items.every((tool) => tool.name.trim() && tool.description.trim() && tool.icon.trim())
  ));
  assert.doesNotMatch(`${ecosystem}\n${css}`, /ToolMarquee|tool-marquee|@keyframes\s+tool-marquee/i);
  assert.match(showcase, /Tangkapan Layar Aplikasi/);
  assert.match(showcase, /Ilustrasi Modul Fitur/);
  assert.match(showcase, /Memuat pratinjau gambar/);
  assert.match(showcase, /max-h-\[72vh\]/);
  assert.match(showcase, /h-\[90dvh\]/);
  assert.match(showcase, /event.key === "ArrowLeft"/);
  assert.match(showcase, /event.key === "ArrowRight"/);
  assert.match(showcase, /group-hover\/project:scale-\[1\.025\]/);
  assert.match(showcase, /Lihat Galeri \/ Preview/);
  assert.match(showcase, /Kunjungi Website/);
  assert.match(showcase, /Business Problem/);
  assert.match(showcase, /My Contribution/);
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
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.motion-reveal\s*\{\s*opacity: 1 !important;\s*transform: none !important;/);
});

test("site motion respects reduced-motion and displays scroll progress", () => {
  const css = readFileSync(join(projectRoot, "app/globals.css"), "utf8");
  const layout = readFileSync(join(projectRoot, "app/layout.tsx"), "utf8");
  assert.match(layout, /MotionConfig reducedMotion="user"/);
  assert.match(layout, /<ScrollProgress \/>/);
  const progress = readFileSync(join(projectRoot, "components/ScrollProgress.tsx"), "utf8");
  assert.match(progress, /--scroll-progress/);
  assert.match(progress, /className="scroll-progress-indicator"/);
  assert.match(css, /height: 2px/);
  assert.doesNotMatch(css, /tool-marquee|@keyframes\s+tool-marquee/i);
  const motionSource = readFileSync(join(projectRoot, "components/MotionReveal.tsx"), "utf8");
  assert.match(motionSource, /initial=\{\{ opacity: 0, y \}\}/);
  assert.match(motionSource, /whileInView=\{\{ opacity: 1, y: 0 \}\}/);
  assert.match(motionSource, /duration = 0\.4/);
  assert.match(motionSource, /duration: 0\.4/);
});
