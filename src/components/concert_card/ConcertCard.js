import React from 'react';
import './ConcertCard.css';
import { Link } from 'react-router-dom';

export const ConcertCard = ({ concert }) => {
  return (
    <Link to="">
      <article className="concertCard">{concert.venue.name}</article>
    </Link>
  );
};
