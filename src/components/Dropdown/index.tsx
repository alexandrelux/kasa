import { ReactNode, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
                    icon={faChevronUp}
                    className={`icon ${isOpen ? "rotated" : ""}`}
                />
            </div>
            <div className={`description ${isOpen ? "open" : ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
