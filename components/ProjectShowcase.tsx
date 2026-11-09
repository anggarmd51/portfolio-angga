"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA, type ProjectItem } from "@/data/portfolio";
import {
  Layers,
  ExternalLink,
  Lock,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./MotionReveal";

type GallerySlide =
  | { kind: "image"; src: string; title: string; caption: string }
  | { kind: "module"; title: string; caption: string };

interface ActiveGallery {
  projectTitle: string;
  slides: GallerySlide[];
  currentIndex: number;
}

function getGallerySlides(project: ProjectItem): GallerySlide[] {
  return [
    ...project.screenshots.map((screenshot) => ({ kind: "image" as const, ...screenshot })),
    ...(project.previewModules ?? []).map((module) => ({ kind: "module" as const, ...module })),
  ];
}

export default function ProjectShowcase() {
  const [gallery, setGallery] = useState<ActiveGallery | null>(null);
  const isGalleryOpen = gallery !== null;
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const galleryTriggerRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openGallery = (project: ProjectItem) => {
    galleryTriggerRef.current = document.activeElement as HTMLElement;
    setGallery({
      projectTitle: project.title,
      slides: getGallerySlides(project),
      currentIndex: 0,
    });
  };

  const closeGallery = () => setGallery(null);

  const showPrevious = () =>
    setGallery((current) => {
      if (!current || current.slides.length < 2) return current;
      return {
        ...current,
        currentIndex: (current.currentIndex - 1 + current.slides.length) % current.slides.length,
      };
    });

  const showNext = () =>
    setGallery((current) => {
      if (!current || current.slides.length < 2) return current;
      return { ...current, currentIndex: (current.currentIndex + 1) % current.slides.length };
    });

  useEffect(() => {
    if (!isGalleryOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setGallery(null);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => element.offsetParent !== null || element === document.activeElement);
        if (focusable.length === 0) {
          event.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      galleryTriggerRef.current?.focus();
    };
    // The active gallery's slide index changes independently; install this listener once per open/close.
  }, [isGalleryOpen]);

  const activeSlide = gallery?.slides[gallery.currentIndex];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers aria-hidden="true" className="w-3.5 h-3.5" />
            Inisiatif Digital & Web
          </div>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Aplikasi & Solusi Digital Mandiri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Tiga proyek aplikasi dan web yang saya bangun secara mandiri dengan bantuan AI coding untuk kebutuhan bursa lowongan kerja, pencatatan pipeline penjualan pribadi, dan katalog layanan otomotif.
          </p>
        </Reveal>

        <div className="space-y-12">
          {PROJECTS_DATA.map((project, projectIndex) => {
            const isArcrm = project.id === "arcrm";
            return (
              <Reveal key={project.id} y={24} duration={0.6}>
                <article className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 bg-slate-950/60 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                      <Image
                        src={project.coverScreenshot}
                        alt={`Pratinjau proyek ${project.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <button
                        type="button"
                        onClick={() => openGallery(project)}
                        aria-label={`Buka galeri pratinjau ${project.title}`}
                        className="absolute bottom-3 right-3 min-h-[44px] min-w-[44px] rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/20 text-white hover:bg-emerald-500 hover:text-slate-950 transition-all sm:opacity-0 group-hover:opacity-100 shadow-lg inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      >
                        <Maximize2 aria-hidden="true" className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                      <span>{project.screenshots[0]?.title ?? `Pratinjau ${project.title}`}</span>
                      <button
                        type="button"
                        onClick={() => openGallery(project)}
                        className="min-h-[44px] inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg px-2"
                      >
                        Lihat galeri
                        <Maximize2 aria-hidden="true" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                          <Code2 aria-hidden="true" className="w-3.5 h-3.5" />
                          {project.role}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-300">
                          PROYEK 0{projectIndex + 1}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
                        {project.status && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-slate-200 mt-1">{project.subtitle}</p>
                      <p className="text-sm text-slate-300 mt-4 leading-relaxed">{project.description}</p>

                      {(project.objective || project.contribution) && (
                        <dl className="mt-5 space-y-3 border-t border-white/5 pt-4">
                          {project.objective && (
                            <div>
                              <dt className="text-xs font-bold uppercase tracking-wide text-emerald-300">Tujuan</dt>
                              <dd className="mt-1 text-sm text-slate-200 leading-relaxed">{project.objective}</dd>
                            </div>
                          )}
                          {project.contribution && (
                            <div>
                              <dt className="text-xs font-bold uppercase tracking-wide text-emerald-300">Yang dibangun</dt>
                              <dd className="mt-1 text-sm text-slate-200 leading-relaxed">{project.contribution}</dd>
                            </div>
                          )}
                        </dl>
                      )}

                      {project.techStack && project.techStack.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-xs font-bold uppercase tracking-wide text-slate-300 mb-2">Teknologi</h4>
                          <ul className="flex flex-wrap gap-2" aria-label={`Teknologi ${project.title}`}>
                            {project.techStack.map((technology) => (
                              <li key={technology} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-200">
                                {technology}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.accessNote && (
                        <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-200 leading-snug">
                          <Lock aria-hidden="true" className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                          <span>{project.accessNote}</span>
                        </div>
                      )}

                      {project.socials && project.socials.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-white/5">
                          <span className="text-xs font-semibold text-slate-300 block mb-2">
                            Kanal media sosial proyek
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.socials.map((social) => (
                              <a
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/30 text-xs text-slate-200 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                              >
                                {social.platform}
                                <ExternalLink aria-hidden="true" className="w-3 h-3 text-slate-300" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                      {isArcrm ? (
                        <>
                          <button
                            type="button"
                            onClick={() => openGallery(project)}
                            className="min-h-[44px] w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                          >
                            Lihat Galeri Screenshot
                            <Maximize2 aria-hidden="true" className="w-4 h-4" />
                          </button>
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 min-h-[44px] inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-2 text-xs font-medium text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                          >
                            Buka Web App (Login Internal)
                            <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
                          </a>
                        </>
                      ) : (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 group"
                        >
                          <span>Kunjungi Website</span>
                          <ExternalLink aria-hidden="true" className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {gallery && activeSlide && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeGallery();
            }}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-gallery-title"
              aria-describedby="project-gallery-caption"
              className="relative w-full max-w-5xl max-h-[92dvh] rounded-2xl sm:rounded-3xl bg-[#101622] border border-white/15 shadow-2xl p-4 sm:p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <h2 id="project-gallery-title" className="text-lg sm:text-xl font-bold text-white">
                    {gallery.projectTitle === "AR CRM" ? "Lihat Preview Aplikasi — AR CRM" : `Galeri ${gallery.projectTitle}`}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {gallery.currentIndex + 1} dari {gallery.slides.length} pratinjau
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeGallery}
                  aria-label="Tutup galeri"
                  className="min-h-[44px] min-w-[44px] shrink-0 rounded-full bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <X aria-hidden="true" className="w-5 h-5" />
                </button>
              </div>

              <div
                className="relative flex-1 min-h-0 flex items-center justify-center"
                onTouchStart={(event) => {
                  touchStartX.current = event.touches[0]?.clientX ?? null;
                }}
                onTouchEnd={(event) => {
                  const startX = touchStartX.current;
                  const endX = event.changedTouches[0]?.clientX;
                  touchStartX.current = null;
                  if (startX === null || endX === undefined) return;
                  const difference = startX - endX;
                  if (difference > 40) showNext();
                  if (difference < -40) showPrevious();
                }}
              >
                {gallery.slides.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Pratinjau sebelumnya"
                      className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-10 min-h-[44px] min-w-[44px] rounded-full bg-slate-950/80 border border-white/20 text-white inline-flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <ChevronLeft aria-hidden="true" className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Pratinjau selanjutnya"
                      className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-10 min-h-[44px] min-w-[44px] rounded-full bg-slate-950/80 border border-white/20 text-white inline-flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <ChevronRight aria-hidden="true" className="w-5 h-5" />
                    </button>
                  </>
                )}

                {activeSlide.kind === "image" ? (
                  <div className="relative w-full h-full min-h-[260px] max-h-[65vh]">
                    <Image
                      src={activeSlide.src}
                      alt={activeSlide.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 90vw"
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-3xl min-h-[280px] sm:min-h-[420px] rounded-2xl border border-emerald-500/20 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:28px_28px] flex items-center justify-center p-8 sm:p-12">
                    <div className="max-w-xl text-center rounded-2xl border border-white/10 bg-[#0B0F19]/90 backdrop-blur p-7 sm:p-10">
                      <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                        <Layers aria-hidden="true" className="w-7 h-7 text-emerald-300" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.16em] font-bold text-emerald-300 mb-3">
                        Pratinjau modul
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{activeSlide.title}</h3>
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200">{activeSlide.caption}</p>
                    </div>
                  </div>
                )}
              </div>

              <p id="project-gallery-caption" aria-live="polite" className="mt-4 min-h-10 text-center text-sm text-slate-200">
                {activeSlide.caption}
              </p>

              {gallery.slides.length > 1 && (
                <div className="flex items-center justify-center gap-1 mt-2" role="group" aria-label="Pilih pratinjau galeri">
                  {gallery.slides.map((slide, index) => (
                    <button
                      key={`${slide.kind}-${slide.title}`}
                      type="button"
                      onClick={() => setGallery((current) => current ? { ...current, currentIndex: index } : current)}
                      aria-label={`Buka pratinjau ${index + 1}: ${slide.title}`}
                      aria-pressed={gallery.currentIndex === index}
                      className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <span aria-hidden="true" className={`w-2.5 h-2.5 rounded-full ${gallery.currentIndex === index ? "bg-emerald-400" : "bg-slate-500"}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
