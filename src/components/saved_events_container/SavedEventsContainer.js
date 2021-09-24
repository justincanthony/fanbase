import React, { useState, useEffect } from 'react';
import './SavedEventsContainer.css';
import { ConcertCard } from '../concert_card/ConcertCard';

export const SavedEventsContainer = () => {
  const [savedConcerts, setSavedConcerts] = useState([]);

  const getFromStorage = () => {
    const keys = Object.keys(localStorage);
    if (keys.length) {
      keys.forEach((key) => {
        setSavedConcerts([
          ...savedConcerts,
          JSON.parse(localStorage.getItem(key)),
        ]);
      });
    }
  };

  useEffect(() => {
    getFromStorage();
  }, []);

  const savedEvents = savedConcerts.map((concert) => (
    <ConcertCard key={concert} concert={concert} />
  ));
  return (
    <section className="savedConcertContainer">
      {/* {savedEvents < 1 && <Error message={`Lets Find Some Shows!`} />} */}
      {savedEvents && savedEvents}
    </section>
  );
};
