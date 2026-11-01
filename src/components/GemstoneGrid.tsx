import { gemstones } from "@/data/gemstones";
import GemstoneCard from "@/components/GemstoneCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function GemstoneGrid() {
  return (
    <section id="gemstones" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,var(--color-tertiary-100)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_40%,var(--color-primary-50)_0%,transparent_45%)] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-14 sm:mb-20 max-w-2xl">
          <p className="font-accent text-lg sm:text-xl text-primary-600 mb-3">
            تشكيلة مختارة بعناية
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-secondary leading-tight">
            الأحجار الكريمة
          </h2>
          <p className="font-body text-neutral-500 text-sm sm:text-base leading-relaxed mt-4 max-w-lg">
            قطع طبيعية نادرة، مصقولة ومصوّرة كما تُعرض في المعارض الخاصة —
            كل حجر قصة لون ولمعان.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 sm:gap-y-16">
          {gemstones.map((gem, i) => (
            <ScrollReveal key={gem.id} delay={(i % 3) * 90}>
              <GemstoneCard gemstone={gem} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
