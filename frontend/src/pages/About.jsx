const About = () => {

    const keywords = [
        { label: "Créative", tooltip: "toujours en quête d'idées nouvelles et originales." },
        { label: "Minimaliste", tooltip: "adepte de la simplicité et de l’efficacité." },
        { label: "Artiste", tooltip: "passionnée par l’esthétique et le design." },
        { label: "\"Rangeuse\" compulsive", tooltip: "organisée et méticuleuse dans mon travail." },
        { label: "Pragmatique", tooltip: "tournée vers des solutions concrètes et efficaces." },
        { label: "Économe", tooltip: "engagée pour un numérique plus sobre et économique." },
    ];

    return (
        <div className="about__container">
            <h1>Je suis :</h1>
            <ul className="about__keywords">
                {keywords.map(({ label, tooltip }, i) => (
                    <li key={i} className="tooltip-container">
                    {label}
                    <span className="tooltip-text">{tooltip}</span>
                    </li>
                ))}
            </ul>
            <p>En bref, je suis une développeuse qui cherche à créer des applications web performantes, ergonomiques, accessibles, optimisées et éthiques.</p>
        </div>    
    );
};

export default About;
