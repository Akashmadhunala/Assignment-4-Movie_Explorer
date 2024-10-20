import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav className={styles.navbar}>
      <h1>🎬 Movie Explorer</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
          className={styles.searchBar}
        />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
        <li>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
