"use client";

import { useEffect, useRef } from "react";
import { m, useAnimation, Variants, useInView } from "framer-motion";

interface Metric {
  value: string;
  label: string;
  suffix?: string;
}

const METRICS: Metric[] = [
  { value: "10", suffix: "+", label: "Marcas Transformadas" },
  { value: "5.3", suffix: "M", label: "Alcance Digital" },
  { value: "21", suffix: "K", label: "Interacciones" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1 
    } 
  },
};

export default function Impacto() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-teal-50/60 via-stone-50 to-indigo-50/40 text-stone-800 relative overflow-hidden rounded-t-[3rem]" ref={ref}>
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-teal-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="font-nunito font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-tight text-stone-800">
            Diseño que trasciende. <br/>
            <span className="text-teal-600">Resultados comprobados.</span>
          </h2>
          <p className="font-medium text-lg md:text-xl text-stone-500 leading-relaxed">
            No hacemos proyectos para llenar portafolios; construimos sistemas y estéticas que impulsan el crecimiento.
          </p>
        </m.div>

        <m.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {METRICS.map((metric, idx) => (
            <m.div 
              key={idx} 
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center p-10 lg:p-12 bg-white/70 backdrop-blur-sm rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-md hover:bg-white transition-all duration-500 overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-teal-50/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-nunito font-extrabold text-6xl md:text-7xl lg:text-8xl text-stone-800 tracking-tighter drop-shadow-sm">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="font-nunito font-bold text-3xl md:text-4xl lg:text-5xl text-teal-600">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <span className="font-medium text-sm md:text-base uppercase tracking-[0.2em] text-stone-500 text-center">
                {metric.label}
              </span>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  );
}
