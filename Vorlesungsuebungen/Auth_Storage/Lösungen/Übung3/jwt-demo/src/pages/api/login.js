import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'users.json')));
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ error: 'Benutzer nicht gefunden' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Passwort falsch' });

  const token = jwt.sign(
    { sub: username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  res.status(200).json({ token });
}
