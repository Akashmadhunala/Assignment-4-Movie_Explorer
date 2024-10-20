import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import WatchlistPage from './pages/WatchlistPage';
import Navbar from './components/Navbar';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
