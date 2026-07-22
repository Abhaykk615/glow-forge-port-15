import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
// Image is in the public folder

const TECHS = ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "GitHub"];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,white_3%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,white_3%,transparent)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pb-16">
        {/* Left copy */}
        <div className="relative">
          <div className="absolute -left-3 top-3 hidden h-24 w-px bg-brand-coral/70 sm:block" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl font-semibold tracking-tight sm:text-6xl"
          >
            Hello<span className="text-brand-coral">.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-foreground/90 sm:text-5xl"
          >
            I'm <span className="underline decoration-brand-coral decoration-2 underline-offset-8">Abhay Kumar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl"
          >
            Software Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            I build scalable, responsive, production-ready web apps with React,
            Next.js, TypeScript and Node.js — clean code, thoughtful UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-coral px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
              style={{ boxShadow: "0 10px 30px -10px color-mix(in oklab, var(--brand-coral) 60%, transparent)" }}
            >
              Got a project?
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

          </motion.div>
        </div>

        {/* Right portrait with ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md group"
        >
          {/* Soft purple glow behind */}
          <div className="absolute inset-0 rounded-full bg-brand-purple/20 blur-3xl transition-all duration-500 group-hover:bg-brand-purple/40 group-hover:blur-2xl" />

          {/* Premium circular glass frame & rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-brand-coral/40"
          />
          <div className="absolute inset-4 rounded-full border-2 border-brand-coral/60 glass-strong shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" />
          <div className="absolute inset-8 rounded-full border border-brand-coral/20" />

          {/* Chevrons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-4xl text-brand-coral/60">&lt;</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-4xl text-brand-coral/60">&gt;</div>

          {/* Portrait */}
          <div className="absolute inset-10 overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-105">
            <img
              src="/pasportsize photo.jpeg"
              alt="Abhay Kumar portrait"
              width={900}
              height={1100}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>
      </div>

      {/* Tech strip */}
      <div className="mt-4 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-5 sm:px-6">
          {TECHS.map((t) => (
            <span
              key={t}
              className="font-display text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-brand-coral"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
