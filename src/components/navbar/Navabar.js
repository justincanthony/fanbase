import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
	return (
		<header className="navbar">
			<div className="logoWrapper">
				<Link to="/">
					<img src="" alt="App Logo" />
				</Link>
			</div>
			<div className="searchBar">{/* <SearchBar /> */}</div>
			<div className="BackButtonWrapper">
				<Link to="/">Home/Back</Link>
			</div>
		</header>
	);
};
