"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, useScroll, useTransform, useMotionValueEvent, animate, MotionValue } from "framer-motion";
import { Sparkles, Users, TrendingUp, Eye, Music } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/ui/hero-section-9";
import CollaboratorsSlider from "@/components/sections/home/CollaboratorsSlider";
import FloatingBackground from "@/components/ui/floating-background";

interface Tag {
  label: string;
  icon: LucideIcon;
}

interface TextPhase {
  tags: Tag[];
  copy: React.ReactNode;
  secondaryCopy?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  subCopy?: string;
}

interface Business {
  id: string;
  name: string;
  logo: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  bgColor: string;
  theme?: "dark" | "light";
  phases: TextPhase[];
}

const BUSINESSES: Business[] = [
  {
    id: "laut",
    name: "Laut",
    logo: "/cases/logos/laut-logo.png",
    mediaType: "video",
    mediaSrc: "/cases/laut.mp4",
    bgColor: "#FAF7F2",
    phases: [
      {
        tags: [
          { label: "Seasonal Content", icon: Sparkles }
        ],
        copy: "Reflejamos la experiencia de laut en lenguaje visual, conectando con su comunidad como nunca antes.",
        metrics: [
          { value: "+350 MIL", label: "visualizaciones" },
          { value: "+6 MIL", label: "interacciones" }
        ],
        subCopy: "logrando resultados sólidos con historias que reflejan el valor de la marca"
      }
    ]
  },
  {
    id: "715",
    name: "7:QUINCE",
    logo: "/cases/logos/715-logo.png",
    mediaType: "image",
    mediaSrc: "/cases/715.jpg",
    bgColor: "#EAE8E4",
    phases: [
      {
        tags: [
          { label: "Community Building", icon: Users }
        ],
        copy: "Fomentamos la comunidad digital de 7:QUINCE con contenido que incita la interacción."
      },
      {
        tags: [
          { label: "IRL community", icon: Music }
        ],
        copy: "Creamos sundaze, un evento que impulsa el sentido de comunidad y la cultura de la música house.",
        metrics: [
          { value: "+300", label: "personas en 3 ediciones" }
        ]
      }
    ]
  },
  {
    id: "madan",
    name: "Madan",
    logo: "/cases/logos/madan-logo.jpg.png",
    mediaType: "video",
    mediaSrc: "/cases/madan.mp4",
    bgColor: "#c7d6dcff",
    phases: [
      {
        tags: [
          { label: "High reach", icon: TrendingUp }
        ],
        copy: "Creamos desde 0 la comunidad de madan, logrando que la viralidad se convierta en ventas.",
        metrics: [
          { value: "+5M", label: "visualizaciones" },
          { value: "+15K", label: "seguidores" },
          { value: "4 Meses", label: "de crecimiento" }
        ]
      }
    ]
  },
  {
    id: "unilabor",
    name: "Unilabor",
    logo: "/cases/logos/unilabor-logo.png",
    mediaType: "image",
    mediaSrc: "/cases/unilabor.jpg",
    bgColor: "#F4F1ED",
    phases: [
      {
        tags: [
          { label: "Visual upgrade", icon: Eye }
        ],
        copy: "Definimos el rumbo visual de unilabor, construyendo una comunicación a la altura de su servicio.",
        secondaryCopy: "Traduciendo procesos de calidad a una imagen clara y profesional."
      }
    ]
  }
];

// Pre-calculate slots for scroll math
const INTRO_SLOTS = 2; // Fase 0: Portada, Fase 1: Colaboradores
let currentSlotCount = INTRO_SLOTS;
const BUSINESSES_MAPPED = BUSINESSES.map(biz => {
  const slotStart = currentSlotCount;
  const slots = biz.phases.length;
  currentSlotCount += slots;
  return { ...biz, slotStart, slots };
});

const TOTAL_SLOTS = currentSlotCount;

