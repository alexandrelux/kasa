import { ReactNode } from "react";
import "./index.scss";

const CoverAbout = ({ children }: { children?: ReactNode }) => {
    return (
        <div className="coverabout">
            <h1>{children}</h1>
        </div>
    );
};

export default CoverAbout;
