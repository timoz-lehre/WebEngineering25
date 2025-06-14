import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password, role } = req.body;
  const users = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'users.json')));

  if (users.find(u => u.username === username)) {
    return res.status(409).json({ error: 'Benutzer existiert bereits' });
  }

  const hash = await bcrypt.hash(password, 10);
  users.push({ username, password: hash, role: role || 'user' });
  fs.writeFileSync(path.join(process.cwd(), 'users.json'), JSON.stringify(users, null, 2));

  res.status(201).json({ message: 'Benutzer registriert' });
}
