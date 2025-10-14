import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';

function Header() {
  return (
    <div id="header-main">
      <div id="Logo">
        <Link to="/">Mukul</Link>
      </div>

      {/* Normal menu (desktop) */}
      <ul id="ol">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/Skills">Skills</Link></li>
        <li><Link className="nav-link" to="/Projects">Projects</Link></li>
        <li><Link className="nav-link" to="/Contact">Contact Me</Link></li>
      </ul>

      {/* Dropdown menu (mobile) */}
      <div className="btn-group" id="header-dropdown">
        <button 
          type="button" 
          className="btn btn-secondary dropdown-toggle" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          <i className="bi bi-list"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><Link className="dropdown-item" to="/">Home</Link></li>
          <li><Link className="dropdown-item" to="/Skills">Skills</Link></li>
          <li><Link className="dropdown-item" to="/Projects">Projects</Link></li>
          <li><Link className="dropdown-item" to="/Contact">Contact Me</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
