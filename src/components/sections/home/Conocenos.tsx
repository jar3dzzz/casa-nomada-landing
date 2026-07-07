"use client";

import Image from "next/image";
import { m, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    }
  },
};

export default function Conocenos() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Moved variants outside component

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-white py-28 lg:py-40 border-t border-slate-100">
      
      {/* Fine dividing line top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Side Rotated Text (EST. 2024) */}
      <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 -rotate-90 hidden md:block origin-center opacity-40">
        <span className="text-xs font-semibold tracking-[0.4em] text-slate-500 uppercase">
          EST. 2024
        </span>
      </div>
      
      <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 rotate-90 hidden md:block origin-center opacity-40">
        <span className="text-xs font-semibold tracking-[0.4em] text-slate-500 uppercase">
          CASA NÓMADA
        </span>
      </div>

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      {/* Floating Geometric Elements (Nested rotating circles) */}
      <m.div
        className="absolute top-20 right-10 lg:right-32 w-64 h-64 rounded-full border border-slate-200/60 -z-10 pointer-events-none flex items-center justify-center"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-48 h-48 rounded-full border border-slate-200/40" />
      </m.div>

      <m.div
        className="absolute bottom-20 left-10 lg:left-32 w-40 h-40 rounded-full border border-slate-200/50 -z-10 pointer-events-none"
        style={{ willChange: "transform" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Column */}
          <m.div 
            className="flex flex-col justify-center order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="overflow-hidden mb-8">
              <m.h2 
                variants={textRevealVariants}
                className="font-bricolage font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight"
              >
                Nuestra Filosofía
              </m.h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden">
                <m.p variants={textRevealVariants} className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  En Casa Nómada, creemos que el éxito de una marca no se mide solo en métricas o likes, sino en su capacidad para generar conversaciones genuinas y conexiones memorables con su audiencia.
                </m.p>
              </div>
              <div className="overflow-hidden">
                <m.p variants={textRevealVariants} className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  Nos alejamos de las fórmulas genéricas. Combinamos análisis estratégico con dirección de arte premium para crear ecosistemas digitales vivos, donde cada elemento cuenta una historia cohesiva.
                </m.p>
              </div>
              <div className="overflow-hidden">
                <m.p variants={textRevealVariants} className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  Nuestra misión es elevar tu presencia en línea a través de narrativas visuales exquisitas y estrategias de crecimiento que no comprometen la estética ni el prestigio de tu marca.
                </m.p>
              </div>
            </div>
          </m.div>

          {/* Visual Column (Parallax) */}
          <m.div 
            className="relative order-1 lg:order-2 w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative Frame Behind */}
            <div className="absolute -inset-4 bg-slate-50/80 border border-slate-200/60 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4 shadow-sm" />
            
            {/* Main Image with inner parallax scale */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-black/5">
              <m.div style={{ y: yImage, scale: 1.15 }} className="absolute inset-0 w-full h-full">
                <Image
                  src="/ola.jpg"
                  alt="Casa Nómada Filosofía"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </m.div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
