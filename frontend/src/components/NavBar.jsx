import logo from '../assets/images/logo.png';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <img src = { logo } className='logo'/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Réalisations</Link>
                    </li>
                    <li>
                        <Link to="/about">À propos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
