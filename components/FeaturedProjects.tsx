"use client";

import React, { useState } from "react";
import { ExternalLink, Building2 } from "lucide-react";

interface ProjectItem {
  id: string;
  initials: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  url?: string;
  statusBadge?: string;
  colSpanClass: string;
  featuredBlock?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "lokerresmi",
    initials: "LR",
    title: "LokerResmi.id",
    role: "Web Developer & Inisiator Proyek",
    description:
      "Platform bursa lowongan kerja terverifikasi yang dirancang dan dibangun mandiri secara independen.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://lokerresmi.vercel.app",
    colSpanClass: "col-span-12 lg:col-span-8",
    featuredBlock: true,
  },
  {
    id: "arcrm",
    initials: "AR",
    title: "AR CRM App",
    role: "Product Creator & Developer",
    description:
      "Mobile-first PWA untuk pelacakan pipeline sales personal, logging aktivitas prospek B2B, dan leads prospecting.",
    techStack: ["React", "TypeScript", "Tailwind", "Firebase"],
    url: "https://arcrmapp.vercel.app/",
    colSpanClass: "col-span-12 lg:col-span-4",
    featuredBlock: true,
  },
  {
    id: "thirteen",
    initials: "TP",
    title: "Thirteen Project",
    role: "Web Developer (Katalog & Portofolio Klien)",
    description:
      "Website katalog dan portofolio profesional untuk kebutuhan branding dan modifikasi otomotif.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    url: "https://thirteenproject.vercel.app",
    colSpanClass: "col-span-12 lg:col-span-6",
  },
  {
    id: "bale-btn",
    initials: "LB",
    title: "Lending balé by BTN",
    role: "PIC Project (PT Beran Solusindo Pratama)",
    description:
      "Memimpin dan mengelola operasional proyek pembiayaan digital dan kemitraan perbankan balé by BTN sebagai PIC vendor.",
    techStack: ["Operational Management", "Banking Tech", "FinOps"],
    statusBadge: "Corporate Vendor Partnership",
    colSpanClass: "col-span-12 lg:col-span-6",
  },
];

export default function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="proyek"
      aria-labelledby="featured-projects-heading"
      className="border-b border-garis-embun py-16"
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Header Seksi (Kolom Kiri) */}
        <div className="col-span-12 lg:col-span-3">
          <h2
            id="featured-projects-heading"
            className="font-display font-bold text-2xl tracking-tight text-hijau-ledger mb-2"
          >
            Proyek Unggulan
          </h2>
          <p className="font-body text-base text-abu-hijau leading-relaxed">
            Inisiatif produk web mandiri dan kepemimpinan operasional kemitraan perbankan digital di luar peran penjualan.
          </p>
        </div>

        {/* Grid 4 Proyek Faktual (Kolom Kanan) */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-12 gap-4">
            {PROJECTS.map((project, idx) => {
              const isHovered = hoveredId === project.id;

              return (
                <article
                  key={project.id}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`${project.colSpanClass} border border-garis-embun rounded-[6px] p-6 bg-kertas-dingin hover:border-hijau-ledger transition-colors flex flex-col justify-between`}
                >
                  <div>
                    {/* Baris Atas: Monogram Inisial Editorial & Indeks Proyek */}
                    <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-garis-embun">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-[6px] border transition-colors ${
                          isHovered
                            ? "bg-kuning-stabilo text-hijau-ledger border-hijau-ledger"
                            : "bg-hijau-ledger text-kertas-dingin border-hijau-ledger"
                        }`}
                        aria-hidden="true"
                      >
                        <span className="font-display font-extrabold text-xl tracking-tight">
                          {project.initials}
                        </span>
                      </div>

                      <span className="font-display text-xs font-semibold text-abu-hijau tabular-nums">
                        0{idx + 1} / 0{PROJECTS.length}
                      </span>
                    </div>

                    {/* Judul & Peran */}
                    <div className="mb-4">
                      <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight text-hijau-ledger mb-1">
                        {project.title}
                      </h3>
                      <p className="font-display text-xs sm:text-sm font-semibold text-abu-hijau">
                        {project.role}
                      </p>
                    </div>

                    {/* Deskripsi */}
                    <p className="font-body text-base sm:text-[18px] leading-[1.7] text-hijau-ledger mb-6 max-w-[62ch]">
                      {project.description}
                    </p>
                  </div>

                  {/* Bagian Bawah: Tech Stack Tags & Tautan / Status */}
                  <div className="pt-4 border-t border-garis-embun flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div
                      aria-label={`Teknologi pada ${project.title}`}
                      className="flex flex-wrap gap-1.5"
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`font-display text-xs font-medium px-2.5 py-1 rounded-[4px] border transition-colors ${
                            isHovered
                              ? "border-hijau-ledger text-hijau-ledger bg-kertas-dingin"
                              : "border-garis-embun text-abu-hijau bg-kertas-dingin"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-teal-tautan hover:text-hijau-ledger underline decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
                      >
                        <span>Kunjungi situs</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-hijau-ledger border border-garis-embun rounded-[4px] px-3 py-1.5 bg-kertas-dingin whitespace-nowrap shrink-0">
                        <Building2 className="w-3.5 h-3.5 text-abu-hijau" aria-hidden="true" />
                        <span>{project.statusBadge}</span>
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
