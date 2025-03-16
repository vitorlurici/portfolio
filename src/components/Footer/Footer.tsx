import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/svg/LogoIcon";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../translations/footer/translations";
import "./Footer.scss";
import { useNavigation } from "../../hooks/useNavigation";
import { useLogoNavigation } from "../../hooks/useLogoNavigation";

interface FooterProps {
  resetApp: () => void;
}

export const Footer = ({ resetApp }: FooterProps) => {
  const { language } = useLanguage();
  const { buildLink, handleLinkClick } = useNavigation(resetApp);
  const { handleLogoClick } = useLogoNavigation(resetApp);

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
              <Link
                to="mailto:vitorluricii@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vitorluricii@hotmail.com
              </Link>
            </li>
            <li>
              {translations[language].footerPhone}{" "}
              <Link
                to="https://wa.me/5514996825293"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 14 99682-5293
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>{translations[language].footerProjects}</h4>
          <ul>
            <li>
              <Link
                to={buildLink("/projects/vetlink")}
                onClick={() => handleLinkClick("/projects/vetlink")}
              >
                Vetlink
              </Link>
            </li>
            <li>
              <Link
                to={buildLink("/projects/cosmos")}
                onClick={() => handleLinkClick("/projects/cosmos")}
              >
                Cosmos
              </Link>
            </li>
            <li>
              <Link
                to={buildLink("/projects/finance")}
                onClick={() => handleLinkClick("/projects/finance")}
              >
                Finance
              </Link>
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
              <Link
                to="https://www.linkedin.com/in/vitor-lurici-0911b1303/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/vitorlurici"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/vitorlmoraes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
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
