import { useState } from "react";
import { LogoIcon } from "../../assets/svg/LogoIcon";
import { LanguageSelector } from "./LanguageSelector/LanguageSelector";
import { useLanguage } from "../../hooks/useLanguage";
import { useNavigate, useLocation } from "react-router-dom";
import { translations } from "../../translations/header/translations";
import "./Header.scss";
import { MenuIcon } from "../../assets/svg/MenuIcon";
import { SlideDownMenu } from "./Menu/Menu";

interface HeaderProps {
  resetApp: () => void;
}

export const Header = ({ resetApp }: HeaderProps) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
            language={language}
            setLanguage={handleLanguageChange}
          />
          <div className="menu" onClick={toggleMenu}>
            <span>MENU</span>
            <MenuIcon />
          </div>
        </div>
      </header>
      <SlideDownMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};
