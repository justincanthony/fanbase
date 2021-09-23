import React, { useState, useEffect } from 'react';
import './SearchComponent.css';

export const SearchComponent = ({ handleChange }) => {
	const [artist, setArtist] = useState('');

	useEffect(() => {
		handleChange(artist);
	}, [artist]);

	return (
		<div className="searchBar">
			<form>
				<input
					type="text"
					value={artist}
					placeholder="artist name"
					onChange={(e) => setArtist(e.target.value)}
				></input>
			</form>
		</div>
	);
};
