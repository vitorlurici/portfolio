import { useState, useEffect } from "react";
import "./BackgroundLoader.scss";
import { LogoIcon } from "../../assets/svg/LogoIcon";

interface BackgroundLoaderProps {
  imageUrl: string;
  className?: string;
  children?: React.ReactNode;
}

export const BackgroundLoader: React.FC<BackgroundLoaderProps> = ({
  imageUrl,
  className,
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
    };
  }, [imageUrl]);

  return (
    <div className="background-content">
      {isLoading && (
        <div className="logo-container">
          <LogoIcon />
          <div className="loading-spinner" />
        </div>
      )}
      <div
        className={`background-loader ${className}`}
        style={{
          backgroundImage: isLoading ? "none" : `url(${imageUrl})`,
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};
