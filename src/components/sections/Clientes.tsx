import Image from "next/image";
import Link from "next/link";
import { Sparkles, Users, TrendingUp, Eye, Music } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HeroSection from "@/components/ui/hero-section-9";
import CollaboratorsSlider from "@/components/sections/home/CollaboratorsSlider";
import { LazyVideo } from "@/components/ui/lazy-video";
import FloatingBackground from "@/components/ui/floating-background";

// Client Wrappers
import { 
  ClientesScrollController, 
  BusinessRowWrapper, 
  PhaseBlockWrapper 
} from "@/components/ui/motion-wrappers";

interface Tag {
  label: string;
  icon: React.ReactNode;
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
          { label: "Seasonal Content", icon: <Sparkles className="w-3.5 h-3.5" /> }
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
          { label: "Community Building", icon: <Users className="w-3.5 h-3.5" /> }
        ],
        copy: "Fomentamos la comunidad digital de 7:QUINCE con contenido que incita la interacción."
      },
      {
        tags: [
          { label: "IRL community", icon: <Music className="w-3.5 h-3.5" /> }
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
          { label: "High reach", icon: <TrendingUp className="w-3.5 h-3.5" /> }
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
          { label: "Visual upgrade", icon: <Eye className="w-3.5 h-3.5" /> }
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
            { text: "Inicia tu proyecto", href: '/contacto', variant: 'default', className: "pointer-events-auto" }
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
                      <LazyVideo
                        src={biz.mediaSrc}
                        ariaLabel={`Video de ${biz.name}`}
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
                              return (
                                <span key={tagIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                                  {tag.icon}
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
      <ClientesScrollController 
        totalSlots={TOTAL_SLOTS} 
        businessesMapped={BUSINESSES_MAPPED.map(biz => ({
          id: biz.id,
          name: biz.name,
          slotStart: biz.slotStart,
          slots: biz.slots
        }))}
        floatingBg={<FloatingBackground />}
        introHero={
          <HeroSection
            className="w-full"
            title={<><span className="text-slate-500 text-2xl uppercase tracking-widest block mb-2 font-sans font-semibold">Proyectos Recientes</span>Casos de Éxito</>}
            subtitle="Descubre cómo hemos transformado visiones estratégicas en marcas líderes que conectan, inspiran y venden."
            images={['/cases/715.jpg', '/cases/unilabor.jpg', '/cases/715.jpg']}
            actions={[
              { text: "Inicia tu proyecto", href: '/contacto', variant: 'default', className: "pointer-events-auto" }
            ]}
            stats={[
              { value: "+5.3M", label: "Visualizaciones", icon: <Eye className="w-5 h-5 text-slate-600" /> },
              { value: "+21K", label: "Interacciones", icon: <Users className="w-5 h-5 text-slate-600" /> }
            ]}
          />
        }
        collabTitle={
          <>
            <h2 className="font-bricolage font-extrabold text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
              Nuestros colaboradores
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Las marcas y proyectos que han confiado en nuestro enfoque para destacar en el mercado premium.
            </p>
          </>
        }
        collabSlider={<CollaboratorsSlider />}
      >
        {BUSINESSES_MAPPED.map((biz, index) => (
          <BusinessRow 
            key={biz.id} 
            business={biz} 
            index={index} 
            totalBusinesses={BUSINESSES_MAPPED.length}
          />
        ))}
      </ClientesScrollController>
    </>
  );
}

interface BusinessRowProps {
  business: typeof BUSINESSES_MAPPED[0];
  index: number;
  totalBusinesses: number;
}

function BusinessRow({ business, index, totalBusinesses }: BusinessRowProps) {
  return (
    <BusinessRowWrapper 
      slotStart={business.slotStart} 
      slots={business.slots} 
      isLast={index === totalBusinesses - 1}
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
              <LazyVideo
                src={business.mediaSrc}
                ariaLabel={`Video de ${business.name}`}
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
    </BusinessRowWrapper>
  );
}

interface PhaseBlockProps {
  phase: TextPhase;
  pIdx: number;
  business: typeof BUSINESSES_MAPPED[0];
}

function PhaseBlock({ phase, pIdx, business }: PhaseBlockProps) {
  return (
    <PhaseBlockWrapper 
      slotStart={business.slotStart} 
      phaseIndex={pIdx} 
      totalPhases={business.phases.length}
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
          return (
            <span key={idx} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm transition-colors duration-500 ${business.theme === 'dark' ? 'bg-white/10 border-white/20 text-white' : 'bg-white/60 border-slate-900/5 text-slate-800'}`}>
              {tag.icon}
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
    </PhaseBlockWrapper>
  );
}
