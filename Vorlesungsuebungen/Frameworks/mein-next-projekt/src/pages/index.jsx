import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(0);

  const add = (anzahl) => {
    setCount(count + anzahl);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/">Index</Link>
        <Link href="/live">Live</Link>
        <Link href="/news">News</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      <div>
        <h1>Anzahl</h1>
        <div>{count}</div>
        <button onClick={() => add(1)}>mehr</button>
        <button onClick={() => add(-1)}>weniger</button>
      </div>
    </div>
  );
}
