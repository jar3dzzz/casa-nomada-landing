"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contacto() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // UI-only — form submission logic will be added later
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
      {/* Soft Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-50 rounded-full blur-3xl opacity-50 -z-10 transform -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left — Invitation + Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-nunito font-extrabold text-5xl md:text-6xl lg:text-7xl text-stone-800 tracking-tight leading-tight mb-8">
              Hablemos
            </h2>
            <p className="text-xl md:text-2xl font-medium text-stone-600 mb-12">
              ¿Listo para crear algo extraordinario? Escríbenos y lleva tu marca al siguiente nivel.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6 bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 max-w-md">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-teal-600 mb-2">Email</p>
                <a
                  href="mailto:elygomez.mkt@gmail.com"
                  className="text-stone-800 font-medium text-lg hover:text-teal-700 transition-colors"
                >
                  elygomez.mkt@gmail.com
                </a>
              </div>
              <div className="w-full h-px bg-stone-100"></div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-teal-600 mb-2">Ubicación</p>
                <p className="text-stone-800 font-medium text-lg">Villahermosa, México</p>
              </div>
            </div>
            
            <div className="mt-8">
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
                    <span className="text-[0.65rem] uppercase tracking-wider opacity-90 leading-tight">Contacto Directo</span>
                    <span className="text-lg leading-tight">993 182 2009</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right — Soft Contact Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-stone-200/50 border border-white relative z-10">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-bold uppercase tracking-widest text-stone-500 mb-2 pl-4"
                >
                  Nombre
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all p-4 px-6 text-stone-800 font-medium text-lg placeholder:text-stone-400 rounded-full"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-bold uppercase tracking-widest text-stone-500 mb-2 pl-4"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all p-4 px-6 text-stone-800 font-medium text-lg placeholder:text-stone-400 rounded-full"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-bold uppercase tracking-widest text-stone-500 mb-2 pl-4"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={5}
                  className="w-full bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all p-6 text-stone-800 font-medium text-lg placeholder:text-stone-400 rounded-[2rem] resize-none"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-teal-700 text-white px-8 py-5 rounded-full font-medium text-lg hover:bg-teal-800 transition-all duration-300 hover:shadow-md group hover:-translate-y-1"
                >
                  Enviar mensaje
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
