import { BsDatabase } from "react-icons/bs";
import whatsappClone from "../../public/images/whatsapp-clone.png";
import api from "../../public/images/api.png";
import cosmosLanding from "../../public/images/cosmos-landing.png";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiCss3,
  SiAstro,
  SiHtml5,
  SiNodedotjs,
  SiPnpm,
  SiExpress,
  SiShadcnui,
} from "react-icons/si";

const MY_PROJECTS = [
  {
    name: "Whatsapp Clone",
    img: whatsappClone,
    repoLink: "https://github.com/nicoackerman/whatsapp-clone",
    pageLink: "https://incomparable-entremet-4adec4.netlify.app/",
    description:
      "A simple and functional WhatsApp clone application built using the T3 Stack.",
    stack: [SiNextdotjs, BsDatabase, SiTailwindcss, SiTypescript, SiShadcnui],
  },
  {
    name: "Cosmos Landing Page",
    img: cosmosLanding,
    repoLink: "https://github.com/nicoackerman/cosmos-landing-page",
    pageLink: "https://cosmos-landing-page.vercel.app/",
    description:
      "A personal portfolio project for a visually attractive, responsive landing page with a space exploration theme.",
    stack: [SiAstro, SiHtml5, SiCss3, SiPnpm],
  },
  {
    name: "Mathematical Theorem Generator API",
    img: api,
    repoLink: "https://github.com/nicoackerman/mathematical-theorem-api-rest",
    pageLink: "https://mathematical-theorem-api-rest.onrender.com/",
    description:
      "A REST API that serves information about mathematical theorems.",
    stack: [SiNodedotjs, SiExpress, SiPnpm],
  },
];

export default MY_PROJECTS;
