import React, { useState } from 'react';

const Rating = ({ rating, onRating }) => {
  const [localRating, setLocalRating] = useState(rating);

  const handleClick = (value) => {
    const newRating = value === localRating ? 0 : value;
    setLocalRating(newRating);
    onRating(newRating);
  };

  return (
    <div>
      <span
        style={{ cursor: 'pointer', color: localRating === 0 ? 'gold' : 'gray' }}
        onClick={() => handleClick(0)}
      >
        Nenhuma Estrela
      </span>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{ cursor: 'pointer', color: value <= localRating ? 'gold' : 'gray' }}
          onClick={() => handleClick(value)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
