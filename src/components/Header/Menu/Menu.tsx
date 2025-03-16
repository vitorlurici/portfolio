import { useEffect, useRef } from "react";
import "./Menu.scss";
import { CloseIcon } from "../../../assets/svg/CloseIcon";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";
import { translations } from "../../../translations/menu/translations";
import { DownloadIcon } from "../../../assets/svg/DownloadIcon";
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
        <Link
          to="https://github.com/user-attachments/files/18648395/Vitor_Lurici_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            {translations[language].downloadCV} <DownloadIcon />
          </button>
        </Link>
        <div className="close-menu" onClick={onClose}>
          <span>{translations[language].close}</span>
          <CloseIcon />
        </div>
      </div>
      <div className="menu-content">
        <span>MENU</span>
        <ul>
          <li>
            <h1 onClick={() => handleLinkClick("/")}>
              {translations[language].projects}
            </h1>
          </li>
          <li>
            <h1>{translations[language].aboutMe}</h1>
          </li>
          <li>
            <h1>{translations[language].contact}</h1>
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
