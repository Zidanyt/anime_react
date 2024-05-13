// AnimeDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AnimeDetails = ({ animes }) => {
  const { name } = useParams();

  // Encontrar o anime com o nome correspondente
  const anime = animes.find(anime => anime.name === name);

  // Verificar se o anime foi encontrado
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
        <Link to="/" style={{ textDecoration: 'none', color: 'blue', marginTop: '10px', display: 'block' }}>Voltar para Lista de Animes</Link>
      </div>
    </div>
  );
}

export default AnimeDetails;
