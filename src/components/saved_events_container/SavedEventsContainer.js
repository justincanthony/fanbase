import React, { useState, useEffect } from 'react';
import './SavedEventsContainer.css';
import { ConcertCard } from '../concert_card/ConcertCard';

export const SavedEventsContainer = () => {
  const [savedConcerts, setSavedConcerts] = useState([]);

  const getFromStorage = () => {
    const keys = Object.keys(localStorage);
    let savedEvents;
    if (keys.length > 0) {
      savedEvents = keys.map((key) => JSON.parse(localStorage.getItem(key)));
      setSavedConcerts([...savedEvents]);
    }
  };

  useEffect(() => {
    getFromStorage();
  }, []);

  const savedEvents = savedConcerts.map((concert) => (
    <ConcertCard key={concert.id} concert={concert} />
  ));

  return (
    <section className="savedConcertContainer">
      <h3>Saved Events</h3>
      {savedEvents && savedEvents}
    </section>
  );
};
