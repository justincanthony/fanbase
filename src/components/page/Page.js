import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Page.css';
import { Navbar } from '../navbar/Navabar';
import { ArtistInfoContainer } from '../artist_info_container/ArtistInfoContainer';
// import { Footer }
import { fetchArtist, fetchEvents } from '../../apiCalls';
import { ConcertContainer } from '../concert_container/ConcertContainer';
import { SavedEventsContainer } from '../saved_events_container/SavedEventsContainer';

export const Page = () => {
  const [artistInfo, setArtistInfo] = useState({});
  const [concerts, setConcerts] = useState([]);
  const [artistError, setArtistError] = useState('');
  const [concertsError, setConcertsError] = useState('');

  const handleChange = (artist) => {
    fetchArtist(artist)
      .then((data) => setArtistInfo(data))
      .catch((err) => setArtistError(err.message));
    fetchEvents(artist)
      // .then((data) => console.log(data))
      .then((data) => setConcerts(data))
      .catch((err) => setConcertsError(err.message));
  };

  return (
    <main className="main">
      {/* {console.log(artistInfo)}x */}
      <Navbar handleChange={handleChange} />
      <Route
        exact
        path="/artist_info"
        render={() => {
          return (
            <section className="pageContainer">
              <ArtistInfoContainer artistInfo={artistInfo} />
              <ConcertContainer concerts={concerts} />
            </section>
          );
        }}
      />
      <Route
        exact
        path="/saved_events"
        render={() => {
          return (
            <section className="pageContainer">
              <ArtistInfoContainer artistInfo={artistInfo} />
              <SavedEventsContainer />
            </section>
          );
        }}
      />
      {/* <Footer /> */}
    </main>
  );
};
