import React from 'react';
import { Link } from 'react-router-dom';
import { SearchComponent } from '../search_component/SearchComponent';
import './Navbar.css';

export const Navbar = ({ handleChange }) => {
	return (
		<header className="navbar">
			<div className="logoWrapper">
				<Link to="/">
					<img src="" alt="App Logo" />
				</Link>
			</div>
			<div className="searchBar">
				<SearchComponent handleChange={handleChange} />
			</div>
			<div className="BackButtonWrapper">
				<Link to="/">Home/Back</Link>
			</div>
		</header>
	);
};
