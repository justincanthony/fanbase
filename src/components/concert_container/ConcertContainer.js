import React, { useState, useEffect } from 'react';
import './ConcertContainer.css';
import { fetchEvents } from '../../apiCalls';
import { ConcertCard } from '../concert_card/ConcertCard';

export const ConcertContainer = ({ artist }) => {
  const [concerts, setConcerts] = useState([]);
  const [concertsError, setConcertsError] = useState('');

  const getConcertInfo = (artist) => {
    fetchEvents(artist)
      .then((data) => setConcerts(data))
      // .then((data) => console.log(data))
      .catch((err) => setConcertsError(err.message));
  };

  useEffect(() => {
    getConcertInfo(artist);
  }, [concerts]);

  const concertCards = concerts.map((concert) => {
    return <ConcertCard key={concert.id} concert={concert} />;
  });
  return (
    <section className="concertContainer">
      <h3>Upcoming Events</h3>
      {concertCards}
    </section>
  );
};
