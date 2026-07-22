export type Project = {
  slug: string;
  title: string;
  category: "Full Stack" | "Frontend" | "Game" | "UI";
  tech: string[];
  description: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  accent: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
    description:
      "AI-powered full stack resume generation platform with authentication, scalable backend APIs, and optimized database architecture.",
    features: [
      "AI Resume Generation",
      "User Authentication",
      "Scalable REST APIs",
      "MongoDB Storage",
      "Responsive Design",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-brand-blue to-brand-purple",
    featured: true,
  },
  {
    slug: "yugaipay",
    title: "YugaiPay",
    category: "Frontend",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    description:
      "Production-ready fintech frontend built from Figma. Reusable UI components, dashboards, and responsive financial modules.",
    features: [
      "Pixel-perfect Figma to Code",
      "Reusable Component Library",
      "Financial Dashboards",
      "Responsive Layouts",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-brand-purple to-brand-blue",
    featured: true,
  },
  {
    slug: "cpier",
    title: "CPier",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    description:
      "Unified coding profile dashboard aggregating LeetCode, CodeChef and GeeksforGeeks statistics into a single view.",
    features: [
      "Multi-platform Aggregation",
      "Realtime Stats",
      "Auth & Profiles",
      "REST APIs",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-brand-blue to-brand-purple",
    featured: true,
  },
  {
    slug: "ai-notepad",
    title: "AI Notepad",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    description:
      "Secure note management application with AI-powered summarization and smart search across your knowledge base.",
    features: [
      "AI Summarization",
      "Smart Search",
      "Secure Auth",
      "Cloud Sync",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-brand-purple to-brand-blue",
    featured: true,
  },
  {
    slug: "studysync",
    title: "StudySync – Task Management",
    category: "Full Stack",
    tech: ["React", "Firebase", "REST APIs"],
    description:
      "Full-stack task management application with secure authentication, protected routes, and persistent cloud storage using Firebase.",
    features: [
      "User Authentication",
      "Protected Routes",
      "CRUD Operations",
      "Firebase Database",
      "Task Management",
      "Responsive Design",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-brand-blue to-brand-purple",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Frontend",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
    description:
      "Modern, fully responsive personal portfolio showcasing projects, skills, experience, and achievements with premium animations.",
    features: [
      "Modern Responsive Design",
      "Dark/Light Theme",
      "Smooth Animations",
      "Contact Form (EmailJS)",
      "SEO Optimized",
      "Fast Performance",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-brand-purple to-brand-blue",
  },
  {
    slug: "interactive-recipe-card",
    title: "Interactive Recipe Card",
    category: "UI",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Interactive recipe card with animated transitions, expandable ingredients and cooking steps, built-in timers, and responsive design.",
    features: [
      "Interactive UI",
      "DOM Manipulation",
      "Smooth Animations",
      "Ingredient Toggle",
      "Cooking Timer",
      "Responsive Design",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-brand-blue to-brand-purple",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe Game",
    category: "Game",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive two-player Tic-Tac-Toe browser game with complete win, draw, restart, and game state management.",
    features: [
      "Two Player Mode",
      "Win Detection",
      "Draw Detection",
      "Restart Game",
      "Responsive UI",
      "Clean JS Logic",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-brand-purple to-brand-blue",
  },
];

export const TECH_FILTERS = [
  "All",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Firebase",
  "HTML/CSS",
] as const;

export function matchesTech(project: Project, filter: string): boolean {
  if (filter === "All") return true;
  if (filter === "HTML/CSS") {
    return project.tech.some((t) => t === "HTML" || t === "CSS");
  }
  if (filter === "JavaScript") {
    return project.tech.some((t) => t === "JavaScript");
  }
  return project.tech.includes(filter);
}
