import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { DecorativeShapes } from "@/components/ui/DecorativeShapes";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Nómada | Creatividad de Alto Impacto",
  description:
    "Casa Nómada es una célula creativa en Villahermosa y Monterrey, estructurando marcas de hospitalidad y comercio premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bricolageGrotesque.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#F4F1ED] text-slate-900 min-h-screen relative">
        <DecorativeShapes />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}