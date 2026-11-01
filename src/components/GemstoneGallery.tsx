"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";

type GemstoneGalleryProps = {
  images: string[];
  name: string;
  accent: string;
};

export default function GemstoneGallery({
  images,
  name,
  accent,
}: GemstoneGalleryProps) {
  const [active, setActive] = useState(0);
  const total = images.length;

  const prev = () => setActive((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActive((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="flex gap-3 sm:gap-4">
      {/* Thumbnails */}
      <div className="hidden sm:flex flex-col gap-2 w-14 shrink-0">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`صورة ${i + 1}`}
            className={`relative aspect-square overflow-hidden  transition-[outline-color] outline outline-1 -outline-offset-1 ${
              active === i
                ? "outline-primary"
                : "outline-transparent hover:outline-primary-400/50"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="56px"
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>

      {/* Main studio frame */}
      <div className="relative flex-1 aspect-square  overflow-hidden group">
        <div
          className="absolute inset-0 opacity-45 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 45%, ${accent}66, transparent 65%)`,
          }}
        />

        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-8 sm:p-12 transition-opacity duration-500"
        />

        <button
          type="button"
          aria-label="تكبير"
          className="absolute top-3 start-3 p-2 text-white/40 hover:text-primary transition-colors"
        >
          <HugeiconsIcon icon={Search01Icon} size={20} strokeWidth={1.5} />
        </button>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={next}
              aria-label="التالي"
              className="absolute start-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 text-white flex items-center justify-center hover:bg-black/55 transition-all opacity-0 group-hover:opacity-100"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label="السابق"
              className="absolute end-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 text-white flex items-center justify-center hover:bg-black/55 transition-all opacity-0 group-hover:opacity-100"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
            </button>
          </>
        )}

        {total > 1 && (
          <div className="sm:hidden absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`صورة ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  active === i ? "bg-primary" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
