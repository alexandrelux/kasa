import AccommodationList from "../components/AccommodationList";
import Cover from "../components/Cover";
import { Accommodation } from "../models/Accommodation";
import { appartments } from "../utils/const";

const Homepage = () => {
    // TODO use this hook when the backend will be developed
    // const { data, loading, error } = useFetch(API_URL);
    const loading = false;
    const error = null;
    const data: Accommodation[] = appartments;

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="spacer" />
            <Cover>Chez vous, partout et ailleurs</Cover>
            <div className="spacer" />
            <AccommodationList accommodations={data} />
            <div className="spacer" />
        </>
    );
};

export default Homepage;
