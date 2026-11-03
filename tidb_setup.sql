-- Run in TiDB Cloud SQL Editor (DIT205 lesson 05)
CREATE DATABASE IF NOT EXISTS dit205_db;
USE dit205_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  fullname VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- After registering a test user, check it was saved:
-- SELECT id, email, password, fullname FROM dit205_db.users;
