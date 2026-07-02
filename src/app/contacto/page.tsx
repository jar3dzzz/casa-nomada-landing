import type { Metadata } from "next";
import Contacto from "@/components/sections/Contacto";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contacto | Casa Nómada",
  description:
    "Ponte en contacto con Casa Nómada — hablemos de tu próximo proyecto creativo.",
};

export default function ContactoPage() {
  return (
    <>
      <Contacto />
      <Footer />
    </>
  );
}
