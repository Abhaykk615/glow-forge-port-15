import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PROJECTS = [
  {
    title: "AI Resume Builder",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
    description:
      "AI-powered full stack resume generation platform with authentication, scalable backend APIs, and optimized database architecture.",
    accent: "from-brand-blue to-brand-purple",
  },
  {
    title: "YugaiPay",
    category: "Frontend",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    description:
      "Production-ready fintech frontend built from Figma. Reusable UI components, dashboards, and responsive financial modules.",
    accent: "from-brand-purple to-brand-blue",
  },
  {
    title: "CPier",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    description:
      "Unified coding profile dashboard aggregating LeetCode, CodeChef and GeeksforGeeks statistics into a single view.",
    accent: "from-brand-blue to-brand-purple",
  },
  {
    title: "AI Notepad",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    description:
      "Secure note management application with AI-powered summarization and smart search across your knowledge base.",
    accent: "from-brand-purple to-brand-blue",
  },
];

const FILTERS = ["All", "Full Stack", "Frontend"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title={<>Recent <span className="gradient-text">projects</span></>}
        description="A few things I've designed, built, and shipped over the last year."
      />

      <div className="mx-auto mt-10 flex max-w-6xl justify-center gap-2 px-4 sm:px-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === f
                ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-2">
        {visible.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group relative overflow-hidden rounded-3xl glass p-1 transition-all hover:-translate-y-1"
          >
            <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-4px)] bg-[#0e0e12] p-7">
              {/* preview */}
              <div className={`relative mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} p-[1px]`}>
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0b0b0f]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20`} />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-black text-white/10 transition-transform duration-700 group-hover:scale-110">
                      {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <div className="flex gap-2">
                  <a
                    href="#"
                    aria-label={`${p.title} live demo`}
                    className="grid h-10 w-10 place-items-center rounded-full glass transition-all hover:glass-strong hover:text-brand-purple"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="#"
                    aria-label={`${p.title} GitHub`}
                    className="grid h-10 w-10 place-items-center rounded-full glass transition-all hover:glass-strong hover:text-brand-purple"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
