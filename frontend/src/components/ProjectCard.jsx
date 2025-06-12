const ProjectCard = ({project}) => {
    return (
        <div className="project__card">
            <img src={project.coverImage}></img>
        </div>
    )
} 

export default ProjectCard;