import React, { useState } from "react";
import { querySearch } from "../Utils/querySearch";
import { Profile } from "./Profile";
import "../App.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState();
  const [profile, setProfile] = useState();
  const [error, setError] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.characterSearch.value.trim();
    setError();
    setSearchResults();

    querySearch(query).then((results) => {
      if (results == null) {
        setError("Invalid Search");
      } else {
        setProfile(0);
        setSearchResults(results);
      }
    });
  };

  const handleSelection = (selected) => {
    setProfile(parseInt(selected.currentTarget.id));
  };

  return (
    <div className="search_wrapper">
      <form className="search" onSubmit={handleSearch}>
        <p className="title">Star Wars Rolodex</p>
        <div className="searchbar_wrapper">
          <img
            src={require("../Assets/saber_hilt.png")}
            alt=""
            className="sabre"
          ></img>
          <input
            type="search"
            id="searchbar"
            name="characterSearch"
            placeholder="Search the Galaxy"
            onSubmit={handleSearch}
            className="search_bar"
          ></input>
        </div>
      </form>
      <div className="resultsWrapper">
        {searchResults && (
          <ol>
            {searchResults.map((person, i) => (
              <li
                key={i}
                id={i}
                onClick={handleSelection}
                selected={i === profile}
                className='search_result'
              >
                {person.name}
              </li>
            ))}
          </ol>
        )}
        {searchResults && <Profile id="profile" {...searchResults[profile]} />}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Search;
