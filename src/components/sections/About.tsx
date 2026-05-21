import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import MyImage from "/assets/me-programmer.png";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src={MyImage}
                alt="Profile Picture"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            <div>
              <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold">
                Hi, I'm Akrosh Tiwari.
              </h3>
            </div>

            <div className="text-muted-foreground space-y-4 text-lg">
              <p>
                A results-driven Front-End Developer with 4+ years of experience
                specializing in React.js, Next.js, and modern web technologies.
                I've built SaaS platforms, SME portals, digital wallet systems,
                e-commerce dashboards, telephony solutions, and reusable design
                systems.
              </p>
              <p>
                I'm passionate about translating business requirements into
                clean, maintainable, and user-friendly interfaces — from
                pixel-perfect UI to robust CI/CD pipelines and monorepo
                architectures.
              </p>
              <p>
                Beyond code, I care deeply about developer experience: enforcing
                strict standards, maintaining scalable codebases, and leaving
                every project better than I found it.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:metiwariakrosh02@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
                data-testid="link-about-email"
              >
                <Mail className="w-4 h-4 text-primary" />
                metiwariakrosh02@gmail.com
              </a>
              <a
                href="tel:+9779861498184"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
                data-testid="link-about-phone"
              >
                <Phone className="w-4 h-4 text-primary" />
                +977-9861498184
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Kathmandu, Nepal
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border mt-2">
              <div>
                <span className="block text-4xl font-bold text-foreground">
                  4+
                </span>
                <span className="text-sm font-mono text-muted-foreground">
                  Years Exp
                </span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-foreground">
                  10+
                </span>
                <span className="text-sm font-mono text-muted-foreground">
                  Projects
                </span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-foreground">
                  6
                </span>
                <span className="text-sm font-mono text-muted-foreground">
                  Companies
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
