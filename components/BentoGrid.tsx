"use client";

import { BENTO_DATA, SALES_WORKFLOW_STEPS } from "@/data/portfolio";
import {
  Compass,
  Briefcase,
  TrendingUp,
  Users,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { motion } from "motion/react";
import { Reveal, StaggerContainer, StaggerItem } from "./MotionReveal";
import ToolMarquee from "./ToolMarquee";

const PILLAR_ICONS = [TrendingUp, Users, ShieldAlert];

const EXPERIENCE_TAGS = [
  "Pengelolaan Pipeline & Tindak Lanjut Prospek",
  "Presentasi & Demo Produk ke Tim HR dan Manajemen",
  "Pembuat Aplikasi CRM Pribadi (AR CRM)",
];

export default function BentoGrid() {
  const pointerFine = useMediaQuery("(pointer: fine)");
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const workflowTabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleWorkflowKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
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
      setActiveWorkflowIndex(nextIndex);
      workflowTabRefs.current[nextIndex]?.focus();
    }
  };

  const handleSpotlightMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!pointerFine) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  const resetSpotlight = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--spotlight-x", "-1000px");
    event.currentTarget.style.setProperty("--spotlight-y", "-1000px");
  };

  return (
    <section
      id="profile"
      aria-labelledby="bento-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19] presentation-section"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Profil & Fokus Peran
          </div>
          <h2
            id="bento-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            {BENTO_DATA.sectionTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {BENTO_DATA.sectionSubtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:row-start-1">
            <Reveal
              y={24}
              duration={0.6}
              className={`h-full glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all shadow-xl relative overflow-hidden group ${pointerFine ? "bento-spotlight" : ""}`}
              onMouseMove={pointerFine ? handleSpotlightMove : undefined}
              onMouseLeave={pointerFine ? resetSpotlight : undefined}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full group-hover:bg-emerald-500/10 transition-colors" />
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Ringkasan Pengalaman
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug mb-5">
                  {BENTO_DATA.box1.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {BENTO_DATA.box1.body}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                {EXPERIENCE_TAGS.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:row-start-2">
            <Reveal
              y={24}
              delay={0.1}
              duration={0.6}
              className={`h-full glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all shadow-xl relative ${pointerFine ? "bento-spotlight" : ""}`}
              onMouseMove={pointerFine ? handleSpotlightMove : undefined}
              onMouseLeave={pointerFine ? resetSpotlight : undefined}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {BENTO_DATA.box2.label}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  Posisi yang menjadi fokus berikutnya:
                </p>

                <StaggerContainer
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                  staggerChildren={0.08}
                >
                  {BENTO_DATA.box2.roles.map((role) => (
                    <StaggerItem key={role}>
                      <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all">
                        <span className="text-sm font-bold text-white tracking-tight">
                          {role}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2">
            <Reveal
              y={24}
              delay={0.15}
              duration={0.6}
              className={`h-full glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between ${pointerFine ? "bento-spotlight" : ""}`}
              onMouseMove={pointerFine ? handleSpotlightMove : undefined}
              onMouseLeave={pointerFine ? resetSpotlight : undefined}
            >
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {BENTO_DATA.box3.title}
                </span>
                <p className="text-sm text-slate-300 mt-1">
                  Cakupan pekerjaan yang pernah ditangani.
                </p>
              </div>

              <StaggerContainer className="flex flex-col gap-4" staggerChildren={0.1}>
                {BENTO_DATA.box3.pillars.map((pillar, idx) => {
                  const Icon = PILLAR_ICONS[idx] || Sparkles;
                  return (
                    <StaggerItem key={pillar.title}>
                      <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all flex flex-col">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                          <Icon className="w-4 h-4 text-emerald-400" />
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </Reveal>
          </div>

          <div className="lg:col-span-12 lg:row-start-3">
            <Reveal
              y={20}
              duration={0.55}
              className={`glass-card p-5 sm:p-6 rounded-2xl border border-white/10 relative ${pointerFine ? "bento-spotlight" : ""}`}
              onMouseMove={pointerFine ? handleSpotlightMove : undefined}
              onMouseLeave={pointerFine ? resetSpotlight : undefined}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Kompetensi Utama
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BENTO_DATA.box4.competencyCategories.map((category) => (
                  <div
                    key={category.title}
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
                  >
                    <h4 className="text-sm font-bold text-white mb-3">
                      {category.title}
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="inline-flex items-center px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-12 lg:row-start-4">
            <Reveal
              y={16}
              duration={0.45}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Proses Kerja
                  </span>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-white">
                    Alur Penjualan B2B
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Enam tahap, dari pemetaan akun hingga retensi.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Enam tahap alur penjualan B2B"
                aria-orientation="horizontal"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
              >
                {SALES_WORKFLOW_STEPS.map((step, index) => {
                  const isActive = activeWorkflowIndex === index;
                  return (
                    <button
                      key={step.id}
                      ref={(element) => {
                        workflowTabRefs.current[index] = element;
                      }}
                      id={`workflow-tab-${step.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="sales-workflow-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActiveWorkflowIndex(index)}
                      onKeyDown={(event) => handleWorkflowKeyDown(event, index)}
                      className={`min-h-[44px] rounded-xl border px-2.5 py-2 text-left text-xs sm:text-sm font-semibold leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                        isActive
                          ? "bg-emerald-500/15 border-emerald-400/50 text-emerald-200"
                          : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:text-white"
                      }`}
                    >
                      <span className="block text-[10px] font-mono text-slate-300">
                        {step.number}
                      </span>
                      <span>{step.label}</span>
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={SALES_WORKFLOW_STEPS[activeWorkflowIndex].id}
                id="sales-workflow-panel"
                role="tabpanel"
                aria-labelledby={`workflow-tab-${SALES_WORKFLOW_STEPS[activeWorkflowIndex].id}`}
                tabIndex={0}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="mt-4 min-h-20 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 sm:px-5 sm:py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {SALES_WORKFLOW_STEPS[activeWorkflowIndex].title}
                </h4>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                  {SALES_WORKFLOW_STEPS[activeWorkflowIndex].description}
                </p>
              </motion.div>
              <ToolMarquee />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
