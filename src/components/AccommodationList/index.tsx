import { Link } from "react-router-dom";
import { Accommodation } from "../../models/Accommodation";
import "./index.scss";

const AccommodationList = ({
    accommodations,
}: {
    accommodations: Accommodation[];
}) => {
    return (
        <div className="accommodationListComponent">
            <div className="accommodationList">
                {accommodations &&
                    accommodations.map((accommodation) => (
                        <Link
                            key={`link${accommodation.id}`}
                            to={`/kasa/?id=${accommodation.id}`}
                            className="accommodation-list-item-link"
                        >
                            <div
                                key={accommodation.id}
                                className="accommodation-list-item"
                                style={{
                                    backgroundImage: `url(${accommodation.cover})`,
                                }}
                            ></div>
                            <div className="filter">
                                <span>{accommodation.title}</span>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default AccommodationList;
