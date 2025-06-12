import { Link } from 'react-router';
import { projects } from '../assets/dataProjects';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
    return (
        <div className ="projects__container">
            <div className ="projects__list">
                {projects.map(project => (
                    <Link key={project.id} to={`/project/${project.id}`}>
                        <ProjectCard project={project}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProjectsList;