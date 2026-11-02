import Link from "next/link";
import Image from "next/image";
import { type Gemstone, formatPrice } from "@/data/gemstones";

type GemstoneCardProps = {
  gemstone: Gemstone;
  view?: "grid" | "list";
};

export default function GemstoneCard({
  gemstone,
  view = "grid",
}: GemstoneCardProps) {
  const isList = view === "list";

  return (
    <Link
      href={`/gemstones/${gemstone.slug}`}
      className={`group block overflow-hidden rounded-sm border border-secondary/10 bg-white/70 shadow-[0_8px_28px_rgba(31,42,68,0.05),0_2px_6px_rgba(31,42,68,0.03)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-500/45 hover:shadow-[0_18px_42px_rgba(31,42,68,0.12),0_4px_12px_rgba(198,167,94,0.08)] ${isList ? "flex flex-row items-stretch" : ""}`}
    >
      <div
        className={`relative isolate overflow-hidden bg-[linear-gradient(145deg,#fbf8f2_0%,#f2eee5_52%,#fffdfa_100%)] ${isList ? "aspect-square w-[38%] max-w-64 shrink-0 sm:w-1/3" : "aspect-[4/3] w-full sm:aspect-square"}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-65 transition-opacity duration-700 group-hover:opacity-90"
          style={{
            background: `radial-gradient(ellipse at 50% 46%, ${gemstone.accent}45 0%, ${gemstone.accent}18 28%, rgba(255,255,255,0.7) 58%, transparent 78%)`,
          }}
        />
        <Image
          src={gemstone.images[0]}
          alt={gemstone.name}
          fill
          sizes={
            isList
              ? "(max-width: 640px) 38vw, 256px"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          }
          className={`object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06] ${isList ? "p-3 sm:p-8" : "p-2 sm:p-10"}`}
        />

        <span className={`absolute inset-s-3 top-3 font-body text-[9px] tracking-[0.16em] text-secondary/55 sm:inset-s-4 sm:top-4 sm:text-[10px] sm:tracking-[0.18em] ${isList ? "" : "hidden sm:block"}`}>
          AHJAR & OLOUM
        </span>

        {!gemstone.inStock && (
          <span className="absolute inset-e-2 top-2 border border-secondary/10 bg-white/70 px-1.5 py-0.5 font-body text-[9px] tracking-wide text-secondary/70 backdrop-blur-sm sm:inset-e-4 sm:top-4 sm:px-2 sm:text-[11px]">
            غير متوفر
          </span>
        )}

        {!isList && (
          <span className="absolute bottom-4 inset-e-4 translate-y-2 border border-primary-500/50 bg-background/90 px-3 py-1.5 font-body text-xs text-secondary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            اكتشف الحجر
          </span>
        )}
      </div>

      <div
        className={`flex min-w-0 flex-1 flex-col justify-center ${isList ? "p-3 sm:p-7" : "px-3 pb-3.5 pt-3 sm:px-6 sm:pb-7 sm:pt-5"}`}
      >
        <div className={`flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 ${isList ? "" : "sm:gap-2"}`}>
          <h3 className="line-clamp-2 font-display text-[15px] leading-snug text-secondary transition-colors duration-300 group-hover:text-primary-700 sm:text-2xl">
            {gemstone.name}
          </h3>
          <span
            className="shrink-0 whitespace-nowrap font-body text-[11px] text-neutral-700 sm:text-base"
            dir="ltr"
          >
            {formatPrice(gemstone.price, gemstone.currency)}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:mt-2.5 sm:gap-3">
          <span className="font-body text-[10px] text-neutral-400 sm:text-sm">
            {gemstone.weight}
          </span>
          <span className="h-px w-4 origin-right scale-x-0 bg-primary-500/80 transition-transform duration-500 group-hover:scale-x-100 sm:w-10" />
          <span className="hidden font-accent text-sm text-primary-600 sm:inline">
            قطعة مختارة
          </span>
        </div>

        {isList && (
          <span className="mt-4 hidden w-fit border-b border-primary-500/50 pb-1 font-body text-xs text-secondary/70 transition-colors group-hover:text-primary-700 sm:block">
            اكتشف الحجر
          </span>
        )}
      </div>
    </Link>
  );
}
