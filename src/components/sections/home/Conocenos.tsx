import Image from "next/image";

export default function Conocenos() {
  return (
    <section className="w-full bg-stone-50 overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-1 lg:order-1 relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white shadow-xl shadow-stone-200/50">
              <Image
                src="/ola.jpg"
                alt="Ely la publicista"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center order-2 lg:order-2">
            <div className="inline-block mb-4">
              <span className="bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                Sobre Mí
              </span>
            </div>
            
            <h2 className="font-nunito font-extrabold text-3xl md:text-5xl text-stone-800 mb-6 md:mb-8 leading-tight tracking-tight">
              Estrategia y diseño con un propósito claro.
            </h2>
            
            <div className="flex flex-col gap-6">
              <p className="font-medium text-lg md:text-xl text-stone-600 leading-relaxed">
                Como publicista y estratega, creo que el éxito de una marca no se mide solo en likes, sino en su capacidad para generar conversaciones genuinas y conexiones memorables con su audiencia.
              </p>
              <div className="w-12 h-1 bg-rose-200 rounded-full" />
              <p className="font-medium text-lg md:text-xl text-stone-600 leading-relaxed">
                Me alejo de las fórmulas genéricas. Combino análisis estratégico con creatividad premium para diseñar un ecosistema digital que cuenta la historia de tu negocio y eleva tu presencia en línea.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
