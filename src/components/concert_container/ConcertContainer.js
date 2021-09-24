import React from 'react';
import './ConcertContainer.css';
import { ConcertCard } from '../concert_card/ConcertCard';

export const ConcertContainer = ({ concerts }) => {
  const concertCards = concerts.map((concert) => {
    return <ConcertCard key={concert.id} concert={concert} />;
  });
  return <section className="concertContainer">{concertCards}</section>;
};
