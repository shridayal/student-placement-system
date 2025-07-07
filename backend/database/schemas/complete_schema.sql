-- Student Placement Management System Database Schema
-- Version: 1.0
-- Created: $(date)

CREATE DATABASE IF NOT EXISTS student_placement_system 
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE student_placement_system;

-- Users table (master table)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('STUDENT', 'COMPANY', 'STAFF', 'ADMIN') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add more tables here...
