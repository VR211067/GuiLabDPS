import React, { useState } from 'react';

const PlanetTabs = ({ planet }) => {
  const [active, setActive] = useState('masa');

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{planet.nombre}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setActive('masa')}>Masa</button>
        <button onClick={() => setActive('distancia')}>Distancia</button>
        <button onClick={() => setActive('temperatura')}>Temperatura</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        {active === 'masa' && <p>Masa: {planet.masa}</p>}
        {active === 'distancia' && <p>Distancia al Sol: {planet.distancia}</p>}
        {active === 'temperatura' && <p>Temperatura: {planet.temperatura}</p>}
      </div>
    </div>
  );
};

export default PlanetTabs;
