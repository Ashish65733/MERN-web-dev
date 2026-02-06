USE instagram; 

SELECT name, followers
FROM user
WHERE followers >= 200;

SELECT name, age, followers
FROM user
WHERE age > 15 AND followers > 200;

SELECT name, age, followers
FROM user
WHERE age > 15 OR followers > 200;

SELECT name, age, followers
FROM user
WHERE age BETWEEN 15 AND 17;

SELECT name, followers, email
FROM user
WHERE email IN ("donald@gmail.com", "bob123@gmail.com", "abc@gmail.com");

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "farah", "farah@gmail.com", 10000, 1000);

SELECT name, age, email
FROM user
WHERE age IN (14, 16);

SELECT name, age, email
FROM user
WHERE age NOT IN (14, 16);

SELECT name, age, email
FROM user
WHERE age > 14
LIMIT 2;

SELECT name, age, followers
FROM user
ORDER BY followers ASC; 


SELECT max(followers)
FROM user;

SELECT count(age)
FROM user
WHERE age = 14;

SELECT age, max(followers)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;


SET SQL_SAFE_UPDATES = 0;

UPDATE user
SET followers = 600
WHERE age = 16;

DELETE FROM user
WHERE age = 15;

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

ALTER TABLE user
DROP COLUMN age;

SELECT * FROM user;

ALTER TABLE user
RENAME TO instaUser;

ALTER TABLE instaUser
CHANGE COLUMN followers subs INT DEFAULT 0;

ALTER TABLE instaUser
MODIFY subs INT DEFAULT 5;

INSERT INTO instaUser
(id, name, email, following)
VALUES
(7, "gemini", "gem@yahoo.in", 120);

DROP TABLE post;

TRUNCATE TABLE instaUser;

SELECT * FROM instaUser;

DROP TABLE instaUser;
