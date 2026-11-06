"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface PipelineStage {
  id: number;
  role: string;
  period: string;
  era: "finance" | "saas";
  isCurrent?: boolean;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    role: "Surveyor",
    period: "2019–2021",
    era: "finance",
  },
  {
    id: 2,
    role: "Sales Officer",
    period: "2021–2022",
    era: "finance",
  },
  {
    id: 3,
    role: "Card Funding Officer",
    period: "2022–2023",
    era: "finance",
  },
  {
    id: 4,
    role: "Customer Retention Syariah",
    period: "2023–2024",
    era: "finance",
  },
  {
    id: 5,
    role: "Credit Marketing Officer",
    period: "2024–2025",
    era: "finance",
  },
  {
    id: 6,
    role: "Business Development Manager",
    period: "2025",
    era: "saas",
  },
  {
    id: 7,
    role: "Account Manager",
    period: "2025–2026",
    era: "saas",
    isCurrent: true,
  },
];

export default function PipelineStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-12 pt-8 border-t border-garis-embun/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <span className="font-display text-xs font-semibold text-kertas-dingin/80 tracking-tight">
          Jalur Pipeline Karir (2019 – 2026)
        </span>
        <span className="font-display text-xs text-kertas-dingin/70 tabular-nums">
          7 Peran Berurutan · Transisi Pembiayaan ke B2B SaaS
        </span>
      </div>

      {/* Bar Progres Horizontal Satu Kali Saat Muat */}
      <div
        className="w-full h-1.5 bg-kertas-dingin/15 border border-garis-embun/30 overflow-hidden mb-4"
        aria-hidden="true"
      >
        <motion.div
          className="h-full bg-kuning-stabilo origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
          }
        />
      </div>

      {/* Strip Tahapan Karir: Vertikal di Mobile (< md), Horizontal di Desktop (>= md) */}
      <ol
        aria-label="Urutan kronologis perjalanan karir"
        className="flex flex-col md:flex-row items-stretch border border-garis-embun"
      >
        {PIPELINE_STAGES.map((stage, index) => {
          const isTransitionPoint = index === 5; // Tepat sebelum Business Development Manager

          return (
            <React.Fragment key={stage.id}>
              {isTransitionPoint && (
                <li
                  aria-label="Transisi ke Era B2B SaaS"
                  className="flex md:flex-col items-center justify-center px-3 py-2.5 md:py-3 bg-kertas-dingin text-hijau-ledger border-b md:border-b-0 md:border-r border-garis-embun shrink-0"
                >
                  <div className="flex items-center gap-2 md:flex-col md:gap-1.5">
                    <span
                      className="inline-block w-2.5 h-2.5 bg-kuning-stabilo border border-hijau-ledger rotate-45 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-display text-[11px] font-bold tracking-tight text-hijau-ledger whitespace-nowrap">
                      Era B2B SaaS
                    </span>
                  </div>
                </li>
              )}

              <li
                className={`flex-1 flex flex-col justify-between p-3 border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 border-garis-embun/40 transition-colors ${
                  stage.isCurrent
                    ? "bg-kuning-stabilo text-hijau-ledger font-semibold"
                    : "bg-hijau-ledger text-kertas-dingin"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`font-display text-[11px] tabular-nums ${
                      stage.isCurrent
                        ? "text-hijau-ledger font-bold"
                        : "text-kertas-dingin/70 font-semibold"
                    }`}
                  >
                    0{stage.id}
                  </span>
                  <span
                    className={`font-display text-[11px] tabular-nums whitespace-nowrap ${
                      stage.isCurrent
                        ? "text-hijau-ledger font-bold"
                        : "text-kertas-dingin/75"
                    }`}
                  >
                    {stage.period}
                  </span>
                </div>

                <p
                  className={`font-display text-xs sm:text-[13px] leading-snug ${
                    stage.isCurrent
                      ? "text-hijau-ledger font-bold"
                      : "text-kertas-dingin font-semibold"
                  }`}
                >
                  {stage.role}
                </p>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
}
