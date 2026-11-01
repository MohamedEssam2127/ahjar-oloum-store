import Link from "next/link";
import Image from "next/image";
import { type Gemstone, formatPrice } from "@/data/gemstones";

type GemstoneCardProps = {
  gemstone: Gemstone;
};

export default function GemstoneCard({ gemstone }: GemstoneCardProps) {
  return (
    <Link
      href={`/gemstones/${gemstone.slug}`}
      className="group block"
    >
      <div className="relative aspect-5/5 overflow-hidden border border-secondary/10 bg-white/40 shadow-[0_8px_28px_rgba(31,42,68,0.04)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary-500/45 group-hover:shadow-[0_18px_42px_rgba(31,42,68,0.12)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-65"
          style={{
            background: `radial-gradient(ellipse at 50% 42%, ${gemstone.accent}55, transparent 62%)`,
          }}
        />

        <Image
          src={gemstone.images[0]}
          alt={gemstone.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.07] sm:p-10"
        />

        <span className="absolute start-4 top-4 font-body text-[10px] tracking-[0.18em] text-secondary/55">
          AHJAR & OLOUM
        </span>

        {!gemstone.inStock && (
          <span className="absolute end-4 top-4 border-b border-secondary/20 pb-0.5 font-body text-[11px] tracking-wide text-secondary/60">
            غير متوفر
          </span>
        )}

        <span className="absolute bottom-4 end-4 translate-y-2 border border-primary-500/50 bg-background/90 px-3 py-1.5 font-body text-xs text-secondary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          اكتشف الحجر
        </span>
      </div>

      <div className="px-1 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl leading-none text-secondary transition-colors duration-300 group-hover:text-primary-700 sm:text-2xl">
            {gemstone.name}
          </h3>
          <span
            className="shrink-0 font-body text-sm text-neutral-700 sm:text-base"
            dir="ltr"
          >
            {formatPrice(gemstone.price, gemstone.currency)}
          </span>
        </div>

        <div className="mt-2.5 flex items-center gap-3">
          <span className="font-body text-xs text-neutral-400 sm:text-sm">
            {gemstone.weight}
          </span>
          <span className="h-px w-10 origin-right scale-x-0 bg-primary-500/80 transition-transform duration-500 group-hover:scale-x-100" />
          <span className="font-accent text-sm text-primary-600">
            قطعة مختارة
          </span>
        </div>
      </div>
    </Link>
  );
}
