import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ number }: { number: number }) => {
    const myNumber = Math.floor(number);
    switch (myNumber) {
        case 0:
            return (
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                </div>
            );
        case 1:
            return (
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                </div>
            );
        case 2:
            return (
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                </div>
            );
        case 3:
            return (
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                </div>
            );
        case 4:
            return (
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="" />
                </div>
            );
        case 5:
            return (
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                    <FontAwesomeIcon icon={faStar} className="active" />
                </div>
            );
        default:
            return (
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                    <FontAwesomeIcon icon={faStar} className="" />
                </div>
            );
    }
};

export default Stars;
