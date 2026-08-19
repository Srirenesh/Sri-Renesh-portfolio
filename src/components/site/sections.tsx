import {
  Award,
  Boxes,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Github,
  ExternalLink,
  GraduationCap,
  LineChart,
  Rocket,
  Search,
  ServerCog,
  Sparkles,
  Trophy,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";
import { Counter, Reveal, SectionHeading } from "./primitives";

/* ---------------------------------- About --------------------------------- */

const STATS = [
  { to: 4, suffix: "+", label: "Projects delivered" },
  { to: 8, suffix: "+", label: "ML techniques applied" },
  { to: 1, suffix: "", label: "Internship completed" },
  { to: 9, suffix: "+", label: "Certifications" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Exploring data. Solving problems <span className="text-gradient">Creating impact.</span>
            </>
          }
        />
        <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m Sri Renesh — a motivated and detail-oriented fresher with hands-on experience in
            machine learning, data visualization and data analytics. I completed an internship as a
            Data Scientist at Stelaraa, where I worked with real-world datasets and applied
            analytical methods to practical problems.
          </p>
          <p>
            My work focuses on turning data into actionable decisions through Python, SQL, Power BI,
            machine learning and thoughtful product thinking. I enjoy building solutions that are not
            just accurate, but also understandable and useful for the people who rely on them.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {STATS.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-6">
                <Counter to={s.to} suffix={s.suffix} />
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Projects -------------------------------- */

const PROJECTS = [
  {
    name: "Smart Farm AI",
    year: "2025",
    blurb:
      "Built an AI-based smart farming system that monitored 5+ agricultural parameters to improve productivity and support irrigation and crop planning decisions.",
    tags: ["Python", "Machine Learning", "Data Analytics", "GitHub"],
    icon: Sparkles,
  },
  {
    name: "EcoRoute-AI",
    year: "2025",
    blurb:
      "Developed a sustainable route optimization platform that recommended eco-friendly travel paths and integrated real-time route data with a responsive web interface.",
    tags: ["React", "TypeScript", "ML", "API Integration"],
    icon: Workflow,
  },
  {
    name: "Crime Data Analysis and Visualization",
    year: "2024",
    blurb:
      "Analyzed 50,000+ crime records across 28 Indian states and built visualizations that highlighted high-risk regions and public-safety patterns.",
    tags: ["Python", "Pandas", "Matplotlib", "Visualization"],
    icon: LineChart,
  },
  {
    name: "Job Market Predictions in Python",
    year: "2024",
    blurb:
      "Conducted predictive analysis on 5,000+ job listings to uncover salary patterns, hiring trends and in-demand skills across industries.",
    tags: ["Python", "Pandas", "Data Analysis", "Insights"],
    icon: Database,
  },
];

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Featured projects"
        title={
          <>
            Selected <span className="text-gradient">work.</span>
          </>
        }
        lead="Five builds that best represent how I think about intelligent products — research first, shipped second, measured always."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06} className={i === 4 ? "md:col-span-2" : ""}>
            <article className="glass-card group h-full rounded-3xl p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-copper-gradient text-primary-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="display truncate text-2xl sm:text-3xl">{p.name}</h3>
                </div>
                <span className="font-condensed text-sm tracking-[0.25em] text-muted-foreground">
                  {p.year}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="glass rounded-full px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-widest transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" /> Source
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-copper-gradient px-5 py-2.5 text-xs uppercase tracking-widest text-primary-foreground"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live demo
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Skills --------------------------------- */

const SKILLS = [
  { name: "Python Programming", value: 95 },
  { name: "Machine Learning", value: 95 },
  { name: "SQL & Data Analytics", value: 98 },
  { name: "Power BI & Visualization", value: 90 },
  { name: "NLP & Data Science", value: 96 },
  { name: "Canva Designing", value: 90 },
  { name: "microsoft excel", value: 95 },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            The toolkit behind <span className="text-gradient">the work.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-x-14 gap-y-9 md:grid-cols-2">
        {SKILLS.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.05}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
              <p className="min-w-0 truncate text-sm text-foreground">{s.name}</p>
              <span className="font-condensed text-sm tracking-widest text-primary">
                {s.value}%
              </span>
            </div>
            <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-copper-gradient"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Experience ------------------------------- */

const TIMELINE = [
  {
    role: "Data Scientist Intern",
    org: "Stelaraa",
    period: "2025 — Internship",
    text: "Gained hands-on exposure to 5+ machine learning models and data visualization tools while contributing to real-world analytics projects.",
  },
  {
    role: "Data Science & Analytics Projects",
    org: "Independent Portfolio",
    period: "2024 — 2025",
    text: "Built projects around smart farming, route optimization, crime analytics and job market prediction using Python, SQL, Power BI and ML workflows.",
  },
  {
    role: "B.Sc. Computer Science with Data Analytics",
    org: "Sri Ramakrishna College of Arts & Science",
    period: "2023 — 2026",
    text: "Built a strong academic foundation in computing, analytics, statistics and practical data science methods while completing project-based coursework.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            A career built in <span className="text-gradient">layers.</span>
          </>
        }
      />
      <div className="relative mt-14 pl-8 sm:pl-12">
        <div className="absolute left-[7px] top-2 h-full w-px bg-copper-gradient opacity-50 sm:left-[11px]" />
        {TIMELINE.map((t, i) => (
          <Reveal key={t.role} delay={i * 0.07} className="relative pb-12 last:pb-0">
            <span className="glow-ring absolute -left-8 top-2 h-4 w-4 rounded-full bg-copper-gradient sm:-left-12" />
            <p className="font-condensed text-sm tracking-[0.28em] text-primary">{t.period}</p>
            <h3 className="display mt-2 text-2xl sm:text-3xl">{t.role}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Achievements ------------------------------ */

const ACHIEVEMENTS = [
  { icon: Trophy, title: "Runner-Up — Stathaton 2025–2026", note: "All India Level Competition" },
  { icon: Award, title: "National Level Israel Hackathon", note: "Sri Ramakrishna College of Engineering" },
  { icon: GraduationCap, title: "B.Sc. Computer Science with Data Analytics", note: "2023 — 2026" },
  { icon: BrainCircuit, title: "Certified Python Associate", note: "Accredion.org" },
];

export function Achievements() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Achievements"
        title={
          <>
            Recognition along <span className="text-gradient">the way.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <div className="glass-card h-full rounded-3xl p-7">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-copper-gradient text-primary-foreground">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-base font-semibold leading-snug">{a.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {a.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Tech stack ------------------------------- */

const TECH = [
  "Python",
  "SQL",
  "Power BI",
  "Pandas",
  "Matplotlib",
  "Scikit-learn",
  "NLP",
  "Excel",
  "Canva",
  "React",
  "TypeScript",
  "GitHub",
  "Data Visualization",
  "Machine Learning",
  "Big Data Analytics",
];

export function TechStack() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title={
            <>
              Tools I reach for <span className="text-gradient">every day.</span>
            </>
          }
          align="center"
        />
      </div>
      <div className="relative mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="glass animate-float-slow whitespace-nowrap rounded-2xl px-7 py-4 font-condensed text-lg tracking-[0.18em] text-muted-foreground"
              style={{ animationDelay: `${(i % 6) * 0.4}s` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Process -------------------------------- */

const PROCESS = [
  { icon: Search, title: "Research", text: "Understand the domain, the data and the real decision being made." },
  { icon: Database, title: "Data", text: "Collect, clean and model the pipeline that everything else depends on." },
  { icon: BrainCircuit, title: "Modelling", text: "Baseline fast, iterate honestly, evaluate against what matters." },
  { icon: Boxes, title: "Interface", text: "Wrap the intelligence in a product people can trust and operate." },
  { icon: Rocket, title: "Deployment", text: "Ship, monitor drift, and keep improving with real-world feedback." },
];

export function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Development process"
        title={
          <>
            Five steps, <span className="text-gradient">every time.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <div className="glass-card h-full rounded-3xl p-7">
              <span className="font-condensed text-4xl text-gradient">0{i + 1}</span>
              <p.icon className="mt-6 h-5 w-5 text-primary" />
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- Certifications ----------------------------- */

const CERTIFICATIONS = [
  {
    title: "Data Mining and Data Warehousing",
    issuer: "TCS iON",
    icon: Database,
  },
  {
    title: "Data Modeling and Data Visualization",
    issuer: "TCS iON",
    icon: LineChart,
  },
  {
    title: "Big Data Analytics",
    issuer: "TCS iON",
    icon: Cpu,
  },
  {
    title: "Exploratory Data Analysis",
    issuer: "Infosys Springboard",
    icon: Search,
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Infosys Springboard",
    icon: Cloud,
  },
  {
    title: "Natural Language Processing for Developers",
    issuer: "Infosys",
    icon: BrainCircuit,
  },
  {
    title: "SQL and Relational Database",
    issuer: "IBM",
    icon: ServerCog,
  },
  {
    title: "Data Analytics & Job Simulation",
    issuer: "Accenture",
    icon: Workflow,
  },
  {
    title: "Certified Python Associate (CPA)",
    issuer: "Accredion.org",
    icon: Award,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Certifications"
        title={
          <>
            Professional <span className="text-gradient">credentials.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <div className="glass-card h-full rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-copper-gradient text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-base font-semibold leading-snug">{c.title}</h3>
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground font-condensed">
                {c.issuer}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


