"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Search, Map, Rocket, BarChart3, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const phases = [
  {
    id: "fase-1",
    title: "Descubrimiento",
    icon: Search,
    color: "bg-teal-100",
    textColor: "text-teal-700",
    activeBg: "bg-teal-50",
    description: "Iniciamos con una inmersión total en tu negocio. Auditamos tus canales actuales, analizamos a tu competencia y definimos el punto de partida exacto para trazar la ruta hacia tus objetivos.",
    deliverables: ["Auditoría 360°", "Análisis de Competencia", "Identificación de Cuellos de Botella"],
    image: "/work-media/work-1.webp"
  },
  {
    id: "fase-2",
    title: "Estrategia",
    icon: Map,
    color: "bg-indigo-100",
    textColor: "text-indigo-700",
    activeBg: "bg-indigo-50",
    description: "Diseñamos un plan de acción a la medida. No usamos plantillas; cada estrategia está documentada con pasos accionables, canales prioritarios y un presupuesto optimizado.",
    deliverables: ["Roadmap Estratégico", "Definición de Buyer Persona", "Estructura de Embudos"],
    image: "/work-media/work-8.png"
  },
  {
    id: "fase-3",
    title: "Ejecución",
    icon: Rocket,
    color: "bg-rose-100",
    textColor: "text-rose-700",
    activeBg: "bg-rose-50",
    description: "Pasamos a la acción. Creamos el contenido, configuramos las campañas publicitarias, diseñamos los flujos de conversión y preparamos todo el ecosistema digital para el lanzamiento.",
    deliverables: ["Producción de Contenido", "Configuración de Campañas", "Diseño UX/UI"],
    image: "/work-media/services.png"
  },
  {
    id: "fase-4",
    title: "Optimización",
    icon: BarChart3,
    color: "bg-amber-100",
    textColor: "text-amber-700",
    activeBg: "bg-amber-50",
    description: "El marketing no termina cuando se lanza; ahí comienza. Monitoreamos los resultados semanalmente, hacemos pruebas A/B y ajustamos tu inversión para maximizar el ROAS.",
    deliverables: ["Reportes Semanales", "Pruebas A/B de Copy", "Escalado de Campañas"],
    image: "/work-media/work-6.jpg"
  }
];

export default function Metodologia() {
  const [activeTab, setActiveTab] = useState(phases[0].id);

  const currentPhase = phases.find((p) => p.id === activeTab) || phases[0];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-stone-100 text-stone-600 font-bold text-sm mb-6 tracking-wide uppercase"
          >
            Metodología Probada
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-nunito font-extrabold text-4xl md:text-5xl text-stone-800 leading-tight mb-6"
          >
            Cómo convertimos el ruido en resultados
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-stone-500 font-medium"
          >
            Un proceso estructurado de 4 fases para escalar tu negocio, reducir la incertidumbre y maximizar tu inversión.
          </m.p>
        </div>

        {/* Liquid Navigation Tabs */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 p-2 bg-stone-50 rounded-[2rem] border border-stone-100 shadow-sm w-full md:w-auto">
            {phases.map((phase) => {
              const isActive = activeTab === phase.id;
              const Icon = phase.icon;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActiveTab(phase.id)}
                  className={`relative flex items-center gap-2.5 px-5 md:px-7 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-colors duration-300 z-10 w-full md:w-auto justify-center md:justify-start ${
                    isActive ? phase.textColor : "text-stone-500 hover:text-stone-700"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  {isActive && (
                    <m.div
                      layoutId="activeTabIndicator"
                      className={`absolute inset-0 rounded-full ${phase.activeBg} shadow-sm border border-stone-200/50`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-20 flex items-center gap-2.5">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="hidden sm:inline">{phase.title}</span>
                    <span className="sm:hidden">{phase.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px] md:min-h-[450px]">
          <AnimatePresence mode="wait">
            <m.div
              key={currentPhase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                
                {/* Text Content */}
                <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
                  <div className={`w-16 h-16 rounded-2xl ${currentPhase.color} ${currentPhase.textColor} flex items-center justify-center mb-8 shadow-sm`}>
                    <currentPhase.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-nunito font-extrabold text-3xl md:text-4xl text-stone-800 mb-6 tracking-tight">
                    {currentPhase.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium mb-10">
                    {currentPhase.description}
                  </p>

                  <div>
                    <h4 className="font-bold text-stone-800 text-lg mb-5 flex items-center gap-2">
                      Entregables Clave
                    </h4>
                    <ul className="space-y-4">
                      {currentPhase.deliverables.map((item, idx) => (
                        <m.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (idx * 0.1) }}
                          className="flex items-center gap-3 font-semibold text-stone-700"
                        >
                          <CheckCircle2 className={`w-5 h-5 ${currentPhase.textColor}`} />
                          {item}
                        </m.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image / Visual */}
                <div className="order-1 lg:order-2 relative w-full h-[300px] sm:h-[400px] lg:h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-sm group">
                  <div className={`absolute inset-0 opacity-20 mix-blend-multiply ${currentPhase.color} z-10 transition-colors duration-500`}></div>
                  <Image
                    src={currentPhase.image}
                    alt={currentPhase.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="glass-panel px-4 py-2 rounded-xl text-sm font-bold shadow-md bg-white/80 backdrop-blur-md text-stone-800 flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentPhase.textColor} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${currentPhase.color} border border-white`}></span>
                      </span>
                      Fase {phases.findIndex(p => p.id === currentPhase.id) + 1}
                    </div>
                  </div>
                </div>

              </div>
            </m.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
