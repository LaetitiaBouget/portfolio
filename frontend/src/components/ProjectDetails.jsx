import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import SlideShow from './SlideShow';
import ScrollToTopButton from './ScrollToTop';

const ProjectDetails = () => {
  const project = useLoaderData();

  const experienceSections = [
      { title: "Problématiques rencontrées", key: "issues" },
      { title: "Solutions apportées", key: "solutions" },
      { title: "Axes d’amélioration", key: "improvements" },
  ];

  return (
    <section className="project-details__container">
      <div className="project__header">
        <Link to="/" className="link__return">&lt;--- Retour</Link>
        <h1>{project.title}</h1>
      </div>
      
      <div className= "project__data">
        <div className="project__infos">
            <h2 className="section__title">Présentation du projet</h2>
            <p>{project.description}</p>
            <p>{project.url}</p>
            <p>{project.techStack.join(', ')}</p>
            <p>{new Date(project.deliveryDate)
              .toLocaleDateString('fr-FR', { year: 'numeric', month:'long',})
              .toUpperCase()}
            </p>
        </div>

        <div className="project__missions">
            <h2 className="section__title">Missions réalisées</h2>

        
            <ul>
              {project.missions.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ul>

        </div>
        </div>
      <h2 className="section__title experience">Retour d’expérience</h2>
      <div className="project__experience">
        
        {experienceSections.map(({ title, key }) => (
          project[key]?.length > 0 && (
            <div className="experience__block" key={key}>
              <h3 className="experience__block__title">{title}</h3>
              <ul>
                {project[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>
      
      <h2 className="section__title gallery">Le projet en images</h2>
      <div className="project__gallery">
        <SlideShow imageUrls = {project.images} />      
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default ProjectDetails;

