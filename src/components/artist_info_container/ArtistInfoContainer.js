import React, { useState, useEffect } from 'react';
import { fetchArtist } from '../../apiCalls';
import './ArtistInfoContainer.css';


export const ArtistInfoContainer = () => {
	const [artistInfo, setArtistInfo] = useState({});
	const [error, setError] = useState('');
	
  const handleChange = (artist) => {
		fetchArtist(artist)
			.then((data) => console.log(data))
			.catch((err) => setError(err.message));
	};
	return <div></div>;
};
