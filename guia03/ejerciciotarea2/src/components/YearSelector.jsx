import React from 'react';

const YearSelector = ({ años, añoSeleccionado, setAñoSeleccionado }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>Seleccionar año:</label>
      <select value={añoSeleccionado} onChange={e => setAñoSeleccionado(Number(e.target.value))}>
        {años.map(a => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;
