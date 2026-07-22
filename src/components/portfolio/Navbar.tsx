import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-brand-coral"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 backdrop-blur-xl bg-[#0B0B0B]/70 border-b border-white/5" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Abhay<span className="text-brand-coral">.</span>Kumar
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative text-sm text-foreground/80 transition-colors hover:text-brand-coral"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-md border border-brand-coral/70 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-brand-coral/10 md:inline-flex"
          >
            Let's talk
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mt-3 rounded-2xl glass-strong p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-2 text-center text-sm font-medium text-white"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
