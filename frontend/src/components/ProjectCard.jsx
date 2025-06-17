const ProjectCard = ({project}) => {
    return (
        <>
        <div className="project__card">
            <img src={project.coverImage} className="front"></img>
            <img src={project.codePreview} className="back"></img>
        </div>
        <h3>{project.title}</h3>
        </>
    )
} 

export default ProjectCard;