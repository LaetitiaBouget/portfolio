import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const ProjectDetails = () => {
    const project = useLoaderData();

  return (
    <div>
        <Link to="/">Retour</Link>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="project-images">
        {project.images.map((imgUrl, index) => (
          <img key={index} src={imgUrl} />
        ))}
      </div>
        
    </div>
  );
};

export default ProjectDetails;

