"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { SALES_WORKFLOW_STEPS } from "@/data/portfolio";

export default function SalesMethodologySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

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

  const activeStep = SALES_WORKFLOW_STEPS[activeIndex];

  return (
    <section
      id="methodology"
      aria-labelledby="methodology-heading"
      className="presentation-section border-t border-white/[0.08] bg-obsidian px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
            Sales Methodology
          </p>
          <h2
            id="methodology-heading"
            className="font-heading text-3xl font-semibold tracking-[-0.04em] text-soft-white sm:text-4xl md:text-5xl"
          >
            Alur Penjualan B2B
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
            Enam tahap konsultatif—dari pemetaan akun hingga retensi—dengan ruang untuk memahami konteks dan kebutuhan tiap klien.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Enam tahap alur penjualan B2B"
          aria-orientation="horizontal"
          className="grid grid-cols-2 border-y border-muted-text/20 sm:grid-cols-3 lg:grid-cols-6"
        >
          {SALES_WORKFLOW_STEPS.map((step, index) => {
            const active = index === activeIndex;
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
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`min-h-[76px] border-b border-muted-text/15 px-3 py-3 text-left transition-colors focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal sm:px-4 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                  active
                    ? "bg-signature-teal/[0.08]"
                    : "hover:bg-white/[0.035]"
                }`}
              >
                <span className="block font-mono text-[11px] tracking-wide text-muted-text">
                  {step.number}
                </span>
                <span className={`mt-1 block text-xs font-semibold leading-5 sm:text-sm ${active ? "text-soft-white" : "text-soft-white/75"}`}>
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>

        {activeStep && (
          <div
            key={activeStep.id}
            id="sales-workflow-panel"
            role="tabpanel"
            aria-labelledby={`workflow-tab-${activeStep.id}`}
            tabIndex={0}
            className="min-h-36 border-b border-muted-text/20 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal sm:py-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-text">
              Tahap {activeStep.number}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold tracking-[-0.03em] text-soft-white sm:text-3xl">
              {activeStep.title.replace(/^\d+\s/, "")}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-text sm:text-base">
              {activeStep.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
