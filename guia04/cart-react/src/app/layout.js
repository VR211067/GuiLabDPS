// src/app/layout.js
'use client';

import { Provider } from 'react-redux';
import store from '../app/redux/store';
import Navbar from '../app/components/Navbar';
import CartDetail from '../app/components/cartDetail';
import '../app/styles/globals.css';
import '../app/styles/cart-detail.css';

import React, { useState } from 'react';

export default function RootLayout({ children }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <html lang="es">
      <body>
        <Provider store={store}>
          <Navbar showCart={showCart} setShowCart={setShowCart} />
          
          {/* Aquí aplicamos una clase condicional */}
          <div className={`main-content ${showCart ? 'cart-open' : ''}`}>
            {children}
          </div>

          {showCart && <CartDetail />}
        </Provider>
      </body>
    </html>
  );
}
