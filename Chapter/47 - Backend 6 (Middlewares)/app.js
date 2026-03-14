const express = require("express");
const app = express();

/*
app.use((req, res, next) => {
  //   let { query } = req.query;
  //   console.log(query);
  //   res.send("middleware finished");
  console.log("Hi, I am 1st middleware");
  next(); // return next(); -> This will ignore code after this. (No code after next() is preferred.)
  console.log("abc");
});

app.use((req, res, next) => {
  console.log("Hi, I am 2nd middleware");
  next();
});
*/

// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

/*
// API TOken as Query String :
app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
});

app.get("/api", (req, res) => {
  res.send("Data");
});

// Multiple Middlewares :
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
}

app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

*/

// Handling Errors :   This topic will be studied in detil in the next chapter (CH 48 : Backend 7 (Errors))
app.get("wrong", (req, res) => {
    abcd = abcd; // this gives error
})

app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
  res.send("this is a random page.");
});

// 404
app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(8080, () => {
  console.log("server listening to port 8080");
});
