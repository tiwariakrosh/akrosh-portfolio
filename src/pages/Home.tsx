import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-6 text-center text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm">
            <span className="text-primary">&lt;</span>Akrosh
            <span className="text-primary">/&gt;</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Akrosh Tiwari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
