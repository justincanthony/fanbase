import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchComponent.css';

export const SearchComponent = () => {
  const [artist, setArtist] = useState('');

  const clearInput = (e) => {
    setArtist('');
  };

  return (
    <div className="searchContainer">
      <form>
        <input
          className="searchInput"
          type="text"
          placeholder="artist name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </form>
      <Link to={`/artists/${artist}`}>
        <button
          className="submitButton"
          type="submit"
          onClick={(e) => clearInput(e)}
        >
          Search
        </button>
      </Link>
    </div>
  );
};
