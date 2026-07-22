import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple" />
          {eyebrow}
        </span>
        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        {description && (
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        )}
      </motion.div>
    </div>
  );
}
