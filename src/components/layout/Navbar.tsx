"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false); // Close menu if resized to desktop
      }
    };
    
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lock body scroll when mobile menu is open
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

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      handleHomeClick(e);
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Mobile menu links animation variants
  const menuVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isOpen
            ? "bg-transparent"
            : isScrolled 
              ? "bg-[#F4F1ED]/90 backdrop-blur-md shadow-sm py-0" 
              : "bg-transparent py-2"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">

            {/* Left: Logo/Name Text */}
            <div className="flex-1 flex justify-start">
              <Link 
                href="/" 
                onClick={(e) => {
                  if (isOpen) setIsOpen(false);
                  handleHomeClick(e);
                }}
                className="text-xl font-bold tracking-tight text-slate-900 font-sans"
              >
                Casa Nómada
              </Link>
            </div>

            {/* Center: The actual image logo (acts as trigger on mobile) */}
            <div className="flex-shrink-0 flex justify-center">
              <Link 
                href="/" 
                onClick={handleLogoClick} 
                className="block select-none"
              >
                <motion.div
                  animate={{ rotate: (isOpen && isMobile) ? -180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative w-12 h-12 cursor-pointer active:scale-95 transition-transform"
                >
                  <Image
                    src="/logo.png"
                    alt="Casa Nómada Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </Link>
            </div>

            {/* Right: Navigation Links (Desktop) */}
            <nav className="flex-1 hidden md:flex justify-end items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={link.href === "/" ? handleHomeClick : undefined}
                    className={`relative text-sm font-bricolage font-medium transition-colors py-1 group ${
                      isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.label}

                    {/* Hover underline */}
                    {!isActive && (
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-slate-900 group-hover:w-full transition-all duration-300" />
                    )}

                    {/* Framer Motion animated underline */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-slate-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#F4F1ED]/95 backdrop-blur-md z-40 flex flex-col justify-center items-center"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center gap-8"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.label} variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleMobileLinkClick(e, link.href)}
                      className={`relative group font-bricolage text-4xl font-semibold tracking-tight transition-colors py-2 block ${
                        isActive 
                          ? "text-orange-500" 
                          : "text-slate-900 hover:text-orange-500"
                      }`}
                    >
                      {link.label}

                      {/* Hover underline on mobile */}
                      {!isActive && (
                        <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-slate-900 group-hover:w-full transition-all duration-300" />
                      )}

                      {/* Active underline on mobile */}
                      {isActive && (
                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-500" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
