"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent } from "react";
import { createPortal } from "react-dom";
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
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Reveal } from "./MotionReveal";
import EditorialDivider from "./EditorialDivider";
import { MagneticButton } from "./MagneticElements";

const POINTER_EFFECT_QUERY =
  "(hover: hover) and (pointer: fine)";

type GallerySlide =
  | { kind: "image"; src: string; title: string; caption: string }
  | { kind: "module"; title: string; caption: string };

interface ActiveGallery {
  projectTitle: string;
  slides: GallerySlide[];
  currentIndex: number;
}

type ProjectDetailTab = "context" | "solution";

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
  const [activeStackIndex, setActiveStackIndex] = useState(0);
  const [projectTabs, setProjectTabs] = useState<Record<string, ProjectDetailTab>>({});
  const isGalleryOpen = gallery !== null;
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const galleryTriggerRef = useRef<HTMLElement | null>(null);
  const projectCardRefs = useRef<Array<HTMLElement | null>>([]);
  const projectTabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const touchStartX = useRef<number | null>(null);
  const pointerEffectsEnabled = useMediaQuery(POINTER_EFFECT_QUERY);
  const tiltFrameRef = useRef<number | null>(null);
  const pendingTiltRef = useRef<{ target: HTMLDivElement; x: number; y: number } | null>(null);

  const handleMockupPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerEffectsEnabled || event.pointerType === "touch") return;
    pendingTiltRef.current = { target: event.currentTarget, x: event.clientX, y: event.clientY };
    if (tiltFrameRef.current !== null) return;
    tiltFrameRef.current = window.requestAnimationFrame(() => {
      tiltFrameRef.current = null;
      const pointer = pendingTiltRef.current;
      if (!pointer) return;
      const bounds = pointer.target.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const normalizedX = (pointer.x - bounds.left) / bounds.width - 0.5;
      const normalizedY = (pointer.y - bounds.top) / bounds.height - 0.5;
      pointer.target.style.setProperty("--tilt-x", `${-normalizedY * 7}deg`);
      pointer.target.style.setProperty("--tilt-y", `${normalizedX * 7}deg`);
      pointer.target.style.setProperty("--shine-x", `${(normalizedX + 0.5) * 100}%`);
      pointer.target.style.setProperty("--shine-y", `${(normalizedY + 0.5) * 100}%`);
      pointer.target.dataset.pointerActive = "true";
    });
  };

  const resetMockupTilt = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerEffectsEnabled) return;
    if (tiltFrameRef.current !== null) window.cancelAnimationFrame(tiltFrameRef.current);
    tiltFrameRef.current = null;
    pendingTiltRef.current = null;
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
    event.currentTarget.dataset.pointerActive = "false";
  };

  const setMockupInteractionTilt = (
    target: HTMLDivElement,
    state: "touchActive" | "focusActive",
    active: boolean
  ) => {
    target.dataset[state] = String(active);
    target.style.setProperty("--tilt-x", active ? "-3deg" : "0deg");
    target.style.setProperty("--tilt-y", active ? "3deg" : "0deg");
  };

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

  useEffect(
    () => () => {
      if (tiltFrameRef.current !== null) window.cancelAnimationFrame(tiltFrameRef.current);
    },
    []
  );

  useEffect(() => {
    let frame = 0;
    const updateStack = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        if (window.innerWidth < 768) {
          setActiveStackIndex(0);
          return;
        }
        let nextActiveIndex = 0;
        projectCardRefs.current.forEach((card, index) => {
          if (card && card.getBoundingClientRect().top <= 116 + index * 16) nextActiveIndex = index;
        });
        setActiveStackIndex((current) => current === nextActiveIndex ? current : nextActiveIndex);
      });
    };

    updateStack();
    window.addEventListener("scroll", updateStack, { passive: true });
    window.addEventListener("resize", updateStack);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateStack);
      window.removeEventListener("resize", updateStack);
    };
  }, []);

  const selectProjectTab = (projectId: string, tab: ProjectDetailTab) => {
    setProjectTabs((current) => ({ ...current, [projectId]: tab }));
  };

  const handleProjectTabKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    projectId: string,
    currentTab: ProjectDetailTab
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const nextTab = event.key === "Home" || (event.key === "ArrowLeft" && currentTab === "solution")
      ? "context"
      : "solution";
    selectProjectTab(projectId, nextTab);
    window.requestAnimationFrame(() => projectTabRefs.current[`${projectId}-${nextTab}`]?.focus());
  };

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
      className="portfolio-dark-stage relative border-t border-white/[0.08] bg-surface px-5 py-20 sm:px-8 md:py-28 lg:px-10 presentation-section"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <Reveal className="mb-12 max-w-3xl text-left md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Digital Product Showcase
          </p>
          <h2
            id="projects-heading"
            className="font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl"
          >
            Featured Projects
          </h2>
          <EditorialDivider className="mt-5 max-w-xs" />
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Tiga studi kasus produk digital yang memperlihatkan cara saya merancang alur kerja dan mengembangkan solusi untuk kebutuhan nyata.
          </p>
        </Reveal>

        <div className="space-y-14">
          {PROJECTS_DATA.map((project, projectIndex) => {
            const isArcrm = project.id === "arcrm";
            const activeProjectTab = projectTabs[project.id] ?? "context";
            return (
              <motion.article
                key={project.id}
                ref={(element) => { projectCardRefs.current[projectIndex] = element; }}
                className="project-deck-card project-deck-surface group/project relative grid grid-cols-1 overflow-visible rounded-3xl p-4 sm:p-6 lg:grid-cols-12 lg:p-7 md:sticky"
                style={{ top: `calc(6rem + ${projectIndex}rem)`, zIndex: 10 + projectIndex }}
                animate={{
                  scale: projectIndex < activeStackIndex ? Math.max(0.96, 1 - 0.02 * (activeStackIndex - projectIndex)) : 1,
                  opacity: projectIndex < activeStackIndex ? Math.max(0.72, 1 - 0.16 * (activeStackIndex - projectIndex)) : 1,
                }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                  <div className={`${isArcrm ? "lg:col-span-7" : "lg:col-span-6"} border-b border-muted-text/15 py-5 lg:border-b-0 lg:border-r lg:py-8 lg:pr-8`}>
                    <div
                      className="project-mockup-frame relative overflow-hidden rounded-xl border border-white/10 bg-[#0D121B] p-2.5 shadow-2xl sm:p-3"
                      data-pointer-active="false"
                      data-touch-active="false"
                      data-focus-active="false"
                      tabIndex={0}
                      aria-label={`Pratinjau interaktif proyek ${project.title}; sentuh atau fokuskan untuk tilt 3D`}
                      onPointerMove={pointerEffectsEnabled ? handleMockupPointerMove : undefined}
                      onPointerLeave={pointerEffectsEnabled ? resetMockupTilt : undefined}
                      onPointerDown={(event) => {
                        if (event.pointerType === "touch") {
                          setMockupInteractionTilt(event.currentTarget, "touchActive", true);
                        }
                      }}
                      onPointerUp={(event) => {
                        if (event.pointerType === "touch") {
                          setMockupInteractionTilt(event.currentTarget, "touchActive", false);
                        }
                      }}
                      onPointerCancel={(event) => {
                        if (event.pointerType === "touch") {
                          setMockupInteractionTilt(event.currentTarget, "touchActive", false);
                        }
                      }}
                      onFocus={(event) => {
                        if (event.target === event.currentTarget) {
                          setMockupInteractionTilt(event.currentTarget, "focusActive", true);
                        }
                      }}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                          setMockupInteractionTilt(event.currentTarget, "focusActive", false);
                        }
                      }}
                    >
                      <div aria-hidden="true" className="flex h-7 items-center gap-1.5 border-b border-white/[0.08] px-1 pb-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#F4BF4F]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
                        <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-white/[0.045] px-3 py-1 text-center font-mono text-[10px] text-muted-foreground">
                          {project.websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </span>
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#090D14]">
                        <Image
                          src={project.coverScreenshot}
                          alt={`Pratinjau proyek ${project.title}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className={`${isArcrm ? "object-contain" : "object-cover object-top"} project-preview-image`}
                          referrerPolicy="no-referrer"
                        />
                        <button
                          type="button"
                          onClick={() => openGallery(project)}
                          aria-label={`Buka galeri pratinjau ${project.title}`}
                          className="absolute bottom-3 right-3 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/20 bg-slate-950/90 text-white shadow-lg transition-colors hover:bg-signature-teal hover:text-button-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
                        >
                          <Maximize2 aria-hidden="true" className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                      <span>{project.screenshots[0]?.title ?? `Preview ${project.title}`}</span>
                      <button
                        type="button"
                        onClick={() => openGallery(project)}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-2 font-semibold text-foreground/80 transition-colors hover:text-signature-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
                      >
                        Lihat Galeri / Preview
                        <Maximize2 aria-hidden="true" className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className={`${isArcrm ? "lg:col-span-5" : "lg:col-span-6"} flex min-w-0 flex-col justify-center py-7 lg:py-8 lg:pl-8`}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {isArcrm ? "FEATURED PRODUCT" : project.status ?? "PROJECT CASE STUDY"}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        PROYEK 0{projectIndex + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-bold tracking-[-0.035em] text-foreground sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground sm:text-base">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-signature-teal/90">
                      {project.role}
                    </p>

                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2" role="tablist" aria-label={`Detail proyek ${project.title}`}>
                        <button
                          ref={(element) => { projectTabRefs.current[`${project.id}-context`] = element; }}
                          id={`project-${project.id}-tab-context`}
                          type="button"
                          role="tab"
                          aria-selected={activeProjectTab === "context"}
                          aria-controls={`project-${project.id}-panel`}
                          tabIndex={activeProjectTab === "context" ? 0 : -1}
                          onClick={() => selectProjectTab(project.id, "context")}
                          onKeyDown={(event) => handleProjectTabKeyDown(event, project.id, activeProjectTab)}
                          className="project-tab-button text-xs font-semibold"
                        >
                          Konteks &amp; Tantangan
                        </button>
                        <button
                          ref={(element) => { projectTabRefs.current[`${project.id}-solution`] = element; }}
                          id={`project-${project.id}-tab-solution`}
                          type="button"
                          role="tab"
                          aria-selected={activeProjectTab === "solution"}
                          aria-controls={`project-${project.id}-panel`}
                          tabIndex={activeProjectTab === "solution" ? 0 : -1}
                          onClick={() => selectProjectTab(project.id, "solution")}
                          onKeyDown={(event) => handleProjectTabKeyDown(event, project.id, activeProjectTab)}
                          className="project-tab-button text-xs font-semibold"
                        >
                          Peran, Solusi &amp; Tech
                        </button>
                      </div>
                      <motion.div layout className="mt-4" transition={{ layout: { duration: 0.24, ease: "easeOut" } }}>
                        <AnimatePresence mode="wait" initial={false}>
                          {activeProjectTab === "context" ? (
                            <motion.div
                              key={`${project.id}-context`}
                              id={`project-${project.id}-panel`}
                              role="tabpanel"
                              tabIndex={0}
                              aria-labelledby={`project-${project.id}-tab-context`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="project-tab-panel space-y-4 rounded-xl border border-muted-text/15 bg-glass-tint p-4 sm:p-5"
                            >
                              <div>
                                <h4 className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">Business Problem</h4>
                                <p className="mt-1.5 text-sm leading-6 text-foreground/90">{project.businessProblem}</p>
                              </div>
                              <div>
                                <h4 className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">Objective</h4>
                                <p className="mt-1.5 text-sm leading-6 text-foreground/90">{project.objective}</p>
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key={`${project.id}-solution`}
                              id={`project-${project.id}-panel`}
                              role="tabpanel"
                              tabIndex={0}
                              aria-labelledby={`project-${project.id}-tab-solution`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="project-tab-panel space-y-4 rounded-xl border border-muted-text/15 bg-glass-tint p-4 sm:p-5"
                            >
                              <div>
                                <h4 className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">My Contribution</h4>
                                <p className="mt-1.5 text-sm leading-6 text-foreground/90">{project.myContribution}</p>
                              </div>
                              <div>
                                <h4 className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">Solution</h4>
                                <p className="mt-1.5 text-sm leading-6 text-foreground/90">{project.solution}</p>
                              </div>
                              <div>
                                <h4 className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">Technology</h4>
                                <p className="mt-1.5 text-sm leading-6 text-foreground/90">{project.techStack?.join(" · ") ?? ""}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {project.accessNote && (
                      <p className="mt-4 flex items-start gap-2.5 text-xs leading-5 text-muted-foreground">
                        <Lock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>{project.accessNote}</span>
                      </p>
                    )}

                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      <MagneticButton
                        type="button"
                        onClick={() => openGallery(project)}
                        className="group/gallery inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-signature-teal px-4 py-3 text-sm font-bold text-button-foreground transition-colors hover:bg-[#35d7ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal focus-visible:ring-offset-2 focus-visible:ring-offset-graphite"
                      >
                        Lihat Galeri / Preview
                        <Maximize2 aria-hidden="true" className="h-4 w-4" />
                      </MagneticButton>
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/site inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-muted-text/25 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-signature-teal/60 hover:text-signature-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
                      >
                        Kunjungi Website
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5" />
                      </a>
                    </div>

                    {project.socials && project.socials.length > 0 && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-xs text-muted-foreground">Social</span>
                        {project.socials.map((social) => (
                          <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-2 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signature-teal"
                          >
                            {social.platform}
                            <ExternalLink aria-hidden="true" className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
              </motion.article>
            );
          })}
        </div>

        {gallery && activeSlide && typeof document !== "undefined" && createPortal(
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
              className="relative flex h-[90dvh] max-h-[94dvh] w-[min(94vw,1280px)] max-w-6xl flex-col rounded-[14px] border border-muted-text/15 bg-surface p-3 shadow-2xl sm:p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <h2 id="project-gallery-title" className="text-lg sm:text-xl font-bold text-foreground">
                    {gallery.projectTitle === "AR CRM" ? "Lihat Preview Aplikasi — AR CRM" : `Galeri ${gallery.projectTitle}`}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {gallery.currentIndex + 1} dari {gallery.slides.length} pratinjau
                  </p>
                  {gallery.projectTitle === "AR CRM" && (
                    <span
                      className="mt-2 inline-flex items-center rounded-full border border-muted-text/15 bg-white/[0.035] px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
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
                  className="min-h-[44px] min-w-[44px] shrink-0 rounded-full bg-glass-tint hover:bg-muted-foreground/20 text-foreground inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
                      <div role="status" className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-xl bg-surface/70 px-6" aria-live="polite">
                        <span aria-hidden="true" className="h-9 w-9 animate-pulse rounded-full bg-signature-teal/20 ring-1 ring-signature-teal/25" />
                        <span className="text-sm text-muted-foreground">Memuat pratinjau gambar…</span>
                      </div>
                    )}
                    {failedImageSrc === activeSlide.src && <p role="alert" className="absolute inset-0 z-20 flex items-center justify-center bg-background/90 text-sm text-muted-foreground">Pratinjau gagal dimuat.</p>}
                    <AnimatePresence initial={false} mode="sync">
                      <motion.div
                        key={activeSlide.src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: loadedImageSrc === activeSlide.src ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="gallery-slide absolute inset-0"
                      >
                        <Image
                          src={activeSlide.src}
                          alt={activeSlide.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 94vw, 1280px"
                          className="object-contain"
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
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="w-full max-w-3xl min-h-[280px] sm:min-h-[420px] rounded-2xl border border-emerald-500/20 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:28px_28px] flex items-center justify-center p-8 sm:p-12">
                    <div className="max-w-xl text-center rounded-2xl border border-white/10 bg-[#0B0F19]/90 backdrop-blur p-7 sm:p-10">
                      <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                        <Layers aria-hidden="true" className="w-7 h-7 text-emerald-300" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.16em] font-bold text-[#A6B0BD] mb-3">
                        Pratinjau modul
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{activeSlide.title}</h3>
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A6B0BD]">{activeSlide.caption}</p>
                    </div>
                  </div>
                )}
              </div>

              <p id="project-gallery-caption" aria-live="polite" className="mt-4 min-h-10 text-center text-sm text-foreground">
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
          </div>,
          document.body,
        )}
      </div>
    </section>
  );
}
