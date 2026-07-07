"use client";

import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { LazyVideo } from "@/components/ui/lazy-video";
import { ArrowRight, Code, PenTool, Lightbulb, Camera, TrendingUp } from "lucide-react";

// Dummy Data para los Servicios
const SERVICIOS_DATA = [
  {
    id: "estrategia",
    title: "Estrategia",
    icon: Lightbulb,
    heroImage: "/ola.jpg",
    detailImage: "/ola.jpg",
    description: "Analizamos tu mercado, competencia y audiencia para definir un rumbo claro. No damos pasos a ciegas; construimos los cimientos para que tu marca se posicione como un referente premium.",
    process: [
      { step: "1. Descubrimiento", desc: "Auditoría profunda de tu marca y mercado." },
      { step: "2. Planificación", desc: "Definición de objetivos, KPIs y rutas de acción." },
      { step: "3. Ejecución", desc: "Implementación estratégica guiada por data." }
    ],
    deliverables: ["Brand Compass", "Estudio de Mercado", "Roadmap Estratégico", "Definición de Arquetipos"]
  },
  {
    id: "contenido",
    title: "Creación de Contenido",
    icon: Camera,
    heroImage: "/work-media/work-2.jpg",
    detailImage: "/work-media/work-8.mp4",
    detailMediaType: "video" as const,
    description: "Producimos narrativas visuales exquisitas que capturan la esencia de tu marca. Desde fotografía editorial hasta video de alto impacto, creamos assets que inspiran y convierten.",
    process: [
      { step: "1. Pre-Producción", desc: "Moodboards, guiones y dirección de arte." },
      { step: "2. Producción", desc: "Shooting con equipo de nivel cinematográfico." },
      { step: "3. Post-Producción", desc: "Edición, color grading y diseño sonoro." }
    ],
    deliverables: ["Fotografía Comercial", "Video Reels", "Campaña Publicitaria", "Dirección de Arte"]
  },
  {
    id: "ads",
    title: "Campañas de Ads",
    icon: TrendingUp,
    heroImage: "/work-media/work-1.jpg",
    detailImage: "/work-media/work-1.jpg",
    description: "Gestión y optimización de campañas publicitarias en Meta, Google y TikTok. Maximiza tu retorno de inversión con estrategias data-driven enfocadas en resultados medibles.",
    process: [
      { step: "1. Estructura", desc: "Diseño del funnel de ventas y segmentación de audiencias." },
      { step: "2. Lanzamiento", desc: "Configuración técnica y despliegue de los anuncios." },
      { step: "3. Optimización", desc: "Monitoreo diario, pruebas A/B y escalado del presupuesto." }
    ],
    deliverables: ["Meta Ads", "Google Ads", "Reportes de Rendimiento", "Setup de Píxeles"]
  },
  {
    id: "desarrollo",
    title: "Desarrollo Web",
    icon: Code,
    heroImage: "/work-media/services.png",
    detailImage: "/work-media/work-4.jpg",
    description: "Diseñamos y desarrollamos arquitecturas modernas, ultra rápidas y escalables. Construimos experiencias digitales inmersivas utilizando React, Next.js, TypeScript y Tailwind CSS, respaldadas por un backend robusto en Node.js.",
    process: [
      { step: "1. UX / UI Design", desc: "Wireframes y diseño de interfaces premium." },
      { step: "2. Desarrollo", desc: "Código limpio, tipado y optimizado para SEO." },
      { step: "3. Lanzamiento", desc: "Testing, despliegue y monitoreo de performance." }
    ],
    deliverables: ["Frontend en Next.js/React", "Backend en Node.js", "Animaciones Framer Motion", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "branding",
    title: "Branding",
    icon: PenTool,
    heroImage: "/cases/unilabor.jpg",
    detailImage: "/cases/unilabor.jpg",
    description: "Dotamos a tu negocio de una identidad visual y verbal inconfundible. Diseñamos logotipos, paletas tipográficas y manuales de identidad que proyectan lujo, profesionalismo y autenticidad.",
    process: [
      { step: "1. Conceptualización", desc: "Búsqueda del ADN visual de la marca." },
      { step: "2. Diseño Visual", desc: "Creación de logotipos, tipografía y color." },
      { step: "3. Sistematización", desc: "Desarrollo del Brand Book y aplicaciones." }
    ],
    deliverables: ["Manual de Identidad", "Diseño de Logotipo", "Papelería Corporativa", "Guía de Estilo Visual"]
  }
];

export default function Servicios() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const navbarOffset = 100; // offset for the sticky navbar and some breathing room
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full bg-[#F4F1ED]">
      
      {/* 1. HERO INTERACTIVO (Brutalista-Elegante) */}
      <section className="relative min-h-screen w-full pt-32 pb-16 lg:pt-40 lg:pb-16 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-12 lg:gap-8 items-center">
            
            {/* Columna Izquierda: Lista de Servicios */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center h-full pt-12 lg:pt-0">
              <h1 className="font-bricolage font-extrabold text-7xl lg:text-[7rem] tracking-tighter text-slate-900 mb-12 leading-none">
                Servicios.
              </h1>
              
              <ul className="flex flex-col gap-6 mb-16 relative z-20">
                {SERVICIOS_DATA.map((service, index) => (
                  <li 
                    key={service.id}
                    onMouseEnter={() => setActiveServiceIndex(index)}
                    onClick={() => scrollToService(service.id)}
                    className="group flex items-center cursor-pointer"
                  >
                    <span className={`text-4xl lg:text-5xl font-bricolage font-bold tracking-tight transition-all duration-300 ${
                      activeServiceIndex === index ? "text-slate-900 translate-x-4" : "text-slate-400 group-hover:text-slate-600"
                    }`}>
                      {service.title}
                    </span>
                    <ArrowRight 
                      className={`ml-6 w-8 h-8 transition-all duration-300 ${
                        activeServiceIndex === index ? "opacity-100 text-slate-900 translate-x-0" : "opacity-0 -translate-x-4"
                      }`} 
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-l-2 border-slate-300 pl-6 hidden lg:block">
                <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase block mb-2">
                  NUESTRO ENFOQUE
                </span>
                <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
                  No vendemos entregables; construimos ecosistemas de marca. Cada disciplina técnica en nuestro arsenal está enfocada en un solo objetivo: posicionar tu negocio en lo más alto de su industria.
                </p>
              </div>
            </div>

            {/* Columna Derecha: Imagen Dinámica (Crossfade) */}
            <div className="col-span-1 lg:col-span-7 h-[50vh] lg:h-[70vh] max-h-[800px] relative w-full rounded-3xl overflow-hidden shadow-2xl bg-stone-200">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeServiceIndex}
                  style={{ willChange: "transform, opacity" }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={SERVICIOS_DATA[activeServiceIndex].heroImage}
                    alt={SERVICIOS_DATA[activeServiceIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </m.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. DEEP DIVES (Detalle de cada servicio) */}
      <section className="py-24 lg:py-32 flex flex-col gap-32">
        {SERVICIOS_DATA.map((service, index) => {
          const isImageRight = index % 2 === 0;
          
          return (
            <article 
              key={service.id} 
              id={service.id} 
              className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* Columna de Texto */}
                <div className={`flex flex-col gap-10 ${isImageRight ? "lg:order-1" : "lg:order-2"}`}>
                  <div>
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <h2 className="font-bricolage font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* El Proceso */}
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-slate-900 uppercase border-b border-slate-200 pb-3 mb-6">
                      El Proceso
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {service.process.map((p, i) => (
                        <div key={i} className="flex flex-col gap-2">
                          <span className="font-semibold text-slate-900 text-sm">
                            {p.step}
                          </span>
                          <span className="text-sm text-slate-500 leading-relaxed">
                            {p.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Entregables / Tech Specs */}
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-slate-900 uppercase border-b border-slate-200 pb-3 mb-6">
                      Especificaciones & Entregables
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-white border border-stone-200 rounded-full text-xs font-semibold text-slate-700 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Columna de Imagen */}
                <div className={`w-full h-[400px] md:h-[500px] lg:h-[700px] relative rounded-3xl overflow-hidden shadow-xl ${isImageRight ? "lg:order-2" : "lg:order-1"}`}>

                  {service.detailMediaType === "video" ? (
                    <LazyVideo
                      src={service.detailImage}
                      ariaLabel={`Video de ${service.title}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image 
                      src={service.detailImage}
                      alt={`Detalle de ${service.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>

              </div>
            </article>
          );
        })}
      </section>

    </div>
  );
}
