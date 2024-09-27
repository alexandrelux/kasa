import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accommodation } from "../../models/Accommodation";
import "./index.scss";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carroussel = ({ accommodation }: { accommodation: Accommodation }) => {
    const [i, setI] = useState(0);

    const handleChevronLeft = () => {
        if (i > 0) {
            setI(i - 1);
        } else if (i === 0) {
            setI(accommodation.pictures.length - 1);
        }
    };

    const handleChevronRight = () => {
        if (i < accommodation.pictures.length - 1) {
            setI(i + 1);
        } else if (i === accommodation.pictures.length - 1) {
            setI(0);
        }
    };

    return (
        <div className="carroussel">
            <img src={accommodation.pictures[i]} alt={accommodation.title} />

            {accommodation.pictures.length > 1 ? (
                <>
                    <FontAwesomeIcon
                        onClick={handleChevronLeft}
                        className="chevronLeft"
                        icon={faChevronLeft}
                    />
                    <FontAwesomeIcon
                        onClick={handleChevronRight}
                        className="chevronRight"
                        icon={faChevronRight}
                    />
                    <span className="compteur">{`${i + 1}/${
                        accommodation.pictures.length
                    }`}</span>
                </>
            ) : null}
        </div>
    );
};

export default Carroussel;
