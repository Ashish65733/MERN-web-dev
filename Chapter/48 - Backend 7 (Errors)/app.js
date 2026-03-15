const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// Handling Errors :

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.get("/err", (req, res) => {
  abcd = abcd; // this gives error
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
  res.send("this is a random page.");
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is forbidden");
})

app.use((err, req, res, next) => {
  // console.log(err);
  // next(err);
  // console.log("---------- Error ----------");
  // res.send(err);
  let { status = 500, message } = err;
  res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//   console.log("---------- Error2 Middleware ----------");
//   next(err);
// });

// 404
app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(8080, () => {
  console.log("server listening to port 8080");
});
