import React, { useState } from 'react';

const Rating = ({ rating, onRating }) => {
  const [localRating, setLocalRating] = useState(rating); // Estado local para rastrear a avaliação

  const handleClick = (value) => {
    setLocalRating(value); // Atualiza a avaliação local quando o usuário clica em uma estrela
    onRating(value); // Chama a função de retorno de chamada com a nova avaliação
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

export default Rating;
