import "./AnimatedSection.scss";

interface AnimatedSectionProps {
  id: string;
  visibleSections: Set<string>;
  children: React.ReactNode;
}

export const AnimatedSection = ({
  id,
  visibleSections,
  children,
}: AnimatedSectionProps) => {
  return (
    <div
      id={id}
      className={`animated-section ${visibleSections.has(id) ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};
