import React, {
    useState,
    useEffect
} from 'react'

export default function useFetch(url, method) {
    const [posts, setPosts] = useState('');
    const [fetchReqFlag, setFetchReqFlag] = useState(true);

    useEffect(() => {
        const fetchData = async () => {               
                const response = await fetch(url, {
                    method
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.status);
                }

                setPosts((prev) => [...data]);
           
        };

        fetchData();
       
    }, [fetchReqFlag]);

    return [
        posts,
        setPosts,       
        fetchReqFlag,
        setFetchReqFlag,
    ];
}