'use client';
import React, { useState } from 'react';
import ventasData from '../data/ventas.json';
import ChartComponent from '../components/ChartComponent';
import YearSelector from '../components/YearSelector';

export default function HomePage() {
  const años = [...new Set(ventasData.map(v => v.año))];
  const [añoSeleccionado, setAñoSeleccionado] = useState(años[0]);

  const ventasFiltradas = ventasData.filter(v => v.año === añoSeleccionado);

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Ventas por Año</h1>
      <YearSelector
        años={años}
        añoSeleccionado={añoSeleccionado}
        setAñoSeleccionado={setAñoSeleccionado}
      />
      <ChartComponent ventas={ventasFiltradas} />
    </main>
  );
}
