"use client";

import { ArrowRight } from "lucide-react";

export default function ContactoMini() {
  return (
    <section className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
      {/* Soft Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-50 rounded-full blur-3xl opacity-50 -z-10 transform -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="bg-white rounded-[3rem] shadow-xl shadow-stone-200/50 p-8 md:p-16 border border-white">
          <h2 className="font-nunito font-extrabold text-4xl md:text-5xl text-stone-800 tracking-tight mb-4 text-center leading-tight">
            Iniciemos la conversación
          </h2>
          <p className="text-stone-500 font-medium text-center mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            El primer paso hacia una identidad extraordinaria comienza con un simple mensaje.
          </p>

          <form
            className="flex flex-col gap-6 max-w-2xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl p-4 font-medium text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl p-4 font-medium text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Cuéntanos un poco sobre tu proyecto..."
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl p-4 font-medium text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
            />

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-teal-700 text-white px-10 py-4 rounded-full font-medium hover:bg-teal-800 hover:shadow-md transition-all duration-300 group w-full sm:w-auto text-lg hover:-translate-y-0.5"
              >
                Enviar propuesta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
