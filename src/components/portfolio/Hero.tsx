import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-workspace.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand-purple)_35%,transparent),transparent)] blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[500px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand-blue)_30%,transparent),transparent)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,white_3%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,white_3%,transparent)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles size={12} className="text-brand-purple" />
            Available for opportunities · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Abhay
            <br />
            <span className="gradient-text">Kumar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-lg font-medium text-foreground/80"
          >
            Software Engineer{" "}
            <span className="text-muted-foreground">·</span> Frontend Developer{" "}
            <span className="text-muted-foreground">·</span> Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I build scalable, responsive, and production-ready web applications
            using React, Next.js, TypeScript, and Node.js. Passionate about
            solving real-world problems through clean code and intuitive user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] glow-purple"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={16} />
              Contact me
            </a>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 blur-3xl" />
          <div className="relative gradient-border rounded-3xl glass-strong p-2">
            <img
              src={heroImg}
              alt="Isometric holographic developer workspace"
              width={1200}
              height={1200}
              className="rounded-2xl"
            />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-4 top-8 rounded-2xl glass-strong px-4 py-3 text-xs sm:-left-8"
          >
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              LeetCode
            </div>
            <div className="font-display text-xl font-bold gradient-text">1621</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute -right-2 bottom-8 rounded-2xl glass-strong px-4 py-3 text-xs sm:-right-6"
          >
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Problems
            </div>
            <div className="font-display text-xl font-bold gradient-text">450+</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
