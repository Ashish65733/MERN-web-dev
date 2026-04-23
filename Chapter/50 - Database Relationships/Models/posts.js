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
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData1 = async () => {
  let user1 = new User({
    username: "AshishVankar",
    email: "ashish123@gmail.com",
  });

  let post1 = new Post({
    content: "Hello Word!",
    likes: 7,
  });

  post1.user = user1;

  await user1.save();
  await post1.save();
};

// addData1();

const addData2 = async () => {
  let user = await User.findOne({ username: "AshishVankar" });

  let post2 = new Post({
    content: "Bye Bye :)",
    likes: 23,
  });

  post2.user = user;
  await post2.save();
};

// addData2();

const getData = async () => {
  let result = await Post.findOne({}).populate("user");
  console.log(result);
};

getData();
