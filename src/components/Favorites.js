import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {favorites.map(anime => (
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
}

Favorites.propTypes = {  
    title: PropTypes.string.isRequired,
    favorites: PropTypes.array.isRequired,
  };


export default Favorites;
