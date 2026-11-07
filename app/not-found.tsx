import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-kertas-dingin text-hijau-ledger flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full border-t-2 border-hijau-ledger pt-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-abu-hijau tabular-nums mb-3">
          404 · Halaman Tidak Ditemukan
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-hijau-ledger mb-4">
          Tautan yang Anda tuju tidak tersedia.
        </h1>
        <p className="font-body text-base sm:text-lg text-abu-hijau leading-[1.7] mb-8">
          Silakan kembali ke halaman utama portofolio Muhammad Angga Ramadhan untuk melihat rekam jejak karier, proyek, dan kontak resmi.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-kuning-stabilo text-hijau-ledger font-display font-bold text-sm px-5 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Kembali ke Portofolio Utama
        </Link>
      </div>
    </main>
  );
}
