import { motion } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface StatProps { value: string; label: string; icon: React.ReactNode; }
interface ActionProps { text: string; onClick: () => void; variant?: ButtonProps['variant']; className?: string; }
interface HeroSectionProps { title: React.ReactNode; subtitle: string; actions: ActionProps[]; stats: StatProps[]; images: string[]; className?: string; }

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const imageVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } } };
const floatingVariants = { animate: { y: [0, -8, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const } } };

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('w-full overflow-hidden bg-transparent py-12 sm:py-24', className)}>
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 px-4 sm:px-6 max-w-7xl">
        {/* Left Column: Text Content */}
        <motion.div className="flex flex-col items-center text-center lg:items-start lg:text-left" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 className="font-bricolage text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl" variants={itemVariants}>
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-lg text-slate-600" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button className={action.className} key={index} onClick={action.onClick} size="lg" variant={action.variant}>
                {action.text}
              </Button>
            ))}
          </motion.div>
          <motion.div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">{stat.icon}</div>
                <div>
                  <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div className="relative h-[400px] w-full sm:h-[500px]" variants={containerVariants} initial="hidden" animate="visible">
          {/* Decorative Shapes (Casa Nomada Style) */}
          <motion.div className="absolute -top-4 left-1/4 h-16 w-16 rounded-full border border-slate-300" variants={floatingVariants} animate="animate" />
          <motion.div className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-orange-200/40 blur-xl" variants={floatingVariants} animate="animate" style={{ transitionDelay: '0.5s' }} />
          <motion.div className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-slate-200" variants={floatingVariants} animate="animate" style={{ transitionDelay: '1s' }} />

          {/* Images */}
          <motion.div className="absolute left-[15%] -top-10 h-48 w-48 rounded-3xl bg-white p-2 shadow-lg sm:h-72 sm:w-72" style={{ transformOrigin: 'bottom center' }} variants={imageVariants}>
            <img src={images[0]} alt="Case Study 1" className="h-full w-full rounded-2xl object-cover" />
          </motion.div>
          <motion.div className="absolute -right-8 top-1/4 h-40 w-40 rounded-3xl bg-white p-2 shadow-lg sm:h-72 sm:w-72" style={{ transformOrigin: 'left center' }} variants={imageVariants}>
            <img src={images[1]} alt="Case Study 2" className="h-full w-full rounded-2xl object-cover" />
          </motion.div>
          <motion.div className="absolute -left-8 -bottom-10 h-64 w-64 rounded-3xl bg-white p-2 shadow-lg sm:h-68 sm:w-68" style={{ transformOrigin: 'right bottom' }} variants={imageVariants}>
            <img src={images[2]} alt="Case Study 3" className="h-full w-full rounded-2xl object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
