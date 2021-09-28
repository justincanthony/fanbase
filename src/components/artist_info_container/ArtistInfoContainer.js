import React, { useState, useEffect } from 'react';
import { fetchArtist } from '../../apiCalls';
import './ArtistInfoContainer.css';
import PropTypes from 'prop-types';

const ArtistInfoContainer = ({ artist }) => {
  const [artistInfo, setArtistInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getArtistInfo = (artist) => {
    fetchArtist(artist).then((data) => setArtistInfo(data));
    // .then((data) => console.log(data));
  };

  useEffect(() => {
    getArtistInfo(artist);
    setIsLoading(false);
  }, [artist]);

  const { facebook_page_url, name, image_url, url } = artistInfo;

  return (
    <>
      {!artistInfo && <React.Fragment />}
      {artistInfo && isLoading && <p>Loading...</p>}
      {artistInfo && !isLoading && (
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
      )}
    </>
  );
};

export default ArtistInfoContainer;

ArtistInfoContainer.propTypes = {
  artist: PropTypes.string,
};
