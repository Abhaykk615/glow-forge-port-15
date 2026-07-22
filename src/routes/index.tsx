import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { EducationAchievements } from "@/components/portfolio/EducationAchievements";
import { CodingProfiles } from "@/components/portfolio/CodingProfiles";
import { Contact } from "@/components/portfolio/Contact";
import { Footer, BackToTop } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhay Kumar — Software Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Abhay Kumar, a software engineer building scalable, production-ready web apps with React, Next.js, TypeScript and Node.js.",
      },
      { property: "og:title", content: "Abhay Kumar — Software Engineer" },
      {
        property: "og:description",
        content:
          "Scalable, responsive, production-ready web applications built with React, Next.js, TypeScript and Node.js.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <EducationAchievements />
      <CodingProfiles />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
