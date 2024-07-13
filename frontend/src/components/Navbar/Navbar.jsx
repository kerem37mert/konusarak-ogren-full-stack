import React from 'react';

// Styles
import "./Navbar.style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="title" to="/">Konuşarak Öğren Full Stack Proje</Link>
      <Link className="link" to="/favs">Favori Karakterler</Link>
    </div>
  );
}

export default Navbar;