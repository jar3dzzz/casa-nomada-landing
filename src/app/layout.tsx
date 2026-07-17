import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/Providers";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ely la publicista | Estrategias de Marketing Digital",
  description:
    "Estratega de marketing digital ayudando a negocios a crecer con publicidad y contenido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-slate-700 min-h-screen relative selection:bg-teal-200 selection:text-teal-900">
        <Providers>
          <ScrollToTop />
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}