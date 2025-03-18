import { useEffect, useState } from "react";
import "./ScrollUp.scss";
import { UpArrowIcon } from "../../assets/svg/UpArrowIcon";

export const ScrollUp = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const triggerHeight = pageHeight * 0.1;

      setShowScrollUp(scrollPosition > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-up ${showScrollUp ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <UpArrowIcon />
    </button>
  );
};
