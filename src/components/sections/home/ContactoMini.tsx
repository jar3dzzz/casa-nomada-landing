"use client";

import { ArrowRight } from "lucide-react";
import { m } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ContactoMini() {
  return (
    <section className="py-28 lg:py-40 relative overflow-hidden bg-white">
      {/* Massive Ambient Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Geometric decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <m.div 
          className="absolute top-[10%] right-[10%] w-[250px] h-[250px] rounded-full border border-green-200/40"
          style={{ willChange: "transform" }}
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <m.div 
          className="absolute bottom-[10%] left-[5%] w-[180px] h-[180px] rounded-full border border-green-200/40"
          style={{ willChange: "transform" }}
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          <m.div
            variants={fadeUpVariants}
            className="relative"
          >
            {/* Glassmorphism Card */}
            <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-900/5 border border-slate-200/50 relative overflow-hidden z-10 group">
              {/* Inner shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <h2 className="font-bricolage font-extrabold text-4xl md:text-5xl lg:text-6xl text-green-950 tracking-tight mb-6 text-center">
                  Iniciemos la conversación
                </h2>
                <p className="text-green-800 text-center mb-12 max-w-xl mx-auto text-lg md:text-xl">
                  El primer paso hacia una identidad extraordinaria comienza con
                  un simple mensaje.
                </p>

                <form
                  className="flex flex-col gap-8 max-w-2xl mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="text"
                        aria-label="Nombre completo"
                        placeholder="Nombre completo"
                        className="w-full bg-transparent border-b border-green-300 py-4 text-green-950 placeholder:text-green-700/50 focus:outline-none focus:border-green-950 transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        aria-label="Correo electrónico"
                        placeholder="Correo electrónico"
                        className="w-full bg-transparent border-b border-green-300 py-4 text-green-950 placeholder:text-green-700/50 focus:outline-none focus:border-green-950 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      rows={3}
                      aria-label="Cuéntanos un poco sobre tu proyecto"
                      placeholder="Cuéntanos un poco sobre tu proyecto..."
                      className="w-full bg-transparent border-b border-green-300 py-4 text-green-950 placeholder:text-green-700/50 focus:outline-none focus:border-green-950 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 bg-green-950 text-white px-10 py-5 rounded-full font-medium hover:bg-green-900 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-950/20 transition-all duration-300 group/btn w-full sm:w-auto text-lg"
                    >
                      Enviar propuesta
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
