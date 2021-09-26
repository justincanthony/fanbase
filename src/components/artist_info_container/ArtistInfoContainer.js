import React, { useState, useEffect } from 'react';
import { fetchArtist } from '../../apiCalls';
import './ArtistInfoContainer.css';

export const ArtistInfoContainer = ({ artist }) => {
  const [artistInfo, setArtistInfo] = useState({});
  const [artistError, setArtistError] = useState('');

  const getArtistInfo = () => {
    fetchArtist(artist)
      .then((data) => setArtistInfo(data))
      // .then((data) => console.log(data))
      .catch((err) => setArtistError(err.message));
  };

  useEffect(() => {
    getArtistInfo(artist);
  }, []);

  const { id, facebook_page_url, name, image_url, url } = artistInfo;

  return (
    <section className="artistInfoContainer">
      <div className="bandImageWrapper">
        <img src={image_url} alt="Band" />
      </div>
      <div className="artistDetails">
        <h2 className="artistName">{name}</h2>
        <ul className="artistLinks">
          <li>
            <a href={url}>bandsintown</a>
          </li>
          <li>
            <a href={facebook_page_url}>FaceBook</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
