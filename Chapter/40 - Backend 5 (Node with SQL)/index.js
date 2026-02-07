const { faker, th } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sigma_app',
  password: '@SHishl786k',
});

// Inserting New Data
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "john_doe", "john@gmail.com", "password123"];

// Inserting Multiple Records
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
    ["233", "emily_smith", "emily@gmail.com", "pass123"],
    ["673", "michael_johnson", "michael@gmail.com", "pass456"],
    ["521", "sarah_williams", "sarah@gmail.com", "pass789"]
];

try{
    connection.query(q, [users], (err, result) => {
        if (err) throw err;
        console.log(result); // RESULT IS AN ARRAY
    });
}catch(err){
    console.error(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// console.log(getRandomUser());

