import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<any>;
}

const InstagramIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const QUICK_LINKS: FooterLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contacto", href: "/contacto" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/casanomadamx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/casa-nomada-mx/", icon: LinkedinIcon },
];

interface FooterProps {
  theme?: "light" | "dark";
}

export function Footer({ theme = "light" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const isDark = theme === "dark";
  const textHeading = isDark ? "text-white" : "text-slate-900";
  const textBody = isDark ? "text-slate-300" : "text-slate-500";
  const textLink = isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900";
  const borderStyle = isDark ? "border-white/10" : "border-stone-300/50";
  const iconStyle = isDark 
    ? "border-white/20 text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white" 
    : "border-stone-300/80 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900";

  return (
    <footer className={`w-full border-t mt-16 ${borderStyle}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" prefetch={false} className="block relative w-10 h-10 mb-5">
              <Image
                src="/logo.png"
                alt="Casa Nómada Logo"
                fill
                sizes="40px"
                className={`object-contain ${isDark ? "brightness-0 invert" : ""}`}
              />
            </Link>
            <p className={`text-sm leading-relaxed max-w-xs ${textBody}`}>
              Una célula creativa basada en Villahermosa y Monterrey, estructurando marcas
              de hospitalidad y comercio premium.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={`font-bricolage font-bold text-sm uppercase tracking-[0.2em] mb-5 ${textHeading}`}>
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className={`text-sm transition-colors inline-flex items-center gap-1 group ${textLink}`}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className={`font-bricolage font-bold text-sm uppercase tracking-[0.2em] mb-5 ${textHeading}`}>
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:info@casanomada.com.mx"
                  className={`text-sm transition-colors ${textLink}`}
                >
                  info@casanomada.com.mx
                </a>
              </li>
              <li className={`text-sm ${textBody}`}>
                Villahermosa, Tabasco | Monterrey, Nuevo León
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className={`font-bricolage font-bold text-sm uppercase tracking-[0.2em] mb-5 ${textHeading}`}>
              Síguenos
            </h4>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${iconStyle}`}
                  >
                    <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${borderStyle}`}>
          <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-400"}`}>
            © {currentYear} Casa Nómada. Todos los derechos reservados.
          </p>
          <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-400"}`}>
            Diseñado con propósito en Villahermosa.
          </p>
        </div>
      </div>
    </footer>
  );
}
