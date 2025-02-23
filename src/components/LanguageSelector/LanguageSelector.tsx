import { useState } from "react";
import "./LanguageSelector.scss";
import { ArrowDownIcon } from "../../assets/svg/ArrowDownIcon";

interface LanguageSelectorProps {
  language: "en" | "pt-br";
  setLanguage: (language: "en" | "pt-br") => void;
  resetApp: () => void;
}

export const LanguageSelector = ({
  language,
  setLanguage,
  resetApp,
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: "en" | "pt-br") => {
    setLanguage(lang);
    setIsOpen(false);
    resetApp();
  };

  const brFlag = "/portfolio/flags/br-flag.jpeg";
  const euaFlag = "/portfolio/flags/eua-flag.jpeg";

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
        <div className="flag-container">
          <img
            src={language === "en" ? euaFlag : brFlag}
            alt={language === "en" ? "EUA Flag" : "Brazil Flag"}
            className="flag"
          />
        </div>
        <span className={`arrow ${isOpen ? "rotate" : ""}`}>
          <ArrowDownIcon />
        </span>
      </div>
      {isOpen && (
        <div className="dropdown">
          <div
            className="dropdown-item"
            onClick={() =>
              handleLanguageChange(language === "en" ? "pt-br" : "en")
            }
          >
            <img
              src={language === "en" ? brFlag : euaFlag}
              alt={language === "en" ? "Brazil Flag" : "EUA Flag"}
              className="flag"
            />
          </div>
        </div>
      )}
    </div>
  );
};
