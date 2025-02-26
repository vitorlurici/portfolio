import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importe useLocation
import "./App.scss";
import { LogoIcon } from "./assets/svg/LogoIcon";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollUp } from "./components/ScrollUpButton/ScrollUp";
import { translations } from "./translations//loading/translations";
import { useLanguage } from "./hooks/useLanguage";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [hasReset, setHasReset] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();

  const getLoadingTranslations = () => {
    if (location.pathname.includes("/projects/vetlink")) {
      return translations[language].vetLinkLoading;
    } else if (location.pathname.includes("/projects/cosmos")) {
      return translations[language].cosmosLoading;
    } else if (location.pathname.includes("/projects/finance")) {
      return translations[language].financeLoading;
    } else {
      return translations[language].mainLoading;
    }
  };

  const resetApp = () => {
    setIsLoading(true);
    setIsLoadingComplete(false);

    setTimeout(() => {
      setIsLoadingComplete(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    const handleLoad = () =>
      setTimeout(() => {
        setIsLoadingComplete(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, 1000);

    window.onload = handleLoad;

    if (document.readyState === "complete") {
      handleLoad();
    }

    return () => {
      window.onload = null;
    };
  }, []);

  useEffect(() => {
    if (location.pathname.includes("/projects") && !hasReset) {
      resetApp();
      setHasReset(true);
    } else if (!location.pathname.includes("/projects")) {
      setHasReset(false);
    }
  }, [location.pathname, resetApp, hasReset]);

  return (
    <>
      {isLoading && (
        <div
          className={`loading-screen ${isLoadingComplete ? "slide-up" : ""}`}
        >
          <div className="logo-container">
            <LogoIcon />
            <div className="loading-spinner" />
          </div>
          <div className="bottom">
            <p>{getLoadingTranslations().subTitle}</p>
            <h1>{getLoadingTranslations().Title}</h1>
          </div>
        </div>
      )}
      <main className="main-container">
        <Header resetApp={resetApp} />
        <Outlet context={{ isLoadingComplete, resetApp }} />
        <Footer resetApp={resetApp} />
        <ScrollUp />
      </main>
    </>
  );
}

export default App;
