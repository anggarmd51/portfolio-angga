import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  HERO_DATA,
  BENTO_DATA,
  CAREER_ROLES,
  PROJECTS_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  CONTACT_DATA,
  NAVIGATION_SECTIONS,
} from "../data/portfolio";

const projectRoot = process.cwd();

test("navigation contains exactly 6 sections with valid anchor IDs", () => {
  assert.equal(NAVIGATION_SECTIONS.length, 6);
  assert.deepEqual(
    NAVIGATION_SECTIONS.map((section) => section.id),
    ["home", "profile", "career", "projects", "credentials", "contact"]
  );
});

test("hero uses the approved role copy and keeps portrait fallback assets", () => {
  assert.equal(HERO_DATA.name, "Muhammad Angga Ramadhan");
  assert.equal(HERO_DATA.secondaryName, "(Angga)");
  assert.equal(HERO_DATA.eyebrow, "SALES, BUSINESS DEVELOPMENT & ACCOUNT MANAGEMENT");
  assert.equal(
    HERO_DATA.tagline,
    "Menangani Penjualan B2B, Pengelolaan Akun, dan Pengembangan Hubungan Bisnis di Sektor Pembiayaan & SaaS."
  );
  assert.match(HERO_DATA.subTagline, /Berpengalaman sejak 2019/);
  assert.equal(HERO_DATA.portraitUrl, "/muhammad-angga-ramadhan-profile.png");
  assert.equal(HERO_DATA.floatingBadges.length, 1);
  assert.ok(existsSync(join(projectRoot, "public/muhammad-angga-ramadhan-profile.png")));
  assert.ok(existsSync(join(projectRoot, "public/profile-placeholder.png")));
});

test("profile uses factual positioning, three target roles, and static competency groups", () => {
  assert.equal(BENTO_DATA.sectionTitle, "Dari Survei Kredit ke Penjualan B2B SaaS");
  assert.equal(BENTO_DATA.box1.headline, "Pengalaman Pembiayaan & Penjualan Solusi B2B");
  assert.deepEqual(BENTO_DATA.box2.roles, [
    "Sales Manager",
    "Business Development Manager",
    "Account Manager",
  ]);
  assert.equal(BENTO_DATA.box3.pillars.length, 3);
  assert.deepEqual(
    BENTO_DATA.box4.competencyCategories.map((category) => category.title),
    [
      "Penjualan & Pengembangan Bisnis",
      "Pembiayaan & Analisis Risiko",
      "Inisiatif Digital & Alat Kerja",
    ]
  );
  assert.ok(BENTO_DATA.box4.competencyCategories.every((category) => category.skills.length > 0));
});

test("career history retains the exact six roles, companies, and periods through June 2026", () => {
  assert.equal(CAREER_ROLES.length, 6);
  assert.deepEqual(
    CAREER_ROLES.map(({ company, role, period }) => [company, role, period]),
    [
      ["PT Media Antar Nusa (Nusawork HRIS)", "Account Manager", "Okt 2025 – Jun 2026"],
      ["PT Sarana Digital Retail (Dretail POS)", "Business Development Manager", "Apr 2024 – Okt 2025"],
      ["PT Astra Sedaya Finance (Astra Credit Companies)", "Customer Retention Processing Syariah", "Mei 2023 – Apr 2024"],
      ["PT Bank Mega Tbk", "Card Funding Officer", "Nov 2022 – Mei 2023"],
      ["PT CIMB Niaga Auto Finance (CNAF)", "Sales Officer", "Sep 2021 – Okt 2022"],
      ["PT Astra Sedaya Finance (Astra Credit Companies)", "Surveyor", "Okt 2019 – Apr 2021"],
    ]
  );
  assert.ok(CAREER_ROLES.every((role) => role.bullets.length > 0));
  assert.match(CAREER_ROLES[0].bullets[0], /mempresentasikan demo/);
  assert.match(CAREER_ROLES[1].bullets[0], /Business Development Officer/);
  assert.doesNotMatch(JSON.stringify(CAREER_ROLES), /mentransformasi|\b\d+%/i);
});

