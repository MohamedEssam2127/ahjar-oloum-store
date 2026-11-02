export type GemstoneSpec = {
  label: string;
  value: string;
};

export type Gemstone = {
  id: string;
  slug: string;
  name: string;
  title: string;
  price: number;
  currency: string;
  inStock: boolean;
  weight: string;
  description: string;
  images: string[];
  accent: string;
  specs: GemstoneSpec[];
};

/** Catalog image assets — polished studio shots on black */
export const gemstoneImages = [
  {
    id: "sapphire",
    src: "/polished-sapphire.png",
    alt: "زفير ازرق",
  },
  {
    id: "emerald",
    src: "/polished-emerald-gem.png",
    alt: "زمرد مصقول",
  },
  {
    id: "ruby",
    src: "/polished-ruby.png",
    alt: "ياقوت أحمر مصقول",
  },
  {
    id: "aquamarine",
    src: "/aquamarine-gem.png",
    alt: "زبرجد مصقول",
  },
  {
    id: "amethyst",
    src: "/Amethyst.png",
    alt: "اماتيست مصقول",
  },
  {
    id: "amber",
    src: "/polished-amber-gems.png",
    alt: "كهرمان مصقول",
  },
  {
    id: "peridot",
    src: "/polished-peridot.png",
    alt: "زبرجد زيتوني مصقول",
  },
] as const;

export type GemstoneImageId = (typeof gemstoneImages)[number]["id"];

export function getGemImage(id: GemstoneImageId): string {
  const found = gemstoneImages.find((img) => img.id === id);
  return found?.src ?? gemstoneImages[0].src;
}

