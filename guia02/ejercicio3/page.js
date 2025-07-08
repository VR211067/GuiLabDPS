"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado('');
  };

  const manejarOperacion = (op) => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (isNaN(n1) || (op !== 'raiz' && isNaN(n2))) {
      setResultado("Ingresa valores válidos");
      return;
    }

    switch (op) {
      case 'sumar':
        setResultado(`Suma: ${n1 + n2}`);
        break;
      case 'restar':
        setResultado(`Resta: ${n1 - n2}`);
        break;
      case 'multiplicar':
        setResultado(`Multiplicación: ${n1 * n2}`);
        break;
      case 'dividir':
        setResultado(n2 === 0 ? "Error: División por cero" : `División: ${(n1 / n2).toFixed(2)}`);
        break;
      case 'potencia':
        setResultado(`Potencia: ${Math.pow(n1, n2)}`);
        break;
      case 'raiz':
        setResultado(`Raíz cuadrada de ${n1}: ${Math.sqrt(n1).toFixed(2)}`);
        break;
      default:
        break;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <h2 className={styles.titulo}>Calculadora</h2>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder="Ingresa el primer número"
          />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
            placeholder="Ingresa el segundo número"
          />
        </div>
        <div className={styles.botones}>
          <button className={styles.button} onClick={() => manejarOperacion('sumar')}>+</button>
          <button className={styles.button} onClick={() => manejarOperacion('restar')}>−</button>
          <button className={styles.button} onClick={() => manejarOperacion('multiplicar')}>×</button>
          <button className={styles.button} onClick={() => manejarOperacion('dividir')}>÷</button>
          <button className={styles.button} onClick={() => manejarOperacion('potencia')}>^</button>
          <button className={styles.button} onClick={() => manejarOperacion('raiz')}>√</button>
          <button className={styles.buttonClear} onClick={limpiar}>Limpiar</button>
        </div>
        {resultado && <p className={styles.resultado}>{resultado}</p>}
      </div>
    </main>
  );
}
