import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // CORS Preflight request abfangen und alle origin aktzeptieren
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Nutzer Login mit der Datenbank prüfen
    // Hashing des Passworts beachten
    // User informationen bei erfolgreichem Login zurücksenden
  } else {
    res.status(405).end();
  }
}
