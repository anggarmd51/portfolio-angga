"use client";

import Image from "next/image";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolio";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./MotionReveal";

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19] presentation-section"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Pendidikan & Kredensial Profesional
          </div>
          <h2
            id="credentials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Fondasi Akademik & Sertifikasi Profesional
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {EDUCATION_DATA.professionalSummary}
          </p>
        </Reveal>

        <Reveal y={22} duration={0.6}>
          <div className="mb-14 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-5 min-w-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden shadow-md">
                  <Image
                    src={EDUCATION_DATA.logo}
                    alt="Logo Universitas Islam Negeri Sumatera Utara (UIN SU)"
                    fill
                    sizes="96px"
                    className="object-contain p-1"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Pendidikan Formal
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-white">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-200 mt-1">
                    {EDUCATION_DATA.degree} {EDUCATION_DATA.field}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-white/5 w-full md:w-auto">
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
                    Tahun Kelulusan
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {EDUCATION_DATA.graduationYear}
                  </div>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-left">
                  <div className="text-[11px] text-emerald-300 uppercase tracking-wider font-semibold">
                    Indeks Prestasi Kumulatif (IPK)
                  </div>
                  <div className="text-base sm:text-lg font-bold text-emerald-300 mt-0.5">
                    {EDUCATION_DATA.gpa} / 4.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal y={20} duration={0.55}>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
              Sertifikasi & Pelatihan ({CERTIFICATIONS_DATA.length} Sertifikat)
            </h3>
          </div>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            staggerChildren={0.08}
          >
            {CERTIFICATIONS_DATA.map((cert) => (
              <StaggerItem key={cert.id} className="flex">
                <article className="w-full glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                        <Award aria-hidden="true" className="w-4 h-4 text-emerald-400" />
                      </div>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-300 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-start gap-2 text-xs text-slate-300">
                    <Calendar aria-hidden="true" className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                    <span>
                      <span className="font-semibold">
                        {cert.validity ? "Masa berlaku: " : "Periode: "}
                      </span>
                      <span className="font-mono text-[11px]">{cert.validity ?? cert.period}</span>
                    </span>
                  </div>

                  {cert.url?.trim() ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 px-3 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      Verifikasi sertifikat
                      <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Reveal>
      </div>
    </section>
  );
}
