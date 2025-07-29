// src/app/components/CartDetail.js
'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import '../styles/cart-detail.css';

const CartDetail = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleCantidadChange = (id, value) => {
    const cantidad = parseInt(value);
    if (cantidad > 0) {
      dispatch(updateQuantity({ id, quantity: cantidad }));
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-detail">
      <h2>Carrito</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item-grid">
          <img src={item.image} alt={item.title} className="cart-image" />
          
          <div className="cart-info">
            <p className="product-title">{item.title}</p>
            <p className="subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>

          <div className="cart-actions">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleCantidadChange(item.id, e.target.value)}
              className="qty-input"
            />
            <button
              className="delete-btn-icon"
              onClick={() => dispatch(removeFromCart(item.id))}
              title="Eliminar"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
      <h3>Total a Pagar: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartDetail;
