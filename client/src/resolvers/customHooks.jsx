import { useState, useEffect } from 'react';

export const useFetch = (url, requestOptions) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch(url, requestOptions);
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading }
}
