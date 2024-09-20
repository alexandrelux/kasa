import { Link } from "react-router-dom";
import "./Errorpage.scss";

const Errorpage = () => {
    return (
        <article>
            <h1>404</h1>
            <p className="description">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="link" to="/kasa/">
                Retourner sur la page d’accueil
            </Link>
        </article>
    );
};

export default Errorpage;
