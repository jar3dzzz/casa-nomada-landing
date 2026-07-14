import Image from "next/image";
import { RevealGroup, RevealItem, RotateInfinite, ScrollParallaxImage } from "@/components/ui/motion-wrappers";

export default function Conocenos() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-28 lg:py-40 border-t border-slate-100">
      
      {/* Fine dividing line top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-100 to-transparent" />

      {/* Side Rotated Text (EST. 2024) */}
      <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 -rotate-90 hidden md:block origin-center opacity-40">
        <span className="text-xs font-semibold tracking-[0.4em] text-green-700 uppercase">
          EST. 2024
        </span>
      </div>
      
      <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 rotate-90 hidden md:block origin-center opacity-40">
        <span className="text-xs font-semibold tracking-[0.4em] text-green-700 uppercase">
          ELY LA PUBLICISTA
        </span>
      </div>

      {/* Background Ambient Glows */}
      <div className="hidden md:block absolute top-1/4 left-0 w-96 h-96 bg-teal-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      {/* Floating Geometric Elements (Nested rotating circles) */}
      <RotateInfinite className="absolute top-20 right-10 lg:right-32 w-64 h-64 rounded-full border border-green-200/60 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-green-200/40" />
      </RotateInfinite>

      <RotateInfinite direction={-1} duration={35} className="absolute bottom-20 left-10 lg:left-32 w-40 h-40 rounded-full border border-green-200/50 -z-10 pointer-events-none">
        <></>
      </RotateInfinite>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Column */}
          <RevealGroup className="flex flex-col justify-center order-2 lg:order-1">
            <div className="overflow-hidden mb-8">
              <RevealItem as="h2" className="font-bricolage font-extrabold text-4xl md:text-5xl lg:text-6xl text-green-950 tracking-tight">
                Sobre Mí
              </RevealItem>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden">
                <RevealItem as="p" className="text-green-800 text-lg md:text-xl leading-relaxed">
                  Como publicista y estratega, creo que el éxito de una marca no se mide solo en likes, sino en su capacidad para generar conversaciones genuinas y conexiones memorables con su audiencia.
                </RevealItem>
              </div>
              <div className="overflow-hidden">
                <RevealItem as="p" className="text-green-800 text-lg md:text-xl leading-relaxed">
                  Me alejo de las fórmulas genéricas. Combino análisis estratégico con creatividad premium para diseñar un ecosistema digital que cuenta la historia de tu negocio.
                </RevealItem>
              </div>
              <div className="overflow-hidden">
                <RevealItem as="p" className="text-green-800 text-lg md:text-xl leading-relaxed">
                  Mi misión es elevar tu presencia en línea a través de tácticas de crecimiento comprobadas, sin comprometer nunca la estética ni la esencia de tu marca.
                </RevealItem>
              </div>
            </div>
          </RevealGroup>

          {/* Visual Column (Parallax) */}
          <ScrollParallaxImage className="relative order-1 lg:order-2 w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl">
            <Image
              src="/cases/lumina.png"
              alt="Ely la publicista Filosofía"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </ScrollParallaxImage>

        </div>
      </div>
    </section>
  );
}