export const gemstones: Gemstone[] = [
  {
    id: "1",
    slug: "sapphire-2-05-no-heat",
    name: "زفير أزرق",
    title: "زفير أزرق طبيعي ٢٫٠٥ قيراط بدون معالجة حرارية",
    price: 294241,
    currency: "ج.م",
    inStock: true,
    weight: "٢٫٠٥ قيراط",
    description:
      "ياقوت أزرق نادر بقصّة بيضاوية متقنة، بلون ملكي عميق ولمعان استثنائي. حجر طبيعي دون معالجة حرارية، مثالي لقطعة وراثية تدوم عبر الأجيال.",
    images: [getGemImage("sapphire"), getGemImage("sapphire")],
    accent: "#1F4E8C",
    specs: [
      { label: "الحجر", value: "زفير أزرق (Sapphire)" },
      { label: "المنشأ", value: "غير محدد" },
      { label: "الوزن", value: "٢٫٠٥ قيراط" },
      { label: "الشكل", value: "بيضاوي – بريليانت" },
      { label: "الأبعاد", value: "٧٫٧٧ × ٥٫٧١ × ٤٫٨١ مم" },
      { label: "اللون", value: "أزرق ملكي" },
      { label: "درجة القصّ", value: "جيد جداً" },
      { label: "النقاء", value: "نظيف بالعين (بدون شوائب مرئية)" },
      { label: "المعالجة", value: "بدون" },
      { label: "تقرير المختبر", value: "غير معتمد" },
    ],
  },
  {
    id: "2",
    slug: "emerald-3-12-colombian",
    name: "زمرد",
    title: "زمرد كولومبي ٣٫١٢ قيراط",
    price: 412500,
    currency: "ج.م",
    inStock: true,
    weight: "٣٫١٢ قيراط",
    description:
      "زمرد كولومبي بقصّة مربعة كلاسيكية، بلون أخضر زاهي وعمق بصري نادر. حجر فاخر لعشّاق الألوان الطبيعية الأصيلة.",
    images: [getGemImage("emerald"), getGemImage("emerald")],
    accent: "#0F5C4C",
    specs: [
      { label: "الحجر", value: "زمرد (Emerald)" },
      { label: "المنشأ", value: "كولومبيا" },
      { label: "الوزن", value: "٣٫١٢ قيراط" },
      { label: "الشكل", value: "مربّع – زمردي" },
      { label: "الأبعاد", value: "٩٫١٠ × ٨٫٩٥ × ٦٫٢٠ مم" },
      { label: "اللون", value: "أخضر زاهي" },
      { label: "درجة القصّ", value: "ممتاز" },
      { label: "النقاء", value: "شوائب طفيفة مقبولة" },
      { label: "المعالجة", value: "زيت طفيف" },
      { label: "تقرير المختبر", value: "GIA" },
    ],
  },
  {
    id: "3",
    slug: "ruby-1-85-burmese",
    name: "ياقوت أحمر",
    title: "ياقوت أحمر بورمي ١٫٨٥ قيراط",
    price: 368900,
    currency: "ج.م",
    inStock: true,
    weight: "١٫٨٥ قيراط",
    description:
      "ياقوت أحمر بورمي بلون دم الحمام الكلاسيكي، بقصّة كوشن متقنة ولمعان داخلي غني يعكس أصالة المنشأ.",
    images: [getGemImage("ruby"), getGemImage("ruby")],
    accent: "#8B1E3F",
    specs: [
      { label: "الحجر", value: "ياقوت أحمر (Ruby)" },
      { label: "المنشأ", value: "بورما (ميانمار)" },
      { label: "الوزن", value: "١٫٨٥ قيراط" },
      { label: "الشكل", value: "كوشن" },
      { label: "الأبعاد", value: "٧٫٢٠ × ٥٫٤٠ × ٣٫٩٠ مم" },
      { label: "اللون", value: "أحمر دم الحمام" },
      { label: "درجة القصّ", value: "جيد جداً" },
      { label: "النقاء", value: "نظيف بالعين" },
      { label: "المعالجة", value: "بدون" },
      { label: "تقرير المختبر", value: "SSEF" },
    ],
  },
  {
    id: "4",
    slug: "aquamarine-4-50",
    name: "اكوامارين",
    title: "زبرجد طبيعي ٤٫٥٠ قيراط",
    price: 87500,
    currency: "ج.م",
    inStock: true,
    weight: "٤٫٥٠ قيراط",
    description:
      "زبرجد بلون بحر صافٍ وقصّة مستطيلة أنيقة، يجمع بين الشفافية العالية والهدوء البصري لقطعة يومية فاخرة.",
    images: [getGemImage("aquamarine"), getGemImage("aquamarine")],
    accent: "#3A7CA5",
    specs: [
      { label: "الحجر", value: "زبرجد (Aquamarine)" },
      { label: "المنشأ", value: "البرازيل" },
      { label: "الوزن", value: "٤٫٥٠ قيراط" },
      { label: "الشكل", value: "مستطيل – زمردي" },
      { label: "الأبعاد", value: "١٢٫٠ × ٨٫٥ × ٥٫٨ مم" },
      { label: "اللون", value: "أزرق سماوي" },
      { label: "درجة القصّ", value: "ممتاز" },
      { label: "النقاء", value: "نظيف بالعين" },
      { label: "المعالجة", value: "بدون" },
      { label: "تقرير المختبر", value: "غير معتمد" },
    ],
  },
  {
    id: "5",
    slug: "amethyst-3-80",
    name: "اماتيست",
    title: "اماتيست طبيعي ٣٫٨٠ قيراط",
    price: 42800,
    currency: "ج.م",
    inStock: true,
    weight: "٣٫٨٠ قيراط",
    description:
      "جمشت بقصّة كوشن أنيقة، بلون بنفسجي عميق يتدرّج مع الضوء. حجر يوازن بين الرقيّ والدفء البصري.",
    images: [getGemImage("amethyst"), getGemImage("amethyst")],
    accent: "#6B3FA0",
    specs: [
      { label: "الحجر", value: "جمشت (Amethyst)" },
      { label: "المنشأ", value: "البرازيل" },
      { label: "الوزن", value: "٣٫٨٠ قيراط" },
      { label: "الشكل", value: "كوشن" },
      { label: "الأبعاد", value: "٩٫٥٠ × ٩٫٢٠ × ٦٫١٠ مم" },
      { label: "اللون", value: "بنفسجي عميق" },
      { label: "درجة القصّ", value: "ممتاز" },
      { label: "النقاء", value: "نظيف بالعين" },
      { label: "المعالجة", value: "بدون" },
      { label: "تقرير المختبر", value: "غير معتمد" },
    ],
  },
  {
    id: "6",
    slug: "amber-collection",
    name: "كهرمان",
    title: "تشكيلة كهرمان مصقول",
    price: 35600,
    currency: "ج.م",
    inStock: true,
    weight: "متنوع",
    description:
      "قطع كهرمان مصقولة بلون عسلي دافئ، تحمل دفء الزمن ولمعاناً ناعماً يليق بمجموعات الطبيعة الفاخرة.",
    images: [getGemImage("amber"), getGemImage("amber")],
    accent: "#C6A75E",
    specs: [
      { label: "الحجر", value: "كهرمان (Amber)" },
      { label: "المنشأ", value: "بحر البلطيق" },
      { label: "الوزن", value: "متنوع" },
      { label: "الشكل", value: "كابوشون / حر" },
      { label: "الأبعاد", value: "متنوعة" },
      { label: "اللون", value: "عسلي ذهبي" },
      { label: "درجة القصّ", value: "جيد جداً" },
      { label: "النقاء", value: "شفاف إلى شبه شفاف" },
      { label: "المعالجة", value: "مصقول" },
      { label: "تقرير المختبر", value: "غير معتمد" },
    ],
  },
  {
    id: "7",
    slug: "peridot-2-90",
    name: "زبرجد زيتوني",
    title: "زبرجد زيتوني ٢٫٩٠ قيراط",
    price: 51200,
    currency: "ج.م",
    inStock: true,
    weight: "٢٫٩٠ قيراط",
    description:
      "زبرجد زيتوني بلون أخضر ليموني نضر، بقصّة بيضاوية تُبرز بريقه الحيوي وإحساسه بالطاقة الطبيعية.",
    images: [getGemImage("peridot"), getGemImage("peridot")],
    accent: "#6B8E23",
    specs: [
      { label: "الحجر", value: "زبرجد زيتوني (Peridot)" },
      { label: "المنشأ", value: "باكستان" },
      { label: "الوزن", value: "٢٫٩٠ قيراط" },
      { label: "الشكل", value: "بيضاوي" },
      { label: "الأبعاد", value: "٩٫٢٠ × ٧٫١٠ × ٤٫٨٠ مم" },
      { label: "اللون", value: "أخضر ليموني" },
      { label: "درجة القصّ", value: "جيد جداً" },
      { label: "النقاء", value: "نظيف بالعين" },
      { label: "المعالجة", value: "بدون" },
      { label: "تقرير المختبر", value: "غير معتمد" },
    ],
  },
];

export function getGemstoneBySlug(slug: string): Gemstone | undefined {
  return gemstones.find((g) => g.slug === slug);
}

function normalizeSearchText(value: string): string {
  return value
    .toLocaleLowerCase("ar")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي");
}

export function searchGemstones(query: string): Gemstone[] {
  const normalizedQuery = normalizeSearchText(query.trim());
  if (!normalizedQuery) return gemstones;

  return gemstones.filter((gemstone) => {
    const searchableText = normalizeSearchText(
      [
        gemstone.name,
        gemstone.title,
        gemstone.description,
        gemstone.weight,
        ...gemstone.specs.flatMap((spec) => [spec.label, spec.value]),
      ].join(" "),
    );
    return searchableText.includes(normalizedQuery);
  });
}

export function formatPrice(amount: number, currency = "ج.م"): string {
  return `${currency} ${amount.toLocaleString("ar-EG")}`;
}
