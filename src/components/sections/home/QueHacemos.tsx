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
    title: "Estrategia Digital",
    description: "Alineamos objetivos de negocio con acciones tácticas para posicionar tu proyecto en el segmento premium.",
    icon: Briefcase,
    mediaSrc: "/cases/vertex.png",
    mediaType: "image",
    gridClass: "col-span-1 md:col-span-4 h-[300px] md:h-[380px]",
  },
  {
    id: "contenido",
    title: "Contenido",
    description: "Producimos narrativas visuales y editoriales impecables que capturan la atención y generan conversión.",
    icon: Camera,
    mediaSrc: "/ely.mp4",
    mediaType: "video",
    gridClass: "col-span-1 md:col-span-2 h-[300px] md:h-[380px]",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Conectamos tu marca con su audiencia ideal a través de campañas de crecimiento orgánico y de posicionamiento.",
    icon: Sparkles,
    mediaSrc: "/cases/lumina.png",
    mediaType: "image",
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
      {/* Hidden on mobile to boost rendering performance */}
      <div className="hidden md:block absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-600/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-600/10 blur-[120px]" />
        
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
            <h3 className="font-bricolage font-bold text-xl md:text-2xl text-green-950 mb-3">
              ¿Qué hace Ely la publicista?
            </h3>
            <p className="text-sm md:text-base text-green-800 leading-relaxed font-inter">
              Estructuro y potencio marcas de hospitalidad y
              comercio premium. Mi enfoque combina estética refinada con
              estrategias basadas en datos para crear narrativas irresistibles.
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
              className="group inline-flex items-center gap-2 bg-green-950 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-green-900"
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
        isHovered ? "border-emerald-600 shadow-lg -translate-y-1" : "border-stone-200/50 shadow-sm"
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
            aria-label={`Video descriptivo de ${service.title}`}
            preload="none"
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
                ? "bg-emerald-600 scale-110 shadow-md shadow-emerald-600/20"
                : "bg-emerald-600"
            }`}
          >
            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
        </div>

        <div className="space-y-3">
          <h3
            className={`font-bricolage font-bold text-2xl transition-colors duration-500 ${
              isHovered ? "text-white" : "text-green-950"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`leading-relaxed text-sm lg:text-base transition-colors duration-500 ${
              isHovered ? "text-green-100" : "text-green-800"
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>
    </m.div>
  );
}
