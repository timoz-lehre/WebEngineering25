import jwt from 'jsonwebtoken';

export function withAuth(handler, requiredRole = null) {
  return async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token fehlt' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ error: 'Nicht autorisiert für diese Aktion' });
      }

      req.user = decoded; // Rolle & Username etc. verfügbar machen
      return handler(req, res);
    } catch (e) {
      return res.status(403).json({ error: 'Token ungültig oder abgelaufen' });
    }
  };
}