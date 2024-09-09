import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
