const COMPETENCIES = [
  {
    number: "01",
    title: "B2B Sales & Prospecting",
    description:
      "Pemetaan pasar B2B, kualifikasi prospek pengambil keputusan, dan manajemen siklus penjualan konsultatif.",
  },
  {
    number: "02",
    title: "Business Development",
    description:
      "Ekspansi kemitraan strategis, pembukaan segmen pasar baru, dan koordinasi tim akuisisi lapangan.",
  },
  {
    number: "03",
    title: "Account Management & Retention",
    description:
      "Pendampingan onboarding teknis, penjagaan SLA layanan, serta retensi dan pertumbuhan akun jangka panjang.",
  },
  {
    number: "04",
    title: "Sales Operations & CRM",
    description:
      "Digitalisasi pelacakan pipeline, forecasting penjualan, dan pengembangan sistem CRM internal berbantuan AI.",
  },
] as const;

export default function CoreCompetenciesSection() {
  return (
    <section
      id="competencies"
      aria-labelledby="competencies-heading"
      className="presentation-section border-t border-white/[0.08] bg-graphite px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
            Keahlian Utama
          </p>
          <h2
            id="competencies-heading"
            className="font-heading text-3xl font-semibold tracking-[-0.04em] text-soft-white sm:text-4xl md:text-5xl"
          >
            Core Competencies
          </h2>
        </div>

        <ol className="grid grid-cols-1 border-t border-muted-text/20 md:grid-cols-2">
          {COMPETENCIES.map((item, index) => (
            <li
              key={item.number}
              className={`grid grid-cols-[3rem_1fr] gap-x-3 border-b border-muted-text/15 py-6 sm:grid-cols-[4rem_1fr] sm:gap-x-5 sm:py-8 ${
                index % 2 === 0 ? "md:pr-10" : "md:border-l md:pl-10"
              }`}
            >
              <span className="pt-1 font-mono text-xs tracking-wide text-muted-text">
                {item.number} /
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-soft-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[58ch] text-sm leading-7 text-muted-text sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
