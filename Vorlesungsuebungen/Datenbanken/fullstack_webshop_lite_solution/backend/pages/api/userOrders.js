import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  const { email } = req.query;

  try {
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        orders: {
          include: {
            order_items: {
              include: {
                products: true
              }
            }
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'Benutzer nicht gefunden' });
    }

    res.status(200).json({ orders: user.orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Serverfehler' });
  }
}
