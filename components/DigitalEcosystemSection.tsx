import ToolMarquee from "@/components/ToolMarquee";

export default function DigitalEcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="presentation-section border-t border-white/[0.08] bg-graphite px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
            Digital Ecosystem
          </p>
          <h2
            id="ecosystem-heading"
            className="font-heading text-3xl font-semibold tracking-[-0.04em] text-soft-white sm:text-4xl md:text-5xl"
          >
            Tools &amp; Tech
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
            Perangkat kerja untuk riset prospek, pengelolaan akun, kolaborasi, dan pengembangan produk digital.
          </p>
        </header>
        <ToolMarquee />
      </div>
    </section>
  );
}
