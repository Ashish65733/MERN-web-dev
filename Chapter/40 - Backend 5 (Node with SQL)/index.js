const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sigma_app',
  password: '@SHishl786k',
});

//------------------------- Inserting New Data --------------------------
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "john_doe", "john@gmail.com", "password123"];

//---------------------- Inserting Multiple Records ----------------------
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//     ["233", "emily_smith", "emily@gmail.com", "pass123"],
//     ["673", "michael_johnson", "michael@gmail.com", "pass456"],
//     ["521", "sarah_williams", "sarah@gmail.com", "pass789"]
// ];

//-------------------- Inserting bulk data using faker ---------------------
let getRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
  ];
};
// console.log(getRandomUser());

// let data = [];
// for(let i = 0; i<100; i++){
//     data.push(getRandomUser());
// }
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// try{
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result); // RESULT IS AN ARRAY
//     });
// }catch(err){
//     console.log(err);
// }

// connection.end();

// ------------------------------------------------------------------

// Home Route
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result[0]['count(*)']); 
      let count = result[0]['count(*)'];
      res.render("home", {count});
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
  // res.send("welcome to home page");
});

// Show route
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try{
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers", {users});
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

// Edit route
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit", {user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

// Update(DB) route
app.patch("/user/:id", (req, res) =>{
  let {id} = req.params;
  let {password : formPass, username : newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("Incorrect password. Cannot update username.");
      }else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
} );

// ADD new user route

app.get("/user/new", (req, res) => {
  res.render("new");
});

app.post("/user/new", (req, res) =>{
  let {username, email, password} = req.body;

  let id = faker.string.uuid();
  let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
  let users = [id, username, email, password];

  try{
    connection.query(q, users, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

// Delete user route
app.get("/user/:id/delete", (req, res) =>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete", {user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
} );

// Delete user from DB
app.delete("/user/:id", (req, res) =>{
  let {id} = req.params;
  let {password : formPass} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("Incorrect password. Cannot delete user.");
      }else{
        let q2 = `DELETE FROM user WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});


app.listen("8080", (req, res) => {
  console.log("Server is running on port 8080");
});