"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, Video01Icon } from "@hugeicons/core-free-icons";
import type { Gemstone } from "@/data/gemstones";
import { formatPrice } from "@/data/gemstones";
import GemstoneGallery from "@/components/GemstoneGallery";

type GemstoneDetailsProps = {
  gemstone: Gemstone;
};

export default function GemstoneDetails({ gemstone }: GemstoneDetailsProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-tertiary-100)_0%,_transparent_55%)] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Gallery — sticky like luxury product pages */}
          <div className="lg:sticky lg:top-24 animate-fade-up">
            <GemstoneGallery
              images={gemstone.images}
              name={gemstone.name}
              accent={gemstone.accent}
            />
          </div>

          {/* Info + specs */}
          <div className="space-y-10 animate-fade-up-delayed">
            {/* Purchase panel */}
            <div className="space-y-5">
              {gemstone.inStock ? (
                <span className="inline-block font-body text-xs tracking-wide bg-tertiary-200 text-secondary-700 px-3 py-1.5">
                  متوفر
                </span>
              ) : (
                <span className="inline-block font-body text-xs tracking-wide bg-neutral-100 text-neutral-500 px-3 py-1.5">
                  غير متوفر
                </span>
              )}

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-secondary leading-[1.25]">
                {gemstone.title}
              </h1>

              <p
                className="font-body text-xl sm:text-2xl text-neutral-800 font-medium"
                dir="ltr"
              >
                {formatPrice(gemstone.price, gemstone.currency)}
              </p>

              <p className="font-body text-sm text-neutral-400">
                الشحن خلال ٣–٥ أيام عمل · تغليف فاخر مجاني
              </p>

              <button
                type="button"
                disabled={!gemstone.inStock}
                className="w-full font-body text-sm sm:text-base font-semibold tracking-wide bg-secondary text-white py-4 px-6 hover:bg-secondary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                أضف إلى السلة
              </button>

              <ul className="space-y-2.5">
                {[
                  "إرجاع خلال ١٠ أيام",
                  "استشارة مجانية مع فريق أحجار و علوم",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-body text-sm text-neutral-600"
                  >
                    <HugeiconsIcon
                      icon={Tick02Icon}
                      size={18}
                      className="text-secondary mt-0.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed pt-2">
                {gemstone.description}
              </p>
            </div>

            {/* Specs table — "The stone" */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-secondary mb-5">
                تفاصيل الحجر
              </h2>

              <dl className="border-t border-neutral-200">
                {gemstone.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-6 py-3.5 border-b border-neutral-200"
                  >
                    <dt className="font-body text-sm text-neutral-400 shrink-0">
                      {spec.label}
                    </dt>
                    <dd className="font-body text-sm text-neutral-800 text-end">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <button
                type="button"
                className="mt-8 w-full flex items-center justify-center gap-2 font-body text-sm font-medium border border-secondary text-secondary py-3.5 px-6 hover:bg-secondary hover:text-white transition-colors"
              >
                <HugeiconsIcon icon={Video01Icon} size={18} strokeWidth={1.5} />
                شاهده مباشرة عبر الفيديو
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
