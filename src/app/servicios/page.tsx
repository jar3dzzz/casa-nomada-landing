import type { Metadata } from "next";
import Servicios from "@/components/sections/Servicios";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Servicios | Casa Nómada",
  description:
    "Estrategia, Creación de Contenido, Branding y Desarrollo Web. Construimos ecosistemas de marca premium.",
};

export default function ServiciosPage() {
  return (
    <>
      <Servicios />
      <Footer theme="light" />
    </>
  );
}
