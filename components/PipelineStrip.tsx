"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Briefcase, Sparkles } from "lucide-react";
import { pipelineStages, type PipelineStageItem } from "@/lib/portfolio-data";
import { hero } from "@/lib/content";

export default function PipelineStrip() {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<PipelineStageItem | null>(null);

  return (
    <div className="mt-8 rounded-xl border border-kertas-dingin/20 bg-[#092923]/90 p-5 sm:p-6">
      {/* Top Bar: Dashboard Header & SaaS Transition Pill */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-kertas-dingin/15">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-md bg-kertas-dingin/10 flex items-center justify-center shrink-0">
            <Briefcase className="w-3.5 h-3.5 text-kuning-stabilo" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-kertas-dingin">
              Timeline Progresi Karier Proporsional (2019 – 2026)
            </h2>
            <p className="font-body text-xs text-kertas-dingin/75">
              Lebar tiap blok proporsional terhadap durasi masa jabatan (7 posisi berurutan)
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-md bg-kuning-stabilo text-hijau-ledger font-display text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>2025: {hero.stripTransition}</span>
        </div>
      </div>

      {/* Desktop SaaS Start Marker Header */}
      <div className="hidden md:flex items-end mt-4 mb-1.5" aria-hidden="true">
        {pipelineStages.map((stage) => (
          <React.Fragment key={`header-${stage.label}`}>
            {stage.saasStart && (
              <div className="relative w-0.5 shrink-0">
                <span className="absolute bottom-0 left-0 font-display text-[11px] font-bold uppercase tracking-wider text-kuning-stabilo whitespace-nowrap">
                  ↓ {hero.stripTransition}
                </span>
              </div>
            )}
            <div style={{ flexGrow: stage.months }} className="basis-0 h-4" />
          </React.Fragment>
        ))}
      </div>

      {/* Proportional 7-Stage Pipeline Bar */}
      <motion.ol
        aria-label="Urutan kronologis perjalanan karier"
        className="mt-2 md:mt-0 flex flex-col md:flex-row items-stretch origin-left rounded-lg overflow-hidden border border-kertas-dingin/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.9, ease: [0.23, 1, 0.32, 1] }
        }
        onMouseLeave={() => setActiveStage(null)}
      >
        {pipelineStages.map((stage, index) => {
          const isSelected = activeStage?.label === stage.label;
          return (
            <React.Fragment key={stage.label}>
              {/* 2px Kuning Stabilo Divider Marking Start of SaaS Era */}
              {stage.saasStart && (
                <li
                  aria-hidden="true"
                  className="flex md:block items-center gap-3 px-3 py-2 md:p-0 bg-[#0D3B33] md:bg-transparent"
                >
                  <div className="hidden md:block w-1 h-full bg-kuning-stabilo shrink-0" />
                  <div className="flex md:hidden items-center gap-2.5 w-full">
                    <span className="h-0.5 w-6 bg-kuning-stabilo shrink-0" />
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-kuning-stabilo">
                      {hero.stripTransition}
                    </span>
                    <span className="h-px flex-1 bg-kertas-dingin/20" />
                  </div>
                </li>
              )}

              <li
                tabIndex={0}
                style={{ flexGrow: stage.months }}
                onMouseEnter={() => setActiveStage(stage)}
                onFocus={() => setActiveStage(stage)}
                onBlur={() => setActiveStage(null)}
                className={`md:basis-0 px-3.5 py-3.5 border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 border-kertas-dingin/15 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-kuning-stabilo ${
                  stage.latest
                    ? "bg-kuning-stabilo text-hijau-ledger"
                    : isSelected
                    ? "bg-kertas-dingin/20 text-kertas-dingin"
                    : "bg-white/[0.06] text-kertas-dingin hover:bg-white/[0.14]"
                }`}
              >
                <div className="flex flex-col justify-between h-full gap-1">
                  <div className="flex items-baseline justify-between md:block gap-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`font-display text-[10px] font-bold tabular-nums ${
                          stage.latest
                            ? "text-hijau-ledger/80"
                            : "text-kuning-stabilo"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <p
                        className={`font-display text-xs sm:text-sm font-extrabold tracking-tight whitespace-nowrap ${
                          stage.latest ? "text-hijau-ledger" : "text-kertas-dingin"
                        }`}
                      >
                        {stage.label}
                      </p>
                    </div>
                    <p
                      className={`font-display text-xs tabular-nums whitespace-nowrap md:mt-1 ${
                        stage.latest
                          ? "text-hijau-ledger/90 font-bold"
                          : "text-kertas-dingin/75"
                      }`}
                    >
                      {stage.years}
                    </p>
                  </div>

                  {/* Mobile Full Role Title & Metric */}
                  <div className="md:hidden mt-1.5">
                    <p
                      className={`font-body text-sm leading-snug ${
                        stage.latest
                          ? "text-hijau-ledger font-semibold"
                          : "text-kertas-dingin/90"
                      }`}
                    >
                      {stage.title}
                    </p>
                    {stage.metric && (
                      <p
                        className={`font-display text-xs mt-1 font-semibold ${
                          stage.latest
                            ? "text-hijau-ledger/90"
                            : "text-kuning-stabilo"
                        }`}
                      >
                        {stage.metric}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            </React.Fragment>
          );
        })}
      </motion.ol>

      {/* Interactive Status Bar Below Strip */}
      <div
        aria-live="polite"
        className="mt-3.5 pt-3 border-t border-kertas-dingin/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-h-[1.75rem]"
      >
        {activeStage ? (
          <>
            <p className="font-display text-xs sm:text-sm font-bold text-kertas-dingin">
              <span className="text-kuning-stabilo tabular-nums mr-2">
                [{activeStage.years}]
              </span>
              {activeStage.title}
            </p>
            {activeStage.metric && (
              <span className="font-display text-xs font-bold px-2.5 py-0.5 rounded bg-kuning-stabilo/15 border border-kuning-stabilo/40 text-kuning-stabilo self-start sm:self-auto">
                {activeStage.metric}
              </span>
            )}
          </>
        ) : (
          <>
            <p className="font-body text-xs sm:text-sm text-kertas-dingin/80">
              {hero.stripCaption} — arahkan kursor atau fokuskan tombol tab pada tahap di atas untuk detail jabatan.
            </p>
            <span className="font-display text-xs font-semibold text-kuning-stabilo tabular-nums">
              Total 7 Jabatan · 6 Institusi Korporat
            </span>
          </>
        )}
      </div>
    </div>
  );
}
