"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, MessageSquare, X, ArrowUpRight } from "lucide-react";

export default function ContactFooter() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    if (isContactOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isContactOpen]);

  return (
    <footer
      id="kontak"
      aria-labelledby="contact-heading"
      className="bg-hijau-ledger text-kertas-dingin py-20 px-6 sm:px-12 rounded-[6px] my-12 border border-garis-embun"
    >
      <div className="max-w-3xl">
        <p className="font-display text-xs sm:text-sm font-semibold text-kertas-dingin/80 mb-3 tracking-tight">
          Kolaborasi &amp; Kemitraan B2B
        </p>

        <h2
          id="contact-heading"
          className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-kertas-dingin mb-8 text-balance"
        >
          Ada kebutuhan penjualan B2B, kemitraan, atau posisi yang cocok? Mari bicara.
        </h2>

        {/* Area Tombol Aksi Utama & Popover / Bottom Action Sheet */}
        <div className="relative inline-block w-full sm:w-auto" ref={popoverRef}>
          <button
            type="button"
            aria-expanded={isContactOpen}
            aria-controls="contact-action-sheet"
            onClick={() => setIsContactOpen((prev) => !prev)}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-kuning-stabilo text-hijau-ledger font-display font-bold px-8 py-4 rounded-[6px] text-base hover:brightness-105 transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
          >
            Hubungi Saya
          </button>

          {isContactOpen && (
            <div
              id="contact-action-sheet"
              role="dialog"
              aria-label="Pilihan kontak langsung"
              className="mt-4 sm:w-[360px] bg-kertas-dingin text-hijau-ledger border border-garis-embun rounded-[6px] p-4"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-garis-embun">
                <span className="font-display font-bold text-sm text-hijau-ledger">
                  Pilih Jalur Komunikasi
                </span>
                <button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  aria-label="Tutup menu kontak"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-[4px] border border-garis-embun text-hijau-ledger hover:bg-hijau-ledger/10 transition-colors focus-visible:outline-2 focus-visible:outline-hijau-ledger"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-2.5">
                <a
                  href="mailto:anggaramadhan538@gmail.com"
                  className="flex items-center justify-between gap-3 p-3 rounded-[6px] border border-garis-embun bg-kertas-dingin hover:border-hijau-ledger transition-colors focus-visible:outline-2 focus-visible:outline-hijau-ledger"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-[6px] bg-hijau-ledger text-kertas-dingin shrink-0">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-display font-bold text-sm text-hijau-ledger block">
                        Kirim Email
                      </span>
                      <span className="font-body text-xs text-abu-hijau block">
                        anggaramadhan538@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-teal-tautan shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="https://wa.me/6285206602391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3 rounded-[6px] border border-garis-embun bg-kertas-dingin hover:border-hijau-ledger transition-colors focus-visible:outline-2 focus-visible:outline-hijau-ledger"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-[6px] bg-kuning-stabilo text-hijau-ledger border border-hijau-ledger shrink-0">
                      <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-display font-bold text-sm text-hijau-ledger block">
                        WhatsApp Langsung
                      </span>
                      <span className="font-display text-xs text-abu-hijau tabular-nums block">
                        +62 852-0660-2391
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-teal-tautan shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Jalur Tautan Profesional (Horizontal Links) */}
      <div className="mt-14 pt-8 border-t border-garis-embun/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          <a
            href="mailto:anggaramadhan538@gmail.com"
            className="font-display text-sm font-semibold text-kertas-dingin hover:text-kuning-stabilo underline decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
          >
            anggaramadhan538@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/anggarmd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-semibold text-kertas-dingin hover:text-kuning-stabilo underline decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
          >
            linkedin.com/in/anggarmd
          </a>
          <a
            href="https://github.com/anggarmd51"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-semibold text-kertas-dingin hover:text-kuning-stabilo underline decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
          >
            github.com/anggarmd51
          </a>
        </div>
      </div>

      {/* Footer Hak Cipta & Lokasi */}
      <div className="mt-8 pt-6 border-t border-garis-embun/20">
        <p className="font-display text-sm text-kertas-dingin/70">
          © 2026 Muhammad Angga Ramadhan. Medan, Sumatera Utara, Indonesia. Dirancang dengan estetika Modern Financial Editorial.
        </p>
      </div>
    </footer>
  );
}
