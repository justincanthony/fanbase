import React from 'react';
import './EventCard.css';
import dayjs from 'dayjs';

export const EventCard = ({ concert, deleteShow }) => {
  console.log(concert, 'here');
  return (
    <article className="eventCard" id={concert.id} concert={concert}>
      <p className="lineUp">{concert.lineup[0]}</p>
      <p className="date">
        {dayjs(concert.datetime).format('MM/DD/YYYY   h:mm')}
      </p>
      <p className="venue">{concert.venue.name}</p>
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
