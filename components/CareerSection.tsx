"use client";

import { useCallback, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CAREER_ROLES, CareerRole } from "@/data/portfolio";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MorphCard from "./MorphCard";
import { Reveal } from "./MotionReveal";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import {
  Briefcase,
  Calendar,
  X,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const CAREER_COMPANY_COUNT = new Set(CAREER_ROLES.map((role) => role.company)).size;

const CAREER_DIALOG_HISTORY_KEY = "__careerRoleDialog";
const CAREER_ACCORDION_HISTORY_KEY = "__careerAccordionRole";

function getHistoryState(): Record<string, unknown> {
  const state: unknown = window.history.state;
  return state && typeof state === "object"
    ? { ...(state as Record<string, unknown>) }
    : {};
}

function hasHistoryEntry(key: string, roleId: string): boolean {
  return getHistoryState()[key] === roleId;
}

function writeHistoryEntry(key: string, roleId: string, replace = false) {
  const nextState = { ...getHistoryState(), [key]: roleId };
  if (replace) {
    window.history.replaceState(nextState, "", window.location.href);
  } else {
    window.history.pushState(nextState, "", window.location.href);
  }
}

/**
 * Desktop Career Experience View (>= 768px).
 * Unmounts completely when the viewport is mobile, ensuring zero leftover state,
 * zero lingering modal dialogs, and clean body scroll restoration on breakpoint crossing.
 */
function DesktopCareerView() {
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);
  const shouldReduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const morphTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 350, damping: 30 };
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const triggerCardRef = useRef<HTMLElement | null>(null);
  const previousBodyOverflow = useRef("");

  const openRole = (role: CareerRole) => {
    triggerCardRef.current = document.activeElement as HTMLElement;
    writeHistoryEntry(CAREER_DIALOG_HISTORY_KEY, role.id);
    setSelectedRole(role);
  };

  const closeRole = useCallback(() => {
    if (selectedRole && hasHistoryEntry(CAREER_DIALOG_HISTORY_KEY, selectedRole.id)) {
      window.history.back();
      return;
    }
    setSelectedRole(null);
  }, [selectedRole]);

  // Reset selected role on matchMedia change as an event subscription
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        setSelectedRole(null);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // Handle focus trap, ESC key, body scroll lock, and focus restoration
  useEffect(() => {
    if (!selectedRole) {
      document.body.style.overflow = previousBodyOverflow.current;
      return;
    }

    previousBodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Set initial focus to the first focusable element inside the modal
    const focusTimer = setTimeout(() => {
      if (dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          focusable[0].focus();
        }
      }
    }, 40);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRole();
        return;
      }

      if (e.key === "Tab") {
        if (!dialogRef.current) return;

        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null || el === document.activeElement);

        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          // Shift + Tab: if focused on first element or outside, cycle to last element
          if (document.activeElement === firstElement || !dialogRef.current.contains(document.activeElement)) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab forward: if focused on last element or outside, cycle to first element
          if (document.activeElement === lastElement || !dialogRef.current.contains(document.activeElement)) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const handleHistoryBack = () => setSelectedRole(null);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handleHistoryBack);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = previousBodyOverflow.current;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handleHistoryBack);
      // Restore focus to the triggering card
      triggerCardRef.current?.focus();
    };
  }, [selectedRole, closeRole]);

  return (
    <LayoutGroup id="career-morph-group">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {CAREER_ROLES.map((role) => (
          <MorphCard
            key={role.id}
            role={role}
            isSelected={selectedRole?.id === role.id}
            onSelect={() => openRole(role)}
          />
        ))}
      </div>

      {/* DESKTOP DETAIL DIALOG (Shared Layout Morph) */}
      <AnimatePresence>
        {selectedRole && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-role-title"
          >
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              onClick={closeRole}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Morph Dialog Container with matching layoutId */}
            <motion.div
              ref={dialogRef}
              layoutId={`career-card-${selectedRole.id}`}
              transition={morphTransition}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button (First focusable element) */}
              <button
                type="button"
                onClick={closeRole}
                aria-label="Tutup rincian karir"
                className="absolute top-5 right-5 min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header info with coordinated sub-layout elements */}
              <div className="flex items-start gap-4 mb-6 pr-10">
                <motion.div
                  layoutId={`career-logo-${selectedRole.id}`}
                  transition={morphTransition}
                  className="relative w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden shadow-sm"
                >
                  <Image
                    src={selectedRole.logo}
                    alt={selectedRole.logoAlt}
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-1">
                    <Calendar className="w-3 h-3" />
                    {selectedRole.period}
                  </div>
                  <motion.h3
                    id="dialog-role-title"
                    layoutId={`career-company-${selectedRole.id}`}
                    transition={morphTransition}
                    className="text-xl sm:text-2xl font-bold text-white"
                  >
                    {selectedRole.company}
                  </motion.h3>
                  <motion.p
                    layoutId={`career-role-${selectedRole.id}`}
                    transition={morphTransition}
                    className="text-base font-semibold text-emerald-400"
                  >
                    {selectedRole.role}
                  </motion.p>
                </div>
              </div>

              {/* Body Bullets */}
              <div className="border-t border-white/10 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Ruang Lingkup Pekerjaan
                </h4>
                <ul className="space-y-3.5">
                  {selectedRole.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer note & Close Button (Last focusable element) */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Penempatan: Medan, Sumatera Utara</span>
                <button
                  type="button"
                  onClick={closeRole}
                  className="min-h-[44px] px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Tutup Dialog
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

/**
 * Mobile Career Accordion View (< 768px).
 * Accessible native accordion with zero layoutId, zero morph modal, and no desktop branch in DOM.
 */
function MobileCareerView() {
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>("role-1");
  const mobileHistoryEntry = useRef(false);

  const closeMobileDetails = useCallback(() => {
    if (
      mobileExpandedId &&
      mobileHistoryEntry.current &&
      hasHistoryEntry(CAREER_ACCORDION_HISTORY_KEY, mobileExpandedId)
    ) {
      window.history.back();
      return;
    }
    mobileHistoryEntry.current = false;
    setMobileExpandedId(null);
  }, [mobileExpandedId]);

  useEffect(() => {
    if (!mobileExpandedId) return;

    if (!mobileHistoryEntry.current) {
      writeHistoryEntry(CAREER_ACCORDION_HISTORY_KEY, mobileExpandedId);
      mobileHistoryEntry.current = true;
    } else if (!hasHistoryEntry(CAREER_ACCORDION_HISTORY_KEY, mobileExpandedId)) {
      writeHistoryEntry(CAREER_ACCORDION_HISTORY_KEY, mobileExpandedId, true);
    }

    const handleHistoryBack = () => {
      if (!mobileHistoryEntry.current) return;
      mobileHistoryEntry.current = false;
      setMobileExpandedId(null);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileDetails();
      }
    };

    window.addEventListener("popstate", handleHistoryBack);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("popstate", handleHistoryBack);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileExpandedId, closeMobileDetails]);

  return (
    <div className="space-y-4">
      {CAREER_ROLES.map((role) => {
        const isExpanded = mobileExpandedId === role.id;
        return (
          <div
            key={role.id}
            className="glass-card rounded-2xl border border-white/10 overflow-hidden"
          >
            <button
              type="button"
              onClick={() =>
                isExpanded ? closeMobileDetails() : setMobileExpandedId(role.id)
              }
              aria-expanded={isExpanded}
              aria-controls={`role-content-${role.id}`}
              className="w-full p-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div className="relative w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 border border-slate-200 overflow-hidden">
                  <Image
                    src={role.logo}
                    alt={role.logoAlt}
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 block">
                    {role.period}
                  </span>
                  <h3 className="text-sm font-bold text-white truncate">
                    {role.company}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 truncate">
                    {role.role}
                  </p>
                </div>
              </div>

              <div
                className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-slate-400 shrink-0 transition-transform ${
                  isExpanded ? "rotate-180 text-emerald-400" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Accordion Content */}
            {isExpanded && (
              <div
                id={`role-content-${role.id}`}
                className="px-4 pb-5 pt-2 border-t border-white/5 space-y-3"
              >
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Ruang Lingkup Pekerjaan
                </div>
                <ul className="space-y-2.5">
                  {role.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CareerSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#0B0F19] presentation-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Reveal */}
        <Reveal className="mb-12 md:mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Rekam Jejak Karir & Eksekusi Lapangan
          </div>
          <h2
            id="career-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Riwayat Kerja
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {CAREER_ROLES.length} posisi di {CAREER_COMPANY_COUNT} perusahaan sejak 2019, mulai dari analisis kredit lapangan hingga Account Manager B2B SaaS.
          </p>
        </Reveal>

        {/* DESKTOP VIEW (>= 768px): Mounted conditionally; unmounts completely on mobile */}
        {isDesktop && <DesktopCareerView />}

        {/* MOBILE VIEW (< 768px): Accessible Native Accordion */}
        {!isDesktop && <MobileCareerView />}
      </div>
    </section>
  );
}
