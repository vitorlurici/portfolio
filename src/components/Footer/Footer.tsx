import { LogoIcon } from "../../assets/svg/LogoIcon";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer-content">
        <div className="footer-column">
          <h4>— Contact information</h4>
          <p>Feel free to contact me anytime.</p>
          <ul>
            <li>
              E:{" "}
              <a
                href="mailto:vitorluricii@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vitorluricii@hotmail.com
              </a>
            </li>
            <li>
              P:{" "}
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
          <h4>— Latest projects</h4>
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
          <h4>— Availability</h4>
          <p>
            I am currently available and eager to explore exciting job
            opportunities that align with my skills and experience. Let’s
            connect!
          </p>
        </div>
        <div className="footer-column">
          <h4>— Follow me on</h4>
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
          <a href="/portfolio">
            <LogoIcon />
          </a>
          <p className="copyright-text">
            © {new Date().getFullYear()} Vitor Lurici.
          </p>
        </div>
      </div>
    </footer>
  );
};
