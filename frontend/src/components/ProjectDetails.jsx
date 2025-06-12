import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const ProjectDetails = () => {
    const project = useLoaderData();

  return (
    <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <Link to="/">Retour</Link>
    </div>
  );
};

export default ProjectDetails;

