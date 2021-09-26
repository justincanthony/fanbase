import React, { useState, useEffect } from 'react';
import './SavedEventsContainer.css';
import { EventCard } from '../event_card/EventCard';
export const SavedEventsContainer = () => {
  const [savedConcerts, setSavedConcerts] = useState([]);

  const deleteShow = (id) => {
    const filteredConcerts = savedConcerts.filter(
      (concert) => concert.id !== id
    );
    setSavedConcerts(filteredConcerts);
    localStorage.removeItem(id);
  };

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
    <EventCard key={concert.id} concert={concert} deleteShow={deleteShow} />
  ));

  return (
    <section className="savedConcertContainer">
      <h3>Saved Events</h3>
      {savedEvents && savedEvents}
    </section>
  );
};
