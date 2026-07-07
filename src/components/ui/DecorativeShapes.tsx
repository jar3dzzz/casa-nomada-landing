"use client";

import { m } from "framer-motion";

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0, 8, 0],
    x: [0, 6, 0, -4, 0],
    rotate: [0, i % 2 === 0 ? 3 : -3, 0],
    transition: {
      duration: 18 + i * 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

interface GeometricCircleProps {
  className: string;
  size: number;
  index: number;
}

function GeometricCircle({ className, size, index }: GeometricCircleProps) {
  return (
    <m.div
      custom={index}
      variants={floatVariants}
      animate="animate"
      className={`absolute rounded-full border border-slate-300/15 ${className}`}
      style={{ width: size, height: size, willChange: "transform" }}
    />
  );
}

interface OffsetSquareProps {
  className: string;
  size: number;
  rotation?: number;
}

function OffsetSquare({ className, size, rotation = 0 }: OffsetSquareProps) {
  return (
    <div
      className={`absolute border border-slate-300/10 ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
}

export function DecorativeShapes() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Floating Geometric Circles */}
      <GeometricCircle
        className="top-[8%] right-[12%]"
        size={280}
        index={0}
      />
      <GeometricCircle
        className="top-[55%] left-[5%]"
        size={180}
        index={1}
      />
      <GeometricCircle
        className="bottom-[15%] right-[8%]"
        size={350}
        index={2}
      />
      <GeometricCircle
        className="top-[25%] left-[45%]"
        size={120}
        index={3}
      />

      {/* Offset Squares — editorial framing */}
      <OffsetSquare
        className="top-[20%] right-[20%]"
        size={200}
        rotation={12}
      />
      <OffsetSquare
        className="bottom-[30%] left-[10%]"
        size={160}
        rotation={-8}
      />

      {/* Ambient warm glows (kept subtle) */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-200/3 blur-3xl" />
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-stone-300/3 blur-3xl" />
    </div>
  );
}
