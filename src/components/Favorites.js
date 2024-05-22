import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
    return (
        <div>
            <h2>Favoritos</h2>
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

export default Favorites;
