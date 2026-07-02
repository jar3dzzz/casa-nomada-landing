import Hero from "@/components/sections/Hero";
import CollaboratorsSlider from "@/components/sections/home/CollaboratorsSlider";
import Conocenos from "@/components/sections/home/Conocenos";
import QueHacemos from "@/components/sections/home/QueHacemos";
import Impacto from "@/components/sections/home/Impacto";
import CasosPreview from "@/components/sections/home/CasosPreview";
import Testimonios from "@/components/sections/home/Testimonios";
import ContactoMini from "@/components/sections/home/ContactoMini";
import { Footer } from "@/components/layout/Footer";

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
