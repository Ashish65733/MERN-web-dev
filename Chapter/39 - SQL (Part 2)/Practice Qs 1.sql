CREATE DATABASE college;

USE college;

CREATE TABLE Teacher (
	id INT PRIMARY KEY,
    name VARCHAR(50),
    subject VARCHAR(50),
    salary INT
);

INSERT INTO Teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM Teacher
WHERE salary > 50000;

ALTER TABLE Teacher
CHANGE COLUMN salary ctc INT;

UPDATE Teacher
SET ctc = ctc + ctc * 0.25;

ALTER TABLE Teacher
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

ALTER TABLE Teacher
DROP COLUMN ctc;

SELECT * FROM Teacher;