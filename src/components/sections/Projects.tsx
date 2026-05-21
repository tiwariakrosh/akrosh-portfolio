import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AakashTel",
    description:
      "An automated telephony solution with features like automated phone calls, versatile applications, political campaigns, easy CRM integration, a centralized phone number, stored call recordings, and automatic call routing.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop",
    tags: [
      "Next.js",
      "TypeScript",
      "Shadcn/ui",
      "Zustand",
      "React Query",
      "NextAuth",
    ],
    github: "https://github.com/akroshtiwari",
    demo: "https://aakashtel.com",
  },
  {
    title: "SME Portal",
    description:
      "A centralized digital platform strengthening the SME ecosystem by connecting enterprises, service providers, and public stakeholders. Provides access to business resources, analytics, and collaboration tools for SMEs.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: [
      "Next.js",
      "TypeScript",
      "Shadcn/ui",
      "Redux Toolkit",
      "React Query",
      "NextAuth",
    ],
    github: "#",
    demo: "https://udaya.koshi.gov.np/",
  },
  {
    title: "Shopo — Admin & Merchant Panel",
    description:
      "A merchant-only e-commerce platform supporting master product creation, product assignment to shops and branches, a messaging system, loyalty points program, RBAC (Role-Based Access Control), and Stripe payment integration.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Redux Toolkit",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Thaili Digital Wallet",
    description:
      "A digital wallet launched by Nepal Investment Bank Ltd. (NIBL) for secure and seamless financial transactions. Implemented core features including fund transfers, transaction history, and state management.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "RESTful APIs",
    ],
    github: "https://github.com/akroshtiwari",
    demo: "https://thaili.com.np",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
              Featured Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Selected projects
            </h3>
            <p className="text-muted-foreground text-lg">
              Real-world products built across fintech, SaaS, and enterprise
              platforms — each tackling complex UI and scale.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 w-fit" asChild>
            <a
              href="https://github.com/akroshtiwari"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github-archive"
            >
              View GitHub
              <Github className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`card-project-${index}`}
              className="group flex flex-col rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              {/* Image with hover overlay */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full shadow-lg gap-2"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-github-${index}`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button
                      size="sm"
                      className="rounded-full shadow-lg gap-2"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-demo-${index}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2 shrink-0 pt-0.5">
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`icon-github-${index}`}
                    >
                      <Github className="w-4 h-4" />
                    </a> */}
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`icon-demo-${index}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
