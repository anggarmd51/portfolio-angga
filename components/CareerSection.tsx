"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CAREER_ROLES, type CareerRole } from "@/data/portfolio";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { useScrollLinkedProgress } from "@/hooks/useScrollLinkedProgress";
import EditorialDivider from "./EditorialDivider";

function RoleDetail({ role }: { role: CareerRole }) {
  return (
    <article
      aria-live="polite"
      className="border-l-2 border-signature-teal/70 bg-surface p-5 sm:p-7"
    >
      <div className="flex items-start gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white">
          <Image
            src={role.logo}
            alt={role.logoAlt}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {role.isCurrentRole ? "Peran saat ini" : "Pengalaman profesional"}
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold leading-tight tracking-[-0.035em] text-foreground sm:text-3xl">
            {role.role}
          </h3>
          <p className="mt-1.5 text-sm font-medium leading-6 text-muted-foreground sm:text-base">
            {role.company}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-y border-muted-text/15 py-3 text-xs text-muted-foreground sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <CalendarDays aria-hidden="true" className="h-4 w-4 text-signature-teal" />
          {role.period}
        </span>
        {role.location && (
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" className="h-4 w-4 text-signature-teal" />
            {role.location}
          </span>
        )}
      </div>

      {role.industry && (
        <p className="mt-5 text-sm text-muted-foreground">
          Industri <span className="px-1.5 text-muted-foreground/60">/</span>
          <span className="font-medium text-foreground">{role.industry}</span>
        </p>
      )}

      <div className="mt-6">
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Ruang Lingkup Pekerjaan
        </h4>
        <ul className="mt-3 space-y-3">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-foreground/90 sm:text-base">
              <span aria-hidden="true" className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-signature-teal" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 border-t border-muted-text/15 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Core Development
        </p>
        <p className="mt-2 text-sm leading-7 text-foreground sm:text-base">
          {role.coreDevelopment}
        </p>
      </div>
    </article>
  );
}

export default function CareerSection() {
  const scrollPathRef = useRef<SVGPathElement | null>(null);
  const sectionRef = useScrollLinkedProgress<HTMLElement>(scrollPathRef);
  const [selectedRoleId, setSelectedRoleId] = useState(CAREER_ROLES[0]?.id ?? "");
  const selectedIndex = Math.max(
    0,
    CAREER_ROLES.findIndex((role) => role.id === selectedRoleId)
  );
  const selectedRole = CAREER_ROLES[selectedIndex];
  const progress = CAREER_ROLES.length > 1 ? selectedIndex / (CAREER_ROLES.length - 1) : 1;

  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      ref={sectionRef}
      className="presentation-section relative border-t border-white/[0.08] bg-background px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mb-12 max-w-4xl md:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <BriefcaseBusiness aria-hidden="true" className="h-4 w-4 text-signature-teal" />
            CAREER MILESTONES
          </p>
          <h2
            id="career-heading"
            className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl"
          >
            From Credit Analysis to B2B SaaS &amp; Enterprise Connectivity
          </h2>
          <EditorialDivider className="mt-5 max-w-xs" />
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Tujuh milestone karier yang bergerak dari survei kredit dan pembiayaan, menuju penjualan solusi digital, lalu konektivitas korporasi.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12 lg:gap-20">
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {CAREER_ROLES.length} Milestone Karier
            </h3>
            <div className="relative">
              <svg
                aria-hidden="true"
                focusable="false"
                className="pointer-events-none absolute left-0 top-[2.75rem] h-[calc(100%-5.5rem)] w-6"
                viewBox="0 0 24 640"
                preserveAspectRatio="none"
              >
                <path d="M12 0V640" pathLength="1" fill="none" stroke="rgba(166,176,189,0.24)" strokeWidth="1.5" />
                <path
                  ref={scrollPathRef}
                  d="M12 0V640"
                  pathLength="1"
                  fill="none"
                  stroke="rgba(25,198,154,0.48)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  className="career-scroll-progress"
                />
                <path
                  d="M12 0V640"
                  pathLength="1"
                  fill="none"
                  stroke="#19C69A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="1"
                  strokeDashoffset={1 - progress}
                  className="transition-[stroke-dashoffset] duration-300"
                />
              </svg>

              <ol aria-label="Daftar tujuh milestone karier" className="relative">
                {CAREER_ROLES.map((role, index) => {
                  const active = role.id === selectedRoleId;
                  const latest = index < 2;
                  return (
                    <li key={role.id} className="min-h-[5.5rem] border-b border-white/[0.08] last:border-b-0">
                      <button
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSelectedRoleId(role.id)}
                        onFocus={() => setSelectedRoleId(role.id)}
                        className={`group relative flex min-h-[5.5rem] w-full items-center pl-8 pr-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal focus-visible:ring-inset ${
                          active ? "bg-white/[0.035]" : "hover:bg-white/[0.025]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute left-[7px] top-1/2 z-10 h-[10px] w-[10px] -translate-y-1/2 rounded-full border transition-colors ${
                            active || role.isCurrentRole
                              ? "border-signature-teal bg-signature-teal shadow-[0_0_0_4px_rgba(25,198,154,0.10)]"
                              : "border-muted-text/60 bg-background group-hover:border-signature-teal/70"
                          }`}
                        />
                        <span className="min-w-0 flex-1 py-3">
                          <span className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-muted-foreground">
                            <span>{role.period}</span>
                            {latest && (
                              <span className="rounded-sm border border-signature-teal/30 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] text-signature-teal">
                                {role.isCurrentRole ? "Aktif" : "Terbaru"}
                              </span>
                            )}
                          </span>
                          <span className={`mt-1 block truncate text-sm font-semibold sm:text-base ${active ? "text-foreground" : "text-foreground/80"}`}>
                            {role.company}
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                            {role.role}
                          </span>
                        </span>
                      </button>

                      {active && (
                        <div className="pb-5 pl-8 md:hidden">
                          <RoleDetail role={role} />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {selectedRole && (
            <div className="hidden md:block md:sticky md:top-8 md:self-start">
              <RoleDetail role={selectedRole} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
