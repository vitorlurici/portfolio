import { LogoIcon } from "../../assets/svg/LogoIcon";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../translations/header/translations";
import "./MenuScreen.scss";

export const MenuScreen = () => {
  const { language } = useLanguage();

  return (
    <div className="menu-container">
      <div className="top-content">
        <div className="logo">
          <LogoIcon />
          <div className="logo-text">
            <span className="name">Vitor Lurici</span>
            <span className="description">
              {translations[language].headerDescription}
            </span>
          </div>
        </div>
        <button>Fechar</button>
      </div>
      <div className="main-content">teste</div>
    </div>
  );
};
