import { motion } from "motion/react";
import { GraduationCap, Code2, Layers, Server } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const STATS = [
  { value: "450+", label: "Problems Solved" },
  { value: "3★", label: "CodeChef" },
  { value: "1621", label: "LeetCode Rating" },
  { value: "2+", label: "Internships" },
];

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "B.Tech IT · BIET Jhansi",
    desc: "AKTU · CGPA 7.92 · 2022–2026",
  },
  {
    icon: Code2,
    title: "CS Fundamentals",
    desc: "Strong grasp of DSA, OOP, DBMS, OS & Networks",
  },
  {
    icon: Layers,
    title: "Modern Frontend",
    desc: "React, Next.js, TypeScript, Tailwind — pixel-perfect UIs",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Node.js, Express, REST — scalable services & data models",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="About"
        title={<>Engineer at heart, <span className="gradient-text">builder</span> by craft</>}
        description="I care about the boring things that make software feel great — performance, accessibility, correctness — and the details that ship."
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-5 text-center transition-all hover:glass-strong hover:-translate-y-1"
          >
            <div className="font-display text-3xl font-bold gradient-text sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {HIGHLIGHTS.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glass-strong"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-blue transition-transform group-hover:scale-110">
              <h.icon size={20} />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold">{h.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
