import React from 'react';
import './EventCard.css';
import dayjs from 'dayjs';

export const EventCard = ({ concert, deleteShow }) => {
  console.log(concert);
  const handleClick = (concert) => {
    localStorage.removeItem(concert.id);
  };

  return (
    <article className="eventCard" id={concert.id} concert={concert}>
      <p className="date">
        {dayjs(concert.datetime).format('MM/DD/YYYY   hh:mm')}
      </p>
      <p className="venue">{concert.venue.name}</p>
      <p className="title">{concert.title}</p>
      <p className="location">{concert.venue.location}</p>
      <button
        className="deleteEventButton"
        type="submit"
        onClick={() => deleteShow(concert.id)}
      >
        Remove Concert
      </button>
    </article>
  );
};