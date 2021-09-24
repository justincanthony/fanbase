import React from 'react';
import './ConcertCard.css';
import { Link } from 'react-router-dom';

export const ConcertCard = ({ concert, handle }) => {
  const handleClick = (concert) => {
    localStorage.setItem(concert.id, JSON.stringify(concert));
    console.log(concert);
  };

  return (
    <article className="concertCard" id={concert.id} concert={concert}>
      {concert.datetime}
      {concert.venue.name}
      {concert.title}
      {concert.venue.location}
      <button
        className="attendShow"
        type="submit"
        onClick={() => handleClick(concert)}
      >
        Save Concert
      </button>
    </article>
  );
};
