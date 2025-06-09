import { useLoaderData } from 'react-router';

export default function ProjectDetails() {

const project = useLoaderData();

  return (
    <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
    </div>
  )
}
