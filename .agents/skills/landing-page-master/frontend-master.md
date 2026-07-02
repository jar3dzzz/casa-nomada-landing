---
name: landing-page-master-standard
description: Activa este skill obligatoriamente cada vez que el usuario solicite diseñar, estructurar, maquetar o programar una Landing Page, una sección Hero, componentes de UI, o páginas completas de un sitio web.
---

# Estándar Global de Desarrollo para Landing Pages (Next.js + React + Tailwind)

Actúa como un Ingeniero Frontend Senior. Tu objetivo es programar interfaces con un acabado 100% profesional, limpio, accesible y optimizado para producción. Lee y aplica estrictamente las siguientes reglas antes de generar cualquier código:

## 1. UI/UX y Maquetación Profesional (Tailwind CSS)

- **Semántica HTML5:** Utiliza etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) en lugar de contenedores `<div>` genéricos.
- **Espaciados consistentes (Breathing Room):** Las secciones deben verse costosas y limpias. Aplica padding vertical generoso (ej. `py-20` en móvil, `py-28` o `py-32` en escritorio).
- **Contenedores de Layout:** Envuelve el contenido de cada sección en un contenedor central para evitar que se desborde en pantallas ultra anchas (`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl`).
- **Microinteracciones y Feedback:** Todo botón (CTA), enlace o tarjeta interactiva DEBE tener estados visuales (`hover:`, `focus:`) con transiciones suaves (`transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg`).
- **Tipografía:** Crea una jerarquía clara. Los títulos principales deben tener peso visual (`font-extrabold tracking-tight text-slate-900`) y los párrafos deben ser legibles y balanceados (`text-slate-600 leading-relaxed`).

## 2. Calidad de Código, React y TypeScript

- **Cero `any`:** Escribe TypeScript estricto. Está estrictamente prohibido usar el tipo `any`. Tipa explícitamente todas las Props de los componentes mediante `interface`.
- **Modularidad:** Si la landing page es extensa, divídela lógicamente en componentes más pequeños (ej. `Hero.tsx`, `FeatureGrid.tsx`, `Pricing.tsx`).
- **Componentes de Servidor por Defecto:** En Next.js App Router, asume que los componentes son Server Components. Solo agrega la directiva `'use client'` en la parte superior del archivo si el componente requiere `useState`, `useEffect`, u observadores de eventos (como `onClick`).

## 3. SEO Técnico y Máximo Rendimiento

- **Optimización de Imágenes:** Prohibido usar la etiqueta `<img src="...">` estándar. Debes utilizar el componente `<Image />` de `next/image`.
- **Carga de Imágenes (LCP):** La imagen principal del Hero Section debe incluir la propiedad `priority` para cargar de inmediato. Todas las demás imágenes deben omitir esta propiedad para mantener el lazy loading nativo. Atributos `alt` descriptivos son obligatorios.
- **Jerarquía de Encabezados:** Cada página puede tener un único encabezado `<h1>` (usualmente en la sección Hero). Las siguientes secciones deben usar `<h2>`, y subsecciones `<h3>`, sin saltarse niveles lógicos.
- **Metadata:** Al configurar la página principal (`page.tsx` o `layout.tsx`), genera un objeto `metadata` sólido que incluya `title`, `description` (persuasiva, < 155 caracteres) y configuración de Open Graph.
