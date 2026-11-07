import React from "react";
import {
  ArrowDownRight,
  Compass,
  Layers,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import PipelineStrip from "@/components/PipelineStrip";
import { hero, type ArchitectureStep } from "@/lib/content";

function ArchitectureIcon({ name }: { name: ArchitectureStep["icon"] }) {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck className="w-4 h-4 text-kuning-stabilo" aria-hidden="true" />;
    case "Compass":
      return <Compass className="w-4 h-4 text-kuning-stabilo" aria-hidden="true" />;
    case "TrendingUp":
      return <TrendingUp className="w-4 h-4 text-kuning-stabilo" aria-hidden="true" />;
    case "Users":
      return <Users className="w-4 h-4 text-kuning-stabilo" aria-hidden="true" />;
  }
}

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full bg-hijau-ledger text-kertas-dingin pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-garis-embun overflow-hidden"
    >
      {/* Aksen Ilustrasi Garis Grid / Koordinat Arsitektural Tipis (SVG Inline) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-full max-w-[680px] stroke-kertas-dingin/[0.07]"
        viewBox="0 0 680 600"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
      >
        <line x1="170" y1="0" x2="170" y2="600" strokeWidth="1" />
        <line x1="340" y1="0" x2="340" y2="600" strokeWidth="1" />
        <line x1="510" y1="0" x2="510" y2="600" strokeWidth="1" />
        <line x1="640" y1="0" x2="640" y2="600" strokeWidth="1" />
        <line x1="60" y1="120" x2="680" y2="120" strokeWidth="1" />
        <line x1="60" y1="240" x2="680" y2="240" strokeWidth="1" />
        <line x1="60" y1="360" x2="680" y2="360" strokeWidth="1" />
        <line x1="60" y1="480" x2="680" y2="480" strokeWidth="1" />
        <polyline
          points="170,430 340,320 510,200 640,90"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <circle cx="170" cy="430" r="4" strokeWidth="1.5" />
        <circle cx="340" cy="320" r="4" strokeWidth="1.5" />
        <circle cx="510" cy="200" r="4" strokeWidth="1.5" />
        <circle cx="640" cy="90" r="4" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-10">
        {/* Split 12-Column Executive Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (7 Cols): Value Proposition & Dual CTAs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-kuning-stabilo/40 bg-kuning-stabilo/10">
              <span
                className="w-2 h-2 rounded-full bg-kuning-stabilo shrink-0"
                aria-hidden="true"
              />
              <span className="font-display text-xs font-bold uppercase tracking-wider text-kuning-stabilo">
                {hero.eyebrow}
              </span>
            </div>

            <h1
              id="hero-heading"
              className="mt-5 font-display font-extrabold leading-[1.06] tracking-[-0.02em] text-[clamp(2.25rem,4.8vw,3.85rem)] text-kertas-dingin"
            >
              <span className="reveal-line block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span
                  style={{ "--i": 0 } as React.CSSProperties}
                  className="text-balance"
                >
                  {hero.headline[0]}
                </span>
              </span>
              <span className="reveal-line block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span
                  style={{ "--i": 1 } as React.CSSProperties}
                  className="text-balance text-kuning-stabilo"
                >
                  {hero.headline[1]}
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[60ch] font-body text-lg sm:text-xl leading-[1.7] text-kertas-dingin/90">
              {hero.sub}
            </p>

            {/* Dual Action CTA Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#proyek"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-kuning-stabilo text-hijau-ledger font-display font-bold text-sm sm:text-base hover:brightness-105 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-kertas-dingin/35 bg-white/5 text-kertas-dingin font-display font-semibold text-sm sm:text-base hover:bg-white/10 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
              >
                <MessageSquare className="w-4 h-4 text-kuning-stabilo" aria-hidden="true" />
                <span>{hero.ctaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 Cols): Executive Sales & Risk Architecture Card */}
          <aside
            aria-label="Arsitektur Eksekusi Penjualan dan Risiko"
            className="lg:col-span-5 rounded-xl border border-kertas-dingin/15 bg-[#092923] p-5 sm:p-6 shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
          >
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-kertas-dingin/15">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-kuning-stabilo/15 border border-kuning-stabilo/40 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-kuning-stabilo" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-kertas-dingin">
                    Sales &amp; Risk Architecture
                  </h2>
                  <p className="font-display text-[11px] text-kertas-dingin/70">
                    Kerangka Kerja Akuisisi &amp; Retensi B2B
                  </p>
                </div>
              </div>
              <span className="font-display text-[11px] font-bold px-2.5 py-1 rounded bg-kuning-stabilo text-hijau-ledger tabular-nums shrink-0">
                4 Tahap Inti
              </span>
            </div>

            <ol className="mt-4 space-y-3">
              {hero.architectureSteps.map((item) => (
                <li
                  key={item.step}
                  className="rounded-lg border border-kertas-dingin/10 bg-white/[0.03] p-3.5 hover:border-kuning-stabilo/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <ArchitectureIcon name={item.icon} />
                      <span className="font-display text-xs font-extrabold text-kuning-stabilo tabular-nums shrink-0">
                        {item.step}.
                      </span>
                      <span className="font-display text-sm font-bold text-kertas-dingin">
                        {item.title}
                      </span>
                    </div>
                    <span className="font-display text-[11px] font-bold px-2 py-0.5 rounded bg-kertas-dingin/10 text-kuning-stabilo tabular-nums whitespace-nowrap shrink-0">
                      {item.metric}
                    </span>
                  </div>
                  <p className="mt-1.5 font-body text-xs sm:text-sm leading-relaxed text-kertas-dingin/80">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        {/* Giant KPI Bento Grid (#pencapaian) */}
        <div id="pencapaian" className="mt-12 sm:mt-14 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-kuning-stabilo">
              Verified Commercial Impact · Metrik Kinerja Faktual
            </p>
            <p className="font-display text-xs text-kertas-dingin/75 tabular-nums">
              Rekam Jejak Kuantitatif Lintas Perbankan, Multifinance &amp; SaaS B2B
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {hero.kpiBento.map((kpi) => (
              <article
                key={kpi.label}
                className={`rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-colors ${
                  kpi.featured
                    ? "border-2 border-kuning-stabilo/80 bg-[#092923]"
                    : "border border-kertas-dingin/15 bg-white/[0.06] hover:border-kuning-stabilo/45"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="font-display text-[11px] font-bold px-2.5 py-0.5 rounded bg-kuning-stabilo text-hijau-ledger tabular-nums whitespace-nowrap">
                      {kpi.badge}
                    </span>
                    <span className="font-display text-[11px] font-semibold text-kertas-dingin/70 tabular-nums whitespace-nowrap">
                      {kpi.period}
                    </span>
                  </div>

                  <p className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-kuning-stabilo tabular-nums">
                    {kpi.metric}
                  </p>
                  <h3 className="mt-2 font-display text-base font-bold text-kertas-dingin">
                    {kpi.label}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-kertas-dingin/15">
                  <p className="font-display text-xs font-semibold text-kertas-dingin/95">
                    {kpi.role}
                  </p>
                  <p className="font-body text-xs text-kertas-dingin/75 mt-0.5">
                    {kpi.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Interactive Career Progression Dashboard Panel */}
        <PipelineStrip />
      </div>
    </section>
  );
}
