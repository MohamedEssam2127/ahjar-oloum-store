export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-16 max-w-4xl mx-auto space-y-16">
      {/* الخط الأول: كايرو */}
      <section className="space-y-4 border-b border-neutral-200 pb-12">
        <span className="text-xs font-semibold text-neutral-400 block font-cairo">
          الخط الأول: خط كايرو
        </span>
        <h1 className="cairo-title text-neutral-900">
          عنوان رئيسي بخط كايرو - متجر أحجار و علوم
        </h1>
        <h2 className="cairo-subtitle text-secondary">
          عنوان فرعي بخط كايرو - تشكيلة الأحجار الكريمة والمعادن النادرة
        </h2>
        <p className="cairo-regular text-neutral-700">
          نص عادي بخط كايرو: نقدم أندر الأحجار الكريمة الطبيعية المصقولة بأعلى درجات الدقة والمعتمدة دولياً بشهادات فحص موثقة.
        </p>
      </section>

      {/* الخط الثاني: لاليزار */}
      <section className="space-y-4 border-b border-neutral-200 pb-12">
        <span className="text-xs font-semibold text-neutral-400 block font-cairo">
          الخط الثاني: خط لاليزار
        </span>
        <h1 className="lalezar-title text-primary-600">
          عنوان رئيسي بخط لاليزار - متجر أحجار و علوم
        </h1>
        <h2 className="lalezar-subtitle text-secondary">
          عنوان فرعي بخط لاليزار - أصالة التراث وروعة الصنعة اليدوية
        </h2>
        <p className="lalezar-regular text-neutral-700">
          نص عادي بخط لاليزار: قطع فاخرة مخصصة لهواة المجوهرات الملكية والقطع النادرة المصقولة بعناية فائقة.
        </p>
      </section>

      {/* الخط الثالث: ليمونادا */}
      <section className="space-y-4">
        <span className="text-xs font-semibold text-neutral-400 block font-cairo">
          الخط الثالث: خط ليمونادا
        </span>
        <h1 className="lemonada-title text-neutral-900">
          عنوان رئيسي بخط ليمونادا - متجر أحجار و علوم
        </h1>
        <h2 className="lemonada-subtitle text-tertiary">
          عنوان فرعي بخط ليمونادا - بريق وألوان عصرية ساحرة
        </h2>
        <p className="lemonada-regular text-neutral-700">
          نص عادي بخط ليمونادا: تجربة فريدة لاقتناء الأحجار الكريمة بقصات هندسية حديثة ولمعان استثنائي.
        </p>
      </section>
    </main>
  );
}
