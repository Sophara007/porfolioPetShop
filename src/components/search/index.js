import React, { useRef } from 'react';
// Import createSearchParams
import { createSearchParams } from 'react-router-dom';
// Import useNavigate
import { useNavigate } from 'react-router';
const Search = () => {

  // get navigate function
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value
    }

    // use createSearchParams 
    const query = createSearchParams(searchQuery);

    // imperatively redirect with useNavigate() returned function
    navigate(`/search?${query}`)
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
