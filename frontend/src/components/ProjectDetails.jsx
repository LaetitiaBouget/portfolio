import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const ProjectDetails = () => {
    const project = useLoaderData();

  return (
    <div>
        <Link to="/">Retour</Link>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.url}</p>
        <ul>
          {project.clientObjectives.map((clientObjective, index) => (
            <li key={index}>{clientObjective}</li>
          ))}
        </ul>
        <ul>
          {project.missions.map((mission, index) => (
            <li key={index}>{mission}</li>
          ))}
        </ul>
        <p>{project.techStack.join(', ')}</p>
        <p>{new Date(project.deliveryDate)
          .toLocaleDateString('fr-FR', { year: 'numeric', month:'long',})
          .toUpperCase()}
        </p>
        <div className="project-images">
        {project.images.map((imgUrl, index) => (
          <img key={index} src={imgUrl} />
        ))}
      </div>
        
    </div>
  );
};

export default ProjectDetails;

