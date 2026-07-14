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
    title: "Estrategia Digital",
    icon: Lightbulb,
    heroImage: "/cases/lumina.png",
    detailImage: "/cases/lumina.png",
    description: "Auditoría, investigación de mercado y roadmap. Construyo los cimientos para que tu marca se posicione y conecte con su audiencia.",
    process: [
      { step: "1. Descubrimiento", desc: "Auditoría profunda de tu marca y mercado." },
      { step: "2. Planificación", desc: "Definición de objetivos, KPIs y rutas de acción." },
      { step: "3. Ejecución", desc: "Implementación estratégica guiada por data." }
    ],
    deliverables: ["Estudio de Mercado", "Roadmap Estratégico", "Análisis de Competencia", "Plan de Acción"]
  },
  {
    id: "pautas",
    title: "Gestión de Pautas",
    icon: TrendingUp,
    heroImage: "/cases/vertex.png",
    detailImage: "/cases/vertex.png",
    description: "Gestión y optimización de campañas publicitarias en Meta y Google Ads. Diseño funnels y segmento audiencias para maximizar tu retorno de inversión.",
    process: [
      { step: "1. Estructura", desc: "Diseño del funnel de ventas y segmentación de audiencias." },
      { step: "2. Lanzamiento", desc: "Configuración técnica y despliegue de los anuncios." },
      { step: "3. Optimización", desc: "Monitoreo diario, pruebas A/B y escalado." }
    ],
    deliverables: ["Campañas en Meta Ads", "Campañas en Google Ads", "Reportes de Rendimiento", "Optimización de Presupuesto"]
  },
  {
    id: "contenido",
    title: "Creación de Contenido",
    icon: Camera,
    heroImage: "/work-media/work-2.webp",
    detailImage: "/ely.mp4",
    detailMediaType: "video" as const,
    description: "Dirección creativa y producción de narrativas visuales. Produzco contenido que captura la esencia de tu marca e inspira a tu audiencia.",
    process: [
      { step: "1. Pre-Producción", desc: "Planeación, guiones y dirección de arte." },
      { step: "2. Producción", desc: "Creación de contenido visual de alta calidad." },
      { step: "3. Edición", desc: "Post-producción y formato para redes sociales." }
    ],
    deliverables: ["Fotografía Comercial", "Video Reels", "Dirección de Arte", "Guiones de Contenido"]
  },
  {
    id: "consultoria",
    title: "Consultoría 1:1",
    icon: PenTool,
    heroImage: "/cases/vertex.png",
    detailImage: "/cases/vertex.png",
    description: "Sesiones estratégicas personalizadas para destrabar el crecimiento de tu negocio. Analizamos tu situación actual y definimos los siguientes pasos tácticos.",
    process: [
      { step: "1. Diagnóstico", desc: "Evaluación inicial de tus retos y objetivos." },
      { step: "2. Sesión Estratégica", desc: "Consultoría intensiva 1 a 1." },
      { step: "3. Plan de Acción", desc: "Entrega de pasos tácticos a implementar." }
    ],
    deliverables: ["Sesión de 60-90 min", "Grabación de la Sesión", "Documento de Diagnóstico", "Plan Táctico Inmediato"]
  },
  {
    id: "web",
    title: "Páginas Web",
    icon: Code,
    heroImage: "/work-media/work-4.jpg",
    detailImage: "/work-media/work-4.jpg",
    description: "Diseño y desarrollo de sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
    process: [
      { step: "1. UX / UI Design", desc: "Wireframes y diseño de interfaces." },
      { step: "2. Desarrollo", desc: "Código optimizado para SEO y velocidad." },
      { step: "3. Lanzamiento", desc: "Testing y despliegue del sitio web." }
    ],
    deliverables: ["Landing Pages", "Sitios Corporativos", "Mantenimiento Web", "Optimización SEO"]
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
                  MI ENFOQUE
                </span>
                <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
                  No vendo entregables sueltos; construyo sistemas de ventas y contenido. Cada táctica en mi arsenal está enfocada en un solo objetivo: posicionar tu negocio y aumentar tus ingresos.
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
