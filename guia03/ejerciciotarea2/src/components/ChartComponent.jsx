'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartComponent = ({ ventas }) => {
  const data = {
    labels: ventas.map(v => v.mes),
    datasets: [
      {
        label: 'Ventas ($)',
        data: ventas.map(v => v.monto),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
