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
import { Link } from "react-router-dom";
import { translations } from "./translations/home/translations";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const { language } = useLanguage();

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

  const resetApp = () => {
    setIsLoading(true);
    setIsLoadingComplete(false);

    setVisibleSections(new Set());

    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => {
      section.classList.remove("visible");
    });

    setTimeout(() => {
      setIsLoadingComplete(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 1000);
  };

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
            <p>{translations[language].welcome}</p>
            <h1>{translations[language].wait}</h1>
          </div>
        </div>
      )}
      <Header resetApp={resetApp} />
      <div className={`content ${!isLoadingComplete ? "hidden" : ""}`}>
        <div
          id="introduction"
          className={`animated-section introduction ${
            visibleSections.has("introduction") ? "visible" : ""
          }`}
        >
          <div className="content-left">
            <span>VITOR LURICI</span>
            <h1>{translations[language].role}</h1>
            <h3>{translations[language].introduction}</h3>
            <div className="main-links">
              <button onClick={scrollToProjects}>
                {translations[language].viewProjects}
              </button>
              <p>{translations[language].or}</p>
              <button onClick={scrollToAboutMe}>
                {translations[language].readAboutMe}
              </button>
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
            <span>{translations[language].projectsSubTitle}</span>
            <h1>{translations[language].projectsTitle}</h1>
          </div>
          <div className="grid">
            <Link
              to="https://github.com/GabrielRogerioMessias/project-integrator-VI-vet-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item vetlink">
                <p>2024</p>
                <h2>VETLINK</h2>
                <p>{translations[language].vetlinkDescription}</p>
                <p className="view-git">{translations[language].viewGithub}</p>
              </div>
            </Link>
            <Link
              to="https://github.com/vitorlurici/cosmos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item cosmos">
                <p>2024</p>
                <h2>COSMOS</h2>
                <p>{translations[language].cosmosDescription}</p>
                <p className="view-git">{translations[language].viewGithub}</p>
              </div>
            </Link>
            <Link
              to="https://github.com/vitorlurici/finance-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item finance">
                <p>2023 - {translations[language].inProgress}</p>
                <h2>FINANCE</h2>
                <p>{translations[language].financeDescription}</p>
                <p className="view-git">{translations[language].viewGithub}</p>
              </div>
            </Link>
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
            <span>{translations[language].aboutMeSubTitle}</span>
            <h1>{translations[language].aboutMeTitle}</h1>
          </div>
          <h3>{translations[language].aboutMeDescription}</h3>
          <div className="skills">
            <h2>{translations[language].techSkills}</h2>
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
        <Footer resetApp={resetApp} />
      </div>
      <ScrollUp />
    </main>
  );
}

export default App;
