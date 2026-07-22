import { motion } from "motion/react";
import { ArrowUpRight, Github, BookOpen } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative overflow-hidden rounded-3xl glass p-1 transition-all hover:-translate-y-1"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.3xl)-4px)] bg-[#0e0e12] p-7">
        <div className={`relative mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br ${project.accent} p-[1px]`}>
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0b0b0f]">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl font-black text-white/10 transition-transform duration-700 group-hover:scale-110">
                {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
              </span>
            </div>
            <div className="absolute bottom-3 left-3 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              {project.category}
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold">{project.title}</h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        {project.features.length > 0 && (
          <ul className="mt-5 grid grid-cols-2 gap-1.5">
            {project.features.slice(0, 6).map((f) => (
              <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105"
            >
              <ArrowUpRight size={14} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium text-foreground transition-all hover:glass-strong"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium text-foreground transition-all hover:glass-strong"
            >
              <BookOpen size={14} /> Case Study
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
