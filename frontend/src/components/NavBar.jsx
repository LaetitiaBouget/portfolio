import logo from '../assets/images/logo.png';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <header>
            <img src = { logo } className='logo'/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">REALISATIONS</Link>
                    </li>
                    <li>
                        <Link to="/about">A PROPOS</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
