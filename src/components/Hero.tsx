import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-112.5 sm:min-h-100 md:min-h-112.5 lg:min-h-125 flex items-center overflow-hidden">
      {/* Background Image — centered on mobile (stone visible), right-positioned on desktop */}
      <Image
        src="/hero2.jpg"
        alt="عالم الأحجار الكريمة - متجر أحجار و علوم"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:object-right"
      />

      {/* Dark overlays for text legibility */}
      <div className="absolute inset-0 bg-neutral-950/45" />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-transparent to-neutral-950/30" />

      {/* Text content — centered on mobile, left-aligned on md+ */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 py-16 sm:py-24 text-center md:text-start space-y-4 sm:space-y-6">
        {/* السطر الأول */}
        <p className="font-lemonada text-sm sm:text-base md:text-lg lg:text-xl text-primary font-semibold tracking-wide">
          لكل حجر حكاية... وللجمال أسرار
        </p>

        {/* السطر الثاني */}
        <h1 className="font-lalezar text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-[1.2] drop-shadow-md max-w-3xl mx-auto md:mx-0">
          اكتشف عالم الأحجار الكريمة
        </h1>

        {/* السطر الثالث */}
        <p className="font-cairo text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 leading-relaxed sm:leading-loose max-w-2xl mx-auto md:mx-0 font-normal drop-shadow-sm">
          من سحر الزمرد والياقوت إلى جمال العقيق والأوبال، اكتشف عالمًا من
          الأحجار الكريمة وتعرّف على تفاصيلها وأسرارها وجمالها الفريد
        </p>
      </div>
    </section>
  );
}
