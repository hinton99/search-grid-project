import React from 'react'
import { Link } from 'react-router-dom'

export const SchoolBox = ({schools}) => {
    return (
        <>
        <div className="flex flex-wrap pt-4">
            {schools.map(item => (
                    <div className="w-1/3">
                        <div className="mx-2 my-4 text-center">
                            <div className="p-8 bg-gray-300 border border-gray-400 rounded-md shadow-md">
                                <h3 key={item.id} className="text-lg">{item.title}</h3>
                                <Link className="block p-1 mt-4 text-white bg-green-700 rounded-lg hover:bg-green-800" to="/newsitems">View</Link>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
        </>
    )
}
