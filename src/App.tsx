import { useState, useEffect, useRef } from "react";
import "./App.scss";
import { LogoIcon } from "./assets/svg/LogoIcon";
import me from "./assets/images/me.png";
import {
  HtmlIcon,
  CssIcon,
  SassIcon,
  JsIcon,
  TsIcon,
  ReactIcon,
  AngularIcon,
  FlutterIcon,
  JavaIcon,
  PythonIcon,
  NodeIcon,
  MysqlIcon,
  SqliteIcon,
  FirebaseIcon,
  FigmaIcon,
  TrelloIcon,
  JiraIcon,
} from "./assets/svg";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollUp } from "./components/ScrollUpButton/ScrollUp";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleLoad = () =>
      setTimeout(() => {
        setIsLoadingComplete(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, 1000);

    window.onload = handleLoad;

    if (document.readyState === "complete") {
      handleLoad();
    }

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <main className="main-container">
      {isLoading && (
        <div
          className={`loading-screen ${isLoadingComplete ? "slide-up" : ""}`}
        >
          <div className="logo-container">
            <LogoIcon />
            <div className="loading-spinner"></div>
          </div>
          <div className="bottom">
            <p>WELCOME</p>
            <h1>Wait a bit</h1>
          </div>
        </div>
      )}
      <Header />
      <div className={`content ${!isLoadingComplete ? "hidden" : ""}`}>
        <div
          id="introduction"
          className={`animated-section introduction ${
            visibleSections.has("introduction") ? "visible" : ""
          }`}
        >
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
          <div className="content-right">
            <img src={me} />
          </div>
        </div>
        <div
          ref={projectsRef}
          id="projects"
          className={`animated-section projects ${
            visibleSections.has("projects") ? "visible" : ""
          }`}
        >
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
        <div
          ref={aboutMeRef}
          id="about-me"
          className={`animated-section about-me ${
            visibleSections.has("about-me") ? "visible" : ""
          }`}
        >
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
            innovation and problem-solving. In my spare time I enjoy traveling
            and playing video games.
          </h3>
          <div className="skills">
            <h2>Tech Skills</h2>
            <div className="logos">
              <HtmlIcon />
              <CssIcon />
              <SassIcon />
              <JsIcon />
              <TsIcon />
              <ReactIcon />
              <AngularIcon />
              <FlutterIcon />
              <JavaIcon />
              <PythonIcon />
              <NodeIcon />
              <MysqlIcon />
              <SqliteIcon />
              <FirebaseIcon />
              <FigmaIcon />
              <TrelloIcon />
              <JiraIcon />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollUp />
    </main>
  );
}

export default App;
