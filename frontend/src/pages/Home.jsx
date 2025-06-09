import ProjectsList from "../components/ProjectsList";

const Home = () => {
    return (
        <section className ="works">
            <h1>Mes réalisations</h1>
            <div id="works">
                <ProjectsList />
            </div>
        </section>    
    );
};

export default Home;