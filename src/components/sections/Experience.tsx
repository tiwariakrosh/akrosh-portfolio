import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Front-End Developer (Freelance)",
    company: "Independent Contractor",
    type: "Freelance",
    period: "Sept 2025 — Present",
    description:
      "Developed a complete Inventory Management System for a local retail business — including product management, stock monitoring, sales reporting, role-based dashboards with real-time stock updates, and CSV export. Independently handled the full development lifecycle from requirement analysis to deployment.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "React Query",
      "Zustand",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Youngminds Creation Pvt. Ltd.",
    type: "Full Time",
    period: "Apr 2025 — Present",
    description:
      "Led front-end development of the SME Portal, overseeing project execution, scalability, and delivery. Implemented CI/CD pipelines using GitHub Actions to automate testing, building, and deployment. Also contributed to the NHRC Research Portal, building responsive UIs with seamless API integration.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Shadcn/ui",
      "Mantine UI",
      "React Query",
      "GitHub Actions",
      "Jenkins",
      "Docker",
    ],
  },
  {
    role: "Frontend Developer (Part Time)",
    company: "7Secondsolar",
    type: "Part Time",
    period: "Nov 2024 — Apr 2025",
    description:
      "Implemented Storybook testing to ensure consistent UI components. Built and maintained a design system with reusable UI components in Next.js for scalable development. Collaborated with stakeholders to analyze and implement requirements accurately.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Zustand",
      "Storybook",
      "Jest",
    ],
  },
  {
    role: "React.js Developer",
    company: "E-Signature Pvt. Ltd.",
    type: "Full Time",
    period: "Oct 2023 — Apr 2025",
    description:
      "Developed interactive user interfaces with ReactJS and NextJS. Built and maintained a monorepo project structure for efficient code management. Integrated multiple backend endpoints, ensured responsiveness, cross-browser compatibility, and optimized performance throughout.",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Shadcn/ui",
      "Redux Toolkit",
      "Zustand",
      "MUI",
      "React Query",
    ],
  },
  {
    role: "React.js Developer",
    company: "Digi Hub",
    type: "Full Time",
    period: "Sept 2022 — Oct 2023",
    description:
      "Contributed to the development of Thaili — a digital wallet launched by Nepal Investment Bank Ltd. (NIBL). Built high-performance, responsive components and ensured cross-platform compatibility with optimized front-end solutions.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    role: "Front-End Developer",
    company: "Hopkins IT Lab",
    type: "Full Time",
    period: "Sept 2021 — Aug 2022",
    description:
      "Developed and maintained multiple e-commerce websites, ensuring seamless user experiences. Implemented on-page SEO techniques resulting in improved search engine rankings.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  },
  {
    role: "Front-End Intern",
    company: "Abhiyantrik Technology",
    type: "Internship",
    period: "Dec 2019 — Mar 2020",
    description:
      "Gained exposure to professional software development workflows and collaborated within a team environment under experienced mentorship.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const typeColors: Record<string, string> = {
  Freelance: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  "Full Time": "text-blue-500 bg-blue-500/10 border-blue-500/20",
  "Part Time": "text-amber-500 bg-amber-500/10 border-amber-500/20",
  Internship: "text-purple-500 bg-purple-500/10 border-purple-500/20",
};

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
              Career
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">Work Experience</h3>
          </div>

          <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-8 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="relative pl-8 md:pl-0"
                data-testid={`exp-item-${index}`}
              >
                <div className="absolute -left-[8px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_var(--color-background)]" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-1 gap-2">
                  <h4 className="text-lg font-bold leading-snug">{exp.role}</h4>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full border ${typeColors[exp.type]}`}
                    >
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground px-3 py-1 bg-muted rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="text-primary font-medium text-sm mb-3">
                  {exp.company}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-10 border-t border-border"
          >
            <h4 className="text-sm font-mono text-primary tracking-wider uppercase mb-6">
              Education
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-bold text-lg">
                  B.Sc. in Computer Science and Information Technology (CSIT)
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Tribhuvan University, Nepal
                </p>
              </div>
              {/* <span className="text-xs font-mono text-muted-foreground px-3 py-1 bg-muted rounded-full w-fit shrink-0">
                Nov 2015 — Jul 2020
              </span> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
