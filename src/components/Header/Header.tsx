import { LogoIcon } from "../../assets/svg/LogoIcon";
import { DownloadIcon } from "../../assets/svg/DownloadIcon";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useLanguage } from "../../hooks/useLanguage";
import { Link, useNavigate } from "react-router-dom";
import { translations } from "../../translations/home/translations";
import "./Header.scss";

interface HeaderProps {
  resetApp: () => void;
}

export const Header = ({ resetApp }: HeaderProps) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (lang: "en" | "pt-br") => {
    setLanguage(lang);
    if (lang === "pt-br") {
      navigate("/pt");
    } else {
      navigate("/");
    }
  };

  const handleLogoClick = () => {
    resetApp();
  };

  return (
    <header className="header-container">
      <div className="logo" onClick={handleLogoClick}>
        <LogoIcon />
        <div className="logo-text">
          <span className="name">Vitor Lurici</span>
          <span className="description">
            {translations[language].headerDescription}
          </span>
        </div>
      </div>
      <div className="header-right">
        <LanguageSelector
          resetApp={resetApp}
          language={language}
          setLanguage={handleLanguageChange}
        />
        <Link
          to="https://github.com/user-attachments/files/18648395/Vitor_Lurici_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            {translations[language].downloadCV} <DownloadIcon />
          </button>
        </Link>
      </div>
    </header>
  );
};
