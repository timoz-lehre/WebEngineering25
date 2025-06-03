export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    // Validierung
    if (!name || !email) {
      return res.status(400).json({ error: "Name und E-Mail sind erforderlich" });
    }

    // Erfolgreiche Antwort simulieren
    return res.status(201).json({ message: "Kontakt erfolgreich gespeichert", name, email });
  }

  // Fehler bei falscher Methode
  res.status(405).json({ error: "Method not allowed" });
}
