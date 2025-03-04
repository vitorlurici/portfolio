import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { translations } from "../../translations/error/translations";
import { useLanguage } from "../../hooks/useLanguage";
import "./Error.scss";
import { useVisibleSections } from "../../hooks/useVisibleSections";
import { AnimatedSection } from "../../components/AnimatedSection/AnimatedSection";
import { useEffect } from "react";

interface ErrorProps {
  isLoadingComplete: boolean;
}

const Error = () => {
  const { isLoadingComplete } = useOutletContext<ErrorProps>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const visibleSections = useVisibleSections(isLoadingComplete);

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
      <AnimatedSection id="error-content" visibleSections={visibleSections}>
        <div className="error-content">
          <p>OOOPS</p>
          <h3>{translations[language].wrong}</h3>
          <h1>404</h1>
          <h4>{translations[language].inexistent}</h4>
          <button onClick={handleBackHome}>
            {translations[language].backHome}
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Error;
