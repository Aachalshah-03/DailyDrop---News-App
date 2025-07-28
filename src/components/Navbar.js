// Navbar.js
import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode,}) => {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">DailyDrop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/Business">Business</Link></li>
            <li><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
            <li><Link className="nav-link" to="/General">General</Link></li>
            <li><Link className="nav-link" to="/Health">Health</Link></li>
            <li><Link className="nav-link" to="/Science">Science</Link></li>
            <li><Link className="nav-link" to="/Sports">Sports</Link></li>
            <li><Link className="nav-link" to="/Technology">Technology</Link></li>
          </ul>

          {/* Bootstrap switch for dark mode */}
          <div className={`form-check form-switch ${darkMode ? 'text-light' : 'text-dark'} mx-2`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              onChange={setDarkMode}
              checked={darkMode}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              {darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
            </label>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
