import { LogoIcon } from "../../assets/svg/LogoIcon";
import { DownloadIcon } from "../../assets/svg/DownloadIcon";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useLanguage } from "../../hooks/useLanguage";
import "./Header.scss";

export const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="header-container">
      <a href="/portfolio">
        <div className="logo">
          <LogoIcon />
          <div className="logo-text">
            <span className="name">Vitor Lurici</span>
            <span className="description">SOFTWARE ENGINEER</span>
          </div>
        </div>
      </a>
      <div className="header-right">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <a
          href="https://github.com/user-attachments/files/18648395/Vitor_Lurici_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            Download CV <DownloadIcon />
          </button>
        </a>
      </div>
    </header>
  );
};
