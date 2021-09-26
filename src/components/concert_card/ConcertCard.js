import React from 'react';
import dayjs from 'dayjs';
import './ConcertCard.css';

export const ConcertCard = ({ concert, handle }) => {
  const handleClick = (concert) => {
    localStorage.setItem(concert.id, JSON.stringify(concert));
  };

  return (
    <article className="concertCard" id={concert.id} concert={concert}>
      <p className="date">
        {dayjs(concert.datetime).format('MM/DD/YYYY   h:m')}
      </p>
      <p className="venue">{concert.venue.name}</p>
      <p className="title">{concert.title}</p>
      <p className="location">{concert.venue.location}</p>
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
