import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "من نحن | أحجار و علوم",
  description:
    "تعرّف على إسلام ورحلته مع عالم الأحجار الكريمة في أحجار و علوم.",
};

const values = [
  {
    number: "01",
    title: "اختيار بعناية",
    description:
      "نقدّم أحجارًا مختارة لجمال ألوانها وتفرّد تفاصيلها، لتجد لكل قطعة ما يميّزها.",
  },
  {
    number: "02",
    title: "معرفة قبل الاختيار",
    description:
      "نؤمن أن متعة اقتناء الحجر تبدأ من معرفة خصائصه وتفاصيله بوضوح.",
  },
  {
    number: "03",
    title: "تجربة شخصية",
    description:
      "نرافقك في اكتشاف القطعة المناسبة ونجيب عن أسئلتك بكل اهتمام.",
  },
];

const travelDestinations = [
  { name: "سريلانكا", image: "/Sri Lanka.png" },
  { name: "الهند", image: "/India.png" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ScrollReveal className="mb-12 text-center sm:mb-16">
          <p className="mb-3 font-accent text-lg text-primary-700 sm:text-xl">
            حكاية شغف ومعرفة
          </p>
          <h1 className="font-display text-4xl leading-tight text-secondary sm:text-5xl md:text-6xl">
            من نحن
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-sm leading-8 text-neutral-500 sm:text-base">
            لكل حجر طبيعته الخاصة، ولكل رحلة أثرها. في أحجار و علوم نشارككم
            شغف اكتشاف الأحجار الكريمة وجمالها.
          </p>
        </ScrollReveal>

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <ScrollReveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 border border-primary-500/35" />
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
              <Image
                src="/person.jpeg"
                alt="إسلام، مؤسس أحجار و علوم"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/90 via-secondary/45 to-transparent px-6 pb-6 pt-20 text-white">
                <p className="font-accent text-sm text-primary-300">
                  مؤسس أحجار و علوم
                </p>
                <p className="mt-1 font-display text-3xl">إسلام</p>
              </div>
            </div>
            <span className="absolute -bottom-7 -end-3 font-accent text-sm text-primary-700 sm:-end-8">
              الشغف يكتشف الجمال
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120} className="pt-2 lg:pt-0">
            <p className="mb-3 font-accent text-lg text-primary-700">
              رحلة مستمرة بين الثقافات والأحجار
            </p>
            <h2 className="font-display text-3xl leading-snug text-secondary sm:text-4xl">
              وراء كل حجر حكاية تستحق أن تُروى
            </h2>
            <div className="mt-6 space-y-4 font-body text-sm leading-8 text-neutral-600 sm:text-base">
              <p>
                يقود إسلام هذا الشغف بعينٍ تقدّر اختلاف الألوان والتكوينات
                الطبيعية. ومن خلال زياراته إلى سريلانكا والهند، تعرّف عن قرب
                على تنوّع الثقافات والأسواق التي تحتفي بالأحجار الكريمة.
              </p>
              <p>
                اليوم، يضع هذه الخبرة والفضول في اختيار قطع مميزة ومشاركة
                تفاصيلها مع محبي الأحجار، لتكون تجربة الاقتناء أقرب إلى اكتشاف
                قصة خاصة، لا مجرد اختيار قطعة جميلة.
              </p>
            </div>

          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-secondary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal className="mb-8 sm:mb-10">
            <p className="mb-2 font-accent text-lg text-primary-700">
              جذور الرحلة وآفاقها
            </p>
            <h2 className="font-display text-3xl text-secondary sm:text-4xl md:text-5xl">
              مصر موطنه، والعالم مصدر إلهامه
            </h2>
            <p className="mt-3 max-w-2xl font-body text-sm leading-7 text-neutral-500">
              يقيم إسلام في مصر، وقادته رحلته وشغفه بالأحجار الكريمة إلى
              سريلانكا والهند.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-2">
            <ScrollReveal className="h-full">
              <article className="group relative flex h-full min-h-64 flex-col justify-between overflow-hidden border border-secondary/10 bg-secondary p-6 text-white transition-colors duration-300 hover:border-primary-500/60 sm:p-8 lg:min-h-80">
                <div className="pointer-events-none absolute -end-10 -top-14 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex border border-primary-300/40 px-3 py-1 font-body text-xs text-primary-200">
                      مقر الإقامة
                    </span>
                    <h3 className="mt-5 font-display text-3xl sm:text-4xl">
                      مصر
                    </h3>
                    <p className="mt-2 max-w-xs font-body text-sm leading-7 text-white/70">
                      موطن إسلام ومقر انطلاق رحلته في عالم الأحجار الكريمة.
                    </p>
                  </div>
                  <span className="font-accent text-4xl text-primary-300/70">
                    ٠١
                  </span>
                </div>
                <div className="relative mt-5 flex h-36 items-center justify-center sm:h-44">
                  <Image
                    src="/Egypt.png"
                    alt="خريطة مصر، مقر إقامة إسلام"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {travelDestinations.map((country, index) => (
                <ScrollReveal key={country.name} delay={(index + 1) * 100}>
                  <article className="group flex min-h-52 items-center gap-4 border border-secondary/10 bg-white/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/45 hover:shadow-[0_16px_38px_rgba(31,42,68,0.08)] sm:min-h-0 sm:flex-col sm:items-stretch sm:p-5 lg:min-h-36 lg:flex-row lg:items-center lg:gap-6">
                    <div className="relative h-28 w-28 shrink-0 sm:h-36 sm:w-full lg:h-28 lg:w-36">
                      <div className="absolute inset-0 bg-primary-500/[0.06]" />
                      <Image
                        src={country.image}
                        alt={`خريطة ${country.name}`}
                        fill
                        sizes="(max-width: 640px) 112px, (max-width: 1024px) 40vw, 144px"
                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="font-body text-xs text-primary-700">
                        وجهة زارها
                      </span>
                      <h3 className="mt-1 font-display text-2xl text-secondary">
                        {country.name}
                      </h3>
                      <p className="mt-1 font-body text-xs leading-6 text-neutral-500">
                        محطة استكشاف ألهمت رحلته مع الأحجار.
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal className="mb-10 text-center">
            <p className="mb-2 font-accent text-lg text-primary-700">
              ما نؤمن به
            </p>
            <h2 className="font-display text-3xl text-secondary sm:text-4xl">
              تفاصيل تصنع الفرق
            </h2>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <ScrollReveal key={value.number} delay={index * 100}>
                <article className="h-full border border-secondary/10 p-6 transition-colors duration-300 hover:border-primary-500/50 sm:p-8">
                  <span className="font-accent text-sm text-primary-700">
                    {value.number}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-secondary">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-7 text-neutral-500">
                    {value.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-secondary px-7 py-3 font-body text-sm text-secondary transition-colors duration-300 hover:border-primary-600 hover:bg-primary-600 hover:text-white"
            >
              تواصل معنا
              <span aria-hidden="true">←</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
