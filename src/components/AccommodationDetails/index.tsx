import { Accommodation } from "../../models/Accommodation";
import Carroussel from "../Carroussel";
import Dropdown from "../Dropdown";
import Stars from "../Stars";
import "./index.scss";

const AccommodationDetails = ({
    accommodation,
}: {
    accommodation: Accommodation;
}) => {
    return (
        <div className="accommodationDetails">
            <Carroussel accommodation={accommodation} />

            <div className="accommodationDetailsContents">
                <div>
                    <h2 className="title">{accommodation.title}</h2>
                    <div className="location">{accommodation.location}</div>
                    <div className="tags">
                        {accommodation.tags.map((item) => {
                            return (
                                <div key={`tag${item}`}>
                                    {item.split(" ")[0]}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="ratingAndAuthor">
                    <Stars number={parseInt(accommodation.rating)} />
                    <div className="author">
                        <div className="fullname">
                            <span className="accommodation-host-name">
                                {accommodation.host.name.split(" ")[0]}
                            </span>
                            <span className="accommodation-host-name">
                                {accommodation.host.name.split(" ")[1]}
                            </span>
                        </div>
                        <img
                            src={accommodation.host.picture}
                            alt="accommodation host"
                        />
                    </div>
                </div>
            </div>

            <div className="dropdownsAccommodationDetails">
                <Dropdown title="Description">
                    {accommodation.description}
                </Dropdown>
                <Dropdown title="Equipements">
                    {accommodation.equipments.map((item) => {
                        return <p key={`p${item}`}>{item}</p>;
                    })}
                </Dropdown>
            </div>
        </div>
    );
};

export default AccommodationDetails;
