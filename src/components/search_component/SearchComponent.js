import React, { useState, useEffect } from 'react';
import './SearchComponent.css';

export const SearchComponent = () => {
	const [artist, setArtist] = useState('');

	useEffect(() => {}, [artist]);

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
