import type { Metadata } from "next";
import Contacto from "@/components/sections/Contacto";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contacto | Ely la publicista",
  description:
    "Ponte en contacto conmigo — hablemos de tu próximo proyecto y cómo impulsar tu negocio.",
};

export default function ContactoPage() {
  return (
    <>
      <Contacto />
      <Footer />
    </>
  );
}
