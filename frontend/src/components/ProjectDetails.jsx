import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import SlideShow from './SlideShow';

const ProjectDetails = () => {
  const project = useLoaderData();

  const experienceSections = [
      { title: "Problématiques rencontrées", key: "issues" },
      { title: "Solutions apportées", key: "solutions" },
      { title: "Axes d’amélioration", key: "improvements" },
  ];

  return (
    <section className="project__container">

      <Link to="/">Retour</Link>
      <h1>{project.title}</h1>

      <div className= "project__infos">
        <div className= "project__data">
          <h2>Présentation du projet</h2>
          <p>{project.description}</p>
          <p>{project.url}</p>
          <p>{project.techStack.join(', ')}</p>
          <p>{new Date(project.deliveryDate)
            .toLocaleDateString('fr-FR', { year: 'numeric', month:'long',})
            .toUpperCase()}
          </p>
        </div>
          
        <div className="project__missions">
          <h2>Missions réalisées</h2>
          <ul>
            {project.missions.map((mission, index) => (
              <li key={index}>{mission}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project__experience">
        <h2>Retour d’expérience</h2>

        {experienceSections.map(({ title, key }) => (
          project[key]?.length > 0 && (
            <div className="experience__block" key={key}>
              <h3>{title}</h3>
              <ul>
                {project[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>

      <SlideShow imageUrls = {project.images} />      
    </section>
  );
};

export default ProjectDetails;

