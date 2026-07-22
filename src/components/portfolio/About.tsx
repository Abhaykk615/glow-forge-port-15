import { motion } from "motion/react";
import { Code2, Layout, Server, Database } from "lucide-react";

const SERVICES = [
  { icon: Layout, title: "Frontend Development", desc: "React, Next.js, TypeScript, Tailwind" },
  { icon: Server, title: "Backend & APIs", desc: "Node.js, Express, REST services" },
  { icon: Database, title: "Databases", desc: "MongoDB, PostgreSQL, Firestore" },
  { icon: Code2, title: "DSA & Problem Solving", desc: "450+ problems · LeetCode 1621" },
];

const STATS = [
  { value: "20", suffix: "+", label: "Projects Shipped" },
  { value: "450", suffix: "+", label: "Problems Solved" },
  { value: "2", suffix: "+", label: "Internships" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Services list */}
        <div className="relative">
          <div className="absolute left-0 top-2 h-full w-px bg-brand-coral/40" />
          <div className="space-y-8 pl-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex items-center gap-4"
              >
                <span className="absolute -left-[33px] top-4 h-2 w-2 rounded-full bg-brand-coral" />
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-brand-coral/30 bg-white/[0.02] text-brand-coral">
                  <s.icon size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* About text + stats */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl font-bold tracking-tight sm:text-6xl"
          >
            About me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-xl leading-relaxed text-muted-foreground"
          >
            I'm a B.Tech IT student at BIET Jhansi (AKTU · CGPA 7.92) who fell in
            love with software through solving problems. That curiosity now
            drives everything I build — from pixel-perfect interfaces to
            reliable backends. I care about performance, accessibility, and the
            small details that make products feel great.
          </motion.p>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold sm:text-5xl">{s.value}</span>
                  <span className="font-display text-3xl font-bold text-brand-coral">{s.suffix}</span>
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
