import React from 'react';
import { Link } from 'react-router-dom';
import { SearchComponent } from '../search_component/SearchComponent';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logoWrapper">
        <Link to="/">
          <h1>FanBase</h1>
        </Link>
      </div>
      <div className="searchBar">
        <SearchComponent />
      </div>
      <div className="saveButtonWrapper">
        <Link to="/saved_events" className="savedEventsButton">
          View Saved Events
        </Link>
      </div>
    </header>
  );
};
