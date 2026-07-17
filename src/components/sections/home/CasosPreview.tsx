"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LazyVideo } from "@/components/ui/lazy-video";
import { m } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  videoSrc: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  metrics: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "kairos",
    title: "Kairós",
    category: "Estrategia & Contenido",
    description: "Desarrollo de una identidad verbal y visual coherente que aumentó la retención de clientes en un 40%.",
    metrics: ["+40% Retención", "+2M Alcance"],
    videoSrc: "/ely.mp4",
    logoSrc: "/cases/logos/planet-outline.svg",
    logoAlt: "Logo de Kairós",
  },
  {
    id: "nova",
    title: "Nova Apparel",
    category: "Marketing Digital",
    description: "Campaña integral de posicionamiento para una nueva línea de ropa de alto rendimiento, logrando agotar stock en 48 horas.",
    metrics: ["+350% ROAS", "Sold Out 48h"],
    videoSrc: "/ely.mp4",
    logoSrc: "/cases/logos/planet-outline.svg",
    logoAlt: "Logo de Nova",
  },
];

export default function CasosPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-nunito font-extrabold text-4xl md:text-5xl lg:text-6xl text-stone-800 tracking-tight leading-tight">
              Casos de Éxito
            </h2>
            <p className="font-medium text-lg md:text-xl text-stone-500 mt-4 max-w-md">
              Un vistazo a mis colaboraciones recientes. Marcas que confiaron en mi visión.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/clientes"
              className="inline-flex items-center gap-3 bg-stone-100 text-stone-800 px-8 py-4 rounded-full font-bold hover:bg-stone-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              Ver todos los casos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-teal-600" />
            </Link>
          </m.div>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {CASE_STUDIES.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={study.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Visual Side */}
                <m.div 
                  className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Link href={`/clientes#${study.id}`} className="group block relative w-full aspect-[4/3] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-stone-100 shadow-xl shadow-stone-200/40 border-[6px] border-white">
                    <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                    <LazyVideo
                      src={study.videoSrc}
                      ariaLabel={`Video del caso de ${study.title}`}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    />
                    
                    {/* Hover overlay badge */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-white/90 backdrop-blur-sm text-stone-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                        Explorar Caso <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </m.div>

                {/* Text Side */}
                <m.div 
                  className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="inline-flex mb-6">
                    <span className="font-bold uppercase tracking-[0.15em] text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full text-xs">
                      {study.category}
                    </span>
                  </div>
                  
                  <Link href={`/clientes#${study.id}`} className="group inline-block">
                    <h3 className="font-nunito font-extrabold text-4xl lg:text-5xl text-stone-800 mb-6 group-hover:text-teal-700 transition-colors">
                      {study.title}
                    </h3>
                  </Link>
                  
                  <p className="font-medium text-lg lg:text-xl text-stone-600 leading-relaxed mb-8">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="bg-stone-50 border border-stone-100 rounded-2xl px-5 py-3">
                        <span className="font-bold text-stone-800">{metric}</span>
                      </div>
                    ))}
                  </div>
                </m.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
