import { useState, useEffect } from "react";
import { Accommodation } from "../models/Accommodation"; // Assurez-vous de bien importer votre modèle

const useFetch = (url: string) => {
    const [data, setData] = useState<Accommodation[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const result: Accommodation[] = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
