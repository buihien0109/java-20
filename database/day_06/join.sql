-- create database day_06;

-- use day_06;

-- CREATE TABLE Departments (
--    department_id INT PRIMARY KEY auto_increment,
--    department_name VARCHAR(50)
-- );

-- CREATE TABLE Employees (
--    employee_id INT PRIMARY KEY auto_increment,
--    employee_name VARCHAR(50),
--    department_id INT,
--    salary DECIMAL(10,2),
--    FOREIGN KEY (department_id) REFERENCES Departments (department_id)
-- );

-- INSERT INTO Departments (department_id, department_name)
-- VALUES (1, 'Sales'),
--        (2, 'Marketing');

-- INSERT INTO Employees (employee_id, employee_name, department_id, salary)
-- VALUES (1, 'John Smith', 1, 5000),
--        (2, 'Lisa Johnson', 1, 4500),
--        (3, 'Michael Miller', 2, 6000),
--        (4, 'Emily Davis', 2, 5500);

SELECT e.employee_name, d.department_name, e.salary
FROM Employees e
INNER JOIN Departments d ON e.department_id = d.department_id;

