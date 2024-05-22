import React from 'react';
import { Link } from 'react-router-dom';

const Top10List = ({ animes }) => {
    return (
        <div>
            <h2>Top 10 Animes</h2>
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

export default Top10List;
