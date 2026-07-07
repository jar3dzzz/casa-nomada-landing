import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import CollaboratorsSlider from "@/components/sections/home/CollaboratorsSlider";
import Conocenos from "@/components/sections/home/Conocenos";
import { Footer } from "@/components/layout/Footer";

const QueHacemos = dynamic(() => import("@/components/sections/home/QueHacemos"), { ssr: true });
const Impacto = dynamic(() => import("@/components/sections/home/Impacto"), { ssr: true });
const CasosPreview = dynamic(() => import("@/components/sections/home/CasosPreview"), { ssr: true });
const Testimonios = dynamic(() => import("@/components/sections/home/Testimonios"), { ssr: true });
const ContactoMini = dynamic(() => import("@/components/sections/home/ContactoMini"), { ssr: true });

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Conocenos />
      <section className="w-full bg-white flex flex-col items-center">
        <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 text-center mb-8 font-medium">
          Marcas que confían en nosotros
        </h3>
        <CollaboratorsSlider />
      </section>
      <QueHacemos />
      <Impacto />
      <CasosPreview />
      <Testimonios />
      <ContactoMini />
      <Footer theme="light" />
    </div>
  );
}
