import { LogoIcon } from "../../assets/svg/LogoIcon";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../translations/home/translations";
import "./Footer.scss";

interface FooterProps {
  resetApp: () => void;
}

export const Footer = ({ resetApp }: FooterProps) => {
  const { language } = useLanguage();

  const handleLogoClick = () => {
    resetApp();
  };

  return (
    <footer>
      <hr />
      <div className="footer-content">
        <div className="footer-column">
          <h4>{translations[language].footerContact}</h4>
          <p>{translations[language].feelFree}</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:vitorluricii@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vitorluricii@hotmail.com
              </a>
            </li>
            <li>
              {translations[language].footerPhone}{" "}
              <a
                href="https://wa.me/5514996825293"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 14 99682-5293
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>{translations[language].footerProjects}</h4>
          <ul>
            <li>
              {" "}
              <a
                href="https://github.com/GabrielRogerioMessias/project-integrator-VI-vet-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vetlink{" "}
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/vitorlurici/cosmos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cosmos
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/vitorlurici/finance-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Finance
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>{translations[language].footerAvailability}</h4>
          <p>{translations[language].availabilityText}</p>
        </div>
        <div className="footer-column">
          <h4>{translations[language].followMe}</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/vitor-lurici-0911b1303/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vitorlurici"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vitorlmoraes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <div className="logo" onClick={handleLogoClick}>
            <LogoIcon />
          </div>
          <p className="copyright-text">
            © {new Date().getFullYear()} Vitor Lurici.
          </p>
        </div>
      </div>
    </footer>
  );
};
