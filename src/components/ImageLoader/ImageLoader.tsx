import { useState } from "react";
import "./ImageLoader.scss";
import { LogoIcon } from "../../assets/svg/LogoIcon";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="image-loader">
      {isLoading && (
        <div className="logo-container">
          <LogoIcon />
          <div className="loading-spinner" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? "hidden" : ""}`}
        onLoad={handleImageLoad}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
};
