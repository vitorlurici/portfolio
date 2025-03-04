import { useEffect, useState } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import useTitleUpdate from "../../hooks/useTitleUpdate";
import { translations } from "../../translations/error/translations";
import "./Error.scss";

interface ErrorProps {
  isLoadingComplete: boolean;
}

const Error = () => {
  const { isLoadingComplete } = useOutletContext<ErrorProps>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (!isLoadingComplete) {
      setVisibleSections(new Set());
    }
  }, [isLoadingComplete]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useTitleUpdate(translations[language].title);

  useEffect(() => {
    if (location.pathname !== "/404" && location.pathname.startsWith("/pt")) {
      navigate("/pt/404", { replace: true });
    } else if (location.pathname !== "/404") {
      navigate("/404", { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleBackHome = () => {
    if (location.pathname.startsWith("/pt")) {
      navigate("/pt");
    } else {
      navigate("/");
    }
  };

  return (
    <div className={`error-container ${!isLoadingComplete ? "hidden" : ""}`}>
      <div
        id="error-content"
        className={`animated-section error-content ${
          visibleSections.has("error-content") ? "visible" : ""
        }`}
      >
        <p>OOOPS</p>
        <h3>{translations[language].wrong}</h3>
        <h1>404</h1>
        <h4>{translations[language].inexistent}</h4>
        <button onClick={handleBackHome}>
          {translations[language].backHome}
        </button>
      </div>
    </div>
  );
};

export default Error;
