// src/app/page.js
import styles from "./page.module.css";
import Lenguajes from "@/components/Lenguajes";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <Lenguajes />
      </div>
    </main>
  );
}
