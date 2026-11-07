import React from "react";
import {
  Award,
  Building2,
  CheckCircle2,
  Cpu,
  Quote,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  certifications,
  corporateFootprint,
  executiveThesis,
  skills,
  type CompanyLogoKey,
  type SkillBentoItem,
} from "@/lib/content";

function BrandLogoSvg({ company }: { company: CompanyLogoKey }) {
  switch (company) {
    case "nusawork":
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#007A5E" />
          <path
            d="M10 25V11h3.6l6.8 9.2V11H24v14h-3.6l-6.8-9.2V25H10Z"
            fill="#FFFFFF"
          />
          <circle cx="27.5" cy="11.5" r="2.2" fill="#F2B705" />
        </svg>
      );
    case "dretail":
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#1E3A8A" />
          <path
            d="M10 11h7.5c4.2 0 7 2.6 7 7s-2.8 7-7 7H10V11Zm3.6 3.2v7.6h3.7c2.3 0 3.6-1.4 3.6-3.8s-1.3-3.8-3.6-3.8h-3.7Z"
            fill="#FFFFFF"
          />
          <rect x="25.5" y="11" width="2.5" height="14" rx="1.25" fill="#38BDF8" />
        </svg>
      );
    case "clipan":
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#004B87" />
          <path
            d="M23.5 14.2a5.5 5.5 0 1 0 0 7.6l2.4 2.3a8.8 8.8 0 1 1 0-12.2l-2.4 2.3Z"
            fill="#FFFFFF"
          />
          <circle cx="21" cy="18" r="2.6" fill="#F59E0B" />
        </svg>
      );
    case "acc":
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#005BAA" />
          <path
            d="M18 9.5 26.5 25h-3.8l-1.6-3.2h-6.2L13.3 25H9.5L18 9.5Zm0 5.2-2 4.1h4l-2-4.1Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "bankmega":
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#F37021" />
          <path
            d="M8.5 25V11h3.8l5.7 7.8 5.7-7.8h3.8v14h-3.5v-8.6L18 24.2l-6-7.8V25H8.5Z"
            fill="#FFFFFF"
          />
          <rect x="8.5" y="26.5" width="19" height="2" rx="1" fill="#00549A" />
        </svg>
      );
    case "cnaf":
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#B91C1C" />
          <path d="M18 8.5 27.5 18 18 27.5 8.5 18 18 8.5Z" fill="#FFFFFF" />
          <path d="M18 12.5 23.5 18 18 23.5 12.5 18 18 12.5Z" fill="#B91C1C" />
        </svg>
      );
  }
}

function SkillIcon({
  name,
  dark,
}: {
  name: SkillBentoItem["icon"];
  dark: boolean;
}) {
  const iconClass = dark
    ? "w-5 h-5 text-kuning-stabilo"
    : "w-5 h-5 text-hijau-ledger";
  switch (name) {
    case "TrendingUp":
      return <TrendingUp className={iconClass} aria-hidden="true" />;
    case "Users":
      return <Users className={iconClass} aria-hidden="true" />;
    case "ShieldCheck":
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case "Cpu":
      return <Cpu className={iconClass} aria-hidden="true" />;
  }
}

