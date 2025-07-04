import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.users.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json({ message: 'Registrierung erfolgreich', user: { name: user.name, email: user.email } });
    } catch (error) {
      res.status(400).json({ error: 'Fehler beim Anlegen des Nutzers oder E-Mail existiert bereits.' });
    }
  } else {
    res.status(405).end();
  }
}
