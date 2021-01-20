import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/munte">Munte</NavLink></li>
        <li><NavLink to="/plajă">Plajă</NavLink></li>
        <li><NavLink to="/păsări">Păsări</NavLink></li>
        <li><NavLink to="/alimente">Alimente</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
