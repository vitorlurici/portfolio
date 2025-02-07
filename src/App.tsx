import "./App.scss";
import { LogoIcon } from "./assets/svg/LogoIcon";
import { MenuIcon } from "./assets/svg/MenuIcon";
import { useRef, useState, useEffect } from "react";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const introductionRef = useRef<HTMLDivElement | null>(null);

  const [showScrollUp, setShowScrollUp] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (introductionRef.current) {
        const introductionHeight = introductionRef.current.offsetHeight;
        const triggerHeight = introductionHeight * 0.5;
        const scrollPosition = window.scrollY;

        setShowScrollUp(scrollPosition > triggerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="main-container">
      <header className="header-container">
        <a href="/">
          <div className="logo">
            <LogoIcon />
            <div className="logo-text">
              <span className="name">Vitor Lurici</span>
              <span className="description">SOFTWARE ENGINEER</span>
            </div>
          </div>
        </a>
        <div className="menu">
          <span>MENU</span>
          <MenuIcon />
        </div>
      </header>
      <div className="content">
        <div ref={introductionRef} className="introduction">
          <div className="content-left">
            <span>VITOR LURICI</span>
            <h1>Software Engineer</h1>
            <h3>
              During my three years as a software engineering student, I honed
              strong critical and analytical skills, consistently delivering
              high-quality results in deadline-driven projects.
            </h3>
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
                  zoonoses and enabling personal note-taking.
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
                  Google Translate, and Spaceflight News API.
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
                  A personal finance management application currently under
                  development. It enables users to track and manage their income
                  and expenses efficiently.
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
        <footer>
          <hr />
          <div className="footer-content">
            <div className="footer-column">
              <h4>— Contact information</h4>
              <p>Feel free to contact me anytime.</p>
              <ul>
                <li>
                  E:{" "}
                  <a
                    href="mailto:vitorluricii@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vitorluricii@hotmail.com
                  </a>
                </li>
                <li>
                  P:{" "}
                  <a
                    href="https://wa.me/5514996825293"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +55 14 99682-5293
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>— Latest projects</h4>
              <ul>
                <li>
                  {" "}
                  <a
                    href="https://github.com/GabrielRogerioMessias/project-integrator-VI-vet-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vetlink{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://github.com/vitorlurici/cosmos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cosmos
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://github.com/vitorlurici/finance-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Finance
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>— Availabity</h4>
              <p>
                I am currently available and eager to explore exciting job
                opportunities that align with my skills and experience. Let’s
                connect!
              </p>
            </div>
            <div className="footer-column">
              <h4>— Follow me on</h4>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/vitorlmoraes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <a href="/">
                <LogoIcon />
              </a>
              <p className="copyright-text">
                © {new Date().getFullYear()} Vitor Lurici.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <button
        className={`scroll-up ${showScrollUp ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </main>
  );
}

export default App;
