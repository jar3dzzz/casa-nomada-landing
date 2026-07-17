"use client";

import Image from "next/image";
import Link from "next/link";
import { m, Variants } from "framer-motion";
import { ArrowRight, MessageCircle, TrendingUp, Code, Camera } from "lucide-react";
import { useState, useEffect } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (isMobile: boolean) => ({
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0 : 0.15,
      delayChildren: isMobile ? 0 : 0.1,
    },
  }),
};

const itemVariants: Variants = {
  hidden: (isMobile: boolean) => ({ opacity: 0, y: isMobile ? 0 : 20 }),
  visible: (isMobile: boolean) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { duration: isMobile ? 0.4 : 0.6, ease: "easeOut" } 
  }),
};

const floatingVariants: Variants = {
  animate: (isMobile: boolean) => (isMobile ? { y: 0 } : {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const floatingReverseVariants: Variants = {
  animate: (isMobile: boolean) => (isMobile ? { y: 0 } : {
    y: [0, 12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Title Block */}
            <m.div 
               custom={isMobile}
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               className="lg:col-span-7 z-20 flex flex-col justify-center"
            >
               {/* Badges / Services */}
               <m.div custom={isMobile} variants={itemVariants} className="flex flex-wrap gap-2 md:gap-2.5 mb-4 md:mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-[10px] md:text-xs font-bold tracking-wide shadow-sm border border-teal-200/50">
                    <TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Estrategias Digitales
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-[10px] md:text-xs font-bold tracking-wide shadow-sm border border-rose-200/50">
                    <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Campañas Meta Ads
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-[10px] md:text-xs font-bold tracking-wide shadow-sm border border-amber-200/50">
                    <Camera className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Creación de Contenido
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-indigo-100/80 text-indigo-800 text-[10px] md:text-xs font-bold tracking-wide shadow-sm border border-indigo-200/50">
                    <Code className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Desarrollo Web
                  </span>
               </m.div>

               <m.h1 custom={isMobile} variants={itemVariants} className="font-nunito text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold text-stone-800 leading-[1.05] tracking-tight">
                  <span className="text-teal-600 block mb-1">Ely</span>
                  <span className="block text-stone-700">la publicista.</span>
               </m.h1>
               
               <m.p custom={isMobile} variants={itemVariants} className="mt-4 md:mt-8 text-base md:text-xl text-stone-600 max-w-lg leading-relaxed font-medium">
                  Ayudo a marcas y negocios a escalar sus ventas con estrategias de marketing digital rentables y diseño de alto rendimiento.
               </m.p>
               
               <m.div custom={isMobile} variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-6 md:mt-10 w-full sm:w-auto">
                  <Link href="https://wa.me/529931822009" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto">
                     <m.div 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-3 bg-stone-800 text-white font-bold px-8 h-14 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full"
                     >
                        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm md:text-base tracking-wide whitespace-nowrap">WhatsApp (993 182 2009)</span>
                     </m.div>
                  </Link>
                  
                  <Link href="/clientes" className="group flex justify-center items-center gap-2.5 text-stone-600 font-bold hover:text-teal-700 transition-colors h-14 px-4 w-full sm:w-auto">
                     Ver casos de éxito
                     <m.div
                       className="w-10 h-10 rounded-full bg-stone-200 group-hover:bg-teal-100 flex items-center justify-center transition-colors"
                       whileHover={{ x: 4 }}
                     >
                        <ArrowRight className="w-4 h-4" />
                     </m.div>
                  </Link>
               </m.div>
            </m.div>

            {/* Soft UI Image with Floating Elements */}
            <m.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
               className="lg:col-span-5 z-10 relative mt-10 lg:mt-0"
            >
               <div className="relative w-full max-w-[320px] md:max-w-[440px] aspect-[4/5] mx-auto lg:ml-auto">
                  
                  {/* Decorative background shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-rose-200 rounded-[2rem] md:rounded-[3rem] transform rotate-3 scale-105 opacity-60"></div>
                  
                  {/* Main Image */}
                  <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] shadow-none md:shadow-2xl md:shadow-stone-300/50 overflow-hidden bg-white border-[4px] md:border-[6px] border-stone-100 md:border-white">
                     <Image 
                       src="/cases/lumina.png"
                       alt="Ely la publicista - Consultora de Marketing"
                       fill
                       priority
                       sizes="(max-width: 1024px) 100vw, 440px"
                       className="object-cover"
                     />
                  </div>

                  {/* Floating Glassmorphism Pill 1 */}
                  <m.div 
                    custom={isMobile}
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute -left-2 md:-left-12 top-10 md:top-20 bg-white md:bg-white/70 backdrop-blur-none md:backdrop-blur-md border border-stone-200 md:border-white/60 shadow-sm md:shadow-xl rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 z-20"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[0.6rem] md:text-[0.65rem] font-bold text-stone-500 uppercase tracking-wider mb-0.5">ROAS Promedio</p>
                      <p className="font-nunito font-extrabold text-xl md:text-2xl text-stone-800 leading-none">+350%</p>
                    </div>
                  </m.div>

                  {/* Floating Glassmorphism Pill 2 */}
                  <m.div 
                    custom={isMobile}
                    variants={floatingReverseVariants}
                    animate="animate"
                    className="absolute -right-2 md:-right-8 bottom-12 md:bottom-24 bg-white md:bg-white/70 backdrop-blur-none md:backdrop-blur-md border border-stone-200 md:border-white/60 shadow-sm md:shadow-xl rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 z-20"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-inner">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="font-nunito font-extrabold text-base md:text-lg text-stone-800 leading-tight">Leads<br/>Calificados</p>
                    </div>
                  </m.div>

               </div>
            </m.div>
         </div>
      </div>
      
      {/* Background Decorative Soft Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
         <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-teal-100 rounded-full blur-[80px] md:blur-[120px] opacity-40 md:opacity-60 mix-blend-multiply" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-rose-100 rounded-full blur-[80px] md:blur-[120px] opacity-40 md:opacity-60 mix-blend-multiply" />
      </div>
    </section>
  );
}
