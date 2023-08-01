import React from 'react';

const Quote = ({ quote, author }) => {
  return (
    <div className="quote">
      <p className="quote-text">"{quote}"</p>
      <p className="quote-author">- {author}</p>
    </div>
  );
};

export default Quote;