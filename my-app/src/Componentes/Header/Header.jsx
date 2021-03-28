import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Menu">
        <li className="NavMenu">
          <ul className = "NavMenuItem">Drinks</ul>
          <ul className = "NavMenuItem">Sobre Nós</ul>
          <ul className="LogoBonsDrinks">Bons Drinks</ul>
          <ul className = "NavMenuItem">Nosso Time</ul>
          <ul className = "NavMenuItem">Contato</ul>
        </li>
      </div>
    );
  }
}