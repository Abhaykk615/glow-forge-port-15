import { motion } from "motion/react";
import { Award, GraduationCap, Trophy, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ACHIEVEMENTS = [
  { icon: Trophy, text: "450+ DSA problems solved" },
  { icon: Award, text: "Oracle AI Foundations Certified" },
  { icon: Award, text: "Deloitte Virtual Internship" },
  { icon: CheckCircle2, text: "GFG 160 Days Challenge" },
  { icon: Trophy, text: "Core Coordinator · SCOIT Technical Club" },
];

export function EducationAchievements() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Education & wins"
        title={<>Foundations & <span className="gradient-text">milestones</span></>}
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl glass p-8"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-purple/40 blur-3xl" />
          <div className="relative">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple">
              <GraduationCap size={22} className="text-white" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold">Bachelor of Technology</h3>
            <p className="mt-1 text-muted-foreground">Information Technology</p>
            <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
              BIET Jhansi · AKTU
            </p>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">2022 – 2026</span>
              <span className="font-display text-3xl font-bold gradient-text">7.92</span>
            </div>
            <div className="mt-1 text-right text-xs uppercase tracking-widest text-muted-foreground">
              CGPA
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:glass-strong"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-purple">
                <a.icon size={18} />
              </div>
              <p className="text-sm font-medium text-foreground/90">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
