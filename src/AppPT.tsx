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
import { translations } from "./translations/home/translations";

function AppPT() {
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
            <p>{translations["pt-br"].welcome}</p>
            <h1>{translations["pt-br"].wait}</h1>
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
            <h1>Software Engineer</h1>
            <h3>{translations["pt-br"].introduction}</h3>
            <div className="main-links">
              <button onClick={scrollToProjects}>
                {translations["pt-br"].viewProjects}
              </button>
              <p>ou</p>
              <button onClick={scrollToAboutMe}>
                {translations["pt-br"].readAboutMe}
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
            <span>ACADÊMICO & PESSOAL</span>
            <h1>Projetos</h1>
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
                  Um aplicativo móvel projetado para estudantes e profissionais
                  de veterinária, oferecendo informações detalhadas sobre várias
                  zoonoses e permitindo a tomada de notas pessoais.
                </p>
                <p className="view-git">Ver Projeto no GitHub →</p>
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
                  Um site cativante de exploração espacial utilizando APIs da
                  NASA, Google Translate e Spaceflight News API.
                </p>
                <p className="view-git">Ver Projeto no GitHub →</p>
              </div>
            </a>
            <a
              href="https://github.com/vitorlurici/finance-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item finance">
                <p>2023 - Em Progresso</p>
                <h2>FINANÇAS</h2>
                <p>
                  Um aplicativo de gerenciamento de finanças pessoais atualmente
                  em desenvolvimento. Ele permite que os usuários acompanhem e
                  gerenciem suas receitas e despesas de forma eficiente.
                </p>
                <p className="view-git">Ver Projeto no GitHub →</p>
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
            <span>ALGUMAS PALAVRAS</span>
            <h1>Sobre Mim</h1>
          </div>
          <h3>{translations["pt-br"].aboutMe}</h3>
          <div className="skills">
            <h2>{translations["pt-br"].techSkills}</h2>
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

export default AppPT;
