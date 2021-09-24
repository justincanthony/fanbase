import React from 'react';
import './ConcertCard.css';
import { Link } from 'react-router-dom';

export const ConcertCard = ({ concert }) => {
  return (
    <Link to="">
      {console.log(concert)}
      <article className="concertCard">
        {concert.datetime}
        {concert.venue.name}
        {concert.title}
        {concert.venue.location}
      </article>
    </Link>
  );
};
