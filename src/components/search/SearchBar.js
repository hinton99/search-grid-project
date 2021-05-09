import React from 'react'

export const SearchBar = ({keyword, setKeyword}) => {
    return (
        <input className="flex w-1/2 p-2 mt-2 bg-gray-200 border border-gray-500 rounded-md shadow-md"
        value={keyword} 
        placeholder={"Search Schools..."} 
        onChange={(e) => setKeyword(e.target.value)} />
    )
}
