import Link from "next/link";
import { ArrowRight, Sparkles, Briefcase, Camera, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
  iconColor: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "estrategias",
    title: "Estrategia Digital",
    description: "Alineamos objetivos de negocio con acciones tácticas para posicionar tu proyecto en el segmento premium.",
    icon: Briefcase,
    bgColor: "bg-teal-50",
    textColor: "text-teal-900",
    iconBgColor: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    id: "contenido",
    title: "Contenido",
    description: "Producimos narrativas visuales y editoriales impecables que capturan la atención.",
    icon: Camera,
    bgColor: "bg-rose-50",
    textColor: "text-rose-900",
    iconBgColor: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Conectamos tu marca con su audiencia ideal a través de campañas orgánicas.",
    icon: Sparkles,
    bgColor: "bg-amber-50",
    textColor: "text-amber-900",
    iconBgColor: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: "sitios",
    title: "Sitios Web",
    description: "Diseñamos y desarrollamos plataformas web rápidas, responsivas y atractivas.",
    icon: Globe,
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-900",
    iconBgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export default function QueHacemos() {
  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="font-nunito font-extrabold text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight tracking-tight max-w-2xl">
            ¿Qué hacemos?
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-sm text-stone-500">
            Estructuramos y potenciamos marcas con tácticas basadas en datos para crear narrativas irresistibles.
          </p>
        </div>

        {/* Soft Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href="/servicios"
                className={`group block h-full flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-stone-100 ${service.bgColor} ${service.textColor} min-h-[320px]`}
              >
                <div>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.iconBgColor} ${service.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-nunito font-bold text-3xl mb-4 tracking-tight">{service.title}</h3>
                  <p className="font-medium text-lg leading-relaxed opacity-80">{service.description}</p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-all ${service.iconColor}`}>
                    <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Redirect Button */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="/servicios"
            className="inline-flex items-center gap-4 bg-stone-800 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
          >
            Ver todos los servicios
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
