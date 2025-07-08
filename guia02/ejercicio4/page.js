"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero, setNumero] = useState(1);
  const [limite, setLimite] = useState(10);
  const [resultado, setResultado] = useState([]);

  const generarTabla = () => {
    const nuevaTabla = [];
    for (let i = 1; i <= limite; i++) {
      nuevaTabla.push(`${numero} × ${i} = ${numero * i}`);
    }
    setResultado(nuevaTabla);
  };

  return (
    <main className={styles.main}>
      <div className={styles.tablaCard}>
        <h2 className={styles.title}>Tabla de Multiplicar</h2>

        <label className={styles.label}>
          Número base:
          <input
            type="number"
            className={styles.input}
            value={numero}
            onChange={(e) => setNumero(parseInt(e.target.value))}
          />
        </label>

        <label className={styles.label}>
          Límite:
          <input
            type="number"
            className={styles.input}
            value={limite}
            onChange={(e) => setLimite(parseInt(e.target.value))}
          />
        </label>

        <button className={styles.button} onClick={generarTabla}>
          Generar Tabla
        </button>

        {resultado.length > 0 && (
          <>
            <hr className={styles.hr} />
            <h3>Resultado</h3>
            <ul className={styles.resultadoLista}>
              {resultado.map((linea, index) => (
                <li key={index} className={styles.resultadoItem}>
                  {linea}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
