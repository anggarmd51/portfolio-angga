import React from "react";

interface SkillCluster {
  title: string;
  items: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  period: string;
}

const SKILL_CLUSTERS: SkillCluster[] = [
  {
    title: "Penjualan & Pipeline",
    items: [
      "Strategi B2B/B2C",
      "Lead Generation",
      "Pipeline & Funnel Management",
      "Negosiasi & Closing",
      "Social Selling & Referral",
      "Ekspansi Pasar",
    ],
  },
  {
    title: "Akun & Retensi",
    items: [
      "Key Account Management (KAM)",
      "Retensi Klien",
      "Layanan Purna Jual",
      "Onboarding Klien Enterprise",
      "Kepemimpinan & Coaching Tim Penjualan",
    ],
  },
  {
    title: "Kredit & Risiko",
    items: [
      "Analisis Kelayakan Kredit",
      "Pengendalian NPL",
      "Verifikasi & Survei Lapangan",
      "Konsultasi Produk Pembiayaan Syariah",
    ],
  },
  {
    title: "Alat & Teknologi",
    items: [
      "CRM Dashboard Analytics",
      "HubSpot Sales Hub",
      "Microsoft Office (Excel Mahir, PowerPoint)",
      "Sistem Pipeline Modern",
      "AI-Assisted Dev",
    ],
  },
];

const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Sales Management Certification",
    issuer: "HubSpot Academy",
    period: "Okt 2026 – Nov 2028",
  },
  {
    name: "HubSpot Sales Hub Software Certified",
    issuer: "HubSpot Academy",
    period: "Jun 2026 – Jul 2027",
  },
  {
    name: "Boosting MSME Growth through AI",
    issuer: "Hacktiv8 Indonesia, Google.org & Asian Development Bank",
    period: "Nov 2025",
  },
  {
    name: "Vibe Coding: Building AI Application for Students",
    issuer: "Ruangguru Engineering Academy+",
    period: "Okt 2026",
  },
  {
    name: "Introduction to Digital Marketing",
    issuer: "Classpedia",
    period: "Okt 2026",
  },
  {
    name: "Financial Literacy & Job Readiness (You RISE)",
    issuer: "DBS Foundation & Plan International",
    period: "Sep 2026",
  },
];

export default function SkillsCertifications() {
  return (
    <section
      aria-labelledby="skills-certifications-heading"
      className="border-b border-garis-embun py-16"
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Kolom Kiri: Judul Seksi */}
        <div className="col-span-12 lg:col-span-3">
          <h2
            id="skills-certifications-heading"
            className="font-display font-bold text-2xl tracking-tight text-hijau-ledger mb-2"
          >
            Keahlian &amp; Sertifikasi
          </h2>
          <p className="font-body text-base text-abu-hijau leading-relaxed">
            Kompetensi inti lintas siklus penjualan B2B, manajemen risiko pembiayaan, serta lisensi profesional terverifikasi.
          </p>
        </div>

        {/* Kolom Kanan: 4 Klaster Keahlian & 6 Sertifikasi Resmi */}
        <div className="col-span-12 lg:col-span-9 space-y-12">
          {/* A. 4 Klaster Keahlian */}
          <div>
            <h3 className="font-display font-semibold text-sm text-abu-hijau tracking-tight mb-4">
              Empat Kelompok Keahlian Utama
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILL_CLUSTERS.map((cluster) => (
                <div
                  key={cluster.title}
                  className="border border-garis-embun p-6 rounded-[6px] bg-kertas-dingin flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-lg tracking-tight text-hijau-ledger mb-3 pb-3 border-b border-garis-embun">
                      {cluster.title}
                    </h4>
                    <p className="font-body text-base sm:text-[17px] leading-[1.7] text-hijau-ledger mb-4">
                      {cluster.items.join(", ")}.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cluster.items.map((skill) => (
                      <span
                        key={skill}
                        className="font-display text-xs font-medium text-abu-hijau border border-garis-embun rounded-[4px] px-2.5 py-1 bg-kertas-dingin"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* B. Daftar Sertifikasi Resmi (6 Baris bergaris batas tipis 1px) */}
          <div>
            <h3 className="font-display font-semibold text-sm text-abu-hijau tracking-tight mb-4">
              Sertifikasi &amp; Pelatihan Resmi
            </h3>
            <div className="border border-garis-embun rounded-[6px] divide-y divide-garis-embun bg-kertas-dingin">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <p className="font-display font-bold text-base text-hijau-ledger tracking-tight">
                      {cert.name}
                    </p>
                    <p className="font-body text-sm sm:text-base text-abu-hijau">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="font-display text-xs sm:text-sm font-semibold text-hijau-ledger tabular-nums whitespace-nowrap shrink-0">
                    {cert.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
