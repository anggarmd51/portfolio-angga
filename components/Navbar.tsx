import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 border-b border-garis-embun">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10 py-3.5 flex flex-wrap justify-between items-center gap-x-4 gap-y-2.5">
        {/* Left: Brand Identity + Executive Availability Badge */}
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="#"
            aria-label="Beranda Muhammad Angga Ramadhan"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
          >
            <span className="w-9 h-9 rounded-lg bg-hijau-ledger text-kuning-stabilo font-display font-extrabold text-sm tracking-tight flex items-center justify-center shrink-0 border border-hijau-ledger group-hover:bg-hijau-ledger/90 transition-colors">
              AR
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-hijau-ledger truncate">
                Muhammad Angga Ramadhan
              </span>
              <span className="font-display text-[11px] font-semibold text-abu-hijau tracking-tight hidden sm:inline-block">
                B2B Sales · Business Development · Account Management
              </span>
            </div>
          </a>

          <div className="hidden xl:inline-flex items-center gap-2 ml-2 pl-3 border-l border-garis-embun">
            <span
              className="w-2 h-2 rounded-full bg-teal-tautan shrink-0"
              aria-hidden="true"
            />
            <span className="font-display text-xs font-semibold text-hijau-ledger tracking-tight">
              Open for B2B Sales &amp; BD Leadership · Medan
            </span>
          </div>
        </div>

        {/* Right: Quick Section Links + Direct Action CTA */}
        <nav
          aria-label="Navigasi Utama"
          className="flex items-center gap-3 sm:gap-6"
        >
          <a
            href="#pencapaian"
            className="font-display text-xs sm:text-sm font-semibold text-abu-hijau hover:text-hijau-ledger transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
          >
            Pencapaian
          </a>
          <a
            href="#keahlian"
            className="font-display text-xs sm:text-sm font-semibold text-abu-hijau hover:text-hijau-ledger transition-colors whitespace-nowrap hidden md:inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
          >
            Kapabilitas
          </a>
          <a
            href="#proyek"
            className="font-display text-xs sm:text-sm font-semibold text-abu-hijau hover:text-hijau-ledger transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
          >
            Proyek
          </a>
          <a
            href="#pengalaman"
            className="font-display text-xs sm:text-sm font-semibold text-abu-hijau hover:text-hijau-ledger transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
          >
            Pengalaman
          </a>
          <a
            href="#kontak"
            className="inline-flex items-center gap-1.5 bg-hijau-ledger text-kertas-dingin hover:bg-hijau-ledger/90 font-display font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
          >
            <span>Hubungi Angga</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-kuning-stabilo" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
