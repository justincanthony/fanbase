import React, { useState, useEffect } from 'react';
import './ConcertContainer.css';
import { fetchEvents } from '../../apiCalls';
import { ConcertCard } from '../concert_card/ConcertCard';
// import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ErrorMessage } from '../error_message/ErrorMessage';

export const ConcertContainer = ({ artist }) => {
  const [concerts, setConcerts] = useState([]);
  const [concertsError, setConcertsError] = useState('');

  const getConcertInfo = (artist) => {
    fetchEvents(artist)
      .then((data) => setConcerts(data))
      .catch((err) => setConcertsError(err.message));
  };

  useEffect(() => {
    getConcertInfo(artist);
  }, [artist]);

  let concertCards;
  if (concerts.length > 0) {
    concertCards = concerts.map((concert) => {
      return <ConcertCard key={concert.id} concert={concert} artist={artist} />;
    });
  } else {
    concertCards = (
      <ErrorMessage message={`Artist name "${artist}" does not exist`} />
    );
  }

  // const concertCards = concerts.map((concert) => {
  //   return <ConcertCard key={concert.id} concert={concert} notify={notify} />;
  // });

  return (
    <section className="concertContainer">
      <h3>Upcoming Events</h3>
      {concertCards}
    </section>
  );
};
