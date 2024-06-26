import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewAnimes = ({ animes, title }) => {
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
                        <p>{anime.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

NewAnimes.propTypes = {
    title: PropTypes.string.isRequired,
    animes: PropTypes.array.isRequired,
  };

export default NewAnimes;
