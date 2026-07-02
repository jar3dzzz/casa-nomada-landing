"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonios() {
  return (
    <AnimatedTestimonials
      title="No lo decimos solo nostros, también nuestros clientes"
      subtitle="La confianza de nuestros clientes es el mejor reflejo del impacto de nuestro trabajo."
      badgeText={undefined}
      trustedCompanies={[]}
      testimonials={[
        {
          id: 1,
          name: "María Fernández",
          role: "Fundadora",
          company: "Restaurante Origen",
          content:
            "Casa Nómada entendió perfectamente la visión de nuestro restaurante. Lograron traducir conceptos abstractos en una identidad visual que nuestros clientes adoran.",
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
          content: "La creatividad de Casa Nómada es de otro nivel. No solo rediseñaron nuestra identidad, sino que crearon un ecosistema digital que duplicó nuestros leads en el primer trimestre.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
          id: 4,
          name: "Diego Martínez",
          role: "Fundador",
          company: "Café de Especialidad Tostado",
          content: "Trabajar con ellos fue la mejor decisión para nuestro lanzamiento. Su atención al detalle estético y su capacidad para contar historias hicieron que nuestra marca resonara instantáneamente con la comunidad.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        }
      ]}
    />
  );
}
