import React, {useState, useEffect} from 'react'
// import { SchoolBox } from '../components/SchoolBox'
import { SearchPage } from '../components/search/SearchPage';

export const Schools = () => {

    const [hasError, setError] = useState();
    const [schoolData, setSchoolData] = useState();
    const [loading, setIsLoading] = useState(false);    

    async function fetchData() {
        const res = await fetch("https://api.schoolspider.co.uk/v1/schools");
        res.json()
            .then(res => {
                setSchoolData(res.data)
                setIsLoading(false)
            })
            .catch(err => setError(err))
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
            <SearchPage/>
        </div>
    )
}
