import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating, onRating }) => {
  const [localRating, setLocalRating] = useState(rating);

  const handleClick = (value) => {
    const newRating = value === localRating ? 0 : value;
    setLocalRating(newRating);
    onRating(newRating);
  };

  return (
    <div>
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

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRating: PropTypes.func.isRequired,
};

export default Rating;
