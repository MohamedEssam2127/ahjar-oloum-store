import Link from "next/link";

export default function GemstoneNotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="font-display text-3xl sm:text-4xl text-secondary">
          الحجر غير موجود
        </h1>
        <p className="font-body text-sm text-neutral-400">
          تعذّر العثور على هذا الحجر في التشكيلة الحالية.
        </p>
        <Link
          href="/#gemstones"
          className="inline-block font-body text-sm text-primary-700 border-b border-primary-500/50 pb-0.5 hover:text-secondary transition-colors"
        >
          العودة إلى التشكيلة
        </Link>
      </div>
    </main>
  );
}
