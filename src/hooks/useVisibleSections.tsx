import { useEffect, useState } from "react";

export const useVisibleSections = (isLoadingComplete: boolean) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (!isLoadingComplete) {
      setVisibleSections(new Set());
    }
  }, [isLoadingComplete]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animated-section");
      const newVisibleSections = new Set<string>();

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const viewportHeight = window.innerHeight;

        const isVisible =
          sectionTop < viewportHeight - 100 && sectionBottom > 100;

        if (isVisible) {
          newVisibleSections.add(section.id);
        }
      });

      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    const timeoutId = setTimeout(handleScroll, 100);

    const resizeObserver = new ResizeObserver(handleScroll);
    document.querySelectorAll(".animated-section").forEach((section) => {
      resizeObserver.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, []);

  return visibleSections;
};
