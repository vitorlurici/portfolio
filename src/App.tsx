import "./App.scss";
import { LogoIcon } from "./assets/svg/LogoIcon";
import { MenuIcon } from "./assets/svg/MenuIcon";
import { useRef } from "react";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="main-container">
      <header className="header-container">
        <div className="logo">
          <LogoIcon />
          <div className="logo-text">
            <span className="name">Vitor Lurici</span>
            <span className="description">SOFTWARE ENGINEER</span>
          </div>
        </div>
        <div className="menu">
          <span>MENU</span>
          <MenuIcon />
        </div>
      </header>
      <div className="content">
        <div className="introduction">
          <div className="content-left">
            <span>VITOR LURICI</span>
            <h1>Software Engineer</h1>
            <h4>
              During my three years as a software engineering student, I honed
              strong critical and analytical skills, consistently delivering
              high-quality results in deadline-driven projects.
            </h4>
            <div className="main-links">
              <button onClick={scrollToProjects}>View Projects</button>
              <p>or</p>
              <button onClick={scrollToAboutMe}>Read About Me</button>
            </div>
          </div>
          <div className="content-right"></div>
        </div>
        <div ref={projectsRef} className="projects">
          <div className="title">
            <span>ACADEMIC & PERSONAL</span>
            <h1>Projects</h1>
          </div>
          <div className="grid">
            <a
              href="https://github.com/GabrielRogerioMessias/project-integrator-VI-vet-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item vetlink">
                <p>2024</p>
                <h2>VETLINK</h2>
                <p>
                  A mobile app designed for veterinary students and
                  professionals, offering detailed information on various
                  zoonoses and enabling personal note-taking. Developed with
                  React Native + Expo, TypeScript, and Firebase.
                </p>
                <p className="view-git">View Project on GitHub →</p>
              </div>
            </a>
            <a
              href="https://github.com/vitorlurici/cosmos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item cosmos">
                <p>2024</p>
                <h2>COSMOS</h2>
                <p>
                  A captivating space exploration Website utilizing NASA APIs,
                  Google Translate, and Spaceflight News API. Developed with
                  React + Vite, JavaScript, Firebase, and SCSS.
                </p>
                <p className="view-git">View Project on GitHub →</p>
              </div>
            </a>
            <a
              href="https://github.com/vitorlurici/finance-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item finance">
                <p>2023 - In Progress</p>
                <h2>FINANCE</h2>
                <p>
                  A captivating space exploration site utilizing NASA APIs,
                  Google Translate, and Spaceflight News API. Developed with
                  React, Vite, JavaScript, Firebase, and SCSS.
                </p>
                <p className="view-git">View Project on GitHub →</p>
              </div>
            </a>
          </div>
        </div>
        <div ref={aboutMeRef} className="about-me">
          <div className="title">
            <span>A FEW WORDS</span>
            <h1>About Me</h1>
          </div>
          <h3>
            I'm Vitor Lurici, an aspiring Software Engineer with a solid
            foundation in software development and a proven ability to
            collaborate effectively in team environments. Currently pursuing a
            degree in Software Engineering, I have gained hands-on experience
            through personal and academic projects, demonstrating a passion for
            innovation and problem-solving.
          </h3>
        </div>
      </div>
    </main>
  );
}

export default App;
