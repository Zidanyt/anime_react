import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';
import Favorites from './components/Favorites';
import Top10List from './components/Top10List';
import NewAnimes from './components/NewAnimes';
import animes from './components/Data/animes';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const initialTop10 = JSON.parse(localStorage.getItem('top10')) || animes.filter(anime => anime.isTop10);
  const initialNewAnimes = JSON.parse(localStorage.getItem('newAnimes')) || animes.filter(anime => anime.isNew);

  const [favorites, setFavorites] = useState(initialFavorites);
  const [top10, setTop10] = useState(initialTop10);
  const [newAnimes, setNewAnimes] = useState(initialNewAnimes);

  useEffect(() => {
    const savedAnimes = JSON.stringify(animes);
    if (savedAnimes !== localStorage.getItem('animes')) {
      localStorage.setItem('animes', savedAnimes);
      setTop10(animes.filter(anime => anime.isTop10));
      setNewAnimes(animes.filter(anime => anime.isNew));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('top10', JSON.stringify(top10));
  }, [top10]);

  useEffect(() => {
    localStorage.setItem('newAnimes', JSON.stringify(newAnimes));
  }, [newAnimes]);

  const addToFavorites = (anime) => {
    if (!favorites.some(fav => fav.id === anime.id)) {
      setFavorites([...favorites, anime]);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favoritos</Link></li>
            <li><Link to="/top10">Top 10</Link></li>
            <li><Link to="/new">Novos</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AnimeList animes={animes} addToFavorites={addToFavorites} />} />
          <Route path="/anime/:id" element={<AnimeDetails animes={animes} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} />} />
          <Route path="/top10" element={<Top10List animes={top10} />} />
          <Route path="/new" element={<NewAnimes animes={newAnimes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
