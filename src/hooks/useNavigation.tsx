import { useNavigate } from "react-router-dom";

export const useNavigation = (resetApp: () => void) => {
  const navigate = useNavigate();

  const buildLink = (path: string) => {
    if (location.pathname.startsWith("/portfolio/pt")) {
      return `/pt${path}`;
    }
    return path;
  };

  const handleLinkClick = (path: string) => {
    const finalPath = buildLink(path);
    navigate(finalPath);
    resetApp();
  };

  return { buildLink, handleLinkClick };
};
