import Logo from "../Logos/logo";
import Nav from "../Nav/Nav";
import "./index.scss";

const Header = () => {
    return (
        <header>
            <div className="headercontent">
                <Logo />
                <Nav />
            </div>
        </header>
    );
};

export default Header;
