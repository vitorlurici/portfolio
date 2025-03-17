import { useOutletContext } from "react-router-dom";
import "./AboutMe.scss";
import { translations } from "../../translations/about/translations";
import { useLanguage } from "../../hooks/useLanguage";
import useTitleUpdate from "../../hooks/useTitleUpdate";
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
} from "../../assets/svg";
import { AnimatedSection } from "../../components/AnimatedSection/AnimatedSection";
import { useVisibleSections } from "../../hooks/useVisibleSections";

interface AboutMeProps {
  isLoadingComplete: boolean;
}
export const AboutMe = () => {
  const { isLoadingComplete } = useOutletContext<AboutMeProps>();
  const { language } = useLanguage();
  const visibleSections = useVisibleSections(isLoadingComplete);

  useTitleUpdate(translations[language].title);
  return (
    <div className={`about-container ${!isLoadingComplete ? "hidden" : ""}`}>
      <AnimatedSection id="content" visibleSections={visibleSections}>
        <div className="content">
          <div className="title">
            <span>{translations[language].aboutMeSubTitle}</span>
            <h1>{translations[language].aboutMeTitle}</h1>
          </div>
          <h3>{translations[language].aboutMeDescription}</h3>
          <div className="skills">
            <span>{translations[language].techSkills}</span>
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
      </AnimatedSection>
    </div>
  );
};
