import { useOutletContext, useParams } from "react-router-dom";
import { projects } from "./projectsData";
import { useLanguage } from "../../hooks/useLanguage";
import "./Project.scss";

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
          <div className="year">
            <p>{project.getYearTitle(language)}</p>
            <span>
              {project.year}
              {project.id === "finance" && (
                <> - {project.getInProgressText(language)}</>
              )}
            </span>
          </div>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.getViewGithubText(language)}
          </a>
        </div>
        <div className="right-content">
          <span>{project.getDescription(language)}</span>
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
