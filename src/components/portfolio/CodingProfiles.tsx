import { motion } from "motion/react";
import { Github, Trophy, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PROFILES = [
  { name: "CodeChef", icon: Trophy, handle: "breezycape13", url: "https://www.codechef.com/users/breezycape13" },
  { name: "GeeksforGeeks", icon: Terminal, handle: "abhaykdw3e", url: "https://www.geeksforgeeks.org/user/abhaykdw3e/" },
  { name: "GitHub", icon: Github, handle: "@Abhaykk615", url: "https://github.com/Abhaykk615" },
];

export function CodingProfiles() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Coding profiles"
        title={<>Find me <span className="gradient-text">online</span></>}
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5">
        {PROFILES.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center gap-3 rounded-2xl glass p-6 text-center transition-colors hover:glass-strong"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-blue transition-all group-hover:scale-110 group-hover:from-brand-blue group-hover:to-brand-purple group-hover:text-white">
              <p.icon size={22} />
            </div>
            <div>
              <div className="font-display text-sm font-semibold">{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.handle}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
