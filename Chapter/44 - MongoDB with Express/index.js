const express = require("express");
let app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const path = require("path");
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1 = new Chat({
//   from: "neha",
//   to: "priya",
//   msg: "send me you exam sheets",
//   created_at: new Date(),
// });

// chat1.save().then((res) => {
//   console.log(res);
// });

// Index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find({});
  res.render("index", { chats });
});

// New chat route
app.get("/chats/new", (req, res) => {
  res.render("new");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let chat = new Chat({
    from,
    to,
    msg,
    created_at: new Date(),
  });

  chat
    .save()
    .then((result) => {
      res.redirect("/chats");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Edit chat route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit", { chat });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  await Chat.findByIdAndUpdate(
    id,
    { msg },
    { new: true },
    { runValidators: true },
  );
  res.redirect("/chats");
});

// Delete chat route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("root is working");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
