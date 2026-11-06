"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface ExperienceItem {
  id: number;
  years: string;
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    years: "2025 – 2026",
    period: "Okt 2025 – Jun 2026",
    role: "Account Manager (SaaS HRIS Nusawork)",
    company: "PT Media Antar Nusa",
    location: "Medan, Indonesia",
    summary:
      "Mengelola end-to-end sales cycle, presentasi ke jajaran C-Level/HR, mencapai 100% target sales (Rp 50 Juta), dan mengawal onboarding untuk menekan churn.",
    achievements: [
      "Mengembangkan pipeline prospek B2B secara proaktif dan memimpin demonstrasi produk SaaS HRIS Nusawork kepada jajaran HR dan C-Level perusahaan.",
      "Mengelola seluruh siklus penjualan (end-to-end sales cycle) mulai dari kualifikasi kebutuhan, negosiasi kontrak, hingga penutupan kesepakatan (closing), berhasil mencapai 100% dari target penjualan atau senilai Rp 50 Juta.",
      "Memastikan proses onboarding dan adopsi produk berjalan lancar bagi klien baru untuk meminimalkan tingkat churn dan membangun hubungan jangka panjang.",
    ],
  },
  {
    id: 2,
    years: "2025",
    period: "Mar 2025 – Okt 2025",
    role: "Business Development Manager (SaaS POS Dretail)",
    company: "PT Sarana Digital Retail",
    location: "Medan, Indonesia",
    summary:
      "Penetrasi pasar B2B Retail & F&B di Medan, memimpin 3 BDO, sukses mengakuisisi 20+ merchant aktif baru per bulan, menyusun bundling paket software-hardware.",
    achievements: [
      "Merancang dan mengeksekusi strategi penetrasi pasar B2B untuk memperluas jangkauan sistem Point of Sale (POS) Dretail di sektor Retail dan F&B wilayah Medan dan sekitarnya.",
      "Memimpin tim yang terdiri dari 3 Business Development Officer (BDO) serta membangun kemitraan strategis dengan pemilik usaha, berhasil meng-onboard 20+ merchant baru per bulan.",
      "Menganalisis tren pasar serta kebutuhan operasional merchant untuk memberikan rekomendasi fitur dan solusi bundling perangkat POS yang tepat guna.",
    ],
  },
  {
    id: 3,
    years: "2024 – 2025",
    period: "Mei 2024 – Feb 2025",
    role: "Credit Marketing Officer",
    company: "PT Clipan Finance Indonesia",
    location: "Medan, Indonesia",
    summary:
      "Analisis kelayakan pembiayaan aset/kendaraan, kemitraan dealer, menjaga rasio NPL di bawah ambang batas melalui mitigasi risiko survei presisi.",
    achievements: [
      "Melakukan pencarian, penyaringan, dan analisis kelayakan kredit calon debitur untuk pembiayaan kendaraan/aset guna menjaga kualitas portofolio kredit perusahaan.",
      "Membangun dan memelihara hubungan kerja sama dengan dealer dan mitra penjualan untuk meningkatkan volume aplikasi pembiayaan masuk.",
      "Menjaga tingkat Non-Performing Loan (NPL) tetap di bawah batas maksimal dengan melakukan verifikasi lapangan (survey) dan analisis risiko secara presisi.",
    ],
  },
  {
    id: 4,
    years: "2023 – 2024",
    period: "Mei 2023 – Apr 2024",
    role: "Customer Retention Processing Syariah (Talangan Haji)",
    company: "PT Astra Sedaya Finance",
    location: "Medan, Indonesia",
    summary:
      "Retensi nasabah syariah eksisting, repeat order/refinancing sesuai kepatuhan administratif, konsisten melampaui target retensi bulanan 90%+.",
    achievements: [
      "Mengelola program retensi pelanggan existing untuk produk pembiayaan syariah (seperti Talangan Haji) melalui pendekatan konsultatif berbasis prinsip syariah.",
      "Memproses pengajuan pembiayaan ulang (refinancing/repeat order) serta memastikan kelengkapan dokumen administratif sesuai dengan standar kepatuhan (compliance).",
      "Mencapai target retensi bulanan sebesar 90%+ dengan menjaga kepuasan dan loyalitas nasabah.",
    ],
  },
  {
    id: 5,
    years: "2022 – 2023",
    period: "Nov 2022 – Mei 2023",
    role: "Card Funding Officer",
    company: "PT Bank Mega Tbk",
    location: "Medan, Indonesia",
    summary:
      "Akuisisi nasabah kartu kredit dan DPK melalui direct sales, edukasi portofolio promo, dan pendampingan verifikasi data hingga disetujui.",
    achievements: [
      "Melakukan akuisisi nasabah baru untuk produk kartu kredit dan dana pihak ketiga melalui kegiatan direct sales, canvassing, dan booth event.",
      "Mengedukasi calon nasabah mengenai keunggulan produk, fitur promo, serta membantu proses pemberkasan hingga persetujuan aplikasi.",
    ],
  },
  {
    id: 6,
    years: "2021 – 2022",
    period: "Sep 2021 – Okt 2022",
    role: "Sales Officer",
    company: "PT CIMB Niaga Auto Finance",
    location: "Medan, Indonesia",
    summary:
      "Pemasaran pembiayaan otomotif, perluasan jejaring showroom dealer rekanan di Medan, dan pencapaian target pembiayaan bulanan.",
    achievements: [
      "Memasarkan produk pembiayaan otomotif (auto loan) dan membangun jaringan kemitraan dengan showroom serta dealer kendaraan di wilayah operasional Medan.",
      "Mencapai target pembiayaan bulanan yang ditetapkan perusahaan serta mendampingi nasabah dalam proses pengajuan kredit.",
    ],
  },
  {
    id: 7,
    years: "2019 – 2021",
    period: "Okt 2019 – Apr 2021",
    role: "Surveyor",
    company: "PT Astra Sedaya Finance",
    location: "Medan, Indonesia",
    summary:
      "Investigasi lapangan, verifikasi data pemohon, analisis kapasitas tempat tinggal dan usaha, serta penyusunan rekomendasi mitigasi risiko kredit.",
    achievements: [
      "Melakukan survei lapangan, verifikasi data pemohon, serta analisis kelayakan tempat tinggal dan usaha calon debitur untuk meminimalkan risiko pembiayaan.",
      "Menyusun laporan hasil survei dan rekomendasi keputusan kredit secara objektif sesuai pedoman tata kelola risiko perusahaan.",
    ],
  },
];

