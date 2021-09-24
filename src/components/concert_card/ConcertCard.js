import React from 'react';
import './ConcertCard.css';
import { Link } from 'react-router-dom';

export const ConcertCard = ({ concert, handle }) => {
  return (
    <article className="concertCard" id={concert.id}>
      {concert.datetime}
      {concert.venue.name}
      {concert.title}
      {concert.venue.location}
      {/* <button className="attendShow" type="submit" onClick={() =>  */}
    </article>
  );
};
