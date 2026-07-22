import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title={<>Featured <span className="gradient-text">projects</span></>}
        description="A few things I've designed, built, and shipped over the last year."
      />

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center px-4">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
        >
          View all projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
