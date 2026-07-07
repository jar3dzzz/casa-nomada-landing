"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { m } from "framer-motion";

/* ─── Title lines for staggered reveal ─── */
const titleLines = [
  { text: "Creatividad", highlight: false },
  { text: "que transforma", highlight: false },
  { text: "marcas.", highlight: true },
];

/* ─── Framer Motion variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const lineVariants = {
  hidden: { y: "120%", opacity: 0, rotate: 2 },
  visible: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const descriptionWords = "Una célula creativa basada en Villahermosa y Monterrey, estructurando marcas de hospitalidad y comercio premium.".split(" ");

const wordContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.6,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─── Geometric decoration sub-component ─── */
function HeroGeometry() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
      {/* Large circle stroke — top right */}
      <m.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-16 -right-20 w-[380px] h-[380px] rounded-full border border-slate-300/20"
      />
      {/* Small circle — left side */}
      <m.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[60%] -left-12 w-[140px] h-[140px] rounded-full border border-slate-300/15"
      />
      {/* Offset square — behind text area */}
      <m.div
        initial={{ opacity: 0, rotate: 8 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-[15%] left-[8%] w-[180px] h-[180px] border border-slate-300/10"
      />
      {/* Thin horizontal line accent */}
      <m.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[18%] left-0 w-[30%] h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent origin-left"
      />
    </div>
  );
}

/* ─── Image frame decoration ─── */
function ImageFrame({ className }: { className: string }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, delay: 0.8 }}
      className={`absolute border border-slate-400/15 rounded-[2.5rem] pointer-events-none ${className}`}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-32 pb-20 lg:pt-40 lg:pb-24">
      {/* Geometric decoration layer */}
      <HeroGeometry />

      {/* Vibrant Gradient Mesh / Color Splashes (Anchored to top of page) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-20 overflow-visible">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-300/40 rounded-full blur-[120px] mix-blend-multiply"
          aria-hidden="true"
        />
        <div
          className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-rose-300/40 rounded-full blur-[120px] mix-blend-multiply"
          aria-hidden="true"
        />
        <div
          className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-amber-300/30 rounded-full blur-[120px] mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

          {/* Left: Text Content */}
          <div className="w-full lg:w-7/12 relative z-20">
            <m.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="font-bricolage font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter text-slate-900 leading-[1.05] text-balance mb-6">
                {titleLines.map((line, index) => (
                  <span key={index} className="block overflow-hidden py-1">
                    <m.span
                      variants={lineVariants}
                      className={`block origin-bottom-left ${
                        line.highlight ? "text-amber-700/90 italic" : ""
                      }`}
                    >
                      {line.text}
                    </m.span>
                  </span>
                ))}
              </h1>

              {/* Staggered word-by-word reveal for description */}
              <m.p
                variants={wordContainerVariants}
                initial="hidden"
                animate="visible"
                className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed mb-8 font-medium"
              >
                {descriptionWords.map((word, i) => (
                  <m.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </m.span>
                ))}
              </m.p>

              <m.div
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row gap-4 sm:items-center"
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Iniciar proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>

                <Link
                  href="/clientes"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-slate-900 border border-slate-900/10 bg-white/10 backdrop-blur-sm hover:bg-white/40 hover:border-slate-900/20 transition-all duration-300"
                >
                  Ver portafolio
                </Link>
              </m.div>
            </m.div>
          </div>

          {/* Right: Asymmetrical Image Collage with Geometric Framing */}
          <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-[550px] mt-8 lg:mt-0 z-10">
            <m.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="absolute inset-0 w-full h-full"
            >
              {/* Offset frame decoration behind main image */}
              <ImageFrame className="right-[-12px] top-[-12px] w-[85%] h-[80%] z-[5]" />
              <ImageFrame className="right-[-24px] top-[-24px] w-[85%] h-[80%] z-[4]" />

              {/* Main Large Image */}
              <m.div
                variants={imageVariants}
                className="absolute right-0 top-0 w-[85%] h-[80%] rounded-[2.5rem] overflow-hidden bg-stone-200 shadow-2xl z-10"
              >
                <Image
                  src="/hero.webp"
                  alt="Dirección de arte Casa Nómada"
                  priority
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay" />
              </m.div>

              {/* Offset frame behind secondary image */}
              <ImageFrame className="left-0 sm:left-[-4%] lg:left-[-8%] bottom-[5%] w-[65%] h-[55%] ml-[-12px] mb-[-12px] rounded-[2rem] z-[15]" />

              {/* Secondary Overlapping Image */}
              <m.div
                variants={imageVariants}
                className="absolute left-0 sm:left-[-4%] lg:left-[-8%] bottom-[5%] w-[65%] h-[55%] rounded-[2rem] overflow-hidden bg-stone-300 shadow-xl border-8 border-[#F4F1ED] z-20"
              >
                <Image
                  src="/ola.jpg"
                  alt="Detalle de diseño Casa Nómada"
                  priority
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </m.div>

              {/* Floating geometric circle near images */}
              <m.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.0 }}
                className="absolute -bottom-4 right-[30%] w-[80px] h-[80px] rounded-full border border-slate-300/25 z-[25]"
              />
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
