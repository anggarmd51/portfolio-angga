import test from "node:test";
import assert from "node:assert/strict";
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

test("navigation contains exactly 6 sections with valid anchor IDs", () => {
  assert.equal(NAVIGATION_SECTIONS.length, 6);
  const ids = NAVIGATION_SECTIONS.map((s) => s.id);
  assert.deepEqual(ids, [
    "home",
    "profile",
    "career",
    "projects",
    "credentials",
    "contact",
  ]);
});

test("hero data has exact approved headlines and portrait asset", () => {
  assert.equal(HERO_DATA.name, "Muhammad Angga Ramadhan");
  assert.equal(HERO_DATA.secondaryName, "(Angga)");
  assert.equal(HERO_DATA.portraitUrl, "/profile-placeholder.png");
  assert.match(HERO_DATA.tagline, /Menyatukan Disiplin Eksekusi Penjualan/);
  assert.equal(HERO_DATA.floatingBadges.length, 2);
});

test("bento grid contains four structured boxes with exact copy", () => {
  assert.match(BENTO_DATA.box1.headline, /Fondasi Perbankan yang Kuat/);
  assert.equal(BENTO_DATA.box2.roles.length, 4);
  assert.equal(BENTO_DATA.box3.pillars.length, 3);
  assert.match(BENTO_DATA.box4.marqueeText, /HubSpot CRM/);
});

test("career track record contains exactly 6 distinct roles", () => {
  assert.equal(CAREER_ROLES.length, 6);
  // Verify ASF appears twice as distinct roles
  const asfRoles = CAREER_ROLES.filter((r) =>
    r.company.includes("PT Astra Sedaya Finance")
  );
  assert.equal(asfRoles.length, 2);
  assert.equal(asfRoles[0].role, "Customer Retention Processing Syariah");
  assert.equal(asfRoles[1].role, "Surveyor");

  // Verify Nusawork is first
  assert.equal(CAREER_ROLES[0].company, "PT Media Antar Nusa (Nusawork HRIS)");
  assert.equal(CAREER_ROLES[0].role, "Account Manager");

  // Verify Dretail is second
  assert.equal(
    CAREER_ROLES[1].company,
    "PT Sarana Digital Retail (Dretail POS)"
  );

  // Verify Bank Mega is fourth
  assert.equal(CAREER_ROLES[3].company, "PT Bank Mega Tbk");

  // Verify CNAF is fifth
  assert.equal(
    CAREER_ROLES[4].company,
    "PT CIMB Niaga Auto Finance (CNAF)"
  );
});

test("projects section contains exactly 3 projects with real screenshots and verified external links", () => {
  assert.equal(PROJECTS_DATA.length, 3);
  assert.equal(PROJECTS_DATA[0].title, "LokerResmi.id");
  assert.equal(PROJECTS_DATA[0].websiteUrl, "https://lokerresmi.vercel.app");

  assert.equal(PROJECTS_DATA[1].title, "AR CRM");
  assert.equal(PROJECTS_DATA[1].websiteUrl, "https://arcrmapp.vercel.app/");
  assert.equal(PROJECTS_DATA[1].screenshots.length, 1);
  assert.equal(
    PROJECTS_DATA[1].coverScreenshot,
    PROJECTS_DATA[1].screenshots[0]
  );

  assert.equal(PROJECTS_DATA[2].title, "Thirteen Project");
  assert.equal(
    PROJECTS_DATA[2].websiteUrl,
    "https://thirteenproject.vercel.app"
  );
});

test("public portfolio copy contains no Rupiah amounts", () => {
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

test("education and certifications match exact specifications", () => {
  assert.match(EDUCATION_DATA.institution, /Universitas Islam Negeri Sumatera Utara/);
  assert.equal(EDUCATION_DATA.gpa, "3.26");
  assert.equal(EDUCATION_DATA.logo, "/assets/Logo-UIN-SU-Medan-PNG-1.png");

  assert.equal(CERTIFICATIONS_DATA.length, 6);
  assert.equal(
    CERTIFICATIONS_DATA[0].title,
    "Sales Management Certification"
  );
  assert.equal(
    CERTIFICATIONS_DATA[1].title,
    "HubSpot Sales Hub Software Certified"
  );
});

test("contact channels contain the approved WhatsApp number and CV download link", () => {
  const wa = CONTACT_DATA.channels.find((c) => c.href.includes("wa.me"));
  assert.ok(wa, "WhatsApp channel must exist");
  assert.equal(wa.href, "https://wa.me/6285206602391");

  const cv = CONTACT_DATA.channels.find((c) => c.isDownload);
  assert.ok(cv, "CV download channel must exist");
  assert.equal(cv.href, "/assets/CV_Angga.pdf");
});
