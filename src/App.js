import './App.css';
import React, { useState, useEffect } from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner'; 
// import businesses from '../src/data/businesses'; // dummy data
import Yelp from './utils/Yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchYelp = (term, location, sortBy) => {
    setIsLoading(true);
    Yelp.search(term, location, sortBy).then(results => {
      setBusinesses(results);
      setIsLoading(false);
    }).catch((err) => {
      console.error(err);
      setBusinesses([]); // no results
      setIsLoading(false);
    });
  };

  // Random search on initial load, display some random businesses
  useEffect(() => {
    const randomOffset = Math.floor(Math.random() * 40); // Yelp allows offset up to 1000
    setIsLoading(true);

    // Use random terms to search
    Yelp.search('food', 'Kuala Lumpur', 'best_match', randomOffset)
      .then(results => {
        setBusinesses(results);
        setIsLoading(false);
      }).catch((err) => {
        console.error(err);
        setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
        <h1 className="app-header"> Ravenous </h1>
      <SearchBar onSearch={searchYelp}/>

      {isLoading ? (
        <Spinner />
      ) :  businesses.length > 0 ? (
      <BusinessList businesses={businesses}/>
      ): (
        <p className="no-results">No results found. Try different keywords or location.</p>
      )}
    </div>
  );
}

export default App;
