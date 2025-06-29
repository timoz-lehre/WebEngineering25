-- Datenbank und Tabellen anlegen
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS admins CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT,
    role TEXT DEFAULT 'user'
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender TEXT,
    recipient TEXT,
    message TEXT
);

CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    admin_user TEXT,
    secret TEXT
);

-- Daten einfügen
INSERT INTO users (username, password, email, role) VALUES
('alice', 'password123', 'alice@example.com', 'user'),
('bob', 'hunter2', 'bob@example.com', 'user'),
('charlie', 'letmein', 'charlie@example.com', 'user'),
('admin', 'admin123', 'admin@example.com', 'admin');

INSERT INTO messages (sender, recipient, message) VALUES
('alice', 'bob', 'Hey Bob, alles klar?'),
('bob', 'alice', 'Jo, wie geht''s?'),
('charlie', 'admin', 'Ich kann nichts sehen.'),
('admin', 'charlie', 'Du solltest das nicht sehen.');

INSERT INTO admins (admin_user, secret) VALUES
('admin', 'TOP_SECRET_KEY');
