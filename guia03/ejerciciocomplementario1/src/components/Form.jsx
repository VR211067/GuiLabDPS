"use client"
import React, { useState } from 'react';
import Product from './Product';

const Form = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ nombre: '', marca: '', cantidad: '', precio: '' });

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleClick = e => {
    e.preventDefault();
    if (!product.nombre || !product.marca || !product.cantidad || !product.precio) return;
    setProducts([...products, product]);
    setProduct({ nombre: '', marca: '', cantidad: '', precio: '' });
  };

  const deleteProduct = index => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const total = products.reduce((sum, p) => sum + (parseFloat(p.precio) * parseInt(p.cantidad)), 0);

  return (
    <div style={{ padding: '20px' }}>
      <form>
        <input name="nombre" placeholder="Nombre" onChange={handleChange} value={product.nombre} />
        <input name="marca" placeholder="Marca" onChange={handleChange} value={product.marca} />
        <input name="cantidad" type="number" placeholder="Cantidad" onChange={handleChange} value={product.cantidad} />
        <input name="precio" type="number" placeholder="Precio" onChange={handleChange} value={product.precio} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      <h2>Total: ${total.toFixed(2)}</h2>
      {products.map((p, i) => (
        <Product key={i} product={p} index={i} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
};

export default Form;

