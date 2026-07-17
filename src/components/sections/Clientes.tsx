"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LazyVideo } from "@/components/ui/lazy-video";

const MARQUEE_ITEMS = [
  "Kairós", "Lumina Studio", "Nova Apparel", "Vertex Estate", "Ely la publicista",
  "Kairós", "Lumina Studio", "Nova Apparel", "Vertex Estate", "Ely la publicista"
];

const BUSINESSES = [
  {
    id: "kairos",
    name: "Kairós",
    mediaType: "video",
    mediaSrc: "/ely.mp4",
    bgColor: "bg-teal-50",
    textColor: "text-teal-900",
    btnColor: "bg-teal-700 hover:bg-teal-800 text-white",
    copy: "Estrategia integral conectando su propuesta de bienestar con una audiencia premium.",
    metrics: [{ value: "+120%", label: "Reservas" }, { value: "+5M", label: "Seguidores" }],
    colSpan: "lg:col-span-12"
  },
  {
    id: "lumina",
    name: "Lumina Studio",
    mediaType: "image",
    mediaSrc: "/cases/lumina.png",
    bgColor: "bg-stone-100",
    textColor: "text-stone-900",
    btnColor: "bg-stone-800 hover:bg-stone-700 text-white",
    copy: "Multiplicamos su alcance orgánico con campañas visuales.",
    metrics: [{ value: "+300", label: "Leads" }],
    colSpan: "lg:col-span-6"
  },
  {
    id: "nova",
    name: "Nova Apparel",
    mediaType: "video",
    mediaSrc: "/ely.mp4",
    bgColor: "bg-rose-50",
    textColor: "text-rose-900",
    btnColor: "bg-rose-600 hover:bg-rose-700 text-white",
    copy: "Embudo de ventas convirtiendo tráfico frío en clientes recurrentes.",
    metrics: [{ value: "3.5x", label: "ROI" }],
    colSpan: "lg:col-span-6"
  },
  {
    id: "vertex",
    name: "Vertex Estate",
    mediaType: "image",
    mediaSrc: "/cases/vertex.png",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-900",
    btnColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
    copy: "Construyendo una comunicación a la altura de su servicio premium.",
    metrics: [],
    colSpan: "lg:col-span-12"
  }
];

export default function Clientes() {
  return (
    <div className="w-full bg-stone-50">
      
      {/* Soft Infinite Marquee */}
      <div className="w-full overflow-x-auto md:overflow-hidden bg-white py-8 border-b border-stone-200 flex flex-nowrap whitespace-nowrap">
        <div className="flex shrink-0 animate-none md:animate-[marquee_25s_linear_infinite] min-w-full items-center justify-start md:justify-around gap-16 px-8">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={idx} className="flex shrink-0 items-center gap-16">
              <span className="font-nunito font-bold text-3xl md:text-5xl text-stone-300 tracking-tight">{item}</span>
              <span className="text-stone-200 text-3xl md:text-5xl font-light">+</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless looping */}
        <div className="hidden md:flex shrink-0 animate-[marquee_25s_linear_infinite] min-w-full items-center justify-around gap-16 px-8" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex shrink-0 items-center gap-16">
              <span className="font-nunito font-bold text-3xl md:text-5xl text-stone-300 tracking-tight">{item}</span>
              <span className="text-stone-200 text-3xl md:text-5xl font-light">+</span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="font-nunito font-extrabold text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight tracking-tight">
              Casos de Éxito
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-sm text-stone-500">
              Visiones estratégicas transformadas en marcas líderes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {BUSINESSES.map((biz) => (
              <article key={biz.id} className={`flex flex-col md:flex-row rounded-[3rem] shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 overflow-hidden group ${biz.bgColor} ${biz.textColor} ${biz.colSpan}`}>
                
                {/* Media Side */}
                <div className="w-full md:w-1/2 lg:w-3/5 overflow-hidden relative min-h-[300px]">
                  {biz.mediaType === "video" ? (
                    <LazyVideo src={biz.mediaSrc} ariaLabel={`Video de ${biz.name}`} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700" />
                  ) : (
                    <Image src={biz.mediaSrc} alt={biz.name} fill className="object-cover transform group-hover:scale-105 transition-all duration-700" />
                  )}
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 lg:w-2/5 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="font-nunito font-bold text-3xl md:text-4xl mb-4 tracking-tight">{biz.name}</h3>
                    <p className="font-medium text-lg leading-relaxed opacity-80">{biz.copy}</p>
                    
                    {biz.metrics.length > 0 && (
                      <div className="mt-8 flex gap-8">
                        {biz.metrics.map((metric, i) => (
                          <div key={i}>
                            <span className="block font-nunito font-extrabold text-3xl">{metric.value}</span>
                            <span className="text-sm font-medium uppercase tracking-widest opacity-70">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-12">
                    <Link href={`/clientes#${biz.id}`} className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-md group/btn ${biz.btnColor}`}>
                      Ver caso <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
