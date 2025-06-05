import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />        
        </>
    );
};

export default Layout;