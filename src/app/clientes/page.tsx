import type { Metadata } from "next";
import Clientes from "@/components/sections/Clientes";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Clientes | Casa Nómada",
  description:
    "Casos de éxito y proyectos destacados de Casa Nómada — branding, estrategia digital y contenido premium.",
};

export default function ClientesPage() {
  return (
    <>
      <Clientes />
      <Footer />
    </>
  );
}
