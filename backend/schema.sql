
-- Database Schema for Sabre Team Directory
-- Target: SQL Server, MySQL, or MariaDB

-- 1. Create the Employees Table
CREATE TABLE IF NOT EXISTS Employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Role VARCHAR(100) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Populate with Dummy Data (at least 5 records as per requirements)
INSERT INTO Employees (FirstName, LastName, Role) VALUES 
('John', 'Doe', 'Senior Software Engineer'),
('Jane', 'Smith', 'Technical Product Manager'),
('Michael', 'Brown', 'Cloud Architect'),
('Emily', 'Davis', 'UX/UI Specialist'),
('David', 'Wilson', 'Quality Assurance Lead'),
('Sarah', 'Miller', 'Security Operations Analyst');

-- 3. Verification Query
SELECT * FROM Employees;