export default function Clientes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const SLOT_SIZE = 1 / TOTAL_SLOTS;

  const lastPhaseRef = useRef(-1);

  // Track the current active business index (not phase index)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let currentPhaseIndex = Math.floor(latest * TOTAL_SLOTS);
    // Clamp to valid phase indices
    if (currentPhaseIndex >= TOTAL_SLOTS) currentPhaseIndex = TOTAL_SLOTS - 1;
    if (currentPhaseIndex < 0) currentPhaseIndex = 0;

    // Micro-optimization: Only recalculate if phase index actually changed
    if (currentPhaseIndex === lastPhaseRef.current) return;
    lastPhaseRef.current = currentPhaseIndex;

    // Find which business owns this phase index
    const activeBizIndex = BUSINESSES_MAPPED.findIndex(
      biz => currentPhaseIndex >= biz.slotStart && currentPhaseIndex < biz.slotStart + biz.slots
    );
    if (activeBizIndex !== -1) {
      setActiveIndex(activeBizIndex);
    } else {
      // Si estamos en la portada o colaboradores (Fase 0 o Fase 1)
      setActiveIndex(-1);
    }
  });

  // Background color interpolation has been removed to keep a static page background

  // Intro Cover (Fase 0) calculations
  const introEnd = 1 * SLOT_SIZE;
  const introFadeOutStart = introEnd - (SLOT_SIZE * 0.2);
  const introFadeOutEnd = introEnd - (SLOT_SIZE * 0.05);

  const introOpacity = useTransform(scrollYProgress, [0, introFadeOutStart, introFadeOutEnd, 1], [1, 1, 0, 0]);
  const introTranslateY = useTransform(scrollYProgress, [0, introFadeOutStart, introFadeOutEnd, 1], [0, 0, -60, -60]);

  // Collaborators (Fase 1) calculations
  const collabStart = 1 * SLOT_SIZE;
  const collabEnd = 2 * SLOT_SIZE;
  const collabFadeInStart = collabStart + (SLOT_SIZE * 0.05);
  const collabFadeInEnd = collabStart + (SLOT_SIZE * 0.2);
  const collabFadeOutStart = collabEnd - (SLOT_SIZE * 0.2);
  const collabFadeOutEnd = collabEnd - (SLOT_SIZE * 0.05);

  const collabOpacity = useTransform(
    scrollYProgress,
    [0, collabFadeInStart, collabFadeInEnd, collabFadeOutStart, collabFadeOutEnd, 1],
    [0, 0, 1, 1, 0, 0]
  );
  const collabTranslateY = useTransform(
    scrollYProgress,
    [0, collabFadeInStart, collabFadeInEnd, collabFadeOutStart, collabFadeOutEnd, 1],
    [60, 60, 0, 0, -60, -60]
  );

  const handleDotClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    
    // Calculate the scroll position corresponding to the middle of the target business's first phase
    const biz = BUSINESSES_MAPPED[index];
    const targetScrollY = absoluteTop + ((biz.slotStart + 0.5) * window.innerHeight);

    // Animate custom smooth scroll transition to feel instant yet faded (0.35s duration)
    animate(window.scrollY, targetScrollY, {
      type: "tween",
      duration: 0.35,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest)
    });
  };

  return (
    <>
      {/* 1. Conventional Stack Layout for Mobile (block lg:hidden) */}
      <section className="block lg:hidden pt-28 pb-16 bg-transparent">
        <HeroSection
          className="mb-16 !py-0"
          title={<><span className="text-slate-500 text-sm font-semibold uppercase tracking-[0.25em] block mb-2 font-sans">Proyectos Recientes</span>Casos de Éxito</>}
          subtitle="Descubre cómo hemos transformado visiones estratégicas en marcas líderes que conectan, inspiran y venden."
          images={['/cases/715.jpg', '/cases/unilabor.jpg', '/ola.jpg']}
          actions={[
            { text: "Inicia tu proyecto", onClick: () => router.push('/contacto'), variant: 'default', className: "pointer-events-auto" }
          ]}
          stats={[
            { value: "+5.3M", label: "Visualizaciones", icon: <Eye className="w-5 h-5 text-slate-600" /> },
            { value: "+21K", label: "Interacciones", icon: <Users className="w-5 h-5 text-slate-600" /> }
          ]}
        />
        
        {/* Nuestros Colaboradores en Móvil */}
        <div className="container mx-auto px-4 sm:px-6 mb-16 text-center">
          <h2 className="font-bricolage font-extrabold text-2xl text-slate-900 tracking-tight mb-2">
            Nuestros colaboradores
          </h2>
          <p className="text-slate-600 max-w-md mx-auto text-sm mb-8 leading-relaxed">
            Las marcas y proyectos que han confiado en nuestro enfoque para destacar en el mercado premium.
          </p>
          <CollaboratorsSlider />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col gap-16">
            {BUSINESSES_MAPPED.map((biz) => {
              return (
                <article key={biz.id} className="flex flex-col gap-6 bg-white p-6 rounded-3xl shadow-sm border border-stone-200/50">
                  {/* Media container */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 shadow-sm">
                    {biz.mediaType === "video" ? (
                      <video
                        src={biz.mediaSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={biz.mediaSrc}
                        alt={biz.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Text Details Container */}
                  <div className="flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex items-center gap-5 border-b border-stone-100 pb-4">
                      <div className="relative h-12 w-28 flex-shrink-0">
                        <Image
                          src={biz.logo}
                          alt={`${biz.name} logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain object-left brightness-0"
                        />
                      </div>
                      <h3 className="font-bricolage font-extrabold text-2xl tracking-tight text-slate-900 border-l-2 border-slate-200 pl-5">
                        {biz.name}
                      </h3>
                    </div>

                    {/* Render all phases linearly on mobile */}
                    <div className="flex flex-col gap-10">
                      {biz.phases.map((phase, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                          <div className="flex flex-col gap-2">
                            <p className="text-lg text-slate-800 leading-relaxed font-medium">
                              {phase.copy}
                            </p>
                            {phase.secondaryCopy && (
                              <p className="text-base text-slate-600 font-medium mt-1">
                                {phase.secondaryCopy}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {phase.tags.map((tag, tagIdx) => {
                              const TagIcon = tag.icon;
                              return (
                                <span key={tagIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                                  <TagIcon className="w-3.5 h-3.5" />
                                  {tag.label}
                                </span>
                              );
                            })}
                          </div>

                          {phase.metrics && (
                            <div className="grid grid-cols-2 gap-4 mt-2">
                              {phase.metrics.map((metric, i) => (
                                <div key={i} className="flex flex-col bg-slate-50 p-4 rounded-xl border border-slate-100">
                                  <span className="font-bricolage font-bold text-2xl text-slate-900">
                                    {metric.value}
                                  </span>
                                  <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                                    {metric.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {phase.subCopy && (
                            <p className="text-xs text-slate-500 italic mt-2">
                              {phase.subCopy}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Pinned Sticky Scroll Layout for Desktop (hidden lg:block) */}
      <div 
        ref={containerRef} 
        className="hidden lg:block relative"
        style={{ height: `${(TOTAL_SLOTS + 1) * 100}vh` }}
      >
        <m.div 
          className="sticky top-0 h-screen w-full flex items-center overflow-hidden"
        >
          {/* Full-width Floating Background on Desktop, bound to Collab phase opacity */}
          <m.div 
            style={{ opacity: collabOpacity }}
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <FloatingBackground />
          </m.div>
          {/* Progress Indicators */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
            {BUSINESSES_MAPPED.map((biz, index) => (
              <button
                key={biz.id}
                onClick={() => handleDotClick(index)}
                className="group flex items-center gap-3 justify-end focus:outline-none"
                aria-label={`Ir al caso de ${biz.name}`}
              >
                <span className="text-xs font-bold tracking-widest uppercase text-slate-900/40 group-hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {biz.name}
                </span>
                <div 
                  className={`w-3 h-3 rounded-full border border-slate-900/30 transition-all duration-300 ${
                    activeIndex === index 
                      ? "bg-slate-900 scale-125" 
                      : "bg-transparent hover:bg-slate-900/20"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Core Content Container */}
          <div className="container mx-auto px-8 max-w-7xl w-full h-full flex flex-col justify-center pt-28 pb-16 relative">
            
            {/* Intro Cover (Fase 0) */}
            <m.div 
              style={{ opacity: introOpacity, y: introTranslateY }}
              className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none"
            >
              <HeroSection
                className="w-full"
                title={<><span className="text-slate-500 text-2xl uppercase tracking-widest block mb-2 font-sans font-semibold">Proyectos Recientes</span>Casos de Éxito</>}
                subtitle="Descubre cómo hemos transformado visiones estratégicas en marcas líderes que conectan, inspiran y venden."
                images={['/cases/715.jpg', '/cases/unilabor.jpg', '/cases/715.jpg']}
                actions={[
                  { text: "Inicia tu proyecto", onClick: () => router.push('/contacto'), variant: 'default', className: "pointer-events-auto" }
                ]}
                stats={[
                  { value: "+5.3M", label: "Visualizaciones", icon: <Eye className="w-5 h-5 text-slate-600" /> },
                  { value: "+21K", label: "Interacciones", icon: <Users className="w-5 h-5 text-slate-600" /> }
                ]}
              />
            </m.div>

            {/* Collaborators (Fase 1) */}
            <m.div
              style={{ opacity: collabOpacity, y: collabTranslateY }}
              className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-20"
            >
              <div className="w-full text-center mb-10 relative">
                <h2 className="font-bricolage font-extrabold text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
                  Nuestros colaboradores
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Las marcas y proyectos que han confiado en nuestro enfoque para destacar en el mercado premium.
                </p>
              </div>
              <div className="w-full pointer-events-auto">
                <CollaboratorsSlider />
              </div>
            </m.div>

            {/* Slide Rows */}
            <div className="relative w-full flex-1 max-h-[75vh] flex items-center">
              {BUSINESSES_MAPPED.map((biz, index) => {
                return (
                  <BusinessRow 
                    key={biz.id} 
                    business={biz} 
                    index={index} 
                    totalBusinesses={BUSINESSES_MAPPED.length}
                    scrollYProgress={scrollYProgress}
                    TOTAL_SLOTS={TOTAL_SLOTS}
                  />
                );
              })}
            </div>
          </div>
        </m.div>
      </div>
    </>
  );
}

interface BusinessRowProps {
  business: typeof BUSINESSES_MAPPED[0];
  index: number;
  totalBusinesses: number;
  scrollYProgress: MotionValue<number>;
  TOTAL_SLOTS: number;
}

function BusinessRow({ business, index, totalBusinesses, scrollYProgress, TOTAL_SLOTS }: BusinessRowProps) {
  const SLOT_SIZE = 1 / TOTAL_SLOTS;
  const start = business.slotStart * SLOT_SIZE;
  const end = (business.slotStart + business.slots) * SLOT_SIZE;

  // Instant Transitions (Step Function) bounds to prevent overlap
  const fadeInStart = start + (SLOT_SIZE * 0.05);
  const fadeInEnd = start + (SLOT_SIZE * 0.2);
  const fadeOutStart = end - (SLOT_SIZE * 0.2);
  const fadeOutEnd = end - (SLOT_SIZE * 0.05);

  let opacityRange: number[];
  let opacityValues: number[];
  let translateRange: number[];
  let translateValues: number[];
  let scaleRange: number[];
  let scaleValues: number[];

  if (index === totalBusinesses - 1) {
    // Last business: hidden until start, fades in, stays visible
    opacityRange = [0, fadeInStart, fadeInEnd, 1];
    opacityValues = [0, 0, 1, 1];
    translateRange = [0, fadeInStart, fadeInEnd, 1];
    translateValues = [60, 60, 0, 0];
    scaleRange = [0, fadeInStart, fadeInEnd, 1];
    scaleValues = [0.96, 0.96, 1, 1];
  } else {
    // All other businesses (including the first one, which is now after the Intro Cover, so it MUST fade in)
    opacityRange = [0, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd, 1];
    opacityValues = [0, 0, 1, 1, 0, 0];
    translateRange = [0, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd, 1];
    translateValues = [60, 60, 0, 0, -60, -60];
    scaleRange = [0, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd, 1];
    scaleValues = [0.96, 0.96, 1, 1, 0.96, 0.96];
  }

  const opacity = useTransform(scrollYProgress, opacityRange, opacityValues);
  const translateY = useTransform(scrollYProgress, translateRange, translateValues);
  const scale = useTransform(scrollYProgress, scaleRange, scaleValues);

  return (
    <m.div
      style={{ opacity, y: translateY, scale }}
      className="absolute inset-0 w-full h-full flex items-center justify-between pointer-events-none"
    >
      <div className="grid grid-cols-12 gap-8 w-full items-center">
        {/* Left Column: Text content */}
        <div className="col-span-5 flex flex-col pointer-events-auto h-full justify-center">
          
          {/* Logo and Name (Persistent for the whole business duration) */}
          <div className="flex items-center gap-6 mb-8 mt-4">
             <div className="relative h-16 w-40 lg:h-20 lg:w-48 flex-shrink-0">
               <Image 
                 src={business.logo} 
                 alt={`${business.name} logo`} 
                 fill 
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 className={`object-contain object-left transition-all duration-500 ${business.theme === 'dark' ? 'brightness-0 invert' : 'brightness-0'}`} 
               />
             </div>
             <h3 className={`font-bricolage font-extrabold text-3xl lg:text-4xl tracking-tight border-l-2 pl-6 py-1 transition-colors duration-500 ${business.theme === 'dark' ? 'text-white border-white/20' : 'text-slate-900 border-slate-200'}`}>
               {business.name}
             </h3>
          </div>
          
          {/* Phases Container - CSS Grid overlap ensures parent grows to tallest child */}
          <div className="grid grid-cols-1 grid-rows-1 w-full">
            {business.phases.map((phase, pIdx) => (
              <PhaseBlock 
                key={pIdx}
                phase={phase}
                pIdx={pIdx}
                business={business}
                start={start}
                SLOT_SIZE={SLOT_SIZE}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Button linking to full project page */}
          <div className="mt-8">
            <Link
              href={`/clientes#${business.id}`}
              prefetch={false}
              className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors duration-500 group ${business.theme === 'dark' ? 'text-white hover:text-white/70' : 'text-slate-900 hover:text-slate-600'}`}
            >
              Ver caso completo
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Large Media Showcase (Persistent for whole business duration) */}
        <div className="col-span-7 pl-8 pointer-events-auto h-full flex items-center">
          <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-slate-200/50 shadow-2xl border border-slate-900/5">
            {business.mediaType === "video" ? (
              <video
                src={business.mediaSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={business.mediaSrc}
                alt={`${business.name} caso`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </m.div>
  );
}

interface PhaseBlockProps {
  phase: TextPhase;
  pIdx: number;
  business: typeof BUSINESSES_MAPPED[0];
  start: number;
  SLOT_SIZE: number;
  scrollYProgress: MotionValue<number>;
}

function PhaseBlock({ phase, pIdx, business, start, SLOT_SIZE, scrollYProgress }: PhaseBlockProps) {
  const pStart = start + (pIdx * SLOT_SIZE);
  const pEnd = pStart + SLOT_SIZE;

  // Local fade bounds adjusted for instant step-function transitions
  const pFadeInStart = pStart + (SLOT_SIZE * 0.05);
  const pFadeInEnd = pStart + (SLOT_SIZE * 0.2);
  const pFadeOutStart = pEnd - (SLOT_SIZE * 0.2);
  const pFadeOutEnd = pEnd - (SLOT_SIZE * 0.05);

  let pOpacityRange: number[];
  let pOpacityValues: number[];

  if (business.phases.length === 1) {
    // Only phase: stay visible for the whole duration (parent row handles fade in/out)
    pOpacityRange = [0, 1];
    pOpacityValues = [1, 1];
  } else if (pIdx === 0) {
    // First phase of many: stays visible from start, fades out locally at the end of its slot
    pOpacityRange = [0, pFadeOutStart, pFadeOutEnd, 1];
    pOpacityValues = [1, 1, 0, 0];
  } else if (pIdx === business.phases.length - 1) {
    // Last phase of many: fades in locally, stays visible until the end
    pOpacityRange = [0, pFadeInStart, pFadeInEnd, 1];
    pOpacityValues = [0, 0, 1, 1];
  } else {
    // Middle phase
    pOpacityRange = [0, pFadeInStart, pFadeInEnd, pFadeOutStart, pFadeOutEnd, 1];
    pOpacityValues = [0, 0, 1, 1, 0, 0];
  }

  const pOpacity = useTransform(scrollYProgress, pOpacityRange, pOpacityValues);

  return (
    <m.div 
      style={{ opacity: pOpacity }} 
      className="col-start-1 row-start-1 flex flex-col gap-6 w-full"
    >
      <div className="flex flex-col gap-3">
        <p className={`font-bricolage font-extrabold text-3xl xl:text-4xl leading-snug tracking-tight text-balance transition-colors duration-500 ${business.theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          {phase.copy}
        </p>
        {phase.secondaryCopy && (
          <p className={`text-xl font-medium tracking-normal mt-2 transition-colors duration-500 ${business.theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            {phase.secondaryCopy}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {phase.tags.map((tag, idx) => {
          const TagIcon = tag.icon;
          return (
            <span key={idx} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm transition-colors duration-500 ${business.theme === 'dark' ? 'bg-white/10 border-white/20 text-white' : 'bg-white/60 border-slate-900/5 text-slate-800'}`}>
              <TagIcon className="w-3.5 h-3.5" />
              {tag.label}
            </span>
          );
        })}
      </div>

      {phase.metrics && (
        <div className={`grid grid-cols-2 gap-6 mt-auto pt-6 border-t transition-colors duration-500 ${business.theme === 'dark' ? 'border-white/20' : 'border-slate-900/10'}`}>
          {phase.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className={`font-bricolage font-bold text-3xl transition-colors duration-500 ${business.theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {metric.value}
              </span>
              <span className={`text-xs uppercase tracking-wider transition-colors duration-500 ${business.theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {phase.subCopy && (
        <p className={`text-sm italic leading-relaxed transition-colors duration-500 ${business.theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
          {phase.subCopy}
        </p>
      )}
    </m.div>
  );
}
