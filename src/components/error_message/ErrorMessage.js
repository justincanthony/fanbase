import React from 'react';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="error-display">
      <h2>Uh oh. {message}</h2>
      <h3>The show has been delayed.</h3>
    </div>
  );
};
