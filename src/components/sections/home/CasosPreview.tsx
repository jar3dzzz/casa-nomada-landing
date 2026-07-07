"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { m } from "framer-motion";
import { LazyVideo } from "@/components/ui/lazy-video";

/* ─── Case study data ─── */
interface CaseStudy {
  id: string;
  title: string;
  category: string;
  videoSrc: string;
  logoSrc: string;
  logoAlt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "laut",
    title: "Laut",
    category: "Branding & Identidad Visual",
    videoSrc: "/cases/laut.mp4",
    logoSrc: "/cases/logos/laut-logo.png",
    logoAlt: "Logo de Laut",
  },
  {
    id: "madan",
    title: "Madan",
    category: "Estrategia & Contenido Premium",
    videoSrc: "/cases/madan.mp4",
    logoSrc: "/cases/logos/madan-logo.jpg.png",
    logoAlt: "Logo de Madan",
  },
];

/* ─── Framer Motion variants ─── */
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─── Geometric Card Frame ─── */
function CardGeometry({ variant }: { variant: "left" | "right" }) {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
      {/* Offset square frames behind the card */}
      <div
        className={`absolute border border-slate-300/12 rounded-2xl ${
          variant === "left"
            ? "-top-3 -left-3 w-full h-full"
            : "-top-3 -right-3 w-full h-full"
        }`}
      />
      <div
        className={`absolute border border-slate-200/8 rounded-2xl ${
          variant === "left"
            ? "-top-6 -left-6 w-full h-full"
            : "-top-6 -right-6 w-full h-full"
        }`}
      />
      {/* Floating circle accent */}
      <m.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className={`absolute rounded-full border border-slate-300/20 ${
          variant === "left"
            ? "-bottom-8 -right-8 w-[100px] h-[100px]"
            : "-bottom-8 -left-8 w-[120px] h-[120px]"
        }`}
      />
    </div>
  );
}

export default function CasosPreview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section-level geometric decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-[10%] right-[5%] w-[240px] h-[240px] rounded-full border border-slate-300/10" />
        <div className="absolute bottom-[5%] left-[3%] w-[180px] h-[180px] rounded-full border border-slate-200/10" />
        <div
          className="absolute top-[40%] left-[50%] w-[140px] h-[140px] border border-slate-200/8"
          style={{ transform: "rotate(15deg)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <m.div variants={fadeUpVariants}>
            <h2 className="font-bricolage font-extrabold text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Casos de Estudio
            </h2>
            <p className="text-slate-600 mt-4 max-w-md">
              Un vistazo a nuestras colaboraciones recientes. Marcas que
              confiaron en nuestra visión para escalar al siguiente nivel.
            </p>
          </m.div>

          <m.div variants={fadeUpVariants}>
            <Link
              href="/clientes"
              prefetch={false}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-slate-900 hover:text-slate-600 transition-colors group"
            >
              Ver todos los proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </m.div>
        </m.div>

        {/* Case Study Cards */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
        >
          {CASE_STUDIES.map((study, index) => (
            <m.div
              key={study.id}
              variants={cardVariants}
              className="relative"
            >
              {/* Geometric frame decoration */}
              <CardGeometry variant={index === 0 ? "left" : "right"} />

              <Link href={`/clientes#${study.id}`} prefetch={false} className="group block relative z-10">
                {/* Video Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-200 shadow-lg">
                  <LazyVideo
                    src={study.videoSrc}
                    ariaLabel={`Video del caso de ${study.title}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Client logo badge */}
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
                    <Image
                      src={study.logoSrc}
                      alt={study.logoAlt}
                      width={80}
                      height={28}
                      className="h-6 w-auto object-contain brightness-0"
                    />
                  </div>
                </div>

                {/* Card Info */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-2">
                    {study.category}
                  </p>
                  <h3 className="font-bricolage font-bold text-2xl text-slate-900 group-hover:text-slate-700 transition-colors">
                    {study.title}
                  </h3>
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
