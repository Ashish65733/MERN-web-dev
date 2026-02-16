const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Ashish",
    to: "Rutul",
    msg: "hey, whats up!",
    created_at: new Date(),
  },
  {
    from: "Rutul",
    to: "Ashish",
    msg: "all good here",
    created_at: new Date(),
  },
  {
    from: "Khush",
    to: "Dhruv",
    msg: "how are you doing?",
    created_at: new Date(),
  },
  {
    from: "Dhruv",
    to: "Khush",
    msg: "I am fine, what about you?",
    created_at: new Date(),
  },
  {
    from: "Ashish",
    to: "Sadie",
    msg: "you are so cure!",
    created_at: new Date(),
  },
  {
    from: "Sadie",
    to: "Ashish",
    msg: "aww, thank you!",
    created_at: new Date(),
  }
];

Chat.insertMany(allChats);