export default function SkillsCertifications() {
  return (
    <section
      id="keahlian"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 w-full py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
        {/* 1. Institutional Trust Banner (Corporate Footprint Strip) */}
        <div className="bento-card p-6 sm:p-7 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-garis-embun">
            <div className="flex items-center gap-2.5">
              <Building2
                className="w-4 h-4 text-teal-tautan shrink-0"
                aria-hidden="true"
              />
              <h2 className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-hijau-ledger">
                Jejak Institusi &amp; Korporasi Tempat Berkarier (2019 – 2026)
              </h2>
            </div>
            <span className="font-display text-xs font-semibold text-abu-hijau tabular-nums">
              Perbankan · Multifinance · Enterprise &amp; Retail SaaS B2B
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
            {corporateFootprint.map((corp) => (
              <div
                key={corp.key}
                className="rounded-lg border border-garis-embun/80 bg-kertas-dingin/60 p-3.5 flex items-center lg:flex-col lg:items-start gap-3 hover:border-hijau-ledger/40 hover:bg-white transition-colors"
              >
                <BrandLogoSvg company={corp.key} />
                <div className="min-w-0">
                  <p className="font-display text-xs font-extrabold text-hijau-ledger truncate">
                    {corp.shortName}
                  </p>
                  <p className="font-body text-xs text-abu-hijau truncate mt-0.5">
                    {corp.sector}
                  </p>
                  <span className="inline-block mt-1.5 font-display text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-garis-embun text-hijau-ledger tabular-nums">
                    {corp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Executive Thesis Statement Card */}
        <div className="bento-card-dark p-7 sm:p-10 mb-14 relative overflow-hidden">
          <div className="flex items-center gap-2 text-kuning-stabilo mb-3">
            <Quote className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="font-display text-xs font-extrabold uppercase tracking-wider">
              {executiveThesis.eyebrow}
            </span>
          </div>
          <blockquote className="font-display text-xl sm:text-2xl lg:text-[28px] font-extrabold leading-[1.25] tracking-tight text-kertas-dingin max-w-[46ch]">
            &ldquo;{executiveThesis.quote}&rdquo;
          </blockquote>
          <p className="mt-4 font-body text-base sm:text-lg leading-[1.7] text-kertas-dingin/85 max-w-[68ch]">
            {executiveThesis.sub}
          </p>
        </div>

        {/* 3. Asymmetric 4-Card Core Capabilities Bento Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <p className="font-display text-xs font-extrabold uppercase tracking-wider text-teal-tautan">
                Core B2B Competencies
              </p>
              <h2
                id="skills-heading"
                className="mt-1 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-hijau-ledger"
              >
                Arsitektur Kapabilitas Komersial &amp; Risiko
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-abu-hijau max-w-[44ch]">
              Empat pilar kompetensi yang memadukan eksekusi penjualan B2B, mitigasi kredit, dan kapabilitas teknologi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {skills.map((skill, idx) => (
              <article
                key={skill.id}
                className={`${skill.colSpan} ${
                  skill.dark ? "bento-card-dark" : "bento-card"
                } p-6 sm:p-8 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        skill.dark
                          ? "bg-kuning-stabilo/15 border border-kuning-stabilo/40"
                          : "bg-kertas-dingin border border-garis-embun"
                      }`}
                    >
                      <SkillIcon name={skill.icon} dark={skill.dark} />
                    </span>
                    <span
                      className={`font-display text-xs font-extrabold tabular-nums px-2.5 py-1 rounded ${
                        skill.dark
                          ? "bg-kuning-stabilo text-hijau-ledger"
                          : "bg-kertas-dingin text-hijau-ledger border border-garis-embun"
                      }`}
                    >
                      PILAR 0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 font-display text-xl sm:text-2xl font-extrabold tracking-tight ${
                      skill.dark ? "text-kertas-dingin" : "text-hijau-ledger"
                    }`}
                  >
                    {skill.label}
                  </h3>

                  <p
                    className={`mt-2.5 font-body text-base sm:text-lg leading-[1.7] ${
                      skill.dark ? "text-kertas-dingin/85" : "text-abu-hijau"
                    }`}
                  >
                    {skill.text}
                  </p>

                  {/* Workflow & Competency Chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-display text-xs font-semibold px-3 py-1 rounded-md ${
                          skill.dark
                            ? "bg-white/10 text-kertas-dingin border border-kertas-dingin/15"
                            : "bg-kertas-dingin text-hijau-ledger border border-garis-embun"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Proof of Execution Footer */}
                <div
                  className={`mt-6 pt-4 border-t flex items-start gap-2.5 ${
                    skill.dark
                      ? "border-kertas-dingin/15"
                      : "border-garis-embun"
                  }`}
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      skill.dark ? "text-kuning-stabilo" : "text-teal-tautan"
                    }`}
                    aria-hidden="true"
                  />
                  <p
                    className={`font-display text-xs sm:text-sm font-semibold leading-snug ${
                      skill.dark ? "text-kuning-stabilo" : "text-hijau-ledger"
                    }`}
                  >
                    {skill.proof}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 4. Verified Credentials & Certifications Bento (2x3 Grid) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <p className="font-display text-xs font-extrabold uppercase tracking-wider text-teal-tautan">
                Verified Licenses &amp; Credentials
              </p>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-extrabold tracking-tight text-hijau-ledger">
                6 Sertifikasi Resmi &amp; Lisensi Industri
              </h3>
            </div>
            <p className="font-display text-xs font-semibold text-abu-hijau tabular-nums">
              HubSpot Academy · Google.org &amp; ADB · DBS Foundation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {certifications.map((cert) => (
              <article
                key={cert.name}
                className="bento-card p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-display text-[11px] font-bold px-2.5 py-1 rounded bg-kertas-dingin text-teal-tautan border border-garis-embun">
                      <Award className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{cert.category}</span>
                    </span>
                    <span className="font-display text-xs font-bold text-hijau-ledger tabular-nums">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="mt-3.5 font-display text-base font-extrabold text-hijau-ledger leading-snug">
                    {cert.name}
                  </h4>
                </div>

                <p className="mt-3 pt-3 border-t border-garis-embun/80 font-body text-sm text-abu-hijau">
                  {cert.issuer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
