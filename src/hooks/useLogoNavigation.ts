import { useNavigate } from "react-router-dom";

export const useLogoNavigation = (resetApp: () => void) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname.startsWith("/portfolio/pt")) {
      navigate("/pt");
    } else {
      navigate("/");
    }
    resetApp();
  };

  return { handleLogoClick };
};
