const ProjectCard = ({project}) => {
    return (
        <>
        <div className="project__card">
            <img src={project.coverImage} className="front" alt={`Aperçu du projet ${project.title}`}></img>
            <img src={project.codePreview} className="back" alt={`Aperçu du code pour ${project.title}`}></img>
        </div>
        <h3 className="project__card__title">{project.title}</h3>
        </>
    )
} 

export default ProjectCard;