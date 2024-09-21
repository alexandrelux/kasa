import AccommodationDetails from "../components/AccommodationDetails";
import AccommodationList from "../components/AccommodationList";
import Cover from "../components/Cover";
import { Accommodation } from "../models/Accommodation";
import { useSearchParams } from "react-router-dom";
import Errorpage from "./Errorpage";
import { appartments } from "../utils/const";

const Homepage = () => {
    // TODO use this hook when the backend will be developed
    // const { data, loading, error } = useFetch(API_URL);
    const loading = false;
    const error = null;
    const data: Accommodation[] = appartments;

    const [searchParams] = useSearchParams();
    const queryValue = searchParams.get("id");
    const myAppartments = data.filter((item) => {
        return item.id === queryValue;
    });

    if (loading) return <div>Loading...</div>;

    if (error) return Errorpage();

    if (!queryValue) {
        return (
            <>
                <Cover>Chez vous, partout et ailleurs</Cover>
                <AccommodationList accommodations={data} />
            </>
        );
    } else {
        if (myAppartments.length === 1) {
            return <AccommodationDetails accommodation={myAppartments[0]} />;
        } else {
            return Errorpage();
        }
    }
};

export default Homepage;
