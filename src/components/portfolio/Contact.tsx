import { motion } from "motion/react";
import { useState, useRef, FormEvent, ChangeEvent, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Loader2 } from "lucide-react";
import { sendForm, init } from "@emailjs/browser";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";
import { SectionHeading } from "./SectionHeading";

// Replace these values with your exact credentials from the EmailJS Dashboard:
// 1. SERVICE_ID: Email Services tab -> Service ID
// 2. TEMPLATE_ID: Email Templates tab -> Template ID
// 3. PUBLIC_KEY: Account Settings -> API Keys -> Public Key
const SERVICE_ID = "service_zva5x2b";
const TEMPLATE_ID = "template_d76r9ee";
const PUBLIC_KEY = "OG1QMfl7op_XAmDZj";

const CONTACTS = [
  { icon: Mail, label: "Email", value: "abhaykk615@gmail.com", href: "mailto:abhaykk615@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8355083040", href: "tel:+918355083040" },
  { icon: Github, label: "GitHub", value: "@Abhaykk615", href: "https://github.com/Abhaykk615" },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (PUBLIC_KEY) {
      init({ publicKey: PUBLIC_KEY });
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;
    if (!formRef.current) return;

    setLoading(true);

    try {
      await sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setSent(true);
      toast.success("Message sent successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      if (error?.status === 404) {
        toast.error("EmailJS Account or Service not found. Please check your credentials.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Toaster position="bottom-right" />
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
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
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
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
              name="subject"
              value={formData.subject}
              onChange={handleChange}
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
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about the project..."
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple/60 focus:bg-white/10"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] glow-purple sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : sent ? (
              "Message sent ✓"
            ) : (
              <>
                Send message
                <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
