import React, {useState, useEffect} from 'react'
import { NewsPage } from '../components/NewsPage';

export const NewsItem = (props) => {

    const [hasError, setError] = useState();
    const [newsItem, setNewsItem] = useState();
    const [loading, setIsLoading] = useState(false);

    async function fetchData() {
        const res = await fetch(`https://api.schoolspider.co.uk/v1/schools/1/news/${props.match.params.id}`);
        res.json()
            .then(res => {
                setNewsItem(res.data)
                setIsLoading(false)
            })
            .catch(err => setError(err))
        }   

        console.log(props);
        
    useEffect(() => {
        setIsLoading(true)
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="text-gray-500">Loading News Item...</div>
        )
    }

    if (hasError) {
        return (
            <div className="text-gray-500">ERROR</div>
        )
    }


    return (
        <div className="container mx-auto">
            {newsItem && (
                <NewsPage newspage={newsItem} />
            )}
        </div>
    )
}
