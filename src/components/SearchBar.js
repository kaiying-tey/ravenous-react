import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(option => {
      const value = sortByOptions[option];
      return (
        <li
          key={value}
          className={sortBy === value ? 'active' : ''}
          onClick={() => setSortBy(value)}
        >
          {option}
        </li>
      );
    });
  };

  const handleSearch = () => {
    console.log(`Searching Yelp with "${term}" in "${location}" sorted by ${sortBy}`);
    // alert("Searching");
    if(term && location){
      onSearch(term, location, sortBy);
    } else{
      alert('Searching term and location must be valid (not empty)!');
    }
  };

  return (
    <div className="search-bar">
      <div className="sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="search-fields">
        <input
          placeholder="Pizza, Sushi, Cafes..."
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>
      <div className="search-button">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
