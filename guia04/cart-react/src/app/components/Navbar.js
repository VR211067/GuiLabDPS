// src/app/components/Navbar.js
'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';

const Navbar = ({ showCart, setShowCart }) => {
  const cart = useSelector(state => state.cart);

  return (
    <nav className="navbar">
  <div className="logo-title">
    <img src="/images/logo.png" alt="Logo" className="logo-img" />
    <h1>Almacén Super Mario</h1>
  </div>
  <button className="cart-button" onClick={() => setShowCart(!showCart)}>
    🛒 Carrito ({cart.reduce((total, item) => total + item.quantity, 0)})
  </button>
</nav>

  );
};

export default Navbar;
