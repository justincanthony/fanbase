import React from 'react';
import './Page.css';
import { Navbar } from '../navbar/Navabar';
import { ArtistInfoContainer } from '../artist_info_container/ArtistInfoContainer';
// import { Footer }
import { Route, Switch } from 'react-router-dom';
import { WelcomeContainer } from '../welcome_container/WelcomeContainer';
import { ConcertContainer } from '../concert_container/ConcertContainer';
import { SavedEventsContainer } from '../saved_events_container/SavedEventsContainer';
import { ErrorMessage } from '../error_message/ErrorMessage';

export const Page = () => {
  return (
    <main className="main">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <WelcomeContainer />
        </Route>
        <Route
          exact
          path="/artists/:artist"
          render={({ match }) => {
            const { params } = match;
            return (
              <section className="pageContainer">
                <ArtistInfoContainer artist={params.artist} />
                <ConcertContainer artist={params.artist} />
              </section>
            );
          }}
        ></Route>
        <Route
          exact
          path="/saved_events"
          render={() => {
            return (
              <section className="pageContainer">
                <SavedEventsContainer />
              </section>
            );
          }}
        ></Route>
        <Route render={() => <ErrorMessage message={'Page Not Found'} />} />
      </Switch>
      {/* <Footer /> */}
    </main>
  );
};
