import { useParams } from "react-router-dom";
import { projects } from "./projectsData";
import { useLanguage } from "../../hooks/useLanguage";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p>{project.year}</p>
      <p>{project.getDescription(language)}</p>

      <h2>Technologies used:</h2>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        {project.getViewGithubText(language)}
      </a>

      <div className="project-images">
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`Screenshot of ${project.title}`} />
        ))}
      </div>

      {project.year === "2023" && <p>{project.getInProgressText(language)}</p>}
    </div>
  );
};

export default ProjectDetails;
