import { useParams } from "react-router-dom";
import { projects } from "./projectsData";
import { useLanguage } from "../../hooks/useLanguage";
import "./Project.scss";
import { techIcons } from "../../assets/svg";
import { useEffect, useState } from "react";
import useTitleUpdate from "../../hooks/useTitleUpdate";
import Error from "../Error/Error";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Error />;
  }

  useTitleUpdate(project.getTitle(language));

  return (
    <div className="project-main">
      <div
        id="top-container"
        className={`animated-section top-container ${
          visibleSections.has("top-container") ? "visible" : ""
        }`}
      >
        <div className="left-content">
          <p>{project.getCaseStudy(language)}</p>
          <h1>{project.title}</h1>
          <div className="item">
            <p>{project.getYearTitle(language)}</p>
            <span>
              {project.year}
              {project.id === "finance" && (
                <> - {project.getInProgressText(language)}</>
              )}
            </span>
          </div>
          <div className="item">
            <p>LINKS</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>{project.getViewGithubText(language)}</button>
            </a>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> {project.getViewProjectText(language)} </button>
            </a>
          </div>
          <div className="item">
            <p>{project.getProjectRole(language)}</p>
            {project.role.map((role, index) => (
              <span key={index}>{role}</span>
            ))}
          </div>
          <div className="item">
            <p>{project.getTech(language)}</p>
            <div className="technologies">
              {project.technologies.map((tech) => {
                const IconComponent = techIcons[tech];
                return <IconComponent key={tech} />;
              })}
            </div>
          </div>
        </div>
        <div className="right-content">
          {project.getDescription(language).map((paragraph, index) => (
            <span key={index}>{paragraph}</span>
          ))}
        </div>
      </div>

      <div
        id="project-images"
        className={`animated-section project-images ${
          visibleSections.has("project-images") ? "visible" : ""
        }`}
      >
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`Screenshot of ${project.title}`} />
        ))}
        <div className="mobile">
          {project.mobileImages.map((img, index) => (
            <img key={index} src={img} alt={`Screenshot of ${project.title}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
