import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EXPERIENCE = [
  {
    role: "Web Development Intern",
    company: "Webiizy Solutions",
    period: "Mar 2026 – Present",
    bullets: [
      "Built the official company website end-to-end",
      "React · TypeScript · Tailwind · Vite",
      "Responsive UI and clean GitHub workflow",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "AERODIP Private Limited",
    period: "Jun 2026 – Jul 2026",
    bullets: [
      "Contributed to YugaiPay and DITERNOX products",
      "Converted Figma designs into production-ready interfaces",
      "Built reusable components with React, TypeScript, Tailwind & Vite",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Experience"
        title={<>Where I've <span className="gradient-text">shipped</span></>}
      />

      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue/50 via-brand-purple/50 to-transparent sm:left-5" />
          <div className="space-y-6">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 sm:pl-16"
              >
                <div className="absolute left-0 top-3 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple glow-purple sm:h-11 sm:w-11">
                  <Briefcase size={16} className="text-white" />
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                      <p className="text-sm text-brand-purple">{e.company}</p>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-purple" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
