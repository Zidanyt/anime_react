import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';
import Favorites from './components/Favorites';
import Top10List from './components/Top10List';
import NewAnimes from './components/NewAnimes';
import animesData from './components/Data/animes';
import animeIcon from './img/iconeAnime.jpg';
import desenhosIcon from './img/iconeDesenho.jpg';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const initialTop10 = JSON.parse(localStorage.getItem('top10')) || animesData.filter(anime => anime.isTop10);
  const initialNewAnimes = JSON.parse(localStorage.getItem('newAnimes')) || animesData.filter(anime => anime.isNew);
  const initialAnimes = JSON.parse(localStorage.getItem('animes')) || animesData;

  const [animes, setAnimes] = useState(initialAnimes);
  const [favorites, setFavorites] = useState(initialFavorites);
  const [top10] = useState(initialTop10);
  const [newAnimes] = useState(initialNewAnimes);
  const [showDesenhos, setShowDesenhos] = useState(localStorage.getItem('showDesenhos') === 'true');

  useEffect(() => {
    localStorage.setItem('animes', JSON.stringify(animes));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('top10', JSON.stringify(top10));
    localStorage.setItem('newAnimes', JSON.stringify(newAnimes));
    localStorage.setItem('showDesenhos', showDesenhos);
  }, [animes, favorites, top10, newAnimes, showDesenhos]);

  const addToFavorites = (item) => {
    if (!favorites.some(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const updateRating = (itemId, rating) => {
    setAnimes(animes.map(item => (item.id === itemId ? { ...item, rating } : item)));
  };

  const toggleShowDesenhos = () => {
    setShowDesenhos(!showDesenhos);
  };

  const filteredAnimes = showDesenhos ? animes.filter(anime => anime.desenhos) : animes.filter(anime => !anime.desenhos);
  const filteredFavorites = showDesenhos ? favorites.filter(anime => anime.desenhos) : favorites.filter(anime => !anime.desenhos);
  const filteredTop10 = showDesenhos ? top10.filter(anime => anime.desenhos) : top10.filter(anime => !anime.desenhos);
  const filteredNewAnimes = showDesenhos ? newAnimes.filter(anime => anime.desenhos) : newAnimes.filter(anime => !anime.desenhos);

  const location = useLocation();
  const isDetailPage = location.pathname.includes('/anime/');

  return (
    <div>
      {!isDetailPage && (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favoritos</Link></li>
            <li><Link to="/top10">Top 10</Link></li>
            <li><Link to="/new">Novos</Link></li>
            <li>
              <button onClick={toggleShowDesenhos}>
                <img src={showDesenhos ? animeIcon : desenhosIcon} alt="Toggle" style={{ width: '30px', height: '30px' }} />
                {showDesenhos ? ' Mostrar Animes' : ' Mostrar Desenhos'}
              </button>
            </li>
          </ul>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<AnimeList title={showDesenhos ? 'Lista de Desenhos' : 'Lista de Animes'} animes={filteredAnimes} addToFavorites={addToFavorites} updateRating={updateRating} />} />
        <Route path="/anime/:id" element={<AnimeDetails animes={filteredAnimes} />} />
        <Route path="/favorites" element={<Favorites favorites={filteredFavorites} title={showDesenhos ? 'Desenhos favoritos' : 'Animes favoritos'} />} />
        <Route path="/top10" element={<Top10List animes={filteredTop10} title={showDesenhos ? 'top 10 Desenhos' : 'top 10 Animes'} />} />
        <Route path="/new" element={<NewAnimes animes={filteredNewAnimes} title={showDesenhos ? 'novos Desenhos' : 'novos Animes'} />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
