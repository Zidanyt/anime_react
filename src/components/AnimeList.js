import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const AnimeList = ({ animes, addToFavorites, updateRating }) => {
  const [visibleAnimes, setVisibleAnimes] = useState(animes.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (visibleAnimes.length >= animes.length) {
      setHasMore(false);
      return;
    }

    // Simulate a delay for loading more data
    setTimeout(() => {
      setVisibleAnimes(visibleAnimes.concat(animes.slice(visibleAnimes.length, visibleAnimes.length + 10)));
    }, 1000); // 1-second delay
  };

  return (
    <div>
      <h2>Lista de Animes</h2>
      <InfiniteScroll
        dataLength={visibleAnimes.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Tentando...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Chegou aqui Erica??</b>
          </p>
        }
      >
        <ul>
          {visibleAnimes.map(anime => (
            <li key={anime.id}>
              <h3>{anime.name}</h3>
              <Link to={`/anime/${anime.id}`}>
                <img width={200} src={anime.image} alt={anime.name} />
              </Link>
              <button onClick={() => addToFavorites(anime)}>Add to Favorites</button>
              <Rating
                rating={anime.rating || 0}
                onRating={(rating) => updateRating(anime.id, rating)} 
              />
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default AnimeList;
