import React from 'react';

const Product = ({ product, index, deleteProduct }) => {
  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    margin: '8px 0',
    padding: '8px',
    backgroundColor: 'rgb(248, 2, 174)',
    borderRadius: '6px'
  };

  const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    fontWeight: 'bold'
  };

  return (
    <div style={itemStyle}>
      <span>{product.nombre}</span>
      <span>{product.marca}</span>
      <span>{product.cantidad} uds</span>
      <span>${product.precio}</span>
      <button style={buttonStyle} onClick={() => deleteProduct(index)}>X</button>
    </div>
  );
};

export default Product;
