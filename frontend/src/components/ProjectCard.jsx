const ProjectCard = ({project}) => {
    return (
        <div className="project__card">
            <img src={project.cover}></img>
            <h1>{project.title}</h1>
        </div>
    )
} 

export default ProjectCard;