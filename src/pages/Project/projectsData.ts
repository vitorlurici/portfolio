import { translations } from "../../translations/projects/translations";

export interface Project {
  id: string;
  title: string;
  year: string;
  githubLink: string;
  technologies: string[];
  images: string[];
  getCaseStudy: (language: "en" | "pt-br") => string;
  getDescription: (language: "en" | "pt-br") => string;
  getViewGithubText: (language: "en" | "pt-br") => string;
  getInProgressText: (language: "en" | "pt-br") => string;
}

export const projects: Project[] = [
  {
    id: "vetlink",
    title: "VETLINK",
    year: "2024",
    githubLink:
      "https://github.com/GabrielRogerioMessias/project-integrator-VI-vet-link",
    technologies: ["React", "Node.js", "Firebase"],
    images: [
      "/portfolio/images/vetlink1.jpg",
      "/portfolio/images/vetlink2.jpg",
    ],
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].vetlinkDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getInProgressText: (language) => translations[language].inProgress,
  },
  {
    id: "cosmos",
    title: "COSMOS",
    year: "2024",
    githubLink: "https://github.com/vitorlurici/cosmos",
    technologies: ["React", "TypeScript", "Sass"],
    images: ["/portfolio/images/cosmos1.jpg", "/portfolio/images/cosmos2.jpg"],
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].cosmosDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getInProgressText: (language) => translations[language].inProgress,
  },
  {
    id: "finance",
    title: "FINANCE",
    year: "2023",
    githubLink: "https://github.com/vitorlurici/finance-project",
    technologies: ["React", "Node.js", "MongoDB"],
    images: [
      "/portfolio/images/finance1.jpg",
      "/portfolio/images/finance2.jpg",
    ],
    getCaseStudy: (language) => translations[language].caseStudy,
    getDescription: (language) => translations[language].financeDescription,
    getViewGithubText: (language) => translations[language].viewGithub,
    getInProgressText: (language) => translations[language].inProgress,
  },
];
