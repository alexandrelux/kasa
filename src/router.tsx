import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/Homepage";
import Errorpage from "./pages/Errorpage";
import Aboutpage from "./pages/Aboutpage";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/kasa/" element={<Layout />}>
                <Route index element={<Homepage />} />{" "}
                <Route path="about" element={<Aboutpage />} />{" "}
                <Route path="*" element={<Errorpage />} />{" "}
            </Route>
            <Route path="/kasa/*" element={<Errorpage />} />{" "}
        </Routes>
    );
};

export default MyRouter;
