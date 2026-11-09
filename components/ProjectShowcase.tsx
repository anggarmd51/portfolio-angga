"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem } from "@/data/portfolio";
import {
  Layers,
  ExternalLink,
  Lock,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Code2,
} from "lucide-react";
import { Reveal } from "./MotionReveal";

export default function ProjectShowcase() {
  const [activeArcrmIndex, setActiveArcrmIndex] = useState<number>(0);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  });

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
      title,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const nextLightboxImage = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevLightboxImage = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Reveal */}
        <Reveal className="mb-12 md:mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Inisiatif Digital & Web Development
          </div>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Aplikasi & Solusi Digital Mandiri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Bukti nyata kapabilitas teknis (tech-savvy) dalam membangun ekosistem pipeline CRM, direktori karir, dan presentasi komersial modern.
          </p>
        </Reveal>

        {/* 3 Project Cards */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((project, pIdx) => {
            const isArcrm = project.id === "arcrm";
            const activeImage = isArcrm
              ? project.screenshots[activeArcrmIndex]
              : project.coverScreenshot;

            return (
              <Reveal key={project.id} y={24} duration={0.6}>
                <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual / Screenshot Column (lg: 7 cols) */}
                <div className="lg:col-span-7 bg-slate-950/60 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
                  {/* Primary Screenshot Container */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                    <Image
                      src={activeImage}
                      alt={`Tangkapan layar proyek ${project.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />

                    {/* Magnify overlay button */}
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(
                          project.screenshots,
                          isArcrm ? activeArcrmIndex : 0,
                          project.title
                        )
                      }
                      aria-label={`Buka gambar layar penuh untuk ${project.title}`}
                      className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white hover:bg-emerald-500 hover:text-slate-950 transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 shadow-lg"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* AR CRM Multiple Screenshot Thumbnails */}
                  {isArcrm && project.screenshots.length > 1 && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold text-slate-400">
                          Galeri Tampilan AR CRM ({project.screenshots.length} Layar):
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400">
                          {activeArcrmIndex + 1} / {project.screenshots.length}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {project.screenshots.map((img, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => setActiveArcrmIndex(sIdx)}
                            className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                              activeArcrmIndex === sIdx
                                ? "border-emerald-400 ring-2 ring-emerald-400/30"
                                : "border-white/10 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`AR CRM thumbnail ${sIdx + 1}`}
                              fill
                              sizes="120px"
                              className="object-cover object-top"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {!isArcrm && (
                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Tangkapan Layar Resolusi Tinggi</span>
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox(project.screenshots, 0, project.title)
                        }
                        className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium"
                      >
                        <Maximize2 className="w-3 h-3" /> Perbesar Layar Penuh
                      </button>
                    </div>
                  )}
                </div>

                {/* Info & External CTA Column (lg: 5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Top Tag & Project Index */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                        <Code2 className="w-3.5 h-3.5" />
                        {project.role}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        PROYEK 0{pIdx + 1}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl font-extrabold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-1">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Access note if required (e.g., AR CRM Google Sign-in note) */}
                    {project.accessNote && (
                      <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-200 leading-snug">
                        <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{project.accessNote}</span>
                      </div>
                    )}

                    {/* Social links if available */}
                    {project.socials && project.socials.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-white/5">
                        <span className="text-xs font-semibold text-slate-400 block mb-2">
                          Kanal Media Sosial Proyek:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.socials.map((soc, sIdx) => (
                            <a
                              key={sIdx}
                              href={soc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/30 text-xs text-slate-300 hover:text-white transition flex items-center gap-1.5"
                            >
                              <span>{soc.platform}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Primary External CTA Button */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 group"
                    >
                      <span>Kunjungi Website</span>
                      <ExternalLink className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Fullscreen Lightbox (Non-iframe media viewer) */}
        {lightboxState.isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`Pratinjau gambar ${lightboxState.title}`}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Tutup pratinjau gambar"
              className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons for multi-image */}
            {lightboxState.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevLightboxImage}
                  aria-label="Gambar sebelumnya"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={nextLightboxImage}
                  aria-label="Gambar selanjutnya"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Lightbox Image Container */}
            <div className="relative max-w-5xl w-full max-h-[85vh] h-[85vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={lightboxState.images[lightboxState.currentIndex]}
                  alt={`${lightboxState.title} - Layar penuh`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 text-xs text-slate-300 font-medium">
                {lightboxState.title} — Layar {lightboxState.currentIndex + 1} dari{" "}
                {lightboxState.images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
