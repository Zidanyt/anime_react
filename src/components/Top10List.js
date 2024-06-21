import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Top10List = ({ animes, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {animes.map(anime => (
          <li key={anime.id}>
            <h3>{anime.name}</h3>
            <Link to={`/anime/${anime.id}`}>
              <img width={200} src={anime.image} alt={anime.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Top10List.propTypes = {
  title: PropTypes.string.isRequired,
  animes: PropTypes.array.isRequired,
};

export default Top10List;
