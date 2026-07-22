import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer, BackToTop } from "@/components/portfolio/Footer";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { PROJECTS, TECH_FILTERS, matchesTech } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Abhay Kumar" },
      {
        name: "description",
        content:
          "Full catalog of projects by Abhay Kumar — full stack, frontend, and interactive web applications built with React, Next.js, TypeScript, Node.js and more.",
      },
      { property: "og:title", content: "Projects — Abhay Kumar" },
      {
        property: "og:description",
        content:
          "Browse all projects by Abhay Kumar, filtered by technology and framework.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const visible = PROJECTS.filter((p) => matchesTech(p, filter));

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-foreground">
      <Navbar />

      <section className="relative pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>

          <div className="mt-6 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple" />
              All projects
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Everything I've <span className="gradient-text">built</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              A growing collection of full stack, frontend and interactive projects. Filter by the
              technology you care about.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {TECH_FILTERS.map((f) => (
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

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {visible.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-16 text-center text-sm text-muted-foreground">
              No projects match that filter yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
