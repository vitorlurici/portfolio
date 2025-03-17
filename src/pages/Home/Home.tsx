import { useRef } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { translations } from "../../translations/home/translations";
import { useLanguage } from "../../hooks/useLanguage";
import me from "../../assets/images/me.png";
import "./Home.scss";
import useTitleUpdate from "../../hooks/useTitleUpdate";
import { useVisibleSections } from "../../hooks/useVisibleSections";
import { AnimatedSection } from "../../components/AnimatedSection/AnimatedSection";

interface HomeProps {
  isLoadingComplete: boolean;
}

export const Home = () => {
  const { isLoadingComplete } = useOutletContext<HomeProps>();
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const visibleSections = useVisibleSections(isLoadingComplete);
  const { language } = useLanguage();
  const location = useLocation();

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buildLink = (path: string) => {
    if (location.pathname.startsWith("/pt")) {
      return `/pt${path}`;
    }
    return path;
  };

  useTitleUpdate(translations[language].title);

  return (
    <div className={`content ${!isLoadingComplete ? "hidden" : ""}`}>
      <AnimatedSection id="introduction" visibleSections={visibleSections}>
        <div className="introduction">
          <div className="content-left">
            <span>VITOR LURICI</span>
            <h1>{translations[language].role}</h1>
            <h3>{translations[language].introduction}</h3>
            <div className="main-links">
              <button onClick={scrollToProjects}>
                {translations[language].viewProjects}
              </button>
              <p>{translations[language].or}</p>
              <Link to={buildLink("/about-me")}>
                <button>{translations[language].readAboutMe}</button>{" "}
              </Link>
            </div>
          </div>
          <div className="content-right">
            <img src={me} alt="Vitor Lurici" />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection id="projects" visibleSections={visibleSections}>
        <div className="projects" ref={projectsRef}>
          <div className="title">
            <span>{translations[language].projectsSubTitle}</span>
            <h1>{translations[language].projectsTitle}</h1>
          </div>
          <div className="grid">
            <Link to={buildLink("/projects/vetlink")}>
              <div className="item vetlink">
                <p>2024</p>
                <h2>VETLINK</h2>
                <p>{translations[language].vetlinkDescription}</p>
                <p className="view-git">{translations[language].viewGithub}</p>
              </div>
            </Link>
            <Link to={buildLink("/projects/cosmos")}>
              <div className="item cosmos">
                <p>2024</p>
                <h2>COSMOS</h2>
                <p>{translations[language].cosmosDescription}</p>
                <p className="view-git">{translations[language].viewGithub}</p>
              </div>
            </Link>
            <Link to={buildLink("/projects/finance")}>
              <div className="item finance">
                <p>2023 - {translations[language].inProgress}</p>
                <h2>FINANCE</h2>
                <p>{translations[language].financeDescription}</p>
                <p className="view-git">{translations[language].viewGithub}</p>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
