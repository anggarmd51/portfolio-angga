import EditorialDivider from "./EditorialDivider";
import RecruiterQASection from "./RecruiterQASection";

const SNAPSHOT = [
  { value: "Sejak 2019", label: "Pengalaman Profesional Lintas Industri" },
  { value: "7 Peran", label: "Perbankan, Pembiayaan, B2B SaaS & Konektivitas" },
  { value: "B2B & SaaS", label: "Spesialisasi Akuisisi, Pipeline & Retensi Akun" },
  { value: "3 Produk", label: "Inisiator Aplikasi Web & CRM Mandiri" },
] as const;

export default function ExecutiveProfileSection() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="presentation-section border-t border-white/[0.08] bg-surface px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            EXECUTIVE PROFILE
          </p>
          <h2
            id="profile-heading"
            className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl"
          >
            Dari Analisis Kredit hingga B2B SaaS &amp; Konektivitas Korporasi
          </h2>
          <EditorialDivider className="mt-5 max-w-xs" />
          <div className="mt-7 max-w-3xl space-y-4 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Perjalanan profesional saya dimulai sebagai Surveyor di PT Astra Sedaya Finance pada 2019, membangun pemahaman atas verifikasi lapangan dan proses analisis kredit. Pengalaman berlanjut ke penjualan pembiayaan dan layanan perbankan.
            </p>
            <p>
              Saya kemudian beralih ke penjualan solusi B2B: HRIS di Nusawork, sistem POS ritel di Dretail, dan kini layanan konektivitas korporasi di Wavecomindo. Benang merahnya adalah memahami kebutuhan klien, menggerakkan pipeline, dan menjaga hubungan akun.
            </p>
          </div>
        </div>

        <dl
          aria-label="Professional Snapshot"
          className="mt-14 grid grid-cols-1 border-y border-muted-text/20 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {SNAPSHOT.map((item, index) => (
            <div
              key={item.value}
              className={`py-6 sm:px-6 lg:py-8 ${
                index < SNAPSHOT.length - 1 ? "border-b border-muted-text/15 sm:border-b-0" : ""
              } ${
                index % 2 === 1 ? "sm:border-l sm:border-muted-text/15" : ""
              } ${
                index >= 2 ? "sm:border-t sm:border-muted-text/15 lg:border-t-0" : ""
              } ${index > 0 ? "lg:border-l lg:border-muted-text/15" : ""} ${
                index === 0 || index === 2 ? "sm:pl-0" : ""
              }`}
            >
              <dt className="font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
                {item.value}
              </dt>
              <dd className="mt-2 max-w-[24ch] text-sm leading-6 text-muted-foreground">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
        <RecruiterQASection />
      </div>
    </section>
  );
}
