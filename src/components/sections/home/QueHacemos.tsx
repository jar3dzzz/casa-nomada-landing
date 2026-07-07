"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { 
  Sparkles, 
  Briefcase, 
  Camera, 
  TrendingUp, 
  Globe, 
  ArrowRight 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  mediaSrc: string;
  mediaType: "video" | "image";
  gridClass: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "estrategias",
    title: "Estrategias",
    description: "Alineamos objetivos de negocio con acciones tácticas para posicionar tu proyecto en el segmento premium.",
    icon: Briefcase,
    mediaSrc: "/work-media/work-1.jpg",
    mediaType: "image",
    gridClass: "col-span-1 md:col-span-4 h-[300px] md:h-[380px]",
  },
  {
    id: "contenido",
    title: "Creación de Contenido",
    description: "Producimos narrativas visuales y editoriales impecables que capturan la atención y generan conversión.",
    icon: Camera,
    mediaSrc: "/work-media/work-3.mp4",
    mediaType: "video",
    gridClass: "col-span-1 md:col-span-2 h-[300px] md:h-[380px]",
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    description: "Conectamos tu marca con su audiencia ideal a través de campañas de crecimiento orgánico y de posicionamiento.",
    icon: Sparkles,
    mediaSrc: "/work-media/work-2.jpg",
    mediaType: "image",
    gridClass: "col-span-1 md:col-span-2 h-[260px] md:h-[320px]",
  },
  {
    id: "ads",
    title: "Ads",
    description: "Maximizamos tu retorno de inversión con pauta digital ultra-segmentada y optimización continua.",
    icon: TrendingUp,
    mediaSrc: "/work-media/work-7.mp4",
    mediaType: "video",
    gridClass: "col-span-1 md:col-span-2 h-[260px] md:h-[320px]",
  },
  {
    id: "sitios",
    title: "Sitios Web",
    description: "Diseñamos y desarrollamos plataformas web rápidas, responsivas y de estética impecable.",
    icon: Globe,
    mediaSrc: "/work-media/services.png",
    mediaType: "image",
    gridClass: "col-span-1 md:col-span-2 h-[260px] md:h-[320px]",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function QueHacemos() {
  return (
    <section className="py-28 lg:py-32 bg-white/50 relative overflow-hidden">
      {/* Decorative background meshes & shapes */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-orange-500/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[120px]" />
        
        {/* Outlined Circles */}
        <div className="absolute top-[15%] right-[10%] w-[250px] h-[250px] rounded-full border border-stone-200/40" />
        <div className="absolute bottom-[15%] left-[8%] w-[180px] h-[180px] rounded-full border border-stone-200/30" />
        
        {/* Rotating Square */}
        <div 
          className="absolute top-[45%] left-[45%] w-[140px] h-[140px] border border-stone-200/20"
          style={{ transform: "rotate(25deg)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          {/* Header Section */}
          <m.div variants={cardVariants} className="max-w-2xl mb-16">
            <h2 className="font-bricolage font-extrabold text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
              ¿Qué hace Casa Nómada?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nos especializamos en estructurar marcas de hospitalidad y
              comercio premium. Nuestro enfoque combina estética refinada con
              marketing estratégico para crear narrativas irresistibles.
            </p>
          </m.div>

          {/* Interactive Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <BentoCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* CTA Redirect Button */}
          <m.div variants={cardVariants} className="mt-16 flex justify-center">
            <Link 
              href="/servicios"
              prefetch={false}
              className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Ver todos los servicios
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

function BentoCard({ service, index }: { service: ServiceItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (service.mediaType === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (service.mediaType === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const Icon = service.icon;

  return (
    <m.div
      variants={cardVariants}
      custom={index}
      className={`relative rounded-3xl border overflow-hidden transition-all duration-500 ease-out cursor-pointer group ${service.gridClass} ${
        isHovered ? "border-orange-500 shadow-lg -translate-y-1" : "border-stone-200/50 shadow-sm"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full bg-white z-0 overflow-hidden">
        {service.mediaType === "video" ? (
          <video
            ref={videoRef}
            src={service.mediaSrc}
            loop
            muted
            playsInline
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        ) : (
          <Image
            src={service.mediaSrc}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-all duration-700 ease-out ${
              isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        )}
      </div>

      {/* Overlay Background to handle contrast transitions */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out z-10 ${
          isHovered
            ? "bg-gradient-to-t from-black/90 via-black/50 to-black/20"
            : "bg-white"
        }`}
      />

      {/* Card Content wrapper */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
        <div>
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ease-out ${
              isHovered
                ? "bg-orange-500 scale-110 shadow-md shadow-orange-500/20"
                : "bg-orange-500"
            }`}
          >
            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
        </div>

        <div className="space-y-3">
          <h3
            className={`font-bricolage font-bold text-2xl transition-colors duration-500 ${
              isHovered ? "text-white" : "text-slate-900"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`leading-relaxed text-sm lg:text-base transition-colors duration-500 ${
              isHovered ? "text-slate-200" : "text-slate-600"
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>
    </m.div>
  );
}