test("all three projects provide purpose, scope, status, tech stack, and local preview assets", () => {
  assert.equal(PROJECTS_DATA.length, 3);
  assert.equal(PROJECTS_DATA[0].title, "LokerResmi.id");
  assert.equal(PROJECTS_DATA[0].websiteUrl, "https://lokerresmi.vercel.app");
  assert.equal(PROJECTS_DATA[1].title, "AR CRM");
  assert.equal(PROJECTS_DATA[1].websiteUrl, "https://arcrmapp.vercel.app/");
  assert.equal(PROJECTS_DATA[2].title, "Thirteen Project");
  assert.equal(PROJECTS_DATA[2].websiteUrl, "https://thirteenproject.vercel.app");

  for (const project of PROJECTS_DATA) {
    assert.ok(project.objective);
    assert.ok(project.contribution);
    assert.ok(project.status);
    assert.ok(project.techStack?.length);
    assert.ok(project.screenshots.length > 0);
    for (const screenshot of project.screenshots) {
      const assetPath = decodeURIComponent(screenshot.src.replace(/^\//, ""));
      assert.ok(existsSync(join(projectRoot, "public", assetPath)), `${project.title} asset exists`);
      assert.ok(screenshot.title);
      assert.ok(screenshot.caption);
    }
  }

  const arcrm = PROJECTS_DATA.find((project) => project.id === "arcrm");
  assert.equal(arcrm?.screenshots.length, 1);
  assert.equal(arcrm?.previewModules?.length, 3);
  assert.deepEqual(arcrm?.previewModules?.map((module) => module.title), [
    "Pipeline Kanban & Deal Tracking",
    "Database Prospek & Lead Generation",
    "Log Aktivitas & Follow-up Harian",
  ]);
  assert.match(arcrm?.accessNote ?? "", /autentikasi Google Sign-In/);
});

test("public portfolio data contains no Rupiah amounts", () => {
  const publicCopy = JSON.stringify({
    HERO_DATA,
    BENTO_DATA,
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
  const openGraphImage = readFileSync(join(projectRoot, "app/opengraph-image.tsx"), "utf8");
  assert.match(layout, /Muhammad Angga Ramadhan — Portofolio Sales & Business Development/);
  assert.match(layout, /Portofolio profesional Muhammad Angga Ramadhan/);
  assert.match(layout, /Muhammad Angga Ramadhan — Sales & Business Development, Medan/);
  assert.match(navigation, /Portofolio Sales & Business Development/);
  assert.doesNotMatch(`${layout}\n${navigation}\n${openGraphImage}`, /Executive Portfolio/);
});

test("education and certifications preserve the six listed certificates and optional verification", () => {
  assert.match(EDUCATION_DATA.institution, /Universitas Islam Negeri Sumatera Utara/);
  assert.equal(EDUCATION_DATA.gpa, "3.26");
  assert.equal(EDUCATION_DATA.logo, "/assets/Logo-UIN-SU-Medan-PNG-1.png");
  assert.equal(CERTIFICATIONS_DATA.length, 6);
  assert.equal(CERTIFICATIONS_DATA[0].title, "Sales Management Certification");
  assert.equal(CERTIFICATIONS_DATA[1].title, "HubSpot Sales Hub Software Certified");
  assert.ok(CERTIFICATIONS_DATA[0].validity);
  assert.ok(CERTIFICATIONS_DATA.every((certification) => !certification.url || certification.url.trim().length > 0));
});

test("contact has two clear paths and keeps WhatsApp, email, LinkedIn, GitHub, and CV links", () => {
  assert.equal(CONTACT_DATA.pathways.length, 2);
  assert.equal(CONTACT_DATA.pathways[0].title, "Peluang Karier (Untuk Recruiter & HR)");
  assert.equal(CONTACT_DATA.pathways[1].title, "Diskusi & Kolaborasi Bisnis");
  const labels = CONTACT_DATA.channels.map((channel) => channel.label);
  assert.deepEqual(labels, [
    "Chat via WhatsApp",
    "Kirim Email",
    "Profil LinkedIn",
    "Repositori GitHub",
    "Unduh CV Lengkap (PDF)",
  ]);
  const whatsapp = CONTACT_DATA.channels.find((channel) => channel.iconName === "whatsapp");
  assert.equal(whatsapp?.href, "https://wa.me/6285206602391");
  const cv = CONTACT_DATA.channels.find((channel) => channel.isDownload);
  assert.equal(cv?.href, "/assets/CV_Angga.pdf");
});
