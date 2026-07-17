"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonios() {
  return (
    <AnimatedTestimonials
      title="No lo digo solo yo, también mis clientes"
      subtitle="La confianza de mis clientes es el mejor reflejo del impacto de mi trabajo."
      badgeText={undefined}
      trustedCompanies={[]}
      testimonials={[
        {
          id: 1,
          name: "María Fernández",
          role: "Fundadora",
          company: "Restaurante Origen",
          content:
            "Ely entendió perfectamente la visión de nuestro restaurante. Logró traducir conceptos abstractos en una identidad visual que nuestros clientes adoran.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          id: 2,
          name: "Carlos Rebolledo",
          role: "Director General",
          company: "Hotel Boutique Alba",
          content:
            "Su enfoque estratégico nos permitió posicionar nuestro hotel en un mercado altamente competitivo. El nivel de detalle y profesionalismo es incomparable.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        },
        {
          id: 3,
          name: "Ana Sofía Garza",
          role: "Directora de Marketing",
          company: "Grupo Inmobiliario Nube",
          content: "La creatividad de Ely es de otro nivel. No solo rediseñó nuestra identidad, sino que creó un ecosistema digital que duplicó nuestros leads en el primer trimestre.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
          id: 4,
          name: "Diego Martínez",
          role: "Fundador",
          company: "Café de Especialidad Tostado",
          content: "Trabajar con ella fue la mejor decisión para nuestro lanzamiento. Su atención al detalle estético y su capacidad para contar historias hicieron que nuestra marca resonara instantáneamente con la comunidad.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        }
      ]}
    />
  );
}
