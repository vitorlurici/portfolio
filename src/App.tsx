import "./App.scss";
import { LogoIcon } from "./assets/svg/LogoIcon";
import { MenuIcon } from "./assets/svg/MenuIcon";
import { useRef } from "react";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
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
            <h1>Front-end and Back-end Engineer</h1>
            <h4>
              During my three years as a software engineering student, I honed
              strong critical and analytical skills, consistently delivering
              high-quality results in deadline-driven projects.
            </h4>
            <div className="main-links">
              <button onClick={scrollToProjects}>View Projects</button>
              <p>or</p>
              <button onClick={scrollToProjects}>Read About Me</button>
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
            <div className="item">
              <p>2024</p>
              <h2>COSMOS</h2>
              <p>
                A captivating space exploration site utilizing NASA APIs, Google
                Translate, and Spaceflight News API. Developed with React, Vite,
                JavaScript, Firebase, and SCSS.
              </p>
              <p className="view-git">View Project on GitHub →</p>
            </div>
            <div className="item">
              <p>2024</p>
              <h2>COSMOS</h2>
              <p>
                A captivating space exploration site utilizing NASA APIs, Google
                Translate, and Spaceflight News API. Developed with React, Vite,
                JavaScript, Firebase, and SCSS.
              </p>
              <p className="view-git">View Project on GitHub →</p>
            </div>
            <div className="item">
              <p>2024</p>
              <h2>COSMOS</h2>
              <p>
                A captivating space exploration site utilizing NASA APIs, Google
                Translate, and Spaceflight News API. Developed with React, Vite,
                JavaScript, Firebase, and SCSS.
              </p>
              <p className="view-git">View Project on GitHub →</p>
            </div>
            <div className="item">
              <p>2024</p>
              <h2>COSMOS</h2>
              <p>
                A captivating space exploration site utilizing NASA APIs, Google
                Translate, and Spaceflight News API. Developed with React, Vite,
                JavaScript, Firebase, and SCSS.
              </p>
              <p className="view-git">View Project on GitHub →</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
