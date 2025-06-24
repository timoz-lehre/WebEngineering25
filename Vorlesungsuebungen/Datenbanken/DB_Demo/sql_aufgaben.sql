-- SQL Übungsaufgaben

-- 1. Zeige alle Nutzer
SELECT * FROM users;

-- 2. Zeige alle Produkte mit Preis > 30 €
SELECT * FROM products WHERE price > 30;

-- 3. Gesamtanzahl bestellter Produkte
SELECT SUM(quantity) FROM order_items;

-- 4. Umsatz pro Produkt
SELECT p.name, SUM(oi.quantity * p.price) AS umsatz
FROM order_items oi
JOIN products p ON oi.product_id = p.id
GROUP BY p.name;

-- 5. Bestellungen mit Kundennamen
SELECT o.id, u.name, o.order_date
FROM orders o
JOIN users u ON o.user_id = u.id;

-- 6. Produkte je Bestellung
SELECT oi.order_id, p.name, oi.quantity
FROM order_items oi
JOIN products p ON oi.product_id = p.id;

-- 7. Nutzer ohne Bestellung
SELECT name FROM users
WHERE id NOT IN (SELECT user_id FROM orders);
