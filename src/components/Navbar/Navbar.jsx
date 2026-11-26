import { Link } from 'react-router-dom';
import './Navbar.css';


function NavBar() {
    return (

        <section>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/admin">Admin Portal</Link></li>
                 
                </ul>
            </nav>

        </section>

    );
}

export default NavBar;