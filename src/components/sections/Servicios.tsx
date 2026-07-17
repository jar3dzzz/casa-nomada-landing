"use client";

import { m } from "framer-motion";
import { ArrowRight, Code, PenTool, Lightbulb, Camera, TrendingUp, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Servicios() {
  return (
    <div className="w-full bg-stone-50">
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="font-nunito font-extrabold text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight tracking-tight">
              Servicios
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-sm text-stone-500">
              No vendo entregables sueltos; construyo sistemas de ventas y narrativas visuales coherentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Estrategia Digital (col-span-2) */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <Link
                href="/contacto"
                className="group block h-full bg-teal-50 text-teal-900 rounded-[2.5rem] p-8 md:p-10 border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[400px] flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-3 flex flex-col gap-6">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Lightbulb className="w-7 h-7" />
                      </div>
                      <h3 className="font-nunito font-bold text-3xl mb-3 tracking-tight">Estrategia Digital</h3>
                      <p className="font-medium text-stone-600 leading-relaxed text-base opacity-90">
                        Construyo los cimientos estratégicos para que tu marca se posicione y conecte con su audiencia ideal, diferenciándose del ruido del mercado.
                      </p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-teal-800">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>Auditoría de Marca</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>Buyer Persona</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>Roadmap Canales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>Estrategia SEO</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="md:col-span-2 relative w-full aspect-[4/3] md:aspect-square h-full min-h-[200px] rounded-3xl overflow-hidden shadow-inner bg-teal-100/50">
                    <Image
                      src="/work-media/work-1.webp"
                      alt="Estrategia Digital"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white text-teal-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </Link>
            </m.div>

            {/* Card 2: Gestión de Pautas (col-span-1) */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-1"
            >
              <Link
                href="/contacto"
                className="group block h-full bg-rose-50 text-rose-900 rounded-[2.5rem] p-8 md:p-10 border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[400px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <h3 className="font-nunito font-bold text-3xl mb-3 tracking-tight">Gestión de Pautas</h3>
                  <p className="font-medium text-stone-600 leading-relaxed text-base opacity-90 mb-6">
                    Campañas y embudos de ventas optimizados en Meta & Google Ads para atraer clientes de forma recurrente.
                  </p>

                  <ul className="flex flex-col gap-2 text-sm font-semibold text-rose-800">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>Optimización Semanal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>Copys Persuasivos (A/B Test)</span>
                    </li>
                  </ul>
                  
                  <div className="relative w-full h-36 mt-6 rounded-2xl overflow-hidden shadow-inner bg-rose-100/50">
                    <Image
                      src="/work-media/services.png"
                      alt="Pautas Publicitarias"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white text-rose-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </Link>
            </m.div>

            {/* Card 3: Creación de Contenido (col-span-1) */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-1"
            >
              <Link
                href="/contacto"
                className="group block h-full bg-amber-50 text-amber-900 rounded-[2.5rem] p-8 md:p-10 border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[400px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Camera className="w-7 h-7" />
                  </div>
                  <h3 className="font-nunito font-bold text-3xl mb-3 tracking-tight">Contenido</h3>
                  <p className="font-medium text-stone-600 leading-relaxed text-base opacity-90 mb-6">
                    Dirección creativa y producción visual de primer nivel para conectar y fidelizar a tu comunidad digital.
                  </p>

                  <ul className="flex flex-col gap-2 text-sm font-semibold text-amber-800">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Guiones y Dirección Creativa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Edición de Reels & TikToks</span>
                    </li>
                  </ul>
                  
                  <div className="relative w-full h-36 mt-6 rounded-2xl overflow-hidden shadow-inner bg-amber-100/50">
                    <Image
                      src="/work-media/work-6.jpg"
                      alt="Creación de Contenido"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white text-amber-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </Link>
            </m.div>

            {/* Card 4: Páginas Web (col-span-2) */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <Link
                href="/contacto"
                className="group block h-full bg-blue-50 text-blue-900 rounded-[2.5rem] p-8 md:p-10 border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[400px] flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-3 flex flex-col gap-6">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Code className="w-7 h-7" />
                      </div>
                      <h3 className="font-nunito font-bold text-3xl mb-3 tracking-tight">Páginas Web</h3>
                      <p className="font-medium text-stone-600 leading-relaxed text-base opacity-90">
                        Sitios y plataformas web modernas, veloces y optimizadas específicamente para convertir visitantes curiosos en clientes recurrentes.
                      </p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-blue-800">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>Desarrollo Next.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>UX/UI de Conversión</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>SEO Integrado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>Diseño Responsivo</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="md:col-span-2 relative w-full aspect-[4/3] md:aspect-square h-full min-h-[200px] rounded-3xl overflow-hidden shadow-inner bg-blue-100/50">
                    <Image
                      src="/cases/vertex.png"
                      alt="Sitios Web Premium"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </Link>
            </m.div>

            {/* Card 5: Consultoría 1:1 (col-span-1) */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-1"
            >
              <Link
                href="/contacto"
                className="group block h-full bg-indigo-50 text-indigo-900 rounded-[2.5rem] p-8 md:p-10 border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[400px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <PenTool className="w-7 h-7" />
                  </div>
                  <h3 className="font-nunito font-bold text-3xl mb-3 tracking-tight">Consultoría 1:1</h3>
                  <p className="font-medium text-stone-600 leading-relaxed text-base opacity-90 mb-6">
                    Sesiones de enfoque intensivo 1-a-1 para diagnosticar y destrabar cuellos de botella en tus ventas.
                  </p>

                  <ul className="flex flex-col gap-2 text-sm font-semibold text-indigo-800">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <span>Auditoría Previa Completa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <span>Plan de Acción en PDF</span>
                    </li>
                  </ul>
                  
                  <div className="relative w-full h-36 mt-6 rounded-2xl overflow-hidden shadow-inner bg-indigo-100/50">
                    <Image
                      src="/work-media/work-8.png"
                      alt="Consultoría 1 a 1"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </Link>
            </m.div>

            {/* Card 6: CTA Hablemos (col-span-2) */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <Link
                href="/contacto"
                className="group block h-full bg-teal-700 text-white rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[400px] flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center h-full">
                  <div className="md:col-span-3 flex flex-col gap-6 justify-center">
                    <div>
                      <h3 className="font-nunito font-extrabold text-4xl mb-4 tracking-tight leading-tight">
                        ¿Listo para crear algo increíble?
                      </h3>
                      <p className="font-medium text-teal-100 leading-relaxed text-lg">
                        Platiquemos sobre tus objetivos de negocio y diseñemos una propuesta a la medida de tu marca.
                      </p>
                    </div>

                    <div>
                      <span className="inline-flex items-center gap-3 bg-white text-teal-800 px-8 py-3.5 rounded-full font-bold shadow-md group-hover:bg-teal-50 transition-colors">
                        Comenzar Proyecto
                        <ArrowRight className="w-5 h-5 text-teal-700 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 relative w-full aspect-[4/3] md:aspect-square h-full min-h-[220px] rounded-3xl overflow-hidden shadow-md bg-teal-800">
                    <Image
                      src="/work-media/work-5.jpg"
                      alt="Taller Creativo con Ely"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </Link>
            </m.div>

          </div>

        </div>
      </section>
    </div>
  );
}
