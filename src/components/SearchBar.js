import React, { useState } from "react";


function SearchBar({onSearch})  {

    const [searchQuery, setSearchQuery] = useState('');

//https://openlibrary.org/search.json?q={search_query} api for book recommandation


    function handleSearchChange(e) {
        setSearchQuery(e.target.value)
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        onSearch(searchQuery);
      }
    
    

    return ( 
        <form className="searchbar-container" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search a book..."
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
    )
}

export default SearchBar;