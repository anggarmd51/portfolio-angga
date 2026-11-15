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
  const [loadedImageSrc, setLoadedImageSrc] = useState<string | null>(null);
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);
  const isGalleryOpen = gallery !== null;
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const galleryTriggerRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openGallery = (project: ProjectItem) => {
    galleryTriggerRef.current = document.activeElement as HTMLElement;
    setLoadedImageSrc(null);
    setFailedImageSrc(null);
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
      className="relative border-t border-white/[0.08] bg-graphite px-5 py-20 sm:px-8 md:py-28 lg:px-10 presentation-section"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <Reveal className="mb-12 max-w-3xl text-left md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
            Digital Product Showcase
          </p>
          <h2
            id="projects-heading"
            className="font-heading text-3xl font-semibold tracking-[-0.04em] text-soft-white sm:text-4xl md:text-5xl"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
            Tiga studi kasus produk digital yang memperlihatkan cara saya merancang alur kerja dan mengembangkan solusi untuk kebutuhan nyata.
          </p>
        </Reveal>

        <div className="space-y-14">
          {PROJECTS_DATA.map((project, projectIndex) => {
            const isArcrm = project.id === "arcrm";
            return (
              <Reveal key={project.id} y={24} duration={0.6}>
                <article className="group/project grid grid-cols-1 border-y border-muted-text/20 lg:grid-cols-12">
                  <div className={`${isArcrm ? "lg:col-span-7" : "lg:col-span-6"} border-b border-muted-text/15 py-5 lg:border-b-0 lg:border-r lg:py-8 lg:pr-8`}>
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0D121B] p-2.5 shadow-2xl sm:p-3">
                      <div aria-hidden="true" className="flex h-7 items-center gap-1.5 border-b border-white/[0.08] px-1 pb-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#F4BF4F]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
                        <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-white/[0.045] px-3 py-1 text-center font-mono text-[10px] text-muted-text">
                          {project.websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </span>
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#090D14]">
                        <Image
                          src={project.coverScreenshot}
                          alt={`Pratinjau proyek ${project.title}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className={`${isArcrm ? "object-contain" : "object-cover object-top"} transition-transform duration-[220ms] ease-out group-hover/project:scale-[1.025]`}
                          referrerPolicy="no-referrer"
                        />
                        <button
                          type="button"
                          onClick={() => openGallery(project)}
                          aria-label={`Buka galeri pratinjau ${project.title}`}
                          className="absolute bottom-3 right-3 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/20 bg-obsidian/90 text-white shadow-lg transition-colors hover:bg-signature-teal hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
                        >
                          <Maximize2 aria-hidden="true" className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-text">
                      <span>{project.screenshots[0]?.title ?? `Preview ${project.title}`}</span>
                      <button
                        type="button"
                        onClick={() => openGallery(project)}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-2 font-semibold text-soft-white/80 transition-colors hover:text-signature-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
                      >
                        Lihat Galeri / Preview
                        <Maximize2 aria-hidden="true" className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className={`${isArcrm ? "lg:col-span-5" : "lg:col-span-6"} flex min-w-0 flex-col justify-center py-7 lg:py-8 lg:pl-8`}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-text">
                        {isArcrm ? "FEATURED PRODUCT" : project.status ?? "PROJECT CASE STUDY"}
                      </span>
                      <span className="font-mono text-xs text-muted-text">
                        PROYEK 0{projectIndex + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-bold tracking-[-0.035em] text-soft-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-text sm:text-base">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-signature-teal/90">
                      {project.role}
                    </p>

                    <dl className="mt-6 divide-y divide-muted-text/15 border-y border-muted-text/15">
                      <div className="py-3.5">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-text">Business Problem</dt>
                        <dd className="mt-1.5 text-sm leading-6 text-soft-white/90">{project.businessProblem}</dd>
                      </div>
                      <div className="py-3.5">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-text">Objective</dt>
                        <dd className="mt-1.5 text-sm leading-6 text-soft-white/90">{project.objective}</dd>
                      </div>
                      <div className="py-3.5">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-text">My Contribution</dt>
                        <dd className="mt-1.5 text-sm leading-6 text-soft-white/90">{project.myContribution}</dd>
                      </div>
                      <div className="py-3.5">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-text">Solution</dt>
                        <dd className="mt-1.5 text-sm leading-6 text-soft-white/90">{project.solution}</dd>
                      </div>
                      <div className="py-3.5">
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-text">Technology</dt>
                        <dd className="mt-1.5 text-sm leading-6 text-soft-white/90">
                          {project.techStack?.join(" · ") ?? ""}
                        </dd>
                      </div>
                    </dl>

                    {project.accessNote && (
                      <p className="mt-4 flex items-start gap-2.5 text-xs leading-5 text-muted-text">
                        <Lock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-muted-text" />
                        <span>{project.accessNote}</span>
                      </p>
                    )}

                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => openGallery(project)}
                        className="group/gallery inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-signature-teal px-4 py-3 text-sm font-bold text-obsidian transition-colors hover:bg-[#35d7ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal focus-visible:ring-offset-2 focus-visible:ring-offset-graphite"
                      >
                        Lihat Galeri / Preview
                        <Maximize2 aria-hidden="true" className="h-4 w-4" />
                      </button>
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/site inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-muted-text/25 px-4 py-3 text-sm font-semibold text-soft-white transition-colors hover:border-signature-teal/60 hover:text-signature-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
                      >
                        Kunjungi Website
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5" />
                      </a>
                    </div>

                    {project.socials && project.socials.length > 0 && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-xs text-muted-text">Social</span>
                        {project.socials.map((social) => (
                          <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-2 text-xs text-muted-text transition-colors hover:text-soft-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
                          >
                            {social.platform}
                            <ExternalLink aria-hidden="true" className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {gallery && activeSlide && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-5 bg-slate-950/95 backdrop-blur-md"
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
              className="relative flex h-[90dvh] max-h-[94dvh] w-[min(94vw,1280px)] max-w-6xl flex-col rounded-[14px] border border-muted-text/15 bg-graphite p-3 shadow-2xl sm:p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <h2 id="project-gallery-title" className="text-lg sm:text-xl font-bold text-white">
                    {gallery.projectTitle === "AR CRM" ? "Lihat Preview Aplikasi — AR CRM" : `Galeri ${gallery.projectTitle}`}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {gallery.currentIndex + 1} dari {gallery.slides.length} pratinjau
                  </p>
                  {gallery.projectTitle === "AR CRM" && (
                    <span
                      className="mt-2 inline-flex items-center rounded-full border border-muted-text/15 bg-white/[0.035] px-2.5 py-1 text-[11px] font-semibold text-muted-text"
                    >
                      {activeSlide.kind === "image"
                        ? "Tangkapan Layar Aplikasi"
                        : "Ilustrasi Modul Fitur"}
                    </span>
                  )}
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
                  <div className="relative h-full min-h-[260px] max-h-[72vh] w-full" aria-busy={loadedImageSrc !== activeSlide.src}>
                    {loadedImageSrc !== activeSlide.src && (
                      <div role="status" className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-xl bg-slate-surface/70 px-6" aria-live="polite">
                        <span aria-hidden="true" className="h-9 w-9 animate-pulse rounded-full bg-signature-teal/20 ring-1 ring-signature-teal/25" />
                        <span className="text-sm text-muted-text">Memuat pratinjau gambar…</span>
                      </div>
                    )}
                    {failedImageSrc === activeSlide.src && <p role="alert" className="absolute inset-0 z-20 flex items-center justify-center bg-obsidian/90 text-sm text-muted-text">Pratinjau gagal dimuat.</p>}
                    <Image
                      src={activeSlide.src}
                      alt={activeSlide.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 94vw, 1280px"
                      className={`object-contain transition-opacity duration-200 ${loadedImageSrc === activeSlide.src ? "opacity-100" : "opacity-0"}`}
                      referrerPolicy="no-referrer"
                      onLoad={() => {
                        setLoadedImageSrc(activeSlide.src);
                        setFailedImageSrc(null);
                      }}
                      onError={() => {
                        setLoadedImageSrc(activeSlide.src);
                        setFailedImageSrc(activeSlide.src);
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-3xl min-h-[280px] sm:min-h-[420px] rounded-2xl border border-emerald-500/20 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:28px_28px] flex items-center justify-center p-8 sm:p-12">
                    <div className="max-w-xl text-center rounded-2xl border border-white/10 bg-[#0B0F19]/90 backdrop-blur p-7 sm:p-10">
                      <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                        <Layers aria-hidden="true" className="w-7 h-7 text-emerald-300" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.16em] font-bold text-muted-text mb-3">
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
                      onClick={() => {
                        setFailedImageSrc(null);
                        setGallery((current) => current ? { ...current, currentIndex: index } : current);
                      }}
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
