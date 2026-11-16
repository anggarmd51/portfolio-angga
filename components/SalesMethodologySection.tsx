"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { SALES_WORKFLOW_STEPS } from "@/data/portfolio";
import { useScrollLinkedProgress } from "@/hooks/useScrollLinkedProgress";
import EditorialDivider from "./EditorialDivider";

const DETAIL_LABELS = [
  { key: "objective", label: "Objective" },
  { key: "activity", label: "Aktivitas Utama" },
  { key: "output", label: "Output Proses" },
] as const;

export default function SalesMethodologySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const scrollPathRef = useRef<SVGPathElement | null>(null);
  const sectionRef = useScrollLinkedProgress<HTMLElement>(scrollPathRef);
  const activeStep = SALES_WORKFLOW_STEPS[activeIndex];

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % SALES_WORKFLOW_STEPS.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + SALES_WORKFLOW_STEPS.length) % SALES_WORKFLOW_STEPS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = SALES_WORKFLOW_STEPS.length - 1;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="methodology"
      aria-labelledby="methodology-heading"
      ref={sectionRef}
      className="presentation-section border-t border-white/[0.08] bg-background px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            SALES METHODOLOGY
          </p>
          <h2
            id="methodology-heading"
            className="font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl"
          >
            Alur Penjualan B2B
          </h2>
          <EditorialDivider className="mt-5 max-w-xs" />
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Enam tahap konsultatif—dari pemetaan akun hingga retensi—dengan ruang untuk memahami konteks dan kebutuhan tiap klien.
          </p>
        </header>

        <div className="sales-stepper-shell">
          <div className="sales-stepper-scroll" aria-label="Jalur tahap penjualan, geser horizontal untuk melihat semua tahap">
            <div
              role="tablist"
              aria-label="Enam tahap alur penjualan B2B"
              aria-orientation="horizontal"
              className="sales-stepper-track"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 1000 4"
                preserveAspectRatio="none"
                className="sales-stepper-line"
              >
                <path d="M 0 2 H 1000" pathLength="1" className="sales-stepper-line-track" />
                <path
                  ref={scrollPathRef}
                  d="M 0 2 H 1000"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  className="sales-stepper-line-scroll"
                />
                <path
                  d="M 0 2 H 1000"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={1 - activeIndex / (SALES_WORKFLOW_STEPS.length - 1)}
                  className="sales-stepper-line-progress"
                />
              </svg>

              {SALES_WORKFLOW_STEPS.map((step, index) => {
                const active = index === activeIndex;
                const complete = index < activeIndex;
                return (
                  <button
                    key={step.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    id={`workflow-tab-${step.id}`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="sales-workflow-panel"
                    aria-label={`Tahap ${step.number}: ${step.label}`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className="sales-stepper-node focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <span
                      aria-hidden="true"
                      className={`sales-stepper-number ${active ? "is-active" : complete ? "is-complete" : ""}`}
                    >
                      {step.number}
                    </span>
                    <span className={`sales-stepper-label ${active ? "is-active" : ""}`}>
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] font-medium tracking-wide text-muted-foreground sm:hidden">
            Geser untuk melihat semua tahapan
          </p>
        </div>

        {activeStep ? (
          <div
            key={activeStep.id}
            id="sales-workflow-panel"
            role="tabpanel"
            aria-labelledby={`workflow-tab-${activeStep.id}`}
            aria-live="polite"
            tabIndex={0}
            className="sales-journey-panel mt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal sm:mt-10"
          >
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-5 sm:mb-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signature-teal">
                  Tahap {activeStep.number} / 06
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                  {activeStep.label}
                </h3>
              </div>
              <span className="font-mono text-sm text-muted-foreground">{activeStep.number} — 06</span>
            </div>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {DETAIL_LABELS.map(({ key, label }, index) => (
                <article key={key} className="sales-journey-detail">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-signature-teal">0{index + 1}</span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-foreground/90">
                    {activeStep[key]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
