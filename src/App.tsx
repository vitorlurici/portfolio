import { useState, useEffect } from "react";
import "./App.scss";
import { LogoIcon } from "./assets/svg/LogoIcon";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollUp } from "./components/ScrollUpButton/ScrollUp";
import { translations } from "./translations/home/translations";
import { useLanguage } from "./hooks/useLanguage";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const { language } = useLanguage();

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

  return (
    <>
      {isLoading && (
        <div
          className={`loading-screen ${isLoadingComplete ? "slide-up" : ""}`}
        >
          <div className="logo-container">
            <LogoIcon />
            <div className="loading-spinner"></div>
          </div>
          <div className="bottom">
            <p>{translations[language].welcome}</p>
            <h1>{translations[language].wait}</h1>
          </div>
        </div>
      )}
      <main className="main-container">
        <Header resetApp={resetApp} />
        <Outlet context={{ isLoadingComplete }} />
        <Footer resetApp={resetApp} />
        <ScrollUp />
      </main>
    </>
  );
}

export default App;
