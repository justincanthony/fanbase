import React, { useState, useEffect } from 'react';
import './Page.css';
import { Navbar } from '../navbar/Navabar';
import { ArtistInfoContainer } from '../artist_info_container/ArtistInfoContainer';
// import { Footer }
import { Route, Switch } from 'react-router-dom';
import { WelcomeContainer } from '../welcome_container/WelcomeContainer';
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
      // .then((data) => console.log(data))
      .catch((err) => setArtistError(err.message));
    fetchEvents(artist)
      // .then((data) => console.log(data))
      .then((data) => setConcerts(data))
      .catch((err) => setConcertsError(err.message));
  };

  return (
    <main className="main">
      <Navbar handleChange={handleChange} />
      <Switch>
        <Route exact path="/">
          <WelcomeContainer />
        </Route>
        <Route
          exact
          path="/artists/:artist"
          render={({ match }) => {
            console.log(match);
            const { params } = match;
            return (
              <section className="pageContainer">
                <ArtistInfoContainer artistInfo={artistInfo} />
                <ConcertContainer concerts={concerts} />
              </section>
            );
          }}
        ></Route>
        {/* <SavedEventsContainer /> */}
      </Switch>
      {/* <Footer /> */}
    </main>
  );
};
