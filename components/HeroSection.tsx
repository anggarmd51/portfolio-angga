import React from "react";
import PipelineStrip from "@/components/PipelineStrip";

const PROOF_POINTS = [
  {
    metric: "100% target sales / Rp 50 Juta",
    context: "Account Manager SaaS HRIS",
  },
  {
    metric: "20+ merchant / bulan",
    context: "Business Development Manager POS",
  },
  {
    metric: "90%+ retensi",
    context: "Customer Retention Pembiayaan Syariah",
  },
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-hijau-ledger text-kertas-dingin py-16 px-6 sm:px-12 border-b border-garis-embun"
    >
      <div className="max-w-4xl">
        <p className="font-display text-xs sm:text-sm font-semibold text-kertas-dingin/80 mb-4 tracking-tight">
          Medan, Sumatera Utara · B2B Sales, Business Development &amp; Account Management
        </p>

        <h1
          id="hero-heading"
          className="font-display font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] tracking-[-0.02em] leading-[1.05] text-kertas-dingin mb-6 text-balance"
        >
          Menjual dengan hitungan risiko. Membangun produk sendiri.
        </h1>

        <p className="font-body text-lg sm:text-[19px] leading-[1.7] text-kertas-dingin/90 max-w-[62ch] mb-8">
          Saya Muhammad Angga Ramadhan, profesional Sales, Business Development, dan Account Management di Medan. Pengalaman saya mencakup pembiayaan, perbankan, dan SaaS B2B.
        </p>

        {/* Tombol Aksi (CTA) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
          <a
            href="#pengalaman"
            className="inline-flex items-center justify-center bg-kuning-stabilo text-hijau-ledger font-display font-bold text-sm sm:text-base px-6 py-3 rounded-[6px] hover:brightness-105 transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
          >
            Lihat pengalaman
          </a>
          <a
            href="#kontak"
            className="inline-flex items-center justify-center border-2 border-kertas-dingin text-kertas-dingin font-display font-medium text-sm sm:text-base px-6 py-3 rounded-[6px] hover:bg-kertas-dingin/10 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning-stabilo"
          >
            Hubungi saya
          </a>
        </div>
      </div>

      {/* Baris Bukti Terverifikasi (3 Kolom dengan pemisah 1px border-garis-embun/20) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-garis-embun/20 divide-y md:divide-y-0 md:divide-x divide-garis-embun/20 bg-hijau-ledger">
        {PROOF_POINTS.map((item) => (
          <div key={item.metric} className="p-4 sm:p-5">
            <p className="font-display font-bold text-lg sm:text-xl text-kertas-dingin tabular-nums tracking-tight mb-1">
              {item.metric}
            </p>
            <p className="font-body text-sm text-kertas-dingin/75">
              {item.context}
            </p>
          </div>
        ))}
      </div>

      {/* Strip Pipeline 7 Peran */}
      <PipelineStrip />
    </section>
  );
}
