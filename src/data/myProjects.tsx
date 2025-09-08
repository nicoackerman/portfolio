import {
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiAstro,
  SiHtml5,
  SiNodedotjs,
  SiPnpm,
  SiExpress,
} from "react-icons/si";

const MY_PROJECTS = [
  {
    name: "Whatsapp Clone",
    img: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    repoLink: "https://github.com/nicoackerman/whatsapp-clone",
    pageLink: "https://incomparable-entremet-4adec4.netlify.app/",
    description:
      "A simple and functional WhatsApp clone application built using the T3 Stack.",
    stack: [
      SiNextdotjs,
      SiPrisma,
      SiTailwindcss,
      SiTrpc,
      SiTypescript,
      SiJavascript,
      SiCss3,
    ],
  },
  {
    name: "Cosmos Landing Page",
    img: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    repoLink: "https://github.com/nicoackerman/cosmos-landing-page",
    pageLink: "https://cosmos-landing-page.vercel.app/",
    description:
      "A personal portfolio project for a visually attractive, responsive landing page with a space exploration theme.",
    stack: [SiAstro, SiHtml5, SiCss3, SiNodedotjs, SiPnpm],
  },
  {
    name: "Mathematical Theorem Generator API",
    img: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    repoLink: "https://github.com/nicoackerman/mathematical-theorem-api-rest",
    pageLink: "https://mathematical-theorem-api-rest.onrender.com/",
    description:
      "A REST API that serves information about mathematical theorems.",
    stack: [SiNodedotjs, SiExpress, SiPnpm],
  },
];

export default MY_PROJECTS;
