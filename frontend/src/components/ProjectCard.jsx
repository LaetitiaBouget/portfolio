import codePreview from '../assets/images/3.png'

const ProjectCard = ({project}) => {
    return (
        <div className="project__card">
            <img src={project.coverImage} className="front"></img>
            <img src={codePreview} className="back"></img>
        </div>
    )
} 

export default ProjectCard;