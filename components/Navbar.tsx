import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center gap-8 py-6 border-b border-garis-embun bg-kertas-dingin">
      <a
        href="#"
        className="font-display font-bold text-lg tracking-tight text-hijau-ledger whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
      >
        Muhammad Angga Ramadhan
      </a>

      <nav aria-label="Navigasi Utama" className="flex items-center gap-6 sm:gap-8">
        <a
          href="#pengalaman"
          className="font-display text-abu-hijau hover:text-teal-tautan hover:underline hover:decoration-2 hover:underline-offset-4 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
        >
          Pengalaman
        </a>
        <a
          href="#proyek"
          className="font-display text-abu-hijau hover:text-teal-tautan hover:underline hover:decoration-2 hover:underline-offset-4 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
        >
          Proyek
        </a>
        <a
          href="#kontak"
          className="font-display text-abu-hijau hover:text-teal-tautan hover:underline hover:decoration-2 hover:underline-offset-4 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
        >
          Kontak
        </a>
      </nav>
    </header>
  );
}
