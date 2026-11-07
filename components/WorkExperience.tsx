"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Briefcase,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import {
  roles,
  experienceIntro,
  education,
  type CompanyLogoKey,
} from "@/lib/content";
import {
  DEFAULT_EXPANDED_EXPERIENCE_IDS,
  toggleAccordionIds,
} from "@/lib/portfolio-data";

function CompanyLogo({
  logoKey,
  companyName,
}: {
  logoKey: CompanyLogoKey;
  companyName: string;
}) {
  switch (logoKey) {
    case "nusawork":
      return (
        <svg
          viewBox="0 0 40 40"
          className="h-8 w-8"
          role="img"
          aria-label={`Logo ${companyName}`}
        >
          <rect x="2" y="2" width="36" height="36" rx="8" fill="#007A5E" />
          <path
            d="M11 28V12h4.2l8.6 10.6V12H28v16h-4.2L15.2 17.4V28H11Z"
            fill="#FFFFFF"
          />
          <circle cx="29" cy="11" r="2.5" fill="#F2B705" />
        </svg>
      );
    case "dretail":
      return (
        <svg
          viewBox="0 0 40 40"
          className="h-8 w-8"
          role="img"
          aria-label={`Logo ${companyName}`}
        >
          <rect x="2" y="2" width="36" height="36" rx="8" fill="#1E3A8A" />
          <path
            d="M11 11h7.5c5.2 0 8.5 3.4 8.5 9s-3.3 9-8.5 9H11V11Zm4.4 3.8v10.4h3.1c2.8 0 4.3-1.9 4.3-5.2s-1.5-5.2-4.3-5.2h-3.1Z"
            fill="#FFFFFF"
          />
          <rect x="28" y="11" width="3" height="18" rx="1.5" fill="#38BDF8" />
        </svg>
      );
    case "clipan":
      return (
        <svg
          viewBox="0 0 40 40"
          className="h-8 w-8"
          role="img"
          aria-label={`Logo ${companyName}`}
        >
          <rect x="2" y="2" width="36" height="36" rx="8" fill="#004B87" />
          <path
            d="M25.5 14.5A7.5 7.5 0 1 0 25.5 25.5"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M21 17.5h7.5M21 22.5h5.5"
            stroke="#F2B705"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "acc":
      return (
        <svg
          viewBox="0 0 40 40"
          className="h-8 w-8"
          role="img"
          aria-label={`Logo ${companyName}`}
        >
          <rect x="2" y="2" width="36" height="36" rx="8" fill="#005BAA" />
          <path
            d="M20 9.5 10.5 29h4.3l1.7-3.8h7l1.7 3.8h4.3L20 9.5Zm0 6.3 2.2 5.4h-4.4L20 15.8Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "bankmega":
      return (
        <svg
          viewBox="0 0 40 40"
          className="h-8 w-8"
          role="img"
          aria-label={`Logo ${companyName}`}
        >
          <rect x="2" y="2" width="36" height="36" rx="8" fill="#F37021" />
          <path
            d="M9.5 27V12h4.4l6.1 8.8L26.1 12h4.4v15h-4.1V18.2L20 26.8l-6.4-8.6V27H9.5Z"
            fill="#FFFFFF"
          />
          <rect x="9.5" y="29" width="21" height="2.5" rx="1" fill="#00549A" />
        </svg>
      );
    case "cnaf":
      return (
        <svg
          viewBox="0 0 40 40"
          className="h-8 w-8"
          role="img"
          aria-label={`Logo ${companyName}`}
        >
          <rect x="2" y="2" width="36" height="36" rx="8" fill="#B91C1C" />
          <path d="M20 9 31 20 20 31 9 20 20 9Z" fill="#FFFFFF" />
          <path d="M20 14 26 20 20 26 14 20 20 14Z" fill="#B91C1C" />
        </svg>
      );
  }
}

export default function WorkExperience() {
  const [openIds, setOpenIds] = useState<number[]>([
    ...DEFAULT_EXPANDED_EXPERIENCE_IDS,
  ]);
  const prefersReducedMotion = useReducedMotion();

  const handleToggle = (id: number) => {
    setOpenIds((prev) => toggleAccordionIds(prev, id));
  };

  return (
    <section
      id="pengalaman"
      aria-labelledby="work-experience-heading"
      className="scroll-mt-20 w-full border-t border-garis-embun py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-tautan mb-2">
              <Briefcase className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="font-display text-xs font-extrabold uppercase tracking-wider">
                Verified Career Ledger · 2019 – 2026
              </span>
            </div>
            <h2
              id="work-experience-heading"
              className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-hijau-ledger"
            >
              7 Posisi Karir &amp; Pencapaian Komersial
            </h2>
          </div>
          <p className="font-body text-base sm:text-lg leading-[1.7] text-abu-hijau max-w-[58ch]">
            {experienceIntro}
          </p>
        </div>

        {/* 7 Role Bento Cards */}
        <div className="space-y-4">
          {roles.map((role) => {
            const isOpen = openIds.includes(role.id);
            const panelId = `exp-panel-${role.id}`;
            const buttonId = `exp-button-${role.id}`;
            const isHighlightedImpact =
              role.id === 1 || role.id === 2 || role.id === 4;

            return (
              <article
                key={role.id}
                className={`bento-card p-5 sm:p-7 ${
                  isOpen ? "border-hijau-ledger/40" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                  {/* Left Column (3 Cols): Period, Year & Sector */}
                  <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start justify-between gap-2 pb-3 lg:pb-0 border-b lg:border-b-0 border-garis-embun/70">
                    <div>
                      <span className="font-display text-base sm:text-lg font-extrabold text-hijau-ledger tabular-nums">
                        {role.year}
                      </span>
                      <p className="font-display text-xs font-semibold text-abu-hijau tabular-nums mt-0.5">
                        {role.period}
                      </p>
                    </div>
                    <span className="inline-block lg:mt-2.5 font-display text-[11px] font-bold px-2.5 py-1 rounded bg-kertas-dingin text-hijau-ledger border border-garis-embun">
                      {role.sector}
                    </span>
                  </div>

                  {/* Right Column (9 Cols): Full-Color Corporate Logo, Role Header, Impact Badge & Accordion */}
                  <div className="lg:col-span-9">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => handleToggle(role.id)}
                      className="w-full text-left flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
                    >
                      <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
                        <div className="w-12 h-12 rounded-xl border border-garis-embun bg-kertas-dingin/60 flex items-center justify-center shrink-0">
                          <CompanyLogo
                            logoKey={role.companyLogo}
                            companyName={role.company}
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-hijau-ledger group-hover:text-teal-tautan transition-colors">
                            {role.title}
                          </h3>
                          <p className="mt-0.5 font-display text-xs sm:text-sm font-bold text-abu-hijau">
                            {role.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 self-stretch sm:self-start pt-1 sm:pt-0">
                        <span
                          className={`inline-flex items-center gap-1.5 font-display text-xs font-extrabold px-3 py-1.5 rounded-lg tabular-nums ${
                            isHighlightedImpact
                              ? "bg-kuning-stabilo text-hijau-ledger"
                              : "bg-kertas-dingin text-hijau-ledger border border-garis-embun"
                          }`}
                        >
                          <TrendingUp className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{role.impactBadge}</span>
                        </span>

                        <span
                          aria-hidden="true"
                          className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-transform duration-200 ${
                            isOpen
                              ? "bg-hijau-ledger text-kertas-dingin border-hijau-ledger rotate-180"
                              : "bg-kertas-dingin text-hijau-ledger border-garis-embun group-hover:border-hijau-ledger"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </div>
                    </button>

                    {/* Executive Summary (Always Visible) */}
                    <p className="mt-4 font-body text-base sm:text-lg leading-[1.7] text-hijau-ledger max-w-[66ch]">
                      {role.summary}
                    </p>

                    {/* Expandable Detailed Breakdown */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={
                            prefersReducedMotion
                              ? { duration: 0 }
                              : { duration: 0.2, ease: [0.23, 1, 0.32, 1] }
                          }
                          className="mt-4 pt-4 border-t border-garis-embun/80"
                        >
                          <p className="font-body text-base leading-[1.7] text-abu-hijau max-w-[66ch]">
                            {role.detail}
                          </p>

                          <ul className="mt-3.5 space-y-2">
                            {role.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 font-display text-xs sm:text-sm font-semibold text-hijau-ledger"
                              >
                                <CheckCircle2
                                  className="w-4 h-4 text-teal-tautan shrink-0 mt-0.5"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Formal Education Bento Card */}
        <div className="bento-card p-6 sm:p-7 mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-hijau-ledger text-kuning-stabilo flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-xs font-extrabold uppercase tracking-wider text-teal-tautan">
                {education.label}
              </p>
              <h3 className="mt-0.5 font-display text-lg sm:text-xl font-extrabold text-hijau-ledger">
                {education.degree}
              </h3>
              <p className="font-body text-sm sm:text-base text-abu-hijau">
                {education.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-center">
            <span className="font-display text-xs font-bold px-3 py-1.5 rounded-lg bg-kertas-dingin border border-garis-embun text-hijau-ledger tabular-nums">
              {education.year}
            </span>
            <span className="font-display text-xs font-extrabold px-3 py-1.5 rounded-lg bg-kuning-stabilo text-hijau-ledger tabular-nums">
              {education.gpa}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
