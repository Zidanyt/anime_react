import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const AnimeList = ({ title, animes, addToFavorites, updateRating }) => {
  const [visibleAnimes, setVisibleAnimes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear] = useState('');
  const [selectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [filteredAnimes, setFilteredAnimes] = useState(animes);

  useEffect(() => {
    const filterAnimes = () => {
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
    };

    filterAnimes(); // Chama a função diretamente ao montar o componente

    // Agora, useEffect observa todas as variáveis usadas dentro de filterAnimes
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
      <h2>{title}</h2>
      <div>
        <input
          type="text"
          placeholder="Buscar anime..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
            <b>Chegou ao final da lista de animes.</b>
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
              <button onClick={() => addToFavorites(anime)}>Adicionar aos Favoritos</button>
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

AnimeList.propTypes = {
  title: PropTypes.string.isRequired,
  animes: PropTypes.array.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  updateRating: PropTypes.func.isRequired,
};

export default AnimeList;
