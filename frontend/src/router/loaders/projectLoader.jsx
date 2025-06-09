import { projects } from '../../assets/dataProjects';

export async function projectLoader({ params }) {
    const project = projects.find(p => p.id === params.id);
    if(!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return project;
}