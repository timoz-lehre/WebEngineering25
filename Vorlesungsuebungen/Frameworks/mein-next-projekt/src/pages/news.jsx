import Link from "next/link";
import styles from "../styles/Home.module.css";


export async function getStaticProps() {
  // Simulierte Datenquelle
  const news = [
    { id: 1, title: "Neue Features in Next.js 14" },
    { id: 2, title: "React Server Components erklärt" },
    { id: 3, title: "Das ist ein Test"},
    { id: 4, title: "Lorem Ipsum"},
    { id: 5, title: "Lorem Ipsum"},
  ];

  return {
    props: {
      news,
      generatedAt: new Date().toISOString(),
    },
  };
}

export default function NewsPage({ news, generatedAt }) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/">Index</Link>
        <Link href="/live">Live</Link>
        <Link href="/news">News</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      <h1>News (statisch)</h1>
      <p><i>Diese Seite wurde gebaut am: {generatedAt}</i></p>
      <ul>
        {news.map((n) => (
          <li key={n.id}>{n.title}</li>
        ))}
      </ul>
    </div>
  );
}
