"use client";

import { BENTO_DATA } from "@/data/portfolio";
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
import type { MouseEvent } from "react";
import { Reveal, StaggerContainer, StaggerItem } from "./MotionReveal";

const PILLAR_ICONS = [TrendingUp, Users, ShieldAlert];

export default function BentoGrid() {
  const marqueeItems = BENTO_DATA.box4.marqueeText.split(" • ");
  const pointerFine = useMediaQuery("(pointer: fine)");

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
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Reveal */}
        <Reveal className="mb-12 md:mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Profil Eksekutif & Fokus Strategis
          </div>
          <h2
            id="bento-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Arsitektur Pengalaman & Nilai Tambah Komersial
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Sinergi unik antara disiplin tata kelola risiko industri perbankan dan akselerasi pertumbuhan bisnis berbasis ekosistem B2B SaaS.
          </p>
        </Reveal>

        {/* True Four-Box Asymmetrical Bento Grid */}
        {/* Desktop: 8-col left (Narrative on top, Target Roles below), 4-col right (Vertical Three Pillars spanning 2 rows), 12-col bottom (Skills Marquee) */}
        {/* Mobile: single-column vertical stack preserving reading order 1 -> 2 -> 3 -> 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Box 1: Largest Narrative Box (Desktop: upper left, lg:col-span-8 lg:row-start-1) */}
          <div className="lg:col-span-8 lg:row-start-1">
            <Reveal
              y={24}
              duration={0.6}
              className={`h-full glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all shadow-xl relative overflow-hidden group ${pointerFine ? "bento-spotlight" : ""}`}
              onMouseMove={pointerFine ? handleSpotlightMove : undefined}
              onMouseLeave={pointerFine ? resetSpotlight : undefined}
            >
              {/* Ambient accent inside box */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full group-hover:bg-emerald-500/10 transition-colors" />

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Filosofi Kepemimpinan
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug mb-5">
                  {BENTO_DATA.box1.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {BENTO_DATA.box1.body}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Data-Driven Execution
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  C-Level Deal Closing
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Custom In-House CRM Developer
                </span>
              </div>
            </Reveal>
          </div>

          {/* Box 2: Medium Target Roles Box (Desktop: lower left, lg:col-span-8 lg:row-start-2) */}
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
                <p className="text-xs text-slate-400 mb-6">
                  Kapabilitas siap pakai untuk memimpin target pertumbuhan unit bisnis:
                </p>

                <StaggerContainer
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                  staggerChildren={0.08}
                >
                  {BENTO_DATA.box2.roles.map((role, idx) => (
                    <StaggerItem key={idx}>
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all">
                        <span className="text-sm font-bold text-white tracking-tight">
                          {role}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                          0{idx + 1}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </Reveal>
          </div>

          {/* Box 3: Narrower VERTICAL Three-Pillar Box (Desktop: right side, lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2) */}
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
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Tiga domain kompetensi inti yang saling menguatkan dalam setiap penugasan komersial.
                </p>
              </div>

              {/* Vertically stacked pillars with StaggerContainer */}
              <StaggerContainer
                className="flex flex-col gap-4"
                staggerChildren={0.1}
              >
                {BENTO_DATA.box3.pillars.map((pillar, idx) => {
                  const Icon = PILLAR_ICONS[idx] || Sparkles;
                  return (
                    <StaggerItem key={idx}>
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

          {/* Box 4: Full-Width Skills Marquee (Desktop & Mobile, lg:col-span-12 lg:row-start-3) */}
          <div className="lg:col-span-12 lg:row-start-3">
            <Reveal
              y={20}
              duration={0.55}
              className={`glass-card p-4 sm:p-5 rounded-2xl border border-white/10 overflow-hidden relative ${pointerFine ? "bento-spotlight" : ""}`}
              onMouseMove={pointerFine ? handleSpotlightMove : undefined}
              onMouseLeave={pointerFine ? resetSpotlight : undefined}
            >
              <div className="flex items-center gap-3 mb-3 px-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Peta Keterampilan Utama & Metodologi
                </span>
              </div>

              {/* Marquee Wrapper with continuous animation */}
              <div className="overflow-hidden relative w-full py-1">
                {/* Fade gradients at edges */}
                <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
                <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee flex items-center gap-3">
                  {/* First set */}
                  {marqueeItems.map((item, idx) => (
                    <span
                      key={`m1-${idx}`}
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                  {/* Duplicate set for seamless continuous marquee loop */}
                  {marqueeItems.map((item, idx) => (
                    <span
                      key={`m2-${idx}`}
                      aria-hidden="true"
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
