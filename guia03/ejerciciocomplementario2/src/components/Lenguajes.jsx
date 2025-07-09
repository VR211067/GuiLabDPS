"use client"
import React, { useState } from 'react';
import Modal from './Modal';
import data from '../data/lenguajes.json';

const Lenguajes = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid">
      {data.map((lang, i) => (
        <div key={i} className="card">
          <img src={lang.imagen} alt={lang.nombre} width="100" />
          <button onClick={() => setSelected(lang)}>Ver más</button>
        </div>
      ))}
      <Modal visible={!!selected} content={selected} close={() => setSelected(null)} />
    </div>
  );
};

export default Lenguajes;
