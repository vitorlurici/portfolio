import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLanguage = () => {
  const [language, setLanguage] = useState<"en" | "pt-br">("en");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/pt")) {
      setLanguage("pt-br");
    } else {
      setLanguage("en");
    }
  }, [location.pathname]);

  return { language, setLanguage };
};
