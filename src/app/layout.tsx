import type { Metadata } from "next";
import { Amiri, Aref_Ruqaa, El_Messiri } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Display — classical Naskh, jewelry-catalog titles */
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
});

/* Accent — calligraphic Ruqaa for short luxury lines */
const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic", "latin"],
  variable: "--font-accent",
  weight: ["400", "700"],
  display: "swap",
});

/* Body / UI — refined modern Arabic */
const elMessiri = El_Messiri({
  subsets: ["arabic", "latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "أحجار و علوم | علم وصياغة الأحجار الكريمة",
  description: "متجر أحجار و علوم للأحجار الكريمة والمعادن النادرة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${arefRuqaa.variable} ${elMessiri.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-body antialiased bg-[#FAF9F6] text-[#24211C] min-h-screen flex flex-col"
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
