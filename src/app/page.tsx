import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Conocenos from "@/components/sections/home/Conocenos";
import { Footer } from "@/components/layout/Footer";

const QueHacemos = dynamic(() => import("@/components/sections/home/QueHacemos"), { ssr: true });
const Impacto = dynamic(() => import("@/components/sections/home/Impacto"), { ssr: true });
const CasosPreview = dynamic(() => import("@/components/sections/home/CasosPreview"), { ssr: true });
const Testimonios = dynamic(() => import("@/components/sections/home/Testimonios"), { ssr: true });
const ContactoMini = dynamic(() => import("@/components/sections/home/ContactoMini"), { ssr: true });

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-stone-50">
      <Hero />
      <Conocenos />
      <QueHacemos />
      <CasosPreview />
      <Impacto />
      <Testimonios />
      <ContactoMini />
      <Footer />
    </div>
  );
}
