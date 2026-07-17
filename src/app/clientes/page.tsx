import type { Metadata } from "next";
import Clientes from "@/components/sections/Clientes";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Clientes | Ely la publicista",
  description:
    "Casos de éxito y proyectos destacados — branding, estrategia digital y contenido premium.",
};

export default function ClientesPage() {
  return (
    <>
      <Clientes />
      <Footer />
    </>
  );
}
