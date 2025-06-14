import { withAuth } from '../../lib/authMiddleware';

function handler(req, res) {
  res.status(200).json({ message: `Zugriff gewährt für ${req.user.sub} (Rolle: ${req.user.role})` });
}

export default withAuth(handler); // Kein Rollenparameter → nur Login nötig
