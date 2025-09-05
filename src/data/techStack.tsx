import {
  SiAstro,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsTerminalFill } from "react-icons/bs";

const techStack = {
  fronted: [
    { Icon: SiNextdotjs, skill: "Next" },
    { Icon: SiJavascript, skill: "JavaScript" },
    { Icon: SiTypescript, skill: "TypeScript" },
    { Icon: SiTailwindcss, skill: "Tailwind" },
    { Icon: SiAstro, skill: "Astro" },
    { Icon: SiShadcnui, skill: "Shadcn" },
  ],
  backend: [
    { Icon: SiExpress, skill: "Express" },
    { Icon: SiNodedotjs, skill: "Node" },
  ],
  databases: [{ Icon: SiMysql, skill: "MySQL" }],
  tools: [
    { Icon: SiGit, skill: "Git" },
    { Icon: BsTerminalFill, skill: "Terminal" },
  ],
};

export default techStack;
