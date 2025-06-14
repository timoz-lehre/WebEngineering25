import { withAuth } from '../../lib/authMiddleware';

function handler(req, res) {
  res.status(200).json({ message: `Admin-Zugriff gewährt für ${req.user.sub}` });
}

export default withAuth(handler, 'admin'); // Nur Admins erlaubt
