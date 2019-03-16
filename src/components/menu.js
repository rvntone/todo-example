import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/ruta1">Ruta 1</Link>
        <Link to="/ruta2">Ruta 2</Link>
        <Link to="/ruta3">Ruta 3</Link>
        <Link to="/ruta4">Ruta 4</Link>
        <Link to="/ruta4/ruta5">Ruta 4/5</Link>
        <Link to="/ruta5">Ruta 5</Link>
        <Link to="/ruta6">Ruta 6</Link>
      </div>
    );
  }
}
