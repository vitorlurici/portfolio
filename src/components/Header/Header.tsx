import { LogoIcon } from "../../assets/svg/LogoIcon";
import { DownloadIcon } from "../../assets/svg/DownloadIcon";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useLanguage } from "../../hooks/useLanguage";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { translations } from "../../translations/header/translations";
import "./Header.scss";

interface HeaderProps {
  resetApp: () => void;
}

export const Header = ({ resetApp }: HeaderProps) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (lang: "en" | "pt-br") => {
    setLanguage(lang);

    const currentPath = location.pathname;
    const isPtRoute = currentPath.startsWith("/pt");

    const routeWithoutPrefix = isPtRoute ? currentPath.slice(3) : currentPath;

    const newPrefix = lang === "pt-br" ? "/pt" : "/";

    navigate(`${newPrefix}${routeWithoutPrefix}`);
  };

  const handleLogoClick = () => {
    if (location.pathname.startsWith("/pt")) {
      navigate("/pt");
    } else {
      navigate("/");
    }
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
