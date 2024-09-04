import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/Homepage";
import Errorpage from "./pages/Errorpage";
import Aboutpage from "./pages/Aboutpage";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="about" element={<Aboutpage />} /> 
                <Route path="*" element={<Errorpage />} />
            </Route>
        </Routes>
    );
};

export default MyRouter;
