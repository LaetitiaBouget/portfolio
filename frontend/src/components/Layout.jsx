import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="app__layout">
            <NavBar />
            <main className="main__content">
                <Outlet />
            </main>
            <Footer /> 
               
        </div>
    );
};

export default Layout;