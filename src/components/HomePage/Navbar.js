import React from 'react'
import logo from '../../logo.svg'
import "../../App.css";

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className='NavBar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navFlex nav-color">
          <img src={logo} className="App-logo" alt="logo" />

          <NavLink className="navbar-brand mx-x-5" to="#/"><h5>React Ecommerce Store</h5></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navPosition" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

            </ul>
            <NavLink className="cart-sup"to="/cart">
              <sub><AiOutlineShoppingCart /></sub>
              <span>0</span>
            </NavLink>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
