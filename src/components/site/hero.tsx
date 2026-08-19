import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Sparkles } from "lucide-react";
import portrait from "../../../IMG_20260807_130024.png";
import resume from "../../../SRI RENESH_ (1).pdf";
import { MagneticButton, Particles } from "./primitives";

const NAV = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Process", "#process"],
  ["Contact", "#contact"],
] as const;

export function Nav() {
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const [isCompact, setIsCompact] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastY.current;
    const delta = latest - previous;

    if (latest > 56 && !isCompact) {
      setIsCompact(true);
    }
    if (latest <= 56 && isCompact) {
      setIsCompact(false);
    }

    if (latest > 140 && delta > 2 && !isHidden) {
      setIsHidden(true);
    }
    if ((delta < -2 || latest < 120) && isHidden) {
      setIsHidden(false);
    }

    lastY.current = latest;
  });

  return (
    <motion.header
      animate={{ y: isHidden ? -96 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 26, mass: 0.9 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8"
    >
      <motion.nav
        layout
        animate={{
          maxWidth: isCompact ? 896 : 1152,
          paddingLeft: isCompact ? 16 : 20,
          paddingRight: isCompact ? 16 : 20,
          paddingTop: isCompact ? 10 : 12,
          paddingBottom: isCompact ? 10 : 12,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.9 }}
        className="glass mx-auto flex items-center justify-between gap-4 rounded-full"
      >
        <a href="#top" className="flex min-w-0 shrink-0 items-center gap-3 whitespace-nowrap">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-copper-gradient text-xs font-bold text-primary-foreground">
            SR
          </span>
          <motion.span
            animate={{ fontSize: isCompact ? 12 : 14, letterSpacing: isCompact ? "0.24em" : "0.3em" }}
            transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.9 }}
            className="truncate font-condensed tracking-[0.3em] text-muted-foreground"
          >
            SRI RENESH
          </motion.span>
        </a>
        <div className="flex items-center gap-4 sm:gap-5">
          <motion.ul
            className="hidden items-center gap-7 whitespace-nowrap text-sm text-muted-foreground lg:flex"
          >
            {NAV.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
          <motion.a
            href="#contact"
            animate={{
              paddingLeft: isCompact ? 18 : 20,
              paddingRight: isCompact ? 18 : 20,
              paddingTop: isCompact ? 6 : 8,
              paddingBottom: isCompact ? 6 : 8,
              fontSize: isCompact ? 11 : 12,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.9 }}
            className="shrink-0 rounded-full bg-copper-gradient font-semibold uppercase tracking-widest text-primary-foreground"
          >
            Hire me
          </motion.a>
        </div>
      </motion.nav>
    </motion.header>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-screen items-center overflow-hidden px-4 pb-24 pt-32 sm:px-8"
    >
      <div className="halo pointer-events-none absolute -right-40 top-0 h-[820px] w-[820px] animate-halo-pulse" />
      <div className="halo pointer-events-none absolute -left-60 bottom-0 h-[600px] w-[600px] opacity-40" />
      <Particles />

      <motion.div
        style={{ y: yText, opacity: fade }}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs tracking-widest text-muted-foreground"
          >


          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="display mt-7 text-[clamp(2.6rem,7.4vw,6.2rem)]"
          >
            SRI
            <br />
            <span className="text-gradient">RENESH M</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="mt-6 font-condensed text-lg tracking-[0.22em] text-primary sm:text-xl"
          >

          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.38 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            I’m Sri Renesh, a data-focused professional with hands-on experience in machine learning,
            data analytics, data visualization and web-based product work. I combine Python, SQL,
            Power BI, React and TypeScript to turn raw data into solutions that are practical,
            measurable and easy to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work">
              View Projects <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={resume} download="Sri-Renesh-Resume.pdf" variant="ghost">
              Resume <ArrowDownToLine className="h-4 w-4" />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div style={{ y: yImg }} className="relative mx-auto w-full max-w-sm">
          <div className="halo absolute -inset-10 animate-halo-pulse" />
          <div className="glow-ring relative aspect-square overflow-hidden rounded-full border border-primary/40 p-[3px]">
            <div className="h-full w-full overflow-hidden rounded-full bg-copper-gradient p-[2px]">
              <img
                src={portrait}
                alt="Portrait of Sri Renesh, data scientist and data analyst"
                width={1024}
                height={1024}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="glass animate-float-slow absolute -left-6 bottom-10 rounded-2xl px-5 py-3">
            <p className="display text-2xl text-gradient">4+</p>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Projects built
            </p>
          </div>
          <div className="glass animate-float-slow absolute -right-2 top-8 rounded-2xl px-5 py-3">
            <p className="display text-2xl text-gradient">85%+</p>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Accuracy achieved
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
