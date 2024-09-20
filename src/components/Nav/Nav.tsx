import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/kasa/">Accueil</Link>
                </li>
                <li>
                    <Link to="/kasa/about">A Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
