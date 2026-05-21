import { motion } from "framer-motion";
import { Layers, Server } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiReactquery,
  SiFigma,
  SiMui,
  SiZod,
  SiGit,
  SiGithubactions,
  SiJenkins,
  SiDocker,
  SiStorybook,
  SiJest,
  SiPostman,
  SiMongodb,
} from "react-icons/si";

type SkillIcon = React.ComponentType<{
  className?: string;
  style?: React.CSSProperties;
}>;

interface Skill {
  name: string;
  icon: SkillIcon;
  color: string;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Sass / SCSS", icon: SiSass, color: "#CC6699" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    label: "State & Data",
    skills: [
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Zustand", icon: Layers, color: "#7C3AED" },
      { name: "React Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Zod", icon: SiZod, color: "#3068B7" },
    ],
  },
  {
    label: "UI & Design",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    label: "Dev & DevOps",
    skills: [
      { name: "Git / GitHub", icon: SiGit, color: "#F05032" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    label: "Backend Familiarity",
    skills: [
      { name: "Node.js", icon: Server, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
            Technical Arsenal
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Tools of the trade
          </h3>
          <p className="text-muted-foreground text-lg">
            4+ years of hands-on expertise across the modern frontend ecosystem
            — from pixel-perfect UI to CI/CD pipelines.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h4 className="font-mono text-xs text-primary tracking-widest uppercase">
                  {category.label}
                </h4>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.05 + index * 0.04,
                      }}
                      className="group relative flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 transition-all duration-200 cursor-default"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: skill.color }}
                      />
                      <Icon
                        className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="font-medium text-sm text-foreground whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
