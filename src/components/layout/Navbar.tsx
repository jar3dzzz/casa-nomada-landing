"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useSyncExternalStore } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isScrolled = useSyncExternalStore(
    (callback) => {
      window.addEventListener("scroll", callback, { passive: true });
      return () => window.removeEventListener("scroll", callback);
    },
    () => window.scrollY > 20,
    () => false
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav
            className={`w-full mx-auto px-6 py-3 flex items-center justify-between rounded-full border transition-all duration-300 ${
              isScrolled
                ? "bg-white/80 backdrop-blur-md border-stone-200/50 shadow-md shadow-stone-100/50"
                : "bg-white/40 backdrop-blur-sm border-stone-100/20"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-nunito font-extrabold text-stone-800 tracking-tight hover:opacity-80 transition-opacity"
            >
              Ely<span className="text-teal-600">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-stone-800 text-white shadow-sm"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors md:hidden text-stone-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-md md:hidden flex flex-col justify-end"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
            
            <m.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-white rounded-t-[3rem] p-8 pb-16 flex flex-col gap-6 shadow-2xl w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-nunito font-extrabold text-stone-800">Menú</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-stone-50 text-stone-500 hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full py-4 px-6 rounded-2xl text-lg font-semibold transition-all ${
                        isActive
                          ? "bg-teal-50 text-teal-800"
                          : "text-stone-600 hover:text-stone-950 hover:bg-stone-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-stone-800 text-white py-4 rounded-full font-medium hover:bg-stone-700 transition-colors mt-4 shadow-sm"
              >
                Hablemos
              </Link>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
