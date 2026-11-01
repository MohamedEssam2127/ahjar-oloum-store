import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  gemstones,
  getGemstoneBySlug,
} from "@/data/gemstones";
import GemstoneDetails from "@/components/GemstoneDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return gemstones.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const gem = getGemstoneBySlug(slug);

  if (!gem) {
    return { title: "حجر غير موجود | أحجار و علوم" };
  }

  return {
    title: `${gem.title} | أحجار و علوم`,
    description: gem.description,
  };
}

function DetailsFallback() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="aspect-square bg-secondary-900 animate-pulse" />
          <div className="space-y-4 pt-2">
            <div className="h-4 w-20 bg-tertiary-200 animate-pulse" />
            <div className="h-10 w-4/5 bg-neutral-200 animate-pulse" />
            <div className="h-7 w-40 bg-neutral-200 animate-pulse" />
            <div className="h-12 w-full bg-secondary-200 animate-pulse mt-6" />
          </div>
        </div>
      </div>
    </main>
  );
}

async function GemstoneContent({ params }: Pick<PageProps, "params">) {
  const { slug } = await params;
  const gemstone = getGemstoneBySlug(slug);

  if (!gemstone) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <GemstoneDetails gemstone={gemstone} />
    </main>
  );
}

export default function GemstonePage({ params }: PageProps) {
  return (
    <Suspense fallback={<DetailsFallback />}>
      <GemstoneContent params={params} />
    </Suspense>
  );
}
