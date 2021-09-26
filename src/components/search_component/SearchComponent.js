import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchComponent.css';

export const SearchComponent = ({ handleChange }) => {
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(artist);
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
        <div className="submitContainer">
          <Link to={`/artists/${artist}`}>
            <button
              className="submitButton"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Search
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
