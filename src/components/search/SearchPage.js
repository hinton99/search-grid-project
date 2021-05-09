import React, { useState, useEffect } from 'react';
import { SchoolsList } from './SchoolsList';
import { SearchBar } from './SearchBar';

export const SearchPage = () => {
    const [keyword, setKeyword] = useState('');
    // ^^^ this state that stores your search term
    // ^^^ this a function you call to change the state
    const [schoolsList, setSchoolsList] = useState([]);

    // ^^^ this state that stores your schoolslist
    /**
     * Fetch data from server
     */
    const fetchData = async () => {
      const res = await fetch('https://api.schoolspider.co.uk/v1/schools');
      res.json().then(res => {
        setSchoolsList(res.data);
      });
    };
    useEffect(() => {
      fetchData();
    }, []);
    /**
     * this does this everytime the component renders 
     * check to see if we have a value in our search term if we do filter the schools list
     * otherwise return the whole school list
     */
    const filtered = keyword
      ? schoolsList.filter(school =>
          school.title.toLowerCase().includes(keyword.toLowerCase()),
        )
      : schoolsList;
    return (
      <>
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
        {/*  pass the filtered variable into the SchoolsList component as 'schools' */}
        {schoolsList && <SchoolsList schools={filtered} />}
      </>
    );
  };