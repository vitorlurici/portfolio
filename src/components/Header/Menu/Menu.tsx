import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.scss";
import { CloseIcon } from "../../../assets/svg/CloseIcon";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";
import { translations } from "../../../translations/menu/translations";
import { useNavigation } from "../../../hooks/useNavigation";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  resetApp: () => void;
}

export const SlideDownMenu = ({ isOpen, onClose, resetApp }: MenuProps) => {
  const { language } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const { buildLink, handleLinkClick } = useNavigation(resetApp);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/pt${path}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`slide-down-menu ${isOpen ? "open" : ""}`} ref={menuRef}>
      <div className="top-content">
        <div className="close-menu" onClick={onClose}>
          <span>{translations[language].close}</span>
          <CloseIcon />
        </div>
      </div>
      <div className="menu-content">
        <span>MENU</span>
        <ul>
          <li>
            <Link
              to={buildLink("/")}
              onClick={() => {
                handleLinkClick("/");
                onClose();
              }}
            >
              <h1 className={isActive("/") ? "active" : ""}>
                {translations[language].projects}
              </h1>
            </Link>
          </li>
          <li>
            <Link
              to={buildLink("/about-me")}
              onClick={() => {
                handleLinkClick("/about-me");
                onClose();
              }}
            >
              <h1 className={isActive("/about-me") ? "active" : ""}>
                {translations[language].aboutMe}
              </h1>
            </Link>
          </li>
          <li>
            <Link
              to={buildLink("/contact")}
              onClick={() => {
                handleLinkClick("/contact");
                onClose();
              }}
            >
              <h1 className={isActive("/contact") ? "active" : ""}>
                {translations[language].contact}
              </h1>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/vitor-lurici-0911b1303/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Linkedin</h1>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/vitorlurici"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>GitHub</h1>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/vitorlmoraes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Instagram</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
