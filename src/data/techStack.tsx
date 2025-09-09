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
import { BsDatabase, BsTerminalFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

const _stack = {
  Fronted: [
    { Icon: SiNextdotjs, skill: "Next" },
    { Icon: FaReact, skill: "React" },
    { Icon: SiJavascript, skill: "JavaScript" },
    { Icon: SiTypescript, skill: "TypeScript" },
    { Icon: SiTailwindcss, skill: "Tailwind" },
    { Icon: SiAstro, skill: "Astro" },
    { Icon: SiShadcnui, skill: "Shadcn" },
  ],
  Backend: [
    { Icon: SiExpress, skill: "Express" },
    { Icon: SiNodedotjs, skill: "Node" },
    { Icon: BsDatabase, skill: "Convex" },
  ],
  Databases: [{ Icon: SiMysql, skill: "MySQL" }],
  Tools: [
    { Icon: SiGit, skill: "Git" },
    { Icon: BsTerminalFill, skill: "Terminal" },
  ],
};

const TECH_STACK = Object.entries(_stack);
export default TECH_STACK;
