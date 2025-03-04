import { LogoIcon } from "../../assets/svg/LogoIcon";
import "./LoadingScreen.scss";

interface LoadingScreenProps {
  isLoadingComplete: boolean;
  loadingText: { subTitle: string; title: string };
}

export const LoadingScreen = ({
  isLoadingComplete,
  loadingText,
}: LoadingScreenProps) => {
  return (
    <div className={`loading-screen ${isLoadingComplete ? "slide-up" : ""}`}>
      <div className="logo-container">
        <LogoIcon />
        <div className="loading-spinner" />
      </div>
      <div className="bottom">
        <p>{loadingText.subTitle}</p>
        <h1>{loadingText.title}</h1>
      </div>
    </div>
  );
};
