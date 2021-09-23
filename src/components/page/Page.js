import React, { useState, useEffect } from 'react';
import './Page.css';
import { Navbar } from '../navbar/Navabar';
import { ArtistInfoContainer } from '../artist_info_container/ArtistInfoContainer';
// import { Footer }
import { fetchArtist, fetchEvents } from '../../apiCalls';

export const Page = () => {
	const [artistInfo, setArtistInfo] = useState({});
	const [eventInfo, setEventInfo] = useState({});
	const [error, setError] = useState('');

	const handleChange = (artist) => {
		fetchArtist(artist)
			.then((data) => console.log(data))
			// .then((data) => setArtistInfo(data.data))
			.catch((err) => setError(err.message));
	};

	return (
		<div className="app">
			<Navbar handleChange={handleChange} />
			<ArtistInfoContainer artistInfo={artistInfo} />
			{/* <Footer /> */}
		</div>
	);
};
