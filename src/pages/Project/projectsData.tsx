import { techIcons } from "../../assets/svg";
import { translations } from "../../translations/projects/translations";

export interface Project {
  id: string;
  title: string;
  year: string;
  githubLink: string;
  projectLink: string;
  role: string[];
  technologies: (keyof typeof techIcons)[];
  images: string[];
  mobileImages: string[];
  getTitle: (language: "en" | "pt-br") => string;
  getYearTitle: (language: "en" | "pt-br") => string;
  getCaseStudy: (language: "en" | "pt-br") => string;
  getDescription: (language: "en" | "pt-br") => string[];
  getViewGithubText: (language: "en" | "pt-br") => string;
  getViewProjectText: (language: "en" | "pt-br") => string;
  getProjectRole: (language: "en" | "pt-br") => string;
  getTech: (language: "en" | "pt-br") => string;
  getInProgressText: (language: "en" | "pt-br") => string;
}

export const projects: Project[] = [
  {
    id: "vetlink",
    title: "VETLINK",
    year: "2024",
    githubLink:
      "https://github.com/GabrielRogerioMessias/project-integrator-VI-vet-link",
    projectLink: "https://appetize.io/app/b_ggamvejhkgqipumggc6hzh67su",
    role: ["Front-end", "Back-end", "UX/UI", "App Design"],
    technologies: ["React", "TypeScript", "Firebase"],
    images: ["/portfolio/images/vetlink/1.jpg"],
    mobileImages: [
      "/portfolio/images/vetlink/2.png",
      "/portfolio/images/vetlink/3.png",
      "/portfolio/images/vetlink/4.png",
      "/portfolio/images/vetlink/5.png",
      "/portfolio/images/vetlink/6.png",
      "/portfolio/images/vetlink/7.png",
      "/portfolio/images/vetlink/8.png",
      "/portfolio/images/vetlink/9.png",
    ],
    getTitle: (language) => translations[language].vetlinkTitle,
    getYearTitle: (language) => translations[language].yearTitle,
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].vetlinkDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getViewProjectText: (language) => translations[language].viewProject,
    getProjectRole: (language) => translations[language].role,
    getTech: (language) => translations[language].tech,
    getInProgressText: (language) => translations[language].inProgress,
  },
  {
    id: "cosmos",
    title: "COSMOS",
    year: "2024",
    githubLink: "https://github.com/vitorlurici/cosmos",
    projectLink: "https://cosmos-sepia.vercel.app/",
    role: ["Front-end", "Back-end", "UX/UI", "Web Design"],
    technologies: ["React", "JavaScript", "Firebase", "Sass"],
    images: [
      "/portfolio/images/cosmos/1.jpg",
      "/portfolio/images/cosmos/2.jpg",
      "/portfolio/images/cosmos/3.jpg",
      "/portfolio/images/cosmos/4.jpg",
    ],
    mobileImages: [
      "/portfolio/images/cosmos/5.jpeg",
      "/portfolio/images/cosmos/6.jpeg",
      "/portfolio/images/cosmos/7.jpeg",
      "/portfolio/images/cosmos/8.jpeg",
    ],
    getTitle: (language) => translations[language].cosmosTitle,
    getYearTitle: (language) => translations[language].yearTitle,
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].cosmosDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getViewProjectText: (language) => translations[language].viewProject,
    getProjectRole: (language) => translations[language].role,
    getTech: (language) => translations[language].tech,
    getInProgressText: (language) => translations[language].inProgress,
  },
  {
    id: "finance",
    title: "FINANCE",
    year: "2023",
    githubLink: "https://github.com/vitorlurici/finance-project",
    projectLink: "https://gerenciadorfinance.netlify.app/",
    role: ["Front-end", "Back-end", "UX/UI", "Web Design"],
    technologies: ["React", "TypeScript", "Sass", "Java", "MySQL"],
    images: [
      "/portfolio/images/finance/1.jpg",
      "/portfolio/images/finance/2.jpg",
      "/portfolio/images/finance/3.jpg",
      "/portfolio/images/finance/4.jpg",
    ],
    mobileImages: [
      "/portfolio/images/finance/5.jpg",
      "/portfolio/images/finance/6.jpg",
      "/portfolio/images/finance/7.jpg",
    ],
    getTitle: (language) => translations[language].financeTitle,
    getYearTitle: (language) => translations[language].yearTitle,
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].financeDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getViewProjectText: (language) => translations[language].viewProject,
    getProjectRole: (language) => translations[language].role,
    getTech: (language) => translations[language].tech,
    getInProgressText: (language) => translations[language].inProgress,
  },
];