export default function WorkExperience() {
  // 2 Posisi Teratas (ID 1 dan ID 2) terbuka secara default, 5 lainnya tertutup
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="pengalaman"
      aria-labelledby="work-experience-heading"
      className="border-b border-garis-embun py-16"
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Kolom Kiri: Judul Seksi */}
        <div className="col-span-12 lg:col-span-3">
          <h2
            id="work-experience-heading"
            className="font-display font-bold text-2xl tracking-tight text-hijau-ledger mb-2"
          >
            Pengalaman Kerja
          </h2>
          <p className="font-body text-base text-abu-hijau leading-relaxed mb-6">
            Tujuh peran berurutan dari analisis risiko pembiayaan di lapangan hingga kepemimpinan penjualan B2B SaaS.
          </p>
        </div>

        {/* Kolom Kanan: Daftar Accordion 7 Riwayat Karir */}
        <div className="col-span-12 lg:col-span-9">
          <div className="border-t border-garis-embun">
            {EXPERIENCES.map((exp) => {
              const isOpen = openIds.includes(exp.id);
              const contentId = `exp-panel-${exp.id}`;
              const buttonId = `exp-button-${exp.id}`;

              return (
                <div
                  key={exp.id}
                  className="border-b border-garis-embun bg-kertas-dingin"
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(exp.id)}
                    className="w-full text-left py-6 px-2 sm:px-4 grid grid-cols-12 gap-4 items-start hover:bg-hijau-ledger/[0.03] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger"
                  >
                    {/* Kolom Tahun */}
                    <div className="col-span-12 sm:col-span-3">
                      <span className="font-display font-bold text-base sm:text-lg text-hijau-ledger tabular-nums block">
                        {exp.years}
                      </span>
                      <span className="font-display text-xs text-abu-hijau tabular-nums">
                        {exp.period}
                      </span>
                    </div>

                    {/* Kolom Jabatan & Perusahaan */}
                    <div className="col-span-10 sm:col-span-8">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-hijau-ledger tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="font-display text-sm font-medium text-abu-hijau mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                      {!isOpen && (
                        <p className="font-body text-base text-abu-hijau mt-2 line-clamp-1">
                          {exp.summary}
                        </p>
                      )}
                    </div>

                    {/* Ikon Panah/Chevron */}
                    <div className="col-span-2 sm:col-span-1 flex justify-end items-center pt-1">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-[6px] border border-garis-embun text-hijau-ledger transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-kuning-stabilo" : "bg-kertas-dingin"
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </button>

                  {/* Panel Isi Accordion */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }
                        }
                        className="px-2 sm:px-4 pb-6 grid grid-cols-12 gap-4"
                      >
                        <div className="hidden sm:block sm:col-span-3" />
                        <div className="col-span-12 sm:col-span-9 border-t border-garis-embun pt-4">
                          <p className="font-body text-[18px] leading-[1.7] text-hijau-ledger max-w-[62ch] mb-4">
                            {exp.summary}
                          </p>
                          <ul className="space-y-2.5">
                            {exp.achievements.map((point) => (
                              <li
                                key={point}
                                className="font-body text-base sm:text-[17px] leading-[1.7] text-abu-hijau flex items-start gap-3 max-w-[62ch]"
                              >
                                <span
                                  className="inline-block w-1.5 h-1.5 bg-hijau-ledger mt-2.5 shrink-0"
                                  aria-hidden="true"
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Baris Pendidikan Formal (Master CV) */}
          <div className="mt-8 p-6 border border-garis-embun rounded-[6px] bg-kertas-dingin flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-display text-xs font-semibold text-abu-hijau block mb-1">
                Pendidikan Formal
              </span>
              <h3 className="font-display font-bold text-lg text-hijau-ledger tracking-tight">
                Diploma 3 (D3) Perbankan Syariah
              </h3>
              <p className="font-body text-base text-abu-hijau">
                Universitas Islam Negeri Sumatera Utara (UIN SU)
              </p>
            </div>
            <div className="sm:text-right">
              <span className="font-display font-bold text-base text-hijau-ledger tabular-nums block">
                Lulus 2019
              </span>
              <span className="font-display text-sm font-medium text-abu-hijau tabular-nums">
                IPK 3.26 / 4.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
