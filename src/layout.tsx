import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./layout.scss";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <div className="content">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
