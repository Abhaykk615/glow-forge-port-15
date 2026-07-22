import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const CONTACTS = [
  { icon: Mail, label: "Email", value: "abhay@example.com", href: "mailto:abhay@example.com" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: Linkedin, label: "LinkedIn", value: "in/abhaykumar", href: "#" },
  { icon: Github, label: "GitHub", value: "@abhaykumar", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's build <span className="gradient-text">something</span></>}
        description="Have a role, project, or idea in mind? My inbox is open."
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:glass-strong hover:-translate-y-0.5"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-blue group-hover:from-brand-blue group-hover:to-brand-purple group-hover:text-white">
                <c.icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="truncate text-sm font-medium">{c.value}</div>
              </div>
            </motion.a>
          ))}
          <div className="flex items-center gap-3 rounded-2xl glass p-5">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-purple">
              <MapPin size={18} />
            </div>
            <div className="text-sm text-muted-foreground">Based in India · Open to remote</div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="glass-strong rounded-3xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Name
              </span>
              <input
                required
                type="text"
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple/60 focus:bg-white/10"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <input
                required
                type="email"
                placeholder="jane@company.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple/60 focus:bg-white/10"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Subject
            </span>
            <input
              type="text"
              placeholder="Let's talk about..."
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple/60 focus:bg-white/10"
            />
          </label>
          <label className="mt-4 block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </span>
            <textarea
              required
              rows={5}
              placeholder="Tell me a bit about the project..."
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple/60 focus:bg-white/10"
            />
          </label>
          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] glow-purple sm:w-auto"
          >
            {sent ? "Message sent ✓" : "Send message"}
            {!sent && (
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
