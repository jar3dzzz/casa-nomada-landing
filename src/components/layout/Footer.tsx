import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-stone-100 pt-20 pb-10 border-t border-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 border-b border-stone-200 pb-16">
          <div className="md:col-span-5">
            <h2 className="font-nunito font-extrabold text-4xl text-stone-800 mb-6">
              ¿Listo para crecer?
            </h2>
            <p className="text-stone-600 font-medium text-lg mb-8 max-w-md">
              Hablemos de tu proyecto y descubramos cómo podemos elevar tu marca al siguiente nivel.
            </p>
            <Link 
              href="https://wa.me/529931822009" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-block"
            >
              <div className="flex items-center gap-4 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/20 transition-all duration-300 overflow-hidden transform hover:scale-[1.03] active:scale-95">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                <WhatsAppIcon className="w-7 h-7 relative z-10" />
                <span className="relative z-10 flex flex-col text-left">
                  <span className="text-[0.65rem] uppercase tracking-wider opacity-90 leading-tight">Hablemos de tu proyecto</span>
                  <span className="text-lg leading-tight">993 182 2009</span>
                </span>
              </div>
            </Link>
          </div>
          
          <div className="md:col-span-3 md:col-start-8">
            <h3 className="font-bold text-stone-800 mb-6 text-lg">Navegación</h3>
            <ul className="flex flex-col gap-4 font-medium">
              <li><Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="text-stone-500 hover:text-stone-800 transition-colors">Servicios</Link></li>
              <li><Link href="/clientes" className="text-stone-500 hover:text-stone-800 transition-colors">Clientes</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 md:col-start-11">
            <h3 className="font-bold text-stone-800 mb-6 text-lg">Redes</h3>
            <div className="flex gap-4 text-stone-500">
              <a href="#" aria-label="Instagram" className="hover:text-stone-800 hover:-translate-y-1 transition-all">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-stone-800 hover:-translate-y-1 transition-all">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-stone-800 hover:-translate-y-1 transition-all">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-stone-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Ely la publicista. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseñado con propósito en Villahermosa.</p>
        </div>
      </div>
    </footer>
  );
}
