"use client";

import Image from "next/image";
import { Planet } from 'reicon-react';
const COLLABORATORS = [
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
  { id: "belafiori", name: "Belafiori", src: "/cases/logos/planet-outline.svg" },
];

export default function CollaboratorsSlider() {
  return (
    <section className="w-full overflow-hidden bg-transparent py-10 border-y border-stone-200/50">
      <div className="w-full inline-flex flex-nowrap overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-start [&_li]:mx-4 md:[&_li]:mx-8 animate-none md:animate-scroll overflow-x-auto md:overflow-visible whitespace-nowrap pb-4 md:pb-0">
          {/* We duplicate the array to create the infinite scroll effect */}
          {[...COLLABORATORS, ...COLLABORATORS].map((collaborator, index) => (
            <li key={`${collaborator.id}-${index}`} className="relative w-32 h-16 md:w-40 md:h-20 flex-shrink-0">
              <Planet size={80} className="w-full h-full text-black opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-sm" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
