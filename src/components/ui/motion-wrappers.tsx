"use client";

import { m, useScroll, useTransform, Variants, useMotionValueEvent, animate, MotionValue, useMotionValue } from "framer-motion";
import { useRef, ReactNode, useState, createContext, useContext } from "react";

// --- Generic Wrappers ---

export function RevealGroup({ children, className, margin = "-100px" }: { children: ReactNode, className?: string, margin?: string }) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  return (
    <m.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
    >
      {children}
    </m.div>
  );
}

export function RevealItem({ children, className, as = "div" }: { children: ReactNode, className?: string, as?: "div" | "h2" | "p" }) {
  const textRevealVariants: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      }
    },
  };
  
  const Component = m[as as "div"] as React.ElementType; // Cast for framer-motion HTML elements
  
  return (
    <Component variants={textRevealVariants} className={className}>
      {children}
    </Component>
  );
}

export function RotateInfinite({ children, className, duration = 40, direction = 1 }: { children: ReactNode, className?: string, duration?: number, direction?: 1 | -1 }) {
  return (
    <m.div
      className={className}
      style={{ willChange: "transform" }}
      animate={{ rotate: 360 * direction }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </m.div>
  );
}

export function ScrollParallaxImage({ children, className }: { children: ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <m.div 
      ref={containerRef} 
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Decorative Frame Behind */}
      <div className="absolute -inset-4 bg-slate-50/80 border border-slate-200/60 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4 shadow-sm" />
      
      {/* Main Image with inner parallax scale */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-black/5">
        <m.div style={{ y: yImage, scale: 1.15 }} className="absolute inset-0 w-full h-full">
          {children}
        </m.div>
      </div>
    </m.div>
  );
}

// --- Clientes.tsx Specific Wrappers ---

interface ScrollContextType {
  scrollYProgress: MotionValue<number>;
  TOTAL_SLOTS: number;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

interface ClientesScrollControllerProps {
  children: ReactNode;
  totalSlots: number;
  businessesMapped: { id: string; name: string; slotStart: number; slots: number; }[];
  floatingBg: ReactNode;
  introHero: ReactNode;
  collabTitle: ReactNode;
  collabSlider: ReactNode;
}

export function ClientesScrollController({ 
  children, 
  totalSlots, 
  businessesMapped,
  floatingBg,
  introHero,
  collabTitle,
  collabSlider
}: ClientesScrollControllerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lastPhaseRef = useRef(-1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let currentPhaseIndex = Math.floor(latest * totalSlots);
    if (currentPhaseIndex >= totalSlots) currentPhaseIndex = totalSlots - 1;
    if (currentPhaseIndex < 0) currentPhaseIndex = 0;

    if (currentPhaseIndex === lastPhaseRef.current) return;
    lastPhaseRef.current = currentPhaseIndex;

    const activeBizIndex = businessesMapped.findIndex(
      biz => currentPhaseIndex >= biz.slotStart && currentPhaseIndex < biz.slotStart + biz.slots
    );
    if (activeBizIndex !== -1) {
      setActiveIndex(activeBizIndex);
    } else {
      setActiveIndex(-1);
    }
  });

  const SLOT_SIZE = 1 / totalSlots;

  // Intro calculations
  const introEnd = 1 * SLOT_SIZE;
  const introFadeOutStart = introEnd - (SLOT_SIZE * 0.2);
  const introFadeOutEnd = introEnd - (SLOT_SIZE * 0.05);

  const introOpacity = useTransform(scrollYProgress, [0, introFadeOutStart, introFadeOutEnd, 1], [1, 1, 0, 0]);
  const introTranslateY = useTransform(scrollYProgress, [0, introFadeOutStart, introFadeOutEnd, 1], [0, 0, -60, -60]);

  // Collab calculations
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
    
    const biz = businessesMapped[index];
    const targetScrollY = absoluteTop + ((biz.slotStart + 0.5) * window.innerHeight);

    animate(window.scrollY, targetScrollY, {
      type: "tween",
      duration: 0.35,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest)
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="hidden lg:block relative"
      style={{ height: `${(totalSlots + 1) * 100}vh` }}
    >
      <ScrollContext.Provider value={{ scrollYProgress, TOTAL_SLOTS: totalSlots }}>
        <m.div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <m.div style={{ opacity: collabOpacity }} className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10">
            {floatingBg}
          </m.div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
            {businessesMapped.map((biz, index) => (
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

          <div className="container mx-auto px-8 max-w-7xl w-full h-full flex flex-col justify-center pt-28 pb-16 relative">
            <m.div style={{ opacity: introOpacity, y: introTranslateY }} className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
              {introHero}
            </m.div>

            <m.div style={{ opacity: collabOpacity, y: collabTranslateY }} className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-20">
              <div className="w-full text-center mb-10 relative">
                {collabTitle}
              </div>
              <div className="w-full pointer-events-auto">
                {collabSlider}
              </div>
            </m.div>

            <div className="relative w-full flex-1 max-h-[75vh] flex items-center">
              {children}
            </div>
          </div>
        </m.div>
      </ScrollContext.Provider>
    </div>
  );
}

export function BusinessRowWrapper({ children, slotStart, slots, isLast }: { children: ReactNode, slotStart: number, slots: number, isLast: boolean }) {
  const context = useContext(ScrollContext);
  const fallbackScroll = useMotionValue(0);
  const scrollYProgress = context?.scrollYProgress || fallbackScroll;
  const TOTAL_SLOTS = context?.TOTAL_SLOTS || 1;

  const SLOT_SIZE = 1 / TOTAL_SLOTS;
  const start = slotStart * SLOT_SIZE;
  const end = (slotStart + slots) * SLOT_SIZE;

  const fadeInStart = start + (SLOT_SIZE * 0.05);
  const fadeInEnd = start + (SLOT_SIZE * 0.2);
  const fadeOutStart = end - (SLOT_SIZE * 0.2);
  const fadeOutEnd = end - (SLOT_SIZE * 0.05);

  let opacityRange: number[], opacityValues: number[];
  let translateRange: number[], translateValues: number[];
  let scaleRange: number[], scaleValues: number[];

  if (isLast) {
    opacityRange = [0, fadeInStart, fadeInEnd, 1];
    opacityValues = [0, 0, 1, 1];
    translateRange = [0, fadeInStart, fadeInEnd, 1];
    translateValues = [60, 60, 0, 0];
    scaleRange = [0, fadeInStart, fadeInEnd, 1];
    scaleValues = [0.96, 0.96, 1, 1];
  } else {
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
      {children}
    </m.div>
  );
}

export function PhaseBlockWrapper({ children, slotStart, phaseIndex, totalPhases }: { children: ReactNode, slotStart: number, phaseIndex: number, totalPhases: number }) {
  const context = useContext(ScrollContext);
  const fallbackScroll = useMotionValue(0);
  const scrollYProgress = context?.scrollYProgress || fallbackScroll;
  const TOTAL_SLOTS = context?.TOTAL_SLOTS || 1;

  const SLOT_SIZE = 1 / TOTAL_SLOTS;
  const start = slotStart * SLOT_SIZE;
  const pStart = start + (phaseIndex * SLOT_SIZE);
  const pEnd = pStart + SLOT_SIZE;

  const pFadeInStart = pStart + (SLOT_SIZE * 0.05);
  const pFadeInEnd = pStart + (SLOT_SIZE * 0.2);
  const pFadeOutStart = pEnd - (SLOT_SIZE * 0.2);
  const pFadeOutEnd = pEnd - (SLOT_SIZE * 0.05);

  let pOpacityRange: number[], pOpacityValues: number[];

  if (totalPhases === 1) {
    pOpacityRange = [0, 1];
    pOpacityValues = [1, 1];
  } else if (phaseIndex === 0) {
    pOpacityRange = [0, pFadeOutStart, pFadeOutEnd, 1];
    pOpacityValues = [1, 1, 0, 0];
  } else if (phaseIndex === totalPhases - 1) {
    pOpacityRange = [0, pFadeInStart, pFadeInEnd, 1];
    pOpacityValues = [0, 0, 1, 1];
  } else {
    pOpacityRange = [0, pFadeInStart, pFadeInEnd, pFadeOutStart, pFadeOutEnd, 1];
    pOpacityValues = [0, 0, 1, 1, 0, 0];
  }

  const pOpacity = useTransform(scrollYProgress, pOpacityRange, pOpacityValues);

  return (
    <m.div 
      style={{ opacity: pOpacity }} 
      className="col-start-1 row-start-1 flex flex-col gap-6 w-full"
    >
      {children}
    </m.div>
  );
}
