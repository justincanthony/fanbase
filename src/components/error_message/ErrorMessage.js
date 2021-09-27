import React from 'react';
import './ErrorMessage.css';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="errorDisplay">
      <h2>Uh oh...</h2>
      {message && <h3>{message}</h3>}
      {!message && <p>Something Went Wrong</p>}
    </div>
  );
};
