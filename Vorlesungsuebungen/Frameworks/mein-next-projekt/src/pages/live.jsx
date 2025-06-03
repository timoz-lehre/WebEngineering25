import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const now = new Date().toISOString();
  const zufallszahl = Math.floor(Math.random() * 100);

  return {
    props: {
      now,
      zufallszahl,
    },
  };
}

export default function LivePage({ now, zufallszahl }) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/">Index</Link>
        <Link href="/live">Live</Link>
        <Link href="/news">News</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      <h1>Live-Daten (SSR)</h1>
      <p>Diese Seite wurde <b>live</b> generiert am: {now}</p>
      <p>Zufallszahl: {zufallszahl}</p>
    </div>
  );
}
