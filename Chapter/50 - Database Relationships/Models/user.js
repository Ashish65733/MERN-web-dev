const mongoose = require("mongoose");
const { Schema } = mongoose;

Main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

async function Main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "Sadie Sink",
    addresses: [
      {
        location: "Brenham, Texas",
        city: "Texas",
      },
    ],
  });

  user1.addresses.push({
    location: "Manhattan, New York City, NY",
    city: "New York",
  });
  let result = await user1.save();
  console.log(result);
};

addUsers();
