import React from 'react'
import { Link } from 'react-router-dom'

export const NewsBox = ({news}) => {
    return (
        <div className="pt-8">
            <h1 className="text-4xl">Oakwood Primary School</h1>
            <div className="flex flex-wrap">
                {news.map(item => (
                    <div className="w-1/3">
                        <div className="mx-2 my-2">
                            <div className="p-8 bg-gray-300 border border-gray-400 rounded-md shadow-md">
                                <h3 className="text-lg" key={item.id}>{item.title}</h3>
                                <Link className="block p-1 mt-4 text-center text-white bg-green-700 rounded-lg hover:bg-green-800" to={`newsitems/${item.id}`} as={`/newsitems/${item.id}`}>View</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
