import type { Metadata } from "next";
import Servicios from "@/components/sections/Servicios";
import Metodologia from "@/components/sections/Metodologia";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Servicios | Ely la publicista",
  description:
    "Estrategia, pautas, contenido y consultoría para marcas de alto valor.",
};

export default function ServiciosPage() {
  return (
    <>
      <Servicios />
      <Metodologia />
      <Footer />
    </>
  );
}
