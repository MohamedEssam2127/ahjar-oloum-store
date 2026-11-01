import type { Metadata } from "next";
import { Cairo, Lalezar, Lemonada } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lalezar = Lalezar({
  subsets: ["arabic", "latin"],
  variable: "--font-lalezar",
  weight: "400",
  display: "swap",
});

const lemonada = Lemonada({
  subsets: ["arabic", "latin"],
  variable: "--font-lemonada",
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${cairo.variable} ${lalezar.variable} ${lemonada.variable}`}
    >
      <body suppressHydrationWarning className="font-cairo antialiased bg-[#FAF9F6] text-[#24211C] min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
