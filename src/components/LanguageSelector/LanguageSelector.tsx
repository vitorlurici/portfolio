import "./LanguageSelector.scss";

interface LanguageSelectorProps {
  language: "en" | "pt-br";
  setLanguage: (language: "en" | "pt-br") => void;
}

export const LanguageSelector = ({
  language,
  setLanguage,
}: LanguageSelectorProps) => {
  return (
    <div className="language-selector">
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        English
      </button>
      <button
        className={language === "pt-br" ? "active" : ""}
        onClick={() => setLanguage("pt-br")}
      >
        Português
      </button>
    </div>
  );
};
