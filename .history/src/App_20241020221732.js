import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';
import WatchlistPage from './pages/WatchlistPage';
import './styles/global.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
