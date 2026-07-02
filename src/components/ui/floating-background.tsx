"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BACKGROUND_IMAGES = [
  { src: "/work-media/work-1.jpg", left: "2%", top: "8%", width: 130, height: 170, duration: 25, delay: 0 },
  { src: "/work-media/work-2.jpg", left: "82%", top: "12%", width: 150, height: 190, duration: 28, delay: 2 },
  { src: "/work-media/work-4.jpg", left: "10%", top: "78%", width: 160, height: 120, duration: 32, delay: 5 },
  { src: "/work-media/work-5.jpg", left: "70%", top: "72%", width: 120, height: 160, duration: 27, delay: 1 },
  { src: "/work-media/work-6.jpg", left: "56%", top: "18%", width: 140, height: 110, duration: 30, delay: 4 },
  { src: "/cases/715.jpg", left: "4%", top: "38%", width: 110, height: 140, duration: 26, delay: 3 },
  { src: "/cases/unilabor.jpg", left: "86%", top: "42%", width: 170, height: 130, duration: 29, delay: 6 },
  { src: "/ola.jpg", left: "22%", top: "15%", width: 140, height: 180, duration: 23, delay: 1 },
  { src: "/hero.png", left: "35%", top: "74%", width: 130, height: 160, duration: 26, delay: 3 },
];

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-transparent">
      {BACKGROUND_IMAGES.map((img, index) => (
        <motion.div
          key={index}
          className="absolute rounded-3xl overflow-hidden shadow-sm opacity-60"
          style={{
            left: img.left,
            top: img.top,
            width: img.width,
            height: img.height,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, index % 2 === 0 ? 3 : -3, 0],
          }}
          transition={{
            duration: img.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: img.delay,
          }}
        >
          <Image
            src={img.src}
            alt={`Gallery background ${index}`}
            fill
            sizes="(max-width: 768px) 40vw, 20vw"
            className="object-cover transition-all duration-700 blur-[1px] scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
}
