-- Run this in phpMyAdmin (SQL tab) if dit205_db / users don't exist yet
CREATE DATABASE IF NOT EXISTS dit205_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE dit205_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  fullname VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
