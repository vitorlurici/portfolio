import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTitleUpdate = (title: string) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);
};

export default useTitleUpdate;
