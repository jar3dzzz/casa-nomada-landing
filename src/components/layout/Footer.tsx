"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Planet } from 'reicon-react';
interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const QUICK_LINKS: FooterLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contacto", href: "/contacto" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/elylapublicista", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/elylapublicista", icon: FacebookIcon },
];

interface FooterProps {
  theme?: "light" | "dark";
}

export function Footer({ theme = "light" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const isDark = theme === "dark";
  const textHeading = isDark ? "text-white" : "text-green-950";
  const textBody = isDark ? "text-green-200" : "text-green-800";
  const textLink = isDark ? "text-green-200 hover:text-white" : "text-green-700 hover:text-green-950";
  const borderStyle = isDark ? "border-white/10" : "border-stone-300/50";
  const iconStyle = isDark 
    ? "border-white/20 text-green-200 hover:bg-white hover:text-green-950 hover:border-white" 
    : "border-stone-300/80 text-green-800 hover:bg-green-950 hover:text-white hover:border-green-950";

  return (
    <footer className={`w-full border-t mt-16 ${borderStyle}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" prefetch={false} className="block relative w-10 h-10 mb-5">
              <Planet size={40} className="w-full h-full text-black" />
            </Link>
            <p className={`text-sm leading-relaxed max-w-xs ${textBody}`}>
              La publicista que hará visible tu marca.
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
                  href="mailto:elygomez.mkt@gmail.com"
                  className={`text-sm transition-colors ${textLink}`}
                >
                  elygomez.mkt@gmail.com
                </a>
              </li>
              <li className={`text-sm ${textBody}`}>
                Villahermosa, Tabasco
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className={`font-bricolage font-bold text-sm uppercase tracking-[0.2em] mb-5 ${textHeading}`}>
              Sígueme
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

        <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${borderStyle}`}>
          <p className={`text-xs ${isDark ? "text-green-400" : "text-green-600"}`}>
            © {currentYear} Ely la publicista. Todos los derechos reservados.
          </p>
          <p className={`text-xs ${isDark ? "text-green-400" : "text-green-600"}`}>
            Diseñado con propósito en Villahermosa.
          </p>
        </div>
      </div>
    </footer>
  );
}
