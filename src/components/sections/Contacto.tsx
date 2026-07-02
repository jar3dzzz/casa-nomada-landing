"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

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
    <section id="contacto" className="py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Invitation + Contact Info */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500 mb-4">
              Hablemos
            </p>
            <h2 className="font-bricolage font-extrabold text-4xl lg:text-5xl text-slate-900 tracking-tight mb-6">
              ¿Listo para crear algo extraordinario?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Nos encanta conocer nuevos proyectos. Si tienes una idea, una
              marca que quieres llevar al siguiente nivel, o simplemente
              quieres platicar — escríbenos.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@casanomada.com.mx"
                className="inline-flex items-center gap-3 text-slate-900 font-medium hover:text-slate-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  <Mail className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                info@casanomada.com.mx
              </a>
            </div>
          </div>

          {/* Right — Minimalist Contact Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-2"
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
                  className="w-full bg-transparent border-b border-stone-300 focus:border-slate-900 outline-none transition-colors py-3 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-2"
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
                  className="w-full bg-transparent border-b border-stone-300 focus:border-slate-900 outline-none transition-colors py-3 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="w-full bg-transparent border-b border-stone-300 focus:border-slate-900 outline-none transition-colors py-3 text-slate-900 placeholder:text-slate-400 resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors group"
                >
                  Enviar mensaje
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
