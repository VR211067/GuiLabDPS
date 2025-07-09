import React from 'react';

const Slider = ({ planets, onSelect }) => {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', padding: '10px' }}>
      {planets.map((planet, index) => (
        <img
          key={index}
          src={planet.imagen}
          alt={planet.nombre}
          style={{ width: '150px', height: '150px', cursor: 'pointer', borderRadius: '10px' }}
          onClick={() => onSelect(planet)}
        />
      ))}
    </div>
  );
};

export default Slider;
