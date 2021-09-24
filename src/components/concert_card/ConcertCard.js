import React from 'react';
import dayjs from 'dayjs';
import './ConcertCard.css';

export const ConcertCard = ({ concert, handle }) => {
  const handleClick = (concert) => {
    localStorage.setItem(concert.id, JSON.stringify(concert));
  };

  return (
    <article className="concertCard" id={concert.id} concert={concert}>
      {dayjs(concert.datetime).format('MM/DD/YYYY // h:m')} //
      {concert.venue.name}
      {concert.title}//
      {concert.venue.location}
      <button
        className="attendShowButton"
        type="submit"
        onClick={() => handleClick(concert)}
      >
        Save Concert
      </button>
    </article>
  );
};
