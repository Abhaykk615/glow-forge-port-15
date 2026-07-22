import { motion } from "motion/react";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  {
    icon: Code2,
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firestore"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "Firebase", "VS Code", "Postman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Skills"
        title={<>The <span className="gradient-text">toolkit</span></>}
        description="Technologies I reach for when shipping fast, reliable, and maintainable software."
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:glass-strong"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-purple">
                <g.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/90 transition-all hover:border-brand-purple/40 hover:bg-brand-purple/10"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
