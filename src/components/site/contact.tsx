import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { MagneticButton, Reveal } from "./primitives";

export function CtaContact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-28 sm:px-8">
      <div className="halo pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 opacity-60" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="eyebrow">Let&apos;s work together</span>
          <h2 className="display mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,6.4vw,5.4rem)]">
            GET IN {" "}
            <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">

          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <form
              className="glass-card rounded-3xl p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Message sent — I'll reply within 24 hours.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" placeholder="What's this about?" />
              </div>
              <label className="mt-5 block">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="A few lines about the project…"
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </label>
              <div className="mt-8">
                <MagneticButton type="submit">
                  {sent ? "Message sent" : "Send message"} <Mail className="h-4 w-4" />
                </MagneticButton>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-6">
            <div className="glass-card rounded-3xl p-8">
              <p className="eyebrow">Direct</p>
              <a
                href="mailto:manisree161@gmail.com"
                className="display mt-4 block text-2xl transition-colors hover:text-primary"
              >
                manisree161@gmail.com
              </a>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> +91 98945 67704
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Coimbatore, Tamil Nadu
              </p>
            </div>
            <div className="glass-card rounded-3xl p-8">
              <p className="eyebrow">Elsewhere</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/Srirenesh" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
                  { icon: Mail, label: "Email", href: "mailto:manisree161@gmail.com" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-widest transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <s.icon className="h-3.5 w-3.5" /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
      />
    </label>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <p className="min-w-0 truncate font-condensed text-sm tracking-[0.3em] text-muted-foreground">
          SRI RENESH © 2026
        </p>
        <a
          href="#top"
          className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
