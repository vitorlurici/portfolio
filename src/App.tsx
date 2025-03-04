import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollUp } from "./components/ScrollUpButton/ScrollUp";
import { translations } from "./translations/loading/translations";
import { useLanguage } from "./hooks/useLanguage";
import { Outlet } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { useLoading } from "./hooks/useLoading";

function App() {
  const {
    isLoading,
    setIsLoading,
    isLoadingComplete,
    setIsLoadingComplete,
    resetApp,
  } = useLoading();
  const { language } = useLanguage();
  const location = useLocation();

  const getLoadingTranslations = useCallback(() => {
    if (location.pathname.includes("/projects/vetlink")) {
      return translations[language].vetLinkLoading;
    } else if (location.pathname.includes("/projects/cosmos")) {
      return translations[language].cosmosLoading;
    } else if (location.pathname.includes("/projects/finance")) {
      return translations[language].financeLoading;
    } else if (location.pathname.includes("/404")) {
      return translations[language].errorLoading;
    } else {
      return translations[language].mainLoading;
    }
  }, [language, location.pathname]);

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
  }, [setIsLoading, setIsLoadingComplete]);

  useEffect(() => {
    if (location.pathname.includes("/")) {
      resetApp();
    }
  }, [location.pathname, resetApp]);

  return (
    <>
      {isLoading && (
        <LoadingScreen
          isLoadingComplete={isLoadingComplete}
          loadingText={getLoadingTranslations()}
        />
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
