import {useEffect, useState} from 'react';
import { getAllProjects } from '../api/projects';
import { Link } from 'react-router';
import ProjectCard from './ProjectCard';


const ProjectsList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data  = await getAllProjects();
                setProjects(data);
            } catch (error) {
                console.error('Erreur lors du chargement des projets:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <p>Chargement...</p>

    return (
        <div className ="projects__container">
            <div className ="projects__list">
                {projects.map(project => (
                    <Link key={project._id} to={`/project/${project._id}`}>
                        <ProjectCard project={project}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProjectsList;