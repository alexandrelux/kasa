import { ReactNode, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="titlebar" onClick={toggleDropdown}>
                <div className="title">{title}</div>
                <FontAwesomeIcon
                    icon={faArrowUp}
                    className={`icon ${isOpen ? "rotated" : ""}`}
                />
            </div>
            <p className={`description ${isOpen ? "open" : ""}`}>{children}</p>
        </div>
    );
};

export default Dropdown;
