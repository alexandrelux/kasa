import { ReactNode } from "react";
import "./index.scss";

const Cover = ({ children }: { children: ReactNode }) => {
    return (
        <div className="cover">
            <h1>{children}</h1>
        </div>
    );
};

export default Cover;
