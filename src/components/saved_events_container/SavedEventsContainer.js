import React from 'react';
import './SavedEventsContainer.css';
import { ConcertCard } from '../concert_card/ConcertCard';

export const SavedEventsContainer = ({ savedConcerts }) => {
  const savedEvents = savedConcerts.map((concert) => (
    <ConcertCard key={concert} concert={concert} />
  ));
  return <div>{savedEvents}</div>;
};
