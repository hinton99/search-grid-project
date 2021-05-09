import React, {useState, useEffect} from 'react'
import { NewsBox } from '../components/NewsBox';

export const News = () => {

    const [hasError, setError] = useState();
    const [newsData, setNewsData] = useState();
    const [loading, setIsLoading] = useState(false);

    async function fetchData() {
        const res = await fetch("https://api.schoolspider.co.uk/v1/schools/1/news");
        res.json()
            .then(res => {
                setNewsData(res.data)
                setIsLoading(false)
            })
            .catch(err => setError(err))

            console.log();
    }   


    useEffect(() => {
        setIsLoading(true)
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="text-gray-500">Loading Schools...</div>
        )
    }

    if (hasError) {
        return (
            <div className="text-gray-500">ERROR</div>
        )
    }


    return (
        <div className="container mx-auto">
            {newsData && (
                <NewsBox news={newsData} />
            )}
        </div>
    )
}
