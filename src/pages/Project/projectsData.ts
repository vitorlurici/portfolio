import { translations } from "../../translations/projects/translations";

export interface Project {
  id: string;
  title: string;
  year: string;
  githubLink: string;
  projectLink: string;
  technologies: string[];
  images: string[];
  mobileImages: string[];
  getYearTitle: (language: "en" | "pt-br") => string;
  getCaseStudy: (language: "en" | "pt-br") => string;
  getDescription: (language: "en" | "pt-br") => string;
  getViewGithubText: (language: "en" | "pt-br") => string;
  getViewProjectText: (language: "en" | "pt-br") => string;
  getInProgressText: (language: "en" | "pt-br") => string;
}

export const projects: Project[] = [
  {
    id: "vetlink",
    title: "VETLINK",
    year: "2024",
    githubLink:
      "https://github.com/GabrielRogerioMessias/project-integrator-VI-vet-link",
    projectLink: "",
    technologies: ["React", "Node.js", "Firebase"],
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
    getYearTitle: (language) => translations[language].yearTitle,
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].vetlinkDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getViewProjectText: (language) => translations[language].viewProject,
    getInProgressText: (language) => translations[language].inProgress,
  },
  {
    id: "cosmos",
    title: "COSMOS",
    year: "2024",
    githubLink: "https://github.com/vitorlurici/cosmos",
    projectLink: "https://cosmos-sepia.vercel.app/",
    technologies: ["React", "TypeScript", "Sass"],
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
    getYearTitle: (language) => translations[language].yearTitle,
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].cosmosDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getViewProjectText: (language) => translations[language].viewProject,
    getInProgressText: (language) => translations[language].inProgress,
  },
  {
    id: "finance",
    title: "FINANCE",
    year: "2023",
    githubLink: "https://github.com/vitorlurici/finance-project",
    projectLink: "https://gerenciadorfinance.netlify.app/",
    technologies: ["React", "Node.js", "MongoDB"],
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
    getYearTitle: (language) => translations[language].yearTitle,
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].financeDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getViewProjectText: (language) => translations[language].viewProject,
    getInProgressText: (language) => translations[language].inProgress,
  },
];
