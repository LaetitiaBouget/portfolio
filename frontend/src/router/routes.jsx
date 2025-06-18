import Layout from '../components/Layout';
import Home from '../pages/Home';
import Project from '../pages/Project';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import { projectLoader } from './loaders/projectLoader';

const routes = [
    {
        path: "/",
        Component: Layout,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'project',
                Component: Project
            },
            {
                path: 'project/:id',
                Component: Project,
                loader: projectLoader,
                errorElement: <NotFound />
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'contact',
                Component: Contact
            },
        ],
    },
];

export default routes;