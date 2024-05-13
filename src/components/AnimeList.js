// AnimeList.js
import React from 'react';
import { Link } from 'react-router-dom';

const AnimeList = ({ animes }) => {
  return (
    <div>
      <h2>Lista de Animes</h2>
      <ul>
        {animes.map(anime => (
          <li key={anime.id}>
            <h3>{anime.name}</h3>
            <Link to={`/anime/${anime.name}`}>
              <img width={200} src={anime.image} alt={anime.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;
