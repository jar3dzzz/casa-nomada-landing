"use client";

import { motion } from "framer-motion";

interface Metric {
  value: string;
  label: string;
}

const METRICS: Metric[] = [
  { value: "40+", label: "Marcas Transformadas" },
  { value: "12M+", label: "Alcance Digital" },
  { value: "5", label: "Años de Excelencia" },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Impacto() {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Geometric decorations — light strokes on dark */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full border border-white/5" />
        <div className="absolute bottom-[15%] left-[8%] w-[200px] h-[200px] rounded-full border border-white/5" />
        <div
          className="absolute top-[30%] left-[50%] w-[160px] h-[160px] border border-white/4"
          style={{ transform: "rotate(20deg)" }}
        />
        <div
          className="absolute bottom-[5%] right-[20%] w-[100px] h-[100px] border border-white/4"
          style={{ transform: "rotate(-15deg)" }}
        />
        {/* Thin horizontal accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent origin-left"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUpVariants}>
            <h2 className="font-bricolage font-extrabold text-3xl lg:text-4xl tracking-tight mb-6 leading-tight">
              Diseño que trasciende. <br />
              <span className="text-slate-400">Resultados que perduran.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              No hacemos proyectos para llenar portafolios; construimos sistemas
              y estéticas que impulsan el crecimiento y conectan profundamente
              con tu audiencia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {METRICS.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={fadeUpVariants}
                className="flex flex-col border-l border-white/20 pl-6"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="font-bricolage font-bold text-4xl lg:text-5xl mb-2 text-white"
                >
                  {metric.value}
                </motion.span>
                <span className="text-sm font-medium uppercase tracking-[0.1em] text-slate-400">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
