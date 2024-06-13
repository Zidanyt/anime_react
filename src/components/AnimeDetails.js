import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AnimeDetails = () => {
  const { id } = useParams();
  const [animes, setAnimes] = useState([]);

  // Carregar animes do localStorage quando o componente é montado
  useEffect(() => {
    const storedAnimes = localStorage.getItem('animes');
    if (storedAnimes) {
      setAnimes(JSON.parse(storedAnimes));
    }
  }, []);

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
        <p><strong>Ano:</strong> {anime.year} | <strong>Gênero:</strong> {anime.genre} | <strong>Classificação:</strong> {anime.rating}</p>
        <p>{anime.description}</p>
      </div>
    </div>
  );
}

export default AnimeDetails;
