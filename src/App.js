// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';
import animes from './components/Data/animes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeList animes={animes} />} />
        <Route path="/anime/:name" element={<AnimeDetails animes={animes} />} />
      </Routes>
    </Router>
  );
}

export default App;
