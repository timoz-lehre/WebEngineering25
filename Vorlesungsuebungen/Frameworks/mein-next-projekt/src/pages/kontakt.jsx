import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";



export default function KontaktFormular() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/kontakte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unbekannter Fehler");
      }

      setMessage("" + data.message);
      setName("");
      setEmail("");
    } catch (err) {
      setMessage("Fehler: " + err.message);
    }
  };

  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/">Index</Link>
        <Link href="/live">Live</Link>
        <Link href="/news">News</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      <h1>Kontaktformular</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Senden</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
