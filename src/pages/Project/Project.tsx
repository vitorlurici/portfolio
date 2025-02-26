import { useOutletContext, useParams } from "react-router-dom";
import { projects } from "./projectsData";
import { useLanguage } from "../../hooks/useLanguage";
import "./Project.scss";
import { techIcons } from "../../assets/svg";

interface ProjectContentProps {
  isLoadingComplete: boolean;
}

const ProjectDetails = () => {
  const { isLoadingComplete } = useOutletContext<ProjectContentProps>();
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={`project-main ${!isLoadingComplete ? "hidden" : ""}`}>
      <div className="top-container">
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
              {project.getViewGithubText(language)}
            </a>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.getViewProjectText(language)}
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

      <div className="project-images">
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
