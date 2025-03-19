import { useState } from "react";
import "./LanguageSelector.scss";
import { ArrowDownIcon } from "../../../assets/svg/ArrowDownIcon";
import { BrFlag } from "../../../assets/svg/BrFlag";
import { EuaFlag } from "../../../assets/svg/EuaFlag";

interface LanguageSelectorProps {
  language: "en" | "pt-br";
  setLanguage: (language: "en" | "pt-br") => void;
}

export const LanguageSelector = ({
  language,
  setLanguage,
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: "en" | "pt-br") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
        <div className="flag-container">
          {language === "en" ? <EuaFlag /> : <BrFlag />}
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
            {language === "en" ? <BrFlag /> : <EuaFlag />}
          </div>
        </div>
      )}
    </div>
  );
};
