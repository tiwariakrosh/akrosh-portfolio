import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 dark:opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Crafting{" "}
          <span className="text-primary italic font-serif">digital</span>
          <br /> experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4"
        >
          Hi, I'm{" "}
          <span className="text-foreground font-semibold">Akrosh Tiwari</span> —
          a Front-End Developer with 4+ years of experience building scalable,
          responsive, and high-performance web applications using React.js,
          Next.js, and TypeScript.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono mb-10"
        >
          <MapPin className="w-3.5 h-3.5" />
          Kathmandu, Nepal
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 group"
            onClick={() => scrollTo("#projects")}
            data-testid="button-view-work"
          >
            View Work
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
            onClick={() => scrollTo("#contact")}
            data-testid="button-contact"
          >
            <Mail className="mr-2 w-4 h-4" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-muted-foreground/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
