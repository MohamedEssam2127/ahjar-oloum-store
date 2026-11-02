"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GridViewIcon,
  ListViewIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { searchGemstones } from "@/data/gemstones";
import GemstoneCard from "@/components/GemstoneCard";
import ScrollReveal from "@/components/ScrollReveal";
import { useStore } from "@/components/StoreProvider";

export default function GemstoneGrid() {
  const { searchTerm, setSearchTerm } = useStore();
  const [view, setView] = useState<"grid" | "list">("grid");
  const visibleGemstones = searchGemstones(searchTerm);

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
          {searchTerm && (
            <div className="mt-6 flex items-center justify-between gap-4 border-b border-primary-500/30 pb-3">
              <p className="font-body text-sm text-neutral-600">
                نتائج البحث عن «{searchTerm}» — {visibleGemstones.length} حجر
              </p>
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="shrink-0 font-body text-sm text-primary-700 transition-colors hover:text-secondary"
              >
                مسح البحث
              </button>
            </div>
          )}
        </header>

        <div className="mb-8 flex justify-end">
          <div
            role="group"
            aria-label="طريقة عرض الأحجار"
            className="inline-flex rounded-sm border border-secondary/10 bg-white/70 p-1 shadow-[0_4px_16px_rgba(31,42,68,0.05)]"
          >
            <button
              type="button"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
              className={`inline-flex min-h-10 items-center gap-2 px-3 font-body text-xs transition-colors sm:px-4 sm:text-sm ${view === "grid" ? "bg-secondary text-white shadow-sm" : "text-secondary/65 hover:text-secondary"}`}
            >
              <HugeiconsIcon icon={GridViewIcon} size={17} strokeWidth={1.6} />
              شبكة
            </button>
            <button
              type="button"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
              className={`inline-flex min-h-10 items-center gap-2 px-3 font-body text-xs transition-colors sm:px-4 sm:text-sm ${view === "list" ? "bg-secondary text-white shadow-sm" : "text-secondary/65 hover:text-secondary"}`}
            >
              <HugeiconsIcon icon={ListViewIcon} size={17} strokeWidth={1.6} />
              قائمة
            </button>
          </div>
        </div>

        {visibleGemstones.length > 0 ? (
          <div
            className={
              view === "grid"
                ? "grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3"
                : "flex flex-col gap-4 sm:gap-6"
            }
          >
            {visibleGemstones.map((gem, i) => (
              <ScrollReveal
                key={gem.id}
                delay={view === "grid" ? (i % 3) * 90 : Math.min(i, 5) * 60}
              >
                <GemstoneCard gemstone={gem} view={view} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center border border-primary-500/20 bg-white/40 px-6 py-16 text-center">
            <HugeiconsIcon
              icon={Search01Icon}
              size={28}
              strokeWidth={1.4}
              className="mb-4 text-primary-600"
            />
            <p className="font-display text-2xl text-secondary">
              لم نعثر على حجر مطابق
            </p>
            <p className="mt-2 font-body text-sm text-neutral-500">
              جرّب البحث باسم الحجر أو لونه أو منشئه.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
