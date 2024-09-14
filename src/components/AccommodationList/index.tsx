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
                        <div
                            key={accommodation.id}
                            className="accommodation-list-item"
                            style={{
                                backgroundImage: `url(${accommodation.cover})`,
                            }}
                        >
                            <span>{accommodation.title}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AccommodationList;
