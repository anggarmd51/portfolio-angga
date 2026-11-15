import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { CAREER_ROLES, PROJECTS_DATA, SALES_WORKFLOW_STEPS } from "@/data/portfolio";
import { RECRUITER_QA_ITEMS } from "@/data/recruiter-qa";

const projectRoot = process.cwd();

test("Recruiter Q&A exposes four unique questions with deterministic, fact-based answers", () => {
  assert.equal(RECRUITER_QA_ITEMS.length, 4);
  assert.equal(new Set(RECRUITER_QA_ITEMS.map((item) => item.id)).size, 4);
  assert.deepEqual(
    RECRUITER_QA_ITEMS.map((item) => item.question),
    [
      "Apa pengalaman utama Angga di B2B & SaaS?",
      "Apa peran Angga dalam pembuatan aplikasi AR CRM?",
      "Bagaimana pendekatan Angga dalam mengelola siklus penjualan B2B?",
      "Peran dan kolaborasi apa yang sedang dicari?",
    ]
  );

  const experience = RECRUITER_QA_ITEMS[0];
  assert.match(experience.facts[0], /Account Manager di Wavecomindo.*konektivitas korporasi/);
  assert.match(experience.facts[1], /Account Manager di Nusawork HRIS/);
  assert.match(experience.facts[2], /Business Development Manager di Dretail POS/);
  assert.equal(CAREER_ROLES[0].company, "PT Wave Communication Indonesia (Wavecomindo)");
  assert.equal(CAREER_ROLES[1].company, "PT Media Antar Nusa (Nusawork HRIS)");
  assert.equal(CAREER_ROLES[2].company, "PT Sarana Digital Retail (Dretail POS)");

  const crmAnswer = RECRUITER_QA_ITEMS[1];
  assert.match(crmAnswer.summary, /kebutuhan lapangan B2B Sales/);
  assert.match(crmAnswer.summary, /pipeline dan follow-up/);
  assert.match(crmAnswer.summary, /PWA berbasis Firebase/);
  assert.match(PROJECTS_DATA[0].myContribution, /Menginisiasi produk, merancang workflow pipeline/);

  assert.deepEqual(RECRUITER_QA_ITEMS[2].facts, SALES_WORKFLOW_STEPS.map((step) => step.label));
  assert.match(RECRUITER_QA_ITEMS[3].summary, /B2B Sales, Account Management, dan Business Development Manager/);
  assert.match(RECRUITER_QA_ITEMS[3].summary, /Medan maupun remote/);
});

test("Recruiter Q&A component keeps semantic controls and local-only interactions", () => {
  const component = readFileSync(join(projectRoot, "components/RecruiterQASection.tsx"), "utf8");
  assert.match(component, /aria-pressed=\{selected\}/);
  assert.match(component, /aria-live="polite"/);
  assert.match(component, /AnimatePresence/);
  assert.match(component, /href="#methodology"/);
  assert.match(component, /WhatsApp/);
  assert.match(component, /Unduh CV/);
  assert.doesNotMatch(component, /fetch\s*\(|axios|generateText|chat\.completions|api\/chat/i);
});
