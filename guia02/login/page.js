"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const iniciarSesion = () => {
    if (usuario === "Nemesis" && password === "Valencia3009") {
      setMensaje(`¡Bienvenido, ${usuario}!`);
    } else {
      setMensaje("Credenciales incorrectas");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Iniciar Sesión</h2>

        <input
          className={styles.loginInput}
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          className={styles.loginInput}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.loginButton} onClick={iniciarSesion}>
          Iniciar sesión
        </button>

        {mensaje && <p className={styles.loginMensaje}>{mensaje}</p>}
      </div>
    </main>
  );
}
