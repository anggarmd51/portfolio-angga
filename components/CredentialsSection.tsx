"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolio";
import { GraduationCap, Award, Calendar, Eye, X } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./MotionReveal";

type Certificate = (typeof CERTIFICATIONS_DATA)[number];

function CertificateViewer({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const [viewerKey, setViewerKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);
  const [verifiedUrl, setVerifiedUrl] = useState<string | null>(null);
  const loadingTimeoutRef = useRef<number | null>(null);
  const iframeKeyboardCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      previouslyFocusedRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const failPreview = () => {
      if (!active) return;
      if (loadingTimeoutRef.current !== null) window.clearTimeout(loadingTimeoutRef.current);
      setIsLoading(false);
      setHasLoadError(true);
      setVerifiedUrl(null);
    };

    loadingTimeoutRef.current = window.setTimeout(() => {
      failPreview();
      controller.abort();
    }, 10000);

    const validatePdf = async () => {
      try {
        if (!certificate.url?.trim() || navigator.pdfViewerEnabled === false) {
          failPreview();
          return;
        }
        const response = await fetch(certificate.url, { method: "HEAD", signal: controller.signal });
        if (!response.ok || !response.headers.get("content-type")?.includes("application/pdf")) {
          failPreview();
          return;
        }
        if (active) setVerifiedUrl(certificate.url);
      } catch {
        failPreview();
      }
    };
    void validatePdf();

    return () => {
      active = false;
      controller.abort();
      if (loadingTimeoutRef.current !== null) window.clearTimeout(loadingTimeoutRef.current);
      iframeKeyboardCleanupRef.current?.();
      iframeKeyboardCleanupRef.current = null;
    };
  }, [certificate.url, viewerKey]);

  const closeViewer = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    onClose();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeViewer();
      return;
    }

    if (event.key !== "Tab") return;
    const focusable = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
      ) ?? [],
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) closeViewer();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="certificate-viewer-title"
      aria-describedby="certificate-viewer-help certificate-viewer-status"
      onCancel={(event) => {
        event.preventDefault();
        closeViewer();
      }}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
      className="fixed inset-0 m-0 h-full w-full max-h-none max-w-none bg-black/75 p-4 backdrop:bg-black/75 sm:p-6"
    >
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#111827] shadow-2xl">
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <h2 id="certificate-viewer-title" className="text-sm font-bold text-white sm:text-base">
              {certificate.title}
            </h2>
            <p id="certificate-viewer-help" className="mt-1 text-xs text-slate-300">
              Tekan Esc atau × untuk menutup. Setelah memakai kontrol PDF bawaan peramban, gunakan tombol ×.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeViewer}
            aria-label="Tutup pratinjau sertifikat"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="relative min-h-0 flex-1 bg-slate-900" aria-busy={isLoading}>
          {isLoading && !hasLoadError ? (
            <p className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm text-slate-300" aria-live="polite">
              Memuat pratinjau sertifikat…
            </p>
          ) : null}
          {hasLoadError ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 text-center" aria-live="assertive">
              <p className="text-sm text-slate-200">Pratinjau PDF tidak dapat ditampilkan di perangkat ini.</p>
              <p className="max-w-md text-xs text-slate-300">Periksa koneksi atau gunakan peramban yang mendukung pratinjau PDF bawaan. Tidak ada file yang diunduh otomatis.</p>
              <button
                type="button"
                onClick={() => {
                  setHasLoadError(false);
                  setIsLoading(true);
                  setVerifiedUrl(null);
                  setViewerKey((key) => key + 1);
                }}
                className="min-h-[44px] rounded-lg border border-emerald-500/30 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Coba lagi
              </button>
            </div>
          ) : null}
          {verifiedUrl ? <iframe
            key={viewerKey}
            src={verifiedUrl}
            tabIndex={-1}
            title={`Pratinjau PDF sertifikat: ${certificate.title}`}
            className={`h-full min-h-[60vh] w-full border-0 transition-opacity sm:min-h-0 ${isLoading || hasLoadError ? "opacity-0" : "opacity-100"}`}
            onLoad={(event) => {
              if (loadingTimeoutRef.current !== null) window.clearTimeout(loadingTimeoutRef.current);
              iframeKeyboardCleanupRef.current?.();
              const frameWindow = event.currentTarget.contentWindow;
              const handleFrameKeyDown = (keyEvent: globalThis.KeyboardEvent) => {
                if (keyEvent.key === "Escape") {
                  keyEvent.preventDefault();
                  closeViewer();
                }
              };
              // Certificate files are same-origin; frame key events do not bubble to the dialog.
              try {
                frameWindow?.addEventListener("keydown", handleFrameKeyDown, true);
                iframeKeyboardCleanupRef.current = () => frameWindow?.removeEventListener("keydown", handleFrameKeyDown, true);
              } catch {
                // A browser-isolated native PDF toolbar may keep its own keyboard shortcuts.
                // The visible close button and native dialog controls remain available.
                iframeKeyboardCleanupRef.current = null;
              }
              setIsLoading(false);
              setHasLoadError(false);
            }}
            onError={() => {
              if (loadingTimeoutRef.current !== null) window.clearTimeout(loadingTimeoutRef.current);
              setIsLoading(false);
              setHasLoadError(true);
              setVerifiedUrl(null);
            }}
          /> : null}
          <p id="certificate-viewer-status" className="sr-only" aria-live="polite">
            {isLoading ? "Memuat pratinjau PDF." : hasLoadError ? "Pratinjau PDF gagal dimuat." : "Pratinjau PDF siap."}
          </p>
        </div>
      </div>
    </dialog>
  );
}

export default function CredentialsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

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
            {CERTIFICATIONS_DATA.map((cert) => {
              const hasCertificateUrl = Boolean(cert.url?.trim());
              const cardContent = (
                <>
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

                  {hasCertificateUrl ? (
                    <span className="mt-4 min-h-[44px] inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 px-3 py-2 text-xs font-semibold text-emerald-300">
                      Lihat pratinjau sertifikat
                      <Eye aria-hidden="true" className="w-3.5 h-3.5" />
                    </span>
                  ) : null}
                </>
              );

              return (
                <StaggerItem key={cert.id} className="flex">
                  {hasCertificateUrl ? (
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(cert)}
                      aria-label={`Buka sertifikat: ${cert.title}`}
                      aria-haspopup="dialog"
                      aria-expanded={selectedCertificate?.id === cert.id}
                      className="w-full glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      {cardContent}
                    </button>
                  ) : (
                    <article className="w-full glass-card p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                      {cardContent}
                    </article>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Reveal>
      </div>

      {selectedCertificate ? (
        <CertificateViewer
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      ) : null}
    </section>
  );
}
