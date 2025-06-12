const ProjectCard = ({project}) => {
    return (
        <div className="project__card">
            <img src={project.cover}></img>
        </div>
    )
} 

export default ProjectCard;