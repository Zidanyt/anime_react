import React from 'react';
import { useParams } from 'react-router-dom';

const AnimeDetails = ({ animes }) => {
  const { id } = useParams();
  const anime = animes.find(anime => anime.id === parseInt(id));

  if (!anime) {
    return <div>Não foi possível encontrar detalhes para este anime.</div>;
  }

  return (
    <div>
      <h2>Detalhes do Anime</h2>
      <div>
        <h3>{anime.name}</h3>
        <img src={anime.image} alt={anime.name} />
        <p>{anime.description}</p>
      </div>
    </div>
  );
}

export default AnimeDetails;
