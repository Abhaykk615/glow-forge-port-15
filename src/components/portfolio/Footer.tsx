import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-lg glow-purple transition-transform hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-[10px] font-black text-white">
            AK
          </span>
          Built with <span className="text-red-400">♥</span> by Abhay Kumar
        </div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} · All rights reserved
        </div>
      </div>
    </footer>
  );
}
