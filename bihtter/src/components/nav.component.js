import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Bihtter</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signup" className="nav-link">Signup</Link>
          </li>
          <li className="navbar-item">
          <Link to="/main" className="nav-link">MainPage</Link>
          </li>
          <li className="navbar-item">
          <Link to="/users" className="nav-link">Follow Users</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}