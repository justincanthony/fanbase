import React from 'react';
import './ArtistInfoContainer.css';

export const ArtistInfoContainer = ({ artistInfo }) => {
  const { id, facebook_page_url, name, image_url, url } = artistInfo;

  return (
    <section className="artistInfo">
      <h2>{name}</h2>
      <img src={image_url} alt="Band" />
    </section>
  );
};
