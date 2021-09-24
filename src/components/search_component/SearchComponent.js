import React, { useState, useEffect } from 'react';
import './SearchComponent.css';

export const SearchComponent = ({ handleChange }) => {
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(artist);
  };

  return (
    <div className="searchBar">
      <form>
        <input
          type="text"
          placeholder="artist name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Search
        </button>
      </form>
    </div>
  );
};
