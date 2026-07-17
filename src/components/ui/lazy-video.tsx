"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface LazyVideoProps {
  src: string;
  ariaLabel?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export function LazyVideo({
  src,
  ariaLabel,
  className = "w-full h-full object-cover",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  // trigger video mount when within 200px of viewport
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className={`relative w-full h-full ${className}`}>
      {isInView ? (
        <video
          src={src}
          aria-label={ariaLabel}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-stone-200/50 animate-pulse" />
      )}
    </div>
  );
}
