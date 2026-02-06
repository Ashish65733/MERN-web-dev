CREATE DATABASE college;
create database xyz_company;

DROP DATABASE xyz_company;

USE college;

CREATE TABLE student(
	rollno INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUE
(101, "adam", 12),
(102, "bob", 14);

SELECT * FROM student;

CREATE DATABASE IF NOT EXISTS instagram;
DROP DATABASE IF EXISTS xyz_company;

SHOW DATABASES;
SHOW TABLES;

USE instagram;

CREATE TABLE user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY (id)
);

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);


INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@gmail.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

SELECT * FROM user;


INSERT INTO post
(id, content, user_id)
VALUES
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Sigma", 3);

SELECT * FROM post;

