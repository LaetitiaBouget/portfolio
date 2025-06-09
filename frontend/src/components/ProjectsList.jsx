import { Link } from 'react-router';
import { projects } from '../assets/dataProjects';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
    return (
        <div>
            {projects.map(project => (
                <Link key={project.id} to={`/project/${project.id}`}>
                    <ProjectCard project={project}/>
                </Link>
            ))}
        </div>
    )
}

export default ProjectsList;