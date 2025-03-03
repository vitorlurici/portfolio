import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import useTitleUpdate from "../../hooks/useTitleUpdate";
import { translations } from "../../translations/error/translations";
import "./Error.scss";

const Error = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

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
    <div className={"error-main"}>
      <p>OOOPS</p>
      <h3>{translations[language].wrong}</h3>
      <h1>404</h1>
      <h4>{translations[language].inexistent}</h4>
      <button onClick={handleBackHome}>
        {translations[language].backHome}
      </button>
    </div>
  );
};

export default Error;
