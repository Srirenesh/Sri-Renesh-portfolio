import { createFileRoute } from "@tanstack/react-router";
import { Hero, Nav } from "@/components/site/hero";
import { CustomCursor } from "@/components/site/primitives";
import {
  About,
  Achievements,
  Certifications,
  Experience,
  Process,
  Projects,
  Skills,
  TechStack,
} from "@/components/site/sections";
import { CtaContact, Footer } from "@/components/site/contact";

const TITLE = "Sri Renesh — Data Scientist, Data Analyst & Developer";
const DESC =
  "Portfolio of Sri Renesh: data scientist and data analyst building machine learning, analytics and web-based data experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Certifications />
      <TechStack />
      <Process />
      <CtaContact />
      <Footer />
    </main>
  );
}
