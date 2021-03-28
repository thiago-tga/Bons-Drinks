import React from "react";
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = ()=> {
    return (
      <header className="Menu">
        <nav className="NavMenu">
          <Link to="drinks" className = "NavMenuItem">Drinks</Link>
          <Link to="sobre" className = "NavMenuItem">Sobre Nós</Link>
          <Link to="/" className="LogoBonsDrinks">Bons Drinks</Link>
          <Link to="time" className = "NavMenuItem">Nosso Time</Link>
          <Link to="contato" className = "NavMenuItem">Contato</Link>
        </nav>
      </header>
    )
  };
export default Header;
