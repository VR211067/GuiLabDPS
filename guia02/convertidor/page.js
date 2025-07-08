"use client";
import { useState } from "react";
import styles from "./page.module.css"; // o el nombre que uses

export default function Convertidor() {
  const [temp, setTemp] = useState('');
  const [unidad, setUnidad] = useState('C');
  const [resultado, setResultado] = useState('');

  const convertir = () => {
    const num = parseFloat(temp);
    if (isNaN(num)) {
      setResultado("Ingresa una temperatura válida");
      return;
    }

    if (unidad === 'C') {
      setResultado(`${num}°C = ${(num * 9/5 + 32).toFixed(2)}°F`);
    } else {
      setResultado(`${num}°F = ${((num - 32) * 5/9).toFixed(2)}°C`);
    }
  };

  return (
    <div className={styles.convertidorWrapper}>
      <div className={styles.convertidorCard}>
        <h2 className={styles.convertidorTitle}>Convertidor de Temperatura</h2>

        <input
          type="number"
          className={styles.convertidorInput}
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          placeholder="Ingresa la temperatura"
        />

        <select
          className={styles.convertidorSelect}
          value={unidad}
          onChange={(e) => setUnidad(e.target.value)}
        >
          <option value="C">Celsius a Fahrenheit</option>
          <option value="F">Fahrenheit a Celsius</option>
        </select>

        <button className={styles.convertidorButton} onClick={convertir}>
          Convertir
        </button>

        {resultado && (
          <p className={styles.convertidorResultado}>{resultado}</p>
        )}
      </div>
    </div>
  );
}
