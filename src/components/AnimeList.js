import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const AnimeList = ({ animes, addToFavorites, updateRating }) => {
  const [visibleAnimes, setVisibleAnimes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [filteredAnimes, setFilteredAnimes] = useState(animes);

  useEffect(() => {
    let filtered = animes;

    if (searchTerm) {
      filtered = filtered.filter(anime =>
        anime.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedYear) {
      filtered = filtered.filter(anime =>
        anime.year === parseInt(selectedYear)
      );
    }

    if (selectedGenre) {
      filtered = filtered.filter(anime =>
        anime.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    if (selectedRating > 0) {
      filtered = filtered.filter(anime =>
        anime.rating === selectedRating
      );
    }

    setFilteredAnimes(filtered);
    setVisibleAnimes(filtered.slice(0, 10));
    setHasMore(filtered.length > 10);
  }, [searchTerm, selectedYear, selectedGenre, selectedRating, animes]);

  const fetchMoreData = () => {
    if (visibleAnimes.length >= filteredAnimes.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setVisibleAnimes(visibleAnimes.concat(filteredAnimes.slice(visibleAnimes.length, visibleAnimes.length + 10)));
    }, 1000);
  };

  return (
    <div>
      <h2>Lista de Animes</h2>
      <div>
        <Rating
          rating={selectedRating}
          onRating={setSelectedRating}
        />
      </div>
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
