const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

const users = require("./routes/user");
const posts = require("./routes/post");

app.get("/getsignedcookies", (req, res) => {
  res.cookie("madeIn", "India", { signed: true });
  res.send("signed cookie sent");
});

app.get("/verify", (req, res) => {
  console.log("Normal cookies", req.cookies);
  console.log("Signed cookies", req.signedCookies);
  res.send("verified");
});

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "namaste");
  res.cookie("madeIn", "India");
  res.send("sent you some cookies!");
});

app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies;
  res.send(`Hi, ${name}`);
});

app.get("/", (req, res) => {
  console.dir(req.cookies);
  res.send("Hi, I am root!");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log("server is listening to 3000");
});
