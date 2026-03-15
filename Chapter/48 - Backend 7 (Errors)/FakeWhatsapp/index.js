// This mini project we created in Chapter 44 - MongoDB with Express
// We learn about Handling Async Errors using this.

const express = require("express");
let app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

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
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
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
app.get(
  "/chats",
  asyncWrap(async (req, res) => {
    let chats = await Chat.find({});
    res.render("index", { chats });
  }),
);

// New chat route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found");
  res.render("new");
});

app.post(
  "/chats",
  asyncWrap(async (req, res) => {
    // try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from,
      to,
      msg,
      created_at: new Date(),
    });

    await newChat.save();
    res.redirect("/chats");
    // } catch (err) {
    //   next(err);
    // }
  }),
);

// Using wrapAsync (try-catch is bulky)
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// New added for this chapter : Show Route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    // try{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      // throw new ExpressError(404, "Chat not found");
      next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
    // } catch (err) {
    //   next(err);
    // }
  }),
);

// Edit chat route
app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res) => {
    // try{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit", { chat });
    // } catch (err) {
    //   next(err);
    // }
  }),
);

app.put(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    // try {
    let { id } = req.params;
    let { msg } = req.body;
    await Chat.findByIdAndUpdate(
      id,
      { msg },
      { new: true },
      { runValidators: true },
    );
    res.redirect("/chats");
    // } catch (err) {
    //   next(err);
    // }
  }),
);

// Delete chat route
app.delete(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    // try{
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
    // } catch (err) {
    //   next(err);
    // }
  }),
);

app.get("/", (req, res) => {
  res.send("root is working");
});

// Mongoose Errors
const handleValidationErr = (err) => {
  console.log("This was a validation error. Please follow rules");
  console.dir(err);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
